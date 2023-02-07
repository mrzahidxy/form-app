import { Input } from 'antd';
import { TreeSelect } from 'antd';
import { useState } from 'react';
const { SHOW_PARENT } = TreeSelect;

const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    key: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-0',
        key: '0-0-0',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
    key: '0-1',
    children: [
      {
        title: 'Child Node3',
        value: '0-1-0',
        key: '0-1-0',
      },
      {
        title: 'Child Node4',
        value: '0-1-1',
        key: '0-1-1',
      },
      {
        title: 'Child Node5',
        value: '0-1-2',
        key: '0-1-2',
      },
    ],
  },
];

const Form = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    sectors: ['0-0-0'],
    agree: false
  })
  const [value, setValue] = useState(['0-0-0']);
  const onChange = (newValue) => {
    setUserInfo({ ...userInfo, 'sectors': newValue })
    setValue(newValue);
  };

  const tProps = {
    treeData,
    value,
    onChange,
    treeCheckable: true,
    showCheckedStrategy: SHOW_PARENT,
    placeholder: 'Please select',
    style: {
      width: '100%',
    },

  };

  const userNameHnadler = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
  }

  const userCheckHandler = () => setUserInfo({ ...userInfo, 'agree': !userInfo.agree })

  console.log(userInfo)

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="bg-blue-500 text-white w-1/4  p-4 rounded-md">
        <span className="">Please enter your name and pick the Sectors you are currently involved in.</span>
        <form className="space-y-4 mt-8">
          <div className="flex flex-row gap-2">
            <label className='font-medium'>Name:</label>
            <Input placeholder="Enter Your Name" name='name' onChange={(e) => userNameHnadler(e)} />
          </div>

          <div className="flex flex-row gap-2"> <span className='font-medium'>Sectors:</span>
            <TreeSelect
              name="sectors"
              {...tProps}
            />
          </div>
          <div><input type="checkbox" name='agree' onChange={(e) => userCheckHandler(e)} /> <span className='font-medium'> Agree to terms</span></div>
          <button className="bg-white text-blue-600 py-1 px-3 rounded-md">Save</button>
        </form>
      </div>
    </div>)
}

export default Form;