import React, { Component } from 'react'
import './App.css'

import Menu from './containers/Menu'
import data from './data.json'

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			ingredients: [],
			items: [],
			offers: [],
		}
	}

	componentWillMount() {
		const inflation = data.inflacao

		let ingredients = data.ingredientes.map(ingredient => {
			ingredient.preco = ingredient.preco * inflation
			return {
				...ingredient
			}
		})

		let sandwiches = data.lanches.map(sandwich => {
			let components = sandwich.ingredientes.split(', ')
			let price = 0
			components.map(component => {
				data.ingredientes.forEach(ingredient => {
					if(ingredient.nome === component) {
						component = ingredient.id
						price += ingredient.preco
					}
				})
				return component
			})

			sandwich.preco = price 
			return {
				...sandwich
			}
		})

		let offers = data.promocoes.map(offer => {
			return {
				...offer
			}
		})

		this.setState({
			ingredients,
			items : sandwiches,
			offers: offers
		})
	}

	render() {
		return (
	  		<div className="App">
				<Menu
					ingredients={this.state.ingredients}
					items={this.state.items}
					offers={this.state.offers}
				/>
	  		</div>
		)
  	}
}

export default App
