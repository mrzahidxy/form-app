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

const Form = () =>{
  const [value, setValue] = useState(['0-0-0']);
  const onChange = (newValue) => {
    console.log('onChange ', value);
    setValue(newValue);
  };

  const tProps = {   treeData,
  
    value,
    onChange,
    treeCheckable: true,
    showCheckedStrategy: SHOW_PARENT,
    placeholder: 'Please select',
    style: {
      width: '100%',
    },
    
  };


	return(
		<div className="h-screen w-screen flex justify-center items-center">
			<div className="bg-neutral-200 w-1/4  p-4 rounded-md">
			<span className="">Please enter your name and pick the Sectors you are currently involved in.</span>
				<form className="space-y-4 mt-8">
				 <div className="flex flex-row gap-2">
				  <label>Name:</label>
                  <Input placeholder="Basic usage" />
                 </div>

                 <div className="flex flex-row gap-2"> <span>Sectors:</span>
                   <TreeSelect

   {...tProps}
    />
    </div>
                <div><input type="checkbox"/> <span> Agree to terms</span></div>
                <button className="bg-blue-600 text-white py-1 px-3">Save</button>
				</form>
			</div>
		</div>)
}

export default Form;