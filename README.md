# React + Vite

========== НАЧАЛО РАБОТЫ С ПРОЕКТОМ ==========

- копируем все файлы (кроме папки node modules)
- вставляем в новый проект
- инициализируем проект командой => npm i
- открываем проект командой => npm run dev

========== SVG ICONS ==========

- найти иконки можно на сайте https://react-icons.github.io/react-icons/
- для установки пакета => npm install react-icons --save
- находим иконку
- импортируем адрес import { VscGithubAlt } from "react-icons/vsc"
- вставляем тег иконки в нужное место <VscGithubAlt />
- редактировать стили можно обратившись к родительскому классу и самой иконке
- parent svg { width: rem(30); height: rem(30); fill: red;}
- или добавить класс в тег иконки <VscGithubAlt className='svg-item'/>

========== 2 СОБЫТИЯ НА КНОПКУ ==========

- создать 2 функции
- onClick={() => {handleClick(); handleClickTwo()}}

========== ФОРМАТИРОВАНИЕ С PRETTIER ==========

- если при сочетании клавиш Shift + Alt + F не происходит форматирование
- возможно не подключен плагин Prettier для форматирования
- Ctrl + Shift + P => пишем format document with
- находим Prettier и ставим как форматирование по умолчанию
- настройки файла .prettierrc.json

{
"printWidth": 80, // ширина экрана
"tabWidth": 4 // ширина таба
"useTabs": true // использовать Tab
"semi": true // ставить ; в конце
"singleQuote": true // использовать одинарные кавычки
"jsxSingleQuote": true // использовать "" кавычки в jsx разметке
"trailingComma": "all" // последняя запятая
"bracketSameLine": false // перенсти закрытие тега > на новую строку
}

========== НАСТРОЙКИ ФАЙЛА .editorconfig ==========

root = true
[*]
end_of_line = if
insert_final_newline = true
trim_treiling_whitespace = true
charset = utf-8
indent_style = tab
indent_size = 4

========== НАСТРОЙКИ SERVER JSON ==========
