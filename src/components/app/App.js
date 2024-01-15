import Header from '../header/Header'
import Registration from '../auth/registration/Registration'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import s from './App.module.css'

const App = () => {
	return (
		<Router>
			<div>
				<Header />
				<Routes>
					<Route path='/' element={<Registration />} />
					<Route path='/registration' element={<Registration />} />
					<Route path='/authorization' element={<Registration />} />
				</Routes>
			</div>
		</Router>
	)
}

export default App
