import styled from 'styled-components'
import * as React from 'react'
import SelectUnstyled, {SelectUnstyledProps, selectUnstyledClasses, SelectOption} from '@mui/base/SelectUnstyled'
import OptionUnstyled, {optionUnstyledClasses} from '@mui/base/OptionUnstyled'
import PopperUnstyled from '@mui/base/PopperUnstyled'
import {styled as styling} from '@mui/system'
import useInput from '../../Hooks/useInput'
import {useNavigate} from 'react-router-dom'

const blue = {
    100: '#DAECFF',
    200: '#99CCF3',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
}

const grey = {
    50: '#f6f8fa',
    100: '#eaeef2',
    200: '#d0d7de',
    300: '#afb8c1',
    400: '#8c959f',
    500: '#6e7781',
    600: '#57606a',
    700: '#424a53',
    800: '#32383f',
    900: '#24292f',
}

const StyledButton = styling('button')(
    ({theme}) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 20px;
  box-sizing: border-box;
  height: 77px;
  min-width: 204px;
  padding: 24px;
  border-radius: 12px;
  text-align: left;
  line-height: 1.5;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;
  z-index : 100

  &:hover {
    background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
    border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
  }

  &.${selectUnstyledClasses.focusVisible} {
    border-color: ${blue[400]};
    outline: 3px solid ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
  }

  &.${selectUnstyledClasses.expanded} {
    &::after {
      content: '▴';
    }
  }

  &::after {
    content: '▾';
    float: right;
  }
  `,
)

const StyledListbox = styling('ul')(
    ({theme}) => `
    z-index : 100;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 6px;
  margin: 12px 0;
  min-width: 204px;
  border-radius: 12px;
  overflow: auto;
  outline: 0px;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  box-shadow: 0px 4px 30px ${theme.palette.mode === 'dark' ? grey[900] : grey[200]};
  `,
)

const StyledOption = styling(OptionUnstyled)(
    ({theme}) => `
  list-style: none;
  padding: 8px;
  border-radius: 8px;
  cursor: default;
  z-index : 500;

  &:last-of-type {
    border-bottom: none;
  }

  &.${optionUnstyledClasses.selected} {
    background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
    color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
  }

  &.${optionUnstyledClasses.highlighted} {
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }

  &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
    background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
    color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
  }

  &.${optionUnstyledClasses.disabled} {
    color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
  }

  &:hover:not(.${optionUnstyledClasses.disabled}) {
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }
  `,
)

const StyledPopper = styling(PopperUnstyled)`
z-index : 500;
`

function CustomSelect(props: SelectUnstyledProps<string>) {
    const slots: SelectUnstyledProps<string>['slots'] = {
        root: StyledButton,
        listbox: StyledListbox,
        popper: StyledPopper,
        ...props.slots,
    }

    return <SelectUnstyled {...props} slots={slots} />
}

function renderValue(option: SelectOption<string> | null) {
    if (option == null) {
        return <span>Select chain</span>
    }

    return <span>{option.label}</span>
}

const Input = styled.input`
    width: 100%;
    font-weight: 400;
    font-size: 20px;
    height: 73px;
    padding-left: 30px;
    margin-left: 10px;
    border: 1px solid #cad1d5;
    border-radius: 10px;
    &::placeholder {
        color: #b7c5cc;
        font-weight: 400;
        font-size: 20px;
        letter-spacing: 0.05em;
    }
`

const SelectBox = styled.div`
    display: inline;
`

const Total = styled.form`
    margin-top: 50px;
    display: flex;
    /* margin-right: 105px; */
`

function SearchFirst() {
    const [contractAddresss, setContractAddress] = React.useState<string | undefined>('')
    const [chain, setChain] = React.useState<string | undefined>('')
    const navigate = useNavigate()

    const onChangeContractAddress = (e: any) => {
        setContractAddress(e.target.value)
    }
    // console.log(contractAddresss)

    const onSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        console.log(contractAddresss, chain)
        navigate('/search', {
            state: {
                chain,
                contractAddresss,
            },
        })
        setContractAddress('')
    }

    const onChange = (e: any, newValue: any) => {
        setChain(newValue)
        console.log(newValue)
    }
    return (
        <>
            <Total onSubmit={onSubmit}>
                <SelectBox>
                    <CustomSelect id="chain" renderValue={renderValue} onChange={onChange}>
                        <StyledOption value={'eip155:1'}>Ethereum</StyledOption>
                        <StyledOption value={'eip155:137'}>Polygon</StyledOption>
                        <StyledOption value={'eip155:43114'}>Avalanche</StyledOption>
                    </CustomSelect>
                </SelectBox>
                <Input
                    value={contractAddresss}
                    onChange={onChangeContractAddress}
                    type="input"
                    name="contractAddresss"
                    id="contractAddresss"
                    required
                    placeholder="0x8sdbhf632bhfd9snf1jkf"
                />
            </Total>
        </>
    )
}

export default SearchFirst

//  const onSubmit = useCallback(
//   (e: React.SyntheticEvent) => {
//     e.preventDefault();
//     navigate('/loading', {
//       state: {
//         myData: {
//           userAddr: myAddress,
//           name: name,
//           univ: school,
//           phonestring: phone,
//           studentstring: studentNum,
//         },
//       },
//       replace: true,
//     });

//     console.log(school, name, studentNum, phone, myAddress);
//   },
//   [school, name, studentNum, phone, myAddress]
// );
