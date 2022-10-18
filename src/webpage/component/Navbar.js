import React, { useState,useEffect } from 'react';
import {
    MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarToggler,
    MDBCollapse,
    MDBDropdown,
    MDBDropdownMenu,
    MDBDropdownToggle,
    MDBDropdownItem,
  } from 'mdb-react-ui-kit';
  import axios from 'axios';

export default function Sidebar() {
    const [showNavRight, setShowNavRight] = useState(false);
    let [Username, setUsername] = useState("admin");
    useEffect(() => {
      try{
      axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
      axios.defaults.headers.post['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
      axios.post('http://localhost:4000/authen',{
      })
      .then((res)=>{
        if(res.data.status==="success"){
          setUsername(localStorage.getItem('name'));
        }
        else{
          localStorage.clear();
          window.location = '/login';
      }
      })
      .catch((error)=>{
        console.log(error)
      })
    }
    catch(error){
      window.location = '/login';
    }
  },[]);
    return(
        <>
       <MDBNavbar expand='lg' dark bgColor='dark'>
      <MDBContainer fluid>
        <MDBNavbarToggler
          type='button'
          data-target='#navbarRightAlignExample'
          aria-controls='navbarRightAlignExample'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavRight(!showNavRight)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showNavRight}>
          <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link'>
                  {Username}
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>User</MDBDropdownItem>
                  <MDBDropdownItem link>Role</MDBDropdownItem>
                  <MDBDropdownItem link onClick={()=>{localStorage.clear();window.location = '/login';}}>Log out</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
 
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
        </>
    )
}