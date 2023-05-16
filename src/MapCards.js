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
          throw new Error("Get falhou");
        }
      })
      .then((fetchedData) => {
        console.log(fetchedData);
        
        // Add surname attribute and update name attribute
        fetchedData.forEach(user => {
          const spaceIndex = user.name.indexOf(' ');
          if (spaceIndex !== -1) {
            user.surname = user.name.substring(spaceIndex + 1);
            user.name = user.name.substring(0, spaceIndex);
          }
        });
        
        fetchedData.sort((a, b) => a.name.localeCompare(b.name));
        setData(fetchedData);
      })
      .catch((error) => {
        console.error(error);
        alert("Get falhou");
      });
  }, []);

  const content = data.map((user) => (
    <EmployeeCard 
      _id={user._id} 
      name={user.name} 
      surname={user.surname} 
      avatar={user.avatar} 
      email={user.email} 
      salary={user.salary} 
      date={user.date} 
      status={user.status}
    />
  ));

  return <section className="employeeCards">{content}</section>;
}
