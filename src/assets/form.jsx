import { useState } from 'react'


function Form(){
   
    //setting state in formData all the form input we need
    
    const [formData,setFormData]=useState({

        firstName:"",
        lastName:"",
        email:"",
        comments:"",
        agreeBtn: true,
        occupation: "",
        fevLanguage:""
    })
    
    //handle change function  handles change event and update 'formData'

    function handleChange(e){
        const{name,value,type,checked}=e.target
        
        let checkType

        if(type==="checkbox"){
            checkType= checked
        }
        else{
            checkType= value
        }

        setFormData(prevFormData=>{
             return{
                ...prevFormData,
                [name]:checkType
             }
        })
    }
    
   

    //to submit the form
    
    function handleSubmit(event){
             event.preventDefault()

            //  submitToApi(formData)-> to submit the data to an Api

            console.log(formData)
    }

      
    return(
        <form onSubmit={handleSubmit}>

            {/* header */}

            <h1>SIGN UP</h1>
             
            {/* first name input */}

            <div className="first__name input__items">
            <label htmlFor="firstName">First Name</label>
            <input 
                   type="text"
                   placeholder='First Name'
                   onChange={handleChange}
                   name='firstName'
                   value={formData.firstName}
                   id='firstName'
            />
            </div>
            
            {/* last name input */}

            <div className="last__name input__items">
            <label htmlFor="lastName">Last Name</label>
            <input 
                   type="text"
                   placeholder='Last Name'
                   onChange={handleChange}
                   name='lastName'
                   value={formData.lastName}
                   id='lastName'
            />
            </div>

            {/* email input */}
            <div className="email input__items">
            <label htmlFor="email">Email</label>
            <input 
                   type="email" 
                   name="email" 
                   placeholder='Email'
                   onChange={handleChange}
                   value={formData.email}
                   id='email'
            />
            </div>
            
            {/* text area for comments */}
            <textarea
            name="comments"
            onChange={handleChange}
            value={formData.comments}
            placeholder='Add Comments'
            />

            {/* field for radio button */}

           <fieldset>
            <legend>What is your occupation?</legend>

            <input 
                  type="radio" 
                  name="occupation" 
                  id="employed"
                  value="employed"
                  onChange={handleChange}
                  checked={formData.occupation==='employed'} 
             />
             <label htmlFor="employed">Employed</label>
             <br />

             <input 
                  type="radio" 
                  name="occupation" 
                  id="unemployed"
                  value="unemployed"
                  onChange={handleChange}
                  checked={formData.occupation==='unemployed'} 
             />
             <label htmlFor="unemployed">Unemployed</label>
             <br />

             <input 
                  type="radio" 
                  name="occupation" 
                  id="student"
                  value="student"
                  onChange={handleChange}
                  checked={formData.occupation==='student'}   
             />
             <label htmlFor="student">Student</label>


           </fieldset>

              {/* select box */}
            
            <label htmlFor="language" className='select__box__label'>What programming language/framework you want to learn?</label>
            <br />
            <select 
                   name="fevLanguage" 
                   id="fevLanguage"
                   value={formData.fevLanguage}
                   onChange={handleChange}
            >
                <option value="choose">Choose</option>
                <option value="javascript">Javascript</option>
                <option value="reactjs">ReactJS</option>
                <option value="nextjs">NextJS</option>
                <option value="typescript">Typescript</option>
                <option value="nodejs">NodeJS</option>
                <option value="expressjs">ExpressJS</option>
            </select>

           {/* checkbox for agreeing terms and conditions */}

            <div className="checkbox">
            <label htmlFor="agreeBtn">Do you agree with terms and conditions?</label>
            <input 
                   type="checkbox"
                   id="agreeBtn"
                   checked={formData.agreeBtn}
                   onChange={handleChange}
                   name="agreeBtn"
                   />
            </div>

            <button className='form__btn'>Submit</button>

        </form>
    )
}

export default Form