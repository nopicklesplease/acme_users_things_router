import React, { useState, useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { createRoot } from 'react-dom/client';
import Home from './Home';
import Users from './Users';
import Things from './Things';
import Nav from './Nav';
import store, { fetchUsers, fetchThings} from './store';

const App = ()=> {
  const dispatch = useDispatch();
  const { view } = useSelector(state => state);

  useEffect(()=> {
    window.addEventListener('hashchange', ()=> {
      dispatch({ type: 'SET_VIEW', view: window.location.hash.slice(1)});
    });
    dispatch({ type: 'SET_VIEW', view: window.location.hash.slice(1)});
  }, []);

  useEffect(()=> {
    dispatch(fetchUsers());
    dispatch(fetchThings());
  }, []);


  return (
    <div>
      <Nav />
      { view === '' && <Home /> }
      { view === 'users' && <Users /> }
      { view === 'things' && <Things /> }
    </div>
  );
};


const root = createRoot(document.querySelector('#root'));
root.render(<Provider store={ store }><App /></Provider>);
