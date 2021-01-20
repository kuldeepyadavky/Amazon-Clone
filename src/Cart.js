import React from 'react'
import './Cart.css'
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider'
import CartItem from './CartItem'

function Cart() {
	const [{ basket, user }, dispatch] = useStateValue()

	return (
		<div className='cart'>
			<div className='cart_left'>
				<img className='cart_ad' src='img/ad.jpg' alt='Advertisement' />

				<div>
					<h3>Hello, {user?.email}</h3>
					<h2 className='cart_title'>Your Shopping Basket</h2>

					{basket.map((item) => (
						<CartItem
							id={item.id}
							title={item.title}
							image={item.image}
							price={item.price}
							rating={item.rating}
						/>
					))}
				</div>
			</div>

			<div className='cart_right'>
				<Subtotal />
			</div>
		</div>
	)
}

export default Cart
