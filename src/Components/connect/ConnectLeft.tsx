import styled from 'styled-components'
import Logo from '../../assets/Logo.svg'
import Highlight from '../../assets/connect/highlight.svg'

const Total = styled.div`
    width: 46%;
    height: 100%;
    position: absolute;
    left: 0;
    background: linear-gradient(141.34deg, #f5f0ff 0%, #eff6fe 50.36%, #edfaf5 100%);
`

const TitleDiv = styled.div`
    margin-top: 37%;
    position: relative;
    margin-left: 86px;
    margin-bottom: 16px;
    img {
        margin-bottom: 30px;
    }
`
const Title = styled.p`
    font-weight: 700;
    font-size: 32px;
    color: #17181a;
`
const Detail = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: #17181a;
`
const DetailDiv = styled.div`
    margin-left: 86px;
`
const Img = styled.img`
    position: absolute;
    top: 55px;
    left: 333px;
`

function ConnectLeft() {
    return (
        <Total>
            <TitleDiv>
                <img src={Logo} />
                <Title>To activate Validator,</Title>
                <Img src={Highlight} />
                <Title>There’s several steps.</Title>
            </TitleDiv>
            <DetailDiv>
                <Detail>Check out the right side to see how to</Detail>
                <Detail>activate your own validator!</Detail>
            </DetailDiv>
        </Total>
    )
}
export default ConnectLeft
