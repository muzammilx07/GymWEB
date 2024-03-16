import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [exercises, setExercises] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/back?limit=${limit}`, {
          headers: {
            'X-RapidAPI-Key': 'f3384d0c7amshf8ebae67c1de3d7p17d3cdjsn093aa5700be2',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
          }
        });
        setExercises(response.data);
      } catch (error) {
        console.error('Error fetching exercises:', error);
      }
    };

    fetchData();
  }, [limit]);

  const handleLoadMore = () => {
    setLimit(prevLimit => prevLimit + 10);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredExercises = exercises.filter(exercise =>
    exercise.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search exercises..."
        value={searchTerm}
        onChange={handleSearch}
        className="input-bar"
      />
      <div className="exercise-container">
        {filteredExercises.map(exercise => (
          <div key={exercise.id} className="exercise-card">
            <img src={exercise.gifUrl} alt={exercise.name} className="exercise-image" />
            <div className="exercise-details">
              <h2 className="exercise-name">{exercise.name}</h2>
              <p className="exercise-info"><strong>Body Part:</strong> {exercise.bodyPart}</p>
              <p className="exercise-info"><strong>Equipment:</strong> {exercise.equipment}</p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={handleLoadMore} className="load-more-button">Load More</button>
    </div>
  );
};

export default App;
