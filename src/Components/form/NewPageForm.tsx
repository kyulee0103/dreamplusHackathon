import {useEffect, useState} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import {useRecoilValue} from 'recoil'
import styled from 'styled-components'
import {searchState} from '../atoms'
import axios from 'axios'

const Label = styled.label`
    display: block;
    font-weight: 500;
    font-size: 14px;
    color: #515458;
`
const Input = styled.input`
    color: #1f284f;
    font-family: 'poppins', sans-serif;
    font-weight: 400;
    font-size: 16px;
    width: 477px;
    height: 48px;
    padding-left: 12px;
    border: 1px solid #b7bfc7;
    border-radius: 8px;
    margin-top: 4px;
    &::placeholder {
        font-weight: 400;
        font-size: 16px;
        color: #dbdbdb;
    }
`
const Box = styled.div`
    margin-bottom: 18px;
`
const Total = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 477px;
`

const OneLine = styled.div`
    position: relative;
    margin-top: 4px;
`
const Left = styled.div`
    position: absolute;
    z-index: 20;
    width: 120px;
    height: 48px;
    background: #f5f5f5;
    border: 1px solid #b7bfc7;
    display: flex;
    align-items: center;
    padding-left: 15px;
    border-radius: 8px;
    p {
        color: #b7bfc7;
    }
`
const Right = styled.div`
    width: 477px;
    height: 48px;
    display: flex;
    align-items: center;
    background: #f5f5f5;
    border: 1px solid #b7bfc7;
    border-radius: 8px;
    padding-left: 12px;
    p {
        margin-left: 139px;
        color: #b7bfc7;
        font-weight: 400;
        font-size: 16px;
    }
`
const ButtonLine = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
`
const Btn = styled.button`
    font-family: 'poppins', sans-serif;
    padding: 12px 24px;
    margin-bottom: 4px;
    border: 1px solid #b7bfc7;
    border-radius: 10px;
    font-weight: 400;
    font-size: 16px;
    color: #dbdbdb;
    background: #ffffff;
    margin-right: 16px;
    transition: all 0.2s ease;
    &:hover {
        border: 1px solid #1f284f;
        cursor: pointer;
        color: #1f284f;
    }
    &:active {
        border: 1px solid #1f284f;
        cursor: pointer;
        color: #1f284f;
    }
`
const Btn2 = styled.button`
    font-family: 'poppins', sans-serif;
    padding: 12px 24px;
    margin-bottom: 4px;
    border: 1px solid #1f284f;
    border-radius: 10px;
    font-weight: 400;
    font-size: 16px;
    color: #1f284f;
    background: #ffffff;
    margin-right: 16px;
    transition: all 0.2s ease;
`

const Submit = styled.button`
    margin-top: 10px;
    margin-bottom: 68px;
    border-radius: 30px;
    background: #1a7ef2;
    width: 123px;
    height: 48px;
    font-weight: 600;
    font-size: 18px;
    color: white;
    border: 0px;
    transition: all 0.3s ease;
    &:hover {
        cursor: pointer;
        background: #2471c9;
    }
`

const Black = styled.button`
    pointer-events: none;
    margin-top: 10px;
    margin-bottom: 68px;
    border-radius: 30px;
    background: #dbdbdb;
    width: 123px;
    height: 48px;
    font-weight: 600;
    font-size: 18px;
    color: white;
    border: 0px;
`

function NewPageForm() {
    const navigate = useNavigate()
    const search = useRecoilValue(searchState)
    const myMetaMaskWallet = sessionStorage.getItem('myAddress')
    const [chainName, setChainName] = useState('')
    const [clicked1, setClicked1] = useState<boolean>(false)
    const [clicked2, setClicked2] = useState<boolean>(false)
    const [clicked3, setClicked3] = useState<boolean>(false)
    const [clicked4, setClicked4] = useState<boolean>(false)
    const [clicked5, setClicked5] = useState<boolean>(false)
    const [projectName, setProjectName] = useState('') //보내는거
    const [url, setUrl] = useState('')
    const [sendingUrl, setSendingUrl] = useState('') //보내는거
    const [sendingtype, setSendingtype] = useState('') //보내는거
    const [otherType, setOtherType] = useState('')
    const [more, setMore] = useState<boolean>(false)
    const onClick = (e: any) => {
        const list = [setClicked1, setClicked2, setClicked3, setClicked4, setClicked5]
        setClicked1(false)
        setClicked2(false)
        setClicked3(false)
        setClicked4(false)
        setClicked5(false)
        const num = parseInt(e.target.name)
        list[num](true)
        if (num == 4) {
            setMore(true)
        } else {
            setSendingtype(e.target.value)
        }
        console.log(e.target.value)
    }
    const onChangeOtherType = (e: any) => {
        const word = e.target.value
        const front = 'OTHERS('
        const newnewWord = front.concat(word)
        const newnewnewWord = newnewWord.concat(')')
        setOtherType(e.target.value)
        setSendingtype(newnewnewWord)
    }

    const onChangepname = (e: any) => {
        setProjectName(e.target.value)
    }
    const onChangeUrl = (e: any) => {
        const myUrl = e.target.value
        setUrl(e.target.value)
        const after = myUrl.split('/')
        const second = after[0].concat('//')
        const finalUrl = `${second}${after[2]}`
        setSendingUrl(finalUrl)
    }

    const onSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()

        axios
            .get(
                'http://131.186.18.130:3000/makeNewReport?newReport='.concat(
                    `{"project_name":"${projectName}", "data":{"chain_id": "${search.whichChain}", "address":"${search.content}", "url" : "${sendingUrl}"}, "reason" : "${sendingtype}", "reporter":"${myMetaMaskWallet}","opinion": "REPORT"}`,
                ),
            )
            .then(({data}: any) => {
                console.log(data)
                navigate('/success')
            })
            .catch((error: any) => console.log(error))
        // console.log(projectName, sendingUrl, sendingtype, myMetaMaskWallet)
    }

    useEffect(() => {
        if (search.whichChain == 'eip155:1') {
            setChainName('Ethereum')
        } else if (search.whichChain == 'eip155:137') {
            setChainName('Polygon')
        } else if (search.whichChain == 'eip155:43114') {
            setChainName('Avalanche')
        } else if (search.whichChain == 'eip155:8217') {
            setChainName('Klaytn')
        } else if (search.whichChain == 'eip155:10') {
            setChainName('Optimism')
        }
    }, [])
    return (
        <Total>
            <form autoComplete="off" onSubmit={onSubmit}>
                <Box>
                    <Label htmlFor="pname">Project Name*</Label>
                    <Input
                        value={projectName}
                        onChange={onChangepname}
                        name="pname"
                        id="pname"
                        required
                        placeholder="Enter the project name"
                    ></Input>
                </Box>
                <Box>
                    <Label>Chain*</Label>
                    <OneLine>
                        <Left>
                            <p>{chainName}</p>
                        </Left>
                        <Right>
                            <p>{search.content}</p>
                        </Right>
                    </OneLine>
                </Box>
                <Box>
                    <Label>URL</Label>
                    <Input value={url} onChange={onChangeUrl} required placeholder="Paste the URL adress"></Input>
                </Box>
                <Box>
                    <Label>Report type*</Label>
                    <ButtonLine>
                        {clicked1 ? (
                            <Btn2 name="0" value={'PHISHING'} type="button" onClick={onClick}>
                                Phishing
                            </Btn2>
                        ) : (
                            <Btn name="0" value={'PHISHING'} type="button" onClick={onClick}>
                                Phishing
                            </Btn>
                        )}
                        {clicked2 ? (
                            <Btn2 name="1" value={'SCAM'} type="button" onClick={onClick}>
                                Scam
                            </Btn2>
                        ) : (
                            <Btn name="1" value={'SCAM'} type="button" onClick={onClick}>
                                Scam
                            </Btn>
                        )}
                        {clicked3 ? (
                            <Btn2 name="2" value={'USED IN HACKING'} type="button" onClick={onClick}>
                                Used in hacking
                            </Btn2>
                        ) : (
                            <Btn name="2" value={'USED IN HACKING'} type="button" onClick={onClick}>
                                Used in hacking
                            </Btn>
                        )}
                    </ButtonLine>
                    <ButtonLine>
                        {clicked4 ? (
                            <Btn2 name="3" value={'BLACKLIST'} type="button" onClick={onClick}>
                                BlackList
                            </Btn2>
                        ) : (
                            <Btn name="3" value={'BLACKLIST'} type="button" onClick={onClick}>
                                BlackList
                            </Btn>
                        )}
                        {clicked5 ? (
                            <Btn2 name="4" type="button" onClick={onClick}>
                                Others
                            </Btn2>
                        ) : (
                            <Btn name="4" type="button" onClick={onClick}>
                                Others
                            </Btn>
                        )}
                        {more ? (
                            <Input
                                value={otherType}
                                onChange={onChangeOtherType}
                                placeholder="Enter report type"
                            ></Input>
                        ) : null}
                    </ButtonLine>
                </Box>
                {sendingtype ? <Submit>Confirm</Submit> : <Black>Confirm</Black>}
            </form>
        </Total>
    )
}

export default NewPageForm
