const expect = require('chai').expect;

module.exports = function () {

    this.When(/^I generate a payslip for a new employee$/, function () {
        return helpers.loadPage(page.payroll.url)
            .then( () => {
                return page.payroll.enterNewEmployeeDetails("John", "Snow", "81900", "9")
        })
    });

    this.Then(/^I should see the payslip summary page$/, function () {
        return driver.wait(until.elementsLocated(page.payslip.elements.payslipForm), 10000)
            .then( () => {
                return page.payslip.getEmployeeName()
                .then(t => {
                    console.log('applying assertion on name');
                    expect(t).to.be.eql("John Snow");
                })
            })
            .then( () => {
                return page.payslip.getEmployeeAnnualIncome()
                    .then(t => {
                        console.log('applying assertion on annual income');
                        expect(t).to.be.eql("$81,900.00");
                })
            })
            .then( () => {
                return page.payslip.getEmployeeSuper()
                    .then(t => {
                        console.log('applying assertion on Super');
                        expect(t).to.be.eql("$614.00");
                })
            });
    });


    


/*
    this.Then(/^I should see the payslip summary page$/, function () {
        return driver.wait(until.elementsLocated(page.payslip.elements.payslipForm), 10000)
            .then( () => {
                driver.findElement(page.payslip.elements.employeeName).getText()
                .then(t => {
                    expect(t).to.be.eql("John Snow");
                })
            })
         /*   .then( () => {
                driver.findElement(page.payslip.elements.annualIncome).getText()
                    .then(t => {
                        expect(t).to.be.eql("$81,900.00");
                })
            })
            .then( () => {
                driver.findElement(page.payslip.elements.super).getText()
                    .then(t => {
                        expect(t).to.be.eql("$614.00");
                })
            });
    }); */
/*Rida work

    this.Then(/^I click on Pay button$/, function () {
        return driver.wait(until.elementsLocated(page.payslip.elements.payslipForm), 10000)
            .then( () => {
                driver.findElement(page.payslip).getText()
                .then(t => {
                    expect(t).to.be.eql("John Snow");
                })
            });
           
    });

  //  And When I click on Pay button
   // Then I should verify record in payments section


*/

}; 