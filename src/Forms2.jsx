
  //  if (name === 'username')
  //     {
  //       return{
  //         username : value,
  //         password : prevalue.password,
  //         email : prevalue.email
  //       }
  //     }
  //     else if (name === 'password') {
  //       return{
  //         password : value,
  //         username : prevalue.username,
  //         email : prevalue.email

  //       }
  //     }
  //     else if ( name === 'email')
  //     {
  //         return{
  //           email : value,
  //           username : prevalue.username,
  //           password : prevalue.password

  //         }
  //     }

import React, { useState } from "react";


const Forms2 = () => {
  //creating object in useState.
  const [info, setfullinfo] = useState({
    username: "",
    password: "",
    email: "",
    number: "",
  });
 
  
  //another useState
  const [submitInfo, setsubmitInfo] = useState({});

  const inputEvent = (event) => {
    console.log(event.target.value);

    const { value, name } = event.target;

    setfullinfo((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };

    });
  };
  return (
    <>
      <div className="form">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setsubmitInfo(info);
          }}
        >
          <h1 className="Text">
            
            Hello
            <span className="data">
              {submitInfo.username} {submitInfo.password} <br />{" "}
              {submitInfo.email} <br /> {submitInfo.number}{" "}
            </span>
          </h1>

          {/* username */}
          <input
            className="input"
            type=""
            size="30"
            placeholder="Enter Username Here"
            name="username"
            onChange={inputEvent}
            value={info.username}
          />

          <br />
          {/* Password */}
          <input
            className="input2"
            type="password"
            size="30"
            placeholder="Enter Password"
            name="password"
            onChange={inputEvent}
            value={info.password}
          />

          <br />

          {/* email */}
          <input
            className="input2"
            type="email"
            size="30"
            placeholder="Enter Email"
            name="email"
            onChange={inputEvent}
            value={info.email}
            autoComplete="off"
          />
          <br />

          {/* number */}
          <input
            className="input2"
            type="number"
            size="30"
            placeholder="Enter Number"
            name="number"
            onChange={inputEvent}
            value={info.number}
            autoComplete="off"
          />
          <br />
          <button className="btn">Submit</button>
        </form>
      </div>
    </>
  );
};

export { Forms2 };
