import React, {useState} from 'react'
import Button from '@material-ui/core/Button'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'



const Form = () => {
    const [sortBy, _setSortBy] = useState('sort-id')
    const [employeeName, _setEmployeeName] = useState('')
    const [showEmployees, _setShowEmployees] = useState(false)

    const renderEmployees = () => {
        _setShowEmployees(true)
    }

    return (
        <div>
            <form>
                <label for="list-name">List Employees by Name:  </label>
                <input type="text" name="list-name" id="list-name" value={employeeName}
                
                onInput={e => _setEmployeeName(e.target.value)}/>
                <br />
                <br />
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    onChange={e => _setSortBy(e.target.value)}
                >
                    <MenuItem value="sort-id">Id</MenuItem>
                    <MenuItem value="sort-firstname">First Name</MenuItem>
                    <MenuItem value="sort-lastname">Last Name</MenuItem>
                </Select>

                <Button variant="contained" color="primary" onClick={renderEmployees}>
                    show employees
                </Button>
            </form>
            <p>{showEmployees ? 'true' : ''}</p>
                
        </div>
    )    

}

export default Form