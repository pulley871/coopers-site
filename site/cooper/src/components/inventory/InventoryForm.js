import React, { useState, useEffect, useReducer } from "react"
import {useHistory} from "react-router-dom"

export const InventoryForm = () => {

    const [data, setData] = useState([])
    const history= useHistory()

    const submitForm = (event) => {
        event.preventDefault()

        const inventoryObject = {
            name: data.name,
            brand: data.brand,
            inventory: parseInt(data.inventory),
            wholesaleprice: parseFloat(data.price)
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(inventoryObject)
        }
        
        return fetch("http://localhost:8088/snacks", fetchOption)
            .then((res) => res.json())
            .then(data => defectiveInventory(data.id))
            .then(() => history.push("/inventory"))
        
    }
    const defectiveInventory = (id) => {
        

        const defectiveObject = {
            snackId: id,
            inventory: 0,
            
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(defectiveObject)
        }
        
        return fetch("http://localhost:8088/defectiveInventory", fetchOption)
            
        
    }

    return (
        <>
             <form className="inventoryForm">
            <div className="inventoryForm--h2"><h1 className="inventoryForm__title">Add Inventory</h1></div>
                <div><img src="#"  className="inventoryForm--image"/></div>
              
            
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Name Of Candy:</label>
                    <input
                        required= {true} autoFocus={true}
                        type="text"
                        className="form-control-stock"
                        placeholder=""
                        onChange= {
                            (event) => {
                                const copy = {...data}
                                copy.name = event.target.value
                                setData(copy)
                            }

                        } />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Brand:</label>
                    <input
                        required= {true} autoFocus={true}
                        type="text"
                        className="form-control-inventory"
                        placeholder=""
                        onChange= {
                            (event) => {
                                const copy = {...data}
                                copy.brand = event.target.value
                                setData(copy)
                            }

                        } />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Quantity:</label>
                    <input
                        required= {true} autoFocus={true}
                        type="text"
                        className="form-control-inventory"
                        placeholder=""
                        defaultValue="0"
                        onChange= {
                            (event) => {
                                const copy = {...data}
                                copy.inventory = event.target.value
                                setData(copy)
                            }

                        } />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Cost(per candy):</label>
                    <input
                        required= {true} autoFocus={true}
                        type="text"
                        className="form-control-inventory"
                        placeholder=""
                        defaultValue="0"
                        onChange= {
                            (event) => {
                                const copy = {...data}
                                copy.price = event.target.value
                                setData(copy)
                            }

                        } />
                </div>
            </fieldset>
            <button className="btn btn-primary inventoryForm--button" onClick={submitForm}>
                Submit Form
            </button>
        </form>

        
        
        
        </>
    )
}