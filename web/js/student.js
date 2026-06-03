window.onload = async function () {

    let username =
        localStorage.getItem("studentName");

    document.getElementById("welcome").innerHTML =
        "Welcome " + username;

    let response =
        await fetch(
            "http://localhost:8080/student?name=" + username
        );

    let data =
        await response.text();

    let parts =
        data.split(",");

    document.getElementById("profile").innerHTML =
    "<h3>Profile</h3>" +
    "<br>" +
    "<b>Name :</b> " + parts[0] + "<br>" +
    "<b>Age :</b> " + parts[1] + "<br>" +
    "<b>Room Number :</b> " + parts[2] + "<br>" +
    "<b>Contact :</b> " + parts[3];

    await loadNotices();

    await loadRent();
    // Employees

let empResponse =
    await fetch(
        "http://localhost:8080/viewEmployees"
    );

let empData =
    await empResponse.text();

let empRows =
    empData.trim().split("\n");

let empHtml =
    "<table border='1' width='100%'>";

empHtml +=
    "<tr>" +
    "<th>Name</th>" +
    "<th>Role</th>" +
    "<th>Contact</th>" +
    "</tr>";

for(let row of empRows) {

    let parts =
        row.split(",");

    empHtml +=
        "<tr>" +
        "<td>" + parts[1] + "</td>" +
        "<td>" + parts[2] + "</td>" +
        "<td>" + parts[3] + "</td>" +
        "</tr>";
}

empHtml += "</table>";

document.getElementById("employees").innerHTML =
    empHtml;


    // Facilities

let facilityResponse =
    await fetch(
        "http://localhost:8080/viewFacilities"
    );

let facilityData =
    await facilityResponse.text();

let facilityRows =
    facilityData.trim().split("\n");

let facilityHtml =
    "<table border='1' width='100%'>";

facilityHtml +=
    "<tr>" +
    "<th>Facility</th>" +
    "<th>Timing</th>" +
    "<th>Description</th>" +
    "</tr>";

for(let row of facilityRows) {

    let parts =
        row.split(",");

    facilityHtml +=
        "<tr>" +
        "<td>" + parts[1] + "</td>" +
        "<td>" + parts[2] + "</td>" +
        "<td>" + parts[3] + "</td>" +
        "</tr>";
}

facilityHtml += "</table>";

document.getElementById("facilities").innerHTML =
    facilityHtml;
};

async function loadNotices() {

    let response =
        await fetch(
            "http://localhost:8080/notices"
        );

    let data =
        await response.text();

    if(data.trim() === "") {

        document.getElementById(
            "noticeList").innerHTML =
            "No Notices Available";

        return;
    }

    let rows =
        data.trim().split("\n");

    let html = "";

    for(let row of rows) {

        let parts =
            row.split("|");

        html +=
            "<div style='border:1px solid gray;padding:10px;margin:10px;'>"
            + "<h3>" + parts[0] + "</h3>"
            + "<p>" + parts[1] + "</p>"
            + "<small>" + parts[2] + "</small>"
            + "</div>";
    }

    document.getElementById(
        "noticeList").innerHTML =
        html;
}

async function loadRent() {

    let username =
        localStorage.getItem(
            "studentName"
        );

    let response =
        await fetch(
            "http://localhost:8080/rent?studentName="
            + encodeURIComponent(username)
        );

    let data =
        await response.text();

    if(data.trim() === "") {

        document.getElementById(
            "rentList").innerHTML =
            "No Rent Records Found";

        return;
    }

    let rows =
        data.trim().split("\n");

    let html = "";

    for(let row of rows) {

        let parts =
            row.split(",");

        html +=
            "<div style='border:1px solid gray;padding:10px;margin:10px;'>"
            + "<b>Month:</b> " + parts[0] + "<br>"
            + "<b>Amount:</b> ₹" + parts[1] + "<br>"
            + "<b>Status:</b> " + parts[2]
            + "</div>";
    }

    document.getElementById(
        "rentList").innerHTML =
        html;
}
function logout() {
    localStorage.removeItem("studentName");
    window.location.href = "login.html";
}