import React, { Component } from 'react'
import './App.css'

import Menu from './containers/Menu';
import data from './data.json'

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			ingredients: [],
			items: [],
			offers: []
		}
	}

	componentDidMount() {
		let ingredients = data.ingredientes.map(ingredient => {
			return {
				...ingredient
			}
		})

		let items = [
			{
				"nome": "x-bacon",
				"ingredientes": [ingredients[1].nome , ingredients[2].nome , ingredients[4].nome],
				"preco": ingredients[1].preco + ingredients[2].preco + ingredients[4].preco
			},
			{
				"nome": "x-burger",
				"ingredientes": [ingredients[2].nome , ingredients[4].nome],
				"preco": ingredients[2].preco + ingredients[4].preco
			},
			{
				"nome": "x-egg",
				"ingredientes": [ingredients[3].nome , ingredients[2].nome , ingredients[4].nome],
				"preco": ingredients[3].preco + ingredients[2].preco + ingredients[4].preco
			},
			{
				"nome": "x-egg",
				"ingredientes": [ingredients[1].nome , ingredients[3].nome , ingredients[2].nome , ingredients[4].nome],
				"preco": ingredients[1].preco + ingredients[3].preco + ingredients[2].preco + ingredients[4].preco
			}
		]

		let offers = data.promocoes.map(offer => {
			return {
				...offer
			}
		})

		this.setState({
			ingredients,
			items,
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
