import Header from '../Components/Header'
import SearchFirst from '../Components/main/SearchFirst'
import SearchTopSecond from '../Components/search/SearchTopSecond'
import styled from 'styled-components'
import Result from '../Components/search/Result'
const Total = styled.div`
    margin-left: 100px;
    margin-right: 100px;
`

function Search() {
    return (
        <>
            <Header />
            <Total>
                <SearchTopSecond />
                <SearchFirst />
                <Result />
            </Total>
        </>
    )
}
export default Search
