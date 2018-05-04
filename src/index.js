//our clean start!
import React from 'react';
import ReactDOM from 'react-dom';

//Create a new compoment. This compoment should
  // produce some HTML

//JSX 
const App = () => {
	return <div> Hi! </div>;
}

// capture this compoment, and display it
	//pass it to the DOM!

ReactDOM.render(<App />, document.querySelector('.container'));
//              instance , target