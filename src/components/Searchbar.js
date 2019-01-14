import React from 'react';

function Searchbar(props) {
  const getWeather = () => props.getWeather(props.inputValue);
  return (
    <div>
      <input type="text" onChange={props.citySearch} />
      <button onClick={getWeather}>Search</button>
    </div>
  );
}

export default Searchbar;
