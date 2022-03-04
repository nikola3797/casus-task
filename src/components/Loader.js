import React from 'react';

const Loader = ({width}) => {
  return (
    <div style={{width: `${width}%`}} className={"loader"}></div>
  );
};

export default Loader;