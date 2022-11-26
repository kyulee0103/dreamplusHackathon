import Header from '../Components/Header'
import SearchFirst from '../Components/main/SearchFirst'
import SearchTopSecond from '../Components/search/SearchTopSecond'
import styled from 'styled-components'
import Result from '../Components/search/Result'
import SearchSecond from '../Components/search/SearchSecond'
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
                <SearchSecond />
                <Result />
            </Total>
        </>
    )
}
export default Search
