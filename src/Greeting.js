import React from 'react';
import { useSelector } from 'react-redux';
function Greeting() {
  const greeting = useSelector(state => state.greeting);
  return <h1>{greeting}</h1>;
}
export default Greeting;
