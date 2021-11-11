import styled from "styled-components";

export const ContentWrapper = styled.div`

    .conteudo__principal {
        padding: 1em;
        text-align: justify;
       
    }
    .conteudo__secundario {
        padding: 1em;
        text-align: justify;
    }

    .litragemEVidro {
        margin: 11% 0;
    }

    .litragemEVidro label {
        display: flex;
        flex-direction: column;
        padding: 0.5em;
    }

    .litragemEVidro span {
        margin: 0.5em 0;
    }
    
    .litragemEVidro button {
        border-radius: 22px;
        border: 2px solid black;
        width: 127px;
        height: 39px;
        margin: 1em 25%;
        cursor: pointer;

    }

    .litragemEVidro button :hover {
        transition: 0.5s all;
        background: #d6cdcd;
    }
    
    .litragemEVidro input {
        border-radius: 22.5px;
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
`;