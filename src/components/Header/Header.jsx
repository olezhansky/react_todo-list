import styles from './Header.module.css'
import { NavLink } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const Header = () => {
    return (
        <ul className={styles.Header}>
            <li>
                <NavLink to="/todolist">TodoList</NavLink>
            </li>
            <li>
                <NavLink to="/basket">
                    <IconButton aria-label="delete">
                        <DeleteIcon fontSize="large" color="primary"/>
                    </IconButton>
                </NavLink>
            </li>
        </ul>
    )
}

export default Header