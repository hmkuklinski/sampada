export const sampadaLinks = [
    {id:"gmail", info: "mailto:ssachary@andrew.cmu.edu", path:"/assets/icons/gmail.png"},
    {id: "linkedin", info:"https://www.linkedin.com/in/sampada-acharya29", path:"/assets/icons/linkedin.png"},
    {id:"google", info:"https://scholar.google.com/citations?user=siwPqX4AAAAJ&hl=en", path:"/assets/icons/google-scholar.png"}
];

export const sampadaPhotoPaths = [
    {id:"headshot", info:"/assets/headshots/sampada2.png"}, 
    {id: "timeline", info:"/assets/graphics/timeline.png"}
];

// template: {id: "", photo:"", info:"", link:""}
export const sampadaProjects = [
    {id: "project1", subtitle:"subtitle", photo:"https://archive.org/download/placeholder-image//placeholder-image.jpg", info:"description1", link:"", tags:"tag1", status:"completed"},
    {id: "project2", subtitle:"subtitle",photo:"https://archive.org/download/placeholder-image//placeholder-image.jpg", info:"description2", link:"",tags:"tag2", status:"completed"},
   
];

export const sampadaUpcoming = [
    {id: "project3", subtitle:"subtitle",photo:"https://archive.org/download/placeholder-image//placeholder-image.jpg", info:"description3", link:"", tags:"tag3", status:"incomplete"},
    {id: "project4", subtitle:"subtitle",photo:"https://archive.org/download/placeholder-image//placeholder-image.jpg", info:"description4", link:"", tags:"tag4", status:"incomplete"},
    {id: "project5", subtitle:"subtitle",photo:"https://archive.org/download/placeholder-image//placeholder-image.jpg", info:"description5", link:"", tags:"tag5", status:"incomplete"},
];

export const allProjects = [...sampadaProjects, ...sampadaUpcoming];

export const sampadaName= "Sampada Acharya";