import styled from "styled-components";

export const ContentWrapper = styled.section`
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    grid-template-rows: 33.33% 33.33% 33.33%;
    /* grid-gap: 1px; */

    .conteudo__secundario:nth-child(2) {
        background: url('/images/doencas.png') center / cover no-repeat;
        grid-column: 1 / 1;
    }
    .conteudo__secundario:nth-child(3) {
        background: url('/images/iluminacao.png') center / cover no-repeat;
        grid-column: 2 / 2;
    }
    .conteudo__secundario:nth-child(4) {
        background: url('/images/papaterra.jfif') center / cover no-repeat;
        grid-column: 3 / 3;
    }
`;