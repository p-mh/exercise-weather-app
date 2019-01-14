import React from 'react';

import ResultItem from './ResultItem';

function Results(props) {
  const datas = props.weatherData;

  return datas.map(({ date, condition, icon_big, tmax, tmin }) => (
    <ResultItem
      date={date}
      condition={condition}
      icon_big={icon_big}
      tmax={tmax}
      tmin={tmin}
      key={date}
    />
  ));
}

export default Results;
