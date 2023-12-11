import '../styles/TodoList.css';

function TodoList() {

    return (
        <ul className='list'>
            <li className='list-item'>Tarea 1</li>
            <li className='list-item done'>Tarea 2</li>
            <li className='list-item'>Tarea 3</li>
        </ul>
    )
}

export default TodoList;