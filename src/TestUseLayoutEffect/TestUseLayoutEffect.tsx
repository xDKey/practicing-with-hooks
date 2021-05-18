import { useState } from 'react'
import styled from 'styled-components'
import WithUseEffect from './WithUseEffect'
import WithUseLayoutEffect from './WithUseLayoutEffect'

export default function TestUseLayoutEffect() {
  const [showWithUseEffect, setShowWithUseEffect] = useState(false)
  const [showWithUseLayoutEffect, setShowWithUseLayoutEffect] = useState(false)
  const [value, setValue] = useState('')

  return (
    <>
      <h1>React.useLayoutEffect() vs React.useEffect()</h1>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder='Initial value'
      />
      <Wrapper>
        <div>
          <h2>useLayoutEffect</h2>
          <button onClick={() => setShowWithUseLayoutEffect((prev) => !prev)}>
            {showWithUseLayoutEffect ? 'Unmount' : 'Mount'}
          </button>
          {showWithUseLayoutEffect && <WithUseLayoutEffect value={value} />}
        </div>
        <div>
          <h2>useEffect</h2>
          <button onClick={() => setShowWithUseEffect((prev) => !prev)}>
            {showWithUseEffect ? 'Unmount' : 'Mount'}
          </button>
          {showWithUseEffect && <WithUseEffect value={value} />}
        </div>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  div {
    display: flex;
    flex-direction: column;
  }
`
