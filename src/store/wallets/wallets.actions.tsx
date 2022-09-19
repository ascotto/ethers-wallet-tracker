export enum walletActionTypes {
	LOAD_WALLETS = 'LOAD_WALLETS',
}

export type Action = {
	type: walletActionTypes
	payload: any | null
}
