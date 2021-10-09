import { useContext, useEffect } from "react"
import { DataContext } from "../data/DataProvider"
import { InventoryList } from "./InventoryList"
import {useHistory} from "react-router-dom"


export const Inventory = () => {
    const history= useHistory()
    const {fetchInventory, inventory} = useContext(DataContext)
    useEffect(() => {
        fetchInventory()
    }, [])
    return(
        <>
            <h1>Inventory</h1>
            <button onClick={()=>history.push("/inventory/addSnacks")}>Add Product</button>
            <InventoryList snacks = {inventory} />
        </>
    )
}