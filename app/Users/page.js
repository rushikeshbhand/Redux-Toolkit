'use client';

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, deleteUser } from '../Slice/page';

export default function Users() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);

  const handleAddUser = (e) => {
    e.preventDefault();
    if (username) {
      dispatch(addUser({ id: Date.now(), name: username }));
      setUsername('');
    }
  };

  const handleDeleteUser = (id) => {
    dispatch(deleteUser({ id }));
  };

  return (
    <>
      {/* Add users */}
      <div className="border border-solid border-zinc-300 mx-auto max-w-4xl mt-52">
        <h1 className="text-center mt-5 mb-5">Add Users / Delete Users</h1>
        <form
          className="flex flex-row justify-center flex-wrap gap-3 mb-10"
          onSubmit={handleAddUser}
        >
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            className="bg-slate-900 py-1 rounded-md w-40"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button
            type="submit"
            className="bg-slate-900 text-white px-4 rounded-md font-semibold"
          >
            Add User
          </button>
        </form>
      </div>

      {/* Show users */}
      <div className="border border-solid border-zinc-300 mx-auto max-w-4xl mt-10">
        <h2 className="text-center mt-5 mb-5">User List</h2>
        <ul className="flex flex-col items-center">
          {users.map((user) => (
            <li key={user.id} className="flex flex-row justify-between w-60 mb-2">
              <span>{user.name}</span>
              <button
                className="bg-red-500 text-white px-2 rounded-md font-semibold"
                onClick={() => handleDeleteUser(user.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
