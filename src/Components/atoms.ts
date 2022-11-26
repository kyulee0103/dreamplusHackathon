import {atom, selector} from 'recoil'

export interface ISearchState {
    chainBtn: boolean
    content: string
    whichChain?: string
}

export interface IWallet {
    myWallet: string
}

export const setAddress = atom<IWallet>({
    key: 'wallet',
    default: {
        myWallet: '',
    },
})

export const searchState = atom<ISearchState[]>({
    key: 'search',
    default: [],
})

export const myWallet = selector({
    key: 'myWalletSelector',
    get: async ({get}) => {
        const {myWallet} = get(setAddress)
        try {
            if (myWallet == '') {
                const [result] = await window.ethereum.request({method: 'eth_requestAccounts'})
                return result
            }
            return myWallet
        } catch (error) {
            console.log(error)
        }
    },
})
