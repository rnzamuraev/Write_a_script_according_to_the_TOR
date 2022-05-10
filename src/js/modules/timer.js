const timer = (id, deadline) => {
  const getTimeRemaining = (endtime) => {
    let t = Date.parse(endtime) - Date.parse(new Date()),
      seconds = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / 1000 / 60) % 60),
      hours = Math.floor((t / (1000 * 60 * 60)) % 24),
      days = Math.floor(t / (1000 * 60 * 60 * 24));

    return {
      total: t,
      seconds: seconds,
      minutes: minutes,
      hours: hours,
      days: days,
    };
  };
  const setClock = (selector, endtime) => {
    const timer = document.querySelector(selector),
      days = document.querySelector("#days"),
      hours = document.querySelector("#hours"),
      minutes = document.querySelector("#minutes"),
      seconds = document.querySelector("#seconds"),
      timeInterval = setInterval(appdateClock, 1000);

    appdateClock();

    function appdateClock() {
      let t = getTimeRemaining(endtime);

      const addZero = (num) => {
        if (num < 10) {
          return "0" + num;
        } else {
          return num;
        }
      };

      days.textContent = addZero(t.days);
      hours.textContent = addZero(t.hours);
      minutes.textContent = addZero(t.minutes);
      seconds.textContent = addZero(t.seconds);

      if (t.total < 0) {
        days.textContent = "00";
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";

        clearInterval(setInterval);
      }
    }
  };
  setClock(id, deadline);
};
export default timer;
