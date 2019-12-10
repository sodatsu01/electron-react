import React from 'react';
import ReactDom from 'react-dom';

export default class Hello extends React.Component {
  render() {
    return(
      <div>
        <h1>
          test
        </h1>
      </div>
    )
  }
}
ReactDom.render(<Hello />, document.getElementById('root'))
