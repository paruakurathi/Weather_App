const apiKey = "apikey ";
const apiUrl = "apiurl";

const inputCity = document.querySelector('#searchbar');
const searchbtn = document.querySelector('.search button');
const weathericon =document.querySelector('.weather_icon');

async function weather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".container").style.display = "none";
    }
    else{
        var data = await response.json();

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temperature').innerHTML = data.main.temp + "°c";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
        weathericon.src = "Images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weathericon.src = "Images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weathericon.src = "Images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weathericon.src = "Images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weathericon.src = "Images/mist.png";
    }

    document.querySelector(".container").style.display = "block";
    document.querySelector(".error").style.display = "none";
   
    }
    
}

searchbtn.addEventListener("click", ()=> {
    weather(inputCity.value);
})



