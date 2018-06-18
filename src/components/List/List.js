import React from 'react';

const List = ({ list, type }) => {
  const listDisplay =
    list[0] && list.map(item => <p key={item[type]}>{item[type]}</p>);
  return <div>{listDisplay}</div>;
};

export default List;
