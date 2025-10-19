import { sampadaCerts } from "../../sampadaInfo";
import Cert from "./Cert";
import Layout from "../Layout";
export default function Certs(){

    return (
        <Layout>
            <div className="certifications-container">
                <h2>Certs</h2>
                {sampadaCerts.map((cert)=>(
                    <Cert key={cert.id} {...cert} />
                ))}
            </div>
        </Layout>
    );
}