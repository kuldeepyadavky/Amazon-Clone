import React from 'react'
import './CartItem.css'
import { useStateValue } from './StateProvider'

function CartItem({ id, image, title, price, rating, hideButton }) {
	const [{ basket }, dispatch] = useStateValue()

	const removeFromBasket = () => {
		dispatch({
			type: 'REMOVE_FROM_BASKET',
			id: id,
		})
	}

	return (
		<div className='cartItem'>
			<img className='cartItem_image' src={image} alt='CartItemImage' />

			<div className='cartItem_info'>
				<p className='cartItem_title'>{title}</p>
				<p className='cartItem_price'>
					{price}
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className='cartItem_rating'>
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p>🌟</p>
						))}
				</div>
				{!hideButton && (
					<button onClick={removeFromBasket}>Remove From Basket</button>
				)}
			</div>
		</div>
	)
}

export default CartItem
