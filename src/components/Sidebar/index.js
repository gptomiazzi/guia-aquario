import styled from "styled-components";

export function Sidebar() {
    return (
      <Sidebar.Wrapper as="aside" className="sidebar">
        <a href="/">
          <img src="/images/logo.png" className="logo-icon" />
        </a>

        <nav>
        <p />
          <a href="/">
            <img src="/images/litragemevidro.png" />
            Litragem e vidro
          </a>
          <a href="/">
            <img src="/images/parametros.png" />
            Parâmetros p/ peixes
          </a>
          <a href="/">
            <img src="/images/doencas.png" />
            Doenças
          </a>
          <a href="/">
            <img src="/images/iluminacao.png" />
            Iluminação
          </a>
          <p />
        </nav>
      </Sidebar.Wrapper>
    )
  }
  Sidebar.Wrapper = styled.div`
    
    grid-area: 'sidebar';
    border-right: 2px solid black;
    padding: 1rem;

    .logo-icon {
      margin-left: 1.8em;
      width: 130px;
      height: auto;
      transform: rotate(45deg);
    }
    p {
      background: black;
      height: 2px;
      width: 10em;
      margin-left: 5%;
    }
    nav {
      padding: 1em;
    }
    nav a {
      font-size: 16px;
      color: #000000;
      margin: 25px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      text-decoration: none;
      img {
        width: 18px;
        height: 18px;
        margin-right: 5px; 
      }
    }
  `;