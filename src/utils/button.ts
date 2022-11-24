import {Snap} from '../types'
import {isLocalSnap} from './snap'

export const shouldDisplayReconnectButton = (installedSnap?: Snap) =>
    !installedSnap?.enabled ?? isLocalSnap(installedSnap?.id)
