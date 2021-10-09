import { createContext, useState } from "react";

export const DataContext = createContext()

export const DataProvider = (props) => {
    const [machines, setMachines] = useState([])
    const [inventory, setInventory] = useState([])
    const [snack, setSnack] = useState({})
    const [snacksByMachine, setSBM] = useState([])
    const [defectiveInv, setdi] = useState([])
    const [soldSnacks, setSoldSnacks] = useState([])
    const [defectiveSnacksByMachine, setDefSnackByM] = useState([])
    const fetchMachines = () => {
        return fetch("http://localhost:8088/machines")
            .then(res => res.json())
            .then((data) => {
                setMachines(data)
            })
    }
    const fetchInventory = () => {
        return fetch("http://localhost:8088/snacks")
            .then(res => res.json())
            .then((data) => {
                setInventory(data)
            })
    }
    const fetchSnack = (id) => {
        return fetch(`http://localhost:8088/snacks/${id}`)
            .then(res => res.json())
            .then((data) => {
                setSnack(data)
            })
    }
    const fetchSnacksByMachine = (id) => {
        return fetch(`http://localhost:8088/snacksByMachine?machineId=${id}`)
            .then(res => res.json())
            .then((data) => {
                setSBM(data)
            })
    }
    const fetchDefects = (id) => {
        return fetch(`http://localhost:8088/defectiveInventory/${id}`)
            .then(res => res.json())
            .then((data) => {
                setdi(data)
            })
    }
    const fetchSoldSnacks = (id) => {
        return fetch(`http://localhost:8088/soldSnacksbyMachine?snacksByMachineId=${id}`)
            .then(res => res.json())
            .then((data) => {
                setSoldSnacks(data)
            })
    }
    const fetchDefectiveSnacksByMachine = (id) => {
        return fetch(`http://localhost:8088/soldSnacksbyMachine?snacksByMachineId=${id}`)
            .then(res => res.json())
            .then((data) => {
                setDefSnackByM(data)
            })
    }
    return(
        <DataContext.Provider value={{
            fetchSnack,fetchInventory, fetchMachines, fetchDefects, fetchDefectiveSnacksByMachine, fetchSnacksByMachine, fetchSoldSnacks, machines, inventory, soldSnacks, snacksByMachine, defectiveInv, defectiveSnacksByMachine, snack
        }}>
            {props.children}
        </DataContext.Provider>
    )
}