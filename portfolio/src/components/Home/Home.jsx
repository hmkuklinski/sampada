import Layout from "../Layout";
import AboutLanding from "./AboutLanding";
export default function Home(){
    return (
        <Layout>
            <div className="page-container">
                <AboutLanding />
            </div>
        </Layout>
    );
}