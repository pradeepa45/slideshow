import React, { useState } from 'react';

function Slides({slides}) {
    const len = slides.length;
    const initialValue = 0;
    const isPrevDisabled = () => {
        if (slideNumber === 0) return true;
        return false;
    }
    const isNextDisabled = () => {
        if (slideNumber === len - 1) return true;
        return false;
    }
    const prevSlide = () =>{
        if(isPrevDisabled()){
            return null;
        }
        setSlide(slideNumber-1);
    }
    const nextSlide = () => {
        if(isNextDisabled()){
            return null;
        }
        setSlide(slideNumber+1);
    }
    const restart = () => {
        setSlide(initialValue);
    }
    const [slideNumber, setSlide] = useState(initialValue);
    console.log(slideNumber);
    return (
        <React.Fragment>
            <div>
                <div id="navigation" className="text-center">
                    <button data-testid="button-restart" className="small outlined" disabled={isPrevDisabled()} onClick={restart}>Restart</button>
                    <button data-testid="button-prev" className="small" disabled={isPrevDisabled()} onClick={prevSlide}>Prev</button>
                    <button data-testid="button-next" className="small" disabled={isNextDisabled()} onClick={nextSlide}>Next</button>
                </div>
                <div id="slide" className="card text-center">
                <h1 data-testid="title">{slides[slideNumber].title}</h1>
                <p data-testid="text">{slides[slideNumber].text}</p>
            </div>
            </div>
        </React.Fragment>
    );
}
export default Slides;
