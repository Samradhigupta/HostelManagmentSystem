async function login() {

    let role =
        document.getElementById("role").value;

    let username =
        document.getElementById("username").value;

    let password =
        document.getElementById("password").value;

    try {

        let response = await fetch(
            "http://localhost:8080/login",
            {
                method: "POST",

                headers: {
                    "Content-Type":
                    "application/x-www-form-urlencoded"
                },

                body:
                    "role=" + encodeURIComponent(role) +
                    "&username=" + encodeURIComponent(username) +
                    "&password=" + encodeURIComponent(password)
            });

        let result = await response.text();

        if(result === "ADMIN") {

            window.location.href =
                "admin.html";

        }
        else if(result === "STUDENT") {

            localStorage.setItem(
                "studentName",
                username);

            window.location.href =
                "student.html";
        }
        else {

            alert(
                "Invalid Username or Password");
        }

    } catch(error) {

        console.error(error);

        alert(
            "Cannot connect to server. Make sure HostelServer is running.");
    }
}