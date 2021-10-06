import styled from 'styled-components'
import { useRouter } from 'next/router';

const LoginArea = styled.div`
  padding: 1rem;

  p {
    font-weight: 900;
    line-height: 28px;
  }
  
  input {
    width: 238px;
    height: 45px;
    background: rgba(0, 30, 108, 0.76);
    margin-bottom: 1rem;
    border: 2px solid black;
    border-radius: 22.5px;
    text-align: center;
  } 
  
  button {
    width: 127px;
    height: 39px;
    border-radius: 22.5px;
    background: #FFE600;
    border: 2px solid black;
    font-weight: 900;
    line-height: 28px;
    display: block;
    margin-left: 25%;
    margin-top: 2rem;
    cursor: pointer;
  }

  button:hover {
    transition: 0.5s all;
    background: #d8c300;
  }
  `;

export default function LoginScreen() {

  const router = useRouter();

  return (
    <main style={{ display: 'flex', flexDirection: 'column' , flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <LoginArea>

        <form onSubmit={(e) => {
          e.preventDefault();
          const user = document.querySelector('#user').value;
          const password = document.querySelector('#password').value;

          if ((password) != 'admin') {
            alert("Usuário ou senha inválida!");
          } else {
            router.push('/');
          }
        } }>

          <label>
            <p>Usuário</p>
            <input id="user" autoComplete="off" />
          </label>

          <label>
            <p>Senha</p>
            <input id="password" type="password" autoComplete="off" />
          </label>
          
          <button type="submit">
            Login
          </button>
        </form>
        
      </LoginArea>

    </main>
  )
}
