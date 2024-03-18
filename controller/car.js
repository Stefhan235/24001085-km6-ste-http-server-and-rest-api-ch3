const { response } = require("express");
const carUsecase = require("../usecase/car");

exports.getCars = (req, res) => {
    const { date, capacity } = req.query;

    const data = carUsecase.getCars(date, capacity);

    const response = {
        data,
        message: null,
    };

    res.status(200).json(response);
};

exports.getCar = (req, res, next) => {
    const { id } = req.params;
    const data = carUsecase.getCar(id);
    if (!data) {
        return next({
            statusCode: 404,
            message: `Car with id ${id} is not found `,
        });
    }

    const response = {
        data,
        message: null,
    };
    res.status(200).json(response);
};

exports.postCar = (req, res, next) => {
    const {
        plate,
        manufacture,
        model,
        image,
        rentPerDay,
        capacity,
        description,
        availableAt,
        transmission,
        available,
        type,
        year,
        options,
        specs,
    } = req.body;

    if (!plate || plate == "") {
        return next({
            statusCode: 400,
            message: "plate must be filled",
        });
    }
    if (!manufacture || manufacture == "") {
        return next({
            statusCode: 400,
            message: "manufacture must be filled",
        });
    }
    if (!model || model == "") {
        return next({
            statusCode: 400,
            message: "model must be filled",
        });
    }
    if (!image || image == "") {
        return next({
            statusCode: 400,
            message: "image must be filled",
        });
    }
    if (!rentPerDay || rentPerDay == "") {
        return next({
            statusCode: 400,
            message: "rentPerDay must be filled",
        });
    }
    if (!capacity || capacity == "") {
        return next({
            statusCode: 400,
            message: "capacity must be filled",
        });
    }
    if (!description || description == "") {
        return next({
            statusCode: 400,
            message: "description must be filled",
        });
    }
    if (!availableAt || availableAt == "") {
        return next({
            statusCode: 400,
            message: "availableAt must be filled",
        });
    }
    if (!transmission || transmission == "") {
        return next({
            statusCode: 400,
            message: "transmission must be filled",
        });
    }
    if (!available || available == "") {
        return next({
            statusCode: 400,
            message: "available must be filled",
        });
    }
    if (!type || type == "") {
        return next({
            statusCode: 400,
            message: "type must be filled",
        });
    }
    if (!year || year == "") {
        return next({
            statusCode: 400,
            message: "year must be filled",
        });
    }
    if (!options || options == "") {
        return next({
            statusCode: 400,
            message: "options must be filled",
        });
    }
    if (!specs || specs == "") {
        return next({
            statusCode: 400,
            message: "specs must be filled",
        });
    }

    const data = carUsecase.postCar(req.body);
    const response = {
        data,
        message: null,
    };
    res.status(201).json(response);
};

exports.putCar = (req, res, next) => {
    const { id } = req.params;
    const {
        plate,
        manufacture,
        model,
        image,
        rentPerDay,
        capacity,
        description,
        availableAt,
        transmission,
        available,
        type,
        year,
        options,
        specs,
    } = req.body;

    if (!plate || plate == "") {
        return next({
            statusCode: 400,
            message: "plate must be filled",
        });
    }
    if (!manufacture || manufacture == "") {
        return next({
            statusCode: 400,
            message: "manufacture must be filled",
        });
    }
    if (!model || model == "") {
        return next({
            statusCode: 400,
            message: "model must be filled",
        });
    }
    if (!image || image == "") {
        return next({
            statusCode: 400,
            message: "image must be filled",
        });
    }
    if (!rentPerDay || rentPerDay == "") {
        return next({
            statusCode: 400,
            message: "rentPerDay must be filled",
        });
    }
    if (!capacity || capacity == "") {
        return next({
            statusCode: 400,
            message: "capacity must be filled",
        });
    }
    if (!description || description == "") {
        return next({
            statusCode: 400,
            message: "description must be filled",
        });
    }
    if (!availableAt || availableAt == "") {
        return next({
            statusCode: 400,
            message: "availableAt must be filled",
        });
    }
    if (!transmission || transmission == "") {
        return next({
            statusCode: 400,
            message: "transmission must be filled",
        });
    }
    if (!available || available == "") {
        return next({
            statusCode: 400,
            message: "available must be filled",
        });
    }
    if (!type || type == "") {
        return next({
            statusCode: 400,
            message: "type must be filled",
        });
    }
    if (!year || year == "") {
        return next({
            statusCode: 400,
            message: "year must be filled",
        });
    }
    if (!options || options == "") {
        return next({
            statusCode: 400,
            message: "options must be filled",
        });
    }
    if (!specs || specs == "") {
        return next({
            statusCode: 400,
            message: "specs must be filled",
        });
    }

    const data = carUsecase.putCar(id, req.body);
    const response = {
        data,
        message: null,
    };
    res.status(200).json(response);
};

exports.deleteCar = (req, res) => {
    const { id } = req.params;
    const data = carUsecase.deleteCar(id);
    const response = {
        data,
        message: "Success",
    };
    res.status(200).json(response);
};
