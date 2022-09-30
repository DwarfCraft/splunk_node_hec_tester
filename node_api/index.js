
const axios = require("axios");
const URL = "http://10.0.0.220:8088/services/collector";
const token = "Splunk 54694b67-55d7-41c1-b462-78a4008112dd";

let config = {
    headers: {"Authorization": token}
};

let data = {"string": "Here is some text to input",
            "value": generate_data()
};

axios.post(URL, {"event": data}, config)
    .then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});

function generate_data() {
    let max = 100000;
    let min = 1;
    return Math.floor( Math.random() * (max - min + 1) + 1);
}
