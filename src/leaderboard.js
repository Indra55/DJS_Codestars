import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Leaderboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await axios.get('https://codeforces.com/api/user.ratedList');
        console.log(response.data.result);  
        const filteredUsers = response.data.result.filter(user => 
          user.organization && user.organization.toLowerCase() === 'dwarkadas j. sanghvi college of engineering'.toLowerCase()
        );
        console.log(filteredUsers);
        const sortedUsers = filteredUsers.sort((a, b) => b.rating - a.rating);
        setUsers(sortedUsers.slice(0, 5));  
      } catch (error) {
        console.error('Error fetching leaderboard:', error);
      }
    };
    fetchLeaderboard();
  }, []);
  

  return (
    <div className="leaderboard bg-gradient-to-r from-orange-200 to-pink-200 p-6 rounded-lg ">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500'">Codeforces Leaderboard</h2>
     
      <table className="min-w-full bg-white rounded-lg shadow-lg">
        <thead>
          <tr>
            <th className="py-3 px-4 text-gray-600">RANK</th>
            <th className="py-3 px-4 text-gray-600 text-left">USER</th>
            <th className="py-3 px-4 text-gray-600 ">RATING</th>
             
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.handle} className="text-center">
              <td className="py-3 px-4 text-gray-800">{index + 1}</td>
              <td className="py-3 px-4 flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex justify-center items-center mr-3">
                  {user.handle.slice(0, 2).toUpperCase()}
                </div>
                {user.handle}
              </td>
              <td className="py-3 px-4 text-gray-800">{user.rating}</td>
               
            </tr>
          ))}
        </tbody>
      </table>
      <p className='text-right m-0 p-0 '>(*of Dwarkadas J. Sanghvi College of Engineering)</p>
      <div className="text-center mt-6">
        <a className="bg-orange-500 text-white py-2 px-4 rounded-lg shadow hover:bg-orange-600" href='https://codeforces.com/ratings/organization/2663' target='_blank' rel="noopener noreferrer">
          View Full Leaderboard
        </a>
      </div>
    </div>
  );
};

export default Leaderboard;
