//function to calculate random unique string








module.exports = {
    url: 'http://localhost:3000',
    elements: {
        employeeForm: by.name('employeeForm'),
        firstNameInput: by.name('firstName'),
        lastNameInput: by.name('lastName'),
        annualSalaryInput: by.name('annualSalary'),
        superRateInput: by.name('superRate'),
        generatePayslipButton: by.css('button.btn-primary'),
        paymentsGrid: by.xpath("//div[@class='payment-list well']"),
        paymentsGridEmployeeNameList: by.css('div.col-md-3')
        
    },

       generateUniqueName: function () {
        uName =  Math.random().toString(36).substr(2, 9);
        uName = uName.charAt(0).toUpperCase() + uName.slice(1);
        return uName;
    },

    enterNewEmployeeDetails: function (firstName, lastName, annualSalary, superRate) {
        driver.wait(until.elementsLocated(this.elements.employeeForm), 10000)
        driver.findElement(this.elements.firstNameInput).sendKeys(firstName);
        driver.findElement(this.elements.lastNameInput).sendKeys(lastName);
        driver.findElement(this.elements.annualSalaryInput).sendKeys(annualSalary);
        driver.findElement(this.elements.superRateInput).sendKeys(superRate);
        driver.findElement(this.elements.generatePayslipButton).click();
    },






};
