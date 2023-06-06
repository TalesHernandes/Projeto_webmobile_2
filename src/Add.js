import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import Post from "./Post";
import Header from "./Header";

export default function Add() {
    const handleSubmit = (e) => {
        e.preventDefault();
        Post();
    }
    
    return (
        <>
            <section className="container">
                <Header />
                    <section className="formContainer">
                        <article className="employeeArticle">
                            <article className="formsArticle" id="addFormsArticle">
                                <form id="employee-form-post" onSubmit={handleSubmit}>
                                    <label htmlFor="name">Name: </label>
                                    <input type="text" id="name" name="name"/>
                                    <br />
                                    <br />

                                    <label htmlFor="surname">Surname: </label>
                                    <input type="text" id="surname" name="surname"/>
                                    <br />
                                    <br />

                                    <input type="hidden" id="avatar" name="avatar"/>

                                    <label htmlFor="email">E-mail: </label>
                                    <input type="email" id="email" name="email"/>
                                    <br />
                                    <br />

                                    <label htmlFor="salary">Salary: </label>
                                    <input type="number" id="salary" name="salary"/>
                                    <br />
                                    <br />

                                    <label htmlFor="date">Date: </label>
                                    <input type="date" id="date" name="date"/>
                                    <br />
                                    <br />

                                    <label>Status: </label>
                                    <input type="radio" name="rdo" id="active" value="Active"/>
                                    <input type="radio" name="rdo" id="inactive" value="Inactive"/>
                                    <div className="switch" id="addSwitch">
                                        <label htmlFor="active">Active</label>
                                        <label htmlFor="inactive">Inactive</label>
                                        <span></span>
                                    </div>
                                    <button className="submitButton" id="addSubmitButton" type="submit"></button>
                                </form>
                            </article>
                        </article>
                    </section>
                <Link to="/">
                    <img className="return" src="return.png" alt="edit" />
                </Link>
            </section>
        </>
    )
}
