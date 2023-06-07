import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import Put from "./Put";
import Header from "./Header";

export default function Edit() {
    const location = useLocation();
    let { state } = location;
    const _id = useLocation().state._id
    const [name, setName] = useState(state?.name || '');
    const [surname, setSurname] = useState(state?.surname || '');
    const [avatar, setAvatar] = useState(state?.avatar || '');
    const [email, setEmail] = useState(state?.email || '');
    const [salary, setSalary] = useState(state?.salary || '');
    const [date, setDate] = useState(state?.date || '');
    const [status, setStatus] = useState(state?.status || '');
  
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

    const handleStatusChange = (e) => {
        setStatus(e.target.value);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        Put({ ID: _id });
    }
    
    return (
        <>
            <section className="container">
                <Header />
                    <section className="formContainer">
                        <article className="employeeArticle" id="editEmployeeArticle">
                            <section className="miniHeader">
                                <img src={state.avatar} alt="Employee avatar" />
                                <p>{useState(state?.name || '')} {useState(state?.surname || '')}</p>
                            </section>
                            <article className="formsArticle" id="editFormsArticle">
                                <form id="employee-form-put" onSubmit={handleSubmit}>
                                    <label htmlFor="name">Nome: </label>
                                    <input type="text" id="name" name="name" value={name} onChange={handleNameChange}/>
                                    <br />
                                    <br />

                                    <label htmlFor="surname">Sobrenome: </label>
                                    <input type="text" id="surname" name="surname" value={surname} onChange={handleSurnameChange}/>
                                    <br />
                                    <br />

                                    <label htmlFor="avatar">Avatar: </label>
                                    <input type="text" id="avatar" name="avatar" value={avatar} onChange={handleAvatarChange}/>
                                    <br />
                                    <br />

                                    <label htmlFor="email">E-mail: </label>
                                    <input type="email" id="email" name="email" value={email} onChange={handleEmailChange}/>
                                    <br />
                                    <br />

                                    <label htmlFor="salary">Salário: </label>
                                    <input type="number" id="salary" name="salary" value={salary} onChange={handleSalaryChange}/>
                                    <br />
                                    <br />

                                    <label htmlFor="date">Data: </label>
                                    <input type="date" id="date" name="date" value={date} onChange={handleDateChange}/>
                                    <br />
                                    <br />

                                    <label>Status: </label>
                                    <input type="radio" name="rdo" id="active" value="Active" checked={status === 'Active'} onChange={handleStatusChange} />
                                    <input type="radio" name="rdo" id="inactive" value="Inactive" checked={status === 'Inactive'} onChange={handleStatusChange} />
                                    <div className="switch">
                                        <label htmlFor="active">Active</label>
                                        <label htmlFor="inactive">Inactive</label>
                                        <span></span>
                                    </div>
                                    <button className="submitButton" type="submit"></button>
                                </form>
                            </article>
                        </article>
                    </section>
                <Link to="/">
                    <img className="return" id="editReturn" src="return.png" alt="edit" />
                </Link>
            </section>
        </>
    )
}
