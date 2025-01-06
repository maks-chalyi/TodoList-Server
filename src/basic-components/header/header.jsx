import { VscGithubAlt } from 'react-icons/vsc'
import './header.scss'

export const Header = () => {
	return (
		<header className={`header`}>
			<div className={`header__container _container`}>
				<a
					href="/"
					className={`header_logo logo`}
					aria-label="Home"
					title="Home"
				>
					<span>JSCodema</span>
				</a>

				<div className={`header__overlay`}>
					<nav className={`header__menu menu`}>
						<ul className={`menu__list`}>
							<li className={`menu__item`}>
								<a href="/" className={`menu__link is-active`}>
									Home
								</a>
							</li>
							<li className={`menu__item`}>
								<a href="/" className={`menu__link`}>
									Home
								</a>
							</li>
							<li className={`menu__item`}>
								<a href="/" className={`menu__link`}>
									Home
								</a>
							</li>
							<li className={`menu__item`}>
								<a href="/" className={`menu__link`}>
									Home
								</a>
							</li>
						</ul>
					</nav>
					<div className={`header__actions actions`}>
						<VscGithubAlt />
					</div>
				</div>

				<div className={`header__burger burger`}>
					<button
						className={`burger__button visible-mobile`}
						type="button"
						aria-label="Open menu"
						title="Open menu"
					>
						<span className={`burger__button_line`}></span>
						<span className={`burger__button_line`}></span>
						<span className={`burger__button_line`}></span>
					</button>
				</div>
			</div>
		</header>
	)
}
