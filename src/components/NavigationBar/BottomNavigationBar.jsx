import React from 'react';
import styles from './BottomNavigationBar.module.css';
import classNames from 'classnames';
import Burger from 'react-css-burger';

class BottomNavigationBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneOpen: false,
        };
        this.phoneClick = this.phoneClick.bind(this);

    }

    phoneClick = () => {

        const phoneOpen = !this.state.phoneOpen;
        this.setState({
            phoneOpen,

        });
    };

    render() {
        const { ...props } = this.props;
        const { isMobile } = props;
        delete props.dataSource;
        delete props.isMobile;
        const { phoneOpen } = this.state;
        const { content, mobilePosition } = this.props;


        const navBarChildren = content.map(item => {
            return <a
                href={item.target ? item.to : `#${item.to}`}
                target={item.target ? item.target : ""}
                onClick={this.phoneClick}>{item.title}
                </a>

        })

        return (
            <div className={classNames(styles.navbar, styles.top, { [styles.responsive]: isMobile && phoneOpen })} id="myNavbar">
                <a className={styles['logo']} id="logo">
                    <img src="https://gw.alipayobjects.com/os/s/prod/seeconf/9b458a789d9a000312899b42a7542b9c.svg" />
                </a>
                {navBarChildren}
                {isMobile && <div className={styles['mobile-hamburger-button']}>
                    <Burger
                        active={phoneOpen}
                        onClick={this.phoneClick}
                        color="white"
                        burger="vortex"
                        style={{ padding: 0, margin: 15 }}
                        scale={0.8} />

                </div>
                }
            </div>
        )
    }
}

export default BottomNavigationBar;
