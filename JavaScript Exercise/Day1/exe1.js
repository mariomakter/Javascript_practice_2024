// write a Javascript program to Display the current day and time in the following format
//Today is: Tuesday.
//current time is: 10PM:30:38;

function displayCurrentDayAndTime(){
    const now = new Date();
    const listOfDay = ["SunDay", "Monday", "TuesDay", "Wednesday", "Thursday", "Friday"];

    const currentDay = listOfDay[now.getDay()];

    //Get the current hours, minutes, and seconds

    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    //Determine  AM or PM and convert hours to 12-hour format

    const period = hours >= 12 ?"PM" : "AM";
    if(hours > 12){
        hours -= 12;
    }
    else if(hours ===0){
        hours = 12;
    }

    //format the time string
    const currentTime = `${hours}${period} : ${minutes < 10 ? '0' + minutes : minutes} : ${seconds < 10 ? '0' + seconds : seconds}`
    console.log("today is: " + currentDay);
    console.log("Current time is: " + currentTime)
}
displayCurrentDayAndTime();