import styled from 'styled-components'

const Total = styled.div`
    margin-top: 123px;

    p {
        font-weight: 700;
        font-size: 40px;
        line-height: 48px;
        color: #1f284f;
    }
`
function SearchTopSecond() {
    return (
        <Total>
            <p>Search for projects or collections</p>
            <p>you want to validate.</p>
        </Total>
    )
}

export default SearchTopSecond
