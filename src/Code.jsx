import { Form } from 'formik'
import React from 'react'
import Design from './Design'
import userform from './Create'
import { useState } from 'react'

const Code = () => {
    const [data, setData] = useState([])
    const handledisplay = (values, { resetForm }) => {
        setData([...data, values])
        resetForm()
    }
    return (
        <div>

            <userform.Provider value={{ data, handledisplay }}>
                <Design></Design>
            </userform.Provider>
        </div>
    )
}

export default Code
