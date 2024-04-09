import React, { useState } from 'react'
import './App.css';
// import Table from 'react-bootstrap/Table';
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer, toast } from 'react-toastify';
// import {  ToastContainer } from 'bootstrap';


function Forms() {
    let [formData, setFormData] = useState(
        {
            uname: '',
            uemail: '',
            uphone: '',
            umessage: '',
            index: ''
        }
    )
    let [userData, setUserData] = useState([])

    let getValue = (event) => {
        let oldData = { ...formData }
        let inputName = event.target.name;
        let inputValue = event.target.value;
        oldData[inputName] = inputValue;
        setFormData(oldData);

    }

    let handleSubmit = (event) => {

        let currentUserFormdata = {
            uname: formData.uname,
            uemail: formData.uemail,
            uphone: formData.uphone,
            umessage: formData.umessage


        }

        if (formData.index === '') {


            let checkFilterUser = userData.filter((v) => v.uemail == formData.uemail || v.uphone == formData.uphone)

            if (checkFilterUser.length == 1) {
                toast.error('phone and email already exist');
            }
            else {

                let oldUserData = [...userData, currentUserFormdata]//old array + new array
                setUserData(oldUserData);

                setFormData({
                    uname: '',
                    uemail: '',
                    uphone: '',
                    umessage: '',
                    index: ''

                }
                )
            }
        }
        else {

            // console.log(formData.index);
            let editIndex = formData.index;
            let oldData = userData;

            let checkFilterUser = userData.filter((v, i) => (v.uemail == formData.uemail || v.uphone == formData.uphone) &&
             i!=editIndex);

             if(checkFilterUser.length==0){



            oldData[editIndex]['uname'] = formData.uname
            oldData[editIndex]['uemail'] = formData.uemail
            oldData[editIndex]['uphone'] = formData.uphone
            oldData[editIndex]['umessage'] = formData.umessage
            setUserData(oldData)
            setFormData({
                uname: '',
                uemail: '',
                uphone: '',
                umessage: '',
                index: ''

            }
            )
        }
        else{
            toast.error('phone and email already exist');


        }

        }

        event.preventDefault();

    }



    let deleteRow = (indexNumber) => {
        let filterDataAfterDelete = userData.filter((v, i) => i != indexNumber)
        toast.success("Succesful Delete data")
        setUserData(filterDataAfterDelete)

    }
    let editRow = (indexNumber) => {
        let editData = userData.filter((v, i) => i == indexNumber)[0]
        editData['index'] = indexNumber;
        setFormData(editData)

    }

    return (
        <div className='container-fluid'>

            <ToastContainer />
            {/* <toastContainer/> */}
            <div className='container'>
                <div className='row'>
                    <div className='col text-center py-5'>
                        <h1>Enquiry Now</h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='col lg={5}' >
                        {userData.length}
                        <form onSubmit={handleSubmit}>
                            <div className='pb-3'>
                                <label className='form-label'>Name</label>
                                <input type='text' onChange={getValue} value={formData.uname} name='uname' className='form-control' />

                            </div>

                            <div className='pb-3'>
                                <label className='form-label'>Email</label>
                                <input type='text' onChange={getValue} value={formData.uemail} name='uemail' className='form-control' />

                            </div>

                            <div className='pb-3'>
                                <label className='form-label'>Phone Number</label>
                                <input type='number' onChange={getValue} value={formData.uphone} name='uphone' className='form-control' />

                            </div>

                            <div className='pb-3'>
                                <label className='form-label'>Message</label>
                                <input type='text' onChange={getValue} value={formData.umessage} name='umessage' rows='3' className='form-control' />

                            </div>

                            <button className='btn btn-primary'>
                                {
                                    formData.index !== '' ? 'Update' : 'Save'
                                }
                            </button>
                        </form>

                    </div>
                    <div className='col lg={7}' >

                        <table striped bordered hover size='sm' className='primary'>
                            <thead >
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Message</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userData.length >= 1 ?
                                    userData.map((obj, index,) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{obj.uname}</td>
                                                <td>{obj.uemail}</td>
                                                <td>{obj.uphone}</td>
                                                <td>{obj.umessage}</td>
                                                <td>
                                                    <button onClick={() => deleteRow(index)}>Delete</button>
                                                    <button onClick={() => editRow(index)}>Edit</button>
                                                </td>

                                            </tr>
                                        )
                                    })

                                    :
                                    <tr>
                                        <td colSpan={6}>No Data Found</td>
                                    </tr>

                                }


                            </tbody>
                        </table>



                    </div>

                </div>

            </div>
        </div>
    )
}


// function Forms() {
//     let [formData, setFormData] = useState(
//         {
//             uname: '',
//             uemail: '',
//             uphone: '',
//             umessage: '',
//             index: ''
//         }
//     )
//     let [userData, setUserData] = useState([])

//     let getValue = (event) => {
//         let oldData = { ...formData }
//         let inputName = event.target.name;
//         let inputValue = event.target.value;
//         oldData[inputName] = inputValue;
//         setFormData(oldData);

//     }

//     let handleSubmit = (event) => {

//         let currentUserFormdata = {
//             uname: formData.uname,
//             uemail: formData.uemail,
//             uphone: formData.uphone,
//             umessage: formData.umessage


//         }

//         if (formData.index === '') {


//             let checkFilterUser = userData.filter((v) => (v.uemail == formData.uemail || v.uphone == formData.uphone))

//             if (checkFilterUser.length == 1) {
//                 toast.error('phone and email already exist');
//             }
//             else {

//                 let oldUserData = [...userData, currentUserFormdata]//old array + new array
//                 setUserData(oldUserData);

//                 setFormData({
//                     uname: '',
//                     uemail: '',
//                     uphone: '',
//                     umessage: '',
//                     index: ''

//                 })
//             }
//         }
//         else {

//             // console.log(formData.index);
//             let editIndex = formData.index;
//             let oldData = userData;
//             oldData[editIndex]['uname'] = formData.uname
//             oldData[editIndex]['uemail'] = formData.uemail
//             oldData[editIndex]['uphone'] = formData.uphone
//             oldData[editIndex]['umessage'] = formData.umessage
//         }

//         event.preventDefault();

//     }



//     let deleteRow = (indexNumber) => {
//         let filterDataAfterDelete = userData.filter((v, i) => i != indexNumber)
//         toast.success("Succesful Delete data")
//         setUserData(filterDataAfterDelete)

//     }
//     let editRow = (indexNumber) => {
//         let editData = userData.filter((v, i) => i == indexNumber)[0]
//         editData['index'] = indexNumber;
//         setFormData(editData)

//     }
export default Forms