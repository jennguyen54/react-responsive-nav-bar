import React from 'react';
import styles from './NavigationBar.module.css';
import classNames from 'classnames';
import Burger from 'react-css-burger';


class Header extends React.Component {
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
            return <li className={styles['menu-item']}>
                <a
                    href={item.target ? item.to : `#${item.to}`}
                    target={item.target ? item.target : ""}>{item.title}</a>
            </li>
        })

        return (
            <header className={classNames(styles['header'], styles['home-page-wrapper'])}>
                <div className={classNames(styles['home-page-wrapper'], styles['home-page'], { open: phoneOpen && isMobile })}>

                    <div className={styles['logo']}>
                        <img alt={"Logo"} src="https://gw.alipayobjects.com/os/s/prod/seeconf/9b458a789d9a000312899b42a7542b9c.svg" />
                    </div>

                    {isMobile &&
                        <div
                            className={styles['mobile-hamburger-button']}
                        ><Burger
                            active={phoneOpen}
                            onClick={this.phoneClick}
                            color="white"
                            burger="vortex"
                            marginTop="18px"
                            marginBottom="25px"/>
                        </div>
                    }
                    {!isMobile && <div
                        className={styles['header-menu']}>
                        {navBarChildren}
                    </div>}

                </div>
                {phoneOpen && isMobile && <div className={classNames(styles['home-page'], styles['header-mobile-menu'], { open: phoneOpen })}>
                    {navBarChildren}
                </div>
                }

            </header>
        );
    }
}

export default Header;
