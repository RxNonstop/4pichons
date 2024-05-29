import React, {useState} from "react";
import Video from "./Video";
import GalleryVideo from "./GalleryVideo";

function VirtualReality(){

    const [selectedVideo, setSelectedVideo] = useState({});
    const [isExpanded, setIsExpanded] = useState(false);

    const videos = [
        { id: 1, title: 'LET´S DANCE', src: 'https://www.youtube.com/watch?v=oO-071aZveU', text: 'Genera colaboración entre equipos de trabajo con TEAM BUILDING OPS, un ideal escenario de acción donde por medio del uso de REALIDAD MIXTA los participantes desarrollan capacidades de liderazgo, comunicación y resolución de conflictos bajo presión en un entorno dinámico de juego y estrategia.', thumbnail: require('../assets/videos/VR_Lets_dance.mp4')},
        { id: 2, title: 'MUNDIAL DE FUTBOL', src: 'https://www.youtube.com/watch?v=pGjVcUiiMZE', text: 'Genera colaboración entre equipos de trabajo con TEAM BUILDING OPS, un ideal escenario de acción donde por medio del uso de REALIDAD MIXTA los participantes desarrollan capacidades de liderazgo, comunicación y resolución de conflictos bajo presión en un entorno dinámico de juego y estrategia.', thumbnail: require('../assets/videos/VR_mundial.mp4') },
        { id: 3, title: 'ADENALINA EN LAS ALTURAS', src: 'https://www.youtube.com/watch?v=-cJNYWoz5Jw', text: 'Genera colaboración entre equipos de trabajo con TEAM BUILDING OPS, un ideal escenario de acción donde por medio del uso de REALIDAD MIXTA los participantes desarrollan capacidades de liderazgo, comunicación y resolución de conflictos bajo presión en un entorno dinámico de juego y estrategia.', thumbnail: require('../assets/videos/VR_alturas.mp4') },
        { id: 4, title: 'TEAMBUILDING OPS', src: 'https://www.youtube.com/watch?v=BgrrngB590Y&list=TLGGuq0xukOgaeIxNTA1MjAyNA', text: 'Genera colaboración entre equipos de trabajo con TEAM BUILDING OPS, un ideal escenario de acción donde por medio del uso de REALIDAD MIXTA los participantes desarrollan capacidades de liderazgo, comunicación y resolución de conflictos bajo presión en un entorno dinámico de juego y estrategia.', thumbnail: require('../assets/videos/VR_ops.mp4') },
        { id: 5, title: 'TENNIS', src: 'https://www.youtube.com/watch?v=XjoGwJRaTX8', text: 'Genera colaboración entre equipos de trabajo con TEAM BUILDING OPS, un ideal escenario de acción donde por medio del uso de REALIDAD MIXTA los participantes desarrollan capacidades de liderazgo, comunicación y resolución de conflictos bajo presión en un entorno dinámico de juego y estrategia.', thumbnail: require('../assets/videos/VR_tennis.mp4') },
        { id: 6, title: 'SIMULADOR DE VUELO', src: 'https://www.youtube.com/watch?v=HdTLTcpoRQU', text: 'Genera colaboración entre equipos de trabajo con TEAM BUILDING OPS, un ideal escenario de acción donde por medio del uso de REALIDAD MIXTA los participantes desarrollan capacidades de liderazgo, comunicación y resolución de conflictos bajo presión en un entorno dinámico de juego y estrategia.' , thumbnail: require('../assets/videos/VR_vuelo.mp4')},
        { id: 7, title: 'ESTRATEGIA DE ARDILLAS', src: 'https://www.youtube.com/watch?v=PWRT1Qr-CQ4', text: 'Genera colaboración entre equipos de trabajo con TEAM BUILDING OPS, un ideal escenario de acción donde por medio del uso de REALIDAD MIXTA los participantes desarrollan capacidades de liderazgo, comunicación y resolución de conflictos bajo presión en un entorno dinámico de juego y estrategia.', thumbnail: require('../assets/videos/VR_ardillas.mp4') },
        { id: 8, title: 'SUPERBOWL', src: 'https://www.youtube.com/watch?v=6nLvghMogtg', text: 'Genera colaboración entre equipos de trabajo con TEAM BUILDING OPS, un ideal escenario de acción donde por medio del uso de REALIDAD MIXTA los participantes desarrollan capacidades de liderazgo, comunicación y resolución de conflictos bajo presión en un entorno dinámico de juego y estrategia.', thumbnail: require('../assets/videos/VR_superbowl.mp4') },
        { id: 9, title: 'VIAJES EN EL METAVERSO', src: 'https://www.youtube.com/watch?v=0LyGNSoxI_c', text: 'Genera colaboración entre equipos de trabajo con TEAM BUILDING OPS, un ideal escenario de acción donde por medio del uso de REALIDAD MIXTA los participantes desarrollan capacidades de liderazgo, comunicación y resolución de conflictos bajo presión en un entorno dinámico de juego y estrategia.', thumbnail: require('../assets/videos/VR_viajes.mp4') },
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
                        <div key={video.id} >
                            <div className="thumbnail_container">
                                <div className="video_container" onClick={() => {handleModal(); handleClick(video.id);}}>
                                    <GalleryVideo videoSrc={video.thumbnail} title={video.title}></GalleryVideo>
                                </div>
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