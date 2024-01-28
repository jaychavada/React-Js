import React from "react";
import propTypes from 'prop-types'

const PropsFunc = (props) => {
  console.log(props);
  return (
    <div>
      <h1>
        Hello, {props.name} a.k.a {props.knownfor}
      </h1>
      {props.children}
    </div>
  );
};

// proptypes are used here!!!
PropsFunc.propTypes = {
  name: propTypes.string,
  knownfor: propTypes.string
}

export default PropsFunc;
