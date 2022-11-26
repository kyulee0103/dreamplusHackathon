import Header from '../Components/Header'
import styled from 'styled-components'
import NewPageForm from '../Components/form/NewPageForm'

const Title = styled.div`
    margin-top: 100px;
    margin-left: auto;
    margin-right: auto;
    width: 477px;
    margin-bottom: 28px;
    p {
        font-weight: 700;
        font-size: 40px;
        color: #1f284f;
    }
`

function NewForm() {
    return (
        <>
            <Header />
            <Title>
                <p>Add new report</p>
            </Title>
            <NewPageForm />
        </>
    )
}
export default NewForm
