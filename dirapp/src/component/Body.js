import { useState } from "react";
import data from "../data.json"

const Body = () => {
    const [currentData, setCurrentData]= useState(data)
    const urlPics ="https://randomuser.me/api/portraits";
   
   const  handleInputChange = (event)=>{
       const typedValue = event.target.value.toLowerCase();
       const filteredItem = data.filter((item,index)=>{
           const record = `${item.name}${item.phone} ${item.email} ${item.DOB}`.toLowerCase();
        return record.includes(typedValue) 
       });
       setCurrentData(filteredItem);
    }

    return <div>
        <div className="search-main">
            <input placeholder="search"
            
                onChange={handleInputChange}/>
        </div>
        <div className="table-main">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">DOB</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        currentData.map((item, index) => {
                            return <tr key={index}>
                                <td><img src={`${urlPics}${item.image}`} className="profile-pic" alt=""/></td>
                                <td>{item.name}</td>
                                <td>{item.phone}</td>
                                <td>{item.email} </td>
                                <td>{item.DOB} </td>
                            </tr>
                        })
                    }

                </tbody>
            </table>
        </div>
    </div>
}
export default Body;