



import { useLocation } from 'react-router-dom'



function App (props) {


    const state = useLocation()
    console.log(state)

    return (
        <div>div</div>
    )
}

export default App