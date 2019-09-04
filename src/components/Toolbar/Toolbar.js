import React from "react";

import logo from "../../assets/img/logo/logo.png";

const Toolbar = () => {
  return (
    <nav className='navbar' role='navigation' aria-label='main navigation'>
      <div className='container'>
        <div id='navbarBasicExample' className='navbar-menu'>
          <div className='navbar-start'>
            <div className='navbar-item has-dropdown is-hoverable'>
              <a className='navbar-link'>سبد خرید</a>

              <div className='navbar-dropdown'>
                <a className='navbar-item'>Contact</a>
                <hr className='navbar-divider' />
                <a className='navbar-item'>Report an issue</a>
              </div>
            </div>

            <div className='navbar-item has-dropdown is-hoverable'>
              <a className='navbar-link has-text-weight-light'>مرتب سازی</a>

              <div className='navbar-dropdown '>
                <a className='navbar-item'>Contact</a>
                <hr className='navbar-divider' />
                <a className='navbar-item'>Report an issue</a>
              </div>
            </div>
          </div>
        </div>

        <div className='navbar-brand'>
          <a className='navbar-item' href='https://github.com/raminrez/ttf'>
            <img src={logo} className='image' width='112' height='28' />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Toolbar;
