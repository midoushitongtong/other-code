import React from './react';
import ReactDOM from './react-dom';

// class ToDo extends React.Component {
//   state = {
//     number: 0,
//   };

//   handleClick = () => {
//     this.setState((state) => ({
//       number: state.number + 1,
//     }));
//   };

//   render() {
//     return (
//       <div id="container">
//         <span>{this.state.number}</span>
//         <button onClick={this.handleClick}>加1</button>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<ToDo name="计数器" />, document.getElementById('root'));

function reducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return {
        count: state.count + 1,
      };
    default:
      return state;
  }
}

function ToDo() {
  const [number, setNumber] = React.useState(0);

  const [state, dispatch] = React.useReducer(reducer, {
    count: 0,
  });

  return (
    <div>
      <div id="container">
        <span>{number}</span>
        <button onClick={() => setNumber(number + 1)}>加1</button>
      </div>
      <div id="container">
        <span>{state.count}</span>
        <button onClick={() => dispatch({ type: 'ADD' })}>加1</button>
      </div>
    </div>
  );
}

ReactDOM.render(<ToDo />, document.getElementById('root'));
