import React, { useEffect, useState } from 'react'
import axiosInstance from '../helpers/axiosInstance'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'


const Update = () => {

    let {id} = useParams()
    let navigate = useNavigate() ; 
    let [cname , setCname] = useState("")
    let [cphone , setcphone] = useState("")
    let [cemail , setcemail] = useState("")


    useEffect(()=>{
            let fetchdata = async()=>{
                    let {data} = await axiosInstance.get(`/posts/${id}`)
                    setCname(data.cname)
                    setcphone(data.cphone)
                    setcemail(data.cemail)
            }
            fetchdata()
    },[])


    let updatecontact = (e)=>{
        e.preventDefault()
        let payload ={
            cname ,cphone,cemail
        }
        axiosInstance.put(`/posts/${id}` , payload)
        toast.info(`${cname} updated `)
        navigate("/")

    }


 

  return (
    <div className='form-block'>
       <form  action="" style={{textAlign:"center"}}>
            <fieldset>
                    <legend>UPDATE CONTACT</legend>
                    <br /> <br />
                    <label htmlFor=""> Name : </label>
                    <input value={cname} type="text" onChange={(e)=>{
                            setCname(e.target.value)
                    }} /> <br /> <br />
                    <label htmlFor="">Phone Number : </label>
                    <input value={cphone} type="text" onChange={(e)=>{
                            setcphone(e.target.value)
                    }} /> <br /> <br />
                    <label htmlFor="">Email : </label>
                    <input value={cemail} type="text" onChange={(e)=>{
                            setcemail(e.target.value)
                    }}   /> <br /> <br />
                    <button onClick={updatecontact}>Update  </button>
                    <br /><br />
            </fieldset>
       </form>
    </div>
  )
}

export default Update
