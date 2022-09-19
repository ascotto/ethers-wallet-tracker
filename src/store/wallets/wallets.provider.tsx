import { useReducer } from 'react'
import { WalletsInterface } from '../../types'
import { WalletsReducer } from './wallets.reducer'
import { WALLETS_STATE } from './wallets.state'
import { GlobalWalletsStore } from './wallets.store'
import { walletActionTypes as actions } from './wallets.actions'

export const GlobalWalletsProvider: React.FC<{ children: JSX.Element }> = ({
	children,
}) => {
	const [state, dispatch] = useReducer(WalletsReducer, WALLETS_STATE)

	const value: WalletsInterface = {
		...state,
		loadWallets: (params: object) =>
			dispatch({ type: actions.LOAD_WALLETS, payload: params }),
	}

	return (
		<GlobalWalletsStore.Provider value={value}>
			{children}
		</GlobalWalletsStore.Provider>
	)
}
