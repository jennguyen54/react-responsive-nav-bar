import React from 'react';
import styles from './Section.module.css';
import cx from 'classnames';
import Shiitake from 'shiitake';

const Section = ({ title, anchor, description, isMobile, children }) => {
    let responsive = { [styles.responsive]: isMobile }
    return <div id={anchor}
    className={styles['section']}
    >
        <div className={cx(styles['section-header'], responsive)}
        >
            <div className={cx(styles['section-title'], responsive)}>{title}</div>
            <div>{description}</div>
        </div>
        {children}

    </div>
}

export default Section;