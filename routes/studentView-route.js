// const router = require("express").Router();
const db = require("../models");


module.exports = function (app){
    app.get("/api/course", async (request, response) => {
        try {
            var result = await db.Course.find(request.body).exec();
            response.send(result);
        } catch (error) {
            response.status(500).send(error);
        }
    });

    app.get("api/course/:id", async (request, response) => {
        try {
            var person = await db.Course.findById(request.params.id).exec();
            response.send(result);
        } catch (error) {
            response.status(500).send(error);
        }
    });
    app.post("api/course", async (request, response) => {
        try {
            var course = new db.Course(request.body);
            var result = await course.save();
            response.send(result);
        } catch (error) {
            response.status(500).send(error);
        }
    });
}





// module.exports = {
//     findAll: function(req, res) {
//       db.Course.find(req.body)
//         .then(dbCourse => res.json(dbCourse))
//         .catch(err => res.status(422).json(err));
//     },
// }