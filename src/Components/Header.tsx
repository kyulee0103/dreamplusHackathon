import {Link, useNavigate} from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../assets/Logo.svg'

const Total = styled.div`
    background-color: #ffffff;
    color: white;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
`
const Left = styled.div`
    padding-left: 100px;
    img {
        width: 201px;
        height: 40px;
    }
`
const Right = styled.div`
    padding-right: 100px;
    p {
        font-weight: 600;
        font-size: 14px;
        line-height: 18px;
        color: #1f384f;
        &:hover {
            cursor: pointer;
        }
    }
    display: flex;
    align-items: center;
`
const Btn = styled.button`
    width: 145px;
    height: 40px;
    border-radius: 40px;
    padding: 12px 24px;
    color: white;
    background-color: #3cba79;
    border-radius: 40px;
    letter-spacing: -0.02em;
    font-weight: 500;
    font-size: 16px;
    line-height: 100%;
    margin-left: 60px;
    border: 0px;
    transition: all 0.3s ease;
    &:hover {
        cursor: pointer;
        background-color: #1f384f;
    }
`

function Header() {
    const navigate = useNavigate()
    const onClick = () => {
        navigate('/connect')
    }
    return (
        <header>
            <Total>
                <Left>
                    <Link to="/">
                        <img src={Logo} />
                    </Link>
                </Left>
                <Right>
                    <p>About</p>
                    <Btn onClick={onClick}>Add to wallet</Btn>
                </Right>
            </Total>
        </header>
    )
}

export default Header
