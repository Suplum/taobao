//package
import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider, observer } from "mobx-react"

//local
import Content from "./components/Content.jsx"
import store from "./store/"
import "./less/index.less"

@observer
export default class Root extends Component {
	render() {
		return (
			<Provider store={store}>
				<Content />
			</Provider>
		)
	}
}

render(
	<Root />,
	document.querySelector('#root')
)
