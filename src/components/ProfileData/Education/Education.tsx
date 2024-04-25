import styles from './Education.module.css'
import tenthImg from '../../../assets/images/edu/10th.png'
import twelvethImg from '../../../assets/images/edu/12th.png'
import gradImg from '../../../assets/images/edu/graduation.png'

const Education = () => {
  return (
    <div className={styles.container}>
      <div className={styles.edu_container}>
        <img className={styles.edu_img} src={gradImg} alt="graduation" />
        <div className={styles.edu_details_container}>
          <p className={styles.edu_duration}>Aug 2018 – Aug 2022</p>
          <h3>B. Tech in Computer Science</h3>
          <h5>Tulas Institute</h5>
        </div>
      </div>
      <hr />
      <div className={styles.edu_container}>
        <img className={styles.edu_img} src={twelvethImg} alt="12th" />
        <div className={styles.edu_details_container}>
          <p className={styles.edu_duration}>March 2017 – March 2018</p>
          <h3>Class XII</h3>
          <h5>Central School of Tibetans</h5>
        </div>
      </div>
      <hr />
      <div className={styles.edu_container}>
        <img className={styles.edu_img} src={tenthImg} alt="10th" />
        <div className={styles.edu_details_container}>
          <p className={styles.edu_duration}>March 2015 – March 2016</p>
          <h3>Class X</h3>
          <h5>Central School of Tibetans</h5>
        </div>
      </div>
    </div>
  )
}

export default Education