
Feature: Payroll System Payslips
  I should be able to generate and verify a new payslip for employees

  Scenario: Generate payslip for a new employee
    When I generate a payslip for a new employee
    Then I should see the payslip summary page


  Scenario: Pay salary successfully from payslip summary page
    When I generate a payslip for a new employee
    Then I should see the payslip summary page
    Then I click on Pay button
    




 

    