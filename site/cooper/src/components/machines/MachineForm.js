import React, { useState, useEffect, useReducer } from "react"
import {useHistory} from "react-router-dom"

export const MachineForm = () => {

    const [data, setData] = useState([])
    const history= useHistory()

    const submitForm = (event) => {
        event.preventDefault()

        const machineObject = {
            address: data.address,
            city: data.city,
            zipcode: parseInt(data.zipcode)
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(machineObject)
        }
        
        return fetch("http://localhost:8088/machines", fetchOption)
            .then(() => history.push("/machines"))
        
    }
    

    return (
        <>
             <form className="inventoryForm">
            <div className="inventoryForm--h2"><h1 className="machineForm__title">Add Machine</h1></div>
                
              
            
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Address:</label>
                    <input
                        required= {true} autoFocus={true}
                        type="text"
                        className="form-control-stock"
                        placeholder=""
                        onChange= {
                            (event) => {
                                const copy = {...data}
                                copy.address = event.target.value
                                setData(copy)
                            }

                        } />
                </div>
                <div className="form-group">
                    <label htmlFor="description">City:</label>
                    <input
                        required= {true} autoFocus={true}
                        type="text"
                        className="form-control-inventory"
                        placeholder=""
                        onChange= {
                            (event) => {
                                const copy = {...data}
                                copy.city = event.target.value
                                setData(copy)
                            }

                        } />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Zip Code:</label>
                    <input
                        required= {true} autoFocus={true}
                        type="text"
                        className="form-control-inventory"
                        placeholder=""
                        defaultValue="0"
                        onChange= {
                            (event) => {
                                const copy = {...data}
                                copy.zipcode = event.target.value
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