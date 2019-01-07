import React from 'react';
import styles from './BottomNavigationBar.module.css';
import cx from 'classnames';
import Burger from 'react-css-burger';
import { MdCall, MdDirections } from "react-icons/md";
import Hider from '../Hider';
const ActionButton = ({ children, href, target, visible }) => {
    return <a
        href={href}
        target={target}
        id="logo"
        className={cx(styles['logo'], { [styles['navbar-hide']]: visible })}
    >
        {children}
    </a>
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
        const { content, phonePosition } = this.props;


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
                <a className={styles['logo']} id="logo">
                    <img alt={"Logo"} src="https://gw.alipayobjects.com/os/s/prod/seeconf/9b458a789d9a000312899b42a7542b9c.svg" />
                </a>

                <Hider visible={isMobile}>
                    <React.Fragment>
                        <ActionButton href={"tel:0000000000"} visible={phoneOpen}>
                            <MdCall color="white" size="1.5em" />
                        </ActionButton>
                        <ActionButton 
                            href={"https://www.google.com/maps/dir/29.7590304,-95.3706191/Houston,+TX/@29.7597302,-95.3724926,17z/data=!3m1!4b1!4m18!1m7!3m6!1s0x8640b8b4488d8501:0xca0d02def365053b!2sHouston,+TX!3b1!8m2!3d29.7604267!4d-95.3698028!4m9!1m1!4e1!1m5!1m1!1s0x8640b8b4488d8501:0xca0d02def365053b!2m2!1d-95.3698028!2d29.7604267!3e0"}
                            target={"_blank"}
                            visible={phoneOpen}>
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

                    </div>
                </Hider>


            </div>
        )
    }
}

export default BottomNavigationBar;
