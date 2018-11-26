import React, { Component } from 'react'
import logo from '../logo.png'

import './Menu.css'

import Sandwiches from '../components/Sandwiches/Sandwiches'
import Ingredients from '../components/Ingredients/Ingredients'
import Offers from '../components/Offers/Offers'

export default class Menu extends Component {
	constructor(props) {
		super(props)

		this.state = {
			ingredients: {},
			sum: 0,
			finish: false,
		}
	}

	componentDidMount() {
		let ingredients = this.props.ingredients.map(ingredient => {
			return {
				...ingredient
			}
		})

		this.setState({ingredients})
	}

	getSandwichValue = (value) => {
		this.setState({sum: value})
	}

	calculetesTotalMountedSandwichHandler = (key, amount) => {		
		if(amount === '') {
			amount = 0
		}

		let ingredients = {
			...this.state.ingredients
		}

		let updatedAmount = amount

		switch (key) {
			case 2:
				updatedAmount = Math.floor((amount / 3)) * ingredients[key].promo + Math.floor((amount % 3))
				break;
				
			case 4:
				updatedAmount = Math.floor((amount / 3)) * ingredients[key].promo + Math.floor((amount % 3))
				break;

			default:
				break;
		}

		ingredients[key].amount = parseInt(updatedAmount)

		let discount = 1

		if (ingredients[1].amount === 0 && ingredients[0].amount > 0) {
			discount = 0.9
		}

		this.setState({
			ingredients
		})

		const sum = Object.keys(ingredients)
			.map(key => {
				return (
					ingredients[key].amount * ingredients[key].preco
				)
			})
			.reduce((sum, el) => {
				return (sum + el)
			}, 0)

		this.setState({sum: sum * discount})
	}

	finishOrder = () => {
		this.setState({finish: true})
	}

	render() {
		if (!this.state.finish) {
			return (
				<div className="menu__wrapper">
					<div className="menu__header">
						<img className="logo" src={logo} alt="logo" />
						<h1 className="title">DexBurger App</h1>
						<h3 className="subtitle">A maneira mais fácil de matar sua fome!</h3>
					</div>

					<div className="items__container">

						<div className="menu__itens">
							<Ingredients
								ingredients={this.props.ingredients}
							/>
							<Offers 
								offers={this.props.offers}
							/>
						</div>

						<div className="menu__itens">
							<Sandwiches
								items={this.props.items}
								selected={this.getSandwichValue}
							/>
						</div>

						<div className="menu__itens">
							<h2 className="menu__text">Montar lanche</h2>
							{
								this.props.ingredients.map((ingredient, key) =>{
									return (
										<div
											key={key}
											className="build__control"
										>
											<div className="label">{ingredient.nome}</div>
											<input
												className="menu__input"
												type="number"
												min="0"
												placeholder="qtd"
												onChange={(event) => this.calculetesTotalMountedSandwichHandler(key, event.target.value)}
											/>
										</div>
									)
								})
							}
							<h2>Total: R$ {this.state.sum.toFixed(2)}</h2>
							{
								this.state.sum > 0 ?
									<button
										className="button__finish"
										onClick={() => this.finishOrder()}
									>
										Finalizar Pedido
									</button>
									:
									<button
										className="button__finish disabled"
										disabled
									>
										Finalizar Pedido
									</button>
							}
							
						</div>
					</div>
				</div>
			)
		} else {
			return (
				<div className="menu__wrapper">
					<div className="menu__header">
						<img className="logo" src={logo} alt="logo" />
						<h1 className="title">DexBurger App</h1>
						<h3 className="subtitle">A maneira mais fácil de matar sua fome!</h3>
					</div>

					<div className="items__container">
						<h1>Pedido finalizado com sucesso!</h1>
					</div>
				</div>
			)
		}
  	}
}
