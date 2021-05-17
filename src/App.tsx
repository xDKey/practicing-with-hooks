import { Unit } from './StyledComponents'
import TestUseContext from './TestUseContext/TestUseContext'
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
    </>
  )
}
