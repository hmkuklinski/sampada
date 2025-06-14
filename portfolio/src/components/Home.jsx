import Layout from "./Layout";
import AboutLanding from "./AboutLanding";
import Timeline from "./Timeline";
export default function Home(){
    return (
        <Layout>
            <div className="page-container">
                <AboutLanding />
                <div className="header-wrapper">
                    <h3 className="header-text">Background</h3>
                    <div className="underline">
                        <span className="circle"></span>
                    </div>
                </div>
                <Timeline />
            </div>
        </Layout>
    );
}