import { Link } from "react-router-dom"
import edit from "./Edit"

export default function EmployeeCard () {
    return (
        <>
            <article className="card">
                <section className="superior">
                    <img className="employeePfp" src="https://pbs.twimg.com/profile_images/1503799113208324099/c5AYQhKp_400x400.jpg" alt="employee profile picture"/>
                    <p>Tales</p>
                </section>
                <section className="inferior">
                    <img class="status" src="active.png" alt="status"/>
                    <img className="edit" src="edit-small.png" alt="edit"/>
                </section>
            </article>
        </>
    )
}