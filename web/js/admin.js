//Student  section
function studentSection() {

    document.getElementById("content").innerHTML =

    `<h2>Student Management</h2>

    <button onclick="showStudentForm()">
        Add Student
    </button>

    <button onclick="showStudents()">
        View Students
    </button>

    <div id="studentContent"></div>`;
}
function showStudentForm() {

    document.getElementById("content").innerHTML =

    `<h2>Add Student</h2>

    <input type="text"
           id="sname"
           placeholder="Name"><br><br>

    <input type="number"
           id="sage"
           placeholder="Age"><br><br>

    <input type="number"
           id="sroom"
           placeholder="Room No"><br><br>

    <input type="text"
           id="scontact"
           placeholder="Contact"><br><br>

    <input type="password"
           id="spassword"
           placeholder="Password"><br><br>

    <button onclick="saveStudent()">
        Save Student
    </button>`;
}

async function showStudents() {

    let response =
        await fetch(
            "http://localhost:8080/viewStudents"
        );

    let data =
        await response.text();

    let rows =
        data.trim().split("\n");

    let html =
        "<h2>Students List</h2>";

    html +=
        "<table border='1' cellpadding='10'>";

    html +=
    "<tr>" +
    "<th>ID</th>" +
    "<th>Name</th>" +
    "<th>Age</th>" +
    "<th>Room</th>" +
    "<th>Contact</th>" +
    "<th>Action</th>" +
    "</tr>";

    for(let row of rows) {

        let parts =
            row.split(",");

      html +=
    "<tr>" +
    "<td>" + parts[0] + "</td>" +
    "<td>" + parts[1] + "</td>" +
    "<td>" + parts[2] + "</td>" +
    "<td>" + parts[3] + "</td>" +
    "<td>" + parts[4] + "</td>" +

    "<td>" +

    "<button onclick='editStudent(\"" +
    parts[1] +
    "\")'>Edit</button> "

    +

    "<button onclick='deleteStudent(\"" +
    parts[1] +
    "\")'>Delete</button>"

    +

    "</td>" +

    "</tr>";
}

    html += "</table>";
document.getElementById("content").innerHTML =
    html;
}
async function saveStudent() {

    let name =
        document.getElementById("sname").value;

    let age =
        document.getElementById("sage").value;

    let roomNo =
        document.getElementById("sroom").value;

    let contact =
        document.getElementById("scontact").value;

    let password =
        document.getElementById("spassword").value;

    let response =
        await fetch(
            "http://localhost:8080/addStudent",
            {
                method: "POST",

                headers: {
                    "Content-Type":
                    "application/x-www-form-urlencoded"
                },

                body:
                    "name=" + encodeURIComponent(name) +
                    "&age=" + encodeURIComponent(age) +
                    "&roomNo=" + encodeURIComponent(roomNo) +
                    "&contact=" + encodeURIComponent(contact) +
                    "&password=" + encodeURIComponent(password)
            });

    let result =
        await response.text();

    if(result === "SUCCESS") {

        alert("Student Added Successfully");

    } else {

        alert("Failed To Add Student");
    }
}
async function editStudent(name) {

    let response =
        await fetch(
            "http://localhost:8080/getStudent?name=" +
            encodeURIComponent(name)
        );

    let data =
        await response.text();

    let parts =
        data.split(",");

    document.getElementById("content").innerHTML =

    `<h2>Edit Student</h2>

    <input type="text"
           id="sname"
           value="${parts[1]}"><br><br>

    <input type="number"
           id="sage"
           value="${parts[2]}"><br><br>

    <input type="number"
           id="sroom"
           value="${parts[3]}"><br><br>

    <input type="text"
           id="scontact"
           value="${parts[4]}"><br><br>

    <input type="password"
           id="spassword"
           value="${parts[5]}"><br><br>

    <button onclick="updateStudent()">
        Update Student
    </button>`;
}
async function updateStudent() {

    let name =
        document.getElementById("sname").value;

    let age =
        document.getElementById("sage").value;

    let roomNo =
        document.getElementById("sroom").value;

    let contact =
        document.getElementById("scontact").value;

    let password =
        document.getElementById("spassword").value;

    let response =
        await fetch(
            "http://localhost:8080/updateStudent",
            {
                method: "POST",

                headers: {
                    "Content-Type":
                    "application/x-www-form-urlencoded"
                },

                body:
                    "name=" + encodeURIComponent(name)
                    + "&age=" + encodeURIComponent(age)
                    + "&roomNo=" + encodeURIComponent(roomNo)
                    + "&contact=" + encodeURIComponent(contact)
                    + "&password=" + encodeURIComponent(password)
            });

    let result =
        await response.text();

    alert(result);

    showStudents();
}
async function deleteStudent(name) {

    let ok =
        confirm("Delete Student?");

    if(!ok) return;

    let response =
        await fetch(
            "http://localhost:8080/deleteStudent?name="
            + encodeURIComponent(name)
        );

    let result =
        await response.text();

    alert(result);

    showStudents();
}

//Employee Section
function employeeSection() {

    document.getElementById("content").innerHTML =

    `<h2>Employee Management</h2>

    <button onclick="showEmployeeForm()">
        Add Employee
    </button>

    <button onclick="showEmployees()">
        View Employees
    </button>

    <div id="employeeContent"></div>`;
}
function showEmployeeForm() {

    document.getElementById("content").innerHTML =

    `<h2>Add Employee</h2>

    <input type="text"
           id="ename"
           placeholder="Name"><br><br>

    <input type="text"
           id="erole"
           placeholder="Role"><br><br>

    <input type="text"
           id="econtact"
           placeholder="Contact"><br><br>

    <button onclick="saveEmployee()">
        Save Employee
    </button>`;
}
async function showEmployees() {

    let response =
        await fetch(
            "http://localhost:8080/viewEmployees"
        );

    let data =
        await response.text();

    let rows =
        data.trim().split("\n");

    let html =
        "<h2>Employees List</h2>";

    html +=
        "<table border='1' cellpadding='10'>";

    html +=
        "<tr>" +
        "<th>ID</th>" +
        "<th>Name</th>" +
        "<th>Role</th>" +
        "<th>Contact</th>" +
        "<th>Action</th>" +
        "</tr>";

    for(let row of rows) {

        if(row.trim() === "") continue;

        let parts =
            row.split(",");

        html +=
            "<tr>" +

            "<td>" + parts[0] + "</td>" +

            "<td>" + parts[1] + "</td>" +

            "<td>" + parts[2] + "</td>" +

            "<td>" + parts[3] + "</td>" +

            "<td>" +

            "<button onclick='editEmployee("
            + parts[0] +
            ")'>Edit</button> "

            +

            "<button onclick='deleteEmployee("
            + parts[0] +
            ")'>Delete</button>"

            +

            "</td>" +

            "</tr>";
    }

    html += "</table>";

    document.getElementById(
        "employeeContent").innerHTML =
        html;
}
async function saveEmployee() {

    try {

        let name =
            document.getElementById("ename").value;

        let role =
            document.getElementById("erole").value;

        let contact =
            document.getElementById("econtact").value;

        let response =
            await fetch(
                "http://localhost:8080/addEmployee",
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                        "application/x-www-form-urlencoded"
                    },

                    body:
                        "name=" + encodeURIComponent(name) +
                        "&role=" + encodeURIComponent(role) +
                        "&contact=" + encodeURIComponent(contact)
                });

        let result = await response.text();

        alert("Server Response = " + result);

    } catch(error) {

        alert("ERROR: " + error);
        console.log(error);
    }
}
async function editEmployee(id) {

    let response =
        await fetch(
            "http://localhost:8080/getEmployee?id=" + id
        );

    let data =
        await response.text();
        alert(data);

    let parts =
        data.split(",");

    document.getElementById("employeeContent").innerHTML =

    `<h2>Edit Employee</h2>

    <input type="hidden"
           id="eid"
           value="${parts[0]}">

    <input type="text"
           id="ename"
           value="${parts[1]}"><br><br>

    <input type="text"
           id="erole"
           value="${parts[2]}"><br><br>

    <input type="text"
           id="econtact"
           value="${parts[3]}"><br><br>

    <button onclick="updateEmployee()">
        Update Employee
    </button>`;
}
async function deleteEmployee(id) {

    let ok =
        confirm(
            "Delete Employee?"
        );

    if(!ok) return;

    let response =
        await fetch(
            "http://localhost:8080/deleteEmployee?id="
            + id
        );

    let result =
        await response.text();

    if(result === "SUCCESS") {

        alert(
            "Employee Deleted"
        );

        showEmployees();

    } else {

        alert(
            "Delete Failed"
        );
    }
}
async function updateEmployee() {

    let id =
        document.getElementById("eid").value;

    let name =
        document.getElementById("ename").value;

    let role =
        document.getElementById("erole").value;

    let contact =
        document.getElementById("econtact").value;

    alert(
        "ID=" + id +
        "\nName=" + name +
        "\nRole=" + role +
        "\nContact=" + contact
    );

    let response =
        await fetch(
            "http://localhost:8080/updateEmployee",
            {
                method:"POST",

                headers:{
                    "Content-Type":
                    "application/x-www-form-urlencoded"
                },

                body:
                    "id=" + encodeURIComponent(id)
                    + "&name=" + encodeURIComponent(name)
                    + "&role=" + encodeURIComponent(role)
                    + "&contact=" + encodeURIComponent(contact)
            });

    let result =
        await response.text();

    alert("Server Response = " + result);

    if(result === "SUCCESS") {

        alert("Employee Updated");

        showEmployees();

    } else {

        alert("Update Failed");
    }
}
//Room Section
function roomSection() {

    document.getElementById("content").innerHTML =

    `<h2>Room Management</h2>

    <button onclick="showRoomForm()">
        Add Room
    </button>

    <button onclick="showRooms()">
        View Rooms
    </button>

    <div id="roomContent"></div>`;
}
function showRoomForm() {

    document.getElementById("content").innerHTML =

    `<h2>Add Room</h2>

    <input type="number"
           id="roomno"
           placeholder="Room Number"><br><br>

    <input type="number"
           id="capacity"
           placeholder="Capacity"><br><br>

    <input type="number"
           id="occupied"
           placeholder="Occupied Beds"><br><br>

    <button onclick="saveRoom()">
        Save Room
    </button>`;
}
async function saveRoom() {

    let roomNo =
        document.getElementById("roomno").value;

    let capacity =
        document.getElementById("capacity").value;

    let occupied =
        document.getElementById("occupied").value;

    let response =
        await fetch(
            "http://localhost:8080/addRoom",
            {
                method: "POST",

                headers: {
                    "Content-Type":
                    "application/x-www-form-urlencoded"
                },

                body:
                    "roomNo=" + encodeURIComponent(roomNo) +
                    "&capacity=" + encodeURIComponent(capacity) +
                    "&occupied=" + encodeURIComponent(occupied)
            });

    let result =
        await response.text();

    if(result === "SUCCESS") {

        alert("Room Added Successfully");

    } else {

        alert("Failed To Add Room");
    }
}
async function showRooms() {

    let response =
        await fetch(
            "http://localhost:8080/viewRooms"
        );

    let data =
        await response.text();

    let rows =
        data.trim().split("\n");

    let html =
        "<h2>Rooms List</h2>";

    html +=
        "<table border='1' cellpadding='10'>";

    html +=
        "<tr>" +
        "<th>Room No</th>" +
        "<th>Capacity</th>" +
        "<th>Occupied</th>" +
        "<th>Action</th>" +
        "</tr>";

    for(let row of rows) {

        let parts =
            row.split(",");

        html +=
            "<tr>" +
            "<td>" + parts[0] + "</td>" +
            "<td>" + parts[1] + "</td>" +
            "<td>" + parts[2] + "</td>" +

            "<td>" +

            "<button onclick='editRoom(" +
            parts[0] +
            ")'>Edit</button> " +

            "<button onclick='deleteRoom(" +
            parts[0] +
            ")'>Delete</button>" +

            "</td>" +

            "</tr>";
    }

    html += "</table>";

    document.getElementById("content").innerHTML =
        html;
}
async function editRoom(roomNo) {

    let response =
        await fetch(
            "http://localhost:8080/getRoom?roomNo=" + roomNo
        );

    let data =
        await response.text();

    let parts =
        data.split(",");

    document.getElementById("content").innerHTML =

    `<h2>Edit Room</h2>

    <input type="number"
           id="roomno"
           value="${parts[0]}" readonly><br><br>

    <input type="number"
           id="capacity"
           value="${parts[1]}"><br><br>

    <input type="number"
           id="occupied"
           value="${parts[2]}"><br><br>

    <button onclick="updateRoom()">
        Update Room
    </button>`;
}
async function deleteRoom(roomNo) {

    let ok =
        confirm("Delete Room?");

    if(!ok) return;

    let response =
        await fetch(
            "http://localhost:8080/deleteRoom?roomNo="
            + roomNo
        );

    let result =
        await response.text();

    alert(result);

    showRooms();
}
//Facility Section
function facilitySection() {

    document.getElementById("content").innerHTML =

    `<h2>Facility Management</h2>

    <button onclick="showFacilityForm()">
        Add Facility
    </button>

    <button onclick="showFacilities()">
        View Facilities
    </button>

    <div id="facilityContent"></div>`;
}
function showFacilityForm() {

    document.getElementById("content").innerHTML =

    `<h2>Add Facility</h2>

    <input type="text"
           id="fname"
           placeholder="Facility Name"><br><br>

    <input type="text"
           id="ftiming"
           placeholder="Timing"><br><br>

    <textarea
           id="fdescription"
           placeholder="Description">
    </textarea><br><br>

    <button onclick="saveFacility()">
        Save Facility
    </button>`;
}
async function saveFacility() {

    let facilityName =
        document.getElementById("fname").value;

    let timing =
        document.getElementById("ftiming").value;

    let description =
        document.getElementById("fdescription").value;

    let response =
        await fetch(
            "http://localhost:8080/addFacility",
            {
                method: "POST",

                headers: {
                    "Content-Type":
                    "application/x-www-form-urlencoded"
                },

                body:
                    "facilityName=" + encodeURIComponent(facilityName) +
                    "&timing=" + encodeURIComponent(timing) +
                    "&description=" + encodeURIComponent(description)
            });

    let result =
        await response.text();

    if(result === "SUCCESS") {

        alert("Facility Added Successfully");

    } else {

        alert("Failed To Add Facility");
    }
}
async function showFacilities() {

    let response =
        await fetch(
            "http://localhost:8080/viewFacilities"
        );

    let data =
        await response.text();

    let rows =
        data.trim().split("\n");

    let html =
        "<h2>Facilities List</h2>";

    html +=
        "<table border='1' cellpadding='10'>";

    html +=
        "<tr>" +
        "<th>ID</th>" +
        "<th>Facility</th>" +
        "<th>Timing</th>" +
        "<th>Description</th>" +
        "<th>Action</th>" +
        "</tr>";

    for(let row of rows) {

        let parts =
            row.split(",");

        html +=
            "<tr>" +
            "<td>" + parts[0] + "</td>" +
            "<td>" + parts[1] + "</td>" +
            "<td>" + parts[2] + "</td>" +
            "<td>" + parts[3] + "</td>" +

            "<td>" +

            "<button onclick='editFacility(" +
            parts[0] +
            ")'>Edit</button> " +

            "<button onclick='deleteFacility(" +
            parts[0] +
            ")'>Delete</button>" +

            "</td>" +

            "</tr>";
    }

    html += "</table>";

    document.getElementById("content").innerHTML =
        html;
}
async function editFacility(id) {

    let response =
        await fetch(
            "http://localhost:8080/getFacility?id=" + id
        );

    let data =
        await response.text();

    let parts =
        data.split(",");

    document.getElementById("content").innerHTML =

    `<h2>Edit Facility</h2>

    <input type="hidden"
           id="fid"
           value="${parts[0]}">

    <input type="text"
           id="fname"
           value="${parts[1]}"><br><br>

    <input type="text"
           id="ftiming"
           value="${parts[2]}"><br><br>

    <textarea id="fdescription">${parts[3]}</textarea>
    <br><br>

    <button onclick="updateFacility()">
        Update Facility
    </button>`;
}
async function updateFacility() {

    let id =
        document.getElementById("fid").value;

    let facilityName =
        document.getElementById("fname").value;

    let timing =
        document.getElementById("ftiming").value;

    let description =
        document.getElementById("fdescription").value;

    let response =
        await fetch(
            "http://localhost:8080/updateFacility",
            {
                method: "POST",

                headers: {
                    "Content-Type":
                    "application/x-www-form-urlencoded"
                },

                body:
                    "id=" + encodeURIComponent(id)
                    + "&facilityName=" + encodeURIComponent(facilityName)
                    + "&timing=" + encodeURIComponent(timing)
                    + "&description=" + encodeURIComponent(description)
            });

    let result =
        await response.text();

    alert(result);

    showFacilities();
}
async function deleteFacility(id) {

    let ok =
        confirm("Delete Facility?");

    if(!ok) return;

    let response =
        await fetch(
            "http://localhost:8080/deleteFacility?id=" + id
        );

    let result =
        await response.text();

    alert(result);

    showFacilities();
}
//Notice Section

function noticeSection() {

    document.getElementById("content").innerHTML =

    `<h2>Notice Management</h2>

    <button onclick="showNoticeForm()">
        Add Notice
    </button>

    <button onclick="showNotices()">
        View Notices
    </button>

    <div id="noticeContent"></div>`;
}

function showNoticeForm() {

    document.getElementById("content").innerHTML =

    `<h2>Add Notice</h2>

    <input type="text"
           id="ntitle"
           placeholder="Notice Title"><br><br>

    <textarea
           id="nmessage"
           placeholder="Notice Message">
    </textarea><br><br>

    <button onclick="saveNotice()">
        Publish Notice
    </button>`;
}
async function saveNotice() {

    let title =
        document.getElementById("ntitle").value;

    let message =
        document.getElementById("nmessage").value;

    let response =
        await fetch(
            "http://localhost:8080/addNotice",
            {
                method: "POST",

                headers: {
                    "Content-Type":
                    "application/x-www-form-urlencoded"
                },

                body:
                    "title=" + encodeURIComponent(title) +
                    "&message=" + encodeURIComponent(message)
            });

    let result =
        await response.text();

    if(result === "SUCCESS") {

        alert("Notice Published Successfully");

    } else {

        alert("Failed To Publish Notice");
    }
}
async function showNotices() {

    let response =
        await fetch(
            "http://localhost:8080/viewNotices"
        );

    let data =
        await response.text();

    let rows =
        data.trim().split("\n");

    let html =
        "<h2>Notices</h2>";

    html +=
        "<table border='1' cellpadding='10'>";

    html +=
        "<tr>" +
        "<th>ID</th>" +
        "<th>Title</th>" +
        "<th>Message</th>" +
        "<th>Date</th>" +
        "<th>Action</th>" +
        "</tr>";

    for(let row of rows) {

        let parts =
            row.split(",");

        html +=
            "<tr>" +
            "<td>" + parts[0] + "</td>" +
            "<td>" + parts[1] + "</td>" +
            "<td>" + parts[2] + "</td>" +
            "<td>" + parts[3] + "</td>" +

            "<td>" +

            "<button onclick='editNotice(" +
            parts[0] +
            ")'>Edit</button> " +

            "<button onclick='deleteNotice(" +
            parts[0] +
            ")'>Delete</button>" +

            "</td>" +

            "</tr>";
    }

    html += "</table>";

    document.getElementById("content").innerHTML =
        html;
}
async function editNotice(id) {

    let response =
        await fetch(
            "http://localhost:8080/getNotice?id=" + id
        );

    let data =
        await response.text();

    let parts =
        data.split(",");

    document.getElementById("content").innerHTML =

    `<h2>Edit Notice</h2>

    <input type="hidden"
           id="nid"
           value="${parts[0]}">

    <input type="text"
           id="ntitle"
           value="${parts[1]}"><br><br>

    <textarea id="nmessage">${parts[2]}</textarea>
    <br><br>

    <input type="text"
           id="ndate"
           value="${parts[3]}"><br><br>

    <button onclick="updateNotice()">
        Update Notice
    </button>`;
}
async function updateNotice() {

    let id =
        document.getElementById("nid").value;

    let title =
        document.getElementById("ntitle").value;

    let message =
        document.getElementById("nmessage").value;

    let datePosted =
        document.getElementById("ndate").value;

    let response =
        await fetch(
            "http://localhost:8080/updateNotice",
            {
                method:"POST",

                headers:{
                    "Content-Type":
                    "application/x-www-form-urlencoded"
                },

                body:
                    "id=" + encodeURIComponent(id)
                    + "&title=" + encodeURIComponent(title)
                    + "&message=" + encodeURIComponent(message)
                    + "&datePosted=" + encodeURIComponent(datePosted)
            });

    let result =
        await response.text();

    alert(result);

    showNotices();
}
async function deleteNotice(id) {

    let ok =
        confirm("Delete Notice?");

    if(!ok) return;

    let response =
        await fetch(
            "http://localhost:8080/deleteNotice?id=" + id
        );

    let result =
        await response.text();

    alert(result);

    showNotices();
}
//Rent Section
function rentSection() {

    document.getElementById("content").innerHTML =

    `<h2>Rent Management</h2>

    <button onclick="showRentForm()">
        Generate Rent
    </button>

    <button onclick="showRents()">
        View Rent
    </button>

    <div id="rentContent"></div>`;
}
function showRentForm() {

    document.getElementById("content").innerHTML =

    `<h2>Generate Rent</h2>

    <input type="text"
           id="rstudent"
           placeholder="Student Name"><br><br>

    <input type="text"
           id="rmonth"
           placeholder="Month"><br><br>

    <input type="number"
           id="ramount"
           placeholder="Amount"><br><br>

    <select id="rstatus">
        <option>Pending</option>
        <option>Paid</option>
    </select><br><br>

    <button onclick="saveRent()">
        Save Rent
    </button>`;
}
async function saveRent() {

    let studentName =
        document.getElementById("rstudent").value;

    let month =
        document.getElementById("rmonth").value;

    let amount =
        document.getElementById("ramount").value;

    let status =
        document.getElementById("rstatus").value;

    let response =
        await fetch(
            "http://localhost:8080/addRent",
            {
                method: "POST",

                headers: {
                    "Content-Type":
                    "application/x-www-form-urlencoded"
                },

                body:
                    "studentName=" + encodeURIComponent(studentName)
                    + "&month=" + encodeURIComponent(month)
                    + "&amount=" + encodeURIComponent(amount)
                    + "&status=" + encodeURIComponent(status)
            });

    let result =
        await response.text();

    if(result === "SUCCESS") {

        alert("Rent Generated Successfully");

    } else {

        alert("Failed To Generate Rent");
    }
}

async function showRents() {

    alert("showRents started");

    let response =
        await fetch(
            "http://localhost:8080/viewRents"
        );

    alert("response received");

    let data =
        await response.text();

    alert(data);


    let rows =
        data.trim().split("\n");

    let html =
        "<h2>Rent Records</h2>";

    html +=
        "<table border='1' cellpadding='10'>";

    html +=
        "<tr>" +
        "<th>ID</th>" +
        "<th>Student</th>" +
        "<th>Month</th>" +
        "<th>Amount</th>" +
        "<th>Status</th>" +
        "<th>Action</th>" +
        "</tr>";

    for(let row of rows) {

        let parts =
            row.split(",");

        html +=
            "<tr>" +
            "<td>" + parts[0] + "</td>" +
            "<td>" + parts[1] + "</td>" +
            "<td>" + parts[2] + "</td>" +
            "<td>" + parts[3] + "</td>" +
            "<td>" + parts[4] + "</td>" +

            "<td>" +

            "<button onclick='editRent(" +
            parts[0] +
            ")'>Edit</button> " +

            "<button onclick='deleteRent(" +
            parts[0] +
            ")'>Delete</button>" +

            "</td>" +

            "</tr>";
    }

    html += "</table>";

    document.getElementById("content").innerHTML =
        html;
}

async function editRent(id) {

    let response =
        await fetch(
            "http://localhost:8080/getRent?id=" + id
        );

    let data =
        await response.text();

    let parts =
        data.split(",");

    document.getElementById("content").innerHTML =

    `<h2>Edit Rent</h2>

    <input type="hidden"
           id="rid"
           value="${parts[0]}">

    <input type="text"
           id="rstudent"
           value="${parts[1]}"><br><br>

    <input type="text"
           id="rmonth"
           value="${parts[2]}"><br><br>

    <input type="number"
           id="ramount"
           value="${parts[3]}"><br><br>

    <select id="rstatus">
        <option ${parts[4]=="Pending"?"selected":""}>Pending</option>
        <option ${parts[4]=="Paid"?"selected":""}>Paid</option>
    </select><br><br>

    <button onclick="updateRent()">
        Update Rent
    </button>`;
}
async function updateRent() {

    let id =
        document.getElementById("rid").value;

    let studentName =
        document.getElementById("rstudent").value;

    let month =
        document.getElementById("rmonth").value;

    let amount =
        document.getElementById("ramount").value;

    let status =
        document.getElementById("rstatus").value;

    let response =
        await fetch(
            "http://localhost:8080/updateRent",
            {
                method:"POST",

                headers:{
                    "Content-Type":
                    "application/x-www-form-urlencoded"
                },

                body:
                    "id=" + encodeURIComponent(id)
                    + "&studentName=" + encodeURIComponent(studentName)
                    + "&month=" + encodeURIComponent(month)
                    + "&amount=" + encodeURIComponent(amount)
                    + "&status=" + encodeURIComponent(status)
            });

    let result =
        await response.text();

    alert(result);

    showRents();
}
async function deleteRent(id) {

    let ok =
        confirm("Delete Rent Record?");

    if(!ok) return;

    let response =
        await fetch(
            "http://localhost:8080/deleteRent?id=" + id
        );

    let result =
        await response.text();

    alert(result);

    showRents();
}
function logout() {
    localStorage.removeItem("AdminName");
    window.location.href = "login.html";
}

