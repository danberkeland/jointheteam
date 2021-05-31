
import React, { useState } from 'react';
import { Checkbox } from 'primereact/checkbox';

const Location = () => {
    
    
    const [cities, setCities] = useState([]);
    

    


    const onCityChange = (e) => {
        let selectedCities = [...cities];

        if (e.checked)
            selectedCities.push(e.value);
        else
            selectedCities.splice(selectedCities.indexOf(e.value), 1);

        setCities(selectedCities);
    }

    return (
        <div>
            <div className="card">
                
                <h5>Preferred Work Location (You can choose both if you want)</h5>
                <div className="p-field-checkbox">
                    <Checkbox inputId="city1" name="city" value="San Luis Obispo" onChange={onCityChange} checked={cities.indexOf('San Luis Obispo') !== -1} />
                    <label htmlFor="city1">San Luis Obispo</label>
                </div>
                <div className="p-field-checkbox">
                    <Checkbox inputId="city2" name="city" value="Atascadero" onChange={onCityChange} checked={cities.indexOf('Atascadero') !== -1} />
                    <label htmlFor="city2">Atascadero</label>
                </div>
                

               
            </div>
        </div>
    )
}

export default Location;