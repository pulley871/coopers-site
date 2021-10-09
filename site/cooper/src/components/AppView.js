import { Route } from "react-router"
import { DataProvider } from "./data/DataProvider"
import { DefectiveInventory } from "./defective/UpdateDefectiveInventory"
import { Inventory } from "./inventory/Inventory"
<<<<<<< HEAD
import { InventoryForm } from "./inventory/InventoryForm"
=======
import { UpdateInventoryQuantity } from "./inventory/InventoryUpdateQuantity"
>>>>>>> main
import { Machines } from "./machines/Machines"
import { SelectedMachine } from "./selectedmachine/SelectedMachine"

export const AppView = () =>{

    return (
        <>
            <DataProvider>
                <Route exact path = "/inventory">
                    <Inventory />
                </Route>
<<<<<<< HEAD
                <Route exact path = "/inventoryForm">
                    <InventoryForm />
=======
                <Route exact path = "/inventory/quantityupdate/:id(\d+)">
                    <UpdateInventoryQuantity />
                </Route>
                <Route exact path = "/inventory/defectupdate/:id(\d+)">
                    <DefectiveInventory />
>>>>>>> main
                </Route>
                <Route path = "/machines">
                    <Machines />
                </Route>
                <Route exact path = "/machines/:machineId(\d+)">
                    <SelectedMachine />
                </Route>
            </DataProvider>
        </>
    )
}