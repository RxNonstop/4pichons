import React, {useState} from "react";
import Video from "./Video";

function Vr360(){

    const [selectedVideo, setSelectedVideo] = useState({});
    const [isExpanded, setIsExpanded] = useState(false);

    const videos = [
        { id: 1, title: 'CARTAGENA 360', src: 'https://www.youtube.com/watch?v=OivhGAoP00Y', text: 'Genera colaboración entre equipos de trabajo con TEAM BUILDING OPS, un ideal escenario de acción donde por medio del uso de REALIDAD MIXTA los participantes desarrollan capacidades de liderazgo, comunicación y resolución de conflictos bajo presión en un entorno dinámico de juego y estrategia.', thumbnail: require('../assets/videos/360_Cartagena.mp4') },
        { id: 2, title: 'ISLA DEL ENCANTO', src: 'https://www.youtube.com/watch?v=54Pih8jUrg4', text: 'Genera colaboración entre equipos de trabajo con TEAM BUILDING OPS, un ideal escenario de acción donde por medio del uso de REALIDAD MIXTA los participantes desarrollan capacidades de liderazgo, comunicación y resolución de conflictos bajo presión en un entorno dinámico de juego y estrategia.', thumbnail: require('../assets/videos/360_IslaDelEncanto.mp4') },
        { id: 3, title: 'ANDES PLAZA BOGOTA', src: 'https://www.youtube.com/watch?v=sQKu4Ho90AQ', text: 'Genera colaboración entre equipos de trabajo con TEAM BUILDING OPS, un ideal escenario de acción donde por medio del uso de REALIDAD MIXTA los participantes desarrollan capacidades de liderazgo, comunicación y resolución de conflictos bajo presión en un entorno dinámico de juego y estrategia.', thumbnail: require('../assets/videos/360_AndesPlaza.mp4') },
        { id: 4, title: 'VR PARA HOTELES', src: 'https://www.youtube.com/watch?v=z9Vty_hG4_w', text: 'Genera colaboración entre equipos de trabajo con TEAM BUILDING OPS, un ideal escenario de acción donde por medio del uso de REALIDAD MIXTA los participantes desarrollan capacidades de liderazgo, comunicación y resolución de conflictos bajo presión en un entorno dinámico de juego y estrategia.', thumbnail: require('../assets/videos/360_VrHoteles.mp4') },
        { id: 5, title: 'ELABORACIÓN DE CHOCOLATE', src: 'https://www.youtube.com/watch?v=spkliSqK5nw', text: 'Genera colaboración entre equipos de trabajo con TEAM BUILDING OPS, un ideal escenario de acción donde por medio del uso de REALIDAD MIXTA los participantes desarrollan capacidades de liderazgo, comunicación y resolución de conflictos bajo presión en un entorno dinámico de juego y estrategia.', thumbnail: require('../assets/videos/360_Chocolate.mp4')  },
        { id: 6, title: 'VANCOUVER', src: 'https://www.youtube.com/watch?v=qPfJmtxVTg4', text: 'Genera colaboración entre equipos de trabajo con TEAM BUILDING OPS, un ideal escenario de acción donde por medio del uso de REALIDAD MIXTA los participantes desarrollan capacidades de liderazgo, comunicación y resolución de conflictos bajo presión en un entorno dinámico de juego y estrategia.', thumbnail: require('../assets/videos/360_Vancouver.mp4') }
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
                                <video src={video.thumbnail} autoPlay muted loop></video>
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