import { Input, Select } from "antd";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

const Form = () => {
  const { currentUser, dispatch } = useContext(AuthContext);
  const TOKEN = currentUser?.token;
  const [selected, setSelected] = useState([]);
  const sector = selected[1]?.map((op, k) => ({
    id: op.value,
    name: op.label,
  }));

  console.log(sector);

  const [userInfo, setUserInfo] = useState({
    name: "",
    sector: [],
    isAgreed: false,
  });


    // FETCHING SECTORS

  const [options, setOptions] = useState([]);
  const sectorsList = async () => {
    await axios
      .get("https://user-sector-app.vercel.app/sectors")
      .then(({ data }) => {
        const treeData = [...data]?.map((op, k) => ({
          value: op._id,
          label: op.name,
        }));
        setOptions((prev) => ({ ...prev, treeData: treeData }));
      });
  };

  useEffect(() => {
    sectorsList();
  }, []);

  const userNameHnadler = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const userCheckHandler = () =>
    setUserInfo({ ...userInfo, isAgreed: !userInfo.agree });

  const handleChange = (value, label) => {
    setSelected([value, label]);
    setUserInfo({
      ...userInfo,
      sector: sector,
    });
  };

  console.log(userInfo);

  const updateInfo = async (e) => {
    e.preventDefault()
    await axios.post(
      "https://user-sector-app.vercel.app/auth/profile/update",
      userInfo,
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      },
   
    );
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="bg-blue-500 text-white w-1/4  p-4 rounded-md">
        <span className="">
          Please enter your name and pick the Sectors you are currently involved
          in.
        </span>
        <form className="space-y-4 mt-8">
          <div className="flex flex-row gap-2">
            <label className="font-medium">Name:</label>
            <Input
              placeholder="Enter Your Name"
              name="name"
              onChange={(e) => userNameHnadler(e)}
            />
          </div>

          <div className="flex flex-row gap-2">
            <span className="font-medium">Sectors:</span>
            <Select
              mode="multiple"
              placeholder="Please select"
              onChange={handleChange}
              style={{ width: "100%" }}
              options={options.treeData}
            />
          </div>
          <div>
            <input
              type="checkbox"
              name="agree"
              onChange={(e) => userCheckHandler(e)}
            />{" "}
            <span className="font-medium"> Agree to terms</span>
          </div>
          <button
            className="bg-white text-blue-600 py-1 px-3 rounded-md"
            onClick={updateInfo}
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
