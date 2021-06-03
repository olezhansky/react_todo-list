import styles from './noTodos.module.css'
import noTodos from '../images/no-todos.png'
const NoTodos = () => {
    return (
        <div className={styles.NoTodos}>
            <p>No todos!</p>
            <img src={noTodos} alt={noTodos}/>
        </div>
    )
}

export default NoTodos