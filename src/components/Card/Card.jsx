import React from 'react';
import styles from './Card.module.css';
import cx from 'classnames';
import Shiitake from 'shiitake';

const ContentCard = ({ title, isMobile, children }) => {
    const responsive = { [styles.responsive]: isMobile }
    return <div className={cx(styles['content-card'], responsive)}
    ><span className={cx(styles['content-card-title'])}>{title}</span>
        <div className={styles['content-card-content']}>
            <Shiitake lines={2}>{children}</Shiitake></div>
    </div>
}

export default ContentCard;