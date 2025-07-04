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

//-------- SAMPADA'S RESEARCH HERE --------
//template for entries here: {id:"", subtitle:"", photo:"", info:"", link:"", tags:""}
export const sampadaProjects = [
    {id: "project1", subtitle:"subtitle", photo:"https://archive.org/download/placeholder-image//placeholder-image.jpg", info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui libero consectetur quisquam, impedit optio ipsam inventore, et numquam officiis unde debitis vero molestiae omnis veritatis magnam repellendus totam veniam assumenda.", link:"", tags:"tag1"},
    {id: "project2", subtitle:"subtitle",photo:"https://archive.org/download/placeholder-image//placeholder-image.jpg", info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui libero consectetur quisquam, impedit optio ipsam inventore, et numquam officiis unde debitis vero molestiae omnis veritatis magnam repellendus totam veniam assumenda.", link:"",tags:"tag2"},
   
];

//-------- SAMPADA'S UPCOMING RESEARCH HERE --------
//template for entries here: {id:"", subtitle:"", photo:"", info:"", link:"", tags:""}
export const sampadaUpcoming = [
    {id: "project3", subtitle:"subtitle",photo:"https://archive.org/download/placeholder-image//placeholder-image.jpg", info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui libero consectetur quisquam, impedit optio ipsam inventore, et numquam officiis unde debitis vero molestiae omnis veritatis magnam repellendus totam veniam assumenda.", link:"", tags:"tag3"},
    {id: "project4", subtitle:"subtitle",photo:"https://archive.org/download/placeholder-image//placeholder-image.jpg", info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui libero consectetur quisquam, impedit optio ipsam inventore, et numquam officiis unde debitis vero molestiae omnis veritatis magnam repellendus totam veniam assumenda.", link:"", tags:"tag4"},
    {id: "project5", subtitle:"subtitle",photo:"https://archive.org/download/placeholder-image//placeholder-image.jpg", info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui libero consectetur quisquam, impedit optio ipsam inventore, et numquam officiis unde debitis vero molestiae omnis veritatis magnam repellendus totam veniam assumenda.", link:"", tags:"tag5"},
];

//-------- SAMPADA'S PUBLICATION INFORMATION HERE --------
//template for entries here: {id:"", subtitle:"", photo:"", info:""}
export const sampadaPublications = [
    //Project1
    {id:"Gecko adhesion based sea star crawler robot.", subtitle:"Acharya, Sampada*, Peter Roberts*, Tejas Rane, Raghav Singhal, Peize Hong, Viraj Ranade, Carmel Majidi,  Victoria Webster-Wood, and B. Reeja-Jayan. \"Gecko adhesion based sea star crawler robot.\" Frontiers in Robotics and  AI 10 (2023).", photo:"/assets/graphics/publications/sampada-publication1.jpg", info:"", link:""}, 
    //Project2 
    {id: "ExoForm: Shape Memory and Self-Fusing Semi-Rigid Wearables", subtitle:"Qin, Fang, Huai-Yu Cheng, Rachel Sneeringer, Maria Vlachostergiou, Sampada Acharya, Haolin Liu, Carmel Majidi,  Mohammad Islam, and Lining Yao. \"ExoForm: Shape Memory and Self-Fusing Semi-Rigid Wearables.\" In Extended  Abstracts of the 2021 CHI Conference on Human Factors in Computing Systems, pp. 1-8. 2021. ",photo:"/assets/graphics/publications/sampada-publication2.png", info:"", link:"https://dl.acm.org/doi/pdf/10.1145/3411763.3451818"},
    //Project3
    {id: "Making the Case for Scaling up Microwave Sintering of  Ceramics.", subtitle:"Aman, Bashu, Sampada Acharya, and B. Reeja-Jayan. \"Making the Case for Scaling up Microwave Sintering of  Ceramics.\" Advanced Engineering Materials 2302065 (2024)", photo:"/assets/graphics/publications/sampada-publication3.jpg", info:"", link:""},
   
    
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








export const allProjects = [...sampadaProjects, ...sampadaUpcoming];
export const allPublications = [...sampadaPublications, ...sampadaUpcomingPublications];

export const sampadaName= "Sampada Acharya";