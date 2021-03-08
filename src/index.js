import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import App from './App';

ReactDOM.render(
  <>
  <div className="App">
    <App>
    </App> 
    </div>
  </>,
  document.getElementById('root')
);

/*
Snippet	Renders

imr	Import React
imrc	Import React / Component
imrs	Import React / useState
imrse	Import React / useState useEffect
impt	Import PropTypes
impc	Import React / PureComponent
cc	Class Component
ccc	Class Component With Constructor
cpc	Class Pure Component
sfc	Stateless Function Component
cdm	componentDidMount
uef	useEffect Hook
cwm	componentWillMount
cwrp	componentWillReceiveProps
gds	getDerivedStateFromProps
scu	shouldComponentUpdate
cwu	componentWillUpdate
cdu	componentDidUpdate
cwu	componentWillUpdate
cdc	componentDidCatch
gsbu	getSnapshotBeforeUpdate
ss	setState
ssf	Functional setState
usf	Declare a new state variable using State Hook
ren	render
rprop	Render Prop
hoc	Higher Order Component
*/ 
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
