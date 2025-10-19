import Socials from './Socials';
import { sampadaName, sampadaPhotoPaths } from '../../sampadaInfo';
export default function AboutLanding(){
    return (
        <div className="about-container">
            <div className="about-left">
               <div className="about-photo">
                    {/* sampadaPhotoPaths index 0 - headshot information */}
                    <img src={sampadaPhotoPaths[0].info} alt={sampadaPhotoPaths[0].id} />
                </div> 
            </div>
            
            <div className="about-information">
                <div className="about-heading">
                    <h2>{sampadaName}</h2>
                </div>
                <div className="about-subheading">
                    <h4><i>Postdoctoral Research Associate</i> </h4>
                </div>
                <Socials />
                <div className="about-text">
                    <p>
                        I am currently a <b>Postdoctoral Research Associate</b> in the <b>Multiscale Manufacturing and Dynamics Laboratory</b> in the Department of Mechanical Engineering at Carnegie Mellon University (CMU), working with <b>Prof. Burak Ozdoganlar</b>. 
                        I am part of the <a href="https://engineering.cmu.edu/news-events/news/2024/10/02-bio-insync.html">BIO-INSYNC consortium</a>, a major initiative funded by ARPA-H, which aims to develop <b>implantable, cell-based bioelectronic systems</b> for patient-specific therapeutics and real-time disease monitoring. 
                        This marks a <b>significant pivot</b> for me — moving from traditional mechanical engineering and materials science into the realms of <b>biology and medicine</b>. 
                        I am deeply excited to contribute to this high-impact, interdisciplinary project and to connect with others who share a passion for <b>engineering healthcare</b>.
                    </p>
                    <p>
                        Previously, I completed my <b>PhD in Mechanical Engineering at CMU </b>under the guidance of <b>Prof. Carmel Majidi</b>. 
                        My doctoral research focused on <b>nature-inspired micropatterned surfaces</b> to better understand and control adhesion and friction for applications in soft robotic locomotion and particulate grasping. 
                        This work bridged bio-inspired design and soft materials engineering, generating fundamental insights that now shape my approach to translating innovative science into real-world applications.
                    </p>
                    <p>
                        Looking ahead, my goal is to <b>build a research program at the intersection of bioinspired engineering, soft materials, and healthcare technologies</b>. 
                        I am particularly interested in creating <b>translational platforms </b>that bridge fundamental science with clinical impact — from smart implantable systems to novel bioelectronic interfaces. 
                        I'm always eager to collaborate with researchers, clinicians, and industry partners who share a vision for <b>engineering solutions that improve patient care</b>.
                        If our interests align, I'd love to connect and start a conversation.
                    </p>
                </div>
            </div>
        </div>
    );
}