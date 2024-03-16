import React from 'react';

const ExerciseCard = ({ exercise }) => {
  return (
    <div className="exercise-card">
      <img src={exercise.gifUrl} alt={exercise.name} />
      <h2>{exercise.name}</h2>
      <p><strong>Body Part:</strong> {exercise.bodyPart}</p>
    </div>
  );
};

export default ExerciseCard;
