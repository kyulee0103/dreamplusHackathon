import styled from 'styled-components'
import FirstLeft from './FirstLeft'
import FirstRight from './FirstRight'
import leftBottom from '../../assets/patterns/leftBottom.png'
import leftTop from '../../assets/patterns/leftTop.png'
import Pattern from '../../assets/patterns/Pattern.png'
import {setAddress} from '../atoms'
import {useRecoilValue} from 'recoil'

const Total = styled.div`
    padding-top: 100px;
    background-color: white;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    overflow: hidden;
`

const Img1 = styled.img`
    position: absolute;
    width: 43px;
    height: 106px;
    left: 0px;
    top: 610px;
`
const Img2 = styled.img`
    position: absolute;
    width: 19px;
    height: 38px;
    left: 0px;
    top: 110px;
`
const Img3 = styled.img`
    position: absolute;
    width: 59.06px;
    height: 159.06px;
    right: 0px;
    top: 496.19px;
`

function First() {
    const myAddress = useRecoilValue(setAddress)
    console.log('myAddress' + myAddress)
    return (
        <Total>
            <Img1 src={leftBottom} />
            <Img2 src={leftTop} />
            <Img3 src={Pattern} />

            <FirstLeft />
            <FirstRight />
        </Total>
    )
}
export default First
