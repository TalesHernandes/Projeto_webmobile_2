import { useState, useEffect } from "react";
import EmployeeCard from "./EmployeeCard";

export default function MapCards() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://mack-webmobile.vercel.app/api/users")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Get failed");
        }
      })
      .then((fetchedData) => {
        console.log(fetchedData);
        setData(fetchedData); // Save fetched data to state variable
      })
      .catch((error) => {
        console.error(error);
        alert("Get failed");
      });
  }, []); // Fetch data once, when component mounts

  const content = data.map((user) => (
    <EmployeeCard key={user.id} name={user.name} avatar={user.avatar} email={user.email} salary={user.salary} date={user.date} status={user.status}/>
  ));

  return <section className="employeeCards">{content}</section>;
}
