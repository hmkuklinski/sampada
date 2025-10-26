import { sampadaCerts } from "../../sampadaInfo";
import Cert from "./Cert";
import Layout from "../Layout";
import MyHeader from '../MyHeader';
export default function Certs(){

    return (
        <Layout>
            <div className="certifications-container">
                <MyHeader title="Certifications" id="certs-header" />
                {sampadaCerts.map((cert)=>(
                    <Cert key={cert.id} {...cert} />
                ))}
            </div>
        </Layout>
    );
}