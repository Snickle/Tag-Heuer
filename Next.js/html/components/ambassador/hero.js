import Image from 'next/image'
import classnames from 'classnames';
import React from 'react'

import style from '../../styles/ambassador/slide.module.scss';

import ScrollButton from './scrollButton';

function AmbassadorHero( data ) {
    return (
        <div className={ classnames( style['ambassador-slide'], style['ambassador-slide--hero'] ) }>
            <div className={ style['ambassador-slide__container'] }>
                <div className={ style['ambassador-slide__background'] }>
                    { data.hero.featured_image && (
                        <Image src={ data.hero.featured_image } alt={ data.hero.title.replace( /(<([^>]+)>)/ig, ' ') } fill sizes="sm:100vw md:50vw lg:33vw" />
                    )}
                </div>
                { data.hero.title && (
                    <div className={ style['ambassador-slide__content'] }>
                        <h1 className={ style['ambassador-slide__title'] }>{ data.hero.title.replace( /(<([^>]+)>)/ig, ' ') }</h1>
                    </div>
                )}
                <ScrollButton nextSlide={ 0 } />
            </div>
        </div>
    )
}

export default AmbassadorHero