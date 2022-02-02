const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
chai.should();
describe("Reservations", () => {
  describe("GET /", () => {
    it("should get all reservation records", (done) => {
      chai.request('http://localhost:3050/api')
        .get('/')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          done();
        });
      });
  });

  describe("DELETE /", () => {
    it("should delete reservation by id", (done) => {
      chai.request('http://localhost:3050/api')
        .delete('/5a90571e-c8ac-4984-83bd-c2b23fa3dae6')
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
      });
  });
  
  describe("POST /", () => {
    it("should add a new reservation and return status code 200", (done) => {
      chai.request('http://localhost:3050/api')
        .post('/')
        .send({
          "name": "Baz",
          "store": "BazStore",
          "res_status": 0
        })
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
      });
  });
});