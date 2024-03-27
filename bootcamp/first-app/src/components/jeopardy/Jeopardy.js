import { useEffect, useRef, useState } from "react";
import JeopardyDisplay from "./JeopardyDisplay";

function Jeopardy(props) {
  const [score, setScore] = useState(0);
  const [jeopardyData, setJeopardyData] = useState({});
  const [selectedOption, setSelectedOption] = useState("LANDMARKS");
  const answerField = useRef(null);
  const categoriesMap = { LANDMARKS: 22248, KNIGHTS: 22096, JULIUS: 21726 };

  //when the component mounts, get a the first question
  useEffect(() => {
    getNewQuestion();
  }, [score, selectedOption]);

  //get a new random question from the API and add it to the data object in state
  const getNewQuestion = () => {
    
    const categoryId = categoriesMap[selectedOption];

    //use fetch to make an API call and get a random Jeopardy question (returns a promise)
    fetch(`https://jservice.xyz/api/clues?category=${categoryId}`)
      //on success of the fetch request, turn the response that came back into JSON
      .then((response) => response.json())
      //on success of turnig the response into JSON (data we can work with), lets add that data to state
      .then((data) => {
        //put the data in the console just so we can see it
        console.log("data from the api", data);

        const maxValue = data.clues.length - 1;
        const index = Math.floor(Math.random() * (maxValue + 1));

        //update state with the data from the API causing the page to re-render
        setJeopardyData(data.clues[index]);
      })
      //handle any errors/failures with getting data from the API
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = (event) => {
    if (jeopardyData.answer === answerField.current.value) {
      console.log("Correct answer");
      setScore(score + jeopardyData.value);
    } else {
      console.log("Opps! Wrong answer");
      setScore(score - jeopardyData.value);
    }
    answerField.current.value = "";
  };

  const handleDropdown = (event) => {
    setSelectedOption(event.target.value);
  };

  //present the results to the user
  return (
    <div className="Jeopardy">
      <JeopardyDisplay
        jeopardyData={jeopardyData}
        score={score}
        handleSubmit={handleSubmit}
        answerField={answerField}
        selectedOption={selectedOption}
        handleDropdown={handleDropdown}
      />
    </div>
  );
}

export default Jeopardy;
