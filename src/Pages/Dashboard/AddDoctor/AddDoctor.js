import { TextField, Button, Input } from '@mui/material';
import { useForm } from "react-hook-form";
import React, { useState } from 'react';

const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [img, setImg] = useState(null)
    const onSubmit = data => {
        if(!img){
            alert("Please add a img")
            return
        };
        const formData = new FormData();
        formData.append('img', img);
        formData.append('name', data?.name);
        formData.append('email', data?.email);
        fetch('http://localhost:5000/addDoctor',{
            method:'POST',
            body:formData
        })
        .then(res=>res.json())
        .then(data=> {
            if(data){
                alert("Doctor added Successfully")
            }
        })
        .catch(error=> console.error("Error :" ,error ))
    };
    return (
        <div>
            <h2> This is add Doctor</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField {...register("name")} sx={{ width: '25%' }} required label="Name" type='text' variant="standard" /> <br />
                <TextField {...register("email")} sx={{ width: '25%' }} required label="Email" type='email' variant="standard" /> <br /> <br />
                <Input onChange={e=>setImg(e.target.files[0])} accept="image/*" type="file" />
                {errors.exampleRequired && <span>This field is required</span>}
                <Button sx={{ marginLeft: '10px' }} variant="contained" type='submit'>
                    Add Doctor
                </Button>
            </form>

        </div>
    );
};

export default AddDoctor;