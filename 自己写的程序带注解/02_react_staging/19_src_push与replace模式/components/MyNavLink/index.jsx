import React, { Component } from 'react'
import {NavLink} from "react-router-dom";

export default class MyNavLink extends Component {

	render() {

		console.log(this.props); // {"to": "/about","children": " About "  }
		return (
			<NavLink activeClassName="atguigu" className="list-group-item" {...this.props} />
		)
	}
}
