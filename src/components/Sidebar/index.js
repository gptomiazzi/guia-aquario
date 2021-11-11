import styled from "styled-components";

export function Sidebar() {
    return (
      <Sidebar.Wrapper>
        <a href="/">
          <img src="/images/logo.png" className="logo-icon" />
        </a>

        <div className="teste"></div>

        <nav>
        <p />
          <a href="/LitragemEVidro">
            <img src="/images/litragemevidro.png" />
            Litragem e vidro
          </a>
          <a href="/ListagemPeixes">
            <img src="/images/parametros.png" />
            Listagem de peixes
          </a>
          <a href="/">
            <img src="/images/doencas.png" />
            Doenças
          </a>
          <a href="/">
            <img src="/images/lampada.png" />
            Iluminação
          </a>
          <p />
        </nav>
      </Sidebar.Wrapper>
    )
  }
  Sidebar.Wrapper = styled.div`
    
    grid-area: "sidebar";
    padding: 1rem;
    height: 2200px;
    border-right: 2px solid black;

    .logo-icon {
      border: none;
      margin: 0 1em;
      width: 130px;
      height: auto;
      transform: rotate(45deg);
      @media(min-width: 1600px) {
        margin: 0 3em;
      }
    }
    p {
      background: black;
      height: 2px;
      width: auto;
      margin: 5% 0;
    }
    nav {
      margin-top: 1em;
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