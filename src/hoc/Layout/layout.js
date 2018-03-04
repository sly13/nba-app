import React, { Component } from "react";
import Header from "../../components/Header/header";

class Layout extends Component {
  state = {
    showNav: false
  };

  toggleSideNav = action => {
    this.setState({
      showNav: action
    });
  };

  render() {
    return (
      <div>
        <Header
          showNav={this.state.showNav}
          onHideNav={() => this.toggleSideNav(false)}
          onOpenNav={() => this.toggleSideNav(true)}
        />
        {this.props.children}
        footer
      </div>
    );
  }
}

export default Layout;
