
import project_1_img from "../../public/images/projects/job_recomandation2.png"
import project_2_img from "../../public/images/projects/top_it_company.png"
import project_3_img from "../../public/images/projects/spotify.png"
import project_4_img from "../../public/images/projects/football.jpeg"
import project_5_img from "../../public/images/projects/Churn_predction.jpeg"


const projectsData = [
    {
        types: ["Streamlit","Data processing", "Machine Learning","Docker","MLflow","Deployment"],
        title: "Bank Customer Churn Prediction - DEPI Final Project",
        img: project_5_img,  // No need to import the image
        link: "https://csj2ctxuwfypzkr4n9xhjc.streamlit.app/",
        github: "https://github.com/DEPI-project01/DEPI--Project-01"
    },
    {
        types: ["NLP","Recommendation Systems","Data processing"],
        title: "Job Recommendation and Filtering System",
        img: project_1_img,
        link: "https://github.com/EsraaMosaad/GP_Job-Recommendation-and-Filtering_doc/blob/main/app.py",
        github: "https://github.com/EsraaMosaad/GP_Job-Recommendation-and-Filtering_doc/tree/main"
    },
    {
        types: ["Data Visualization","PySpark","Streamlit"],
        title: "Spotify-Million-Playlist-Dataset-Analysis-and-Visualization",
        img: project_3_img,
        link: "https://github.com/EsraaMosaad/Spotify-Million-Playlist-Dataset-Analysis-and-Visualization/blob/main/app.py",
        github: "https://github.com/EsraaMosaad/Spotify-Million-Playlist-Dataset-Analysis-and-Visualization"
    },
    {
        types: ["Web Scraping","Data Visualization"],
        title: "Top IT Companies Worldwide",
        img: project_2_img,
        link: "https://github.com/EsraaMosaad/Top-IT-Companies-Worldwide",
        github: "https://github.com/EsraaMosaad/Top-IT-Companies-Worldwide"
    },
    
    {
        types: ["Computer Vision"],
        title: "Semantic Segmentation for Soccer Analytics Using U-Net",
        img: project_4_img,
        link: "/",
        github: "https://github.com/EsraaMosaad/ASDC-AI-Data-analysis-internship/blob/main/Task%203/Report.md"
    },
    
    
];

export default projectsData;
