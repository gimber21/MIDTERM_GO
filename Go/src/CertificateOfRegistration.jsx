import React, { useEffect, useState, } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import FreeTuitionImage from "./assets/FreeTuition.png";
import EaristLogo from "./assets/EaristLogo.png";
import Idpic from "./assets/Idpicture.jpg";
import Signature from "./assets/registrarsig.png";


const CertificateOfRegistration = () => {
  const getEmployeeNumFromToken = () => {
    const token = localStorage.getItem("token"); // Get token from localStorage
    if (token) {
      const decoded = jwtDecode(token);
      console.log("Decoded Token: ", decoded);
      return decoded.employeeNumber; // Get the employeeNumber
    }
    return null;
  };

  // Store the employeeNumber in a new variable
  const [data, setdata] = useState([]);
  const [data2, setdata2] = useState([]);
  const [data3, setdata3] = useState([]);
  const [data4, setdata4] = useState([]);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [uploadedSignature, setUploadedSignature] = useState(null);
  const [currentDate, setCurrentDate] = useState("");

  // Now filter after initializing the states
  const employeeNum = getEmployeeNumFromToken();

  const filteredData = data.filter((item) => String(item.employeeID) === String(employeeNum));


  useEffect(() => {
    const fetchItems = async () => {
      try {
        const [personalinfoResponse, childrenResponse, vocationalResponse, collegeResponse] = await Promise.all([
          axios.get("http://localhost:5000/personalinfo/person_table"),
          axios.get("http://localhost:5000/childrenAPI/children_table"),
          axios.get("http://localhost:5000/vocationalinfo/vocational_table"),
          axios.get("http://localhost:5000/college/college_table"),
        ]);

        // Set original data
        setdata(personalinfoResponse.data);
        setdata2(childrenResponse.data);
        setdata3(vocationalResponse.data);
        setdata4(collegeResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchItems();
  }, []);

  const handleSignatureUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedSignature(reader.result);
      };
      reader.readAsDataURL(file);
    }
    event.target.value = "";
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    const updateDate = () => {
      const now = new Date();
      const day = String(now.getDate()).padStart(2, "0");
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const year = now.getFullYear();
      const hours = String(now.getHours() % 12 || 12).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      const ampm = now.getHours() >= 12 ? "PM" : "AM";

      const formattedDate = `${month} ${day}, ${year} ${hours}:${minutes}:${seconds} ${ampm}`;
      setCurrentDate(formattedDate);
    };

    updateDate();
    const interval = setInterval(updateDate, 1000);
    return () => clearInterval(interval);
  }, []);

  const containerStyle = {
    width: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    backgroundColor: "#f8f9fa",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: "20px",
    boxSizing: "border-box",
    marginTop: "50px",
    color: "Black",
    overflowY: "scroll",
    
  };

  const contentStyle = {
    color: "black",
    width: "100%",
    maxWidth: "800px",
    paddingBottom: "90px",
  };


  return (

    <div style={containerStyle}>
      <div style={contentStyle}>
        <form
          style={{
            border: "1px solid black",
            padding: "0.25in",
            width: "8in",
            marginBottom: "7%",
            height: "fit-content",
            position: "relative",
          }}
        >
          <table
            style={{
              border: "1px solid black",
              borderCollapse: "collapse",
              fontFamily: "Arial, Helvetica, sans-serif",
              width: "8in",
              position: "relative",
              tableLayout: "fixed",
            }}
          >
            <tbody>
              <tr>
                <td colSpan={2} style={{ height: "0.1in", fontSize: "72.5%" }}>
                  <b>

                  </b>
                </td>
                <td colSpan={1} style={{ height: "0.1in", fontSize: "72.5%" }}></td>
                <td colSpan={1} style={{ height: "0.1in", fontSize: "72.5%" }}></td>
                <td colSpan={1} style={{ height: "0.1in", fontSize: "72.5%" }}></td>
                <td colSpan={1} style={{ height: "0.1in", fontSize: "72.5%" }}></td>
                <td colSpan={1} style={{ height: "0.1in", fontSize: "72.5%" }}></td>
                <td colSpan={1} style={{ height: "0.1in", fontSize: "72.5%" }}></td>
                <td colSpan={1} style={{ height: "0.1in", fontSize: "72.5%" }}></td>
                <td colSpan={1} style={{ height: "0.1in", fontSize: "72.5%" }}></td>
                <td colSpan={1} style={{ height: "0.1in", fontSize: "72.5%" }}></td>
                <td colSpan={1} style={{ height: "0.1in", fontSize: "72.5%" }}></td>
                <td colSpan={1} style={{ height: "0.1in", fontSize: "72.5%" }}></td>
                <td colSpan={1} style={{ height: "0.1in", fontSize: "72.5%" }}></td>
                <td colSpan={1} style={{ height: "0.1in", fontSize: "72.5%" }}></td>
              </tr>
              <tr>
                <td colSpan={2} style={{ height: "0.1in", fontSize: "62.5%" }}>
                  <b>

                  </b>
                </td>
              </tr>
              <tr>

                <td colSpan={395} style={{ height: "0.5in", textAlign: "center" }}>
                  <table width="100%" style={{ borderCollapse: "collapse" }}>
                    <tbody>
                    <tr>
                    <td style={{ width: "20%", textAlign: "left" }}>
                      <img src={EaristLogo} alt="Earist Logo" style={{ marginLeft: "25px", width: "150px", height: "110px" }} />
                    </td>

                    <td style={{ width: "60%", textAlign: "center", lineHeight: "1" }}>
                      <div>Republic of the Philippines</div>
                      <b>Eulogio "Amang" Rodriguez</b><br />
                      <b>Institute of Science and Technology</b><br />
                      Nagtahan St. Sampaloc, Manila<br />
                      <br />
                      <br />
                      <b style={{ fontSize: "16px" }}>CERTIFICATE OF REGISTRATION</b>
                    </td>

                    <td style={{ width: "20%", textAlign: "right" }}>
                      <img src={Idpic} alt="Idpicture" style={{ marginRight: "25px", width: "150px", height: "110px" }} />
                    </td>
                  </tr>
   
                    </tbody>
                  </table>
                </td>

              </tr>
              <tr>
                <td colSpan={15} style={{ height: "0.3in", fontSize: "62.5%" }}>


                </td>
              </tr>
              <tr>
                <td colSpan={150} style={{ height: "0.1in", fontSize: "55%" }}>
                  <i>
                    <b style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', color: "black" }}>
                      Registration No:&nbsp;
                      <span style={{ color: "red" }}>
                      2147483647
                      </span>
                    </b>
                  </i>
                </td>


                <td
                  colSpan={179}
                  style={{
                    height: "0.1in",
                    fontSize: "50%",
                    textAlign: "right",

                  }}
                >
                  <b style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', color: "black" }}>
                    Academic Year/Term : <span style={{ color: "red" }}>Second Semester AY 2024-2025</span>
                  </b>

                </td>
              </tr>
              <tr>
                <td
                  colSpan={395}
                  style={{
                    height: "0.2in",
                    fontSize: "72.5%",
                    backgroundColor: "gray",
                    color: "white",
                  }}
                >
                  <b>
                    <i style={{
                      color: "black", fontFamily: 'Arial, sans-serif',
                      fontSize: '12px', textAlign: "center", display: "block"
                    }}>
                      STUDENT GENERAL INFORMATION
                    </i>
                  </b>
                </td>
              </tr>
              <tr>

              </tr>


              <td
                colSpan={47}
                style={{



                }}
              >
                <input
                  type="text"
                  value={"Student No:"}
                  style={{
                    fontWeight: "bold",
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '12px',
                    color: "black",
                    width: "98%",
                    border: "none",
                    outline: "none",
                    background: "none"
                  }}
                />
              </td>
              <td
                colSpan={120}
                style={{

                  fontSize: "62.5%",

                }}
              >
                <input
                  type="text"
                  value={"234-03134M"}
                  style={{
                    fontFamily: "Arial",
                    color: "black",
                    width: "98%",
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '12px',
                    border: "none",
                    outline: "none",
                    background: "none"
                  }}
                />
              </td>
              <td
                colSpan={35}
                style={{

                  fontSize: "62.5%",

                }}
              >
                <input
                  type="text"
                  value={"College:"}
                  style={{
                    fontWeight: "Bold",
                    color: "black",
                    width: "98%",
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '12px',
                    border: "none",
                    outline: "none",
                    background: "none"
                  }}
                />
              </td>
              <td
                colSpan={86}
                style={{

                  fontSize: "62.5%",

                }}
              >
                <input
                  type="text"
                  value={"College of Computing Studies"}
                  style={{
                    color: "black",
                    width: "98%",
                    border: "none",
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '12px',
                    outline: "none",
                    background: "none"
                  }}
                />
              </td>
              <tr>
                <td
                  colSpan={47}
                  style={{

                    fontSize: "62.5%",

                  }}
                >
                  <input
                    type="text"
                    value={"Name:"}
                    style={{
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      color: "black",
                      fontWeight: "bold",
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={120}
                  style={{
  
                    fontSize: "62.5%",

                  }}
                >
                  <input
                    type="text"
                    value={"GO, SHALIYAH ILY BIROG"}
                    style={{
                      color: "black",
                      width: "98%",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={35}
                  style={{

                    fontSize: "62.5%",

                  }}
                >
                  <input
                    type="text"
                    value={"Program:"}
                    style={{
                      color: "black",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      width: "98%",
                      border: "none",
                      outline: "none",
                      fontWeight: "Bold",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={134}
                  style={{

                    fontSize: "62.5%",

                  }}
                >
                  <input
                    type="text"
                    value={"Bachelor of Science in Information Technology"}
                    style={{
                      color: "black",
                      width: "98%",
                      border: "none",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td
                  colSpan={47}
                  style={{

                    fontSize: "50%",

                  }}
                >
                  <input
                    type="text"
                    value={"Gender :"}
                    style={{
                      fontWeight: "bold",
                      color: "black",
                      width: "98%",
                      border: "none",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={120}
                  style={{
  
                    fontSize: "62.5%",

                  }}
                >
                  <input
                    type="text"
                    value={"Female"}
                    style={{
                      color: "black",
                      width: "98%",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={115}
                  style={{

                    fontSize: "50%",

                  }}
                >
                  <input
                    type="text"
                    value={"Major:"}
                    style={{
                      fontWeight: "bold",
                      color: "black",
                      width: "98%",
                      border: "none",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>

                <td
                  colSpan={69}
                  style={{

                    fontSize: "62.5%",

                  }}
                >
                  <input
                    type="text"
                    value={"Curriculum:"}
                    style={{
                      color: "black",
                      width: "98%",
                      fontWeight: "Bold",
                      border: "none",
                      textAlign: "left",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={36}
                  style={{

                    fontSize: "62.5%",

                  }}
                >
                  <input
                    type="text"
                    value={"2018 - 2019"}
                    style={{
                      color: "black",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      width: "98%",
                      border: "none",
                      textAlign: "left",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>

              </tr>
              <tr>
                <td
                  colSpan={47}
                  style={{

                    fontSize: "50%",

                  }}
                >
                  <input
                    type="text"
                    value={"Age :"}
                    style={{
                      fontWeight: "bold",
                      color: "black",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={120}
                  style={{

                    fontSize: "50%",

                  }}
                >
                  <input
                    type="text"
                    value={"21"}
                    style={{
                      color: "black",
                      width: "98%",
                      border: "none",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={35}
                  style={{

                    fontSize: "50%",

                  }}
                >
                  <input
                    type="text"
                    value={"Year Level:"}
                    style={{
                      fontWeight: "bold",
                      color: "black",
                      width: "98%",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={79}

                  style={{

                    fontSize: "50%",

                  }}
                >
                  <input
                    type="text"
                    value={"Second Year-Regular"}
                    style={{
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      color: "black",
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={114}

                  style={{

                    fontSize: "50%",

                  }}
                >
                  <input
                    type="text"
                    value={"Scholarship/Discount : UNIFAST-FHE"}
                    style={{
                      fontWeight: "bold",
                      color: "black",
                      width: "98%",
                      border: "none",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      outline: "none",
                      background: "none"
                    }}
                  />

                </td>




              </tr>
              <tr>
                <td
                  colSpan={47}
                  style={{

                    fontSize: "50%",

                  }}
                >
                  <input
                    type="text"
                    value={"Email Address:"}
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={67}
                  style={{

                    fontSize: "50%",

                  }}
                >
                  <input
                    type="text"
                    value={"shaliyahily@gmail.com"}
                    style={{
                      color: "black",
                      width: "98%",
                      border: "none",
                      outline: "none",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      background: "none"
                    }}
                  />
                </td>





              </tr>

              <tr>

              </tr>
              <tr>

                <td
                  colSpan={32}
                  rowSpan={2}
                  style={{
                    color: "black",
                    height: "0.3in",
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '12px',
                    fontWeight: "bold",

                    backgroundColor: "gray",
                    border: "1px solid black",
                    textAlign: "center",
                  }}
                >
                  CODE
                </td>
                <td
                  colSpan={162}
                  rowSpan={2}
                  style={{
                    color: "black",
                    height: "0.3in",
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '12px',
                    fontWeight: "bold",

                    backgroundColor: "gray",
                    border: "1px solid black",
                    textAlign: "center",
                  }}
                >
                  SUBJECT TITLE
                </td>

                <td
                  colSpan={44}
                  style={{
                    color: "black",
                    height: "0.3in",
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '12px',
                    fontWeight: "bold",

                    backgroundColor: "gray",
                    border: "1px solid black",
                    textAlign: "center",
                  }}
                >
                  UNIT
                </td>

                <td
                  colSpan={42}
                  rowSpan={2}
                  style={{
                    color: "black",
                    height: "0.3in",
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '12px',
                    fontWeight: "bold",

                    backgroundColor: "gray",
                    border: "1px solid black",
                    textAlign: "center",
                  }}
                >
                  SECTION
                </td>
                <td
                  colSpan={58}
                  rowSpan={2}
                  style={{
                    color: "black",
                    height: "0.3in",
                    fontSize: "12px",
                    fontWeight: "bold",
                    backgroundColor: "gray",
                    border: "1px solid black",
                    textAlign: "center",
                  }}
                >
                  SCHEDULE/ROOM

                </td>
                <td
                  colSpan={57}
                  rowSpan={2}
                  style={{
                    color: "black",
                    height: "0.3in",
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '12px',
                    fontWeight: "bold",

                    backgroundColor: "gray",
                    border: "1px solid black",
                    textAlign: "center",
                  }}
                >
                  FACULTY
                </td>
              </tr>
              <tr>
                <td
                  colSpan={10}
                  style={{
                    color: "black",
                    height: "0.1in",
                    fontSize: "50%",
                    backgroundColor: "gray",
                    border: "1px solid black",
                    textAlign: "center",
                  }}
                >
                  Lec
                </td>

                <td
                  colSpan={10}
                  style={{
                    color: "black",
                    height: "0.1in",
                    fontSize: "50%",
                    backgroundColor: "gray",
                    border: "1px solid black",
                    textAlign: "center",
                  }}
                >
                  Lab
                </td>
                <td
                  colSpan={11}
                  style={{
                    color: "black",
                    height: "0.1in",
                    fontSize: "50%",
                    backgroundColor: "gray",
                    border: "1px solid black",
                    textAlign: "center",
                  }}
                >
                  Credit
                </td>
                <td
                  colSpan={12}
                  style={{
                    color: "black",
                    height: "0.1in",
                    fontSize: "50%",
                    backgroundColor: "gray",
                    border: "1px solid black",
                    textAlign: "center",
                  }}
                >
                  Tuition
                </td>
              </tr>
              {Array.from({ length: 12 }).map((_, index) => {  // change length for rows
                const item = filteredData[index] || {};
                return (
                  <tr key={index}>
                    <td
                      colSpan={32}
                      style={{
                        height: "0.25in",
                        fontSize: "52.5%",
                        border: "1px solid black"
                      }}
                    >
                      <input
                        type="text"
                        value={
                        [
                          "GEPEHEF2",
                          "WEBDVLB2",
                          "DBMSLEC2",
                          "DBMSLAB2",
                          "GEELECCP",
                          "NETWKLC1",
                          "IPATLAB1",
                          "IPATLEC1",
                          "NETWKLB1",
                          "WEBDVLC2",
                          "INTHCILC",
                          "INTHCILB",        
                        ][index]
                        }
                        readOnly
                        style={{
                          color: "black",
                          width: "98%",
                          border: "none",
                          outline: "none",
                          background: "none",
                          fontSize: "0.60rem",
                        }}
                      />
                    </td>
                    <td
                      colSpan={162}
                
                      style={{
                        height: "0.25in",
                        fontSize: "30.5%",
                        border: "1px solid black",
                      }}
                    >
                      <textarea
                        value={
                          [
                            "Physical Activity Towards Health and Fitness II",
                            "Web Development 2 (Laboratory)",
                            "Database Management System (Lecture)",
                            "Database Management System (Laboratory)",
                            "Communicative Proficiency in Business Correspondence and Research Writing",
                            "Networking 1 (Lecture)",
                            "Integrative Programming and Technologies 1 (Laboratory)",
                            "Integrative Programming and Technologies 1 (Lecture)",
                            "Networking 1 (Laboratory)",
                            "Web Development 2 (Lecture)",
                            "Introduction to Human Computer Interaction (Lecture)",
                            "Introduction to Human Computer Interaction (Laboratory)",                                                   
                          ][index]
                        }
                        readOnly
                        style={{
                          color: "black",
                          width: "98%",
                          justifyContent : "left",
                          border: "none",
                          outline: "none",
                          background: "none",
                          resize: "none",
                          fontSize: "0.65rem",
                          
                        }}
                      />
                    </td>
                    <td
                      colSpan={10}
                      style={{
                        height: "0.25in",
                        fontSize: "52.5%",
                        border: "1px solid black"
                      }}
                    >
                      <input
                        type="text"
                        value={
                          [
                            "2",
                            "0",
                            "2",
                            "0",
                            "3",
                            "2",
                            "0",
                            "1",
                            "0",
                            "2",
                            "2",
                            "0",                           
                          ][index]
                        }
                        readOnly
                        style={{
                          color: "black",
                          width: "98%",
                          border: "none",
                          outline: "none",
                          background: "none",
                          textAlign: "center",
                          fontSize: "0.60rem",
                        }}
                      />
                    </td>
                    <td
                      colSpan={10}
                      style={{
                        height: "0.25in",
                        fontSize: "52.5%",
                        border: "1px solid black"
                      }}
                    >
                      <input
                        type="text"
                        value={
                          [
                            "0",
                            "1",
                            "0",
                            "1",
                            "0",
                            "0",
                            "2",
                            "0",
                            "1",
                            "0",
                            "0",
                            "0",    
                          ][index]
                        }
                        readOnly
                        style={{
                          color: "black",
                          width: "98%",
                          border: "none",
                          outline: "none",
                          background: "none",
                          textAlign: "center",
                          fontSize: "0.60rem",
                        }}
                      />
                    </td>
                    <td
                      colSpan={11}
                      style={{
                        height: "0.25in",
                        fontSize: "52.5%",
                        border: "1px solid black"
                      }}
                    >
                      <input
                        type="text"
                        value={
                          [
                            "2",
                            "1",
                            "2",
                            "1",
                            "3",
                            "2",
                            "2",
                            "1",
                            "1",
                            "2",
                            "2",
                            "1", 

                          ][index]
                        }
                        readOnly
                        style={{
                          color: "black",
                          width: "98%",
                          border: "none",
                          outline: "none",
                          background: "none",
                          textAlign: "center",
                          fontSize: "0.60rem", 
                        }}
                      />
                    </td>
                    <td
                      colSpan={13}
                      style={{
                        height: "0.25in",
                        fontSize: "52.5%",
                        border: "1px solid black",
                      }}
                    >
                      <input
                        type="text"
                        value={
                          [
                            "2",
                            "1",
                            "2",
                            "1",
                            "3",
                            "2",
                            "2",
                            "1",
                            "1",
                            "2",
                            "2",
                            "1", 

                          ][index]
                        }
                        readOnly
                        style={{
                          color: "black",
                          width: "98%",
                          border: "none",
                          outline: "none",
                          background: "none",
                          textAlign: "center",
                          fontSize: "0.60rem",
                        }}
                      />
                    </td>
                    <td
                      colSpan={42}
                      style={{
                        height: "0.25in",
                        fontSize: "52.5%",
                        border: "1px solid black"
                      }}
                    >
                      <input
                        type="text"
                        value={
                          [
                            "BSINFOTECH2A",
                            "BSINFOTECH2A",
                            "BSINFOTECH2A",
                            "BSINFOTECH2A",
                            "BSINFOTECH2A",
                            "BSINFOTECH2A",
                            "BSINFOTECH2A",
                            "BSINFOTECH2A",
                            "BSINFOTECH2A",
                            "BSINFOTECH2A",
                            "BSINFOTECH2A",
                            "BSINFOTECH2A",
                          ][index]
                        }
                        readOnly
                        style={{
                          color: "black",
                          width: "98%",
                          textAlign: "center",
                          fontSize: "0.50rem",
                          border: "none",
                          outline: "none",
                          background: "none"
                        }}
                      />
                    </td>
                    <td
                      colSpan={58}
                      style={{
                        height: "0.25in",
                        fontSize: "53.5%",
                        border: "1px solid black"
                      }}
                    >
                      <input
                        type="text"
                        value={
                          [
                            "T 03:00PM-05:00PM",
                            "T 07:00AM-10:00AM",
                            "M 11:00AM-01:00PM",
                            "M 06:00PM-09:00PM",
                            "W 07:00AM-10:00AM",
                            "M 01:00PM-03:00PM",
                            "W 02:00PM-05:00PM",
                            "W 11:00AM-01:00PM",
                            "T 11:00AM-02:00PM",
                            "M 08:00AM-10:00AM",
                            "M 04:00PM-06:00PM",
                            "W 05:00PM-08:00PM",

                          ][index]
                        }
                        readOnly
                        style={{
                          color: "black",
                          width: "98%",
                          textAlign: "center",
                          fontSize: "0.50rem",
                          border: "none",
                          outline: "none",
                          background: "none"
                        }}
                      />
                    </td>
                    <td
                      colSpan={57}
                      style={{
                        height: "0.25in",
                        fontSize: "52.5%",
                        border: "1px solid black"
                      }}
                    >
                      <textarea
                        value={
                          [
                            "Tolentino, Ferdinand",
                            "Sison, Edgardo",
                            "Carlos, Ernanie",
                            "Carlos, Ernanie",
                            "Pardito, Ranilo",
                            "Almazan, Edmund",
                            "San Jose, Dhani",
                            "San Jose, Dhani",
                            "Almazan, Edmund",
                            "Sison, Edgardo",
                            "Macasil, Ma. Jasmine Rose",
                            "Macasil, Ma. Jasmine Rose",                           
                          ][index]
                        }
                        readOnly
                        style={{
                          color: "black",
                          width: "98%",
                          textAlign: "left",
                          fontSize: "0.59rem",
                          border: "none",
                          outline: "none",
                          background: "none",
                          resize: "none",
                        }}
                      />
                    </td>
                  </tr>
                );
              })}


              <tr>
                <td
                  colSpan={140}
                  style={{
                    height: "0.3in",
                    fontSize: "70%",

                    color: "black",

                    textAlign: "center",
                  }}
                >
                  <b>
                    <i>Note: Subject marked with
                      "*" is Special Subject.</i>
                  </b>
                </td>
                <td
                  colSpan={50}
                  style={{

                    fontSize: "70%",

                    color: "black",

                    textAlign: "center",
                  }}
                >
                  <b>
                    Total Unit(s)</b>
                </td>

                <td
                  colSpan={16}
                  style={{

                    fontSize: "70%",
                    color: "black",
                    textAlign: "center",
                    borderTop: "1px solid black",
                  }}
                >
                  14
                </td>
                <td
                  colSpan={7}
                  style={{

                    fontSize: "70%",

                    color: "black",

                    textAlign: "center",
                  }}
                >
                  5
                </td>
                <td
                  colSpan={13}
                  style={{
                    height: "0.1in",
                    fontSize: "70%",

                    color: "black",

                    textAlign: "center",
                  }}
                >
                  20
                </td>
                <td
                  colSpan={11}
                  style={{
                    height: "0.1in",
                    fontSize: "70%",

                    color: "black",

                    textAlign: "center",
                  }}
                >
                  20
                </td>
                <td
                  colSpan={3}
                  style={{
                    height: "0.1in",
                    fontSize: "55%",

                    color: "black",

                    textAlign: "center",
                  }}
                >
                </td>
                <td
                  colSpan={2}
                  style={{
                    height: "0.1in",
                    fontSize: "55%",

                    color: "black",

                    textAlign: "center",
                  }}
                >
                </td>
                <td
                  colSpan={3}
                  style={{
                    height: "0.1in",
                    fontSize: "55%",

                    color: "black",

                    textAlign: "center",
                  }}
                >
                </td>
              </tr>
              <tr
                colSpan={12}

                style={{
                  color: "white",

                  height: "0.1in",
                  fontSize: "62.5%",
                  backgroundColor: "gray",
                  textAlign: "center",
                }}
              >


              </tr>
              <tr>
                <td
                  colSpan={180}
                  style={{

                    fontSize: "62.5%",
                    border: "1px solid black",
                    backgroundColor: "gray",
                  }}
                >
                  <input
                    type="text"
                    value={"A S S E S S E D  F E E S"}
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      textAlign: "center",
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={30}

                  style={{
                    color: "white",


                    fontSize: "62.5%",
                    color: "black",
                    border: "1px 0px 1px 1px solid black",
                    textAlign: "center",
                  }}
                >

                </td>
              </tr>



              <tr>
                <td
                  colSpan={145}
                  style={{

                    fontSize: "80.5%",

                  }}
                >
                  <input
                    type="text"
                    value={"Tuition (21 unit(s)) "}
                    style={{
                      color: "black",
                      width: "98%",
                      border: "none",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: "bold",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={35}
                  style={{

                    fontSize: "62.5%",

                    borderRight: "1px solid black",

                  }}
                >
                  <input
                    type="text"
                    value={"2100.00"}
                    style={{
                      textAlign: "left",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: "bold",
                      color: "black",
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>



                <td
                  colSpan={150}
                  style={{

                    fontSize: "62.5%",

                  }}
                >

                  <input
                    type="text"
                    value={"RULES OF REFUND"}
                    style={{
                      textAlign: "center",
                      color: "black",
                      marginLeft: "40px",
                      width: "98%",
                      border: "none",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '13px',
                      fontWeight: "bold",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
              </tr>
              <tr>

              </tr>
              <tr>
                <td
                  colSpan={145}
                  style={{

                    fontSize: "62.5%",

                  }}
                >
                  <input
                    type="text"
                    value={"Athletic Fee"}
                    style={{
                      color: "black",
                      width: "98%",
                      border: "none",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: "bold",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={35}
                  style={{

                    fontSize: "62.5%",

                    borderRight: "1px solid black",

                  }}
                >
                  <input
                    type="text"
                    value={"50.00"}
                    style={{
                      textAlign: "left",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: "bold",
                      color: "black",
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={167}
                  style={{

                    fontSize: "62.5%",

                  }}
                >

                  <input
                    type="text"
                    value={"1. Full refund of tuition fee - Before the start of classes."}
                    style={{
                      textAlign: "left",
                      color: "black",
                      marginLeft: "15px",
                      width: "98%",
                      border: "none",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: "bold",
                      fontSize: "0.75rem",
                      fontStyle: "italic",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td
                  colSpan={145}
                  style={{

                    fontSize: "62.5%",

                  }}
                >
                  <input
                    type="text"
                    value={"Cultural Fee"}
                    style={{
                      color: "black",
                      width: "98%",
                      border: "none",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: "bold",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={35}
                  style={{

                    fontSize: "62.5%",

                    borderRight: "1px solid black",

                  }}
                >
                  <input
                    type="text"
                    value={"50.00"}
                    style={{
                      textAlign: "left",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: "bold",
                      color: "black",
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={206}
                  style={{

                    fontSize: "62.5%",

                  }}
                >

                  <input
                    type="text"
                    value={"2. 80% refund of tuition fee - within 1 week from the start of classes."}
                    style={{
                      textAlign: "left",
                      color: "black",
                      marginLeft: "15px",
                      width: "98%",
                      border: "none",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: "bold",
                      fontStyle: "italic",
                      fontSize: "0.75rem",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td
                  colSpan={145}
                  style={{

                    fontSize: "62.5%",

                  }}
                >
                  <input
                    type="text"
                    value={"Developmental Fee"}
                    style={{
                      color: "black",
                      width: "98%",
                      border: "none",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: "bold",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={35}
                  style={{

                    fontSize: "62.5%",

                    borderRight: "1px solid black",

                  }}
                >
                  <input
                    type="text"
                    value={"30.00"}
                    style={{
                      textAlign: "left",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: "bold",
                      color: "black",
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={169}
                  style={{

                    fontSize: "62.5%",

                  }}
                >

                  <input
                    type="text"
                    value={"3. 50% refund - within 2 weeks from the start of classes."}
                    style={{
                      textAlign: "left",
                      color: "black",
                      marginLeft: "15px",
                      width: "98%",
                      border: "none",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '11px',
                      fontWeight: "bold",
                      fontStyle: "italic",
                      fontSize: "0.75rem",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td
                  colSpan={145}
                  style={{

                    fontSize: "62.5%",

                  }}
                >
                  <input
                    type="text"
                    value={"Guidance Fee"}
                    style={{
                      color: "black",
                      width: "98%",
                      border: "none",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: "bold",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={35}
                  style={{

                    fontSize: "62.5%",

                    borderRight: "1px solid black",

                  }}
                >
                  <input
                    type="text"
                    value={"30.00"}
                    style={{
                      textAlign: "left",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: "bold",
                      color: "black",
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={133}
                  style={{

                    fontSize: "62.5%",

                  }}
                >

                  <input
                    type="text"
                    value={"4. No refund - after the 2nd week of classes."}
                    style={{
                      textAlign: "left",
                      color: "black",
                      marginLeft: "15px",
                      width: "98%",
                      border: "none",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '11px',
                      fontWeight: "bold",
                      fontStyle: "italic",
                      fontSize: "0.75rem",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td
                  colSpan={145}
                  style={{

                    fontSize: "62.5%",

                  }}
                >
                  <input
                    type="text"
                    value={"Library Fee"}
                    style={{
                      color: "black",
                      width: "98%",
                      border: "none",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: "bold",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={35}
                  style={{

                    fontSize: "62.5%",

                    borderRight: "1px solid black",

                  }}
                >
                  <input
                    type="text"
                    value={"100.00"}
                    style={{
                      textAlign: "left",
                      color: "black",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: "bold",
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>

              </tr>
              <tr>
                <td
                  colSpan={145}
                  style={{

                    fontSize: "62.5%",

                  }}
                >
                  <input
                    type="text"
                    value={"Medical and Dental Fee"}
                    style={{
                      color: "black",
                      width: "98%",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: "bold",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={35}
                  style={{

                    fontSize: "62.5%",

                    borderRight: "1px solid black",

                  }}
                >
                  <input
                    type="text"
                    value={"130.00"}
                    style={{
                      textAlign: "left",
                      color: "black",
                      width: "98%",
                      border: "none",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: "bold",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={190}
                  style={{

                    fontSize: "62.5%",

                  }}
                >

                  <input
                    type="text"
                    value={"PLEDGE UPON ADMISSION"}
                    style={{
                      fontWeight: "bold",
                      textAlign: "center",
                      color: "black",
                      width: "98%",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '13px',
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td
                  colSpan={145}
                  style={{

                    fontSize: "62.5%",

                  }}
                >
                  <input
                    type="text"
                    value={"Registration Fee"}
                    style={{
                      color: "black",
                      width: "98%",
                      border: "none",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: "bold",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={35}
                  style={{

                    fontSize: "62.5%",

                    borderRight: "1px solid black",

                  }}
                >
                  <input
                    type="text"
                    value={"50.00"}
                    style={{
                      textAlign: "left",
                      color: "black",
                      width: "98%",
                      border: "none",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: "bold",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={200}
                  style={{

                    textAlign: "center",
                    fontWeight: "bold",
                    fontStyle: "italic",
                      fontSize: "0.75rem",
                    color: "black",
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '12px',
                  }}
                >
                  "As a student of EARIST, I do solemnly promise that I will
                </td>


              </tr>
              <tr>
                <td
                  colSpan={145}
                  style={{

                    fontSize: "62.5%",

                  }}
                >
                  <input
                    type="text"
                    value={"Computer Fee"}
                    style={{
                      color: "black",
                      width: "98%",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: "bold",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={35}
                  style={{

                    fontSize: "62.5%",

                    borderRight: "1px solid black",

                  }}
                >
                  <input
                    type="text"
                    value={"500.00"}
                    style={{
                      textAlign: "left",
                      color: "black",
                      width: "98%",
                      border: "none",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: "bold",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={180}
                  style={{

                    textAlign: "center",
                    fontWeight: "bold",
                    color: "black",
                    fontStyle: "italic",
                      fontSize: "0.75rem",
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '12px',
                  }}
                >
                  comply with the rules and regulations of the Institution."
                </td>

              </tr>
              <tr>
                <td
                  colSpan={180}
                  style={{

                    fontSize: "62.5%",
                    marginRight: "20px",

                    borderRight: "1px solid black",
                  }}
                >
                  <input
                    type="text"
                    value={""}
                    style={{
                      textAlign: "left",
                      color: "black",
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>

              </tr>
              <tr>
                <td
                  colSpan={55}
                  style={{


                    marginRight: "20px",

                  }}
                >
                </td>
                <td
                  colSpan={90}
                  style={{

                    fontSize: "62.5%",

                  }}
                >
                  <input
                    type="text"
                    value={"Total Assessment : "}
                    style={{
                      color: "black",
                      width: "98%",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: "bold",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={35}
                  style={{

                    fontSize: "62.5%",
                    marginRight: "20px",

                    borderRight: "1px solid black",
                  }}
                >
                  <input
                    type="text"
                    value={"3090.00"}
                    style={{
                      textAlign: "left",
                      color: "black",
                      width: "98%",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: "bold",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>

              </tr>

              <tr>
                <td
                  colSpan={55}
                  style={{


                    marginRight: "20px",

                  }}
                >

                </td>
                <td
                  colSpan={90}
                  style={{

                    fontSize: "62.5%",

                  }}
                >
                  <input
                    type="text"
                    value={"Less Financial Aid : "}
                    style={{
                      color: "black",
                      width: "98%",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: "bold",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={35}
                  style={{

                    fontSize: "62.5%",
                    marginRight: "20px",

                    borderRight: "1px solid black",
                  }}
                >
                  <input
                    type="text"
                    value={"3090.00"}
                    style={{
                      textAlign: "left",
                      color: "black",
                      width: "98%",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: "bold",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>


              </tr>
              <tr>
                <td
                  colSpan={55}
                  style={{


                    marginRight: "20px",

                  }}
                >

                </td>
                <td
                  colSpan={90}
                  style={{

                    fontSize: "62.5%",

                  }}
                >
                  <input
                    type="text"
                    value={"Net Assessed : "}
                    style={{
                      color: "black",
                      width: "98%",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: "bold",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={35}
                  style={{

                    fontSize: "62.5%",
                    marginRight: "20px",

                    borderRight: "1px solid black",
                  }}
                >
                  <input
                    type="text"
                    value={"0.00"}
                    style={{
                      textAlign: "left",
                      color: "black",
                      width: "98%",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: "bold",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>


                <td
                  colSpan={215}
                >
                  <input
                    type="text"
                    value={"_______________________________________"}
                    style={{
                      color: "black",
                      textAlign: "center",
                      fontWeight: "bold",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      textDecoration: "underline",
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td
                  colSpan={55}
                  style={{


                    marginRight: "20px",

                  }}
                >

                </td>
                <td
                  colSpan={90}
                  style={{

                    fontSize: "62.5%",

                  }}
                >
                  <input
                    type="text"
                    value={"Less Financial Aid : "}
                    style={{
                      color: "black",
                      width: "98%",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: "bold",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={35}
                  style={{

                    fontSize: "62.5%",
                    marginRight: "20px",

                    borderRight: "1px solid black",
                  }}
                >
                  <input
                    type="text"
                    value={"0.00"}
                    style={{
                      textAlign: "left",
                      color: "black",
                      width: "98%",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: "bold",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>




                <td
                  colSpan={193}

                >
                  <input
                    type="text"
                    value={"Student's Signature"}
                    style={{
                      color: "black",
                      textAlign: "center",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: "bold",
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td
                  colSpan={55}
                  style={{


                    marginRight: "20px",

                  }}
                >

                </td>
                <td
                  colSpan={90}
                  style={{

                    fontSize: "62.5%",

                  }}
                >
                  <input
                    type="text"
                    value={"Medical and Dental Fee : "}
                    style={{
                      color: "black",
                      width: "98%",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: "bold",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={35}
                  style={{

                    fontSize: "62.5%",
                    marginRight: "20px",

                    borderRight: "1px solid black",
                  }}
                >
                  <input
                    type="text"
                    value={"0.00"}
                    style={{
                      textAlign: "left",
                      color: "black",
                      width: "98%",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: "bold",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>

              </tr>
              <tr>
                <td
                  colSpan={55}
                  style={{


                    marginRight: "20px",

                  }}
                >

                </td>
                <td
                  colSpan={90}
                  style={{

                    fontSize: "62.5%",

                  }}
                >
                  <input
                    type="text"
                    value={"Registration Fee : "}
                    style={{
                      color: "black",
                      width: "98%",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: "bold",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={35}
                  style={{

                    fontSize: "62.5%",
                    marginRight: "20px",

                    borderRight: "1px solid black",
                  }}
                >
                  <input
                    type="text"
                    value={"0.00"}
                    style={{
                      textAlign: "left",
                      color: "black",
                      width: "98%",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: "bold",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>

              </tr>
              <tr>
                <td
                  colSpan={55}
                  style={{


                    marginRight: "20px",

                  }}
                >

                </td>
                <td
                  colSpan={90}
                  style={{

                    fontSize: "62.5%",

                  }}
                >
                  <input
                    type="text"
                    value={"Computer Fee : "}
                    style={{
                      color: "black",
                      width: "98%",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: "bold",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={35}
                  style={{

                    fontSize: "62.5%",
                    marginRight: "20px",

                    borderRight: "1px solid black",
                  }}
                >
                  <input
                    type="text"
                    value={"0.00"}
                    style={{
                      textAlign: "left",
                      color: "black",
                      width: "98%",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: "bold",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>

              </tr>
              <tr>
                <td
                  colSpan={180}
                  style={{

                    fontSize: "62.5%",
                    border: "1px solid black",
                    backgroundColor: "gray",
                  }}
                >
                  <input
                    type="text"
                    value={"SCHEDULE OF PAYMENT"}
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      textAlign: "center",
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>


                <td
                  colSpan={65}
                  style={{

                    fontSize: "62.5%",


                  }}
                >
                  <input
                    type="text"
                    value={"APPROVED BY : "}
                    style={{
                      color: "black",
                      textAlign: "left",
                      marginLeft: "21px",
                      fontWeight: "bold",
                      fontSize: "12px",
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={10}
                  style={{

                    fontSize: "55%",
                    textAlign: "center",
                  }}
                >
                 
                 <td style={{ width: "10%", textAlign: "right" }}>
                      <img src={Signature} alt="registrarsig" style={{ marginRight: "25px", width: "155px", height: "30px" }} />
                    </td>
                 
                </td>

              </tr>

              <tr>
                <td
                  colSpan={60}
                  style={{

                    fontSize: "62.5%",
                    border: "1px solid black",

                  }}
                >
                  <input
                    type="text"
                    value={"1st Payment/Due"}
                    style={{
                      color: "black",
                      textAlign: "center",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: "bold",
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={60}
                  style={{


                    border: "1px solid black",

                  }}
                >
                  <input
                    type="text"
                    value={"2nd Payment/Due"}
                    style={{
                      color: "black",
                      textAlign: "center",
                      fontWeight: "bold",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={60}
                  style={{


                    border: "1px solid black",

                  }}
                >
                  <input
                    type="text"
                    value={"3rd Payment/Due"}
                    style={{
                      color: "black",
                      textAlign: "center",
                      fontWeight: "bold",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={215}
                  style={{

                    fontSize: "62.5%",


                  }}
                >
                  <input
                    type="text"
                    value={"___________________________________"}
                    style={{
                      color: "black",
                      textAlign: "center",
                      fontWeight: "bold",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      textDecoration: "underline",
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
              </tr>


              <tr>
                <td
                  colSpan={60}
                  style={{

                    fontSize: "62.5%",
                    border: "1px solid black",

                  }}
                >
                  <input
                    type="text"
                    value={"0.0"}
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      textAlign: "center",
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={60}
                  style={{

                    fontSize: "62.5%",
                    border: "1px solid black",

                  }}
                >
                  <input
                    type="text"
                    value={"0.0"}
                    style={{
                      color: "black",
                      textAlign: "center",
                      fontWeight: "bold",
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={60}
                  style={{

                    fontSize: "62.5%",
                    border: "1px solid black",

                  }}
                >
                  <input
                    type="text"
                    value={"0.0"}
                    style={{
                      color: "black",
                      textAlign: "center",
                      width: "98%",
                      fontWeight: "bold",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={210}
                  style={{

                    fontSize: "10px",


                  }}
                >
                  <input
                    type="text"
                    value={"Registrar"}
                    style={{
                      color: "black",
                      textAlign: "center",
                      width: "98%",
                      fontWeight: "bold",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      border: "none",
                      fontWeight: "bold",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>

              </tr>
              <tr>
                <td
                  colSpan={80}
                  style={{

                    fontSize: "62.5%",


                  }}
                >
                  <input
                    type="text"
                    value={"Payment/Validation Date : "}
                    style={{
                      color: "black",
                      textAlign: "left",
                      width: "98%",
                      fontWeight: "bold",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={130}
                  style={{
                    height: "0.3in",
                    fontSize: "62.5%",


                  }}
                >
                  <input
                    type="text"
                    value={"February 24, 2025______"}
                    style={{
                      
                      color: "black",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: "bold",
                      textAlign: "center",
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td
                  colSpan={80}
                  style={{

                    fontSize: "62.5%",


                  }}
                >
                  <input
                    type="text"
                    value={"Official Receipt :"}
                    style={{
                      color: "black",
                      textAlign: "left",
                      width: "98%",
                      fontWeight: "bold",
                      border: "none",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={100}
                  style={{

                    fontSize: "62.5%",


                  }}
                >
                  <input
                    type="text"
                    value={"Scholar  _____"}
                    style={{
                      color: "black",
                      textAlign: "center",
                      width: "98%",
                      fontWeight: "bold",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
              </tr>



              <tr>
                <td style={{ width: "20%", textAlign: "center" }}>
                  <img src={FreeTuitionImage} alt="EARIST MIS FEE" style={{ marginTop: "10px", width: "200px", height: "150px", marginLeft: "150px" }} />
                </td>
              </tr>

              <tr>
                <td
                  colSpan={395}
                  style={{
                    height: "0.25in",
                    fontSize: "62.5%",
                    textAlign: "right",
                    textAlign: "right",
                    verticalAlign: "middle", // Centers vertically
                  }}
                >
                  <input
                    type="text"
                    value={currentDate}
                    readOnly
                    style={{
                      color: "black",
                      textAlign: "right", // Centers text inside the input
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none",
                    }}
                  />
                </td>
              </tr>

              <tr>
                <td
                  colSpan={395}
                  style={{
                    height: "0.2in",
                    fontSize: "72.5%",
                    backgroundColor: "gray",
                    color: "white",
                  }}
                >
                  <b>
                    <i style={{ color: "black", textAlign: "center", display: "block" }}>
                      KEEP THIS CERTIFICATE. YOU WILL BE REQUIRED TO PRESENT THIS IN ALL YOUR DEALINGS WITH THE COLLEGE.
                    </i>
                  </b>
                </td>
              </tr>

            </tbody>

          </table>


        </form>
      </div>
    </div>

  );
};

export default CertificateOfRegistration;

