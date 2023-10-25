import axios from "axios";
import { useEffect, useState } from "react";

const AdminLogin = () =>{
    const [name,setName] = useState("");
    const [phone,setPhone] = useState("");
    const [record,setRecord] = useState([]);
    const [edit,setEdit] = useState("");

    const handleSubmit = () =>{
      if(edit){
        axios.put(`http://localhost:8000/category/${edit}`,{
            name:name,
            phone:phone
        }).then((res)=>{
            alert("Data update");
            fetchData();
        }).catch((err)=>{
            console.log(err);
            return false;
        })
      }else{
        axios.post(`http://localhost:8000/category`,{
            name:name,
            phone:phone
        }).then((res)=>{
            alert("Data submit");
            fetchData();
        }).catch((err)=>{
            console.log(err);
            return false;
        })
      }
      setName("")
      setPhone("")
    }

    const fetchData = () =>{
        axios.get(`http://localhost:8000/category`)
        .then((res)=>{
            setRecord(res.data);
        }).catch((err)=>{
            console.log(err);
            return false;
        })
    }

    const handleDelete = (id) =>{
        axios.delete(`http://localhost:8000/category/${id}`)
        .then((res)=>{
            alert("delete data");
            fetchData();
        }).catch((err)=>{
            console.log(err);
            return false;
        })
    }

    const handleEdit = async(id) =>{
        try{
            let editData = await axios.get(`http://localhost:8000/category/${id}`);
            if(editData){
                setName(editData.data.name);
                setPhone(editData.data.phone);
                setEdit(editData.data.id)
            }else{
                console.log("not fetch data");
                return false
            }
        }catch(err){
            console.log(err);
            return false;
        }
    }

    useEffect(()=>{
        fetchData();
    },[])
    return(
        <center>
            <h1>Admin Login page</h1> <br />
            <table border={1}>
               <thead>
               <tr>
                    <td>name:</td>
                    <td><input type="text" name="name" onChange={(e)=>setName(e.target.value)} value={name}/></td>
                </tr>
                <tr>
                    <td>phone</td>
                    <td><input type="text" name="phone" onChange={(e)=>setPhone(e.target.value)} value={phone}/></td>
                </tr>
               </thead>
               <tbody>
               <tr>
                    <td></td>
                    <td><button onClick={()=>handleSubmit()}>Submit</button></td>
                </tr>
               </tbody>
            </table><br></br>
            <table border={1}>
              <thead>
              <tr>
                    <td>id</td>
                    <td>name</td>
                    <td>phone</td>
                    <td>action</td>
                </tr>
              </thead>
                {
                    record.map((v)=>{
                        return(
                            <tr key={v.id}>
                                <td>{v.id}</td>
                                <td>{v.name}</td>
                                <td>{v.phone}</td>
                                <td>
                                    <button onClick={()=>handleDelete(v.id)}>delete</button>
                                    <button onClick={()=>handleEdit(v.id)}>edit</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </table>
        </center>
    )
}
export default AdminLogin;