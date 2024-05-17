import React, {useState} from "react";
import Video from "./Video";

function Vr360(){

    const [selectedVideo, setSelectedVideo] = useState({});
    const [isExpanded, setIsExpanded] = useState(false);

    const videos = [
        { id: 1, title: 'CARTAGENA 360', src: require('../assets/videos/video1.mp4'), text: 'Genera colaboración entre equipos de trabajo con TEAM BUILDING OPS, un ideal escenario de acción donde por medio del uso de REALIDAD MIXTA los participantes desarrollan capacidades de liderazgo, comunicación y resolución de conflictos bajo presión en un entorno dinámico de juego y estrategia.', thumbnail: '' },
        { id: 2, title: 'ISLA DEL ENCANTO', src: require('../assets/videos/video2.mp4'), text: 'Genera colaboración entre equipos de trabajo con TEAM BUILDING OPS, un ideal escenario de acción donde por medio del uso de REALIDAD MIXTA los participantes desarrollan capacidades de liderazgo, comunicación y resolución de conflictos bajo presión en un entorno dinámico de juego y estrategia.', thumbnail: '' },
        { id: 3, title: 'ANDES PLAZA BOGOTA', src: require('../assets/videos/que_ofrecemos.mp4'), text: 'Genera colaboración entre equipos de trabajo con TEAM BUILDING OPS, un ideal escenario de acción donde por medio del uso de REALIDAD MIXTA los participantes desarrollan capacidades de liderazgo, comunicación y resolución de conflictos bajo presión en un entorno dinámico de juego y estrategia.', thumbnail: '' },
        { id: 4, title: 'VR PARA HOTELES', src: 'https://www.youtube.com/watch?v=54Pih8jUrg4', text: 'Genera colaboración entre equipos de trabajo con TEAM BUILDING OPS, un ideal escenario de acción donde por medio del uso de REALIDAD MIXTA los participantes desarrollan capacidades de liderazgo, comunicación y resolución de conflictos bajo presión en un entorno dinámico de juego y estrategia.', thumbnail: '' },
        { id: 5, title: 'ELABORACIÓN DE CHOCOLATE', src: require('../assets/videos/que_ofrecemos.mp4'), text: 'Genera colaboración entre equipos de trabajo con TEAM BUILDING OPS, un ideal escenario de acción donde por medio del uso de REALIDAD MIXTA los participantes desarrollan capacidades de liderazgo, comunicación y resolución de conflictos bajo presión en un entorno dinámico de juego y estrategia.' },
        { id: 6, title: 'VANCOUVER', src: require('../assets/videos/que_ofrecemos.mp4'), text: 'Genera colaboración entre equipos de trabajo con TEAM BUILDING OPS, un ideal escenario de acción donde por medio del uso de REALIDAD MIXTA los participantes desarrollan capacidades de liderazgo, comunicación y resolución de conflictos bajo presión en un entorno dinámico de juego y estrategia.', thumbnail: '' }
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
        <div className="container_reproducer">
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

export default Vr360;