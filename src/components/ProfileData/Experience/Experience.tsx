import styles from './Experience.module.css'
import nagarroImg from '../../../assets/images/social/Nagarro.png'

const Experience = () => {
  return (
    <div className={styles.container}>
      <div className={styles.exp_container}>
        <img className={styles.exp_img} src={nagarroImg} alt="nagarro" />
        <div className={styles.exp_details_container}>
          <h3>Senior Engineer</h3>
          <h5>Nagarro</h5>
          <p className={styles.exp_duration}>Dec 2024 - Present</p>
          <p>
            <ul>

              <li className={styles.exp_points}>
                Leading the development and maintenance of dynamic web applications using React, TypeScript, and
                Tailwind CSS.
              </li>
              <li className={styles.exp_points}> Spearheading integration of Generative AI tools, automating processes and enhancing user interactions.
              </li>
              <li className={styles.exp_points}> Collaborating across teams to ensure high-performance, scalable, and maintainable solutions.
              </li>
            </ul>
          </p>
        </div>

      </div>

      {/* Engineer */}
      <div className={styles.exp_container}>
        <img className={styles.exp_img} src={nagarroImg} alt="nagarro" />
        <div className={styles.exp_details_container}>
          <h3>Engineer</h3>
          <h5>Nagarro</h5>
          <p className={styles.exp_duration}>Jul 2023 - Dec 2024</p>
          <p>
            <ul>

              <li className={styles.exp_points}>
                Built robust, user-friendly interfaces for web applications using React and TypeScript, improving overall
                usability.
              </li>
              <li className={styles.exp_points}>Designed and implemented reusable components, reducing feature development time by 40%.
              </li>
              <li className={styles.exp_points}> Partnered with design and product teams to translate UX/UI mockups into responsive, accessible interfaces.
              </li>
              <li className={styles.exp_points}>
                Integrated AWS S3 for secure and efficient file storage and retrieval, improving data handling processes.
              </li>
              <li className={styles.exp_points}>Led knowledge-sharing sessions, mentoring junior developers, and improving team productivity.
              </li>
              <li className={styles.exp_points}>Optimized application performance through code reviews and introducing best practices.
              </li>
            </ul>
          </p>
        </div>

      </div>

      {/* Associate: */}
      <div className={styles.exp_container}>
        <img className={styles.exp_img} src={nagarroImg} alt="nagarro" />
        <div className={styles.exp_details_container}>
          <h3>Associate Engineer</h3>
          <h5>Nagarro</h5>
          <p className={styles.exp_duration}>Feb 2022 - Jul 2023</p>
          <p>
            <ul>

              <li className={styles.exp_points}>
                Assisted in developing single-page applications using React and JavaScript.
              </li>
              <li className={styles.exp_points}>Collaborated with the team to debug and resolve UI issues, ensuring smooth user experiences.

              </li>
              <li className={styles.exp_points}> Conducted testing and performance analysis for web applications, ensuring optimal functionality.
              </li>
            </ul>
          </p>
        </div>

      </div>

    </div>
  )
}

export default Experience