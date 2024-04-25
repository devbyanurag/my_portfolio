import styles from "./Profile.module.css";
import profileImg from '../../assets/images/project/profile.jpg'
import linkedInImg from '../../assets/images/social/linkedin.png'
import gitImg from '../../assets/images/social/github.png'

import phoneImg from '../../assets/images/social/phone.png'
import emailImg from '../../assets/images/social/email.png'

import locImg from '../../assets/images/social/loc.png'
import calImg from '../../assets/images/social/cal.png'
import downloadImg from '../../assets/images/social/download.png'



const Profile = () => {
    return (
        <div className={styles.profile_container}>
            <img src={profileImg} alt={'profile image'} className={styles.profileImg} />
            <div className={styles.profile_info_1}>
                <h2>Anurag Chhetri</h2>
                <div className={styles.role_container}>
                    <p>Web Developer</p>

                </div>
                <div className={styles.socialHandleContainer}>
                    <img className={styles.imageContainer} src={linkedInImg} alt="Linkedin" />
                    <img className={styles.imageContainer} src={gitImg} alt="Linkedin" />
                </div>

            </div>
            <div className={styles.profile_info_2}>
                <div className={styles.profile_info_container}>
                    <div className={styles.profile_info_image_container}>
                        <img src={phoneImg} alt="phone" />
                    </div>
                    <div className={styles.profile_info}>
                        <p>Phone</p>
                        <p>+91 7455898088</p>
                    </div>
                </div>
                <div className={styles.hr1}></div>
                <div className={styles.profile_info_container}>
                    <div className={styles.profile_info_image_container}>
                        <img src={emailImg} alt="email" />
                    </div>
                    <div className={styles.profile_info}>
                        <p>Email</p>
                        <p>anuragchhetri49@gmail.com</p>
                    </div>
                </div>
                <div className={styles.hr1}></div>
               
                <div className={styles.profile_info_container}>
                    <div className={styles.profile_info_image_container}>
                        <img src={locImg} alt="Location" />
                    </div>
                    <div className={styles.profile_info}>
                        <p>Location</p>
                        <p>Dehradun, Uttarakhand</p>
                    </div>
                </div>
                <div className={styles.hr1}></div>
                <div className={styles.profile_info_container}>
                    <div className={styles.profile_info_image_container}>
                        <img src={calImg} alt="dob" />
                    </div>
                    <div className={styles.profile_info}>
                        <p>DOB</p>
                        <p>03/02/2000</p>
                    </div>
                </div>
            </div>
            <div className={styles.download_container}>
                <img src={downloadImg} alt="download" />
                <p>Download CV</p>
            </div>
        </div>
    )
}

export default Profile