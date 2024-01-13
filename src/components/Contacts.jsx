import React from 'react'
import axiosInstance from "../helpers/axiosInstance"
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'


const Contacts = () => {

  let [addcontact , setaddcontact] =useState([])

  useEffect(()=>{
      let fetchdata= async ()=>{
      let  {data}= await axiosInstance.get("/posts")
      setaddcontact(data)
      }
      fetchdata()
  },[])


  let handleDelete = (id)=>{
    console.log(id);
    axiosInstance.delete(`/posts/${id}`)
    toast.error(`product removed`)

    window.location.assign("/")
  }

  return (
    <div className='container'>
          {addcontact.map((x)=>{
      
            return (
              <form  className='cards'>
                
                  <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${x.cname}`} alt="" />
                  <h1 className='text-focus-in'>Name : {x.cname}</h1> 
                   <h3 className='text-focus-in'>Phone Number: {x.cphone}</h3> 
                  <h3 className='text-focus-in'>Email : {x.cemail}</h3> 
                  <div className='btn-block'>
                      <button>
                        <Link id='links' to={`/update/${x.id}`}>Update</Link>
                      </button>
                      <button onClick={()=>{ 
                          handleDelete(x.id)
                      }}>Delete</button>
                  </div>
                  
              </form>
            )
          })}
    </div>
  )
}

export default Contacts
