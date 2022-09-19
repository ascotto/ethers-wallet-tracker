import { walletActionTypes as actions, Action } from './wallets.actions'
import { WalletsInterface } from '../../types'

export const WalletsReducer = (state: WalletsInterface, action: Action) => {
	switch (action.type) {
		case actions.LOAD_WALLETS:
			return {
				...state,
				wallets: action.payload,
			}
		default:
			return state
	}
}
