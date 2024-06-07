import React,{createContext,useState,useContext, } from "react";
import video from "../public/videos/justin.mp4"
import west from "../public/videos/west.mp4"

const pageContext = createContext()

export const PageProvider = ({ children }) => {
    const [currentpage, setCurrent] = useState('home');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [open, Setopen] = useState(false);

    const [videos,SetVideos] = useState([
    {
        id: 1,
        title: "Vidéo 1",
        duration: "10:30",
        description: "Description de la vidéo 1",
          thumbnail: "https://marketplace.canva.com/EAFAMirCsX4/2/0/1600w/canva-purple-creative-livestream-youtube-thumbnail-X2eVuOzURSM.jpg",
        url:video,
    },
    {
        id: 2,
        title: "Vidéo 2",
        duration: "15:20",
        description: "Description de la vidéo 2",
        thumbnail: "https://img.freepik.com/psd-premium/effet-lueur-moderne-chaine-youtube-video-miniature-video-banniere-web-conception-modele-psd-premium_526766-495.jpg",
        url:west,

    },
    {
        id: 3,
        title: "Vidéo 3",
        duration: "5:45",
        description: "Description de la vidéo 3",
        thumbnail: "https://target-video.com/wp-content/uploads/2020/07/blog_img_video_thumbnail.jpg",
        url:video,

    }
    ,{
        id: 4,
        title: "Vidéo 4",
        duration: "15:20",
        description: "Description de la vidéo 2",
        thumbnail: "https://target-video.com/wp-content/uploads/2020/07/blog_img_video_thumbnail.jpg",
        url:west,

    },
    {
        id: 5,
        title: "Vidéo 5",
        duration: "5:45",
        description: "Description de la vidéo 3",
        thumbnail: "https://target-video.com/wp-content/uploads/2020/07/blog_img_video_thumbnail.jpg",
        url:video,

    }
])
    
    return (
        <pageContext.Provider value={{ currentpage, setCurrent , isModalOpen,setIsModalOpen ,videos ,open, Setopen }} >
            {children}
        </pageContext.Provider>
    )
}

export const usePage = () => {
    return useContext(pageContext)
}

