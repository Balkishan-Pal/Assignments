import './App.css';

import { Toolbar } from './components/Styled/Toolbar';
import Sitename from './components/Sitename';
import DrawerItem from './components/DrawerItem';

function App() {
	return (
		<Toolbar>
			<Sitename>
				<DrawerItem label='SITENAME' />
			</Sitename>

			<div style={{ display: 'flex' }}>
				<DrawerItem label='About us' />
				<DrawerItem label='Prices' />
				<DrawerItem label='Other' />
			</div>
		</Toolbar>
	);
}

export default App;