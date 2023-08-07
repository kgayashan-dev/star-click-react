import React, { useState } from 'react';
// import './StarRating.css'; // Import the CSS file for styling
// import firebase from 'firebase/app';
// import 'firebase/database'; // Import the Firebase Realtime Database module

const StarRating = ({ itemId }) => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (selectedRating) => {
    setRating(selectedRating);
    saveRatingToFirebase(selectedRating);
  };

  const saveRatingToFirebase = (selectedRating) => {
    // const database = firebase.database();
    // Replace 'ratings' with the name of the Firebase node where you want to store the ratings
    // database.ref(`ratings/${itemId}`).set(selectedRating);
  };

  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <span
            key={index}
            className={`star ${starValue <= rating ? 'star-filled' : ''}`}
            onClick={() => handleRatingChange(starValue)}
          >
            ★
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
