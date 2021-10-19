import { Route } from "react-router"
import { DataProvider } from "./data/DataProvider"
import { DefectiveInventory } from "./defective/UpdateDefectiveInventory"
import { Inventory } from "./inventory/Inventory"
import { InventoryForm } from "./inventory/InventoryForm"
import { UpdateInventoryQuantity } from "./inventory/InventoryUpdateQuantity"
import { AddSnack } from "./machines/AddSnack"
import { MachineForm } from "./machines/MachineForm"
import { Machines } from "./machines/Machines"
import { SingleMachine } from "./machines/SingleMachine"


export const AppView = () =>{

    return (
        <>
            <DataProvider>
                <Route exact path = "/inventory">
                    <Inventory />
                </Route>
                <Route path = "/inventory/addSnacks">
                    <InventoryForm />
                </Route>
                <Route exact path = "/inventory/quantityupdate/:id(\d+)">
                    <UpdateInventoryQuantity />
                </Route>
                <Route exact path = "/inventory/defectupdate/:id(\d+)">
                    <DefectiveInventory />
                </Route>
                <Route exact path = "/machines">
                    <Machines />
                </Route>
                <Route exact path = "/machines/addsnack">
                    <AddSnack />
                </Route>
                <Route path ="/machines/:machineId(\d+)">
                    <SingleMachine />
                </Route>
                    
                <Route  path = "/machines/addMachine">
                    <MachineForm />
                </Route>
                
            </DataProvider>
        </>
    )
}