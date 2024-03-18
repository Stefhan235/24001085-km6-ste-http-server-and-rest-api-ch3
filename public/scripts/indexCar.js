import cars from "./cars.js";

const carCard = document.getElementById("car-card");
const searchButton = document.getElementById("search-button");
const inputDate = document.getElementById("date");
const inputCapacity = document.getElementById("capacity");

async function getCars(date, capacity) {
    const carsData = await cars.getCarsData(date, capacity);
    let carsDataInCards = "";
    carsData.map((car) => {
        carsDataInCards += `<div class="col-md-4 my-3">
                    <div class="card p-3">
                        <img
                            src="${car.image}"
                            class="card-img-top p-3"
                            alt="..."
                            style="
                                aspect-ratio: 4 / 3;
                                object-fit: cover;
                                border-radius: 20px;
                            "
                        />
                        <div class="card-body">
                            <h6 class="card-title">
                                ${car.manufacture} ${car.model}
                            </h6>
                            <h5>
                                Rp. ${car.rentPerDay.toLocaleString("id-ID")} /
                                hari
                            </h5>
                            <p class="card-text">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>

                            <p>
                                <span>
                                    <img
                                        src="./images/icon_users.png"
                                        alt="users"
                                        class="pe-2"
                                    />
                                </span>
                                ${car.capacity} orang
                            </p>

                            <p>
                                <span>
                                    <img
                                        src="./images/icon_settings.png"
                                        alt="transmisi"
                                        class="pe-2"
                                    />
                                </span>
                                ${car.transmission}
                            </p>

                            <p>
                                <span>
                                    <img
                                        src="./images/icon_calendar.png"
                                        alt="tahun"
                                        class="pe-2"
                                    />
                                </span>
                                Tahun ${car.year}
                            </p>
                            <button
                                type="button"
                                class="btn"
                                style="
                                    background-color: #5cb85f;
                                    color: white;
                                    border-radius: 2px;
                                    width: 100%;
                                "
                            >
                                Pilih Mobil
                            </button>
                        </div>
                    </div>
                </div>`;
    });
    carCard.innerHTML = carsDataInCards;
}

searchButton.addEventListener("submit", (event) => {
    event.preventDefault();
    const date = inputDate.value;
    const capacity = inputCapacity.value;
    getCars(date, capacity);
});

getCars("");
