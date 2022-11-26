import Header from '../Components/Header'
import Lottie from 'lottie-react'
import checked from '../assets/checked.json'
import styled from 'styled-components'
import {useNavigate} from 'react-router-dom'

const Box = styled.div`
    width: 610px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    margin-top: 169px;
    display: flex;
    flex-direction: column;
    align-items: center;
    button {
        width: 174px;
        height: 48px;
        color: white;
        font-weight: 600;
        font-size: 18px;
        border: 0px;
        background: #1a7ef2;
        border-radius: 30px;
        margin-top: 42px;
        transition: all 0.3s ease;
        &:hover {
            cursor: pointer;
            background: #0f64c5;
        }
    }
`
const Title = styled.p`
    color: #1f284f;
    margin-bottom: 14px;
    font-weight: 700;
    font-size: 40px;
    margin-top: 32px;
`

const Detail = styled.p`
    color: #1f284f;
    font-weight: 400;
    font-size: 24px;
`

function Success() {
    const navigate = useNavigate()
    const onClick = () => {
        navigate('/')
    }
    return (
        <>
            <Header />
            <Box>
                <Lottie style={{width: '180px'}} animationData={checked} />
                <Title>Completed!</Title>
                <Detail>Thanks for your report. You have definitely</Detail>
                <Detail>saved someone’s million dollar.</Detail>
                <button onClick={onClick}>Back to home</button>
            </Box>
        </>
    )
}
export default Success
