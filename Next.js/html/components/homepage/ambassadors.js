import style from '../../styles/homepage/ambassadors.module.scss';

import HomepageAmbassador from './ambassador.js';

function Ambassadors( data ) {
    return (
    <div className={ style['homepage-ambassadors'] }>
        <div className={ style['homepage-ambassadors__container'] }>
            { data.ambassadors.map(( ambassador => (
                <HomepageAmbassador ambassador={ ambassador } key={ ambassador.id }/>
            )))}
        </div>
    </div>
  )
}

export default Ambassadors