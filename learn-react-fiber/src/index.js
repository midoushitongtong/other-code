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

document.querySelector('#button-1').addEventListener('click', () => {
  const Element2 = (
    <div id="a1-new" style={style}>
      a1-new-1
      <div id="b1-new" style={style}>
        b1-new-1
        <div id="c1-new" style={style}>
          c1-new-1
        </div>
        <div id="c2-new" style={style}>
          c2-new-1
        </div>
      </div>
      <div id="b2-new" style={style}>
        b2-new-1
      </div>
      <div id="b3" style={style}>
        b3
      </div>
    </div>
  );

  ReactDOM.render(Element2, document.getElementById('root'));
});

document.querySelector('#button-2').addEventListener('click', () => {
  const Element3 = (
    <div id="a1-new" style={style}>
      a1-new-2
      <div id="b1-new" style={style}>
        b1-new-2
        <div id="c1-new" style={style}>
          c1-new-2
        </div>
        <div id="c2-new" style={style}>
          c2-new-2
        </div>
      </div>
      <div id="b2-new" style={style}>
        b2-new-2
      </div>
    </div>
  );

  ReactDOM.render(Element3, document.getElementById('root'));
});
