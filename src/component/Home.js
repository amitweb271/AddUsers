import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";

const Home = () => {
  const [users, setUsers] = useState([]);
  const fetchusers = async () => {
    const resusers = await axios.get("http://13.232.117.163:4000/fetchusers");
    setUsers(resusers.data.data);
  };

  useEffect(() => {
    fetchusers();
  }, []);



  return (
    <>
      
      <div className="pt-6">
        <button className="bg-blue-500  text-white text-center float-right py-2 px-3 border rounded shadow-xl min-h-[50px]">
          <Link to="/add" className="w-full  py-2 px-2 block">
            Add user
          </Link>
        </button>

        <div className="grid grid-cols-12 mt-[4rem] mb-3 select-none">
          <div className="bg-blue-500  text-white text-center py-2 px-3 border rounded shadow-xl min-h-[50px]">
            Sr no
          </div>
          <div className="bg-blue-500  text-white text-center py-2 px-3 border rounded shadow-xl min-h-[50px] col-span-2">
            First Name
          </div>
          <div className="bg-blue-500  text-white text-center py-2 px-3 border rounded shadow-xl min-h-[50px] col-span-2">
            Last Name
          </div>
          <div className="bg-blue-500  text-white text-center py-2 px-3 border rounded shadow-xl min-h-[50px]">
            Age
          </div>
          <div className="bg-blue-500  text-white text-center py-2 px-3 border rounded shadow-xl min-h-[50px] col-span-3">
            Email
          </div>
          <div className="bg-blue-500  text-white text-center py-2 px-3 border rounded shadow-xl min-h-[50px]">
            Contact No
          </div>
          <div className="bg-blue-500  text-white text-center py-2 px-3 border rounded shadow-xl min-h-[50px]">
            Update
          </div>
          <div className="bg-blue-500  text-white text-center py-2 px-3 border rounded shadow-xl min-h-[50px]">
            Delete
          </div>
        </div>
        {users === undefined || users === [] ? (
          <>No data available</>
        ) : (
          users.map((user, index) => {
            return (
              <div className="grid grid-cols-12 mb-1" key={index}>
                <div className="text-[rgb(50,50,50)] py-2 mr-1 text-center border-[0.1rem] border-[rgb(180,180,180)] font-bold rounded">
                  {index + 1}
                </div>
                <div className="text-[rgb(50,50,50)] py-2 mr-1 text-center border-[0.1rem] border-[rgb(180,180,180)] font-bold rounded col-span-2">
                  {user.firstname}
                </div>
                <div className="text-[rgb(50,50,50)] py-2 mr-1 text-center border-[0.1rem] border-[rgb(180,180,180)] font-bold rounded col-span-2">
                  {user.lastname}
                </div>
                <div className="text-[rgb(50,50,50)] py-2 mr-1 text-center border-[0.1rem] border-[rgb(180,180,180)] font-bold rounded">
                  {user.age}
                </div>
                <div className="text-[rgb(50,50,50)] py-2 mr-1 text-center border-[0.1rem] border-[rgb(180,180,180)] font-bold rounded col-span-3">
                  {user.email}
                </div>
                <div className="text-[rgb(50,50,50)] py-2 mr-1 text-center border-[0.1rem] border-[rgb(180,180,180)] font-bold rounded">
                  {user.phoneNumber}
                </div>
                <div className="text-[rgb(50,50,50)] mr-1 text-center">
                  <Link to="/update">
                    <button
                      className=" border-[0.1rem] border-transparent w-full text-blue-500 h-full py-1 text-center px-5 rounded hover:bg-white hover:border-[0.1rem] hover:border-blue-500 hover:text-blue-500"
                      onClick={() => {
                        localStorage.setItem("email", user.email);
                      }}
                    >
                      <FiEdit className="text-blue-500 inline mr-1mb-1" />
                      Edit
                    </button>
                  </Link>
                </div>
                <div className="text-blue-500 text-center">
                  <button
                    className="border-[0.1rem] w-full h-full border-transparent py-1 text-blue-500 text-center px-1 rounded  hover:bg-white hover:border-[0.1rem] hover:border-blue-500 hover:text-blue-500"
                  >
                    <RiDeleteBinLine className="text-blue-500 inline mr-1 mb-1" />
                    Delete
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default Home;
