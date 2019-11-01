module.exports = {
    elements: {
        payslipForm: by.name('payslipForm'),
        employeeName: by.css('form h4'),
        annualIncome: by.xpath('//td[contains(text(), "Annual Income")]/following-sibling::td'),
        super: by.xpath('//td[contains(text(), "Super")]/following-sibling::td'),
        payButton: by.css('button.btn-primary'),
        grossIncome: by.xpath('//td[contains(text(),"Gross Income")]/following-sibling::td'),
        incomeTax: by.xpath('//td[contains(text(),"Income Tax")]/following-sibling::td'),
        netIncome: by.xpath('//td[contains(text(),"Net Income")]/following-sibling::td')
    },


    getEmployeeName: function () {
        return driver.findElement(page.payslip.elements.employeeName).getText();
    },


    getEmployeeAnnualIncome: function () {
        return driver.findElement(page.payslip.elements.annualIncome).getText();
    },



    getEmployeeSuper: function () {
        return driver.findElement(page.payslip.elements.super).getText();
    },

    clickOnPayButton: function () {
        console.log("clicking on pay button now");
        driver.findElement(page.payslip.elements.payButton).click();

    },

    getEmployeeGrossIncome: function () {
        return driver.findElement(page.payslip.elements.grossIncome).getText();
    },

    getEmployeeIncomeTax: function () {
        return driver.findElement(page.payslip.elements.incomeTax).getText();
    },

    getEmployeeNetIncome: function () {
        return driver.findElement(page.payslip.elements.netIncome).getText();
    },

    getEmployeeSuper: function () {
        return driver.findElement(page.payslip.elements.super).getText();
    }

  
};