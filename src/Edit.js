import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

export default function Edit({_id, name, surname, avatar, email, salary, date, status}) {
    let { state } = useLocation();
    console.log(useLocation().state)
    return (
        <>
            <form id="employee-form">
                <label htmlFor="name">Nome: </label>
                <input type="text" id="name" name="name" value={useLocation().state.name}/>
                <br />

                <label htmlFor="surname">Sobrenome: </label>
                <input type="text" id="surname" name="surname" value={useLocation().state.surname}/>
                <br />

                <label htmlFor="avatar">Avatar: </label>
                <input type="text" id="avatar" name="avatar" value={useLocation().state.avatar}/>
                <br />

                <label htmlFor="email">E-mail: </label>
                <input type="email" id="email" name="email" value={useLocation().state.email}/>
                <br />

                <label htmlFor="salary">Salário: </label>
                <input type="number" id="salary" name="salary" value={useLocation().state.salary}/>
                <br />

                <label htmlFor="date">Data: </label>
                <input type="date" id="date" name="date" value={useLocation().state.date}/>
                <br />

                <label>Status:</label>
                <label htmlFor="active">Ativo</label>
                <input type="radio" id="active" name="status" value="Active" checked={useLocation().state.status === 'Active'} />
                <label htmlFor="inactive">Inativo</label>
                <input type="radio" id="inactive" name="status" value="Inactive" checked={useLocation().state.status === 'Inactive'} />
                <br />

                <button type="submit" onClick={() => Post()}>Enviar</button>
            </form>
            <Link to="/">Home</Link>
        </>
    )
}