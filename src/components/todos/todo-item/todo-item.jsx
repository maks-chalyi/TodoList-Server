import './todo-item.scss'
import { useState } from 'react'
import { Button } from '../../../basic-components/button/button'
import { AiOutlineDelete } from 'react-icons/ai'
import { CiSaveDown2 } from 'react-icons/ci'

export const TodoItem = ({ id, title, completed, refreshTodoSList, refreshCompleted }) => {
	const [isEditingTodoItemFlag, setIsEditingTodoItemFlag] = useState(false)
	const [renameTitleValue, setRenameTitleValue] = useState(title)

	const onTodoItemClick = () => {
		setIsEditingTodoItemFlag(true)
	}

	const getRenameTitleValueChange = ({ target }) => {
		setRenameTitleValue(target.value)
	}

	const onAddRenameTodoTitle = (id) => {
		fetch(`http://localhost:3000/todos/${id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				title: renameTitleValue,
				completed: false,
			}),
		})
			.then((responseRaw) => responseRaw.json())
			.then((response) => {
				console.log('Задача изменена, ответ сервера', response)
				setIsEditingTodoItemFlag(false)
			})
	}

	const onDeleteTodoItem = (id) => {

		console.log('id', id)
		fetch(`http://localhost:3000/todos/${id}`, {
			method: 'DELETE',
		})
		refreshTodoSList()
	}

	const onCompletedChange = (id, completed) => {
		fetch(`http://localhost:3000/todos/${id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				title: title,
				completed: !completed,
			}),
		})
			.then((responseRaw) => responseRaw.json())
			.then((response) => {
				console.log('Статус задачи изменен, ответ сервера', response)
			})
		refreshTodoSList()
		refreshCompleted()
	}

	return (
		<>
			<li className={`todos-list__item todo-item`} key={id}>
				<input
					className={`todo-item__completed`}
					type="checkbox"
					checked={completed}
					readOnly
					onClick={() => onCompletedChange(id, completed)}
				/>

				<div className={`todo-item__title`}>
					{isEditingTodoItemFlag ? (
						<input
							className={`_main-input`}
							type="text"
							value={renameTitleValue}
							onChange={getRenameTitleValueChange}
						/>
					) : (
						<div onClick={onTodoItemClick}>{renameTitleValue}</div>
					)}
				</div>

				<div className={`todo-item__actions`}>
					{isEditingTodoItemFlag ? (
						<Button onClick={() => onAddRenameTodoTitle(id)}>
							<CiSaveDown2 />
						</Button>
					) : (
						<Button onClick={() => onDeleteTodoItem(id)}>
							<AiOutlineDelete />
						</Button>
					)}
				</div>
			</li>
		</>
	)
}
