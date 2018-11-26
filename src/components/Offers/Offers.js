import React from 'react'
import Aux from '../../hoc/Auxiliar/Auxiliar'

export default (props) => {
  	return (
	  	<Aux>
		  	<h2 className="menu__text">Promoções</h2>
		  	{
			  	props.offers.map((offer, key) => {
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
	  	</Aux>
  	)
}
