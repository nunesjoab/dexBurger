import React from 'react'

import './Sandwiches.css'

import Aux from '../../hoc/Auxiliar/Auxiliar'

export default (props) => {

	return (
		<Aux>
			<h2 className="menu__text">Lanches<span className="menu__text--right">Valor</span></h2>
			{
				props.items.map((item, key) => {
					return (
						<div className="item__wrapper" key={key}>
							<h3 className="menu__text">
								{item.nome}
							</h3>
							<p className="menu__text margin-reduce">
								{item.ingredientes}
								<span className="menu__text--right bold">R$ {item.preco.toFixed(2)}</span>
							</p>
							<button
								className="button__purchase"
								onClick={() => props.selected(item.preco)}
							>
								Comprar
							</button>
						</div>
					)
				})
			}
		</Aux>
	)
}
