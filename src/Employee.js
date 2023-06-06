import { Link, useLocation } from "react-router-dom"
import Delete from "./Delete";

export default function Employee() {
    const { state } = useLocation();
    const _id = useLocation().state._id
    console.log({_id})

    const handleClick = () => {
        Delete(_id)
    }
    return (
        <>
            <form id="employee-form-put">
                <label htmlFor="name">Nome: </label>
                <input type="text" id="name" name="name" value={state.name} />
                <br />

                <label htmlFor="surname">Sobrenome: </label>
                <input type="text" id="surname" name="surname" value={state.surname} disabled />
                <br />

                <label htmlFor="avatar">Avatar: </label>
                <input type="text" id="avatar" name="avatar" value={state.avatar} disabled />
                <br />

                <label htmlFor="email">E-mail: </label>
                <input type="email" id="email" name="email" value={state.email} disabled />
                <br />

                <label htmlFor="salary">Salário: </label>
                <input type="number" id="salary" name="salary" value={state.salary} disabled />
                <br />

                <label htmlFor="date">Data: </label>
                <input type="date" id="date" name="date" value={state.date} disabled />
                <br />

                <label>Status:</label>
                <label htmlFor="active">Ativo</label>
                <input type="radio" id="active" name="status" value="Active" checked={state.status === 'Active'} disabled />
                <label htmlFor="inactive">Inativo</label>
                <input type="radio" id="inactive" name="status" value="Inactive" checked={state.status === 'Inactive'} disabled />
                <br />
            </form>
            <Link to="/">Home</Link>
            <button onClick={handleClick}>Deletar</button>
        </>
    )
}