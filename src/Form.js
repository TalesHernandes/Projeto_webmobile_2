import Post from "./Post.js";

export default function Form() {
  return (
    <>
      <form id="employee-form">
        <label htmlFor="name">Nome: </label>
        <input type="text" id="name" name="name" />
        <br />

        <label htmlFor="surname">Sobrenome: </label>
        <input type="text" id="surname" name="surname" />
        <br />

        <label htmlFor="avatar">Avatar: </label>
        <input type="text" id="avatar" name="avatar" />
        <br />

        <label htmlFor="email">E-mail: </label>
        <input type="email" id="email" name="email" />
        <br />

        <label htmlFor="salary">Salário: </label>
        <input type="number" id="salary" name="salary" />
        <br />

        <label htmlFor="date">Data: </label>
        <input type="date" id="date" name="date" />
        <br />

        <label htmlFor="status">Status: </label>
        <input type="radio" id="status" name="status" value="Active" />
        <label htmlFor="Active">Ativo</label>
        <input type="radio" id="status" name="status" value="Inactive" />
        <label htmlFor="Inactive">Inativo</label>
        <br />
        <button onClick={Post}>Enviar</button>
      </form>
    </>
  );
}
