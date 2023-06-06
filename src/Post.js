import ImageGenerator from "./ImageGenerator";

export default function Post() {
    const form = document.getElementById("employee-form-post");


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
        jsonData["avatar"] = ImageGenerator();

        fetch("https://mack-webmobile.vercel.app/api/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(jsonData)
        })
            .then((response) => {
                if (response.ok) {
                    alert("Post funcionou");
                    return response.json();
                } else {
                    throw new Error("Post falhou");
                }
            })
            .then((data) => {
                console.log(data);
                window.location.reload();
            })
            .catch((error) => {
                console.error(error);
                alert("Post falhou");
            })
            .finally(() => {
            });
    };

