import {useState} from 'react'
import styled from 'styled-components'

const Label = styled.label`
    display: block;
    font-weight: 500;
    font-size: 14px;
    color: #515458;
`
const Input = styled.input`
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
`

function NewPageForm() {
    const [clicked1, setClicked1] = useState<boolean>(false)
    const [clicked2, setClicked2] = useState<boolean>(false)
    const [clicked3, setClicked3] = useState<boolean>(false)
    const [clicked4, setClicked4] = useState<boolean>(false)
    const [clicked5, setClicked5] = useState<boolean>(false)
    const [more, setMore] = useState<boolean>(false)
    const onClick = (e: any) => {
        const list = [setClicked1, setClicked2, setClicked3, setClicked4, setClicked5]
        setClicked1(false)
        setClicked2(false)
        setClicked3(false)
        setClicked4(false)
        setClicked5(false)
        const num = parseInt(e.target.name)
        if (num == 4) {
            setMore(true)
        }
        list[num](true)
        console.log(e.target.value)
    }
    return (
        <Total>
            <form>
                <Box>
                    <Label htmlFor="pname">Project Name*</Label>
                    <Input name="pname" id="pname" required placeholder="Enter the project name"></Input>
                </Box>
                <Box>
                    <Label>Chain*</Label>
                    <OneLine>
                        <Left>
                            <p>Ethereum</p>
                        </Left>
                        <Right>
                            <p>0x8sdbhf632bhfd9snf1jkf</p>
                        </Right>
                    </OneLine>
                </Box>
                <Box>
                    <Label>URL</Label>
                    <Input required placeholder="Paste the URL adress"></Input>
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
                        {more ? <Input placeholder="Enter report type"></Input> : null}
                    </ButtonLine>
                </Box>
                <Submit>Confirm</Submit>
            </form>
        </Total>
    )
}

export default NewPageForm
