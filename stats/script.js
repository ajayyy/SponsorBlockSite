//load the top contributors

function loadTopContributors(sortType) {
    sendRequestToCustomServer("GET", "https://sponsor.ajay.app/api/getTopUsers?sortType=" + sortType, function(xmlhttp) {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            //response received
            let userNames = JSON.parse(xmlhttp.responseText).userNames;
            let viewCounts = JSON.parse(xmlhttp.responseText).viewCounts;
            let totalSubmissions = JSON.parse(xmlhttp.responseText).totalSubmissions;
            let minutesSaved = JSON.parse(xmlhttp.responseText).minutesSaved;

            let table = document.getElementById("topContributors");

            //clear all children
            while (table.firstChild != null) {
                table.removeChild(table.firstChild);
            }

            //add headers
            let headerRow = document.createElement("tr");

            let headerRank = document.createElement("td");
            headerRank.innerText = "Rank";
            let headerUserName = document.createElement("td");
            headerUserName.innerText = "User name";
            let headerSubmissions = document.createElement("td");
            headerSubmissions.innerText = "Submissions";
            let headerMinutes = document.createElement("td");
            headerMinutes.innerText = "People's Time Saved";
            let headerViews = document.createElement("td");
            headerViews.innerText = "Total Views";

            //add the columns
            headerRow.appendChild(headerRank);
            headerRow.appendChild(headerUserName);
            headerRow.appendChild(headerSubmissions);
            headerRow.appendChild(headerMinutes);
            headerRow.appendChild(headerViews);

            table.appendChild(headerRow);
    
            for (let i = 0; i < userNames.length; i++) {
                let row = document.createElement("tr");
    
                let rank = document.createElement("td");
                rank.innerText = (i + 1) + ".";
    
                let userNameColumn = document.createElement("td");
                userNameColumn.innerText = userNames[i];
                let viewCountsColumn = document.createElement("td");
                viewCountsColumn.innerText = viewCounts[i].toLocaleString();
                let totalSubmissionsColumn = document.createElement("td");
                totalSubmissionsColumn.innerText = totalSubmissions[i].toLocaleString();
				
                let minutesSavedColumn = document.createElement("td");
				let hours = Math.floor(minutesSaved[i] / 60);
                minutesSavedColumn.innerText = (hours > 0 ? hours + "h " : "") + (minutesSaved[i] % 60).toFixed(1) + "m";
    
                //add them to the row
                row.appendChild(rank);
                row.appendChild(userNameColumn);
                row.appendChild(totalSubmissionsColumn);
                row.appendChild(minutesSavedColumn);
                row.appendChild(viewCountsColumn);
    
                table.appendChild(row);
            }
        }
    });
}

function sortChange(sortType) {
    //reset all the buttons
    document.getElementById("sortChangeButton0").style.textDecoration = "unset";
    document.getElementById("sortChangeButton1").style.textDecoration = "unset";
    document.getElementById("sortChangeButton2").style.textDecoration = "unset";

    //set this one to be underlined
    document.getElementById("sortChangeButton" + sortType).style.textDecoration = "underline";

    //update the table
    loadTopContributors(sortType);
}

function getTotalStats() {
    sendRequestToCustomServer("GET", "https://sponsor.ajay.app/api/getTotalStats", function(xmlhttp) {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            let response = JSON.parse(xmlhttp.responseText);

            let totalUsers = response.userCount;
            let totalSubmissions = response.totalSubmissions;
            let minutesSaved = response.minutesSaved;
            let viewCount = response.viewCount;

            document.getElementById("totalUsers").innerText = totalUsers.toLocaleString();
            document.getElementById("totalSubmissions").innerText = totalSubmissions.toLocaleString();
            document.getElementById("daysSaved").innerText = Math.floor(minutesSaved / 60 / 24);
			document.getElementById("hoursSaved").innerText = (minutesSaved / 60 % 24).toFixed(1);
            document.getElementById("viewCount").innerText = viewCount.toLocaleString();
        }
    });
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

//load it for the first time
loadTopContributors(0);

getTotalStats();