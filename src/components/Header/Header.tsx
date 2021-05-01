import React, { FC } from 'react';

const Header: FC = () => (
  <header>
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light d-flex">
        <span
          className="navbar-brand d-flex justify-content-around justify-content-xl-start justify-content-lg-center justify-content-md-center justify-content-sm-center"
        >
          <img
            src="img/chat-logo.svg"
            alt="nerds"
          />
          <h1 className="logo-name">stranger2stranger</h1>
        </span>
      </nav>
    </div>
  </header>
);

export default Header;
