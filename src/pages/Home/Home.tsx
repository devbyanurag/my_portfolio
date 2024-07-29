import styles from './Home.module.css'
import bgImg from '../../assets/images/project/2.jpg'
import Profile from '../../components/Profile/Profile'
import ProfileData from '../../components/ProfileData/ProfileData'
import Links from '../../components/Links/Links'
import { useState } from 'react'

const Home = () => {
    const [activeLinkId, setActiveLinkId] = useState('overview');

    const handleLinkClick = (linkId: string) => {
        setActiveLinkId(linkId);
    };
    return (
        <div className={styles.container}>
            <img src={bgImg} alt="bg" className={styles.bgImg} />
            <div className={styles.content_container}>
                <Profile />
                <ProfileData selectedComponent={activeLinkId} />
                <Links activeLinkId={activeLinkId} onLinkClick={handleLinkClick} />
            </div>
        </div>
    )
}

export default Home