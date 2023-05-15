import Header from "./Header"
import EmployeeCard from "./EmployeeCard"

export default function Home () {
    return (
        <>
            <section className="container">
                <Header />
                <section className="filters">
                    <form className="search">
                        <input type="text" id="search" name="name" placeholder="Search"/>
                    </form>
                    <article className="buttons">
                        <button className="addEmployee">
                            <img />
                        </button>
                        <button className="filterEmployee">
                            <img />
                        </button>
                    </article>
                </section>
                <section className="employeeCards">
                    <EmployeeCard />
                    <EmployeeCard />
                    <EmployeeCard />
                    <EmployeeCard />
                    <EmployeeCard />
                    <EmployeeCard />
                    <EmployeeCard />
                    <EmployeeCard />
                    <EmployeeCard />
                    <EmployeeCard />
                    <EmployeeCard />
                    <EmployeeCard />
                </section>
            </section>
        </>
    )
}