import { useState } from "react";
import axios from "axios";

function App() {
  const [topic, setTopic] = useState("");
  const [summary, setSummary] = useState("");

  const fetchSummary = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/summary?topic=${topic}`);
      setSummary(response.data.summary);
    } catch (error) {
      console.error("Error fetching summary:", error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">AI Tutor</h1>
      <input
        className="border p-2 rounded w-full my-2"
        placeholder="Enter topic to cram"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      <button onClick={fetchSummary} className="bg-blue-500 text-white px-4 py-2 rounded">
        Get Summary
      </button>
      {summary && <p className="mt-4">{summary}</p>}
    </div>
  );
}

export default App;
