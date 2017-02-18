import '../styles/screen.scss';
import AirConsole from 'airconsole';
import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';

import Base from './components-screen/Base';

var instance = new AirConsole();

const rootEl = document.createElement('div');
rootEl.id = 'root';
document.body.appendChild(rootEl);
const render = (Component) => {
	ReactDOM.render(
		<AppContainer>
			<Component />
		</AppContainer>,
		rootEl
	);	
}

render(Base);

if(module.hot) {
	module.hot.accept('./components-screen/Base', () => {
		const NextBase = require('./components-screen/Base').default;
		render(NextBase);
	});
}
