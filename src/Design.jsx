import { Field, Form, Formik } from 'formik'
import React, { useContext, useState } from 'react'
import userform from './Create'
const Design = () => {
    const {data,handledisplay}=useContext(userform)
  return (
    <div>
        <Formik 
        initialValues={
            {
                name:"",
                lname:"",
                mono:""
            }
        }
        onSubmit={handledisplay}
        >
            <Form>
                 Name:-   <Field type="text" name="name" placeholder="Enter Name" /><br /><br />
                 Surname:-   <Field type="text" name="lname" placeholder="Enter Surname" /><br /><br />
                 Mobile No:-   <Field type="text" name="mono" placeholder="Enter Mono" /><br /><br />
                <button type="submit">Submit</button>
            </Form>
        </Formik>
        <table border={1}>
        <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Mono</th>
        </tr>
        {
            data.map((el,i)=>(
                <tr>
                    <td>{el.name}</td>
                    <td>{el.lname}</td>
                    <td>{el.mono}</td>
                </tr>
            ))
        }
       </table>
    </div>
  )
}

export default Design
