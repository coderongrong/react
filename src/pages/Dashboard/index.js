import { useNavigate } from 'react-router-dom'
import Home from '../Home'
import './index.css'

function Dashboard () {
    const navigate = useNavigate()
    const toHome = () => {
        navigate('/')
    }
    return (
        <div className='public'>
           <Home />
        </div>
    )
}

export default Dashboard