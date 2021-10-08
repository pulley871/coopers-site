import { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router"
import { DataContext } from "../data/DataProvider"


export const UpdateInventoryQuantity = () => {
    const {fetchSnack, snack} = useContext(DataContext)
    const [quantity, setQuantity] = useState(0)
    const {id} = useParams()
    const history = useHistory()
    useEffect(() => {
        fetchSnack(id)
        setQuantity(snack?.inventory)
    }, [])
    const updateQuantity = () => {
        const data = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                inventory: parseInt(quantity)
            })
        }
        return fetch(`http://localhost:8088/snacks/${snack.id}`, data)
        .then(() => history.push("/inventory"))
    }
    return (<>Inv Update
            <div>
                <h3>{snack?.name} hello</h3>
                <h4>Current Quantity: {snack.inventory}</h4>
                <input type="number" defaultValue={snack.inventory} onChange={(event) =>{
                    setQuantity(event.target.value)
                }}></input>
                <button onClick={()=>updateQuantity()}>Update</button>
            </div>
    </>)
}