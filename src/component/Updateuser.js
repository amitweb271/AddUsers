import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Updateuser = (props) => {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [contactno, setContactno] = useState("");
  const [password, setPassword] = useState("");
  const [existemail, setExistemail] = useState("");
  //Validation

  const [vfname, setVfname] = useState("");
  const [vlname, setVlname] = useState("");
  const [vage, setVage] = useState("");
  const [vemail, setVemail] = useState("");
  const [vcontactno, setVcontactno] = useState("");
  const [setVpassword] = useState("");

  const fetchUser = async () => {
    try {
      const resfetchsuer = await axios.get(
        "http://13.232.117.163:4000/fetchusers"
      );
      setUsers(resfetchsuer.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  const updateuser = async () => {
    try {
      const resadduser = await axios.post("http://13.232.117.163:4000/update", {
        firstname: fname,
        lastname: lname,
        age: age,
        email: email,
        phoneNumber: contactno,
        password: password,
      });
      setExistemail(resadduser.data.success);
      resadduser.data.success
        ? setVemail("")
        : setVemail(resadduser.data.message);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (existemail) {
      navigate("/");
    }
  }, [existemail, navigate]);

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    users.map((user) => {
      if (user.email === localStorage.getItem("email")) {
        setFname(user.firstname);
        setLname(user.lastname);
        setAge(user.age);
        setEmail(user.email);
        setContactno(user.phoneNumber);
        setPassword(user.password);
        console.log("Right");
      }
      return null;
    });
  }, [users]);

  const btn_updateuser = (e) => {
    let phonepattern = /^\d{10}$/;
    let agepattern = /^\d{0,3}$/;
    if (
      fname.length > 0 &&
      lname.length > 0 &&
      agepattern.test(age) &&
      email.length > 0 &&
      phonepattern.test(contactno)
    ) {
      updateuser();
      props.setRespopup(true);
      props.setMsg("Record updated successfully");
    }
    e.preventDefault();
    fname.length > 0 ? setVfname("") : setVfname("Please enter first name");
    lname.length > 0 ? setVlname("") : setVlname("Please enter last name");
    agepattern.test(age) ? setVage("") : setVage("Please enter valid age");
    email.length > 0 ? setVemail("") : setVemail("Please enter email");
    phonepattern.test(contactno)
      ? setVcontactno("")
      : setVcontactno("Please enter valid contact number");
    password.length > 0
      ? setVpassword("")
      : setVpassword("Please enter password");
  };

  return (
    <div className="grid grid-cols-3 mx-[10rem] mt-[5rem]">

      <div className=" px-5 w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          First Name
        </label>
        <input
          className="appearance-none block w-full text-gray-700 border border-red-500 rounded w-full h-12 mb-2 pl-3 text-lg leading-tight focus:outline-none focus:bg-white"
          placeholder="First Name"
          value={fname}
          onChange={(e) => {
            setFname(e.target.value);
          }}
        />
        <p className="text-red-500 text-xs italic">{vfname}</p>
      </div>
      <div className=" px-5 w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          Last Name
        </label>
        <input
          className="appearance-none block w-full text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          placeholder="Last Name"
          value={lname}
          onChange={(e) => {
            setLname(e.target.value);
          }}
        />
        <p className="text-red-500 text-xs italic">{vlname}</p>
      </div>
      <div className=" px-5 w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          Email
        </label>
        <input
          className="appearance-none block w-full text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <p className="text-red-500 text-xs italic">{vemail}</p>
      </div>
      <div className=" px-5 w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          Contact
        </label>
        <input
          className="appearance-none block w-full text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          placeholder="Contact no"
          type="number"
          value={contactno}
          onChange={(e) => {
            setContactno(e.target.value);
          }}
        />
      </div>
      <div className=" px-5 w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <p className="text-red-500 text-xs italic">{vcontactno}</p>
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          Age
        </label>
        <input
          className="appearance-none block w-full text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          placeholder="Age"
          type="number"
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        <p className="text-red-500 text-xs italic">{vage}</p>
      </div>

      <button
        className=" bg-blue-500 flex justify-center py-2  px-3 text-white block mx-auto mt-2 rounded col-span-2 mt-[5rem]"
        onClick={btn_updateuser}
      >
        Update user
      </button>
    </div>
  );
};

export default Updateuser;
