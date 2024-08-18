import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const ViewallUsers = () => {
const [info,changeInfo]=useState(
    {
        "page": 1,
        "per_page": 6,
        "total": 12,
        "total_pages": 2,
        "data": [{}],
    }
)
const fetchDataFromApi=()=>{
    axios.get("https://reqres.in/api/users?page=1").then(
        (response)=>{
            changeInfo(response.data)
        }
    ).catch()
}
useEffect(()=>{fetchDataFromApi()},[])
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Avatar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    info.data.map(
                                        (value,index)=>{
                                            return <tr>
                                            <th scope="row">{value.id}</th>
                                            <td>{value.first_name}</td>
                                            <td>{value.last_name}</td>
                                            <td>{value.email}</td>
                                            <td><img src={value.avatar} alt="image"/></td>
                                        </tr>
                                        }
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewallUsers
