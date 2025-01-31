import { useEffect, useState } from "react";
import '../../../../src/index.css'
const UseEffectBasics = () => {
  const [users, setUsers] = useState([]);
  const url = "https://api.github.com/users";
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(url);
      const result = await response.json();
      setUsers(result);
      return result;
    };
    fetchUsers();
  }, []);

  console.log(users);
  return (
    <>
      <ul>
        {users.map((user) => {
          const { login, id, avatar_url, html_url } = user;
          return  <li key={id}>
          <img src={avatar_url} alt={login} />
          <div>
            <h5>{login}</h5>
            <a href={html_url}>profile</a>
          </div>
        </li>;
        })}
      </ul>
    </>
  );
};
export default UseEffectBasics;
