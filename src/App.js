import React, { useState, useEffect } from "react";
import "./css/App.css";
import fetchData from "./api";
import TaskList from "./components/TaskList";
import display from "./assets/Display.svg";
import down from "./assets/down.svg";

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [view, setView] = useState(() => {
    return localStorage.getItem("taskView") || "status";
  });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const fetchTasks = async () => {
      const { tickets, users } = await fetchData();
      setTickets(tickets);
      setUsers(users);
    };
    fetchTasks();
  }, []);

  useEffect(() => {
    localStorage.setItem("taskView", view);
  }, [view]);

  const handleViewChange = (event) => {
    setView(event.target.value);
    setVisible(false);
  };

  const toggleOptions = () => {
    setVisible((prev) => !prev);
  };

  return (
    <div className="App">
      <header className="App-header">
        <button className="display" onClick={toggleOptions}>
          <img src={display} alt="icon" className="icon" />
          Display
          <img src={down} alt="icon" className="icon" />
        </button>

        {visible && (
          <div className="filterContainer">
            <div className="filters">
              <p>Grouping</p>
              <select className="options" onChange={handleViewChange}>
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>
            <div className="filters">
              <p>Ordering</p>
              <select className="options" onChange={handleViewChange}>
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        )}
      </header>
      <main>
        <TaskList tickets={tickets} users={users} view={view} />
      </main>
    </div>
  );
}

export default App;
