import {useNavigate} from 'react-router-dom'
import {useRecoilValue} from 'recoil'
import styled from 'styled-components'
import {searchState} from '../atoms'

const Total = styled.div`
    height: 298px;
    margin-top: 28px;
    border: 1px solid #e1e8f0;
    border-radius: 8px;
    text-align: center;
`
const Title = styled.div`
    margin-top: 64px;
`
const Detail = styled.div`
    margin-bottom: 36px;
    p {
        font-weight: 300;
        font-size: 26px;
        color: #1f284f;
    }
`
const Black = styled.span`
    color: #1f284f;
    font-weight: 700;
    font-size: 36px;
`
const Blue = styled.span`
    color: #1a7ef2;
    font-weight: 700;
    font-size: 36px;
`
const Btn = styled.button`
    transition: all 0.3s ease;
    &:hover {
        background: #105aae;
        cursor: pointer;
    }
    width: 189px;
    height: 48px;
    border: 0px;
    color: white;
    background: #1a7ef2;
    font-weight: 600;
    font-size: 18px;
    border-radius: 30px;
`

function AddAnother() {
    const search = useRecoilValue(searchState)
    const navigate = useNavigate()
    const onClick = () => {
        navigate('/new', {
            state: {
                chainId: search.whichChain,
                address: search.content,
            },
        })
    }
    return (
        <Total>
            <Title>
                <Black>Same address, but</Black>
                <Blue> different project?</Blue>
                <Detail>
                    <p>Another scam project might exist in the chain.</p>
                </Detail>
                <Btn onClick={onClick}>Add new report</Btn>
            </Title>
        </Total>
    )
}

export default AddAnother
