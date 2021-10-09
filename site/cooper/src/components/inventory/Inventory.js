import { useContext, useEffect } from "react"
import { DataContext } from "../data/DataProvider"
import { InventoryList } from "./InventoryList"



export const Inventory = () => {
    const {fetchInventory, inventory} = useContext(DataContext)
    useEffect(() => {
        fetchInventory()
    }, [])
    return(
        <>
            <h1>Inventory</h1>
            <InventoryList snacks = {inventory} />
        </>
    )
}