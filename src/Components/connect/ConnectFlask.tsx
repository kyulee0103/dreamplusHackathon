import {useContext, useState} from 'react'
import Here from '../../assets/connect/here.svg'
import NotNow from '../../assets/connect/notnow.svg'
import styled from 'styled-components'
import {MetamaskActions, MetaMaskContext} from '../../Hooks'
import {connectSnap, getSnap, getCheck, shouldDisplayReconnectButton} from '../../utils'
import {ConnectButton, InstallFlaskButton, ReconnectButton} from './Buttons'
import * as S from './StepStyle'
import {Card} from './Card'
import Step3 from './Step3'
import {useSetRecoilState, useRecoilState} from 'recoil'
import {setAddress} from '../atoms'

const ErrorMessage = styled.div``

export const Home = () => {
    const [state, dispatch] = useContext(MetaMaskContext)
    const [finalFinished, setFinalFinished] = useState<boolean>(false)

    const [walletAddress, setWalletAddress] = useRecoilState(setAddress)

    const handleConnectClick = async () => {
        try {
            await connectSnap()
            const installedSnap = await getSnap()
            dispatch({
                type: MetamaskActions.SetInstalled,
                payload: installedSnap,
            })
            if (state.isFlask) {
                console.log('MetaMask Here!')

                const [result] = await window.ethereum.request({method: 'eth_requestAccounts'})
                setWalletAddress({myWallet: result})
                setFinalFinished(true)
            } else {
                console.log('Need to install MetaMask')
            }
        } catch (e) {
            console.error(e)
            dispatch({type: MetamaskActions.SetError, payload: e})
        }
    }

    const handleGetAddress = async () => {
        const [result] = await window.ethereum.request({method: 'eth_requestAccounts'})
        setWalletAddress({myWallet: result})
    }

    console.log(walletAddress)

    const handlegetCheckClick = async () => {
        try {
            await getCheck()
        } catch (e) {
            console.error(e)
            dispatch({type: MetamaskActions.SetError, payload: e})
        }
    }

    console.log(state)

    return (
        <>
            <S.ConnectRight>
                <S.Box>
                    <>
                        {state.error && (
                            <ErrorMessage>
                                <b>An error happened:</b> {state.error.message}
                            </ErrorMessage>
                        )}
                        {!state.isFlask && (
                            <>
                                <S.TopDots>
                                    <S.HereImg src={Here} />
                                    <S.NotNowImg src={NotNow} />
                                    <S.NotNowImg src={NotNow} />
                                </S.TopDots>
                                <Card
                                    content={{
                                        title: 'Install MetaMask Flask',
                                        description:
                                            'Lorem ipsum dolor sit amet consectetur. Consectetur sodales eu tempor auctor nulla neque odio.',
                                        button: <InstallFlaskButton />,
                                        imgSrc: '/connect/flask.png',
                                        size: '90px',
                                        moreInfo: 'What is MetaMask Flask?',
                                        where: 'https://metamask.io/flask/',
                                    }}
                                />
                            </>
                        )}
                        {state.isFlask && !state.installedSnap && (
                            <>
                                <S.TopDots>
                                    <S.NotNowImg src={NotNow} />
                                    <S.HereImg src={Here} />
                                    <S.NotNowImg src={NotNow} />
                                </S.TopDots>
                                <Card
                                    content={{
                                        title: 'Connect the Snap',
                                        description:
                                            'Lorem ipsum dolor sit amet consectetur. Consectetur sodales eu tempor auctor nulla neque odio.',
                                        button: (
                                            <ConnectButton onClick={handleConnectClick} disabled={!state.isFlask} />
                                        ),
                                        imgSrc: '/connect/snap.png',
                                        size: '130px',
                                        moreInfo: 'What is Snap?',
                                        where: 'https://docs.metamask.io/guide/snaps.html',
                                    }}
                                />
                            </>
                        )}
                        {state.isFlask && state.installedSnap && !state.installedSnap.enabled && (
                            <>
                                <S.TopDots>
                                    <S.NotNowImg src={NotNow} />
                                    <S.HereImg src={Here} />
                                    <S.NotNowImg src={NotNow} />
                                </S.TopDots>
                                <Card
                                    content={{
                                        title: 'Reconnect the Snap',
                                        description:
                                            'Lorem ipsum dolor sit amet consectetur. Consectetur sodales eu tempor auctor nulla neque odio.',
                                        button: (
                                            <ReconnectButton
                                                onClick={handleConnectClick}
                                                disabled={!state.installedSnap}
                                            />
                                        ),
                                        imgSrc: '/connect/snap.png',
                                        size: '130px',
                                        moreInfo: 'What is Snap?',
                                        where: 'https://docs.metamask.io/guide/snaps.html',
                                    }}
                                />
                            </>
                        )}
                        {finalFinished && state.isFlask && state.installedSnap && state.installedSnap.enabled && (
                            <Step3 />
                        )}
                    </>
                </S.Box>
            </S.ConnectRight>
        </>
    )
}
