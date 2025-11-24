import Layout from "../Layout";
import MyHeader from "../MyHeader";
export default function Thesis(){

    const thesisTitle = (
        <div className="thesis-title">
            <MyHeader title="Low Aspect Ratio Nature-Inspired Micropatterned Surfaces for Tunable Adhesion" id="thesis-title" />
        </div>
    );

    const citation = (
        <div className="thesis-citation">
            <p>
                Acharya, S. S. (2025). 
                <i>Low aspect ratio nature-inspired micropatterned surfaces for tunable adhesion (Order No. 32244486).</i>   
                Available from Dissertations & Theses @ Carnegie Mellon University. (3263606943). Retrieved from <a href="https://www.proquest.com/docview/3263606943">https://www.proquest.com/dissertations-theses/low-aspect-ratio-nature-inspired-micropatterned/docview/3263606943/se-2</a>
            </p>
        </div>
    );

    const degree= (
        <div className="thesis-degree">
            <p>Doctor of Philosophy in Mechanical Engineering at Carnegie Mellon University</p>
        </div>
    );

    const supervisor = (
        <div className="thesis-subtitle">
            <strong>Thesis Supervisor:  </strong>
            <p>Dr. Carmel Majidi</p>
        </div>
    );

    const committee = (
        <div className="thesis-subtitle">
            <h4>Thesis Committee:</h4>
            <p>
                Dr. Carmel Majidi (Thesis Supervisor), 
                Dr. Burak Ozdoganlar, 
                Dr. Rosalyn Abbott, 
                Dr. Natalie McGuier
            </p>
        </div>
    );

    const abstract= (
        <div className="thesis-text">
            <h2>Abstract</h2>
            <blockquote>
                The ability to achieve controllable adhesion and friction is fundamental to
                biological locomotion, gripping, and object manipulation, yet remains a major challenge in soft robotics. 
                Conventional bioinspired adhesives often employ high-aspect-ratio fibrillar structures that provide strong adhesion but are fragile, difficult to fabricate in soft elastomers. 
                This thesis investigates an alternative approach: low-aspect-ratio, nature-inspired micropatterned surfaces that are mechanically stable, fabrication-friendly, and capable of tunable adhesion across diverse environments.
            </blockquote>
            <blockquote>
                In the first part of this work, hemispherical microstructures were fabricated in soft elastomers and characterized for their frictional adhesion response. 
                These surfaces were integrated into soft robotic limbs and testedagainst glass, acrylic, and metal substrates under dry and wet conditions.
                Extending this concept, a five-limbed, sea star-inspired soft robot was developed, and its locomotion was quantified on flat and inclined acrylic surfaces in both environments. 
                These studies demonstrated that hemispherical textures provide sufficient adhesion for locomotion while enabling easy detachment, highlighting their utility for amphibious soft robotics.
            </blockquote>
            <blockquote>
                The second part expanded the design space to include hemispherical, wedge, and sucker-like microstructures with aspect ratios near unity but spanning different functional sizes. 
                Adhesion was systematically characterized on flat glass surfaces under varying unloading rates and applied loads. 
                Further, adhesion was tested against individual glass beads of 0.5–5 mm diameter, and particulate manipulation was evaluated by quantifying bead pickup from a petri dish. 
                These experiments revealed that hemispheres and plain elastomer surfaces rely primarily on rate-sensitive viscoelastic adhesion, whereas wedges and suckers, though ineffective on flat substrates, engage particles through interlocking or rim confinement. 
                In bulk bead pickup, suckers achieved the highest mean performance, suggesting that geometry-driven confinement plays a central role in granular manipulation.
            </blockquote>
            <blockquote>
                Together, these studies show that geometry, loading rate, and environment jointly tune adhesion and friction in low-aspect-ratio micropatterned surfaces. 
                No single mechanism is universally sufficient: hemispheres provide contact adhesion, wedges enable frictional interlocking, and suckers contribute confinement. 
                Integrating these motifs into soft robotic systems demonstrated their ability to support amphibious locomotion and particle pickup across dry and wet conditions. 
                This work establishes low-aspect-ratio micropatterns as a practical and versatile design strategy for tunable adhesion in soft robotics, offering new pathways for robots that can climb, grip, and manipulate objects in real-world, particulate-rich environments.
            </blockquote>
        </div>
    );

    const pdfLink = (
        <div className="thesis-link">
            <div className="project-link-div">
                <a href="https://www.proquest.com/docview/3263606943" target="_blank" rel="noopener noreferrer">
                    Read Thesis  <ion-icon name="chevron-forward-outline"></ion-icon>
                </a>
            </div>
        </div>
    );

    return (
        <Layout>
             <div className="page-container" id="thesis">
                <div className="thesis-content">
                    {thesisTitle}{degree}
                    {committee}
                    
                    <div className="project-info">
                        {abstract}
                        {pdfLink}
                    </div>{citation}
                </div>
            </div>
            {/* <div className="page-container" id="thesis">
                <MyHeader title="Thesis" id="thesis" />
                <div className="thesis-text">
                    <h4>Coming Soon! Please check back later.</h4>
                </div>
            </div> */}
        </Layout>
    );
}