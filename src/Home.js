import Header from "./Header"
import MapCards from "./MapCards"
import { Link } from "react-router-dom"

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
                        <Link to="/add" className="addEmployee"></Link>
                        <Link className="filterEmployee">
                        </Link>
                    </article>
                </section>
                <MapCards />
            </section>
        </>
    )
}