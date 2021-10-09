import { useHistory } from "react-router"
import "./Inventory.css"

export const InventoryList = ({snacks}) => {
    const history = useHistory()
    return (
        <section>
            {snacks.map(snack => {
                return (
                    <div key={`snack${snack.id}-container`} className="snack-container">
                        <h3 key={`snack${snack.id}-title`} className="snack-name">{snack.name}</h3>
                        <ul key={`snack${snack.id}-list`} className="snack-info">
                            <li key={`snack${snack.id}-list_brand`} className="snack-info_brand">Brand: {snack.brand}</li>
                            <li key={`snack${snack.id}-list_quantity`} className="snack-info_quantity">Quantity: {snack.inventory}</li>
                            <li key={`snack${snack.id}-list_cost`} className="snack-info_cost">WholeSale Cost: {snack.wholesaleprice}</li>
                        </ul>
                        <h4>Total: ${snack.wholesaleprice * snack.inventory}</h4>
                        <button onClick={() => history.push(`inventory/quantityupdate/${snack?.id}`)}>Update Quantity</button>
                        <button onClick={() => history.push(`inventory/defectupdate/${snack?.id}`)}>Defect Items</button>
                    </div>
                )
            })}
        </section>
    )
}