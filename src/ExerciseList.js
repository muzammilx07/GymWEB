import React from 'react';

const ExerciseList = ({ exercises }) => {
  return (
    <ul>
      {exercises.map(exercise => (
        <li key={exercise.id}>{exercise.name}</li>
      ))}
    </ul>
  );
};

export default ExerciseList;
