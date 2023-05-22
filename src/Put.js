export default function Put({ ID }) {
  const _id = ID;
  console.log("Passou no PUT, ID: " + _id);
  
  const form = document.getElementById("employee-form-put");
  const formData = new FormData(form);
  const jsonData = {};

  for (const [key, value] of formData.entries()) {
    jsonData[key] = value;
  }

  jsonData["name"] = jsonData["name"] + " " + jsonData["surname"];
  delete jsonData["surname"];
  console.log("Passou do delete jsonData");

  fetch(`https://mack-webmobile.vercel.app/api/users/${_id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(jsonData)
  })
    .then((response) => {
      if (response.ok) {
        alert("Put succeeded");
        return response.json();
      } else {
        throw new Error("Put failed");
      }
    })
    .then((data) => {
      console.log(data);
      window.location.href = "/";
    })
    .catch((error) => {
      console.error(error);
      alert("Put failed");
    })
    .finally(() => {
      form.removeEventListener("submit", submitHandler);
    });
    form.addEventListener("submit", submitHandler);
}
