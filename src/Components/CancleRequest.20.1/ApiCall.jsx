import React, { useState, useEffect } from 'react'
import axios from 'axios'

function ApiCall(props) {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const { data } = await axios.get("https://randomuser.me/api/?results=20&inc=location,name,picture");
    console.log(data.results)
    return data.results;
  }
  useEffect(() => {
    setUsers(getUsers());
  }, [])

  return (
    <div>
      {users.map(u => <div>{u}</div>)}
    </div>
  )
}

export default ApiCall
