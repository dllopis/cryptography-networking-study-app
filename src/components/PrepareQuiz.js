import React, { useEffect, useState } from 'react';
import MultipleChoiceQuiz from './MultipleChoiceQuiz';

// Function to get random options for a question, ensuring the correct answer is included
const getRandomOptions = (jsonData, correctAnswer, numOptions) => {
  const options = [correctAnswer];

  while (options.length < numOptions) {
    const randomTerm = getRandomTerm(jsonData);
    if (!options.includes(jsonData[randomTerm])) {
      options.push(jsonData[randomTerm]);
    }
  }

  return shuffleArray(options);
};

// Function to get a random term from the JSON data
const getRandomTerm = (jsonData) => {
  const terms = Object.keys(jsonData);
  return terms[Math.floor(Math.random() * terms.length)];
};

// Function to shuffle an array
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const PrepareQuiz = (props) => {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.PUBLIC_URL}/data/key-terms-chapter-${props.chapter}.json`);
        const data = await response.json();
        setJsonData(data);
      } catch (error) {
        console.error('Error fetching JSON data:', error);
      }
    };

    fetchData();
  }, [props.chapter]);

  if (!jsonData) {
    // You might want to add a loading indicator here
    return <div>Loading...</div>;
  }

  // Convert the JSON data into an array of quiz questions
  const quizData = Object.entries(jsonData).map(([term, definition]) => ({
    term,
    options: getRandomOptions(jsonData, definition, 4), // Adjusted to 4 options
    correctAnswer: definition,
  }));

  return (
    <div>
      <MultipleChoiceQuiz data={quizData} />
    </div>
  );
};

export default PrepareQuiz;
