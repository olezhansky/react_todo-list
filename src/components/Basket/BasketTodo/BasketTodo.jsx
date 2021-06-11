import styles from './BasketTodo.module.css'
import PropTypes from "prop-types";

const BasketTodo = ({basketTodo, index}) => {
    return (
        <li className={styles.BasketTodo}>
            <div>
                {basketTodo.title}
            </div>
            <div className={styles.BasketTodoItemDate}>
                {basketTodo.date}
            </div>
        </li>   
    )
}

BasketTodo.propTypes = {
    basketTodo: PropTypes.object,
    index: PropTypes.number
}

export default BasketTodo