import './App.css'
import Header from './Header'
import Home from './Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Cart from './Cart'
import Login from './Login'

function App() {
	return (
		//BEM
		<Router>
			<div className='app'>
				<Header />

				<Switch>
					<Route path='/cart'>
						<Cart />
					</Route>
					<Route path='/'>
						<Home />
					</Route>
					<Route path='/login'>
						<Login />
					</Route>
				</Switch>
			</div>
		</Router>
	)
}

export default App
