import React from 'react';

function Header(props) {
    return (
      <header>
        <h2>Hello {props.user}, welcome to our website!</h2>
      </header>
    );
  }

export default Header;