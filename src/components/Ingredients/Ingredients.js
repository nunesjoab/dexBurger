import React from 'react'
import Aux from '../../hoc/Auxiliar/Auxiliar'

export default (props) => {
	return (
	    <Aux>
			<h2 className="menu__text">Ingredientes<span className="menu__text--right">Valor</span></h2>
			{
				props.ingredients.map((ingredient, key) => {
					return (
						<ul key={key}>
							<li className="menu__text" >
								{ingredient.nome} <span className="menu__text--right bold">R$ {ingredient.preco.toFixed(2)}</span>
							</li>
						</ul>
					)
				})
			}
	    </Aux>
	)
}
