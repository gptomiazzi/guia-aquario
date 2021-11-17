import styled from "styled-components";

export const ContentWrapper = styled.div`

    .conteudo__principal {
        padding: 1em;
        text-align: justify;
       
    }

     .image {
        margin-bottom: 10rem;
    }

    .conteudo__secundario {
        padding: 1em;
        text-align: justify;
    }

    .litragemEVidro {
        margin: 11% 0;
    }

    .litragemEVidro label, .listaPeixes label {
        display: flex;
        flex-direction: column;
        padding: 0.5em;
    }

    .litragemEVidro span {
        margin: 0.5em 0;
    }
    
    .litragemEVidro button,  .listaPeixes button {
        border-radius: 22px;
        border: 2px solid black;
        background: #EEEEEE;
        width: 127px;
        height: 39px;
        margin: 1em 25%;
        cursor: pointer;

    }

    .litragemEVidro button :hover, .listaPeixes button:hover {
        transition: 0.5s all;
        background: #E5E5E5;
    }
    
    .litragemEVidro input, .listaPeixes input {
        border-radius: 22.5px;
        background: #EEEEEE;
        text-align: center;
        height: 45px;
        width: 238px;
        border: 2px solid black;
    }

    .listaPeixes {
        margin: 0.5em 1em;
        padding: 1em;
        list-style-type: none;
        li {
            margin: 0.5em 0;
        }
    }

    .listaPeixes__container {
        display: flex;
        flex-direction: column;
        width: auto;
        padding: 1em;
        border: 2px solid black;
        border-radius: 22.5px;
        background: #FEF1DF;
    }
`;