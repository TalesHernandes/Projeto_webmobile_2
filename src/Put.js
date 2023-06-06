export default function Put({ ID }) {
    const _id = ID;

    const form = document.getElementById("employee-form-put");
    const formData = new FormData(form);
    const jsonData = {};

    for (const [key, value] of formData.entries()) {
        jsonData[key] = value;
    }

    const statusInput = document.querySelector('input[name="rdo"]:checked');
    if (statusInput) {
        jsonData["status"] = statusInput.value;
    }

    jsonData["name"] = jsonData["name"] + " " + jsonData["surname"];
    delete jsonData["surname"];

    fetch(`https://mack-webmobile.vercel.app/api/users/${_id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(jsonData)
    })
    .then((response) => {
        if (response.ok) {
            alert("Put funcionou");
            return response.json();
        } else {
            throw new Error("Put falhou");
        }
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error);
        alert("Put falhou");
    })
}
