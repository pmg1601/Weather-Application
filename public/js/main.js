const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");
const city_name = document.getElementById("city_name");
const temp = document.getElementById("temp");
const temp_status = document.getElementById("temp_status");
const dataHide = document.getElementById("hideDiv");

const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityName.value;

    if (cityVal === "") {
        city_name.innerHTML = `<span style="color: Tomato;">Please Enter City!</span>`;
        dataHide.style.visibility = "hidden";

    } else {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=dcea5158024957c8fdb0eab760c4ab30`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];

            dataHide.style.visibility = "visible";
            cityName.value = "";

            city_name.innerHTML = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp.innerHTML = `${arrData[0].main.temp}<sup>o</sup>C`;

            const tempMood = arrData[0].weather[0].main;

            console.log(data);

            if (tempMood == "Clear") {
                temp_status.innerHTML = `<i class="fas fa-sun" aria-hidden="true" style="color: #eccc68;"> </i>`;
            } else if (tempMood == "Clouds") {
                temp_status.innerHTML = `<i class="fa fa-cloud" aria-hidden="true"> </i>`;
            } else if (tempMood == "Rain") {
                temp_status.innerHTML = `<i class="fas fa-cloud-rain" aria-hidden="true" style="color: #a4b0be;"> </i>`;
            } else {
                temp_status.innerHTML = `<i class="fas fa-sun" aria-hidden="true" style="color: #ffc107;"> </i>`;
            }
        } catch {
            city_name.innerHTML = `<span style="color: Tomato;">Please Enter Valid City Name!`;
            dataHide.style.visibility = "hidden";
        }
    }
};

submitBtn.addEventListener("click", getInfo);
