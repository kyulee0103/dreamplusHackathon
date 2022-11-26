import {useNavigate} from 'react-router-dom'
import styled from 'styled-components'

const Card = styled.div`
    height: 352px;
    width: 100%;
    border: 1px solid #e1e8f0;
    border-radius: 8px;
    margin-top: 28px;
`

const Detail = styled.div`
    text-align: center;
    padding-top: 64px;
`
const Title = styled.p`
    color: #1f284f;
    font-weight: 700;
    font-size: 40px;
`
const DetailP = styled.p`
    color: #1f284f;
    font-weight: 300;
    font-size: 28px;
`
const Btn = styled.button`
    margin-top: 36px;
    background: #1a7ef2;
    border-radius: 30px;
    border: 0px;
    width: 189px;
    height: 48px;
    font-weight: 600;
    font-size: 18px;
    color: #ffffff;
    transition: all 0.3s ease;
    &:hover {
        background: #105aae;
        cursor: pointer;
    }
`

function AddResult() {
    const navigate = useNavigate()
    const onClick = () => {
        navigate('/new')
    }
    return (
        <Card>
            <Detail>
                <Title>No results?</Title>
                <DetailP>Add new report to help others</DetailP>
                <DetailP>know the scam projects!</DetailP>
                <Btn onClick={onClick}>Add new report</Btn>
            </Detail>
        </Card>
    )
}

export default AddResult
