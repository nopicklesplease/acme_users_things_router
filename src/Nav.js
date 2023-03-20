import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Nav = ()=> {
  const {view, users, things, count } = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <nav>
      <a href='#' className={ view === '' ? 'selected': ''}>Home</a>
      <a href='#users' className={ view === 'users' ? 'selected': ''}>Users ({ users.length })</a>
      <a href='#things' className={ view === 'things' ? 'selected': ''}>Things ({ things.length })</a>
      <a onClick={ ()=> dispatch({ type: 'INC'}) }>{ count }</a>
    </nav>
  );
};

export default Nav;
