import React, {useState} from "react";
import ImageModal from "./ImageModal";

function Travels(){

    const [selectedVideo, setSelectedVideo] = useState({});
    const [isExpanded, setIsExpanded] = useState(false);

    const images = [
        { id: 1, title: 'VANCOUVER', src: require('../assets/videos/video1.mp4'), text: 'Genera colaboración entre equipos de trabajo con TEAM BUILDING OPS, un ideal escenario de acción donde por medio del uso de REALIDAD MIXTA los participantes desarrollan capacidades de liderazgo, comunicación y resolución de conflictos bajo presión en un entorno dinámico de juego y estrategia.' },
        { id: 2, title: 'ALASKA', src: require('../assets/videos/video2.mp4'), text: 'Genera colaboración entre equipos de trabajo con TEAM BUILDING OPS, un ideal escenario de acción donde por medio del uso de REALIDAD MIXTA los participantes desarrollan capacidades de liderazgo, comunicación y resolución de conflictos bajo presión en un entorno dinámico de juego y estrategia.' },
        { id: 3, title: 'VANCOUVER', src: require('../assets/videos/que_ofrecemos.mp4'), text: 'Genera colaboración entre equipos de trabajo con TEAM BUILDING OPS, un ideal escenario de acción donde por medio del uso de REALIDAD MIXTA los participantes desarrollan capacidades de liderazgo, comunicación y resolución de conflictos bajo presión en un entorno dinámico de juego y estrategia.' },
        { id: 4, title: 'TORONTO', src: require('../assets/videos/que_ofrecemos.mp4'), text: 'Genera colaboración entre equipos de trabajo con TEAM BUILDING OPS, un ideal escenario de acción donde por medio del uso de REALIDAD MIXTA los participantes desarrollan capacidades de liderazgo, comunicación y resolución de conflictos bajo presión en un entorno dinámico de juego y estrategia.' },
        { id: 5, title: 'DISNEY', src: require('../assets/videos/que_ofrecemos.mp4'), text: 'Genera colaboración entre equipos de trabajo con TEAM BUILDING OPS, un ideal escenario de acción donde por medio del uso de REALIDAD MIXTA los participantes desarrollan capacidades de liderazgo, comunicación y resolución de conflictos bajo presión en un entorno dinámico de juego y estrategia.' },
        { id: 6, title: 'SIMULADOR DE VUELO', src: require('../assets/videos/que_ofrecemos.mp4'), text: 'Genera colaboración entre equipos de trabajo con TEAM BUILDING OPS, un ideal escenario de acción donde por medio del uso de REALIDAD MIXTA los participantes desarrollan capacidades de liderazgo, comunicación y resolución de conflictos bajo presión en un entorno dinámico de juego y estrategia.' },
        { id: 7, title: 'DISNEY', src: require('../assets/videos/que_ofrecemos.mp4'), text: 'Genera colaboración entre equipos de trabajo con TEAM BUILDING OPS, un ideal escenario de acción donde por medio del uso de REALIDAD MIXTA los participantes desarrollan capacidades de liderazgo, comunicación y resolución de conflictos bajo presión en un entorno dinámico de juego y estrategia.' },
        { id: 8, title: 'TORONTO', src: require('../assets/videos/que_ofrecemos.mp4'), text: 'Genera colaboración entre equipos de trabajo con TEAM BUILDING OPS, un ideal escenario de acción donde por medio del uso de REALIDAD MIXTA los participantes desarrollan capacidades de liderazgo, comunicación y resolución de conflictos bajo presión en un entorno dinámico de juego y estrategia.' },
        { id: 9, title: 'ALASKA', src: require('../assets/videos/que_ofrecemos.mp4'), text: 'Genera colaboración entre equipos de trabajo con TEAM BUILDING OPS, un ideal escenario de acción donde por medio del uso de REALIDAD MIXTA los participantes desarrollan capacidades de liderazgo, comunicación y resolución de conflictos bajo presión en un entorno dinámico de juego y estrategia.' },
    ];

    const handleClick = (imgId) => {
        setSelectedVideo(images.find(image=> image.id === imgId))
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
        <div className="container_photos">
            {isExpanded === false ? (
                <div className="video_gallery">
                {images.map((image) => (
                    <div key={image.id} onClick={() => {handleModal(); handleClick(image.id);}}>
                        <div className="thumbnail_container">
                        <div className="video_container">
                        </div>
                        <h3>{image.title}</h3>
                        </div>
                    </div>
                ))}
                </div>
            ):(
                <ImageModal title={selectedVideo?.title} src={selectedVideo?.src} text={selectedVideo?.text} onClose={handleModal}/>
            )}
        </div>
    )
}

export default Travels;