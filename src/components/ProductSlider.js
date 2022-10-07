
import styled from 'styled-components'
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';
import {amps} from '../data'


const ProductSlider = () => {

    const moveLeft = () => {
        let slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 275;
    }
    const moveRight = () => {
        let slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 275;
    }


  return (
    <Wrapper className='page-setting '>
        <h3>New Marshall Amps Coming!</h3>
        <div className='slider-container'>
            <div id="slider">
                {amps.map((amp) => {
                   
                    return ( 
                        <article key={amp.id} className="card">
                            <div style={{background: `url(${amp.image})`, backgroundSize: 'cover'}} className="slider-image">
                                {amp.desc ? <p className="extra extra-desc">{amp.desc}!</p> : ''}
                                {amp.price ? <p className="extra extra-price">${amp.price}!</p> : ''}
                            </div>
                            <footer>
                                <p style={{ whiteSpace: 'pre-wrap'}}>{amp.title}</p>
                            </footer>
                        </article>
                        )
                    })}
            </div>
        </div>
        <div className='btn-container'>
            <FaChevronLeft onClick={moveLeft} className="btn"/> 
            <FaChevronRight onClick={moveRight} className="btn"/>  
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`

.extra {
    font-size: 1.4rem;
    transform: rotate(-40deg);
    color: #fff;
    background: red;
    text-indent: 20px;
    
}

.btn-container {
    display: flex;
    justify-content: center;
}
.btn {
    font-size: 2rem;
    border: 2px solid black;
    border-radius: 50%;
    margin: 8px;
    cursor: pointer;
    opacity: .4;
}

 .slider-container {
    position: relative;
    display: flex;
    align-items: center;
    scroll-snap-type: x mandatory;
 }

#slider {
    width: 100%;
    height: 100%;
    white-space: nowrap;
    scrollbar-width: none;
    scroll-behavior: smooth;
    scroll-snap-align: start;
    overflow: hidden;
    scroll-snap-align: start;
}

.card {
    position: relative;
    width: 265px;
    height: 300px;
    display: inline-block;
    margin-left: 5px;
    margin-right: 5px;
    border: 2px solid var(--clr-grey-600);
    
    border-radius: 6px;
}

.slider-image {
    width: 100%;
    height: 200px;
}

footer {
    padding: 10px;
}


`
export default ProductSlider