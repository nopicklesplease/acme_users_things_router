import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { destroyThing, updateThing } from './store';

const Thing = ()=> {
  const { id } = useParams();
  const { things } = useSelector(state => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const thing = things.find(thing => thing.id === id);
  const [rating, setRating] = useState(0)

  useEffect(()=> {
    const thing = things.find(thing => thing.id === id);
    if(thing){
      setName(thing.name);
    }
  }, [things]);

  if(!thing){
    return null;
  }
  const destroy = (thing)=> {
    dispatch(destroyThing(thing));
    navigate('/things');
  };

  const update = async(ev)=> {
    ev.preventDefault();
    try {
      const updated = { id, name, rating };
      await dispatch(updateThing(updated));
      navigate('/things');
    }
    catch(ex){
      console.log(ex.response.data);
    }
  };
  return (
    <div>
      <h1>Thing { thing.name } ({thing.rating})</h1>
      <p>
        Add some details for things!
      </p>
      <form onSubmit={ update }>
        <input value={ name } onChange={ ev => setName(ev.target.value)}/>
        <div>
        <select value={ rating } onChange={ ev => setRating(ev.target.value) }>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
          <option value='6'>6</option>
          <option value='7'>7</option>
          <option value='8'>8</option>
          <option value='9'>9</option>
          <option value='10'>10</option>
        </select>
        </div>
        <button disabled={ name === thing.name && rating === thing.rating }>Update</button>
      </form>
      <button onClick={ ()=> destroy(thing)}>x</button>
    </div>
  );
};

export default Thing;
