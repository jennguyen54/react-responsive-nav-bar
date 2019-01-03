import React, { Component } from 'react';
import NavBar from './components/NavigationBar/NavigationBar';
import { enquireScreen } from 'enquire-js';

let isMobile;

enquireScreen((b) => {
  isMobile = b;
});

const { location } = window;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port,
    }
  }

  componentDidMount() {
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    if (location.port) {
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }
  }
  render() {

    const content = {
      children: [
        { title: "Navigation One", to: "https://github.com/mattvox", target:"_blank" },
        { title: "Navigation Two", to: "nav_02" },
        { title: "Navigation Three", to: "nav_03" },
        { title: "Navigation Four", to: "nav_04" },
      ]
    }

    const children = [
      <NavBar
        id="navbar"
        key="navbar"
        isMobile={this.state.isMobile}
        content={content.children}
      />,
      content.children.map(item => {
        return <div id={item.to} style={{ height: 1000 }}>{item.title}</div>
      })

    ]
    return (
      <div
        className="templates-wrapper"
        ref={(d) => {
          this.dom = d;
        }}
      >
        {this.state.show && children}
      </div>
    );
  }
}

export default App;
