import styled from 'styled-components'
import SearchFirst from './SearchFirst'

const Top = styled.div`
    margin-left: 100px;
    padding-top: 48px;
    margin-right: 100px;
`
const Text = styled.div``
const Small = styled.p`
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: rgba(0, 112, 240, 0.9);
    letter-spacing: 2px;
    margin-bottom: 20px;
`
const Big = styled.p`
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    color: #1f284f;
`

const Buttons = styled.div`
    margin-top: 40px;
`
const ChainBtn = styled.button`
    width: 97px;
    height: 48px;
    background-color: rgba(0, 112, 240, 0.9);
    border: 1px solid rgba(0, 112, 240, 0.9);
    border-radius: 30px;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    text-align: center;
    margin-right: 16px;
`
const URLBtn = styled.button`
    width: 77px;
    height: 48px;
    background: #fafbfc;
    border: 1px solid #b7bfc7;
    border-radius: 30px;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #1f284f;
    text-align: center;
`

function SecondTop() {
    return (
        <Top>
            <Text>
                <Small>SEARCH PROJECTS</Small>
                <Big>Search for projects or collections</Big>
                <Big>you want to validate.</Big>
            </Text>
            {/* <Buttons>
                <ChainBtn>Chain</ChainBtn>
                <URLBtn>URL</URLBtn>
            </Buttons> */}
            <SearchFirst />
        </Top>
    )
}

export default SecondTop
