const calcButton = document.getElementById("myButton");
const myDiv = document.getElementById("myDiv");
const resultSection = document.getElementById("result-section");
const promptSection = document.getElementById("prompt-section");
const returnButton = document.getElementById("return-btn");
const refreshButton = document.getElementById("refresh-btn");

function calcWakeupTimes() {
    const sleepTime = new Date();
    sleepTime.setMinutes(sleepTime.getMinutes() + 14);

    const wakeTime = new Date(sleepTime);
    myDiv.innerHTML = "";

    for (let i = 1; i <= 6; i++) {
        wakeTime.setMinutes(wakeTime.getMinutes() + 90);

        const cycleDiv = document.createElement("div");
        cycleDiv.setAttribute("id", `cycle-${i}`);
        cycleDiv.setAttribute("class", "cycle");
        cycleDiv.textContent = wakeTime.toLocaleString("en-US", { timeStyle: "short"});
        myDiv.appendChild(cycleDiv);
    }
    resultSection.classList.remove("hidden");
    promptSection.classList.add("hidden");
}

function goBack() {
    resultSection.classList.add("hidden");
    promptSection.classList.remove("hidden");
}

calcButton.onclick = calcWakeupTimes;
returnButton.onclick = goBack;
refreshButton.onclick = calcWakeupTimes;