import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreeting } from './actions';

function Greeting() {
 const dispatch = useDispatch();
 const greeting = useSelector(state => state.greeting);

 useEffect(() => {
   dispatch(fetchGreeting());
 }, [dispatch]);

 return <h1>{greeting}</h1>;
}

export default Greeting;
