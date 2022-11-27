const hireController = require("../controllers/hire.controller");

module.exports = (app) => {
    app.post("/api/hire", hireController.createNewHire);
    app.get("/api/hire", hireController.getOneHire);
}