
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/main.scss'
// import globStyles from './styles/main.module.scss'
import App from './App.jsx'

const rootElement = document.querySelector('#root')
const reactRoot = createRoot(rootElement)

reactRoot.render(
	<StrictMode>
		<App />
	</StrictMode>,
)