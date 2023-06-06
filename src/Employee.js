import { Link, useLocation } from "react-router-dom"
import Delete from "./Delete";
import Header from "./Header";
import { useState } from "react";

export default function Employee() {
    const { state } = useLocation();
    const _id = useLocation().state._id
    console.log({_id})

    const handleClick = () => {
        Delete(_id)
    }
    return (
        <>
            <section className="container">
                <Header />
                    <section className="formContainer">
                        <article className="employeeArticle">
                            <section className="miniHeader">
                                <img src={state.avatar} alt="Employee avatar" />
                                <p>{useState(state?.name || '')} {useState(state?.surname || '')}</p>
                            </section>
                            <article className="formsArticle" id="formsArticle">
                                <form id="employee-form-put">
                                    <label htmlFor="name">Nome: </label>
                                    <input type="text" id="name" name="name" value={state.name} disabled />
                                    <br />
                                    <br />

                                    <label htmlFor="surname">Sobrenome: </label>
                                    <input type="text" id="surname" name="surname" value={state.surname} disabled />
                                    <br />
                                    <br />

                                    <label htmlFor="avatar">Avatar: </label>
                                    <input type="text" id="avatar" name="avatar" value={state.avatar} disabled />
                                    <br />
                                    <br />

                                    <label htmlFor="email">E-mail: </label>
                                    <input type="email" id="email" name="email" value={state.email} disabled />
                                    <br />
                                    <br />

                                    <label htmlFor="salary">Salário: </label>
                                    <input type="number" id="salary" name="salary" value={state.salary} disabled />
                                    <br />
                                    <br />

                                    <label htmlFor="date">Data: </label>
                                    <input type="date" id="date" name="date" value={state.date} disabled />
                                    <br />
                                    <br />

                                    <label>Status: </label>
                                    <input type="radio" name="rdo" id="active" value="Active" checked={state.status === 'Active'} disabled />
                                    <input type="radio" name="rdo" id="inactive" value="Inactive" checked={state.status === 'Inactive'} disabled />
                                    <div className="switch">
                                        <label htmlFor="active">Active</label>
                                        <label htmlFor="inactive">Inactive</label>
                                        <span></span>
                                    </div>
                                </form>
                            </article>
                        </article>
                    </section>
                    <section className="buttonsContainer">
                        <Link
                            to="/edit"
                            state={{
                                _id: state._id,
                                name: state.name,
                                surname: state.surname,
                                avatar: state.avatar,
                                email: state.email,
                                salary: state.salary,
                                date: state.date,
                                status: state.status,
                            }}>
                            <img className="edit" src="edit.png" alt="edit" />
                        </Link>
                        <button className="deleteButton" onClick={handleClick}></button>
                        <Link to="/">
                            <img className="return" src="return.png" alt="edit" />
                        </Link>
                    </section>
            </section>
        </>
    )
}