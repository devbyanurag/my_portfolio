import styles from './Home.module.css'
import bgImg from '../../assets/images/project/2.jpg'
import Profile from '../../components/Profile/Profile'
import ProfileData from '../../components/ProfileData/ProfileData'
import Links from '../../components/Links/Links'

const Home = () => {
    return (
        <div className={styles.container}>
            <img src={bgImg} alt="" className={styles.bgImg} />
            <div className={styles.content_container}>
                <Profile/>
                <ProfileData/>
                <Links/>
                
                
                

            </div>


        </div>
    )
}

export default Home