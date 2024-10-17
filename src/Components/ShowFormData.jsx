import React from 'react'

export const ShowFormData = ({formData}) => {
  return (
    <div className='formData'>

      <h2>Submitted Form Data</h2>
      <p><strong>First Name:</strong> {formData.firstName}</p>
      <p><strong>Last Name:</strong> {formData.lastName}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p>Password:{formData.password}</p>
      <p><strong>Phone Number:</strong> {formData.phNumber}</p>
      <p><strong>Country:</strong> {formData.country}</p>
      <p><strong>Birth Date:</strong> {formData.birthDate}</p>
      <p><strong>Avatar:</strong> {formData.avatar}</p>
      <p><strong>Married:</strong> {formData.marriageStatus ? 'Yes' : 'No'}</p>
      <p><strong>Gender:</strong> {formData.gender}</p>

    </div>
  )
}
