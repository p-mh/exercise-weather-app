import React from 'react';

function ResultItem({ date, condition, icon_big, tmax, tmin }) {
  return (
    <div>
      <h1>{date}</h1>
      <p>{condition}</p>
      <img src={icon_big} alt="" />
      <p>
        Max : {tmax} / Min : {tmin}
      </p>
    </div>
  );
}

export default ResultItem;
