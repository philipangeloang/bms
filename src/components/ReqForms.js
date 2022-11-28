import React from "react";

function ReqForms(props) {
  return (
    <div className="req-form bg-light-gray transition-all duration-300 | md:ml-[70px] | xl:ml-[330px]">
      <div className="bg-white m-4 rounded-2xl">
        <div className="bg-dark-blue text-white rounded-t-2xl py-2 px-4">
          Resident Information
        </div>
        <div className="shadow-lg">
          <div className="md:flex md:w-full">
            <div className="px-4 pt-2 | md:w-full">
              <label className="text-sm">First Name</label> <br />
              <input
                type="text"
                className="border-2 border-dark-blue rounded-lg p-2 h-9 w-full "
              />
            </div>
            <div className="px-4 | md:pt-2 md:w-full">
              <label className="text-sm">Middle Name</label> <br />
              <input
                type="text"
                className="border-2 border-dark-blue rounded-lg p-2 h-9 w-full"
              />
            </div>
            <div className="px-4 | md:pt-2 md:w-full">
              <label className="text-sm">Last Name</label> <br />
              <input
                type="text"
                className="border-2 border-dark-blue rounded-lg p-2 h-9 w-full"
              />
            </div>
          </div>

          <div className="md:flex md:w-full">
            <div className="px-4 pt-2 | md:w-full">
              <label className="text-sm">Address</label> <br />
              <input
                type="text"
                className="border-2 border-dark-blue rounded-lg p-2 h-9 w-full "
              />
            </div>
            <div className="px-4 | md:pt-2 md:w-full">
              <label className="text-sm">Birthdate</label> <br />
              <input
                type="date"
                className="border-2 border-dark-blue rounded-lg p-2 h-9 w-full"
              />
            </div>
            <div className="flex px-4 | md:pt-2 md:w-full ">
              <div className="pr-4 w-full">
                <label className="text-sm">Age</label>
                <input
                  type="number"
                  className="border-2 border-dark-blue rounded-lg p-2 h-9 w-full"
                />
              </div>
              <div className="pl-4 w-full">
                <label className="text-sm">Gender</label>
                <input
                  type="number"
                  className="border-2 border-dark-blue rounded-lg p-2 h-9 w-full"
                />
              </div>
            </div>
          </div>

          <div className="md:flex">
            <div className="px-4 pt-2 | md:w-full">
              <label className="text-sm">Email</label> <br />
              <input
                type="email"
                className="border-2 border-dark-blue rounded-lg p-2 h-9 w-full "
              />
            </div>
            <div className="px-4 | md:pt-2 md:w-full">
              <label className="text-sm">Phone Number</label> <br />
              <input
                type="number"
                className="border-2 border-dark-blue rounded-lg p-2 h-9 w-full"
              />
            </div>
            <div className="px-4 invisible absolute | md:pt-2 md:w-full md:static">
              <label className="text-sm">X</label> <br />
              <input
                type="text"
                className="border-2 border-dark-blue rounded-lg p-2 h-9 w-full"
              />
            </div>
          </div>

          <hr className="p-4 border-2 border-x-0 border-b-0 w-[90%] mx-auto" />

          <div className="md:flex">
            <div className="px-4 pt-2 | md:w-full">
              <label className="text-sm">School Attainment</label> <br />
              <input
                type="text"
                className="border-2 border-dark-blue rounded-lg p-2 h-9 w-full "
              />
            </div>
            <div className="px-4 | md:pt-2 md:w-full">
              <label className="text-sm">Years of Residency</label> <br />
              <input
                type="number"
                className="border-2 border-dark-blue rounded-lg p-2 h-9 w-full"
              />
            </div>
            <div className="px-4 invisible absolute | md:pt-2 md:w-full md:static">
              <label className="text-sm">X</label> <br />
              <input
                type="text"
                className="border-2 border-dark-blue rounded-lg p-2 h-9 w-full"
              />
            </div>
          </div>

          <div className="md:flex md:w-full">
            <div className="px-4 pt-2 | md:w-full">
              <label className="text-sm">Person to Notify</label> <br />
              <input
                type="text"
                className="border-2 border-dark-blue rounded-lg p-2 h-9 w-full "
              />
            </div>
            <div className="px-4 | md:pt-2 md:w-full">
              <label className="text-sm">Relationship</label> <br />
              <input
                type="text"
                className="border-2 border-dark-blue rounded-lg p-2 h-9 w-full"
              />
            </div>
            <div className="px-4 | md:pt-2 md:w-full">
              <label className="text-sm">Phone Number</label> <br />
              <input
                type="number"
                className="border-2 border-dark-blue rounded-lg p-2 h-9 w-full"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <a href="" className="font-medium p-4">
              Back
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReqForms;
