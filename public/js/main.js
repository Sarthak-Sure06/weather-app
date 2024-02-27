//getting elements
const cityname = document.getElementById("cityname");
const submitbtn = document.getElementById("submitbtn");

const city_name = document.getElementById("city_name");
const temp_real = document.getElementById("temp_real");
const temp_status = document.getElementById("temp_status");

const datahide = document.querySelector(".degree");

//using promise async await
const getinfo = async(event) =>{
    event.preventDefault();   
    //city name in search bar
    let city = cityname.value;

    //is search bar is empty
    if(city === ""){
        city_name.innerText = `Please Write Correct Name`;
        datahide.classList.add('collapse');
    }
    else{
        try {

            //api url
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2ed71616173b5d81a56a1e3616bba27f`;
            const res = await fetch(url);

            //converting data to readable format
            const data = await res.json();
            const arrdata = [data]; //making array of data

            city_name.innerText = `${arrdata[0].name} , ${arrdata[0].sys.country}`;
            temp_real.innerText = Math.round(arrdata[0].main.temp - 273.5); // getting temp of city by api
            //temp_status.innerText = arrdata[0].weather[0].main; //getting clouds or sunny etc.

            const tempmood = arrdata[0].weather[0].main

            //getting clouds or sunny etc.
            if(tempmood == "Clear"){
                temp_status.innerHTML = "<i class='fa-solid fa-sun fa-2xl' style='color: #74C0FC;'></i>"
            }
            else if(tempmood == "Clouds"){
                temp_status.innerHTML = "<i class='fa-solid fa-cloud fa-2xl' style='color: #74C0FC;'></i>"
            }
            else if(tempmood == "Rain"){
                temp_status.innerHTML = "<i class='fa-solid fa-cloud-rain fa-2xl' style='color: #74C0FC;'></i>"
            }
            else if(tempmood == "Haze"){
                temp_status.innerHTML = "<i class='fa-solid fa-smog fa-2xl' style='color: #74C0FC;'></i>"
            }
            else{
                temp_status.innerHTML = "<i class='fa-solid fa-sun fa-2xl' style='color: #74C0FC;'></i>"
            }

            datahide.classList.remove("collapse");
            
        } catch{
            city_name.innerText = `Please Write Correct Name`;
            datahide.classList.add('collapse');
        }
        
    }
}

submitbtn.addEventListener("click" , getinfo);