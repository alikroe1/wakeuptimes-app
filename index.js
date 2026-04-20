const calcButton = document.getElementById("myButton");
const myDiv = document.getElementById("displayArea");

function calcWakeupTimes() {
    const sleepTime = new Date()
    sleepTime.setMinutes(sleepTime.getMinutes() + 14);
    const wakeTime = new Date(sleepTime);
    const cycleTimes = [];
    for (let i = 1; i <= 6; i++) {
        wakeTime.setMinutes(wakeTime.getMinutes() + 90);
        cycleTimes.push(wakeTime.toLocaleString("en-US", { timeStyle: "short"}));
    }
    myDiv.textContent = `Wake up times: ${cycleTimes.join(", ")}`;
}

calcButton.onclick = calcWakeupTimes;