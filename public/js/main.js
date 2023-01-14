const city = document.getElementById('city');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');
const description = document.getElementById('description');
const temperature = document.querySelector('.temperature');

const getInfo = async(event) =>{
    event.preventDefault();
    let cityVal = city.value;
    
    if(cityVal === ""){
        city_name.innerText="Plz enter the city name before search";
        temperature.classList.add('data_hide');
    } else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=89b30d8b9ae9a69adca1d611b62067eb`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];

            city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}`;
            temp.innerText=Math.round(arrData[0].main.temp);
            // description.innerText=arrData[0].weather[0].description;
            // temp_status.innerText=arrData[0].weather[0].main;
            const tempMood = arrData[0].weather[0].main;

            if(tempMood==="Clear"){
                temp_status.innerHTML = '<i class="fa fa-sun-o" style="color: #eccc68;"></i>';
            } else if(tempMood==="Clouds"){
                temp_status.innerHTML = '<i class="fa fa-cloud" style="color: #b7e2ff;"></i>';
            } else if(tempMood==="Rain"){
                temp_status.innerHTML = '<i class="fas fa-cloud-rain" style="color: #a4b0be;"></i>';
            } else{
                temp_status.innerHTML = '<i class="fa fa-sun-o" style="color: #eccc68;"></i>';
            }
            temperature.classList.remove('data_hide');
        } catch{
            city_name.innerText="Plz enter the city name properly";
            temperature.classList.add('data_hide');
        }
    }
    city.value="";
}

submitBtn.addEventListener('click',getInfo);

const getToday = () =>{
    let weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    let currentDay = new Date();
    let today = weekday[currentDay.getDay()];
    const day = document.getElementById('day');
    day.innerText=today;
}

getToday();

const getCurDate = () =>{
    let months = new Array(12);
    months[0]="January";
    months[1]="February";
    months[2]="March";
    months[3]="April";
    months[4]="May";
    months[5]="June";
    months[6]="July";
    months[7]="August";
    months[8]="September";
    months[9]="October";
    months[10]="November";
    months[11]="December";

    let curDate = new Date();
    let month = months[curDate.getMonth()];
    let dates = curDate.getDate();
    let year = curDate.getFullYear();
    const todayDate = document.getElementById('date');
    todayDate.innerText=`${dates} ${month}, ${year}`;
}

getCurDate();