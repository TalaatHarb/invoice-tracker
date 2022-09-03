Feature: Test Invoice Generator
  Background:
    Given browser navigates to Invoice Generator Website and login as HR and navigates to employeeList to check settings button

  Scenario: Verify Settings button is working correctly
    When User clicks on settings button
    Then The settings list is shown to choose the columns you want to see
  Scenario: User clicks on toggle all button
    When user clicks on toggle all to deactivate it
    Then toggle all checkbox is not active
  Scenario: Verify that when the user clicks on Selection the column should be shown in the list
    When The user clicks on Selection
    Then The Selection column is shown
  Scenario: Verify that when the user clicks on Employee ID the column should be shown in the list
    When The user clicks on Employee ID
    Then The employee ID column is shown

  Scenario: Verify that when the user clicks on National ID the column should be shown in the list
    When The user clicks on National ID
    Then The National ID column is shown

  Scenario: Verify that when the user clicks on English Name the column should be shown in the list
    When The user clicks on English Name
    Then The English Name column is shown

  Scenario: Verify that when the user clicks on Arabic Name the column should be shown in the list
    When The user clicks on Arabic Name
    Then The Arabic Name column is shown

  Scenario: Verify that when the user clicks on English Address the column should be shown in the list
    When The user clicks on English Address
    Then The English Address column is shown

  Scenario: Verify that when the user clicks on Arabic Address the column should be shown in the list
    When The user clicks on Arabic Address
    Then The Arabic Address column is shown

  Scenario: Verify that when the user clicks on Arabic Address the column should be shown in the list
    When The user clicks on Arabic Address
    Then The Arabic Address column is shown

  Scenario: Verify that when the user clicks on Job Title the column should be shown in the list
    When The user clicks on Job Title
    Then The Job Title column is shown

  Scenario: Verify that when the user clicks on Joining Date the column should be shown in the list
    When The user clicks on Joining Date
    Then The Joining Date column is shown

  Scenario: Verify that when the user clicks on End Date the column should be shown in the list
    When The user clicks on End Date
    Then The End Date column is shown

  Scenario: Verify that when the user clicks on Allowed balance the column should be shown in the list
    When The user clicks on Allowed balance
    Then The Allowed balance column is shown

  Scenario: Verify that when the user clicks on Remaining balance the column should be shown in the list
    When The user clicks on Remaining balance
    Then The Remaining balance column is shown

  Scenario: Verify that when the user clicks on End Date the column should be shown in the list
    When The user clicks on End Date
    Then The End Date column is shown

  Scenario: Verify that when the user clicks on Billable the column should be shown in the list
    When The user clicks on Billable
    Then The Billable column is shown

  Scenario: Verify that when the user clicks on isDisabled the column should be shown in the list
    When The user clicks on isDisabled
    Then The isDisabled column is shown

  Scenario: Verify that when the user clicks on Teams the column should be shown in the list
    When The user clicks on Teams
    Then The Teams column is shown

  Scenario: Verify that when the user clicks on FullTime the column should be shown in the list
    When The user clicks on FullTime
    Then The FullTime column is shown
  Scenario: Verify that when the user clicks on View employess the column should be shown in the list
    When The user clicks on View employess
    Then The View employess column is shown
