import React,{useState} from 'react';
import"../src/"

function Form() {
    const [state, setState] = useState({
      firstName: "",
      lastName: "",
      email: "",
      tel:"",
      position:"",
      resume:"",
      react:true,
      angular:true,
      salary:"",
      joining:"",
      relocation:"",
      lastemployer:"",
      address:"",
      mode: "office"
      
    });

    const[reqfirstname,setreqfirstname]=useState("")
    const[reqlastname,setreqlastname]=useState("")
    const[reqemail,setreqemail]=useState("")
    const[reqtel,setreqtel]=useState("")
    const[reqposition,setreqposition]=useState("")
    const[reqresume,setreqresume]=useState("")
    const[reqsalary,setreqsalary]=useState("")
    const[reqjoining,setreqjoining]=useState("")
    const[reqrelocation,setreqrelocation]=useState("")
    const[reqlastemployer,setreqlastemployer]=useState("")
    const[reqaddress,setreqaddress]=useState("")

    function handleChange(evt) {
        const value =
          evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
        setState({
          ...state,
          [evt.target.name]: value
        });
      }

      const submitHandler = e => {
        e.preventDefault();
        resetErrorMessage ();
        if (Validate())
        console.log(state);
      }

      const Validate =()=>
      {
       if(state.firstName.trim() ==="") setreqfirstname("required")
       if(state.lastName.trim() ==="") setreqlastname("required")
       if(state.email.trim() ==="") setreqemail("required")
       if(state.tel.trim() ==="") setreqtel("required")
       if(state.position.trim() ==="") setreqposition("required")
       if(state.resume.trim() ==="") setreqresume("required")
       if(state.salary.trim() ==="") setreqsalary("required")
       if(state.joining.trim() ==="") setreqjoining("required")
       if(state.relocation.trim() ==="") setreqrelocation("required")
       if(state.lastemployer.trim() ==="") setreqlastemployer("required")
       if(state.address.trim() ==="") setreqaddress("required")
       
      }

      const resetErrorMessage =()=>
    {
      setreqfirstname("");
    }
    return(
        <div className="container">
            <main>
                <div className="application-form">
                    <h2>Job Application form with upload</h2>
                    <div className="application-form-detail">
                        <form onSubmit={submitHandler}>
                        <h4>Contact Information</h4>
						<div className="form-inline">
							<div className="form-group">
								<label>First Name *</label>
								<input type="text"  name="firstName" value={state.firstName} onChange={handleChange}/>
                                {reqfirstname ==="required" && <span className="txt-red">Please enter firstname</span> }
							</div>
							<div className="form-group">
								<label>Last Name *</label>
								<input type="text"  name="lastName" value={state.lastName} onChange={handleChange} />
                                {reqlastname ==="required" && <span className="txt-red">Please enter lastname</span> }
							</div>
						</div>
                        <div className="form-group">
							<label>Email *</label>
							<input type="email"  name="email" value={state.email} onChange={handleChange} />
                            {reqemail ==="required" && <span className="txt-red">Please enter email</span> }
						</div>
						<div className="form-group">
							<label>Phone *</label>
							<input type="tel"  name="tel" minlength="11" maxlength="11" value={state.tel} onChange={handleChange} />
                            {reqtel ==="required" && <span className="txt-red">Please enter phone number</span> }
						</div>
                        <br/>
                        <h4>Position</h4>
                        <hr/>
                        <div className="form-group">
							<label>Position you are applying for *</label>
							<input type="text" name="position" value={state.position} onChange={handleChange}/>
                            {reqposition ==="required" && <span className="txt-red">Please enter position</span> }
						</div>
                        <div className="form-group">
							<label>Resume Upload</label>
							<input type="file" name="resume" value={state.resume} onChange={handleChange}/>
                            {reqresume ==="required" && <span className="txt-red">Please upload resume</span> }
						</div>
						<div className="form-group">
							<label>React</label>
							<input type="checkbox" name="react" checked={state.react} onChange={handleChange}/>
						</div>
                        <div className="form-group">
							<label>Angular</label>
							<input type="checkbox" name="angular" checked={state.angular} onChange={handleChange}/>
						</div>
						<div className="form-group">
							<label>Salary Requirements</label>
							<input type="text" name="salary" value={state.salary} onChange={handleChange}/>
                            {reqsalary ==="required" && <span className="txt-red">Please enter salary required</span> }
						</div>
						<div className="form-group">
							<label>When can you start?</label>
							<input type="text" name="joining" value={state.joining} onChange={handleChange}/>
                            {reqjoining ==="required" && <span className="txt-red">Please enter joining date</span> }
						</div>
                        <br/>
                        <div className="form-group">
							<label>Are you willing to relocate?</label>
							<br/>
                            {reqrelocation==="required" && <span className="txt-red">Please select relocation</span> }
							<div className="form-inline flex">
                                
								<input type="radio" name="relocation" value="Yes" checked={state.relocation === "Yes"} onChange={handleChange}/>
								<label>Yes</label>
							</div>
							<div className="form-inline flex">
								<input type="radio" name="relocation" value="No" checked={state.relocation === "No"} onChange={handleChange}/>
								<label>No</label>
							</div>
							<div className="form-inline flex">
								<input type="radio" name="relocation"value="Not Sure" checked={state.relocation === "Not Sure"} onChange={handleChange}/>
								<label>Not Sure</label>
							</div>
						</div>
                        <br/>
                        <div className="form-group">
							<label>Last company you worked for?</label>
							<input type="text" name="lastemployer" autocomplete="off" value={state.lastemployer} onChange={handleChange}/>
                            {reqlastemployer ==="required" && <span className="txt-red">Please enter last company worked for</span> }
						</div>
						<div className="form-group">
							<label>Comments</label>
							<textarea name="address" rows="5"  value={state.address} onChange={handleChange}></textarea>
                            {reqaddress ==="required" && <span className="txt-red">Please leave comments</span> }
						</div>
                        <div className="form-group">
							<label>Work mode</label>
                        <select name="mode" onChange={handleChange} value={state.mode}>
                         <option value="office">office</option>
                         <option value="wfh">wfh</option>
                         <option value="remote">remote</option>
                        </select>
                        </div>
                        <hr/><br/>
                        <button type="submit">Submit</button>
                        
                        </form>
                    </div>
                </div>
            </main>
        </div>
    ); 

    }
    export default Form;  
     

     

