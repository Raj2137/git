import { useSelector, useDispatch } from 'react-redux'

export default function Navbar(){
    const count = useSelector((state) => state.counter.value)
    return(
        <div>
            This is count: {count}
        </div>
    )
};