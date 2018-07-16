import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import './styles/stylesheet.css'

//const helloElement = React.createElement('h1', null, 'Hello World !');
//ReactDOM.render(helloElement, document.getElementById('root'));

 //const items = ['gwt migrate', 'user story progess', 'react exploration'];
 
 //without using JSX
 //const itemList = React.createElement(
 //    'ol', 
 //    null, 
 //   items.map((item, index) => React.createElement('li', {key: index}, item)));


//using JSX
// const itemList = 
//     <div>
//         <h1>
//             Task List
//         </h1>
//         <ol>
//             {
//                 items.map((task, index) => <li key={index}>{task}</li>)
//             }
//         </ol>
//     </div> 
//  ReactDOM.render(itemList, document.getElementById('root'));    

//usinf Component class of React

ReactDOM.render(<Main/>, document.getElementById('root'));