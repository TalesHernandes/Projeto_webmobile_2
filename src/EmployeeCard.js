import { Link, } from "react-router-dom";

export default function EmployeeCard ({_id, name, surname, avatar, email, salary, date, status}) {
  return (
    <>
      <article className="card" id="ID" value={_id}>
        <section className="superior">
            <img className="employeePfp" src={avatar} alt="employee profile picture"/>
            <p>{name}</p>
        </section>
        <section className="inferior">
            <img className="status" src={status + ".png"} alt="status"/>
            <Link to="/edit" state={{_id: _id, name: name, surname: surname, avatar: avatar, email: email, salary: salary, date: date, status: status}}>
                <img className="edit" src="edit-small.png" alt="edit"/>
            </Link>
        </section>
      </article>
    </>
  );
}
