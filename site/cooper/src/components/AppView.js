import { Route } from "react-router"
import { DataProvider } from "./data/DataProvider"
import { Inventory } from "./inventory/Inventory"
import { Machines } from "./machines/Machines"
import { SelectedMachine } from "./selectedmachine/SelectedMachine"

export const AppView = () =>{

    return (
        <>
            <DataProvider>
                <Route exact path = "/inventory">
                    <Inventory />
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