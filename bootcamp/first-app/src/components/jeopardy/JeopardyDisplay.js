function JeopardyDisplay(props) {
  const jeopardyData = props.jeopardyData;
  const answerField = props.answerField;
  const handleSubmit = props.handleSubmit;
  const score = props.score;
  const selectedOption = props.selectedOption;
  const handleDropdown = props.handleDropdown;

  return (
    <div className="JeopardyDisplay">
      {/* Displaying the question to help you get started */}
      <div>
        <strong>Quiz:</strong>
      </div>
      <br />
      <div>Please select a category:</div>
      <select id="dropdown" value={selectedOption} onChange={handleDropdown}>
        <option value="LANDMARKS">LANDMARKS</option>
        <option value="KNIGHTS">KNIGHTS</option>
        <option value="JULIUS">JULIUS</option>
      </select>
      <br />
      <br />
      <div>
        <strong>Question:</strong> {jeopardyData?.question || "Dummy Question"}
      </div>
      <div>
        <strong>Category Title:</strong>{" "}
        {jeopardyData?.category?.title || "Dummy Title"}
      </div>
      <div>
        <strong>Point Value:</strong> {jeopardyData?.value || "Dummy Value"}
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
