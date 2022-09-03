Feature: Using Filter comBox to search for employee using different data types
  Background:
    Given browser navigates to Invoice Generator Website and login as HR and navigates to employeeList
    Scenario : Verify that when HR decides to filter employeesList with employee ID using comBox is working
      When User clicks on employee ID from comBox and type employee ID in searchbox
      Then Table contains the employee with the same ID
    Scenario:  Verify that when HR decides to filter employeesList with employee Name using combox is working
      When User clicks on English Name from comBox and type employee Name in searchbox
      Then Table contains the employee with the same Name


    Scenario:  Verify that when HR decides to filter employeesList with job title using combox is working
      When User clicks on job title from comBox and type job title in searchbox
      Then Table contains the employee with the same job title

    Scenario:  Verify that when HR decides to filter employeesList with joining Date using combox is working
      When User clicks on joining date from comBox and type joining Date in searchbox
      Then Table contains the employee with the same joining Date

    Scenario:  Verify that when HR decides to filter employeesList with end Date using combox is working
    When User clicks on end date from comBox and type end Date in searchbox
    Then Table contains the employee with the same end Date


    Scenario :  Verify that when HR decides to filter employeesList with Allowed balance using combox is working
    When User clicks on allowed balance from comBox and type Allowed balance in searchbox
    Then Table contains the employee with the same Allowed balance


    Scenario :  Verify that when HR decides to filter employeesList with remaining balance using combox is working
    When User clicks on remaining balance from comBox and type remaining balance in searchbox
    Then Table contains the employee with the same remaining balance


    Scenario :  Verify that when HR decides to filter employeesList with Teams using combox is working
    When User clicks on Teams from comBox and type Teams in searchbox
    Then Table contains the employee with the same Teams

    Scenario: Verify that Team button redirects to the employees' list working in the team
      When User clicks on team from table
      Then Website opens contains employees working in that team


