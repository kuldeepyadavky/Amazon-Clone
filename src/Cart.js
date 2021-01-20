import React from 'react'
import './Cart.css'
import Subtotal from './Subtotal'

function Cart() {
	return (
		<div className='cart'>
			<div className='cart_left'>
				<img className='cart_ad' src='img/ad.jpg' alt='Advertisement' />
				<div>
					<h2 className='cart_title'>Your Shopping Basket</h2>
					{/*Your Basket Items */}
				</div>
			</div>

			<div className='cart_right'>
				<Subtotal />
			</div>
		</div>
	)
}

export default Cart
