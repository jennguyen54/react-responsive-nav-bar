import React, { Component } from 'react';
import { BottomNavigationBar } from './components/NavigationBar';
import { enquireScreen } from 'enquire-js';
import Card, { CardList} from './components/Card';

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
        { title: "Navigation One", to: "https://github.com/mattvox", target: "_blank" },
        { title: "Navigation Two", to: "nav_02" },
        { title: "Navigation Three", to: "nav_03" },
        { title: "Navigation Four", to: "nav_04" },
        { title: "Call Now", to: "tel: 5127017359" }
      ]
    }

    const children = [
      // <NavBar
      //   id="navbar"
      //   key="navbar"
      //   isMobile={this.state.isMobile}
      //   content={content.children}
      //   mobileBottom={true}
      // />,
      <BottomNavigationBar
        id="navbar"
        key="navbar"
        isMobile={this.state.isMobile}
        content={content.children}
        mobileBottom={true}
      />,
      <CardList isMobile={isMobile}>

      {content.children.map((item, idx) => {
        return <Card 
        isMobile={this.state.isMobile} 
        id={"card"+ item.to} 
        style={{ height: 1000 }}
        title={"Title"}>
        {item.title.repeat(idx + 10)}
        </Card>
      })}
      </CardList>,
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
