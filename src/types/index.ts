export interface WalletsInterface {
	wallets: string[]
	loadWallets: (params: object) => void
}

export type Tokens = {
	name: string
	address: string
	decimals: number
}

export type TokenInfo = {
	name: string
	ticker: string
	balance: string
}

export interface BalanceAddress {
	(
		token: string,
		wallet: string,
		provider: any,
		decimals: number,
	): Promise<TokenInfo>
}
