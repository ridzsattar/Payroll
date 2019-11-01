
Feature: Payroll System Payslips
  I should be able to generate and verify a new payslip for employees


     Scenario: Generate payslip for a new employee
     When I enter new employee details to generate payslip
     Then I should see the payslip summary page

     Scenario: Pay salary successfully from payslip summary page
     When I enter new employee details to generate payslip
     Then I should see the payslip summary page
     Then I click on Pay button
    
  
     Scenario: Verify gross income from payslip summary page
     When I enter new employee details to generate payslip
     Then I should see the payslip summary page
     Then I verify gross income


     Scenario: Verify income tax from payslip summary page
     When I enter new employee details to generate payslip
     Then I should see the payslip summary page
     Then I verify income tax


     Scenario: Verify net income value from payslip summary page
     When I enter new employee details to generate payslip
     Then I should see the payslip summary page
     Then I verify net income

     Scenario: Verify super value from payslip summary page
     When I enter new employee details to generate payslip
     Then I should see the payslip summary page
     Then I verify super

     

    
