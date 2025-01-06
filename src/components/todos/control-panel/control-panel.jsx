import './control-panel.scss'
import { useState } from 'react'
import { Button } from '../../../basic-components/button/button'
import { BsAlphabet } from 'react-icons/bs'
import { BsSortAlphaDown } from 'react-icons/bs'
import { IoAdd } from 'react-icons/io5'

export const ControlPanel = ({ refreshTodoSList, onSortingAlphabet, sortingByAlphabetFlag }) => {
	const [fieldInputValue, setFieldInputValue] = useState([])

	const onFieldInputValueChange = ({ target }) => {
		setFieldInputValue(target.value)
	}

	const onAddedTodo = () => {
		fetch('http://localhost:3000/todos', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				title: fieldInputValue,
				completed: false,
			}),
		})
			.then((responseData) => responseData.json())
			.then((loadedTodo) => {
				console.log('Задача добавлена, ответ сервера', loadedTodo)
				refreshTodoSList()
			})
		setFieldInputValue('')
	}

	return (
		<div className={`control-panel`}>
			<input
				className={`control-panel__field-input _main-input`}
				type="text"
				placeholder="Напишите новую задачу или для поиска"
				value={fieldInputValue}
				onChange={onFieldInputValueChange}
			/>
			<div className={`control-panel__actions`}>
				<Button isActive={sortingByAlphabetFlag} onClick={onSortingAlphabet} >
					<BsSortAlphaDown />
				</Button>
				<Button>
					<BsAlphabet />
				</Button>
				<Button onClick={onAddedTodo}>
					<IoAdd />
				</Button>
			</div>
		</div>
	)
}
