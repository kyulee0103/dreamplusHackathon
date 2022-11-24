import Here from '../../assets/connect/here.svg'
import NotNow from '../../assets/connect/notnow.svg'
import finished from '../../assets/connect/finished.png'
import ConnectLeft from './ConnectLeft'
import {useState} from 'react'
import Arrow from '../../assets/connect/arrow.png'
import {Link, useNavigate} from 'react-router-dom'
import * as S from './StepStyle'

function Step3() {
    const navigate = useNavigate()
    const onClick = () => {
        navigate('/')
    }
    return (
        <>
            <S.TopDots>
                <S.NotNowImg src={NotNow} />
                <S.NotNowImg src={NotNow} />
                <S.HereImg src={Here} />
            </S.TopDots>
            <S.MainBox>
                <S.ImgBox>
                    <img src={finished} />
                </S.ImgBox>
                <S.Title>Completed!</S.Title>
                <S.DetailBox>
                    <S.Detail>
                        Lorem ipsum dolor sit amet consectetur. Consectetur sodales eu tempor auctor nulla neque odio.
                    </S.Detail>
                </S.DetailBox>
                <S.Btn onClick={onClick}>Back to home</S.Btn>
            </S.MainBox>
        </>
    )
}

export default Step3
