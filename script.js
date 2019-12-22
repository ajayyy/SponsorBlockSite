function getTotalStats() {
    sendRequestToCustomServer("GET", "https://sponsor.ajay.app/api/getTotalStats", function(xmlhttp) {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            let response = JSON.parse(xmlhttp.responseText);

            let totalUsers = response.userCount;
            let totalSubmissions = response.totalSubmissions;
            let minutesSaved = response.minutesSaved;

            //start count ups
            countUp(document.getElementById("totalUsers"), 0, totalUsers);
            countUp(document.getElementById("totalSubmissions"), 0, totalSubmissions);
            countUp(document.getElementById("daysSaved"), 0, (minutesSaved / 60 / 24).toFixed(2));

            // document.getElementById("totalUsers").innerText = totalUsers;
            // document.getElementById("totalSubmissions").innerText = totalSubmissions;
            // document.getElementById("hoursSaved").innerText = (minutesSaved / 60).toFixed(1);
        }
    });
}

function countUp(element, currentNumber, targetNumber) {
    element.innerText = currentNumber.toLocaleString();

    if (currentNumber == targetNumber) {
        //it's done
        return;
    }

    //count up
    let nextNumber = currentNumber + Math.ceil(targetNumber/100);
    if (nextNumber >= targetNumber) {
        nextNumber = targetNumber;
    }

    //call the next function
    setTimeout(() => countUp(element, nextNumber, targetNumber), 1);
}

function sendRequestToCustomServer(type, fullAddress, callback) {
    let xmlhttp = new XMLHttpRequest();

    xmlhttp.open(type, fullAddress, true);

    if (callback != undefined) {
        xmlhttp.onreadystatechange = function () {
        callback(xmlhttp, false);
        };

        xmlhttp.onerror = function(ev) {
        callback(xmlhttp, true);
        };
    }

    //submit this request
    xmlhttp.send();
}

getTotalStats();