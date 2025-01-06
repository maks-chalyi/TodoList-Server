export const Button = ({ children, onClick, isActive, className }) => {
	return (
		<button
			// className={`_main-button__light`}
			className={isActive ? `_main-button__light is-active` : '_main-button__light'}
			// className={`_main-button__light ${isActive ? 'is-active' : ''} ${className}`}
			onClick={onClick}
		>
			{children}
		</button>
	)
}
