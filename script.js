
const hourEle=document.getElementById("hour");
const minuteEle=document.getElementById("minute");
const secondEle=document.getElementById("second");
const timeEle=document.querySelector(".time");
const dateEle=document.querySelector(".date");
const toggle=document.querySelector(".toggle");


const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

toggle.addEventListener('click',(e)=>{
    const html=document.querySelector('html');
    if(html.classList.contains('dark')){
        html.classList.remove('dark');
        e.target.innerHTML='Dark Mode'
    }
    else{
        html.classList.add('dark');
        e.target.innerHTML='Light Mode';
    }
})

function setTime(){
    const time=new Date();
    //console.log(time)
    const month=time.getMonth();
    const day=time.getDay();
    const date=time.getDate();
    const hours=time.getHours();
    const hoursForClock=hours%12;
    const minutes=time.getMinutes();
    const seconds=time.getSeconds();
    const ampm=hours>=12?'PM':'AM'

    hourEle.style.transform =`translate(-50%,-100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`
    minuteEle.style.transform=`translate(-50%,-100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`
    secondEle.style.transform=`translate(-50%,-100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`
    timeEle.innerHTML=`${hoursForClock}:${minutes<10 ? `0${minutes}` : minutes}  ${ampm}`
    dateEle.innerHTML=`${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}

const scale =(number, inMin, inMax, outMin, outMax) => {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

setTime();

setInterval(setTime, 1000);