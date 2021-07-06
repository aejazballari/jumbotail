import { useState, useEffect } from "react";

const CreatTicket = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");

  const handleUser = (e) => {
    setName(e.target.value);
  };

  const handleSubject = (e) => {
    setSubject(e.target.value);
  };

  const handleDesc = (e) => {
    setDescrition(e.target.value);
  };

  const submitTicket = async () => {
    const ticketGenerated = {
      name: name,
      subject: subject,
      description: description,
    };
    const post = await fetch("https://domain.freshdesk.com/api/v2/tickets", {
      method: "POST",
      body: JSON.stringify(ticketGenerated),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <div>
      <h3>Submit a ticket</h3>
      <label htmlFor="user">Requester</label>
      <input name="user" type="text" value={name} onChange={handleUser} />
      <label htmlFor="subject">Requester</label>
      <input
        name="subject"
        type="text"
        value={subject}
        onChange={handleSubject}
      />
      <label htmlFor="description">Description</label>
      <textarea
        name="description"
        id="description"
        cols="30"
        rows="10"
        value={description}
        handleDesc={handleDesc}
      ></textarea>
      <button onClick={submitTicket}>Submit</button>
    </div>
  );
};

export default CreatTicket;
