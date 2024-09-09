import React, { useState } from 'react'

const App = () => {

  const [formdata,setformdata]=useState({firstname:"",lastname:"",email:"",country:"India",address:"",city:"",state:"",code:"",notification:"",comments:false,Candidates:false,others:false})
 
  function changehandler(event){
    const {name,value,type,checked}=event.target
    setformdata((prevdata)=>({...prevdata,[name]:type==="checkbox"?checked:value}))
  }
 
  function submithandler(event){
      event.preventDefault();
      console.log("form data: ")
      console.log(formdata);
  }

  return (
    <div className='w-full h-screen bg-slate-600 flex justify-center m-0'>
     
     <div className='w-7/12 bg-slate-50 flex justify-center h-screen overflow-auto '>

     <form onSubmit={submithandler}className='w-10/12 bg-slate-50  my-10 h-full m-0'>

       <label  htmlFor='firstname'>First name </label>
       <br/>
       <input value={formdata.firstname} onChange={changehandler} name='firstname' type='text' placeholder='Ritik' id='firstname' className='mt-[7px] w-full border-4 rounded-lg py-2'/>
        <br/>

       <label  htmlFor='lastname'>Last name </label>
       <br/>
       <input value={formdata.lastname} onChange={changehandler} name='lastname' type='text' placeholder='Tomar' id='lastname' className='mt-[7px] w-full border-4 rounded-lg py-2'/>
       <br/>

       <label  htmlFor='email'>Email address</label>
       <br/>
       <input value={formdata.email} onChange={changehandler} name='email' type='email' placeholder='gwao@gmail.com' id='email' className='mt-[7px] w-full border-4 rounded-lg py-2'/> 
       <br/>

       <label  htmlFor='country'>Country</label>
       <br/>
       <select alue={formdata.country} onChange={changehandler} id='country' name='country' className='mt-[7px] w-full border-4 rounded-lg py-2'>
        <option >India</option>
        <option >USA</option>
        <option >Canada</option>
        <option >Mexico</option>
       </select>
       <br/>

       <label  htmlFor='address'>Streel address</label>
       <br/>
       <input value={formdata.address} onChange={changehandler} name='address'  type='text' placeholder='1234 amin sg' id='address' className='mt-[7px] w-full border-4 rounded-lg py-2'/> 
       <br/>

       <label  htmlFor='city'>City</label>
       <br/>
       <input value={formdata.city} onChange={changehandler} name='city' type='text' placeholder='noida' id='city' className='mt-[7px] w-full border-4 rounded-lg py-2'/> 
       <br/>

       <label  htmlFor='state'>State / Province</label>
       <br/>
       <input value={formdata.state} onChange={changehandler} name='state' type='text' placeholder='up' id='state' className='mt-[7px] w-full border-4 rounded-lg py-2'/> 
       <br/>

       <label  htmlFor='number'>ZIP / Postal code</label>
       <br/>
       <input value={formdata.code} onChange={changehandler} name='code' type='text' placeholder='201310' id='number' className='mt-[7px] w-full border-4 rounded-lg py-2'/> 
       <br/>

       <label>By Email</label>
       <br/>
       <br/>
       <input type='checkbox' id='comments' name='comments' onChange={changehandler} checked={formdata.comments}/>
       <label htmlFor='comments' className='ml-[15px]'>Comments</label>
       <br/>
       <input type='checkbox' id='Candidates' name='Candidates' onChange={changehandler} checked={formdata.Candidates}/>
       <label htmlFor='Candidates' className='ml-[15px]'>Candidates</label>
       <br/>
       <input type='checkbox' id='Others' name='Others' onChange={changehandler} checked={formdata.others}/>
       <label htmlFor='Others' className='ml-[15px]'>Others</label>
       <br/>
       <label>Push Notification</label>
       <br/>
       <br/>
       <input value="Everything" onChange={changehandler} type='radio' name='notification' id='Everything'/>
       <label htmlFor='Everything' className='ml-[15px]'>Everything</label>

       <br/>
       <input value="Same as Email" onChange={changehandler} type='radio' name='notification' id='Same as Email'/>
       <label htmlFor='Same as Email' className='ml-[15px]'>Same as Email</label>


       <br/>
       <input value="No Push Notification" onChange={changehandler} type='radio' name='notification' id='No Push Notification'/>
       <label htmlFor='No Push Notification' className='ml-[15px]'>No Push Notification</label>
       <br/>
       <br/>
       <button className='py-1 px-4 bg-blue-500 text-white rounded-lg'>Save</button>
       </form>
     </div>
     
    </div>
  )
}

export default App