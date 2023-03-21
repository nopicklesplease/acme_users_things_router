import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { destroyThing } from './store';

const Thing = ()=> {
  const { id } = useParams();
  const { things } = useSelector(state => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(things);
  const thing = things.find(thing => thing.id === id);
  if(!thing){
    return null;
  }
  const destroy = (thing)=> {
    dispatch(destroyThing(thing));
    navigate('/things');
  };
  return (
    <div>
      <h1>Thing { thing.name }</h1>
      <p>
        Add some details for things!
      </p>
      <button onClick={ ()=> destroy(thing)}>x</button>
    </div>
  );
};

export default Thing;
