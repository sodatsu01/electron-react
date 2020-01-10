import React from 'react';
import ReactDom from 'react-dom';

export default class Hello extends React.Component {
  render() {
    return(
      <div>
        <h1 className='hello text'>
          hello
        </h1>
        <h2 className='text'>
          test
        </h2>
      </div>
    )
  }
}
ReactDom.render(<Hello />, document.getElementById('root'))
