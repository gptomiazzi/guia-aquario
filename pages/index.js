import { Sidebar } from "../src/components/Sidebar/index.js";
import { MainGrid } from "../src/components/MainGrid/index.js";
import { useEffect } from "react";
import WebFont from "webfontloader";
import { ContentWrapper } from "../src/ImageText/index.js";

export default function Home() {

    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Poppins', 'Roboto']
            }
        });
    }, []);

    return (

        <MainGrid className="mainGrid">
            <Sidebar />

            <ContentWrapper>
                <div className="content">
                    <img src="/images/doencas.png" />
                    <p>aaaaaa</p>
                </div>
                <div className="content">
                    <img src="/images/doencas.png" />
                    <p>aaaaaa</p>
                </div>
                <div className="content">
                    <img src="/images/doencas.png" />
                    <p>aaaaaa</p>
                </div>
                <div className="content">
                    <img src="/images/doencas.png" />
                    <p>aaaaaa</p>
                </div>
            </ContentWrapper>
        </MainGrid>
    )
}
