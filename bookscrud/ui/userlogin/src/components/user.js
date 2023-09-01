
import React, { useEffect, useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
import axios from "axios";
// import moment from "moment";
import TextErr from "./TextErr";

const User = () => {
  const inputRef = useRef(null);
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');

  let userData = JSON.parse(sessionStorage.getItem("userdata"));
  const [data, setData] = useState([]);
  console.log(userData);
  useEffect(() => {
    axios
      .get(`http://localhost:9000/books/${userData.username}`)
      .then((res) => {
        console.log(res.data);
        console.log(res.data[0].firstname);
        console.log(res.data.number);
        console.log(res.data.confirmpassword);
        console.log(res.data.dob);
        setFirstname(res.data.firstname);
        setLastname(res.data.lastname);
        setAddress(res.data.address);
        setNumber(res.data.number);
        setEmail(res.data.email);
        setGender(res.data.gender);
        setDob(res.data.dob);
        setUsername(res.data.username);
        setPassword(res.data.password);
        setConfirmpassword(res.data.confirmpassword);

        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // const validationSchema = Yup.object({
  //   firstname: Yup.string().required("Required!"),
  //   lastname: Yup.string().required("Required!"),
  //   username: Yup.string()
  //     .test("username", "UserName already exist", (dat) =>
  //       data.map((item) => item.username === dat)
  //     )
  //     .required("Required!"),
  //   dob: Yup.string()
  //     .required("DOB is Required")
  //     .test(
  //       "DOB",
  //       "Please choose a valid date of birth",
  //       (date) => moment().diff(moment(date), "years") >= 18
  //     ),
  //   gender: Yup.string().required("Required!"),
  //   password: Yup.string().required("This field is required"),
  //   confirmpassword: Yup.string().oneOf(
  //     [Yup.ref("password"), null],
  //     "Passwords must match"
  //   ),
  //   email: Yup.string().email("Invalid Email").required("Required!"),
  //   number: Yup.string()
  //     .matches(/^[6-9]\d{9}$/, {
  //       message: "Please enter Valid Mobile Number",
  //       excludeEmptyString: false,
  //     })
  //     .required("Required"),

  //   address: Yup.string().required("required!"),
  //   // cars: Yup.string().required("required!")
  // });

  const handleSubmit = async (values) => {
    console.log(values);
    // axios.put('http://localhost:9000/book',values).then((res)=>{
    //     console.log({message:'User created',status:200});

    //     // navigate("/");
    // })
    // .catch((err)=>{
    //     console.log(err);
    // })
    try {
      await axios.put(`http://localhost:9000/books/${userData.username}`, {
        firstname,
        lastname,
        address,
        number,
        email,
        gender,
        dob,
        username,
        password,
        confirmpassword,
      });
    } catch (err) {
      console.log(err);
    }
  };

  console.log(data.firstname);

  const initialValues = {
    firstname:
    lastname,
    address,
    email,
    number,
    username,
    gender,
    dob,
    password,
    confirmpassword
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
    // validationSchema={validationSchema}
    >
      <Form>
        <label>First Name : </label>
        <Field
          type="text"
          name="firstname"
          value={firstname}
          onChange={(e) => {
            setFirstname(e.target.value);
          }}
        />
        <ErrorMessage name="firstname" component={TextErr} />
        <br />
        <br />
        <label>Last Name : </label>
        <Field
          type="text"
          name="lastname"
          value={lastname}
          onChange={(e) => {
            setLastname(e.target.value);
          }}
        />
        <ErrorMessage name="lastname" component={TextErr} />
        <br />
        <br />
        <label>User Name : </label>
        <Field
          type="text"
          name="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <ErrorMessage name="username" component={TextErr} />
        <br />
        <br />
        <label>Date of Birth : </label>
        <Field
          type="text"
          name="dob"
          value={dob}
          onChange={(e) => {
            setDob(e.target.value);
          }}
        />
        <ErrorMessage name="dob" component={TextErr} />
        <br />
        <br />
        <label>Gender : </label>
        <Field
          type="text"
          name="gender"
          value={gender}
          onChange={(e) => {
            setGender(e.target.value);
          }}
        />
        <ErrorMessage name="gender" component={TextErr} />
        <br />
        <br />
        <label>Email : </label>
        <Field
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <ErrorMessage name="email">
          {(err) => <div style={{ color: "red" }}>{err}</div>}
        </ErrorMessage>

        <br />
        <br />
        <label>Password : </label>
        <Field
          type="password"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <ErrorMessage name="password">
          {(err) => <div style={{ color: "red" }}>{err}</div>}
        </ErrorMessage>
        <br />
        <br />
        <label>Confirm Password : </label>
        <Field
          type="password"
          name="confirmpassword"
          value={confirmpassword}
          onChange={(e) => {
            setConfirmpassword(e.target.value);
          }}
        />
        <ErrorMessage name="confirmpassword">
          {(err) => <div style={{ color: "red" }}>{err}</div>}
        </ErrorMessage>
        <br />
        <br />
        <label>Mobile : </label>
        <Field
          type="number"
          name="number"
          value={number}
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
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
            const { field, meta } = props;
            return (
              <div>
                <input
                  name="address"
                  type="text"
                  {...field}
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />
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

export default User;

// import React, { useEffect, useState } from "react";
// import { Card, Form, Row, Col, InputGroup, Button } from "react-bootstrap";
// import axios from "../../../Uri";
// import { toast } from "react-toastify";

// function PersonalDetailsTab() {

//     // const userData = sessionStorage.getItem("userdata");
//     // const userData1 = JSON.parse(userData);
//     // const employeeid = userData1.data.employeeId;

//     const userData = sessionStorage.getItem("userdata");
//     const userData1 = JSON.parse(userData);
//     const employeeid = userData1.data.employeeId;
//     const empId = localStorage.getItem('item')

//     const payload = {
//         employeeId,
//         firstName,
//         lastName,
//         middleName,
//         dateOfBirth,
//         primaryPhoneNumber,
//         secondaryPhoneNumber,
//         email,
//         primarySkills,
//         secondarySkills,
//         bloodGroup,
//         gender,
//         maritalStatus,
//     }

//     const [ferrors, setFErrors] = useState("");
//     const [serror, setSerror] = useState("");
//     const [thirderrors, setThirdErrors] = useState("");
//     const [fourerror, setFourerror] = useState("");
//     const [fiveerrors, setFiveErrors] = useState("");
//     const [sixerror, setSixerror] = useState("");
//     const [sevenerrors, setSevenErrors] = useState("");
//     const [eighterror, setEighterror] = useState("");
//     const [nineerrors, setNineErrors] = useState("");
//     const [tenerror, setTenerror] = useState("");

//     const [firstName, setFirstName] = useState("");
//     const [lastName, setLastName] = useState("");
//     const [middleName, setMiddleName] = useState(" ");
//     const [primaryPhoneNumber, setPrimaryPhoneNumber] = useState(" ");
//     const [secondaryPhoneNumber, setSecondaryPhone] = useState("");
//     const [dateOfBirth, setDateOfBirth] = useState("");
//     const [employeeId, setEmployeeId] = useState("");
//     const [primarySkills, setPrimarySkills] = useState("");
//     const [secondarySkills, setSecondarySkills] = useState("");
//     const [email, setEmail] = useState("");
//     const [bloodGroup, setBloodGroup] = useState("");
//     const [gender, setGender] = useState("");
//     const [maritalStatus, setMaritalStatus] = useState("");
//     const [dateOfJoining, setDateOfJoining] = useState("");

//     useEffect(() => {
//         axios
//             .get(`/emp/getPersonalDetails/${empId}`)
//             .then((response) => {
//                 setEmployeeId(response.data.data.employeeId);
//                 setFirstName(response.data.data.firstName);
//                 setLastName(response.data.data.lastName);
//                 setSecondaryPhone(response.data.data.secondaryPhoneNumber);
//                 setEmployeeId(response.data.data.employeeId);
//                 setFirstName(response.data.data.firstName);
//                 setMiddleName(response.data.data.middleName);
//                 setLastName(response.data.data.lastName);
//                 setPrimaryPhoneNumber(response.data.data.primaryPhoneNumber);
//                 setSecondaryPhone(response.data.data.secondaryPhoneNumber);
//                 setEmail(response.data.data.email);
//                 setDateOfBirth(response.data.data.dateOfBirth);
//                 setBloodGroup(response.data.data.bloodGroup);
//                 setGender(response.data.data.gender);
//                 setMaritalStatus(response.data.data.maritalStatus);

//             });
//     }, []);

//     const changeHandler = async (e) => {
//         e.preventDefault();
//         try{
//         await axios.put(`/emp/updatePersonalDetails/${empId}`, {
//             employeeId,
//             firstName,
//             lastName,
//             middleName,
//             dateOfBirth,
//             primaryPhoneNumber,
//             secondaryPhoneNumber,
//             email,
//             primarySkills,
//             secondarySkills,
//             bloodGroup,
//             gender,
//             maritalStatus
//         });
//         toast.success("Form Submitted Successfully");
//     }
//         catch (error) {
//             toast.error("Somethingwent Wrong");
//     }
//     };

//     return (

//         <div>
//             {/* <Card style={{ marginLeft: 8, marginRight: 8, marginTop: 0, backgroundColor: "#FAFDD0" }}>
//                 <Card.Title style={{ margin: 12, textAlign: "center" }}>
//                     Personal Details
//                 </Card.Title>
//             </Card> */}

//             <Form
//                 onSubmit={(e) => changeHandler(e)}
//                 style={{ padding: 10 }}
//             >
//                 <Row className="mb-5">
//                     <Form.Group
//                         as={Col}
//                         className="mb-3"
//                         md="6"
//                         controlId="formBasicEmail"
//                     >
//                         <Form.Label>First Name *</Form.Label>
//                         <Form.Control
//                             value={firstName}
//                             disabled
//                             required
//                             maxLength={50}
//                             onChange={(e) => {
//                                 setFirstName(e.target.value);
//                             }}
//                             type="text"
//                             placeholder="Enter Name"
//                             isInvalid={ferrors}
//                         />
//                         <Form.Control.Feedback type="invalid">
//                             {ferrors}
//                         </Form.Control.Feedback>
//                     </Form.Group>

//                     <Form.Group as={Col} md="6" style={{ paddingLeft: 10 }}>
//                         <Form.Label>Middle name</Form.Label>
//                         <Form.Control
//                         disabled
//                             name="middleName"
//                             type="text"
//                             placeholder="Middle name"
//                             maxLength={50}
//                             value={middleName}
//                             onChange={(e) => {

//                                 setMiddleName(e.target.value);
//                             }}
//                         />
//                     </Form.Group>
//                     <Form.Group
//                         as={Col}
//                         className="mb-3"
//                         md="6"
//                         controlId="formBasicEmail"
//                     >
//                         <Form.Label>Last Name *</Form.Label>
//                         <Form.Control
//                             value={lastName}
//                             disabled
//                             required
//                             maxLength={50}
//                             onChange={(e) => {
//                                 if (firstName == "") {
//                                     setFErrors("First Name is required")
//                                 }
//                                 else {
//                                     setFErrors("")
//                                 }
//                                 setLastName(e.target.value);
//                             }}
//                             isInvalid={serror}
//                             type="text"
//                             placeholder="Enter Name"
//                         />
//                         <Form.Control.Feedback type="invalid">
//                             {serror}
//                         </Form.Control.Feedback>
//                     </Form.Group>

//                     <Form.Group as={Col} md="6" style={{ paddingLeft: 10 }}>
//                         <Form.Label>Phone Number *</Form.Label>
//                         <InputGroup>
//                             <InputGroup.Text id="inputGroupPrepend">
//                                 +91
//                             </InputGroup.Text>
//                             <Form.Control
//                             disabled
//                                 required
//                                 type="number"
//                                 name="primaryPhoneNumber"
//                                 placeholder="phone Number"
//                                 maxLength={10}
//                                 value={primaryPhoneNumber}
//                                 onChange={(e) => {
//                                     setPrimaryPhoneNumber(e.target.value);
//                                     if (e.target.value.length > 10) {
//                                         setThirdErrors(" Phonenumber length should be 10 characters");;
//                                     }
//                                     if (lastName === "") {
//                                         setSerror("Last Name is Required");
//                                     }
//                                     else {
//                                         setSerror("")
//                                     }
//                                 }}
//                                 isInvalid={thirderrors}
//                             />
//                             <Form.Control.Feedback type="invalid">
//                                 {thirderrors}
//                             </Form.Control.Feedback>
//                         </InputGroup>
//                     </Form.Group>
//                     <Form.Group
//                         as={Col}
//                         className="mb-3"
//                         md="6"
//                         style={{ padding: 10 }}
//                         controlId="formBasicEmail"
//                     >
//                         <Form.Label>Emergency Phone Number </Form.Label>
//                         <InputGroup>
//                             <InputGroup.Text id="inputGroupPrepend">
//                                 +91
//                             </InputGroup.Text>
//                             <Form.Control
//                             disabled
//                                 value={secondaryPhoneNumber}
//                                 maxLength={10}
//                                 isInvalid={nineerrors}
//                                 onChange={(e) => {
//                                     setSecondaryPhone(e.target.value);
//                                     if (e.target.value.length > 10) {
//                                         setNineErrors(" Phonenumber length should be 10 characters");;
//                                     }
//                                 }}
//                                 type="number"
//                                 placeholder="Enter Phone"
//                             />
//                         </InputGroup>
//                         <Form.Control.Feedback type="invalid">
//                             {/* {fourtyseven} */}
//                         </Form.Control.Feedback>
//                     </Form.Group>

//                     <Form.Group as={Col} md="6" style={{ padding: 10 }}>
//                         <Form.Label>Email *</Form.Label>
//                         <Form.Control
//                         disabled
//                             required
//                             type="email"
//                             placeholder="Email"
//                             value={email}
//                             isInvalid={fourerror}
//                             onChange={(e) => {
//                                 if (primaryPhoneNumber === "") {
//                                     setThirdErrors("Phone Number is Required");
//                                 }
//                                 else {
//                                     setThirdErrors("")
//                                 }
//                                 setEmail(e.target.value);
//                             }}
//                         />
//                         <Form.Control.Feedback type="invalid">
//                             {fourerror}
//                         </Form.Control.Feedback>
//                     </Form.Group>

//                     <Form.Group as={Col} md="6" style={{ padding: 10 }}>
//                         <Form.Label>Date of Birth *</Form.Label>
//                         <Form.Control
//                         disabled
//                             required
//                             type="date"
//                             name="dateOfBirth"
//                             placeholder="DOB"
//                             controlId="dateOfBirth"
//                             value={dateOfBirth}
//                             isInvalid={fiveerrors}
//                             onChange={(e) => {
//                                 setDateOfBirth(e.target.value);
//                                 if (email === "") {
//                                     setFourerror("Email is Required");
//                                 }
//                                 else {
//                                     setFourerror("")
//                                 }
//                                 setDateOfBirth(e.target.value);
//                             }}
//                         ></Form.Control>
//                         <Form.Control.Feedback type="invalid">
//                             {fiveerrors}
//                         </Form.Control.Feedback>
//                     </Form.Group>

//                     <Form.Group as={Col} md="6" style={{ padding: 10 }}>
//                         <Form.Label>Blood Group *</Form.Label>
//                         <Form.Select
//                         disabled
//                             required
//                             type="text"
//                             name="bloodGroup"
//                             placeholder="Blood Group "
//                             controlId="bloodGroup"
//                             isInvalid={sixerror}
//                             value={bloodGroup}

//                             onChange={(e) => {
//                                 setBloodGroup(e.target.value);
//                                 if (dateOfBirth === "") {
//                                     setFiveErrors("Email is Required");
//                                 }
//                                 else {
//                                     setFiveErrors("")
//                                 }
//                             }}
//                         >
//                             <option>Select</option>
//                             <option value="A+">A+</option>
//                             <option value="A-">A-</option>
//                             <option value="B+">B+</option>
//                             <option value="B-">B-</option>
//                             <option value="AB+">AB+</option>
//                             <option value="AB-">AB-</option>
//                             <option value="O+">O+</option>
//                             <option value="O-">O-</option>
//                         </Form.Select>
//                         <Form.Control.Feedback type="invalid">
//                             {sixerror}
//                         </Form.Control.Feedback>
//                     </Form.Group>
//                     <Form.Group as={Col} md="6" style={{ padding: 10 }}>
//                         <Form.Label>Gender *</Form.Label>
//                         <Form.Select
//                         disabled
//                             required
//                             type="text"
//                             name="gender"
//                             placeholder="Gender "
//                             controlId="gender"
//                             value={gender}
//                             isInvalid={sevenerrors}
//                             onChange={(e) => {
//                                 setGender(e.target.value);
//                                 if (bloodGroup === "") {
//                                     setSixerror(" Blood group is Required");
//                                 }
//                                 else {
//                                     setSixerror("")
//                                 }
//                             }}
//                         >
//                             <option>Select</option>
//                             <option value="Male">Male</option>
//                             <option value="Female">Female</option>
//                             <option value="Other">Other</option>
//                         </Form.Select>
//                         <Form.Control.Feedback type="invalid">
//                             {sevenerrors}
//                         </Form.Control.Feedback>
//                     </Form.Group>
//                     <Form.Group as={Col} md="6" style={{ padding: 10 }}>
//                         <Form.Label>Marital Status *</Form.Label>
//                         <Form.Select
//                         disabled
//                             required
//                             type="text"
//                             name="maritalStatus"
//                             placeholder="Marital Status "
//                             controlId="maritalStatus"
//                             value={maritalStatus}
//                             isInvalid={eighterror}
//                             onChange={(event) => {
//                                 setMaritalStatus(event.target.value)
//                                 if (gender === "") {
//                                     setSevenErrors(" Gender is Required");
//                                 }
//                                 else {
//                                     setSevenErrors("")
//                                 }
//                             }}
//                         >
//                             <option>Select</option>
//                             <option value="Single">Single</option>
//                             <option value="Married">Married</option>
//                             <option value="Diverced">Other</option>
//                         </Form.Select>
//                         <Form.Control.Feedback type="invalid">
//                             {eighterror}
//                         </Form.Control.Feedback>
//                     </Form.Group>

//                     <Row>

//                     </Row>

//                 </Row>
//                 <Button
//                     className="rounded-pill" md="3"
//                     style={{ backgroundColor: "#eb4509", float: "right" }}
//                     type="submit"
//                     size="lg"
//                 >
//                     Submit
//                 </Button>
//             </Form>
//         </div>
//     )
// }
// export default PersonalDetailsTab;