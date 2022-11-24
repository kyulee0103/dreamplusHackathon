import {ReactNode} from 'react'
import * as S from './StepStyle'

type CardProps = {
    content: {
        title: string
        description: string
        button: ReactNode
        imgSrc: string
        size: string
        moreInfo: string
        where: string
    }
    disabled?: boolean
}

export const Card = ({content, disabled = false}: CardProps) => {
    const {title, description, button, imgSrc, size, moreInfo, where} = content
    return (
        <S.MainBox>
            <S.ImgBox>
                <img style={{width: size}} src={imgSrc} />
            </S.ImgBox>
            <S.Title>{title}</S.Title>
            <S.DetailBox>
                <S.Detail>{description}</S.Detail>
            </S.DetailBox>
            <S.InfoDiv>
                <a href={where} target="_blank">
                    {moreInfo}
                </a>
            </S.InfoDiv>
            {button}
        </S.MainBox>
    )
}
