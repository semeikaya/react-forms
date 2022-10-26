import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [send, setSend] = useState(false);
  const [empty, setEmpty] = useState(false);
  const [classError, setClassError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(input);
    setSend(true);
    setInput("");
    setEmpty(false);
    setClassError("");
  }

  function handleBlur() {
    if (!input) {
      setEmpty(true);
      setSend(false);
      setClassError("is-error");
    }
  }

  function handleChange(e) {
    setInput(e.target.value);
    setSend(false);
    setEmpty(false)
    setClassError('borderInput')
  }

  return (
    <>
      <form className="main" onSubmit={handleSubmit}>
        {" "}
        <input
          className={classError}
          type="text"
          value={input}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Button type="submit" variant="primary" size="lg" disabled={!input}>
          Отправить
        </Button>
      </form>
      {send && <div className="messageStatus">Сообщение отправлено!</div>}
      {empty && <div className="err">Поле ввода не должно быть пустым!</div>}
    </>
  );
}

export default App;
