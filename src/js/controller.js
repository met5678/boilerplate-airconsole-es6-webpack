import '../styles/controller.scss';
import AirConsole from 'airconsole';
import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';

import Base from './components-controller/Base';

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
	module.hot.accept('./components-controller/Base', () => {
		const NextBase = require('./components-controller/Base').default;
		render(NextBase);
	});
}
