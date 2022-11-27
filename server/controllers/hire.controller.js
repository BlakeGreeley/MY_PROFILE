const Hire = require("../models/hire.model");

// creating a submission for recruiters to send me their information.

const createNewHire = (req, res) => {
    Link.create(req.body)
        .then((newHire) => {
            res.json({newHire});
        })
        .catch((err) => {res.status(400).json({err});
    });
};

// pulling those submissions.

const getOneHire = (req, res) => {
    Hire.findOne({_id: req.params.id})
        .then((queriedHire) => {
            res.json(queriedHire);
        })
        .catch((err) => {res.status(400).json({err});
    });
};

module.exports = {
    createNewHire,
    getOneHire,
}