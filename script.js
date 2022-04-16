let weather= {
    apikey: "3eb2e22a48552301444bb2ee43a8b897",
    fetchWeather: function(city){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=3eb2e22a48552301444bb2ee43a8b897`)
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data);
            this.displayWeather(data);
        });
    },
    displayWeather: function(data){
        const {name}=data;
        const{temp,humidity}=data.main;
        const{icon,description}=data.weather[0];
        const{speed}=data.wind;
        document.querySelector(".city").innerHTML=`Weather in ${name}`;
        document.querySelector(".temp").innerHTML=`${temp}°C`;
        document.querySelector(".description").innerHTML=description;
        document.querySelector(".humidity").innerHTML=`Humidity: ${humidity}%`;
        document.querySelector(".wind").innerHTML=`Wind speed: ${speed} km/h`;  
        document.querySelector(".weather").classList.remove("loading");

    },
    search: function(){
        this.fetchWeather(document.querySelector(".input-search").value);
    }

};
document.querySelector(".search-button").addEventListener("click",function(){weather.search()});
document.querySelector(".input-search").addEventListener("keyup",function(event){
    if(event.key==="Enter"){
        weather.search();
    }
});

weather.fetchWeather("dhaka");
