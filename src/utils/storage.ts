const storeWallets = (wallets: string[]): Promise<boolean> => {
	localStorage.setItem('wallets', JSON.stringify(wallets))
	return Promise.resolve(true)
}

const getWallets = async (): Promise<string[]> => {
	const wallets = localStorage.getItem('wallets')
	return Promise.resolve(wallets ? JSON.parse(wallets) : [])
}

export { storeWallets, getWallets }
