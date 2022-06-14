import styles from '../styles/StatusBtn.module.css'
const StatusBtn = ({status}) => {
  return (
    <div className={styles.body}>
      <label className={styles.button}>
        <input type="checkbox" checked={status} disabled/>
        <span></span>
        <span></span>
      </label>
    </div>
  );
}

export default StatusBtn