import { createContext } from 'react'
import { WalletsInterface } from '../../types'

export const GlobalWalletsStore = createContext<WalletsInterface>(null!)
GlobalWalletsStore.displayName = 'GlobalWalletsStore'
