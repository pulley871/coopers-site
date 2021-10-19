import { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router"
import { DataContext } from "../data/DataProvider"


export const SingleMachine = () =>{
    const {fetchSingleMachineData, machine, fetchInventory, inventory} = useContext(DataContext)
    const {machineId} = useParams()
    const history = useHistory()
    const [totalSalesAmount, setSales] = useState(0)
    const [totalLossAmount, setLoss] = useState(0)
    const [totalProfitAmount, setProfit] = useState(0)
    const totalSales = (mac) =>{
        let sales = 0
        if (mac?.soldSnacksbyMachine?.length > 0){

            for(const item of mac?.soldSnacksbyMachine){
                const foundSnack = mac.snacksByMachine.find((snack)=> snack.snackId === item.snackId)
                sales += item.quantity * foundSnack?.price
            }
        }
        return sales
    }
    const totalLoss = (mac) =>{
        let loss = 0
        if (mac?.defectiveSnacksByMachine?.length > 0){

            for(const item of mac?.defectiveSnacksByMachine){
                const foundSnack = mac.snacksByMachine.find((snack)=> snack.snackId === item.snackId)
                loss += item.quantity * foundSnack?.price
            }
        }
        return loss
    }
    const totalProfit = () =>{
        return totalSalesAmount - totalLossAmount
    }
    const render = () =>{
        fetchSingleMachineData(machineId)
        fetchInventory()
    }
    useEffect(() =>{
        render()
        
    },[])
    useEffect(() =>{
        setSales(totalSales(machine))
        setLoss(totalLoss(machine))
    },[machine])
    useEffect(() =>{
        setProfit(totalProfit())
    },[totalLossAmount])
    return(<>
        <h1>Machine #{machine?.id}</h1>
        <ul>
            <li>Address:{machine.address}</li>
            <li>Total Products:{machine.snacksByMachine?.length}</li>
            <li>Total Sales: ${totalSalesAmount}</li>
            <li>Total Loss: ${totalLossAmount}</li>
            --------------------------------------
            <li>Total Profit: ${totalProfitAmount}</li>
        </ul>
        <button onClick={() =>{ history.push("/machines/addsnack")}}>Add Snack</button>
        <table>
            
            <th>Name</th>
            <th>Brand</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Sold</th>
            <th>$Sold</th>
            <th>Defective</th>
            <th>Profit</th>
            <th>Restock</th>
            <th>Input Sales/Loss</th>
        <tbody>
        {machine.snacksByMachine?.map((snack) => {
            const foundSnack = inventory.find((item)=> item.id === snack.snackId)
            const foundDefect = machine.defectiveSnacksByMachine.find((item)=> item.snackId === snack.snackId)
            const foundSold = machine.soldSnacksbyMachine.find((item)=> item.snackId === snack.snackId)
            return <tr><td>{foundSnack?.name}</td><td>{foundSnack?.brand}</td><td>{snack.quantity}</td><td>{snack.price}</td><td>{foundSold.quantity}</td><td>{foundSold.quantity * snack?.price}</td><td>{foundDefect.quantity}</td><td>{(foundSold.quantity * snack.price)-(foundDefect.quantity * snack.price)}</td><td><button>Restock</button></td><td><button>+ / -</button><button>Delete Snack</button></td></tr>
        })}
        
        
        </tbody>
        </table>
    </>)
}