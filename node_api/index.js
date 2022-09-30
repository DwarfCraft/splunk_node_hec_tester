
async function init() {
    const axios = require("axios");
    const URL = "http://10.0.0.220:8088/services/collector";
    const token = "Splunk 54694b67-55d7-41c1-b462-78a4008112dd";

    let config = {
        headers: {"Authorization": token}
    };

    const iterations = 1000000000;

    for (let i = 0; i < iterations; i++) {
        let pause_time = Math.floor(Math.random() * 10000 + 1);
        let data = {
            "string": "Here is some text to input",
            "iteration": (i + 1),
            "iteration_max": iterations,
            "wait_time": pause_time,
            "value": generate_data()
        };
        axios.post(URL, {"event": data}, config)
            .then(response => {
                console.log(response);
            }).catch(error => {
            console.log(error);
        });
        await new Promise(resolve => setTimeout(resolve, pause_time));
    }

}
function generate_data() {
    let max = 100000;
    let min = 1;
    return Math.floor( Math.random() * (max - min + 1) + 1);
}

init().then(r => console.log("Completed"));