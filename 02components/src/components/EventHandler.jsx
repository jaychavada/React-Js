import React from 'react'

function FunctionClick() {

    function clickHandle(){
        alert("Button Clicked");
    }

  return (
    <div>
        <button onClick={clickHandle}>OnClick-Event</button>
    </div>
  )
}

export default FunctionClick