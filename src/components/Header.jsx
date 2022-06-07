import styles from '../styles/header.module.css'
import Clock from './Clock'

const Header = () => {

    return (

        <div className={styles.main}>
             <Clock/>
        <h1 className={styles.header}>This is Header</h1>
        </div>

    )

}

export default Header