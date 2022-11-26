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

function NewPageForm() {
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
                </Box>
            </form>
        </Total>
    )
}

export default NewPageForm
