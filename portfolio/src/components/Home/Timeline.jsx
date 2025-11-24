import { sampadaPhotoPaths } from "../../sampadaInfo";

export default function Timeline(){
    return (
        <div className="timeline-container">
            <div className="timeline-image">
                <img src={sampadaPhotoPaths[1].info} alt={sampadaPhotoPaths[1].id} />
            </div>
            <div className="timeline-information">
                <p> I obtained my PhD in Mechanical Engineering from Carnegie Mellon University, where I was advised by Prof. Carmel Majidi. My doctoral research focused on nature-inspired micropatterned surfaces to better understand and control adhesion and friction, with applications in soft robotic locomotion and particulate grasping.</p>
                <p>I completed my Master’s in Mechanical Engineering at CMU, working on liquid metal–based composites of self-healing soft polymers for smart orthotics, also advised by Prof. Carmel Majidi. My research journey began during my undergraduate internship at the Veermata Jijabai Technological Institute (University of Mumbai), where I worked in the Center of Excellence in Complex and Nonlinear Dynamical Systems under the guidance of Prof. Faruk Kazi where I worked on developing deperming protocols for marine vessels using cage systems and synthesis and characterization of magnetorheological fluids for shock absorption applications.</p>
                <p>I am currently a postdoctoral research associate in Prof. Burak Ozdoganlar’s  Multiscale Manufacturing and Dynamics Laboratory at CMU, developing implantable, cell-based bioelectronic systems as part of the ARPA-H funded BIO-INSYNC consortium. Beyond the lab, I’m deeply passionate about mentorship and community building in STEM, and about creating spaces that foster collaboration, equity, and scientific growth.</p>
            </div>
        </div>
    );
}