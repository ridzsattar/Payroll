let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();


chai.use(chaiHttp);

// before((done) => {
//     db.payments.remove({}, () => {
//        done();
//     });
// });


describe('/GET payment when no payments exist', () => {
    it('it should GET all the payments', (done) => {
          chai.request(server)
          .get('/api/payments')
          .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('array');
              res.body.length.should.be.eql(0);
              done();
          });
    });

});


describe('/GET payment when a payment exists', () => {
    before( (done) => {
        let payment = {
            _id:1,
            annualSalary:81900,
            firstName:"John",
            grossIncome:6825,
            incomeTax:1521,
            isNew:true,
            lastName:"Snow",
            netIncome:5304,
            pay:4690,
            payPeriod:"2018-05-30T01:00:00.000Z",
            payPeriodFormatted:"30 May 2018",
            payPeriodMonth:"Month of May",
            super:614,
            superRate:9
        }

    chai.request(server)
        .post('/api/payment')
        .send(payment)
        .end(done())
    })

    it('it should GET all payments', (done) => {
          chai.request(server)
          .get('/api/payments')
          .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('array');
              res.body.length.should.be.eql(1);
              console.log("Get Response: ", res.body);
              res.body.forEach((item) => {
                item.should.have.property("firstName").eql('John');
                item.should.have.property("lastName").eql('Snow');
                item.should.have.property("annualSalary").eql(81900);  
                item.should.have.property("grossIncome").eql(6825);
                item.should.have.property("incomeTax").eql(1521); 
                item.should.have.property("netIncome").eql(5304); 
                item.should.have.property("pay").eql(4690);
                item.should.have.property("super").eql(614);
                item.should.have.property("superRate").eql(9);  
            })
              done();
          });
    });
}); 







describe('/POST add new payment request', () => {
        let payment = {
            _id:2,
            annualSalary:81900,
            firstName:"Rida",
            grossIncome:6825,
            incomeTax:1521,
            isNew:true,
            lastName:"Sattar",
            netIncome:5304,
            pay:4690,
            payPeriod:"2018-05-30T01:00:00.000Z",
            payPeriodFormatted:"30 May 2019",
            payPeriodMonth:"Month of May",
            super:614,
            superRate:9
        }

    it('it should Post payment request and verify response', (done) => {
          chai.request(server)
          .post('/api/payment')
          .send(payment)
          .end((err, resp) => {
            console.log("POST Response: ", resp.body);
            resp.should.have.status(200);
            
            resp.body.should.have.property("firstName").eql('Rida');
            resp.body.should.have.property("lastName").eql('Sattar');
            resp.body.should.have.property("annualSalary").eql(81900);  
            resp.body.should.have.property("grossIncome").eql(6825);
            resp.body.should.have.property("incomeTax").eql(1521); 
            resp.body.should.have.property("netIncome").eql(5304); 
            resp.body.should.have.property("pay").eql(4690);
            resp.body.should.have.property("super").eql(614);
            resp.body.should.have.property("superRate").eql(9);  
          
             
              done();
          });
        });


          it('it should GET payment by id', (done) => {
            chai.request(server)
            .get('/api/payment/2')
            .end((err, resp) => {
                console.log("Get Response: ", resp.body);
               resp.body.should.have.property("firstName").eql('Rida');
                resp.body.should.have.property("lastName").eql('Sattar');
                resp.body.should.have.property("annualSalary").eql(81900);  
                resp.body.should.have.property("grossIncome").eql(6825);
                resp.body.should.have.property("incomeTax").eql(1521); 
                resp.body.should.have.property("netIncome").eql(5304); 
                resp.body.should.have.property("pay").eql(4690);
                resp.body.should.have.property("super").eql(614);
                resp.body.should.have.property("superRate").eql(9);
                done();
            });
    });
}); 
