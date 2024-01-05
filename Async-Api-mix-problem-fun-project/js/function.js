
const tableRow = document.getElementById("table-rows");
const content = document.getElementById("tbody");

async function getData() {
    const url = "https://dummyjson.com/users";
    const params = {
        method: "GET",
        headers: {
            "Content-Type" : "application/json",
        },
    }

    try {
        const response = await fetch(url, params);
        const data = await response.json(); 

        const userList = data.users;
        let html = "";

        userList.forEach(function (users) {
            html += "<tr>";
            for(let key in users) {
                if(typeof users[key] === "string") {
                    html += "<td>" + users[key] + "</td>"
                } else {
                    html += "<td>" + JSON.stringify(users[key]) + "</td>"
                }
            }
            html += "</tr>";
        })

        content.innerHTML = html;


    } catch(error) {
        console.error("Erorr fetching data:", error.message)
    }

}

window.onload = function () {
    getData();
};