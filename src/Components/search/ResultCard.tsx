import styled from 'styled-components'
import x from '../../assets/search/report.svg'

const Card = styled.div`
    margin-top: 28px;
    height: 254px;
    background: linear-gradient(141.34deg, #f5f0ff 0%, #eff6fe 50.36%, #edfaf5 100%);
    border: 1px solid #e1e8f0;
    border-radius: 8px;
    padding: 39px 44px;
`
const Title = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: #1f284f;
    font-weight: 700;
    font-size: 32px;
    height: 100px;
`
const Detail = styled.div`
    p {
        font-weight: 500;
        font-size: 20px;
        color: #515458;
    }
`
const Category = styled.span`
    margin-top: 32px;
    color: #1f284f;
    font-weight: 600;
    font-size: 16px;
    padding: 12px 24px;
    border: 1px solid #1f284f;
    border-radius: 10px;
`
const Report = styled.div`
    position: relative;
    img {
        position: absolute;
        top: 20px;
        left: 20px;
        &:hover {
            cursor: pointer;
        }
    }
    button {
        padding-left: 25px;
        width: 144px;
        height: 48px;
        border: 0px;
        background-color: #f46969;
        border-radius: 30px;
        color: #ffffff;
        font-weight: 600;
        font-size: 16px;
        transition: all 0.3s ease;
        &:hover {
            cursor: pointer;
            background-color: #d83a3a;
        }
    }
`

const Word = styled.div`
    margin-top: 10px;
`

function ResultCard() {
    return (
        <div style={{width: '100%', marginBottom: '10px'}}>
            <Card>
                <Title>
                    <Word>
                        <p>NFTBank.ai</p>
                    </Word>
                    <Report>
                        <img src={x} />
                        <button>Report 1</button>
                    </Report>
                </Title>
                <Detail>
                    <p>Chain Address: 0x8sdbhf632bhfd9snf1jkf</p>
                    <p>URL: https://nftbank.ai</p>
                </Detail>
                <div style={{marginTop: '50px'}}>
                    <Category>Phishing</Category>
                </div>
            </Card>
        </div>
    )
}

export default ResultCard
