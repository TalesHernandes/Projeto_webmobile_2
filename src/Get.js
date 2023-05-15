export default function Get() {
    fetch("https://mack-webmobile.vercel.app/api/users")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Get failed");
      }
    })
    .then((data) => {
      console.log(data);
      // do something with the data
    })
    .catch((error) => {
      console.error(error);
      alert("Get failed");
    });
  
  }