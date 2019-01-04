import React from 'react';
import styles from './Card.module.css';
import cx from 'classnames';
import Shiitake from 'shiitake';

const ContentCard = ({ title, isMobile, children, picture = true }) => {
    const responsive = { [styles.responsive]: isMobile }
    return <div
        className={cx(styles['content-card'], responsive)}
    >
        <div
            className={cx(styles['content-card-content'], {[styles['mobile-card']] : isMobile})}
        >
            <Shiitake lines={1} className={cx(styles['content-card-title'])}>{title}</Shiitake>
            <div className={styles['content-card-content']}>
                <Shiitake lines={2}>{children}</Shiitake></div>
        </div>
        {picture && <div
                    className={cx(styles['content-card-picture'], responsive)}
                    >
            Picture
        </div>
        }
    </div>
}

export default ContentCard;