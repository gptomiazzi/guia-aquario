import styled from "styled-components";

export const MainGrid = styled.main`
        display: grid;
        grid-template-areas: "sidebar conteudo";
        grid-template-columns: 15% 1fr;
        grid-template-rows: 100vh;
        grid-column-gap: 1px;
`;