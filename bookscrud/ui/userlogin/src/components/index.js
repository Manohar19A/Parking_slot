import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import axios from "axios";
import moment from 'moment'
// import TextErr from "./TextErr"
import TextErr from "./TextErr";
import { useNavigate } from "react-router-dom";
// import useProducts from "./products";
const Forms = () => {
    const navigate = useNavigate();
    const[data,setData]=useState([])
  const initialValues = {
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    number: "",
    username: "",
    gender: "",
    dob: "",
    password: "",
    changepassword: ""
  };
  const handleSubmit = (values) => {
    
    console.log(values);
    axios.post('http://localhost:9000/book',values).then((res)=>{
        console.log({message:'User created',status:200});

        navigate("/");
    })
    .catch((err)=>{
        console.log(err);
    })
    
  };
  useEffect(()=>{
    axios.get('http://localhost:9000/books').then((res)=>{
        console.log(res.data);
        setData(res.data)
    })
  },[])
  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required!"),
    lastName: Yup.string().required("Required!"),
    username: Yup.string().test(
        "username",
        "UserName already exist",
        (dat)=> data.map((item)=> item.username === dat)
    ).required("Required!"),
   dob: Yup.string()
.required("DOB is Required")
.test(
  "DOB",
  "Please choose a valid date of birth",
  (date) => moment().diff(moment(date),"years") >= 18
),
    gender: Yup.string().required("Required!"),
    password: Yup.string().required("This field is required"),
    changepassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
    email: Yup.string().email("Invalid Email").required("Required!"),
    number: Yup.string().matches(/^[6-9]\d{9}$/, {
      message: "Please enter Valid Mobile Number",
      excludeEmptyString: false
    }).required("Required"),

    address: Yup.string().required("required!")
    // cars: Yup.string().required("required!")
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <label>FirstName : </label>
        <Field type="text" name="firstName" />
        <ErrorMessage name="firstName" component={TextErr} />
        <br />
        <br />
        <label>lastName : </label>
        <Field type="text" name="lastName" />
        <ErrorMessage name="lastName" component={TextErr} />
        <br />
        <br />
        <label>username : </label>
        <Field type="text" name="username" />
        <ErrorMessage name="username" component={TextErr} />
        <br />
        <br />
        <label>dob : </label>
        <Field type="text" name="dob" />
        <ErrorMessage name="dob" component={TextErr} />
        <br />
        <br />
        <label>Gender: </label>
        <Field type="text" name="gender" />
        <ErrorMessage name="gender" component={TextErr} />
        {/* <Field name="cars" as="select">
          <option value="">Select</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </Field>
        <ErrorMessage name="cars">
          {(err) => <div style={{ color: "red" }}>{err}</div>}
        </ErrorMessage> */}
        <br />
        <br />
        <label>Email : </label>
        <Field type="email" name="email" />
        <ErrorMessage name="email">
          {(err) => <div style={{ color: "red" }}>{err}</div>}
        </ErrorMessage>

        <br />
        <br />
        <label>Password : </label>
        <Field type="password" name="password" />
        <ErrorMessage name="email">
          {(err) => <div style={{ color: "red" }}>{err}</div>}
        </ErrorMessage>
        <br />
        <br />
        <label>ConfirmPassword : </label>
        <Field type="password" name="changepassword" />
        <ErrorMessage name="changepassword">
          {(err) => <div style={{ color: "red" }}>{err}</div>}
        </ErrorMessage>
        <br />
        <br />
        <label>Mobile: </label>
        <Field type="number" name="number" />
        <ErrorMessage name="number">
          {(err) => <div style={{ color: "red" }}>{err}</div>}
        </ErrorMessage>
        {/* <br />
        <br /> */}
        {/* <label>Comment:</label>
        <Field as="textarea" type="text" name="comment" />
        <ErrorMessage name="comment" /> */}
        <br />
        <br />
        <label>Address :</label>
        <Field name="address">
          {(props) => {
            // console.log(props);
            const { field, form, meta } = props;
            return (
              <div>
                <input name="address" type="text" {...field} />
                {meta.touched && meta.error ? (
                  <div style={{ color: "red" }}>{meta.error}</div>
                ) : null}
              </div>
            );
          }}
        </Field>
        <br />
        <br />
        {/* <label>Facebook:</label>
        <Field type="text" name="social.facebook" /> */}
        {/* <br />
        <br /> */}
        {/* <label>Twitter:</label>
        <Field type="text" name="social.twitter" /> */}
        {/* <br />
        <br /> */}
        {/* <label>Primary Number:</label>
        <Field type="text" name="phoneNumbers" /> */}
        {/* <br />
        <br /> */}
        {/* <label>SecondaryNumber:</label>
        <Field type="text" name="phoneNumbers[1]" /> */}
        {/* <br />
        <br /> */}
        {/* <label>Numbres:</label>
        <FieldArray name="phNumbers">
          {(fieldArrayprops) => {
            console.log("Fieldarrayprops", fieldArrayprops);
            const { form, push, remove } = fieldArrayprops;
            const { values } = form;
            const { phNumbers } = values;

            return (
              <div>
                {phNumbers.map((phNumber, index) => (
                  <div>
                    <Field name={`phNumbers[${index}]`} />
                    {index > 0 && (
                      <button type="button" onClick={() => remove(index)}>
                        -
                      </button>
                    )}

                    <button type="button" onClick={() => push("")}>
                      +
                    </button>
                  </div>
                ))}
              </div>
            );
          }}
        </FieldArray> */}

        <button type="submit">onSubmit</button>
      </Form>
    </Formik>
  );
};
export default Forms;
