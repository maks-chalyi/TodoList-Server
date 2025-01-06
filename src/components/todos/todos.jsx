import './todos.scss'
import { useEffect, useState } from 'react'
import { TodoItem } from './todo-item/todo-item'
import { ControlPanel } from './control-panel/control-panel'

export const Todos = () => {
	const [todos, setTodos] = useState([])
	const [newSortTodos, setNewSortTodos] = useState([])
	const [refreshTodoSListFlag, setRefreshTodoSListFlag] = useState(false)
	const [sortingByAlphabetFlag, setSortingByAlphabetFlag] = useState(false)
	const [refreshCompletedFlag, setRefreshCompletedFlag] = useState(false)

	const refreshTodoSList = () => {
		setRefreshTodoSListFlag(!refreshTodoSListFlag)
	}

	const refreshCompleted = () => {
		setRefreshCompletedFlag(!refreshCompletedFlag)
	}

	const onSortingAlphabet = () => {
		setSortingByAlphabetFlag(!sortingByAlphabetFlag)

		const newTodos = [...todos].sort((a, b) => {
			if (a.title > b.title) {
				return 1
			} else if (a.title < b.title) {
				return -1
			}
			return 0
		})
		setNewSortTodos(newTodos)
	}

	useEffect(() => {
		fetch('http://localhost:3000/todos')
			.then((responseData) => responseData.json())
			.then((loadedTodos) => {
				setTodos(loadedTodos)
				// if (sortingByAlphabetFlag === false) {
				// 	setTodos(loadedTodos)
				// }
				// if (sortingByAlphabetFlag === true) {
				// 	setTodos(newSortTodos)
				// }
			})
	}, [refreshTodoSListFlag,
		sortingByAlphabetFlag,
		// refreshCompletedFlag
	])

	return (
		<section className={`todos _section`}>
			<div className={`todos__container _container-narrow`}>
				<ControlPanel
					refreshTodoSList={refreshTodoSList}
					onSortingAlphabet={onSortingAlphabet}
					sortingByAlphabetFlag={sortingByAlphabetFlag}
				/>
				<div className={`todos-list`}>
					<ul className={`todos-list__body`}>
						{todos.map(({ id, title, completed }) => (
							<TodoItem
								key={id}
								id={id}
								title={title}
								completed={completed}
								refreshTodoSList={refreshTodoSList}
								refreshCompleted={refreshCompleted}
							/>
						))}
					</ul>
				</div>
			</div>
		</section>
	)
}
