"use client"

import axios from "axios";
import { useState } from "react";

export default function Home() {

  const [image , setImage] = useState<File>();

  function handleFileChange(e:React.ChangeEvent<HTMLInputElement>){
    const files = e.target.files;
    console.log(files)
    if(files && files.length > 0){
      setImage(files[0]);
    }
  }

  async function handleSubmit(){
    const formData = new FormData();
    if(image){
      formData.append("image" , image);
    }

    try {
      const response = await axios.post("http://localhost:4000/doubt/create" , formData , {
        headers:{
          'Content-Type': 'multipart/form-data'
        }
      })

      console.log(response.data)

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <input type="file" name="" id="" onChange={handleFileChange} />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}
