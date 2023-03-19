import style from '../../styles/ambassador/slides.module.scss';

import AmbassadorHero from './hero.js';
import AmbassadorSlide from './slide.js';

function AmbassadorSlides( data ) {
    return (
        <div className={ style['ambassador-slides'] }>
            <div className={ style['ambassador-slides__container'] }>
                { data.ambassador.featured_image && (
                    <AmbassadorHero hero={ data.ambassador } />
                )}
                { data.ambassador.slides.map((( slide, index )=> (
                    <AmbassadorSlide slide={ slide } key={ index } slideCount={ data.ambassador.slides.length } slideID={ index } />
                )))}
            </div>
        </div>
    )
}

export default AmbassadorSlides