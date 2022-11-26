import {ChangeEventHandler, useCallback, useState} from 'react'

function useInput(initialValue = '') {
    const [value, setValue] = useState(initialValue)
    const handler: ChangeEventHandler<HTMLInputElement> = useCallback(({target: {value}}) => {
        setValue(value)
    }, [])
    const deleteValue = () => {
        setValue('')
    }

    return [value, handler, deleteValue] as const
}

export default useInput
