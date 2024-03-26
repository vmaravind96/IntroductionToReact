import { useEffect, useRef, useState } from "react";

function Jeopardy(props) {
  const [score, setScore] = useState(0);
  const [jeopardyData, setJeopardyData] = useState({});
  const answerField = useRef(null);

  //when the component mounts, get a the first question
  useEffect(() => {
    getNewQuestion();
  }, [score]);

  //get a new random question from the API and add it to the data object in state
  const getNewQuestion = () => {
    //use fetch to make an API call and get a random Jeopardy question (returns a promise)
    fetch(`https://jservice.xyz/api/random-clue`)
      //on success of the fetch request, turn the response that came back into JSON
      .then((response) => response.json())
      //on success of turnig the response into JSON (data we can work with), lets add that data to state
      .then((data) => {
        //put the data in the console just so we can see it
        console.log("data from the api", data);

        //update state with the data from the API causing the page to re-render
        setJeopardyData(data);
      })
      //handle any errors/failures with getting data from the API
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = (event) => {
    if (jeopardyData.answer === answerField.current.value){
      console.log("Correct answer");
      setScore(score + jeopardyData.value);
    } else {
      console.log("Opps! Wrong answer");
      setScore(score - jeopardyData.value);
    }
    answerField.current.value = "";
  };

  //present the results to the user
  return (
    <div className="Jeopardy">
      {/* Displaying the question to help you get started */}
      <div><strong>Quiz:</strong></div>
      <br/>
      <div><strong>Question:</strong> {jeopardyData.question}</div>
      <div><strong>Category Title:</strong> {jeopardyData.category.title || "Dummy"}</div>
      <div><strong>Point Value:</strong> {jeopardyData.value}</div>
      <hr/>
      <div>
        <label><strong>Type your answer here:</strong></label>
        <input type="text" ref={answerField} name="answer"/>
      </div>
      <button onClick={handleSubmit}>Check Answer</button>
      <hr/>
      <br/>
      <div><strong>User Current Score:</strong> {score}</div>
    </div>
  );
}

export default Jeopardy;
