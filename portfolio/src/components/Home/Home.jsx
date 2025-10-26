import Layout from "../Layout";
import AboutLanding from "./AboutLanding";
// import Timeline from "./Timeline";
// import MyHeader from "../MyHeader";
export default function Home(){
    return (
        <Layout>
            <div className="page-container">
                <AboutLanding />
                {/* <MyHeader title="Background" id="background-header" /> */}
                {/* <Timeline /> */}
            </div>
        </Layout>
    );
}