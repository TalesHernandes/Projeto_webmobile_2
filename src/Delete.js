export default function Delete(_id) {
    fetch(`https://mack-webmobile.vercel.app/api/users/${_id}`, {
        method: "DELETE",
    })
      .then((response) => {
            if (response.ok) {
                alert("Delete funcionou");
            } else {
                throw new Error("Delete falhou");
            }
        })
        .then(() => {
            window.location.href = "/";
        })
        .catch((error) => {
            console.error(error);
            alert("Delete falhou");
        });
  }
  