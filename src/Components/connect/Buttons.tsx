import {ComponentProps} from 'react'
import styled from 'styled-components'
import {MetamaskState} from '../../Hooks'
import {shouldDisplayReconnectButton} from '../../utils'
import * as S from './StepStyle'

const Button = styled.button`
    margin-left: 28px;
    width: 262px;
    height: 44px;
    background: #3cba79;
    border-radius: 4px;
    border: 0px;
    font-weight: 600;
    font-size: 18px;
    color: #ffffff;
    letter-spacing: -0.02em;
    transition: all 0.3s ease;
    &:hover {
        cursor: pointer;
        background-color: #1f384f;
    }
`

const ConnectedContainer = styled.div``

const ConnectedIndicator = styled.div`
    content: ' ';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: green;
`

const GoSite = () => {
    window.open('https://chrome.google.com/webstore/detail/metamask-flask-developmen/ljfoeinjpaedjfecbmggjgodbgkmjkjk')
}

export const InstallFlaskButton = () => (
    // <S.Install href="https://metamask.io/flask/" target="_blank">
    //     Install
    // </S.Install>
    <S.Btn onClick={GoSite}>Install</S.Btn>
)

export const ConnectButton = (props: ComponentProps<typeof Button>) => {
    return <Button {...props}>Connect</Button>
}

export const ReconnectButton = (props: ComponentProps<typeof Button>) => {
    return <Button {...props}>Reconnect</Button>
}

export const HeaderButtons = ({state, onConnectClick}: {state: MetamaskState; onConnectClick(): unknown}) => {
    if (!state.isFlask && !state.installedSnap) {
        return <InstallFlaskButton />
    }

    if (!state.installedSnap) {
        return <ConnectButton onClick={onConnectClick} />
    }

    if (shouldDisplayReconnectButton(state.installedSnap)) {
        return <ReconnectButton onClick={onConnectClick} />
    }

    return (
        <ConnectedContainer>
            <ConnectedIndicator />
            Connected
        </ConnectedContainer>
    )
}
