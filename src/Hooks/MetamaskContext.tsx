import {createContext, Dispatch, ReactNode, Reducer, useEffect, useReducer} from 'react'
import {Snap} from '../types/snap'
import {isFlask} from '../utils/metamask'
import {getSnap} from '../utils/snap'
import {useVisibilityChange} from './useVisibilityChange'

export type MetamaskState = {
    isReady: boolean
    isFlask: boolean
    installedSnap?: Snap
    error?: Error
}

const initialState: MetamaskState = {
    isReady: false,
    isFlask: false,
    error: undefined,
}

type MetamaskDispatch = {type: MetamaskActions; payload: any}

export const MetaMaskContext = createContext<[MetamaskState, Dispatch<MetamaskDispatch>]>([
    initialState,
    () => {
        /* no op */
    },
])

export enum MetamaskActions {
    SetInstalled = 'SetInstalled',
    SetFlaskDetected = 'SetFlaskDetected',
    SetError = 'SetError',
}

const reducer: Reducer<MetamaskState, MetamaskDispatch> = (state, action) => {
    switch (action.type) {
        case MetamaskActions.SetInstalled:
            return {
                ...state,
                installedSnap: action.payload,
            }

        case MetamaskActions.SetFlaskDetected:
            return {
                ...state,
                isFlask: action.payload,
            }

        case MetamaskActions.SetError:
            return {
                ...state,
                error: action.payload,
            }

        default:
            return state
    }
}

export const MetaMaskProvider = ({children}: {children: ReactNode}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        async function detectFlask() {
            try {
                const isFlaskDetected = await isFlask()

                dispatch({
                    type: MetamaskActions.SetFlaskDetected,
                    payload: isFlaskDetected,
                })
            } catch {
                // ignored
            }
        }

        async function detectSnapInstalled() {
            try {
                const installedSnap = await getSnap()
                dispatch({
                    type: MetamaskActions.SetInstalled,
                    payload: installedSnap,
                })
            } catch {
                // ignored
            }
        }

        detectFlask()

        if (state.isFlask) {
            detectSnapInstalled()
        }
    }, [state.isFlask, window.ethereum])

    useEffect(() => {
        let timeoutId: number

        if (state.error) {
            timeoutId = window.setTimeout(() => {
                dispatch({
                    type: MetamaskActions.SetError,
                    payload: undefined,
                })
            }, 10000)
        }

        return () => {
            if (timeoutId) {
                window.clearTimeout(timeoutId)
            }
        }
    }, [state.error])

    return <MetaMaskContext.Provider value={[state, dispatch]}>{children}</MetaMaskContext.Provider>
}
