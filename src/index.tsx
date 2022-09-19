import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { GlobalWalletsProvider } from './store/wallets/wallets.provider'
import MainTheme from './theme/MainTheme'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<MainTheme>
		<GlobalWalletsProvider>
			<App />
		</GlobalWalletsProvider>
	</MainTheme>,
)
