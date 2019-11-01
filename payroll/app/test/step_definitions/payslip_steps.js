const expect = require('chai').expect;


module.exports = function () {

    var firstName = page.payroll.generateUniqueName();
    var lastName = page.payroll.generateUniqueName();
    this.When(/^I enter new employee details to generate payslip$/, function () {
        return helpers.loadPage(page.payroll.url)
            .then(() => {
                return page.payroll.enterNewEmployeeDetails(firstName, lastName, "81900", "9")
            })
    });

    this.Then(/^I should see the payslip summary page$/, function () {
        return driver.wait(until.elementsLocated(page.payslip.elements.payslipForm), 10000)
            .then(() => {
                return page.payslip.getEmployeeName()
                    .then(t => {
                        console.log('applying assertion on name');
                        expect(t).to.be.eql(firstName +' '+ lastName);
                    })
            })
            .then(() => {
                return page.payslip.getEmployeeAnnualIncome()
                    .then(t => {
                        console.log('applying assertion on annual income');
                        expect(t).to.be.eql("$81,900.00");
                    })
            })
    });





    this.Then(/^I click on Pay button$/, function () {
        return driver.wait(until.elementsLocated(page.payslip.elements.payslipForm), 10000)
            .then(() => {
                page.payslip.clickOnPayButton();
            });
    });



    this.Then(/^I verify gross income$/, function () {
        driver.wait(until.elementsLocated(page.payslip.elements.payslipForm), 10000)
            .then(() => {
                return page.payslip.getEmployeeGrossIncome()
                    .then(t => {
                        console.log(t);
                        expect(t).to.be.eql('$6,825.00');
                    })
            });
    });


    this.Then(/^I verify income tax$/, function () {
        driver.wait(until.elementsLocated(page.payslip.elements.payslipForm), 10000)
            .then(() => {
                return page.payslip.getEmployeeIncomeTax()
                    .then(t => {
                        console.log(t);
                        expect(t).to.be.eql('$1,521.00');
                    })
            });
    });


    this.Then(/^I verify net income$/, function () {
        driver.wait(until.elementsLocated(page.payslip.elements.payslipForm), 10000)
            .then(() => {
                return page.payslip.getEmployeeNetIncome()
                    .then(t => {
                        console.log(t);
                        expect(t).to.be.eql('$5,304.00');
                    })
            });
    });


    this.Then(/^I verify super$/, function () {
        driver.wait(until.elementsLocated(page.payslip.elements.payslipForm), 10000)
            .then(() => {
                return page.payslip.getEmployeeSuper()
                    .then(t => {
                        console.log(t);
                        expect(t).to.be.eql('$614.00');
                    })
            });
    });



    this.Then(/^I verify pay$/, function () {
        driver.wait(until.elementsLocated(page.payslip.elements.payslipForm), 10000)
            .then(() => {
                return page.payslip.getEmployeePay()
                    .then(t => {
                        console.log(t);
                        expect(t).to.be.eql('$4,690.00');
                    })
            });
    });







};


