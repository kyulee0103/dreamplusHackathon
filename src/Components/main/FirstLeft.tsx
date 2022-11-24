import {useCallback} from 'react'
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components'
import useGoToDiv from '../../Hooks/useGoToDiv'

const Total = styled.div`
    margin-left: 100px;
    margin-top: 102px;
`
const Content = styled.div`
    margin-bottom: 30px;
`
const Head = styled.div`
    /* width: 100%; */
    /* height: 86px; */
`
const Top = styled.p`
    color: #35a7ff;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 2px;
    margin-bottom: 0;
`
const Title = styled.p`
    margin-top: 0;
    color: #1f284f;
    font-weight: 700;
    font-size: 50px;
`

const Detail = styled.div`
    height: 160px;
    margin-top: 30px;
    color: #515458;
`
const Middle = styled.p`
    font-size: 20px;
    font-weight: 400;
`
const Low = styled.p`
    font-weight: 300;
    font-size: 18px;
`

const Div = styled.div`
    margin-top: 30px;
`
const Buttons = styled.div`
    margin-top: 32px;
`
const Project = styled.button`
    background-color: rgba(0, 112, 240, 0.9);
    border: 1px solid rgba(0, 112, 240, 0.9);
    border-radius: 30px;
    color: #ffffff;
    font-weight: 600;
    font-size: 16px;
    padding: 12px 24px;
    width: 173px;
    height: 48px;
    margin-right: 16px;
    margin-bottom: 16px;
    &:hover {
        cursor: pointer;
    }
`
const Wallet = styled.button`
    background-color: #3cba79;
    border: 1px solid #3cba79;
    border-radius: 30px;
    color: #ffffff;
    font-weight: 600;
    font-size: 16px;
    padding: 12px 24px;
    width: 173px;
    height: 48px;
    &:hover {
        cursor: pointer;
    }
`

function FirstLeft() {
    const navigate = useNavigate()
    const {move, setTargetElementId} = useGoToDiv()

    const onClick2 = () => {
        navigate('/connect')
    }

    const handleScrollToSecondDiv = useCallback(() => {
        setTargetElementId('second')
        move()
    }, [])

    return (
        <Total>
            <Content>
                <Head>
                    <Top>WEB3 WHOSCALL</Top>
                    <Title>Validator</Title>
                </Head>
                <Detail>
                    <Middle>It's our rights to distinguish</Middle>
                    <Middle>the real and fake</Middle>
                    <Div>
                        <Low>Validator helps you distinguish the scam</Low>
                        <Low>project and buy safety properties.</Low>
                    </Div>
                </Detail>
            </Content>
            <Buttons>
                <Project onClick={handleScrollToSecondDiv}>Search projects</Project>
                <Wallet onClick={onClick2}>Add to wallet</Wallet>
            </Buttons>
        </Total>
    )
}
export default FirstLeft
