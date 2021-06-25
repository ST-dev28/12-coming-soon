// IMPORT
import { Clock } from "./components/clock/Clock.js";
import { Progressbar } from "./components/progress-bar/ProgressBar.js";
import { socials } from "./components/socials/socials.js";
import { clockData } from "./data/clockData.js";
import { progressBarData } from "./data/progressBarData.js";
import { socialsData } from "./data/socialsData.js";


// EXECUTION
new Clock('#clock_1', clockData);
// new Clock(485545);
socials('footer .socials', socialsData);
new Progressbar('.left-column', progressBarData);

let count1 = 0;
const timer1 = setInterval(() => {
  if (count1 < 10) {
    console.log(count1++);
  } else {
    clearInterval(timer1);
  }

}, 1000)

let count2 = 55;
const timer2 = setInterval(() => {
  if (count2 < 62) {
    console.log(count2++);
  } else {
    clearInterval(timer2);
  }

}, 1000)
