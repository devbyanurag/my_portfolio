import React from 'react';
import styles from './Links.module.css';
import aboutImg from '../../assets/images/links_icons/profile.png';
import expImg from '../../assets/images/links_icons/work_ex.png';
import skillsImg from '../../assets/images/links_icons/skills.png';
import projImg from '../../assets/images/links_icons/porjects.png';
import eduImg from '../../assets/images/links_icons/edu.png';

interface LinkData {
  id: string;
  label: string;
  imgSrc: string;
}

interface LinksProps {
  activeLinkId: string;
  onLinkClick: (linkId: string) => void;
}

const linksData: LinkData[] = [
  { id: 'overview', label: 'Overview', imgSrc: aboutImg },
  { id: 'experience', label: 'Experience', imgSrc: expImg },
  { id: 'skills', label: 'Skills', imgSrc: skillsImg },
  { id: 'projects', label: 'Projects', imgSrc: projImg },
  { id: 'education', label: 'Education', imgSrc: eduImg },
];

const Links: React.FC<LinksProps> = ({ activeLinkId, onLinkClick }) => {
  const handleClick = (linkId: string) => {
    onLinkClick(linkId);
  };

  return (
    <div className={styles.link_container}>
      {linksData.map(({ id, label, imgSrc }) => (
        <div
          key={id}
          className={`${styles.link_value_container} ${activeLinkId === id ? styles.active_link : ''}`}
          onClick={() => handleClick(id)}
        >
          <img src={imgSrc} alt={label} />
          <p>{label}</p>
        </div>
      ))}
    </div>
  );
};

export default Links;
