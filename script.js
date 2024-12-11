let month = document.querySelector(".month");
let date = document.querySelector(".datetoday");




let monthsArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


let currentDate = new Date();
month.innerText = monthsArray[currentDate.getMonth()];
date.innerText = currentDate.toString().slice(0, 15);
// Get the Number of Days

let daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
console.log(daysInMonth);



let daysOfWeek = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
let day = daysOfWeek[new Date(currentDate.getFullYear(), currentDate.getMonth(),1).getDay()]
let firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(),1).getDay();
console.log(day,firstDay);


let dates = document.querySelector(".get-dates");


let datesDiv = ""
for(let i = firstDay-1;i>0;i--){
    datesDiv += `<div class="empty"></div>`;
}

for (let index = 1; index <= daysInMonth; index++) {
     if(index === new Date().getDate()){
        datesDiv += `<div class="today">${index}</div>`;
     }
     else{
        datesDiv += `<div class="date">${index}</div>`;
     }
}


dates.innerHTML = datesDiv;