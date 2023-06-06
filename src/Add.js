import { Link } from "react-router-dom";
import Post from "./Post.js";

export default function Add() {
    return (
        <>
            <form id="employee-form-post">
                <label htmlFor="name">Nome: </label>
                <input type="text" id="name" name="name" />
                <br />

                <label htmlFor="surname">Sobrenome: </label>
                <input type="text" id="surname" name="surname" />
                <br />

                <input type="hidden" id="avatar" name="avatar" />

                <label htmlFor="email">E-mail: </label>
                <input type="email" id="email" name="email" />
                <br />

                <label htmlFor="salary">Salário: </label>
                <input type="number" id="salary" name="salary" />
                <br />

                <label htmlFor="date">Data: </label>
                <input type="date" id="date" name="date" />
                <br />

                <label>Status:</label>
                <label htmlFor="active">Ativo</label>
                <input type="radio" id="active" name="status" value="Active" />
                <label htmlFor="inactive">Inativo</label>
                <input type="radio" id="inactive" name="status" value="Inactive" />
                <br />

                <button type="submit" onClick={() => Post()}>Enviar</button>
            </form>
            <Link to="/">Home</Link>
        </>
    );
}
