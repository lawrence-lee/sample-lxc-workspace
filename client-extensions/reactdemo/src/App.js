import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from 'react';

function App() {
	
	const [myOutput, setOutput] = useState('Click the button to see the Object name here');
	const [myAPIOutput, setAPIOutput] = useState('');
	
	function getMyObject() {
			fetch('/o/c/shinyobjects/', {
				method: 'GET',
				headers: { 'Content-Type': 'application/json',
							'x-csrf-token': window.Liferay.authToken },
				
			})
				.then(res => res.json())
				.then(jsonData => {
					console.log(jsonData.items[0].name);
					setOutput(jsonData.items[0].name);
					fetch(process.env.REACT_APP_RESTAPI_URL, {
						method: 'GET'
						}).then(res => res.json())
							.then(jsonDataNew => {
								setAPIOutput(jsonDataNew.message);
							}). catch((err)=> {
							console.log(err);
							});
					
				})
				. catch((err)=> {
					console.log(err);
				});
					
	};
	
  return (
    <div className="App">
      <header className="App-header">
        <img src={process.env.REACT_APP_BASE_URL + logo} className="App-logo" alt="logo" />
        <button onClick={getMyObject}>GetObject!!!</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
		{myOutput + '-' + myAPIOutput}
        </a>
		
      </header>
    </div>
  );
}

export default App;
