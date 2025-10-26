export const sampadaNav= [
    {id:"home", text:"Home", link:"/"},
    //remember to change the navbar slice from (0,2) to (0,3) when adding this section!
    // {id:"projects", text:"Projects", link:"/projects"}, 
    {id:"publications", text:"Publications", link:"/publications"},
    {id:"thesis", text:"Thesis", link:"/thesis"},
    
];
export const sampadaMobile = [
    {id:"awards", text:"Awards", link:"/awards"},
    {id:"certifications", text:"Certifications", link:"/certifications"},
    {id:"community", text:"Community", link:"/community"},
];
export const sampadaNavMobile = [...sampadaNav, ...sampadaMobile];


export const sampadaLinks = [
    {id:"gmail", info: "mailto:ssachary@andrew.cmu.edu", path:"/assets/icons/gmail.png"},
    {id: "linkedin", info:"https://www.linkedin.com/in/sampada-acharya29", path:"/assets/icons/linkedin.png"},
    {id:"google", info:"https://scholar.google.com/citations?user=siwPqX4AAAAJ&hl=en", path:"/assets/icons/google-scholar.png"}
];

//---------FOR SAMPADA'S PHOTOS--------
//template for entries here: {id:"", info:""}
export const sampadaPhotoPaths = [
    {id:"headshot", info:"/assets/headshots/sampada2.png"}, 
    {id: "timeline", info:"/assets/graphics/timeline.png"}
];

//-------- SAMPADA'S RESEARCH  PROJECTS HERE --------
//template for entries here: {id:"", subtitle:"", photo:"", info:"", link:"", articleLink:"", vidLink:"", tags:""}
export const sampadaProjects = [
    {
        id: "Gecko Adhesion Based Sea Star Crawler Robot", subtitle:"Acharya, Sampada*, Peter Roberts*, Tejas Rane, Raghav Singhal, Peize Hong, Viraj Ranade, Carmel Majidi,  Victoria Webster-Wood, and B. Reeja-Jayan.", photo:"../assets/graphics/publications/sampada-publication1.jpg", 
        info:"During my first project, I aimed to demonstrate the feasibility of a robotic system capable of amphibious adhesion and locomotion to navigate a wide range of environments. Thus, I worked on designing, fabricating and testing a cost-effective, nature-inspired soft robot with amphibious adhesion and locomotion capabilities to navigate multiple environments. By combining soft, structure-based, gecko-inspired adhesives with soft sea-star-shaped pneumatically actuated limbs I was able to create a soft crawler robot that could function in both wet and dry environments. I fabricated the gecko-inspired adhesive material using a cost-effective casting technique and characterized its adhesion in both dry and wet environments. I then collaborated with 3 different labs to lead a multidisciplinary team to integrate the adhesive material with a soft, 5-limbed sea-star inspired robot, designed and fabricated in-house and tested the robot’s amphibious locomotion performance. This soft robot is the first of its kind to use soft, gecko-inspired adhesive structure for locomotion on inclines up to 25° and adhesion on inclines up to 50° on both dry and wet surfaces. A paper based on this work was published in the Frontiers in Robotics and AI journal and I also presented this work at the APS 2024 March Meeting.", 
        link:"https://drive.google.com/file/d/1hYDgQhlolySEOT-Tl1oktWphae0Jf5SW/view?usp=drive_web", 
        articleLink:"https://www.frontiersin.org/journals/robotics-and-ai/articles/10.3389/frobt.2023.1209202/full", 
        vidLink:"/videos/Gecko Video.MP4",
        tags:"tag1"
    },
    {
        id: "Making the Case for Scaling up Microwave Sintering of  Ceramics.", 
        subtitle:"Aman, Bashu, Sampada Acharya, and B. Reeja-Jayan. \"Making the Case for Scaling up Microwave Sintering of  Ceramics.\" Advanced Engineering Materials 2302065 (2024)", 
        photo:"/assets/graphics/publications/sampada-publication3.jpg", 
        info:"Microwave sintering of ceramics, first explored in the1960s, is gaining renewed attention due to its lower energy consumption and reduced carbon footprint compared to conventional heating methods. Despite its advantages—such as contactless operation and geometric flexibility—scaling the process for industrial use remains challenging, primarily due to complex multiscale and multiphysics interactions during microwave coupling. However, recent advances in computational modeling, real-time control systems, materials characterization, and software tools present new opportunities to overcome these limitations. These innovations can enable precise understanding and management of processing heterogeneities, making scale-up more feasible. Additionally, the rapid rise of additive manufacturing intensifies the need for adaptable, energy-efficient sintering technologies that support near-net-shape fabrication. Microwave sintering, when refined and scaled, holds significant potential to revolutionize ceramic manufacturing for high-performance applications in medical, automotive, and aerospace sectors—supporting sustainability and design complexity in next-generation engineered materials.", 
        link:"/documents/Ceramics PDF.pdf",
        articleLink:"https://advanced.onlinelibrary.wiley.com/doi/10.1002/adem.202302065",
        vidLink:"",
        tags:"ceramics"
    },
    {
        id: "ExoForm: Shape Memory and Self-Fusing Semi-Rigid Wearables.", 
        subtitle:"Qin, Fang, Huai-Yu Cheng, Rachel Sneeringer, Maria Vlachostergiou, Sampada Acharya, Haolin Liu, Carmel Majidi,  Mohammad Islam, and Lining Yao. \"ExoForm: Shape Memory and Self-Fusing Semi-Rigid Wearables.\" In Extended  Abstracts of the 2021 CHI Conference on Human Factors in Computing Systems, pp. 1-8. 2021. ",
        photo:"/assets/graphics/publications/sampada-publication2.png", 
        info:"Traditional orthotics are typically non-adjustable and non-reusable, requiring skilled professionals for customization. To address these issues, I developed a composite material combining polyborosiloxane, a room-temperature self-healing polymer, and functional fillers like multi-walled carbon nanotubes and eutectic alloy of indium and gallium. The optimized composite was integrated with a 4D-printed polylactic acid structure to form a smart, conformable, self-healable, reusable and cost-effective medical brace that could be easily customized for each patient without requiring skilled medical professionals, making it cost-effective and accessible, even in remote settings.  This work was presented in the 2021 CHI Conference on Human Factors in Computing Systems.  ", 
        link:"/documents/exoform.pdf",
        articleLink:"https://dl.acm.org/doi/10.1145/3411763.3451818",
        vidLink:"/videos/Exoform Video.mp4",
        tags:"exoform"
    }, 
    
];

//-------- SAMPADA'S UPCOMING RESEARCH HERE --------
//template for entries here: {id:"", subtitle:"", photo:"", info:"", link:"", tags:""}
export const sampadaUpcoming = [ 
    {
        id: "Low Aspect-Ratio Soft Microstructures for Particulate Gripping in Soft Robotics", 
        info:"In developing soft robotic systems capable of manipulation and locomotion across diverse terrains and substrates, the ability to grip, release, and maneuver particles—such as debris, pills, or granular matter—is essential. Traditional methods such as vacuum suction or rigid clamping often fail on fragile, rough, or dry particles. Nature affords alternative strategies: geckos harness dry adhesion via fibrillar setae; tree frogs exploit capillary-assisted wet adhesion; suction cups in cephalopods regulate attachment underwater. Yet, many of these rely on elaborate high-aspect-ratio architectures that pose fabrication and durability challenges.Low-aspect-ratio (AR ≤ 1) microstructures—such as hemispheres, wedges, or cupped suckers—offer a robust, scalable, and mechanically resilient alternative. Their compactness reduces mechanical failure risks and simplifies molding processes. Exploring how these geometries interact with particles can reveal whether adhesion, frictional interlocking, or rim confinement drive gripping. This work examines pull-off adhesion and particulate pickup across such structures to elucidate underlying mechanisms and guide design of soft robotic gripping interfaces.", 
        tags:"microstructures"
    },
];

//-------- SAMPADA'S PUBLICATION INFORMATION HERE --------
//template for entries here: {id:"", subtitle:"", photo:"", info:""}
export const sampadaPublications = [
    //Project1 --> Publication1: Gecko
    sampadaProjects[0],
    //Project2 --> Publication2 : ExoForm
    sampadaProjects[1],
    //Project3 --> Publication3: Ceramics
    sampadaProjects[2]
];

//-------- SAMPADA'S UPCOMING PUBLICATION INFORMATION HERE --------
//template for entries here: {id:"", authors: [], info:"", photo:"", subtitle:""}
export const sampadaUpcomingPublications = [
    {id: "A study of interaction between soft nature-inspired  micropatterned (NIMP) surfaces and contaminants in the environment", authors: ["Sampada Acharya", "David Quinn", "Melinda Chen", "Carmel Majidi"], info:"", photo:"", subtitle:""},
    {id: "Multifunctional Liquid Crystal Elastomer Fibers for Muscle-Inspired Actuation", authors: [" Michael Vinciguerra", "Dinesh Patel", "Sampada Acharya","Kevin St. Luce", "Anthony Wertz", "Jose Hinojosa", "Michael Bennington", "Victoria Webster-Wood", "Lining Yao", "Carmel Majidi"], info:"", photo:"", subtitle:""},
    {id:"Microwave Sintering of Binder-Jetted Alumina Ceramics: An Alternative Route to High- Temperature  Conventional Sintering", authors: ["Bashu Aman","Sampada Acharya", "Alex Gourley", "Tania Slawecki", "Dinesh Agrawal", "Pranjali D. Muley", "B. Reeja Jayan"], info:"", photo:"", subtitle:""}
];

//SAMPADA AWARDS- 3MINUTE
export const sampadaTripleAwards = [
    {id:"award1", title:"2nd Place Award", subtitle:"3  Minute Thesis 2024 Championship", description:"This is a short description of the award."},
    {id:"award2", title:"People's Choice Award", subtitle:"3  Minute Thesis 2024 Championship", description:"This is a short description of the award."},
    {id:"award3", title:"Alumni Choice Award", subtitle:"3  Minute Thesis 2024 Championship", description:"This is a short description of the award."}
];

//-------- SAMPADA'S HIGHLIGHT AWARD INFORMATION HERE --------
export const highlightAward = {
    id:"3minute", imgsrc:"/assets/3min/award.png", title:"3 Minute Thesis", subtitle:"Thursday, March 14, 2024", desc:"Nine doctoral students explained their complex research and its importance in under three minutes during the championship round of Carnegie Mellon University’s Three Minute Thesis (3MT) competition. Sampada is the first person in the history of CMU to win awards in all categories.",
    linkedin:"https://www.linkedin.com/feed/update/urn:li:activity:7174395421450993664/",
    presentation:"https://www.youtube.com/watch?v=12ZjNYNX4YE",
    ceremony:"https://www.youtube.com/watch?v=y7P6M9sS5fM",
    awards: [
        {id:"award1", title:"2nd Place", subtitle:"3  Minute Thesis 2024 Championship", description:"Second Best Presentation"},
        {id:"award2", title:"People's Choice", subtitle:"3  Minute Thesis 2024 Championship", description:"Most votes received from audience members"},
        {id:"award3", title:"Alumni Choice", subtitle:"3  Minute Thesis 2024 Championship", description:"Most votes received online from alumni"}
    ]
}

//-------- SAMPADA'S AWARDS INFORMATION HERE --------
export const meritAwards = [
    {id:"doctoral", name:"Scholarly Project Funding", subtitle:"Spring 2025", desc:"Awarded from Carnegie Mellon University for doctoral research work."},
    {id:"pita-grant", name:"Pennsylvania Infrastructure Technology Alliance Grant", subtitle:"April 18th, 2024", desc:"Led and wrote a successful proposal, titled \"Additive Manufacturing of Calcium Aluminate for Custom-Designed, Implantable, Load Bearing, Resorbable Bone Scaffolds.\""},
    {id:"fellowship", name:"Center for Machine Learning and Health Fellowship", subtitle:"CMU 2023", desc:"Fellowship for Digital Health Innovation"},
    {id:"presentations", name:"Outstanding Presentation Award", subtitle:"CMU 2023", desc:"For a proposal made at the Carnegie Mellon Forum on Biomedical Engineering."},
    {id:"ambass", name:"Jeremiah Mpagazehe Graduate Student Service Award", subtitle:"CMU 2021", desc:"Award for service and contribution to the department of mechanical engineering during peak pandemic period as one othe first MechE MS student Abassadors."},
    {id:"undergrad", name:"Scholarship for Higher Education in Foreign Countries for Meritorious Students", subtitle:"2019-2020", desc:"Awarded by the Higher and Technical Education Department by the Government of Maharashtra."}
];

//-------- SAMPADA'S CERTIFICATIONS ---------
//{id:"", name:"", imgsrc:"", obtained:"", expired:""}
export const sampadaCerts =[
    {id:"cert1", name:"Working with Mice in Research Settings", certPdf:"/certifications/Working with Mice in Research Settings.pdf", obtained:"October 15, 2025", expired:"October 15, 2028", canExpire:true},
    {id:"cert2", name:"Working with Rats in Research Settings", certPdf:"/certifications/Working with Rats in Research Settings.pdf", obtained:"October 15, 2025", expired:"October 15, 2028", canExpire:true},
    {id:"cert3", name:"Biomedical Responsible Code of Conduct", certPdf:"/certifications/Biomedical Responsible Code of Conduct.pdf", obtained:"October 14, 2025", expired:"N/A", canExpire:false},
    {id:"cert4", name:"Biomedical Research- Basic Refresher", certPdf:"/certifications/Biomedical Research - Basic_Refresher.pdf", obtained:"October 14, 2025", expired:"October 14, 2028", canExpire:true},
    {id:"cert5", name:"Working with the IACUC- Investigators, Staff, Students", certPdf:"/certifications/Working with the IACUC - Investigators _ Staff _ Students.pdf", obtained:"October 14, 2025", expired:"October 14, 2028", canExpire:true},
];

//-------- SAMPADA LEADERSHIP ARTICLES -------
//{id:"", title:"", date:"", prev:"", imgsrc:"", article:""},
export const leadershipArticles = [
    {id:"cla", title:"SWE Collegiate Leadership Institute Program", date:"2024-2025", prev:"Developed management and communication skills necessary for leadership roles.", imgsrc:"/assets/leadership/swe-cmu.jpg", article:""},
    {id:"gsliasion", title:"Women in MechE Graduate Student Liason", date:"Fall 2024-Spring 2025", prev:"Facilitated academic, career, and social opportunities for the women in the mechanical engineering department.", imgsrc:"https://www.embs.org/wp-content/uploads/2023/07/ieee-embs-wibme-pr-featured-image-768x432.png", article:"https://www.instagram.com/cmu_womeninbme/"},
    {id:"megsoliason", title:"MEGSO's Department Liaison", date:"Fall 2023- Spring 2024", prev:"(MechE Graduate Student Organization) Worked with the academic committee to create tax, housing, financial, TA and career resources for graduate students within the department", imgsrc:"/assets/leadership/cmu-me.jpg", article:"https://meche.engineering.cmu.edu/education/graduate-programs/graduate-activities.html"},
    {id:"international", title:"CMU International Student Advocate", date:"Fall 2021- Spring 2023", prev:"Compiled and shared a tax resource for international students in collaboration with the Office of International Education at CMU.", imgsrc:"https://www.cmu.edu/admission/sites/default/files/styles/photo_grid_full_fallback/public/2021-09/international-students-900x600.jpg.webp?itok=iaDxGp6z", article:""},
    {id:"meche-ms", title:"MechE MS Student Ambassador", date:"November 2019- May 2021", prev:"Served as the liaison between the mechanical engineering department and master's student community at CMU.", imgsrc:"/assets/leadership/cmu-me.jpg", article:""},
    {id:"mentor", title:"Research Mentor", date:"", prev:"Mentored four undergraduate students for their honors research program resulting in a presentation in the \"Meeting of the Minds\" symposium at CMU.", imgsrc:"/assets/leadership/mind-symp.png", article:""},
];

export const mediaMentions = [
    {id:"robot", title:"So tricky, a robot can do it", date:"Kaitlyn Landram ", prev:"Carnegie Mellon Researchers have taken inspiration from geckos to create a material that adheres to wet and dry surfaces, even on an incline.", imgsrc:"/assets/leadership/article1.png", article:"https://engineering.cmu.edu/news-events/news/2023/08/16-gass-crawler.html"},
    {id:"ortho", title:"Resetting the standard in orthopedics", date:"Kaitlyn Landram", prev:"Exoform, a customizable, semi-rigid material with self-fusing edges has the potential to eliminate many of the doctors visits that go along with broken bones, not to mention help them heal faster.", imgsrc:"/assets/leadership/article2.png", article:"https://engineering.cmu.edu/news-events/news/2021/09/22-exoform.html"},
    {id:"3min", title:"Doctoral researchers shine in 3MT championship", date:"Sarah Bender", prev:"College of Engineering students explained complex research and its importance in under three minutes in the annual Three Minute Thesis competition.", imgsrc:"/assets/leadership/article3.png", article:"https://engineering.cmu.edu/news-events/news/2024/04/08-3mt.html"},
];

export const conferences= [
    {id:"gh2024", title:"Grace Hopper Celebration 2024", date:"October 2024", prev:"Represented the Women in MechE organization for its partication in the Grace Hopper celebration and assisted with managing interaction regarding graduate school experience with attendees.", imgsrc:"/assets/leadership/grace-hopper-sampada.jpg", article:"https://www.linkedin.com/feed/update/urn:li:activity:7115361216755032064/"},
    {id:"mit", title:"MIT A+B Applied Energy Symposium", date:"August 12-15, 2024", prev:"Bashu Aman presents \"Using Microwave Irradiations to Reduce CO2 Emissions from Alumina Ceramic Sintering Process\", with Advisor Professor B. Reeja-Jayan", imgsrc:"/assets/leadership/mit.png", article:"https://www.youtube.com/watch?v=XR5_qXpkGAs"},
    {id:"aps", title:"American Physical Society March Meeting", date:"March 2024", prev:"Presented \"Gecko-Inspired Adhesive Structures for Amphibious Soft Robot Locomotion\" by Acharya, Sampada et al. (2024)", imgsrc:"/assets/leadership/aps.png", article:"https://meetings.aps.org/Meeting/MAR24/Session/N13.2"},
    {id:"cmuforum", title:"Carnegie Mellon Forum on Biomedical Engineering", date:"2023", prev:"Presented \"Gecko adhesion based Sea Star Crawler Robot\" by Acharya, Sampada et al. (2022)", imgsrc:"/assets/leadership/forum.jpg", article:"https://www.linkedin.com/posts/sampada-acharya29_hi-all-i-will-be-presenting-my-work-gecko-activity-7106825754251771904-7ujh?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEVnSjEBRszvma9p2_dDwmqPofyH-W6QXFI"},
    {id:"gh2023", title:"Grace Hopper Celebration 2023", date:"September 2023", prev:"Represented the Mechanical Engineering department for its partication in the Grace Hopper celebration and managed interaction regarding graduate school experience with attendees.", imgsrc:"/assets/leadership/grace-hopper-conv.jpg", article:"https://www.linkedin.com/posts/sampada-acharya29_last-week-students-faculty-and-staff-had-activity-7115686298937352192-RdVR?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEVnSjEBRszvma9p2_dDwmqPofyH-W6QXFI"},
    {id:"research-sym", title:"CMU Department of MechE Master's Research Symposium", date:"2021", prev:"Presented \"Synthesis of Self-Healing Composites of Silicone and Liquid Metal\" by Acharya, Sampada et al. (2021)", imgsrc:"/assets/leadership/symp.jpg", article:""},
];


//-------- SAMPADA'S COMBINED INFORMATION HERE --------
export const allProjects = [...sampadaProjects, ...sampadaUpcoming];
export const allPublications = [...sampadaPublications, ...sampadaUpcomingPublications];

export const sampadaName= "Sampada Acharya";

export const sampadaLeadershipText = "Leadership, to me, is about creating spaces where people feel seen, supported, and inspired to grow. I believe impactful leadership goes beyond managing projects — it’s about fostering trust, collaboration, and community. Over the years, I have had the privilege of leading and contributing to initiatives that center on mentorship, community building, and advancing equity in engineering. These experiences have shaped my leadership philosophy: build bridges, amplify voices, and create opportunities for collective growth. As I continue my journey as a researcher, I carry forward a commitment to empowering people as much as advancing research.";