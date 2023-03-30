// src/FaceBook.js
import React from 'react';
import profiles from './data/berlin.json';
import './FaceBook.css';

const FaceBook = () => {
  return (
    <div className="facebook">
      {profiles.map((profile, index) => (
        <div key={index} className="profile">
          <img src={profile.img} alt={profile.firstName} />
          <h3>{profile.firstName} {profile.lastName}</h3>
          <p><strong>Country:</strong> {profile.country}</p>
          <p><strong>Type:</strong> {profile.isStudent ? 'Student' : 'Teacher'}</p>
        </div>
      ))}
    </div>
  );
};

export default FaceBook;