import {useCallback, useRef} from 'react'

function useGoToDiv() {
    const target = useRef<HTMLDivElement>(null)
    const idRef = useRef<string>('')

    const move = useCallback(() => {
        if (!target.current) {
            if (!idRef.current) {
                return
            }
            document.getElementById(idRef.current)?.scrollIntoView({behavior: 'smooth', block: 'start'})
            return
        }

        target.current?.scrollIntoView({behavior: 'smooth', block: 'start'})
    }, [])

    const setTargetElementId = useCallback((elementId: string) => {
        idRef.current = elementId
    }, [])

    return {
        target,
        setTargetElementId,
        move,
    }
}

export default useGoToDiv
