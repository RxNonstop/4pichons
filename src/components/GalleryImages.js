import React, {useState} from 'react';

const GalleryImages = () => {

    const [selectedPage, setSelectedPage] = useState(0)

    const images = [
        require('../assets/images/gallery_image4.png'),
        require('../assets/images/gallery_image3.png'),
        require('../assets/images/gallery_image2.png'),
        require('../assets/images/gallery_image5.png'),
        require('../assets/images/gallery_image6.png'),
        require('../assets/images/gallery_image7.png'),
        require('../assets/images/gallery_image8.png'),
        require('../assets/images/gallery_image9.png'),
        require('../assets/images/gallery_image10.png'),
        require('../assets/images/gallery_image11.png'),
        require('../assets/images/gallery_image12.png'),
        require('../assets/images/gallery_image13.png'),
        require('../assets/images/gallery_image14.png'),
        require('../assets/images/gallery_image1.png'),
    ];

    const handleSelectedPage = (op) =>{
        if(op===0){
            if(selectedPage>0){
                setSelectedPage(selectedPage-1)
            }
        }
        else if(op===1){
            if(selectedPage<1){
                setSelectedPage(selectedPage+1)
            }
        }
    }

    return (
        <div className='gallery_mix' id='gallery_mix'>
            <div className='gallery_interactions'>
                <button onClick={()=>handleSelectedPage(0)}>Anterior</button>
            </div>
            {selectedPage === 0 && (
                <div className='gallery_images1'>
                    <div className='gallery_wrapper'>
                        <div className='group_wrapper'>
                            <img src={images[4]} alt='' className='gallery-item'></img>
                            <img src={images[7]} alt='' className='gallery-item'></img>
                            <img src={images[13]} alt='' className='gallery-item'></img>
                        </div>
                        <div className='gallery_title'>GALERIA</div>
                        <div className='group_wrapper'>
                            <img src={images[1]} alt='' className='gallery-item'></img>
                            <img src={images[9]} alt='' className='gallery-item'></img>
                            <img src={images[0]} alt='' className='gallery-item'></img>
                        </div>
                    </div>
                </div>
            )}
            {selectedPage === 1 && (
                <div className='gallery_images2'>
                    <div className='gallery_wrapper2'>
                        <img src={images[12]} alt='' className='gallery-item2'></img>
                        <img src={images[3]} alt='' className='gallery-item2'></img>
                        <img src={images[5]} alt='' className='gallery-item2'></img>
                        <img src={images[6]} alt='' className='gallery-item2'></img>
                        <img src={images[8]} alt='' className='gallery-item2'></img>
                        <img src={images[10]} alt='' className='gallery-item2'></img>
                        <img src={images[11]} alt='' className='gallery-item2'></img>
                        <img src={images[2]} alt='' className='gallery-item2'></img>
                    </div>
                </div>
            )}
            <div className='gallery_interactions2'>
                <button onClick={()=>handleSelectedPage(1)}>Siguiente</button>
            </div>
        </div>
    );
};

export default GalleryImages;