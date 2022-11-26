import styled from 'styled-components'
import SecondBottom from './SecondBottom'
import SecondTop from './SecondTop'

const Total = styled.div`
    background: linear-gradient(141.34deg, #f5f0ff 0%, #eff6fe 50.36%, #edfaf5 100%);
    width: 100%;
    height: 78vh;
    position: relative;
    padding-top: 100px;
`

function Second() {
    return (
        <Total id="second">
            <SecondTop />
            <SecondBottom />
        </Total>
    )
}
export default Second
