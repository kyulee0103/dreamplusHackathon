import Right from '../../assets/RightWeb.png'
import styled from 'styled-components'

const Total = styled.div`
    margin-right: 100px;
    width: 50%;
    height: 650px;
    text-align: end;
    img {
        width: 538.67px;
        height: 588.67px;
    }
`

function FirstRight() {
    return (
        <Total>
            <img src={Right} />
        </Total>
    )
}
export default FirstRight
