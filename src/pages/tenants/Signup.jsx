import React from "react";
import { FormControl } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const Signup = () => {
    const [origin, setOrigin] = React.useState('');
    const [img, setImg] = React.useState('');
    const handleChange = (event) => {
        setOrigin(event.target.value);
      };
      const getImage = (event) => {
        setImg(event.target.value);
      }
  return (
    <div className="w-full h-full min-h-screen bg-green-900/80 flex items-center justify-center overflow-y-auto">
        <div className="bg-white w-80 lg:w-96 p-10 relative flex flex-col gap-7 my-12">
            {/* Agent Tenant */}
            <div className="ml-auto flex font-medium text-base absolute top-0 right-0">
                <button className="px-5 py-1.5 shadow text-green-600">Agent</button>
                <button className="px-5 py-1.5 shadow bg-green-500 text-white">Tenant</button>
            </div>
            <h2 className="text-green-700 w-32 mt-5 text-2xl font-semibold">Create Account</h2>
            {/* Select State */}
            <FormControl id="selectState" fullWidth>
                <InputLabel id="demo-simple-select-label">State of orign</InputLabel>
                <Select labelId="demo-simple-select-label" id="demo-simple-select" onChange={handleChange} value={origin} label="State of origin">
                    <MenuItem value="Abia">Abia</MenuItem>
                    <MenuItem value="Akwa Ibom">Akwa Ibom</MenuItem>
                </Select>
             </FormControl>
            <input type="text" className="w-full outline-none border-b border-green-500 text-gray-500 font-base px-1 py-1.5 focus:border-green-700"  placeholder="Address"/>
            {/* File Upload */}
            <div className="flex relative items-center flex-col gap-3">
                {/* Upload Text */}
                <div>
                    <h2 className="text-gray-600">Upload KYT Document</h2>
                    <p className="text-xs text-gray-400 mt-1">You are required to upload a copy of any of the following -  National ID Card, School ID Card, Voters Card, International Passport, Driver’s License or Admission Letter</p>
                </div>
               <div className="flex gap-10 w-full">
                <label htmlFor="uploadImg">
                    <img src="/fileUpload.png" alt='file upload' className="absolute cursor-pointer w-7 mt-1"/>
                </label>
                <label htmlFor="uploadImg" className="w-10/12">
                    <div className="text-xs border-b border-green-600 w-full py-1 text-green-600 font-semibold cursor-pointer">Click Here To Upload {img}</div>
                </label>
               </div>
                <input type="file" id="uploadImg" className="hidden invisible"  placeholder="Click here to upload"  onChange={getImage}/>
            </div>
            {/* Create Button */}
            <button className="px-16 py-1.5 mx-auto shadow bg-green-700 rounded text-white font-semibold text-lg mt-5">Create Account</button>
        </div>
    </div>
  )
}

export default Signup