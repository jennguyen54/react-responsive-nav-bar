import React from 'react';
import styles from './Card.module.css';
import cx from 'classnames';

const CardList = ({isMobile, children}) => {
    const responsive = { [styles['responsive']] : isMobile}
    return <div className={cx(styles['card-list'], styles['shadow'], responsive)}>{children}</div>
}

export default CardList;