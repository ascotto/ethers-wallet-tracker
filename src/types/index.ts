export type WalletCardProps = {
	wallet: string
	name: string
	address: string
	balances: WalletsBalances[]
}

export type WalletsBalances = {
	name: string
	ticker: string
	balance: string
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

export interface WalletsInterface {
	wallets: string[]
	loadWallets: (params: object) => void
}
