import flatpickr from 'flatpickr';
import "flatpickr/dist/flatpickr.min.css";

const options = {
  enableTime:true,
  time_24hr:true,
  defaultDate: new Date(),
  minuteIncrement:1,

  onClose(selectedDates){
    pickedTime = selectedDates[0];

    if(pickedTime < Date.now()){
      window.alert("Please choose a date in the future");
      startBtn.disabled = true;
    } else {
      startBtn.disabled = false;
    }
  }
}

const startBtn = document.querySelector('button[data-start]');
const daysEl = document.querySelector('span[data-days]');
const hoursEl = document.querySelector('span[data-hours]');
const minutesEl = document.querySelector('span[data-minutes]');
const secondsEl = document.querySelector('span[data-seconds]');
let pickedTime = null;

startBtn.disabled = true;
flatpickr('#datetime-picker',options);

const timer = {
  intervalId:null,
  timeDiff:null,
  start(){
    this.intervalId = setInterval(() => {
      this.timeDiff = pickedTime - Date.now();
      if (this.timeDiff <= 0) {
        clearInterval(this.intervalId);
        return;
      }
      const {days, hours, minutes, seconds} = this.convertMs(this.timeDiff);
      daysEl.textContent = this.addLeadingZero(days);
      hoursEl.textContent = this.addLeadingZero(hours);
      minutesEl.textContent = this.addLeadingZero(minutes);
      secondsEl.textContent = this.addLeadingZero(seconds);


    },1000)


  },
  convertMs(ms) {
  // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
  },
  addLeadingZero(value){
    return String(value).padStart(2, '0');
  }
}


startBtn.addEventListener('click',() => { timer.start() });