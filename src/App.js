import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
 
 
const App = () => {
  const [product,setProduct]=useState([])
  const[search,setSearch]=useState("")
  const getData=async()=>{
    try{
      const data = await axios.get("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
      console.log(data.data)
      setProduct(data.data)
    }
    catch(e){
      console.log(e)

    }
  }
  useEffect(()=>{
    getData()
  },[]);
    const edit=(index)=>{
  
  const promptvalue=prompt("enter the value",product[index])
  if(promptvalue=="")
  alert("please enter the value")
else{
  const newupdate=[...product];
  newupdate[index] = promptvalue;
  setProduct(newupdate)
  



  }}
    const delet=(index)=> {
   const deleteItem = [...product]
   console.log("deleteitem",deleteItem);
   deleteItem.splice(index,1);
   console.log("after deleteitem",deleteItem)
   setProduct(deleteItem)

  }

  
  return (
    <div>
      <h1>lets code tamil</h1>
      <input type='text'
        placeholder='search here'
        onChange={(e)=>{
          setSearch(e.target.value)
        }}
        />
        <button onClick={edit}>edit</button>
        <button onClick={delet}> delete</button>
       {/* {  product.filter((item)=>{
        if(search==""){
            return item}
            else if(item.name.toLowerCase().includes(search.toLowerCase())){
              return item;
            }

      })
     .map((item)=>{
        return( */}
            <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
        {  product.filter((item)=>{
        if(search==""){
            return item}
            else if(item.name.toLowerCase().includes(search.toLowerCase())){
              return item;
            }

      })
     .map((item)=>{
        return(
          <tr key={item.id}>
          <td>{item.name}</td>
          <td>{item.price}</td>
        </tr>
        )
     })
    }
          {/* {product.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.price}</td>
            </tr>
          ))} */}
        </tbody>
      </Table>
     <h2>Data Table</h2>
      {/* <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {product.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
           */}
    </div>
  )
}

export default App

