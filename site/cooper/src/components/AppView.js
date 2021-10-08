import { Route } from "react-router"
import { DataProvider } from "./data/DataProvider"
import { DefectiveInventory } from "./defective/UpdateDefectiveInventory"
import { Inventory } from "./inventory/Inventory"
import { UpdateInventoryQuantity } from "./inventory/InventoryUpdateQuantity"
import { Machines } from "./machines/Machines"
import { SelectedMachine } from "./selectedmachine/SelectedMachine"

export const AppView = () =>{

    return (
        <>
            <DataProvider>
                <Route exact path = "/inventory">
                    <Inventory />
                </Route>
                <Route exact path = "/inventory/quantityupdate/:id(\d+)">
                    <UpdateInventoryQuantity />
                </Route>
                <Route exact path = "/inventory/defectupdate/:id(\d+)">
                    <DefectiveInventory />
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