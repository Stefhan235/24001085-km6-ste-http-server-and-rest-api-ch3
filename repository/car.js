const cars = require("../data/cars.json");
const { v4: uuidv4 } = require("uuid");

exports.getCars = (date, capacity) => {
    let data = cars.map((car) => car);
    data = data.filter((car) => {
        let filteredStatus = true;
        if (date) {
            filteredStatus =
                filteredStatus &&
                new Date(car.availableAt).toISOString().slice(0, 10) === date;
        }
        if (capacity) {
            filteredStatus = filteredStatus && car.capacity >= capacity;
        }
        return filteredStatus;
    });
    return data;
};

exports.getCar = (id) => {
    let data = cars.map((car) => car);
    data = data.filter((car) => car.id == id);
    if (data.length == 0) {
        return null;
    }
    return data[0];
};

exports.postCar = (payload) => {
    const lastCar = cars[cars.length - 1];
    payload = {
        id: uuidv4(),
        ...payload,
    };

    cars.push(payload);
    return payload;
};

exports.putCar = (id, payload) => {
    payload = {
        id: id,
        ...payload,
    };

    cars.map((car, index) => {
        if (car.id == id) {
            cars[index] = payload;
        }
    });
    return payload;
};

exports.deleteCar = (id) => {
    index = cars.findIndex((car) => car.id == id);
    cars.splice(index, 1);
    return null;
};
