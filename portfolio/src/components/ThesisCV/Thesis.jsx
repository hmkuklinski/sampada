import Layout from "../Layout";
import MyHeader from "../MyHeader";
export default function Thesis(){
    return (
        <Layout>
            <div className="page-container" id="thesis">
                <MyHeader title="Thesis" id="thesis" />
                <div className="thesis-text">
                    <h4>Coming Soon! Please check back later.</h4>
                </div>
            </div>
        </Layout>
    );
}