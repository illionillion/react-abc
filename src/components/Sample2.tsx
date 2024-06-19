import { Dispatch, FC, SetStateAction, useState } from 'react'

const Sample2: FC = () => {
  return <ComponentA />
}

export default Sample2

const ComponentA = () => {

  // stateで管理
  const [state, setState] = useState(false)

  // stateが変わる度に再レンダリングする
  console.log("ComponentA");

  return (
    <>
      <ComponentB setState={setState} />
      <ComponentC state={state} />
    </>
  )
}

const ComponentB: FC<{
  setState: Dispatch<SetStateAction<boolean>>
}> = ({ setState }) => {

  // stateが変わる度に再レンダリングする
  console.log("ComponentB");

  return <><button onClick={() => setState(prev => !prev)}>toggle</button></>
}

const ComponentC: FC<{ state: boolean }> = ({ state }) => {

  // stateが変わる度に再レンダリングする
  console.log("ComponentC");

  return <>state is {state ? 'true' : 'false'}</>
}