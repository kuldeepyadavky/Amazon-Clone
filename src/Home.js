import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
	return (
		<div className='home'>
			<div className='home_container'>
				<img
					className='containerImg'
					src='img/containerImg.jpg'
					alt='containerImg'
				/>

				<div className='home_row'>
					<Product
						id='100'
						title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback'
						price={11.96}
						rating={5}
						image='img/100.jpg'
					/>
					<Product
						id='101'
						title='Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl'
						price={239.0}
						rating={4}
						image='img/101.jpg'
					/>
				</div>

				<div className='home_row'>
					<Product
						id='102'
						title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
						price={199.99}
						rating={3}
						image='img/102.jpg'
					/>
					<Product
						id='103'
						title='Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric'
						price={98.99}
						rating={5}
						image='img/103.jpeg'
					/>
					<Product
						id='104'
						title='New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)'
						price={598.99}
						rating={4}
						image='img/104.jpg'
					/>
				</div>

				<div className='home_row'>
					<Product
						id='105'
						title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
						price={1094.98}
						rating={4}
						image='img/105.jpg'
					/>
				</div>
			</div>
		</div>
	)
}

export default Home
