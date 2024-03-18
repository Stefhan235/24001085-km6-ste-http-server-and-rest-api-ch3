const getCarsData = async (date, capacity) => {
    const res = await fetch(`/cars?date=${date}&capacity=${capacity}`);
    const { data } = await res.json();
    return data;
};

export default { getCarsData };
