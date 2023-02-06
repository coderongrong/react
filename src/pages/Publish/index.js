
import { useNavigate } from 'react-router-dom'
function Publish () {
    const navigate = useNavigate()
    const toHome = () => {
        console.log('xxxxxxxxxxxxxxx')
        navigate('/')
    }
    return (
        <>
            <div>Publish</div>
            <div>Publish...</div>
            <div onClick={toHome}>home</div>
        </>
        
    )
}
export default Publish