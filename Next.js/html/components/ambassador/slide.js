import Image from 'next/image'
import classnames from 'classnames';

import style from '../../styles/ambassador/slide.module.scss';

import ScrollButton from './scrollButton';

function AmbassadorSlide( data ) {
    return (
        <div id={'ambassador-slide--' + data.slideID } className={ classnames( style['ambassador-slide'], style['ambassador-slide--normal'] ) }>
            <div className={ style['ambassador-slide__container'] }>
                <div className={ style['ambassador-slide__background'] }>
                    { data.slide.image && (
                        <Image src={ data.slide.image } alt={ data.slide.title.replace( /(<([^>]+)>)/ig, ' ') } fill sizes="sm:100vw md:50vw lg:33vw" />
                    )}
                </div>
                { data.slide.title && (
                    <div className={ style['ambassador-slide__content'] }>
                        <h2 className={ classnames( style['ambassador-slide__title'], data.slide.featured_title ? style['ambassador-slide__title--featured'] : '' ) }>{ data.slide.title.replace( /(<([^>]+)>)/ig, ' ') }</h2>
                        <p>{ data.slide.content }</p>
                    </div>
                )}
                { ( data.slideCount -1 ) > data.slideID ? (
                    <ScrollButton nextSlide={ ( data.slideID + 1 ) } />
                ) : (
                    <button className={ style['ambassador-slide__complete'] }><span></span></button>
                )}
            </div>
        </div>
    )
}

export default AmbassadorSlide