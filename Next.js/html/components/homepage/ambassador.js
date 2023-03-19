import Link from 'next/link'
import Image from 'next/image'

import style from '../../styles/homepage/ambassador.module.scss';

function Ambassador( data ) {
    return (
        <Link className={ style['homepage-ambassador'] } href={ '/ambassador/' + data.ambassador.slug } title={ data.ambassador.title }>
            { data.ambassador.image && (
                <div className={ style['homepage-ambassador__background'] }>
                    <Image src={ data.ambassador.image } alt={ data.ambassador.title } fill sizes="sm:100vw md:50vw lg:33vw" />
                </div>
            )}
            { data.ambassador.title && (
                <div className={ style['homepage-ambassador__content'] }>
                    <h2 className={ style['homepage-ambassador__title'] }>{ data.ambassador.title }</h2>
                </div>
            )}
        </Link>
    )
}

export default Ambassador