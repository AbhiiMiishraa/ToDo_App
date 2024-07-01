"use client"

import React,{useState} from 'react'

const page = () => {


  const [title,settitle]=useState("")
  const [desc,setdesc]=useState("")

  const [task,setTask]=useState([]);


  const submitHandler=(e)=>{ 
        e.preventDefault()

        setTask([...task,{title,desc}])

        settitle("")
        setdesc("")
        console.log(task)
  }

const deleteHandler=(i)=>{
  let copy=[...task]
  copy.splice(i,2)
  setTask(copy);
}






let renderTask=<h2>No Task Available</h2>

if(task.length>0)
  {
    renderTask=task.map((t,i)=>{
    return (
      <li key={i} className='flex items-center justify-between '>
        <div className='flex justify-between mb-5 w-2/3 ' >
       <h5 className='text-xl font-semibold'>
        {t.title}
      </h5>
      <h6 className='text-xl font-semibold'>{t.desc}</h6>
    </div>

    <button
    onClick={()=>{
      {deleteHandler(i)}
    }} 
     className='m-8 px-4 py-2 bg-red-500 text-white text-2xl font-bold'
       
     >Delete</button>
      </li>
    )
})
  }



  return (
    <>
      <h1 className='bg-blue-500 p-4 text-center font-bold text-xl' >My Todo in Next.js</h1>

      <form onSubmit={submitHandler}>
        <input  type='text'
        placeholder='what You Want...Title'
        value={title}
        onChange={(e)=>{

          settitle(e.target.value)

        }}   
        className='border-4 m-8 px-4 py-2 border-zinc-800 text-2xl '
        ></input>

        <input  type='text'
        placeholder='Write Description...'
         value={desc}
        onChange={(e)=>{

          setdesc(e.target.value)

        }}   
        className='border-4 m-8 px-4 py-2 border-zinc-800 text-2xl '
        ></input>

         <button  className='m-8 px-4 py-2 bg-black text-white text-2xl font-bold'>Add</button>
      </form>

      <hr/>

      <div className='p-8 bg-slate-200' >
        <ul>
          {renderTask}
        </ul>
      </div>

     
    </>
  )
}

export default page