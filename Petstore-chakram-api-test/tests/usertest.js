const chakram = require('chakram'), 
expect = chakram.expect;

describe("User Test", function () {

    it("GET /v2/user/{username} getUserInfo", function () {
        const response = chakram.get("https://petstore.swagger.io/v2/user/TestQa123");
        expect(response).to.have.status(200);
        return chakram.wait();
    });

    it("GET /v2/user/logout", function () {
        const response = chakram.get("https://petstore.swagger.io/v2/user/logout");
        expect(response).to.have.status(200);
        return chakram.wait();
    });

    it("GET /v2/user/login", function () {
        const response = chakram.get("https://petstore.swagger.io/v2/user/login?username=test&password=123");
        expect(response).to.have.status(200);
        return chakram.wait();
    });

    it("POST /v2/user usercreate", function () {

        const data = {
            "id": 452348343278322,
            "username": "TestQa1234",
            "firstName": "Berke",
            "lastName": "Yorulmaz",
            "email": "fhdjdsafgsd@vcbvcb",
            "password": "123",
            "phone": "5735362384",
            "userStatus": 0
        };

        const resData = {
            "code": 200,
            "type": "unknown",
            "message": "452348343278322"
        };

        const response = chakram.post("https://petstore.swagger.io/v2/user", data);

        return response.then(function (res){
            console.log(res.body);
            expect(res).to.have.status(200);
            expect(res).to.have.json(resData);
        })
    });
    
    it("PUT /v2/user userUpdate", function () {

        const data = {
            "id": 452348343278322,
            "username": "TestQa1234",
            "firstName": "Berke2",
            "lastName": "Yorulmaz2",
            "email": "asdsabd@ojbvcw.com",
            "password": "123",
            "phone": "3243579",
            "userStatus": 0
        };

        const resData = {
            "code": 200,
            "type": "unknown",
            "message": "452348343278322"
        };

        const response = chakram.put("https://petstore.swagger.io/v2/user/TestQa1234", data);

        return response.then(function (res){
            console.log(res.body);
            expect(res).to.have.status(200);
            expect(res).to.have.json(resData);
        })
    });

    it("DELETE /v2/user/{username}", function () {
        const response = chakram.delete("https://petstore.swagger.io/v2/user/TestQa1234");
        expect(response).to.have.status(200);
        return chakram.wait();
    });

});
