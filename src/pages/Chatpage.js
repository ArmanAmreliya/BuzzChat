import React, { useState } from "react";

import { useEffect } from "react";

import axios from "axios";

const Chatpage = () => {
  const [Chats, setChats] = useState([]);

  const fetchChats = async () => {
    const data = await axios.get("/api/chat");
    setChats(data);
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div className="App">
      {Chats.map((chat) => (
        <div key={chat._id}>{chat.chatname}</div>
      ))}
      ;
    </div>
  );
};

export default Chatpage;
