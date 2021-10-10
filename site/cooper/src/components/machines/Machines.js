
import {useHistory} from "react-router-dom"

export const Machines = () => {
    const history= useHistory()
    return(
        <>
        <h1>Machines</h1>
        <button onClick={()=>history.push("/machines/addMachine")}>Add New Machine</button>
        </>
    )
}