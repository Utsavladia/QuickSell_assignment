import React from "react";
import "../css/card.css";
import rgent from "../assets/SVG - Urgent Priority colour.svg";
import highpriorityIcon from "../assets/Img - High Priority.svg";
import todoimage from "../assets/To-do.svg";
import urgentpriorityIcon from "../assets/in-progress.svg";
import doneIcon from "../assets/Done.svg";
import progressIcon from "../assets/in-progress.svg";
import backlogIcon from "../assets/Backlog.svg";
import nopriorityIcon from "../assets/No-priority.svg";
import lowPriorityIcon from "../assets/Img - Low Priority.svg";
import mediumpriorityIcon from "../assets/Img - Medium Priority.svg";

function getInitials(name) {
  const nameParts = name.trim().split(" ");
  if (nameParts.length > 1) {
    return nameParts[0][0] + nameParts[1][0];
  } else {
    return nameParts[0].slice(0, 2).toUpperCase();
  }
}

function getColorForUser(id) {
  const colors = ["#FF5733", "#006400", "#3357FF", "#FF33A5", "#FFBD33"];
  return colors[id % colors.length];
}

const normalizeStatus = (status) => {
  return status.toLowerCase().replace(/\s+/g, "_");
};

const statusIconMap = {
  todo: todoimage,
  in_progress: progressIcon, // Notice how we use underscores
  backlog: backlogIcon,
};

const priorityMap = {
  0: nopriorityIcon,
  1: lowPriorityIcon,
  2: mediumpriorityIcon,
  3: highpriorityIcon,
  4: urgentpriorityIcon,
};

const TaskCard = ({ task, key, user, view }) => {
  const name = getInitials(user?.name) || "Na";
  const color = getColorForUser(user?.id[user.id.length - 1]) || 1;
  const normalStatus = normalizeStatus(task.status);
  const status = statusIconMap[normalStatus];
  const priority = priorityMap[task.priority];
  return (
    <div className="card">
      <div className="card-content">
        <p className="card-id">{task.id}</p>
        <div className="card-title">
          {view !== "status" && (
            <img src={status} className="card-status" alt="icon" />
          )}
          {task.title}
        </div>
        <div className="card-bottom">
          {view !== "priority" && (
            <img src={priority} alt="!" className="card-priority" />
          )}
          <div className="card-tag">{task.tag[0]}</div>
        </div>
      </div>
      {view !== "user" && (
        <div className="profile" style={{ backgroundColor: color }}>
          {name}
          <div className="indicator"></div>
        </div>
      )}
    </div>
  );
};

export default TaskCard;
