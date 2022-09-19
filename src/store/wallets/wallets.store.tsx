import { createContext } from 'react'
import { WalletsInterface } from '../../types'
import { WALLETS_STATE } from './wallets.state'

export const GlobalWalletsStore = createContext<WalletsInterface>(WALLETS_STATE)
GlobalWalletsStore.displayName = 'GlobalWalletsStore'
