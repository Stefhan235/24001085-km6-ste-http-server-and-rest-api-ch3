const carRepo = require("../repository/car");

exports.getCars = (date, capacity) => {
    const data = carRepo.getCars(date, capacity);
    return data;
};

exports.getCar = (id) => {
    const data = carRepo.getCar(id);
    return data;
};

exports.postCar = (payload) => {
    const data = carRepo.postCar(payload);
    return data;
};

exports.putCar = (id, payload) => {
    const data = carRepo.putCar(id, payload);
    return data;
};

exports.deleteCar = (id) => {
    const data = carRepo.deleteCar(id);
    return data;
};
