import { Link } from "react-router-dom"
import edit from "./Edit"

export default function EmployeeCard ({key, name, avatar, email, salary, date, status}) {
    return (
        <>
            <article className="card">
                <section className="superior">
                    <img className="employeePfp" src={avatar} alt="employee profile picture"/>
                    <p>{name}</p>
                </section>
                <section className="inferior">
                    <img class="status" src={status + ".png"} alt="status"/>
                    <img className="edit" src="edit-small.png" alt="edit"/>
                </section>
            </article>
        </>
    )
}