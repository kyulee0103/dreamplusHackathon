import {atom} from 'recoil'

export interface ISearchState {
    chainBtn: boolean
    content: string
    whichChain?: string
}

export interface IWallet {
    myWallet: string
}

export const setAddress = atom<IWallet[]>({
    key: 'myWallet',
    default: [],
})

export const searchState = atom<ISearchState[]>({
    key: 'search',
    default: [],
})
