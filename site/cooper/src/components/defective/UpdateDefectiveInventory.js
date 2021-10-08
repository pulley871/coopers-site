import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router"
import { DataContext } from "../data/DataProvider"


export const DefectiveInventory = () => {
    const {id} = useParams()
    const [foundItem, setItem] = useState({})
    const [quantity, setQuantity] = useState(0)
    const {fetchDefects, defectiveInv, inventory} = useContext(DataContext)
    const updateQuantity = () => {
        const data = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                quantity: parseInt(quantity) + defectiveInv.quantity
            })
        }
        return fetch(`http://localhost:8088/defectiveInventory/${defectiveInv.id}`, data)
        
    }
    const render = () =>{
        fetchDefects(id)
       .then(() => {

           setItem(inventory.find((snack) => snack?.id === defectiveInv?.snackId))
       })
    }
    useEffect(() => {
        render()
    }, [])
    return (<>
        <h3 key={`defect${defectiveInv.id}-name`}>{foundItem?.name}</h3>
        <table>
            <thead>
                <th>Current Defective Total</th>
                <th>Total Loss</th>
                <th>Number to defect</th>
            </thead>
            <tbody>
                <td key={`defect${defectiveInv.id}-table-quantity`}>{defectiveInv?.quantity}</td>
                <td key={`defect${defectiveInv.id}-table-cost`}>${defectiveInv?.quantity * foundItem?.wholesaleprice}</td>
                <td key={`defect${defectiveInv.id}-table-input`}><input type="number" onChange={(event) =>{
                    setQuantity(event.target.value)
                }}></input></td>
            </tbody>
        </table>
        <button onClick={() => {
            updateQuantity().then(()=> render())
        }}>Update</button>
    </>)
}