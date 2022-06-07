import styles from '../styles/header.module.css'
console.log(styles)
const Header = () => {

    return (

        <div className={styles.main}>
        <h1 className={styles.header}>This is Header</h1>
        </div>

    )

}

export default Header