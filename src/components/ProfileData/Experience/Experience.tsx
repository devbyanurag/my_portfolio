import styles from './Experience.module.css'
import nagarroImg from '../../../assets/images/social/Nagarro.png'

const Experience = () => {
  return (
    <div className={styles.container}>
      <div className={styles.exp_container}>
        <img className={styles.exp_img} src={nagarroImg} alt="nagarro" />
        <div className={styles.exp_details_container}>
          <h3>Software Engineer</h3>
          <h3>Nagarro</h3>


          <p className={styles.exp_duration}>Feb 2022 - Present</p>
          <p>
            <ul>

              <li className={styles.exp_points}>
                Implemented responsive user interfaces using React to
                improve user experience and accessibility.
              </li>
              <li className={styles.exp_points}> Worked closely with UI/UX designers to translate design
                mockups and wireframes into responsive web
                applications.
              </li>
              <li className={styles.exp_points}> Integrated APIs and middleware such as REST, JSON,
                Express.js, and JWT for data retrieval and authentication.
              </li>
              <li className={styles.exp_points}> Collaborated with cross-functional teams to identify and
                resolve technical issues and optimize application
                performance.
              </li>
              <li className={styles.exp_points}> Participated in code reviews to maintain code quality and
                adherence to coding standards.
              </li>
              <li className={styles.exp_points}> Stayed updated with the latest trends and best practices
                in web development, including React, Node.js, and AWS
                services
              </li>
            </ul>
          </p>
        </div>
      </div>

    </div>
  )
}

export default Experience