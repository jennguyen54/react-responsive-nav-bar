import React from 'react';
import styles from './BottomNavigationBar.module.css';
import cx from 'classnames';
import Burger from 'react-css-burger';
import { MdCall, MdDirections } from "react-icons/md";

const ActionButton = ({ children, visible }) => {
    return <a
        id="logo"
        className={cx(styles['logo'], { [styles['navbar-hide']]: visible })}
    >
        {children}
    </a>
}

const Hider = ({ children, visible }) => {
    if (!visible) {
        return null;
    }

    return children;
}
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
        const { content } = this.props;


        const navBarChildren = content.map(item => {
            return <a
                className={cx({ [styles['navbar-hide']]: !phoneOpen })}
                href={item.target ? item.to : `#${item.to}`}
                target={item.target ? item.target : ""}
                onClick={this.phoneClick}>{item.title}
            </a>

        })

        return (
            <div className={cx(styles.navbar, styles.top, { [styles.responsive]: isMobile && phoneOpen })} id="myNavbar">
                <a className={styles['logo']} id="logo" href={"logo"}>
                    <img alt={"Logo"} src="https://gw.alipayobjects.com/os/s/prod/seeconf/9b458a789d9a000312899b42a7542b9c.svg" />
                </a>

                <Hider visible={isMobile}>
                    <React.Fragment>
                        <ActionButton visible={phoneOpen}>
                            <MdCall color="white" size="1.5em" />
                        </ActionButton>
                        <ActionButton visible={phoneOpen}>
                            <MdDirections color="white" size="1.5em" />
                        </ActionButton>
                    </React.Fragment>
                </Hider>
                {navBarChildren}

                <Hider visible={isMobile}>
                    <div className={styles['mobile-hamburger-button']}>
                        <Burger
                            active={phoneOpen}
                            onClick={this.phoneClick}
                            color="white"
                            burger="vortex"
                            style={{ padding: 0, margin: 15 }}
                            scale={0.8} />

                    </div>                </Hider>


            </div>
        )
    }
}

export default BottomNavigationBar;
