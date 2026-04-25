import React, { useState } from "react";

function Services() {
  const [task, setTask] = useState([]);
  const [input,setInput] = useState('')

  const [sinp,setSinp]=useState('')
  const [servic,setservic]=useState('xyz')

  const handleInpChange= ( )=>{
    if(sinp.trim() != ''){
      setservic(sinp)
      setSinp('')
    }

  }
  const [dInp,sdInp]=useState('')
  const [desc,setDesc]=useState('xyz')



  const addTodo = () => {
    if (input.trim() === '') return;
    setTask([...task, input]);
    setInput('')
  };

  const [notes,setNotes] = useState('')
  const [nInp,sNinp]=useState('')

const [idiff,setiDiff]=useState('')
const [project,setProject] = useState({
  name:'',
  difficulty:'',
  expected_price:'',
  descrip :''
})

const changeDIff = ()=>{
  setDesc({...project, difficulty:{diff}})
}
const handleProj=()=>{
  setProject({...project, name :'frontend' , difficulty : 'med',expected_price:'15$',descrip:'eCommerce store' })
}


  return (
    <div className="w-full py-16 bg-amber-200 text-black text-center flex justify-center items-center flex-col">
      <input type="text" value={input} onChange={(e)=> setInput(e.target.value)} id="" className="border-2" />
      <button className="bg-zinc-900 text-white m-4 p-2 rounded-md" onClick={addTodo}>
        Add Services
      </button>

      <ul>
        {task.map((t, index) => (
          <li key={index}>  {index+1 }. { t}</li>
        ))}
        
      </ul>

      <div>
        <p>Service: {servic}</p>
        <p>Description: {desc}</p>
        <p>Notes: {notes}</p>
      </div>
      <input className="border-2" placeholder="change input" type="text"  value={sinp} onChange={(e)=>setSinp(e.target.value)} />
      <button onClick={handleInpChange}>Change Service</button>

      <input className="border-2" placeholder="change description" type="text"  value={dInp} onChange={(e)=>sdInp(e.target.value)} />
      <button onClick={()=>{if(dInp.trim() !=''){setDesc(dInp)}}}>Change description</button>

      <input className="border-2" placeholder="change notes" type="text" value={nInp} onChange={(e)=>sNinp(e.target.value)} />
        <button onClick={()=>{if(nInp.trim() != ''){setNotes(nInp)
          sNinp('')
        }}}>change notes</button>

        <div>
          <h2 className="underline p-2 font-bold text-2xl">Project Details</h2>
          <p>Project Name: {project.name}</p>
          <p>Project Difficulty: {project.difficulty}</p>
          <p>Project Price: {project.expected_price}</p>
          <p>Project Description: {project.descrip}</p>
        </div>
        <input onChange={(e)=>{setiDiff(e.target.value) }} type="text" value={idiff} placeholder="change difficult level" />
        <button onClick={()=>{setProject({...project, difficulty:idiff})}} >set difficulty</button>
        <button onClick={handleProj} className="border-2 bg-amber-400 font-bold text-sm p-1 rounded-sm text-white">Set Project Details</button>
 
    </div>
  );
}

export default Services;
