import { Unit } from './StyledComponents'
import TestUseCallback from './TestUseCallback/TestUseCallback'
import TestUseContext from './TestUseContext/TestUseContext'
import TestUseImperativeHandle from './TestUseImperativeHandle/TestUseImperativeHandle'
import TestUseReducer from './TestUseReducer/TestUseReducer'

export default function App() {
  return (
    <>
      <Unit>
        <TestUseContext />
      </Unit>
      <Unit>
        <TestUseReducer />
      </Unit>
      <Unit>
        <TestUseCallback />
      </Unit>
      <Unit>
        <TestUseImperativeHandle />
      </Unit>
    </>
  )
}
