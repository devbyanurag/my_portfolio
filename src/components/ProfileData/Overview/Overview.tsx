import styles from './Overview.module.css'
import frontendImg from '../../../assets/images/whatido/frontend.png'
import backendImg from '../../../assets/images/whatido/backend.png'
import aiImg from '../../../assets/images/whatido/ai.png'
import { getExperienceFromDate } from '../../../Utils/commonFunctions'


const Overview = () => {
  return (
    <div className={styles.container}>
      <p className={styles.overview}>
        Experienced Software Developer with {getExperienceFromDate("14/02/2022")} years of expertise crafting responsive web applications using React, TypeScript, and
        modern UI technologies. Skilled in Redux, Tailwind CSS, Node.js, MongoDB, and AWS, with a focus on usercentric, scalable solutions. Passionate about integrating Generative AI, AI/ML, and LLMs to drive technological
        innovation. Excels in collaborative environments, delivering high-performance, maintainable digital experiences.
      </p>
      <h3 className={styles.whatIdo}>What I Do!</h3>
      <div className={styles.whatIdo_container}>
        <div className={styles.card_container}>
          <img src={frontendImg} alt="frontend" />
          <div>
            <h4>Frontend Development</h4>
            <p>Experienced in developing responsive and user-friendly interfaces using React, ensuring optimal user experience and accessibility. Proficient in translating design mockups into responsive web applications, collaborating closely with UI/UX designers.</p>
          </div>
        </div>
        <div className={`${styles.card_container} ${styles.change_card_container_color}`}>
          <img src={backendImg} alt="frontend" />
          <div>
            <h4>Backend Development</h4>
            <p>Skilled in integrating APIs and middleware such as REST, JSON, Express.js, and JWT for data retrieval and authentication. Collaborates with cross-functional teams to identify and resolve technical issues, ensuring optimal application performance.
            </p>

          </div>

        </div>
        <div className={`${styles.card_container} ${styles.change_card_container_color}`}>
          <img src={aiImg} alt="ai" />
          <div>
            <h4>AI Development</h4>
            <p>Focused on advancing Generative AI in language translation, content generation, and conversation systems through Large Language Models (LLMs). Actively participates in code reviews and stays updated with the latest trends and best practices in AI development.
            </p>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Overview