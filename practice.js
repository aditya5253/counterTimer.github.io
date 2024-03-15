const daysElement = document.querySelector('.days');
const hourElement = document.querySelector('.hours');
const minuteElement = document.querySelector('.minutes');
const secondElement = document.querySelector('.seconds');
const heading = document.querySelector('h1');
const counterTimer = document.querySelector('.counterTimer');

const second = 1000
, minute = 60 * second
, hour = 60* minute
, day = 24 * hour;

const timerFunction=()=>{
    let now = new Date();
    let dd = String(now.getDate()).padStart(2,"0"),
    mm = String(now.getMonth()+1).padStart(2,"0"),
    yyyy = now.getFullYear();
    

    const enteredDate = prompt("Enter Date").padStart(2,"0");
    const enteredMonth = prompt("Enter Month").padStart(2,"0");
    if((enteredDate>=1 && enteredDate<31) && (enteredMonth>=1 && enteredMonth<=12) ){
        let Targetdate = `${enteredMonth}/${enteredDate}/${yyyy}`;
   }
   else{
       alert("Enter Valid Day and month");
       
   }

    now =`${mm}/${dd}/${yyyy}`
    // TargetDate = `${enteredMonth}/${enteredDate}/${yyyy}`;
    

    if(now>TargetDate){
        TargetDate = `${enteredMonth}/${enteredDate}/${yyyy + 1}`;
        
    }
    const intervalId = setInterval(()=>{
        const timer = new Date(TargetDate).getTime();
        const today = new Date().getTime();
        let difference = timer-today;
        const leftDay = Math.floor(difference/day);
        const leftHour = Math.floor((difference%day)/hour);
        const leftMinute = Math.floor(difference%hour/minute);
        const leftSecond = Math.floor((difference%minute)/second);
        
        daysElement.innerHTML = leftDay;
        hourElement.innerHTML = leftHour;
        minuteElement.innerHTML = leftMinute;
        secondElement.innerHTML = leftSecond;
        heading.innerText = "Remaining Time"
        
        if(difference<0){
            counterTimer.style.display = "none";
            heading.innerText = "Time's Up";
            
            clearInterval(intervalId);
        }
    },1000)
    
}

timerFunction();