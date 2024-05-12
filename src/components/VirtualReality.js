import React, {useState} from "react";
import Video from "./Video";

function VirtualReality(){

    const [selectedVideo, setSelectedVideo] = useState({});
    const [isExpanded, setIsExpanded] = useState(false);

    const videos = [
        { id: 1, title: 'LET´S DANCE', src: require('../assets/videos/video1.mp4'), text: 'Genera colaboración entre equipos de trabajo con TEAM BUILDING OPS, un ideal escenario de acción donde por medio del uso de REALIDAD MIXTA los participantes desarrollan capacidades de liderazgo, comunicación y resolución de conflictos bajo presión en un entorno dinámico de juego y estrategia.' },
        { id: 2, title: 'MUNDIAL DE FUTBOL', src: require('../assets/videos/video2.mp4'), text: 'Genera colaboración entre equipos de trabajo con TEAM BUILDING OPS, un ideal escenario de acción donde por medio del uso de REALIDAD MIXTA los participantes desarrollan capacidades de liderazgo, comunicación y resolución de conflictos bajo presión en un entorno dinámico de juego y estrategia.' },
        { id: 3, title: 'ADENALINA EN LAS ALTURAS', src: require('../assets/videos/que_ofrecemos.mp4'), text: 'Genera colaboración entre equipos de trabajo con TEAM BUILDING OPS, un ideal escenario de acción donde por medio del uso de REALIDAD MIXTA los participantes desarrollan capacidades de liderazgo, comunicación y resolución de conflictos bajo presión en un entorno dinámico de juego y estrategia.' },
        { id: 4, title: 'TEAMBUILDING OPS', src: require('../assets/videos/que_ofrecemos.mp4'), text: 'Genera colaboración entre equipos de trabajo con TEAM BUILDING OPS, un ideal escenario de acción donde por medio del uso de REALIDAD MIXTA los participantes desarrollan capacidades de liderazgo, comunicación y resolución de conflictos bajo presión en un entorno dinámico de juego y estrategia.' },
        { id: 5, title: 'TENNIS', src: require('../assets/videos/que_ofrecemos.mp4'), text: 'Genera colaboración entre equipos de trabajo con TEAM BUILDING OPS, un ideal escenario de acción donde por medio del uso de REALIDAD MIXTA los participantes desarrollan capacidades de liderazgo, comunicación y resolución de conflictos bajo presión en un entorno dinámico de juego y estrategia.' },
        { id: 6, title: 'SIMULADOR DE VUELO', src: require('../assets/videos/que_ofrecemos.mp4'), text: 'Genera colaboración entre equipos de trabajo con TEAM BUILDING OPS, un ideal escenario de acción donde por medio del uso de REALIDAD MIXTA los participantes desarrollan capacidades de liderazgo, comunicación y resolución de conflictos bajo presión en un entorno dinámico de juego y estrategia.' },
        { id: 7, title: 'ESTRATEGIA DE ARDILLAS', src: require('../assets/videos/que_ofrecemos.mp4'), text: 'Genera colaboración entre equipos de trabajo con TEAM BUILDING OPS, un ideal escenario de acción donde por medio del uso de REALIDAD MIXTA los participantes desarrollan capacidades de liderazgo, comunicación y resolución de conflictos bajo presión en un entorno dinámico de juego y estrategia.' },
        { id: 8, title: 'SUPERBOWL', src: require('../assets/videos/que_ofrecemos.mp4'), text: 'Genera colaboración entre equipos de trabajo con TEAM BUILDING OPS, un ideal escenario de acción donde por medio del uso de REALIDAD MIXTA los participantes desarrollan capacidades de liderazgo, comunicación y resolución de conflictos bajo presión en un entorno dinámico de juego y estrategia.' },
        { id: 9, title: 'VIAJES EN EL METAVERSO', src: require('../assets/videos/que_ofrecemos.mp4'), text: 'Genera colaboración entre equipos de trabajo con TEAM BUILDING OPS, un ideal escenario de acción donde por medio del uso de REALIDAD MIXTA los participantes desarrollan capacidades de liderazgo, comunicación y resolución de conflictos bajo presión en un entorno dinámico de juego y estrategia.' },
    ];

    const handleClick = (videoId) => {
        setSelectedVideo(videos.find(video=> video.id === videoId))
    };
    
    const handleModal = () => {
        if(isExpanded === true){
            setIsExpanded(false)
        }
        else{
            setIsExpanded(true)
        }
    }

    return(
        <div>
            {isExpanded === false ? (
                <div className="video_gallery">
                {videos.map((video) => (
                    <div key={video.id} onClick={() => {handleModal(); handleClick(video.id);}}>
                        <div className="thumbnail_container">
                        <div className="video_container">
                        </div>
                        <h3>{video.title}</h3>
                        </div>
                    </div>
                ))}
                </div>
            ):(
                <Video title={selectedVideo?.title} src={selectedVideo?.src} text={selectedVideo?.text} onClose={handleModal}/>
            )}
        </div>
    )
}

export default VirtualReality;