export default function Put({_id}) {
    const form = document.getElementById("employee-form-put");

    console.log("Passou no PUT, ID: "+ _id)
  
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
  
      fetch(`https://mack-webmobile.vercel.app/api/users/${_id}`, { // Modify API endpoint URL
        method: "PUT", // Change HTTP method
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
            throw new Error("Put falhou");
          }
        })
        .then((data) => {
          console.log(data);
          window.location.href = "/";
        })
        .catch((error) => {
          console.error(error);
          alert("Put falhou");
        });
    });
  }
  