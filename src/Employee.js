import { Link, useLocation } from "react-router-dom"

export default function Employee() {
    let { state } = useLocation();
    console.log(useLocation().state)
    
    return (
        <>
            <form id="employee-form-put">
                <label htmlFor="name">Nome: </label>
                <input type="text" id="name" name="name" value={state.name}/>
                <br />

                <label htmlFor="surname">Sobrenome: </label>
                <input type="text" id="surname" name="surname" value={state.surname}/>
                <br />

                <label htmlFor="avatar">Avatar: </label>
                <input type="text" id="avatar" name="avatar" value={state.avatar}/>
                <br />

                <label htmlFor="email">E-mail: </label>
                <input type="email" id="email" name="email" value={state.email}/>
                <br />

                <label htmlFor="salary">Salário: </label>
                <input type="number" id="salary" name="salary" value={state.salary}/>
                <br />

                <label htmlFor="date">Data: </label>
                <input type="date" id="date" name="date" value={state.date}/>
                <br />

                <label>Status:</label>
                <label htmlFor="active">Ativo</label>
                <input type="radio" id="active" name="status" value="Active" checked={state.status === 'Active'}/>
                <label htmlFor="inactive">Inativo</label>
                <input type="radio" id="inactive" name="status" value="Inactive" checked={state.status === 'Inactive'}/>
                <br />
            </form>
            <Link to="/">Home</Link>
        </>
    )
}