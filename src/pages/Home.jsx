import { EditOutlined, LogoutOutlined } from "@ant-design/icons";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const Home = () => {
  const { currentUser, dispatch } = useContext(AuthContext);
  const [profile, setProfile] = useState({});

  console.log("profile", profile);

  const TOKEN = currentUser?.token;

  console.log(TOKEN);

  const userInfo = async () => {
    const res = await axios.get(
      "https://user-sector-app.vercel.app/auth/profile",
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );
    setProfile(res.data);
    console.log("USER INFO::::>>>", res.data);
  };

  useEffect(() => {
    userInfo();
  }, []);
  return (
    <div>
      <nav className="bg-blue-600 text-white flex justify-between px-6 py-2 font-medium">
        <span>profile</span>
        <div
          onClick={() => dispatch({ type: "LOGOUT" })}
          className="flex justify-center items-center gap-2"
        >
          <LogoutOutlined /> Logout
        </div>
      </nav>
      <div className="flex flex-col bg-blue-600 w-72 rounded-md p-4 m-4 text-white">
        <span>Name: {profile.username}</span>
        <span>Email: {profile.email}</span>
        <span>Sectors: {profile.sectors?.map((s) => s.name)}</span>

        <Link to="/form" className="flex items-center gap-2">
          <EditOutlined /> Update
        </Link>
      </div>
    </div>
  );
};

export default Home;
