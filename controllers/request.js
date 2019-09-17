const Request = require('../models/request');

// get

get = (req, res, next) => {
    console.log ('GET /api/request/:requestId');
    const requestId = req.params.requestId;

    Request.findById(requestId, (err, request) => {
        if (err) {
            return res.status(500).send({ message: `Error to find request : ${err}` });
        }
        else if (request == null) {
            return res.status(404).send({ message : `Request dont exist : ${err}` });
        }

        return res.status(200).send({ request });
    });
}

// insert

insert = (req, res) => {
    console.log('POST /api/request');
    let request = new Request();
    request.url = req.body.url;

    request.save((err, requestStored) => {
        if (err) {
            res.status(500).send({ message: `Error Save Request in Database : ${err}` });
        } else {
            res.status(200).send({ request: requestStored });
        }
    });
}

// list

list = (req, res) => {
    Request.find({} , (err , requests) => {
        if (err) {
            return res.status(500).send({ message: `Error : ${err}` });
        } else if (!requests) {
            return res.status(404).send({ message: `Requests not found` });
        } else {
            return res.status(200).send({ requests });
        }
    });
}

// remove

remove = (req, res) => {
    let requestId = req.params.requestId;

    Request.findById(requestId, (err, request) => {
        if (err) {
            return res.status(500).send({ message: 'Error to delete request' });
        }
        request.remove(err => {
            if (err) {
                return res.status(500).send({ message: 'Error to delete request' });
            } else {
                return res.status(200).send({ message: 'Request Removed' });
            }
        });
    });
}

// update

update = (req, res) => {
    let requestId = req.params.requestId;
    let update = req.body;

    Request.findByIdAndUpdate(requestId, update, (err, request) => {
        if (err) {
            return res.status(500).send({ message: 'Error to update request' });
        } else {
            return res.status(200).send({ message: 'Request updated' });
        }
    });
}


module.exports = {
    get,
    insert,
    list,
    remove,
    update
};
