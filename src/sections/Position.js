
import React, { useState } from 'react';
import { Checkbox } from 'primereact/checkbox';

const Position = () => {
    
    
    const [positions, setPositions] = useState([]);
    

    


    const onPositionChange = (e) => {
        let selectedPositions = [...positions];

        if (e.checked)
            selectedPositions.push(e.value);
        else
            selectedPositions.splice(selectedPositions.indexOf(e.value), 1);

        setPositions(selectedPositions);
    }

    return (
        <div>
            <div className="card">
                
                <h5>Preferred Position (Check all that apply)</h5>
                <div className="p-field-checkbox">
                    <Checkbox inputId="position1" name="position" value="Baker" onChange={onPositionChange} checked={positions.indexOf('Baker') !== -1} />
                    <label htmlFor="position1">Baker</label>
                </div>
                <div className="p-field-checkbox">
                    <Checkbox inputId="position2" name="position" value="Cook/Kitchen Prep" onChange={onPositionChange} checked={positions.indexOf('Cook/Kitchen Prep') !== -1} />
                    <label htmlFor="position2">Cook/Kitchen Prep</label>
                </div>
                <div className="p-field-checkbox">
                    <Checkbox inputId="position3" name="position" value="Cashier" onChange={onPositionChange} checked={positions.indexOf('Cashier') !== -1} />
                    <label htmlFor="position3">Cashier</label>
                </div>
                <div className="p-field-checkbox">
                    <Checkbox inputId="position4" name="position" value="Driver" onChange={onPositionChange} checked={positions.indexOf('Driver') !== -1} />
                    <label htmlFor="position4">Driver</label>
                </div>
                

               
            </div>
        </div>
    )
}

export default Position;