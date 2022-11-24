import {defaultSnapOrigin} from '../config'
import {GetSnapsResponse, Snap} from '../types'

export const getSnaps = async (): Promise<GetSnapsResponse> => {
    return (await window.ethereum.request({
        method: 'wallet_getSnaps',
    })) as unknown as GetSnapsResponse
}

export const connectSnap = async (
    snapId: string = defaultSnapOrigin,
    params: Record<'version' | string, unknown> = {},
) => {
    await window.ethereum.request({
        method: 'wallet_enable',
        params: [
            {
                wallet_snap: {
                    [snapId]: {
                        ...params,
                    },
                },
            },
        ],
    })
}

export const getSnap = async (version?: string): Promise<Snap | undefined> => {
    try {
        const snaps = await getSnaps()

        return Object.values(snaps).find(
            (snap) => snap.id === defaultSnapOrigin && (!version || snap.version === version),
        )
    } catch (e) {
        console.log('Failed to obtain installed snap', e)
        return undefined
    }
}

export const getCheck = async () => {
    await window.ethereum.request({
        method: 'wallet_invokeSnap',
        params: [
            defaultSnapOrigin,
            {
                method: 'install_check',
            },
        ],
    })
}

export const isLocalSnap = (snapId: string) => snapId.startsWith('local:')
