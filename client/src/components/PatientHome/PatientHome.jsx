import './PatientHome.css'
import React, { useState,useRef,useEffect } from 'react';
import Popup from '../Popups/Popup'
import ResourcePopup from '../Popups/ResourcePopup'
import VitalsPopup from '../Popups/Vitals'
import DepartmentDropdown from '../Dropdown/Dropdown'
import { Link } from 'react-router-dom';
import img from '../PatientHome/logo.png'
import DatatablePatientSide from '../datatable/DatatablePatientside';

const PatientHome = () => {

    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const toggleDropdown = () => {
      setIsDropdownVisible(!isDropdownVisible);
    };

    const handleOptionClick = (option) => {
      // Handle the click event for each option here
      console.log(`Selected option: ${option}`);
      // You can perform actions like showing a modal, making an API request, etc.

      // based on the selected option.
      setIsDropdownVisible(false);
    };

  return (
    <div class="bg-gray-200  h-screen w-screen">
    <div>
        <div class="flex flex-row bg-white items-center">
            <div class="app-bg-blue-1 px-10 py-5">
                <span class="text-lg text-white font-bold"><img width={'50px'} src={img}></img></span>
            </div>
            <DepartmentDropdown/>

            <div class="flex flex-row pl-5 items-center mr-auto">
                <div class="h-9 w-9 app-bg-blue-2 flex justify-center
items-center rounded-xl">
                    <svg class="w-6 h-6 app-color-blue-1" fill="none"
stroke="currentColor" viewBox="0 0 24 24"
xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round"
stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5
21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002
2z"></path></svg>
                </div>
                <div class="flex flex-col pl-5">
                    <span class="font-semibold text-sm
app-color-black">Today</span>
                    <span class="font-semibold text-sm
app-color-blue-1">13 August 2023</span>
                </div>
                <svg class="h-4 w-4 app-color-blue-3 ml-5" fill="none"
stroke="currentColor" viewBox="0 0 24 24"
xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round"
stroke-linejoin="round" stroke-width="2" d="M19 9l-7
7-7-7"></path></svg>
                <div class="w-px bg-gray-100 h-10 ml-5"></div>

            </div>
         <ResourcePopup/>
            <Popup/>

            <svg class="w-6 h-6 app-color-blue-3 mr-5" fill="none"
stroke="currentColor" viewBox="0 0 24 24"
xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round"
stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756
2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37
2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724
1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0
00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0
00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0
00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0
001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07
2.572-1.065z"></path><path stroke-linecap="round"
stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0
016 0z"></path></svg>
</div>
</div>
<DatatablePatientSide/>
</div>

       


  )
}

export default PatientHome