import { BalanceAddress } from "../types/index"
import { Contract, utils } from 'ethers'

export const erc20Abi = [
	'function name() view returns (string)',
	'function symbol() view returns (string)',
	'function balanceOf(address owner) view returns (uint)',
]

// getBalanceForAddress with typescript
export const getBalanceForAddress: BalanceAddress = async (
	token,
	walletAddress,
	provider,
	decimals,
) => {
	const contract = new Contract(token, erc20Abi, provider)
	const balanceRaw = await contract.balanceOf(walletAddress)

	const name = await contract.name()
	const ticker = await contract.symbol()

	const balance = await utils.formatUnits(balanceRaw, decimals)

	return { balance, name, ticker }
}
