import styled from "styled-components"

export default function Home() {
  
    const MainGrid = styled.main`
        display: grid;
        grid-template-areas: "sidebar content";
        grid-template-columns: 15% 1fr;
        grid-template-rows: 100vh;
        grid-column-gap: 1px;
        grid-row-gap: 0px;
    `;

    return (

        <MainGrid>
            <section className="teste">
                <p style={{ gridArea: "sidebar" }}>aaaaaaaaaaaaaaaaaa</p>
            </section>
        </MainGrid>
    )
}