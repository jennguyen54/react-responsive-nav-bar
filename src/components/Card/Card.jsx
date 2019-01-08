import React from 'react';
import styles from './Card.module.css';
import cx from 'classnames';
import Shiitake from 'shiitake';

const ContentCard = ({ title, isMobile, children, picture = true, expanded, onClick }) => {
    let responsive = { [styles.responsive]: isMobile }

    let handleOnClick = onClick ? onClick : null;
    let defaultLines = 2;
    const content = expanded ? children : <Shiitake lines={defaultLines}>{children}</Shiitake>
    return <div
        className={cx(styles['content-card'], responsive)}
        onClick={handleOnClick}
    >
        <div
            className={cx(styles['content-card-content'])}
        >

            <Shiitake lines={1} className={cx(styles['content-card-title'])}>{title}</Shiitake>

            {picture && expanded && <div
                className={styles['expanded-mobile-card-picture']}
            >
                <img src={"https://s3-media1.fl.yelpcdn.com/bphoto/uitJKBSTxsFqU6NiATk_Og/o.jpg"}></img>
            </div>}

            <div className={styles['content-card-content']}>
                {content}
            </div>
        </div>
        {picture && !expanded && <div
            className={cx(styles['content-card-picture'], { [styles['content-card-picture-desktop']]: !isMobile }, { [styles['responsive']]: isMobile })}
        >
            <img src={"https://s3-media1.fl.yelpcdn.com/bphoto/uitJKBSTxsFqU6NiATk_Og/o.jpg"}></img>
        </div>
        }

    </div>
}


class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
        }

        this.onToggle = this.onToggle.bind(this);
    }

    onToggle() {
        console.log("changing")
        this.setState({ expanded: !this.state.expanded })
    }
    render() {
        let childrenProps = this.props;
        const { expanded } = this.state;
        return <ContentCard
            onClick={this.onToggle}
            expanded={expanded}
            {...childrenProps} />
    }
}

export default Card;