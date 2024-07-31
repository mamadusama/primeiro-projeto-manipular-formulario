import { useState } from "react";

function App() {
  const [name, setName] = useState(""); // criar um stado para nome
  const [email, setEmail] = useState("");//criar um stado para email
  const [age, setAge] = useState("");// criar um stado par idade
  const [user, setUser] = useState({});//estado para objeto

  function handelCadastrar(e) {
    e.preventDefault(); // previne para que a pagina não atualize automaticamente

    setUser({
      name: name,
      email: email,
      age: age,
    });

    // esvaziar campos  depois de submeter form
    setName("");
    setEmail("");
    setAge("");
  }


  return (
    <>
      <div>
        <h1>formulário de submição</h1>
        <form onSubmit={handelCadastrar}>
          <label>Nome</label>
          <br></br>
          <input
            placeholder="diite seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br></br>

          <label>Email</label>
          <br></br>
          <input
            placeholder="diite seu Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br></br>

          <label>Idade</label>
          <br></br>
          <input
            placeholder="diite sua Idade"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <br></br>

          <br></br>
          <button type="submit">cadastrar</button>
        </form>
        <br></br>

        <div>
          <span>
            Nome: {user.name}
            <br></br>
            Email: {user.email}
            <br></br>
            Idade: {user.age}
          </span>
        </div>
      </div>
    </>
  );
}

export default App;
