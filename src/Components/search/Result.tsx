import styled from 'styled-components'
import AddAnother from './AddAnotherResult'
import AddResult from './AddResult'
import ResultCard from './ResultCard'
import axios from 'axios'
import {useEffect, useState} from 'react'
import {useRecoilValue} from 'recoil'
import x from '../../assets/search/report.svg'
import o from '../../assets/search/safe.svg'
import {searchState} from '../atoms'

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
const Safe = styled.div`
    margin-left: 10px;
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
        width: 127px;
        height: 48px;
        border: 0px;
        background: #3cba79;
        border-radius: 30px;
        color: #ffffff;
        font-weight: 600;
        font-size: 16px;
        transition: all 0.3s ease;
        &:hover {
            cursor: pointer;
            background-color: #2c9d62;
        }
    }
`
const TotalNum = styled.p`
    font-weight: 700;
    font-size: 20px;
    letter-spacing: 2px;
    color: #515458;
`

const Word = styled.div`
    margin-top: 10px;
`

const Right = styled.div`
    display: flex;
`

function Result() {
    const [total, setTotal] = useState(0)
    const [myData, setMyData] = useState<any[]>([])
    const search = useRecoilValue(searchState)
    const [click, setClick] = useState<boolean>(false)
    const reportClick = () => {
        setClick(true)
    }
    const safeClick = () => {
        setClick(true)
    }
    useEffect(() => {
        axios
            .get(
                'http://131.186.18.130:3000/showAll?two='.concat(
                    `{"chain_id":"${search.whichChain}","address":"${search.content}"}`,
                ),
            )
            .then(({data}) => {
                console.log(data.result.data)
                setMyData(data.result.data)
                setTotal(data.result.total)
            })
            .catch((error) => console.log(error))
    }, [])

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                position: 'relative',
                marginTop: '28px',
                marginBottom: '28px',
                marginRight: '100px',
            }}
        >
            <TotalNum>TOTAL {total}</TotalNum>
            {total == 0 ? (
                <AddResult />
            ) : (
                <>
                    {myData
                        ? myData.map((one, index) => (
                              <Card key={index}>
                                  <Title>
                                      <Word>
                                          <p>{one.PROJECT_NAME}</p>
                                      </Word>
                                      <Right>
                                          <Report>
                                              <img src={x} />
                                              <button onClick={reportClick}>Report {one.REPORT_CNT}</button>
                                          </Report>
                                          <Safe>
                                              <img src={o} />
                                              <button onClick={safeClick}>Safe {one.SAFE_CNT}</button>
                                          </Safe>
                                      </Right>
                                  </Title>
                                  <Detail>
                                      <p>Chain Address: {search.content}</p>
                                      <p>URL: {one.URL}</p>
                                  </Detail>
                                  <div style={{marginTop: '50px'}}>
                                      <Category>{one.REASON}</Category>
                                  </div>
                              </Card>
                          ))
                        : 'loading...'}
                    <AddAnother />
                </>
            )}
        </div>
    )
}

export default Result
