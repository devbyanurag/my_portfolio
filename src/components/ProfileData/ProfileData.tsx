import Overview from "./Overview/Overview";
import styles from "./ProfileData.module.css";
const ProfileData = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading_container}>
        <h2>Overview</h2>
        <div></div>
      </div>
      <Overview/>

    </div>
  )
}

export default ProfileData