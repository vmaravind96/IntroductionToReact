function JeopardyDisplay(props) {
  const jeopardyData = props.jeopardyData;
  const answerField = props.answerField;
  const handleSubmit = props.handleSubmit;
  const score = props.score;

  const category = jeopardyData.category || {};

  return (
    <div className="Jeopardy">
      {/* Displaying the question to help you get started */}
      <div>
        <strong>Quiz:</strong>
      </div>
      <br />
      <div>
        <strong>Question:</strong> {jeopardyData.question}
      </div>
      <div>
        <strong>Category Title:</strong> {category.title || "Dummy"}
      </div>
      <div>
        <strong>Point Value:</strong> {jeopardyData.value}
      </div>
      <hr />
      <div>
        <label>
          <strong>Type your answer here:</strong>
        </label>
        <input type="text" ref={answerField} name="answer" />
      </div>
      <button onClick={handleSubmit}>Check Answer</button>
      <hr />
      <br />
      <div>
        <strong>User Current Score:</strong> {score}
      </div>
    </div>
  );
}

export default JeopardyDisplay;
