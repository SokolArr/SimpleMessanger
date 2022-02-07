let dialogsData;
let timerId = setInterval(() => dataStatusCheck(), 10);

const response = fetch("../src/assets/jsons/dialogs.json")
    .then(response => {
        return response.json()
    })
    .catch((err) => {
        console.log(err);
    });
response.then(data => {
    dialogsData = data
    return data
})

function dataStatusCheck() {
    if (!dialogsData) {
        console.log('No data...')
    } else {
        clearInterval(timerId);
        console.log("Data received ")
        globalSimulationFunction();
    }
}

function globalSimulationFunction() {
    console.log(dialogsData);
}



