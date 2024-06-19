import { Dispatch, FC, MutableRefObject, SetStateAction, useRef, useState } from 'react'

const Sample1: FC = () => {
    return <ComponentA />
}

export default Sample1

const ComponentA = () => {

    // refの中にsetStateの関数を渡す
    const stateRef = useRef<Dispatch<SetStateAction<boolean>>>(() => void 0)

    // ステートが変わっても再レンダリングが走らない
    console.log("ComponentA");

    return (
        <>
            <ComponentB stateRef={stateRef} />
            <ComponentC stateRef={stateRef} />
        </>
    )
}

const ComponentB: FC<{ stateRef: MutableRefObject<Dispatch<SetStateAction<boolean>>> }> = ({ stateRef }) => {
    
    // ステートが変わっても再レンダリングが走らない
    console.log("ComponentB");

    return <><button onClick={() => stateRef.current(prev => !prev)}>toggle</button></>
}

const ComponentC: FC<{ stateRef: MutableRefObject<Dispatch<SetStateAction<boolean>>> }> = ({ stateRef }) => {

    const [state, setState] = useState(false)

    stateRef.current = setState

    // Cのみ再レンダリングが走る
    console.log("ComponentC");

    return <>state is {state ? 'true' : 'false'}</>
}