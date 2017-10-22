import React, { Component } from 'react';


class AppNav extends Component {
    render() {
        return(
           <div>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                <div className="container">
                  <a className="navbar-brand">React-Redux Events</a>
               </div>
              </nav>
           </div>
        )
    }
}

export default AppNav;