import React, { useState } from 'react'
import axiosInstance from '../helpers/axiosInstance'
import { Navigate, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


const AddContact = () => {

    let navigate = useNavigate() ; 
    let [cname , setCname] = useState("")
    let [cphone , setcphone] = useState("")
    let [cemail , setcemail] = useState("")

    let addcontact = (e)=>{
        e.preventDefault()
        let payload = {
            cphone,cname , cemail
        }
        axiosInstance.post("/posts" , payload)
        toast.success(`${cname} added successfully!`)
        navigate("/")
        
    }

  return (
    <div className='form-block'>
       <form  action="" style={{textAlign:"center"}}>
            <fieldset>
                
                    {/* <legend >ADD CONTACT</legend> */}
                    <h1>ADD CONTACT</h1>
                    <label htmlFor=""> Name : </label>
                    <input type="text" onChange={(e)=>{
                            setCname(e.target.value)
                    }} /> <br /> <br />
                    <label htmlFor="">Phone Number : </label>
                    <input type="number" onChange={(e)=>{
                            setcphone(e.target.value)
                    }} /> <br /> <br />
                    <label htmlFor="">Email id : </label>
                    <input type="text" onChange={(e)=>{
                            setcemail(e.target.value)
                    }}   /> <br /> <br />
                    <button onClick={addcontact}>Create</button>
                    <br /><br />
            </fieldset>
       </form>
    </div>
  )
}

export default AddContact
