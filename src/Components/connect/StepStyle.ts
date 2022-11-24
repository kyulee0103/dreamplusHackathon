import styled, {keyframes} from 'styled-components'

export const ConnectRight = styled.div`
    width: 54%;
    position: absolute;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`

export const Box = styled.div``
export const MainBox = styled.div`
    border: 1px solid #e6e6e6;
    border-radius: 20px;
    width: 310px;
    padding-bottom: 40px;
`
export const TopDots = styled.div`
    width: 310px;
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
`
export const HereImg = styled.img`
    margin-left: 10px;
    margin-right: 10px;
`
export const NotNowImg = styled.img`
    margin-left: 10px;
    margin-right: 10px;
`

export const boxFade = keyframes`
0% {
	 opacity: 0;
	 width : 30px;
	}
	50% {
	 opacity: 0.5;
	}
	100% {
	 opacity: 1;
	}

`

export const ImgBox = styled.div`
    text-align: center;
    margin-top: 40px;
    margin-bottom: 20px;
    height: 110px;
    img {
        animation: ${boxFade} 0.4s;
        width: 83px;
    }
`
export const Title = styled.p`
    margin-left: 28px;
    font-weight: 600;
    font-size: 20px;
    letter-spacing: 0.005em;
`

export const Detail = styled.span`
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    letter-spacing: 0.005em;
`
export const DetailBox = styled.div`
    margin: 10px 28px 18px 28px;
`
export const Info = styled.a``
export const Btn = styled.button`
    margin-left: 28px;
    width: 262px;
    height: 44px;
    background: #3cba79;
    border-radius: 4px;
    border: 0px;
    font-weight: 600;
    font-size: 18px;
    color: #ffffff;
    letter-spacing: -0.02em;
    transition: all 0.3s ease;
    &:hover {
        cursor: pointer;
        background-color: #1f384f;
    }
`

export const Install = styled.a`
    margin-left: 28px;
    width: 262px;
    height: 44px;
    background: #3cba79;
    border-radius: 4px;
    border: 0px;
    font-weight: 600;
    font-size: 18px;
    color: #ffffff;
    letter-spacing: -0.02em;
    transition: all 0.3s ease;
    &:hover {
        cursor: pointer;
        background-color: #1f384f;
    }
`
export const InfoDiv = styled.div`
    margin-left: 28px;
    margin-bottom: 16px;
    a {
        font-weight: 600;
        font-size: 14px;
        letter-spacing: 0.005em;
        color: #0070f0;
        &:hover {
            cursor: pointer;
        }
    }
`

export const Btn2 = styled.button`
    margin-left: 28px;
    width: 262px;
    height: 44px;
    background: #dbdbdb;
    border-radius: 4px;
    border: 0px;
    font-weight: 600;
    font-size: 18px;
    color: #ffffff;
    letter-spacing: -0.02em;
    transition: all 0.3s ease;
    &:hover {
        cursor: pointer;
        background-color: #9f9f9f;
    }
`
export const Go = styled.div`
    margin-top: 20px;
    margin-right: 28px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    img {
        width: 25px;
        margin-right: 9px;
    }
    span {
        font-weight: 600;
        font-size: 18px;
        color: #3cba79;
    }
`
