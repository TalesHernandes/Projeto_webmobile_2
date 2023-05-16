import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import Put from "./Put";

export default function Edit() {
    let { state } = useLocation();
    console.log(useLocation().state)
    const [name, setName] = useState(state.name);
    const [surname, setSurname] = useState(state.surname);
    const [avatar, setAvatar] = useState(state.avatar);
    const [email, setEmail] = useState(state.email);
    const [salary, setSalary] = useState(state.salary);
    const [date, setDate] = useState(state.date);
    const [status, setStatus] = useState(state.status);
  
    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleSurnameChange = (e) => {
        setSurname(e.target.value);
    }

    const handleAvatarChange = (e) => {
        setAvatar(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handleSalaryChange = (e) => {
        setSalary(e.target.value);
    }

    const handleDateChange = (e) => {
        setDate(e.target.value);
    }
    
    return (
        <>
            <form id="employee-form-put">
                <label htmlFor="name">Nome: </label>
                <input type="text" id="name" name="name" value={name} onChange={handleNameChange}/>
                <br />

                <label htmlFor="surname">Sobrenome: </label>
                <input type="text" id="surname" name="surname" value={surname} onChange={handleSurnameChange}/>
                <br />

                <label htmlFor="avatar">Avatar: </label>
                <input type="text" id="avatar" name="avatar" value={avatar} onChange={handleAvatarChange}/>
                <br />

                <label htmlFor="email">E-mail: </label>
                <input type="email" id="email" name="email" value={email} onChange={handleEmailChange}/>
                <br />

                <label htmlFor="salary">Salário: </label>
                <input type="number" id="salary" name="salary" value={salary} onChange={handleSalaryChange}/>
                <br />

                <label htmlFor="date">Data: </label>
                <input type="date" id="date" name="date" value={date} onChange={handleDateChange}/>
                <br />

                <label>Status:</label>
                <label htmlFor="active">Ativo</label>
                <input type="radio" id="active" name="status" value="Active" checked={status === 'Active'} onChange={() => setStatus('Active')} />
                <label htmlFor="inactive">Inativo</label>
                <input type="radio" id="inactive" name="status" value="Inactive" checked={status === 'Inactive'} onChange={() => setStatus('Inactive')} />
                <br />

                <button type="submit" onClick={() => Put(useState(state._id))}>Enviar</button>
            </form>
            <Link to="/">Home</Link>
        </>
    )
}