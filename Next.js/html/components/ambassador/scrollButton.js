import React from 'react'

import style from '../../styles/ambassador/slide.module.scss';

function scrollToNext( slide ) {
    if (typeof window !== "undefined") {
        const nextSlide = document.getElementById('ambassador-slide--' + slide);
        if( nextSlide !== undefined && nextSlide !== null ) {
            nextSlide.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
        }
    }
}

function AmbassadorScrollButton( data ) {
    return (
        <button className={ style['ambassador-slide__scroll'] } onClick={ () => scrollToNext( data.nextSlide ) }><span></span></button>
    )
}

export default AmbassadorScrollButton