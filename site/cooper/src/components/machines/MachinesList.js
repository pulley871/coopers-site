import { useEffect, useState } from "react"
import { useHistory } from "react-router"
import "./Machine.css"
export const MachinesList = ({machine, snacks}) => {
    const [snacksByMachine, setSnacks] = useState([])
    const history = useHistory()
    useEffect(() => {
        
        const foundItem = snacks.filter((snack) => snack.machineId === machine.id)
        setSnacks(foundItem)
    }, [machine])
    return (
        <>
            
                
                
                    <div className="machine-container">
                        <h3>{machine.address}</h3>
                        <h3>{machine.city}</h3>
                        <h3>{machine.zipcode}</h3>
                        <h3>Total Snacks: {snacksByMachine.length}</h3>
                        <button onClick={()=> history.push(`/machines/${machine.id}`)}>View Machine</button>
                    </div>
                
            
        </>
    )
}