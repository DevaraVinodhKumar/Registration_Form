import React, { useState, useRef } from 'react'
import { ShowFormData } from './ShowFormData';


let initialValue = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phNumber: "",
    country: "",
    birthDate: "",
    avatar: "",
    marriageStatus:false, 
    gender: "",

}

const Form = () => {

  const [formData,setFormData] = useState(initialValue);
  const [showData,setShowData] = useState(false);
  const fileInputRef = useRef(null);

  const handelChange = (event) => {
  const {name,value,type,checked} = event.target;
    // console.log(name,value);
    setFormData((prevData) => ({
        ...prevData, [name]:type === "checkbox" ? checked : value, }));

    };

    const handleFileChange = () => {
        const file = fileInputRef.current?.files?.[0];
        if (file) {
          setFormData((prevData) => ({
            ...prevData,
            avatar: file.name
          }));
        }
    };

   const handelSubmit = (event) =>{
    event.preventDefault();
    // console.log(formData);
    setShowData(true);
   }

  return (
    <div>
        <form action="" onSubmit={handelSubmit}>
            <div>
                <label>FirstName:</label>
                <input type="text" placeholder='First Name' onChange={handelChange} name="firstName" value={formData.firstName}/>
            </div>
            <div>
                <label>LastName:</label>
                <input type="text" placeholder='Last Name' onChange={handelChange}
                name="lastName" value={formData.lastName}
                />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" placeholder='example@gmail.com' onChange={handelChange}  name="email" value={formData.email}/>
            </div>
            <div>
                <label>Password:</label>
                <input type="password" placeholder='Password' onChange={handelChange}
                    name="password" value={formData.password}/>
            </div>
            <div>
                <label>Phone:</label>
                <input type="number" placeholder='9999999999'  onChange={handelChange}
                    name="phNumber" value={formData.phNumber}/>
            </div>
            <div>
                <label>Country:</label>
                <select id="" onChange={handelChange} name="country" value={formData.country}>
                    <option value="">Select a option</option>
                    <option value="usa">USA</option>
                    <option value="uk">UK</option>
                    <option value="india">India</option>
                    <option value="canada">Canada</option>
                    <option value="france">France</option>
                    <option value="germany">Germany</option>
                    <option value="japan">Japan</option>
                    <option value="italy">Italy</option>
                    <option value="spain">Spain</option>
                    <option value="russia">Russia</option>
                    <option value="brazil">Brazil</option>
                    <option value="china">China</option>
                    <option value="indonesia">Indonesia</option>
                    <option value="malaysia">Malaysia</option>
                </select>
            </div>
            <div>
                <label>Data Birth:</label>
                <input type="date" onChange={handelChange}  name="birthDate" value={formData.birthDate}/>
            </div>
            <div>
                <label>Choose Image:</label>
                <input type="file" onChange={handleFileChange}  ref={fileInputRef}/>
            </div>
            <div>
                <label>Select if Married</label>
                <input type="checkbox" onChange={handelChange} name="marriageStatus" value={formData.marriageStatus} />
                Marriage Status
            </div>
            <div>
                <label>Choose a Gender</label>
                <input type="radio" name ="gender" value="male" onChange={handelChange} checked={formData.gender === "male"}/>
                Male
                <input type="radio" name ="gender" value="female" onChange={handelChange} checked={formData.gender === "female"}/>
                Female
                <input type="radio" name ="gender" value="other" onChange={handelChange} checked={formData.gender === "other"}/>
                Others
            </div>
            <button type='submit'>Submit</button>
        </form>

        {showData && <ShowFormData formData = {formData} />}

    </div>
  
  );
};

export default Form