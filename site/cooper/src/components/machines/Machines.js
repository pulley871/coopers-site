import { DataContext } from "../data/DataProvider"
import { useContext, useEffect, useState } from "react"
import {useHistory} from "react-router-dom"
import { MachinesList } from "./MachinesList"

export const Machines = () => {
    const history= useHistory()
    const [searchTerm, setSearchTerm] = useState("")
    const [foundMachines, setFoundMachines] = useState([])
    const {fetchMachines,fetchSnacksByMachine,snacksByMachine ,machines} = useContext(DataContext)
    useEffect(() => {
        fetchSnacksByMachine()
        .then(() =>fetchMachines())
        
    }, [])
    useEffect(() => {
        search()
    },[searchTerm])
    const search = () => {
        
        const searchedItems = machines.filter((machine) => machine.address.toLowerCase().includes(searchTerm.toLowerCase()))
        setFoundMachines(searchedItems)
    }
    return(
        <>
        <h1>Machines</h1>
        <button onClick={()=>history.push("/machines/addMachine")}>Add New Machine</button>
        <input type="text" onChange={((event) => {
            setSearchTerm(event.target.value)
        })} placeholder="search"></input>
        {searchTerm === "" ? machines.map((machine) => {
            return(<MachinesList machine = {machine} snacks ={snacksByMachine}/>)
        }):
        foundMachines.map((machine) =>{
            return(<MachinesList machine = {machine} snacks ={snacksByMachine}/>)
        })
        }
        
        
        </>
    )
}