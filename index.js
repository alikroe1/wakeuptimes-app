const calcButton = document.getElementById("myButton");
const myDiv = document.getElementById("displayArea");

function calcWakeupTimes() {
    const sleepTime = new Date();
    sleepTime.setMinutes(sleepTime.getMinutes() + 14);

    const wakeTime = new Date(sleepTime);
    myDiv.innerHTML = "";

    for (let i = 1; i <= 6; i++) {
        wakeTime.setMinutes(wakeTime.getMinutes() + 90);

        const cycleDiv = document.createElement("div");
        cycleDiv.setAttribute("id", `cycle-${i}`);
        cycleDiv.textContent = wakeTime.toLocaleString("en-US", { timeStyle: "short"});
        myDiv.appendChild(cycleDiv);
    }
}

calcButton.onclick = calcWakeupTimes;