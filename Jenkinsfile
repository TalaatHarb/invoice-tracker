def nodeInstallation = 'NodeJS'
def mavenInstallation = 'Maven'

timestamps {
    node {
        stage ('Checkout') {
            checkout(
                [
                    $class: 'GitSCM',
                    branches:[[name:'**']],
                    doGenerateSubmoduleConfigurations:false,
                    extensions:[],
                    submoduleCfg:[],
                    userRemoteConfigs:[[credentialsId:'', url:'https://github.com/TalaatHarb/invoice-tracker']],
                ]
            )
        } // stage ('Checkout')


        stage('typescript-setup') {
            env.NODEJS_HOME = "${tool nodeInstallation}"
            // on linux / mac
            env.PATH = "${env.NODEJS_HOME}/bin:${env.PATH}"
            sh 'npm --version && node -v'
        } // stage('typescript-setup')

        stage ('typescript-test') {
            sh '''
                cd invoice-tracker-frontend
                npm install
                npm run test
            '''
        } // stage('typescript-test')

        stage('java-test') {
            withMaven(maven : mavenInstallation) {
                // Run the maven build
                sh '''
                    cd invoice-tracker-backend
                    mvn clean compile verify package --file pom.xml
                '''
                step( [ $class:'JacocoPublisher', ] )
            } // withMaven
        } // stage('java-test')
    } // node
} // timestamps