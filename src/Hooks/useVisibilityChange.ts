import {useEffect, useState} from 'react'

export function useVisibilityChange() {
    const [isVisible, setVisible] = useState(document.visibilityState === 'visible')
    const listener = () => {
        setVisible(document.visibilityState === 'visible')
    }
    useEffect(() => {
        document.addEventListener('visibilitychange', listener)

        return () => {
            document.removeEventListener('visibilitychange', listener)
        }
    }, [])

    return isVisible
}
