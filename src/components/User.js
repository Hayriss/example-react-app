import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function User() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios(`${process.env.REACT_APP_API_EDNPOINT}/users/${id}`)
      .then((res) => setUser(res.data))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div>
      <h1>User Details</h1>
      {loading && <div>Loading...</div>}
      {!loading && <code>{JSON.stringify(user)}</code>}

      <br />
      <br />

      <nav>
        <Link to={`/users/${parseInt(id) + 1}`}>
          Next User ({parseInt(id) + 1})
        </Link>
      </nav>
    </div>
  );
}

export default User;
