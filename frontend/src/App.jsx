import { useEffect, useState} from "react";

function App() {
  const[message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/")
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Failed to load message"));
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

export default App;