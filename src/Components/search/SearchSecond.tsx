import * as React from 'react'
import SelectUnstyled, {SelectUnstyledProps, selectUnstyledClasses} from '@mui/base/SelectUnstyled'
import OptionUnstyled, {optionUnstyledClasses} from '@mui/base/OptionUnstyled'
import PopperUnstyled from '@mui/base/PopperUnstyled'
import {styled as styling} from '@mui/system'
import {useNavigate} from 'react-router-dom'
import {useRecoilState, useSetRecoilState} from 'recoil'
import {searchState} from '../atoms'
import styled from 'styled-components'

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
    font-family: 'poppins', sans-serif;
  font-size: 20px;;
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
    font-family: 'poppins', sans-serif;
    font-size: 18px;
  box-sizing: border-box;
  padding: 8px;
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
  padding: 12px;
  border-radius: 8px;
  cursor: default;

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
    z-index: 1;
`

const Label = styled('label')(
    ({theme}) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 20px;
  display: block;
  margin-bottom: 4px;
  font-weight: 400;
  color: ${theme.palette.mode === 'dark' ? grey[400] : grey[700]};
  `,
)

const CustomSelect = React.forwardRef(function CustomSelect<TValue extends {}>(
    props: SelectUnstyledProps<TValue>,
    ref: React.ForwardedRef<HTMLButtonElement>,
) {
    const slots: SelectUnstyledProps<TValue>['slots'] = {
        root: StyledButton,
        listbox: StyledListbox,
        popper: StyledPopper,
        ...props.slots,
    }

    return <SelectUnstyled {...props} ref={ref} slots={slots} />
}) as <TValue extends {}>(props: SelectUnstyledProps<TValue> & React.RefAttributes<HTMLButtonElement>) => JSX.Element

const Input = styled.input`
    width: 100%;
    font-weight: 400;
    font-size: 20px;
    height: 73px;
    padding-left: 30px;
    margin-left: 10px;
    border: 1px solid #cad1d5;
    border-radius: 10px;
    color: #1f284f;
    letter-spacing: 0.02em;

    font-family: 'poppins', sans-serif;
    &::placeholder {
        color: #1f284f;
        font-weight: 400;
        font-size: 20px;
        letter-spacing: 0.02em;
        font-family: 'poppins', sans-serif;
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

export default function SearchSecond() {
    const [contractAddresss, setContractAddress] = React.useState<string | undefined>('')
    const [chain, setChain] = React.useState<string | undefined>('')
    const [search, setSearch] = useRecoilState(searchState)
    const navigate = useNavigate()
    console.log(search)

    const onChangeContractAddress = (e: any) => {
        setContractAddress(e.target.value)
    }

    const onSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        console.log(contractAddresss, chain)
        setSearch({
            whichChain: chain,
            content: contractAddresss,
        })

        navigate('/search')
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
                    <CustomSelect
                        defaultValue={search.whichChain != '' ? search.whichChain : 'eip155:1'}
                        id="unnamed-select"
                        onChange={onChange}
                    >
                        <StyledOption value={'eip155:1'}>Ethereum</StyledOption>
                        <StyledOption value={'eip155:137'}>Polygon</StyledOption>
                        <StyledOption value={'eip155:8217'}>Klaytn</StyledOption>
                        <StyledOption value={'eip155:43114'}>Avalanche</StyledOption>
                        <StyledOption value={'eip155:10'}>Optimism</StyledOption>
                    </CustomSelect>
                </SelectBox>
                <Input
                    value={contractAddresss}
                    autoComplete="off"
                    onChange={onChangeContractAddress}
                    type="input"
                    name="contractAddresss"
                    id="contractAddresss"
                    required
                    placeholder={search.content != '' ? search.content : 'Paste the address'}
                />
            </Total>
        </>
    )
}
