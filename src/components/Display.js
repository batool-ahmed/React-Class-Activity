import React from 'react'

function Display({username, firstName, lastName, classLevel, school, email, profilePicture}) {
  return (
    <div>
        <img src={profilePicture} alt='profile picture'/>
        <ul>
            <li><strong>Full Name: </strong>{firstName + ' ' + lastName}</li>
            <li><strong>Username: </strong>{username}</li>
            {classLevel === 'Freshmen' ? <li><strong>Class Level: </strong><span className='green'>{classLevel}</span></li> 
            : <li><strong>Class Level: </strong><span className='black'>{classLevel}</span></li> }
            <li><strong>School: </strong>{school}</li>
            <li><strong>Email: </strong>{email}</li>
        </ul>
        <hr/>
    </div>
  )
}

export default Display