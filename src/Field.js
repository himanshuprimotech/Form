import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
import Button from "@mui/material/Button";

const Field = () => {
  const [formValues, setFormValues] = useState({
    user: {
      value: "",
      error: false,
      errorMessage: "Please Enter your username",
    },
    pass: {
      value: "",
      error: false,
      errorMessage: "Please Enter Your Password First ",
    },
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues({
      ...formValues,
      [name]:{
        ...formValues[name],
        value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const formFields = Object.keys(formValues);
    let newFormValues = {...formValues}

    for (let index = 0; index < formFields.length; index++) {
      const currentField = formFields[index];
      const currentValue = formValues[currentField].value;

      if(currentValue === ''){
        newFormValues = {
          ...newFormValues,
          [currentField]:{
            ...newFormValues[currentField],
            error:true
          }
        }
      }

    }

    setFormValues(newFormValues)
  }
  
  return (
    <>
      <Wrapper>
        <div className="container">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <TextField
              className="hello"
              id="outlined-basic"
              name="user"
              label="Username"
              placeholder="Enter Your Username"
              variant="outlined"
              onChange={handleChange}
              value={formValues.user.value}
              error={formValues.user.error}
              helperText={formValues.user.error && formValues.user.errorMessage}
              fullWidth
              required
            />

            <TextField
              className="hello"
              id="outlined-basic1"
              name="pass"
              label="Password"
              placeholder="Enter Your Password"
              variant="outlined"
              type="password"
              onChange={handleChange}
              value={formValues.pass.value}
              error={formValues.pass.error}
              helperText={formValues.pass.error && formValues.pass.errorMessage}
              fullWidth
              required
            />

            <Button variant="contained" type="submit">
              Submit
            </Button>
          </form>
        </div>
      </Wrapper>
    </>
  );
};

export default Field;

const Wrapper = styled.section`
  .hello {
    margin-bottom: 20px;
  }
`;
