import React from './react';
import ReactDOM from './react-dom';

const style = {
  border: '1px solid #999',
  margin: '1rem',
};

const Element = (
  <div id="a1" style={style}>
    a1
    <div id="b1" style={style}>
      b1
      <div id="c1" style={style}>
        c1
      </div>
      <div id="c2" style={style}>
        c2
      </div>
    </div>
    <div id="b2" style={style}>
      b2
    </div>
  </div>
);

ReactDOM.render(Element, document.getElementById('root'));
