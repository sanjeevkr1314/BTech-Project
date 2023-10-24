import React from "react";
import { useAuth } from "../context/auth";

const HomePage = () => {
  const [auth, setAuth] = useAuth();

  return (
    <div>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Welcome to my app
      </h1>

      <pre>{JSON.stringify(auth, null, 4)}</pre>
    </div>
  );
};

export default HomePage;
