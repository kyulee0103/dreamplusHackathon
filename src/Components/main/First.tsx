import styled from 'styled-components'
import FirstLeft from './FirstLeft'
import FirstRight from './FirstRight'
import leftBottom from '../../assets/patterns/leftBottom.png'
import leftTop from '../../assets/patterns/leftTop.png'
import Pattern from '../../assets/patterns/Pattern.png'
import {myWallet} from '../atoms'
import {useRecoilValue} from 'recoil'
import {useEffect} from 'react'

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
    // const wallet = useRecoilValue(myWallet)

    // useEffect(()=> {

    // }, [])

    const onClick = () => {
        console.log('wallet')
    }
    return (
        <Total>
            <Img1 src={leftBottom} />
            <Img2 src={leftTop} />
            <Img3 src={Pattern} />
            {/* <button onClick={onClick}>지갑 주소가 연결이 될까욤</button> */}

            <FirstLeft />
            <FirstRight />
        </Total>
    )
}
export default First
