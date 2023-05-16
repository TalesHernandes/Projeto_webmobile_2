export default function Post() {
  const form = document.getElementById("employee-form-post");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const jsonData = {};

    for (const [key, value] of formData.entries()) {
      jsonData[key] = value;
    }

    jsonData["name"] = jsonData["name"] + " " + jsonData["surname"];
    delete jsonData["surname"];

    console.log(jsonData);

    fetch("https://mack-webmobile.vercel.app/api/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(jsonData)
    })
      .then((response) => {
        if (response.ok) {
          alert("Post succeeded");
          return response.json();
        } else {
          throw new Error("Post failed");
        }
      })
      .then((data) => {
        console.log(data);
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
        alert("Post failed");
      });
  });
}
