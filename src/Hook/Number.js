
import { useState } from 'react'

function App (props) {

    const [num, setNum] = useState(10)

    return [num, setNum]
}

export default App