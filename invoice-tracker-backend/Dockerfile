FROM maven:3.8.6-openjdk-18-slim as maven
WORKDIR /usr/src/app
COPY pom.xml .
RUN mvn dependency:go-offline > /dev/null
COPY ./src ./src
RUN mvn -DskipTests clean compile package > /dev/null

FROM openjdk:18-jdk-slim
COPY --from=maven /usr/src/app/target/invoice-tracker-backend-0.0.1-SNAPSHOT.jar app.jar
CMD ["java", "-jar", "app.jar"]
