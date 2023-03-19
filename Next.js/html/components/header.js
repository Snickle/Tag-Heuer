import styles from '../styles/Header.module.scss';
import Link from 'next/link'

function Header() {
	return (
		<div className={ styles['header'] }>
			<div className={ styles['header__container'] }>
				<Link className={ styles['header__logo'] } href="/">
					<img src="/assets/svg/logo.svg" alt="Tag Heuer" />
					<span>Learning Lab</span>
				</Link>
			</div>
		</div>
	)
}

export default Header