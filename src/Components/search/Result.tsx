import styled from 'styled-components'
import AddAnother from './AddAnotherResult'
import AddResult from './AddResult'
import ResultCard from './ResultCard'

const TotalNum = styled.p`
    font-weight: 700;
    font-size: 20px;
    letter-spacing: 2px;
    color: #515458;
`

function Result() {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                position: 'relative',
                marginTop: '28px',
                marginBottom: '28px',
                marginRight: '100px',
            }}
        >
            <TotalNum>TOTAL 1</TotalNum>
            <ResultCard />
            <AddResult />
            <AddAnother />
        </div>
    )
}

export default Result
