import { Sidebar } from "../src/components/Sidebar/index.js";
import { MainGrid } from "../src/components/MainGrid/index.js";
import { useEffect } from "react";
import WebFont from "webfontloader";

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


        </MainGrid>
    )
}