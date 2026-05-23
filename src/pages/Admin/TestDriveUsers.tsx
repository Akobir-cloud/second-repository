
import { useEffect, useState } from "react";

type users = {
  name:string;
  phone:string;
  id:string
  model:string;
  comment:string;
}

function TestDriveUsers() {
  const [users, setUsers] = useState<users[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/testDriveUsers")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="max-w-5xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">
        Test Drive Users
      </h1>

      <div className="grid gap-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="border border-gray-700 rounded-lg p-5 bg-black/40"
          >
            <h2 className="text-xl font-semibold">
              {user.name}
            </h2>

            <p className="text-gray-400">
              {user.phone}
            </p>

            <p className="text-white mt-2">
              {user.model}
            </p>

            <p className="text-gray-500 mt-1">
              {user.comment}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestDriveUsers;