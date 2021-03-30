import React, { useState, useEffect } from 'react'
import axios from 'axios';
import CardList from './CardList';
import './style.css';

const RefactorWithHooks = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState([]);

  const getAvater = async () => {
    const response = await axios.get("https://randomuser.me/api/?results=20&inc=location,name,picture");
    setUsers(response.data.results);
  }

  useEffect(() => {
    getAvater();
  }, []);

  const filterUsers = (e) => {
    const filter = users.filter(u => (u.name.first).concat(u.name.last).toLowerCase().includes(e.currentTarget.value.toLowerCase()));
    setFilter(filter);
  }

  return (
    <div>
      <input className="searchInput" type="text" placeholder="Search user by name" onChange={filterUsers} />
      <CardList users={filter.length > 0 ? filter : users} />
    </div>
  );

}

export default RefactorWithHooks
