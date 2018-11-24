import React, { Component } from 'react'
import logo from '../logo.png'

import './Menu.css'
import Order from '../components/Order/Order';

export default class Menu extends Component {
	constructor(props) {
		super(props)

		this.state = {
			items: []
		}
	}

	render() {
		return (
			<div className="menu__wrapper">
				<div className="menu__header">
					<img className="logo" src={logo} alt="logo" />
					<h1 className="title">DexBurger App</h1>
					<h3 className="subtitle">A maneira mais fácil de matar sua fome!</h3>
				</div>

				<div className="items__container">
					<div className="menu__itens">
						<h2 className="menu__text">Lanches<span className="menu__text--right">Valor</span></h2>
						{
							this.props.items.map((item, key) => {
								return (
									<div className="item__wrapper" key={key}>
										<h3 className="menu__text">
											{item.nome}
										</h3>
										<p className="menu__text">
											{item.ingredientes.join(", ")}
											<span className="menu__text--right bold">R$ {item.preco.toFixed(2)}</span>
										</p>
										<input
											className="menu__input"
											type="number"
											placeholder="Qtd"
										/>
									</div>
									)
								})
						}
					</div>

					<div className="menu__itens">
						<h2 className="menu__text">Ingredientes<span className="menu__text--right">Valor</span></h2>
						{
							this.props.ingredients.map((ingredient, key) => {
								return (
									<ul key={key}>
										<li className="menu__text" >
											{ingredient.nome} <span className="menu__text--right bold">R$ {ingredient.preco.toFixed(2)}</span>
										</li>
									</ul>
								)
							})
						}
						<h2 className="menu__text">Promoções</h2>
						{
							this.props.offers.map((offer, key) => {
								return (

										<p
											key={key}
											className="menu__text"
										>
											<b>{offer.nome}</b>: {offer.descricao}
										</p>
								)
							})
						}
					</div>

					<div className="menu__itens">
						<Order />
					</div>
				</div>
			</div>
		)
  	}
}
