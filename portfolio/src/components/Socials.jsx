import { sampadaLinks } from "../sampadaInfo";

export default function Socials(){
    return (
        <div className="socials-container">
            {sampadaLinks.map((link) => (
                <div className="social-link" key={link.id}>
                    <a href={link.info} target="_blank" rel="noopener noreferrer">
                        <img src={link.path} alt={link.id} className="social-icon"/>
                    </a>
                </div>
            ))}
        </div>
    );
}