import styled from 'styled-components'
import Dots from '../../assets/patterns/Dots.png'
import SecondBottomCircle from '../../assets/patterns/SecondBottomCircle.png'

const Blue = styled.div`
    width: 100%;
    background-color: #1f384f;
    height: 100px;
    position: absolute;
    bottom: 0px;
`

const DotsImg = styled.img`
    position: absolute;
    bottom: 0px;
    left: 600px;
    width: 140px;
`
const SecondBottomCircleImg = styled.img`
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 65px;
`

function SecondBottom() {
    return (
        <Blue>
            <DotsImg src={Dots} />
            <SecondBottomCircleImg src={SecondBottomCircle} />
        </Blue>
    )
}

export default SecondBottom
