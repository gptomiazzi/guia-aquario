import styled from "styled-components";

export const MainGrid = styled.main`
        display: grid;
        grid-template-areas: "sidebar content1 content2 content3 content4";
        grid-template-columns: repeat(5, 20%);
        grid-template-rows: 100vh;
        grid-column-gap: 1px;

        .mainGrid:nth-child(2) {
                grid-area: 'content1';
               
        }
        .mainGrid:nth-child(3) {
                grid-area: 'content2';
        }
        .mainGrid:nth-child(4) {
                grid-area: 'content3';
        }
        .mainGrid:nth-child(5) {
                grid-area: 'content4';
        }
`;