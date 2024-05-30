import React, {useState} from "react";
import ImageModal from "./ImageModal";

function Travels(){

    const [selectedImage, setSelectedImage] = useState({});
    const [isExpanded, setIsExpanded] = useState(false);

    const images = [
        { id: 1, title: 'VANCOUVER', src: require('../assets/images/VANCOUVER.png'), text: 'Genera colaboración entre equipos de trabajo con TEAM BUILDING OPS, un ideal escenario de acción donde por medio del uso de REALIDAD MIXTA los participantes desarrollan capacidades de liderazgo, comunicación y resolución de conflictos bajo presión en un entorno dinámico de juego y estrategia.' },
        { id: 2, title: 'ALASKA', src: require('../assets/images/ALASKA.png'), text: 'Genera colaboración entre equipos de trabajo con TEAM BUILDING OPS, un ideal escenario de acción donde por medio del uso de REALIDAD MIXTA los participantes desarrollan capacidades de liderazgo, comunicación y resolución de conflictos bajo presión en un entorno dinámico de juego y estrategia.' },
        { id: 3, title: 'VANCOUVER', src: require('../assets/images/VANCOUVER2.png'), text: 'Genera colaboración entre equipos de trabajo con TEAM BUILDING OPS, un ideal escenario de acción donde por medio del uso de REALIDAD MIXTA los participantes desarrollan capacidades de liderazgo, comunicación y resolución de conflictos bajo presión en un entorno dinámico de juego y estrategia.' },
        { id: 4, title: 'TORONTO', src: require('../assets/images/TORONTO.png'), text: 'Genera colaboración entre equipos de trabajo con TEAM BUILDING OPS, un ideal escenario de acción donde por medio del uso de REALIDAD MIXTA los participantes desarrollan capacidades de liderazgo, comunicación y resolución de conflictos bajo presión en un entorno dinámico de juego y estrategia.' },
        { id: 5, title: 'DISNEY', src: require('../assets/images/DISNEY2.png'), text: 'Genera colaboración entre equipos de trabajo con TEAM BUILDING OPS, un ideal escenario de acción donde por medio del uso de REALIDAD MIXTA los participantes desarrollan capacidades de liderazgo, comunicación y resolución de conflictos bajo presión en un entorno dinámico de juego y estrategia.' },
        { id: 6, title: 'VICTORIA', src: require('../assets/images/VICTORIA.png'), text: 'Genera colaboración entre equipos de trabajo con TEAM BUILDING OPS, un ideal escenario de acción donde por medio del uso de REALIDAD MIXTA los participantes desarrollan capacidades de liderazgo, comunicación y resolución de conflictos bajo presión en un entorno dinámico de juego y estrategia.' },
        { id: 7, title: 'DISNEY', src: require('../assets/images/DISNEY.png'), text: 'Genera colaboración entre equipos de trabajo con TEAM BUILDING OPS, un ideal escenario de acción donde por medio del uso de REALIDAD MIXTA los participantes desarrollan capacidades de liderazgo, comunicación y resolución de conflictos bajo presión en un entorno dinámico de juego y estrategia.' },
        { id: 8, title: 'TORONTO', src: require('../assets/images/TORONTO2.png'), text: 'Genera colaboración entre equipos de trabajo con TEAM BUILDING OPS, un ideal escenario de acción donde por medio del uso de REALIDAD MIXTA los participantes desarrollan capacidades de liderazgo, comunicación y resolución de conflictos bajo presión en un entorno dinámico de juego y estrategia.' },
        { id: 9, title: 'ALASKA', src: require('../assets/images/ALASKA2.png'), text: 'Genera colaboración entre equipos de trabajo con TEAM BUILDING OPS, un ideal escenario de acción donde por medio del uso de REALIDAD MIXTA los participantes desarrollan capacidades de liderazgo, comunicación y resolución de conflictos bajo presión en un entorno dinámico de juego y estrategia.' },
    ];

    const handleClick = (imgId) => {
        setSelectedImage(images.find(image=> image.id === imgId))
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
                <div className="image_gallery">
                {images.map((image) => (
                    <div key={image.id} onClick={() => {handleModal(); handleClick(image.id);}} className="space_img">
                        <div className="thumbnail_container">
                        <div className="image_container">
                            <img src={image.src} alt=""></img>
                        </div>
                        <h3>{image.title}</h3>
                        </div>
                    </div>
                ))}
                </div>
            ):(
                <ImageModal title={selectedImage?.title} src={selectedImage?.src} text={selectedImage?.text} onClose={handleModal}/>
            )}
        </div>
    )
}

export default Travels;