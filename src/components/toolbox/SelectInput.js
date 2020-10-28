import React from 'react'
import { Label } from 'reactstrap'

function SelectInput({ name, label, onChange, defaultOption, error, value, options
}) {
    return (
        <div className="form-group">
            <label htmlfor="name">{label} </label>
            <select name={name} onChange={onChange} value={value} className="form-control">
                <option value="">{defaultOption}</option>
                {
                    options.map(option=>{
                        return(

                        <option value={option.value} key={option.value}>{option.text}</option>
                            )
                    })
                }
            </select>
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    )
}

export default SelectInput
