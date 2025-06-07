import Layout from "./Layout";
import PageLanding from "./PageLanding";
export default function Home(){
    return (
        <Layout>
            <div className="page-container">
                <PageLanding />
            </div>
        </Layout>
    );
}