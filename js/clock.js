const clock = document.querySelector("#clock");

function getClock() {


    const date = new Date();
    let lastDay = 0;
    const year = date.getFullYear();
    const amount = 359;
    const day = date.getDate();
    const month = date.getMonth();
    const hour = String(24-date.getHours()).padStart(2, "0");
    const min = String(60-date.getMinutes()).padStart(2, "0");
    const sec = String(60 - date.getSeconds()).padStart(2, "0");
    for (let i = 0; i < month; i++) {
        let last = new Date(year, i, 0);
        lastDay += last.getDate();
    }
    lastDay += day;
    const left = amount - lastDay;

    clock.innerText = ( `${hour}${"h"}:${min}${"m"}:${sec}${"s"}`);
}
getClock();
setInterval(getClock, 1000);
