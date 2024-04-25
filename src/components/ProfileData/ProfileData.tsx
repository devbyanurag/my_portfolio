import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import Overview from "./Overview/Overview";
import styles from "./ProfileData.module.css";
import Skills from "./Skills/Skills";

interface ProfileDataProps {
  selectedComponent: string
}
const ProfileData = ({ selectedComponent }: ProfileDataProps) => {

  return (
    <div className={styles.container}>
      <div className={styles.heading_container}>
        <h2>{selectedComponent.charAt(0).toLocaleUpperCase()}{selectedComponent.slice(1)}</h2>
        <div></div>
      </div>

      {selectedComponent === 'overview' && <Overview />}
      {selectedComponent === 'education' && <Education />}
      {selectedComponent === 'experience' && <Experience />}
      {selectedComponent === 'skills' && <Skills />}



    </div>
  )
}

export default ProfileData