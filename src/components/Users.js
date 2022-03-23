import { useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import axios from "axios";
// import User from "./User";
// import SentUsers from "./SentUsers";

function Users() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <main>
        <h2>Users</h2>
        <nav>
          <NavLink end to="/">
            Home
          </NavLink>
        </nav>
        {loading && <div>Loading...</div>}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          maiores illum odio exercitationem, sequi veniam suscipit a voluptatem
          beatae amet iusto aliquam. Culpa perspiciatis quisquam facere
          voluptatem magnam autem temporibus.
        </p>
        <div>
          <nav>
            {users.map((user) => (
              <li key={user.id}>
                <NavLink
                  className={(navData) => (navData.isActive ? "active" : "")}
                  to={`/users/${user.id}`}
                >
                  {user.name}
                </NavLink>
              </li>
            ))}
          </nav>

          <div className="content">
            <Outlet />
          </div>
        </div>
      </main>
    </>
  );
}

export default Users;