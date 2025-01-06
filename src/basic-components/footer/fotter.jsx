import './footer.scss'
import { Button } from '../button/button'

export const Footer = () => {
	return (
		<footer className={`footer`}>
			<div className={`footer__container _container`}>
				<span>Footer</span>
				<Button isActine="true">Button</Button>
			</div>
		</footer>
	)
}
