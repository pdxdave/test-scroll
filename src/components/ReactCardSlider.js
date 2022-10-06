import './Slider.css'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'

const ReactCardSlider = (props) => {
    const slides = [1,2,3,4,5,6,7,8]

    const slideLeft = () => {
        let slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 335;
    }
    const slideRight = () => {
         let slider = document.getElementById('slider');
         slider.scrollLeft = slider.scrollLeft - 335;
    }
  return (
    <div id="main-slider-container">
        <MdChevronLeft  size={40} className='slider-icon left' onClick={slideLeft}/>
        <div id="slider">
            {slides.map((slide, index) => {
                return (
                    <div className='slider-card' key={index}>
                        <div className="slider-card-image"></div>
                        <p className='slider-card-title'>card title</p>
                        <p className='slider-card-description'>card description </p>
                    </div>
                )
            })}
        </div>
        <MdChevronRight size={40} className='slider-icon right' onClick={slideRight}/>
    </div>
  )
}

export default ReactCardSlider