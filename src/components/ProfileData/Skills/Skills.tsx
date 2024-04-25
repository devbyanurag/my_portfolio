import styles from './Skills.module.css'
import frontendImg from '../../../assets/images/whatido/frontend.png'
import backendImg from '../../../assets/images/whatido/backend.png'
import databaseImg from '../../../assets/images/whatido/database.png'
import devToolsImg from '../../../assets/images/whatido/tools.png'


const Skills = () => {
  return (
    <div className={styles.container}>
      <div className={styles.skill_container}>
        <img className={styles.skill_img} src={frontendImg} alt="nagarro" />
        <div className={styles.skill_details_container}>
          <h3>Frontend Development:</h3>
          <ul>
            <li>React </li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Next JS</li>
            <li>Tailwind</li>
            <li>Material UI</li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>Axios</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className={styles.skill_container}>
        <img className={styles.skill_img} src={backendImg} alt="backend" />
        <div className={styles.skill_details_container}>
          <h3>Backend Development:</h3>
          <ul>
            <li>Node Js </li>
            <li>FastApi</li>
            <li>Express Js</li>
            <li>REST</li>
            <li>JSON</li>
            <li>JWT</li>
            <li>Swagger</li>
            <li>Socket.io</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className={styles.skill_container}>
        <img className={styles.skill_img} src={databaseImg} alt="databaseImg" />
        <div className={styles.skill_details_container}>
          <h3>Database Management:</h3>
          <ul>
            <li>Dynamo DB</li>
            <li>MySQL</li>
            <li>Mongo DB</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className={styles.skill_container}>
        <img className={styles.skill_img} src={devToolsImg} alt="devToolsImg" />
        <div className={styles.skill_details_container}>
          <h3>Development Tools:</h3>
          <ul>
            <li>JIRA</li>
            <li>Google Collab</li>
            <li>Webpack</li>
            <li>Vs Code</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Skills