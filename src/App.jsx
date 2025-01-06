import { Header } from './basic-components/header/header'
import { Footer } from './basic-components/footer/fotter'
import { Todos } from './components/todos/todos'

export default function App() {
	return (
		<>
			<Header />
			<main>
				<Todos />
			</main>
			<Footer />
		</>
	)
}
