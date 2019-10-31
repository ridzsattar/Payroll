module.exports = {
    elements: {
        payslipForm: by.name('payslipForm'),
        employeeName: by.css('form h4'),
        annualIncome: by.xpath('//td[contains(text(), "Annual Income")]/following-sibling::td'),
        super: by.xpath('//td[contains(text(), "Super")]/following-sibling::td'),
        payButton: by.css('button.btn-primary')
        
    },


    getEmployeeName : function() {
       return driver.findElement(page.payslip.elements.employeeName).getText();
    },


    getEmployeeAnnualIncome : function() {
        return driver.findElement(page.payslip.elements.annualIncome).getText();
    },



    getEmployeeSuper : function() {
        return driver.findElement(page.payslip.elements.super).getText();
    },

    clickOnPayButton : function(){
         console.log("clicking on pay button now");
         driver.findElement(page.payslip.elements.payButton).click();

    },



};