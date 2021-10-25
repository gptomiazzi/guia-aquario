import { Sidebar } from "../src/components/Sidebar/index.js";
import { MainGrid } from "../src/components/MainGrid/index.js";
import { useEffect } from "react";
import WebFont from "webfontloader";
import { ContentWrapper } from "../src/components/ContentWrapper/index.js";

export default function Home() {

    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Poppins', 'Roboto']
            }
        });
    }, []);

    return (

        <MainGrid>
            <Sidebar />

            <ContentWrapper>
                <div className="conteudo__principal">
                    <h3>Instruções</h3>
                </div>
                <div className="conteudo__secundario">
                    <h3>teste</h3>
                </div>
                <div className="conteudo__secundario">
                    <h3>teste2</h3>
                </div>
                <div className="conteudo__secundario">
                    <h3>papaterra</h3>
                </div>
                <div className="conteudo__secundario">
                    <h3>papacu</h3>
                </div>
            </ContentWrapper>

        </MainGrid>
    )
}
