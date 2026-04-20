function calcWakeupTimes() {
    const sleepTime = new Date()
    sleepTime.setMinutes(sleepTime.getMinutes() + 14);
    const wakeTime = new Date(sleepTime);
    const cycleTimes = [];
    for (let i = 1; i <= 6; i++) {
        wakeTime.setMinutes(wakeTime.getMinutes() + 90);
        cycleTimes.push(wakeTime.toLocaleString("en-US", { timeStyle: "short"}));
    }

    console.log("Wake up times: ", cycleTimes.join(", "));
}

calcWakeupTimes();