import React from "react";

function Settings(props) {
  return (
    <div className="document bg-light-gray transition-all duration-300 | md:ml-[70px] | xl:ml-[330px]">
      <div className="flex flex-col justify-center items-center">
        <div className="bg-white flex flex-col justify-center m-5 rounded-xl max-w-sm">
          <div className="text-center text-2xl font-bold py-4">
            Change Password
          </div>
          <div className="text-center pb-4">
            <img
              alt="Lock"
              src="https://i.imgur.com/It0rPOW.png"
              className="text-center h-44 w-44 mx-auto"
            />
          </div>

          <form>
            <div className="px-4 pt-2 | md:w-full">
              <label className="text-sm">Current Password</label> <br />
              <input
                type="password"
                className="border-2 border-dark-blue rounded-lg p-2 h-9 w-[350px] "
              />
            </div>
            <div className="px-4 | md:pt-2 md:w-full">
              <label className="text-sm">New Password</label> <br />
              <input
                type="password"
                className="border-2 border-dark-blue rounded-lg p-2 h-9 w-full"
              />
            </div>
            <div className="px-4 | md:pt-2 md:w-full">
              <label className="text-sm">Confirm New Password</label> <br />
              <input
                type="password"
                className="border-2 border-dark-blue rounded-lg p-2 h-9 w-full"
              />
            </div>

            <div className="flex justify-end m-4 mb-7">
              <button
                type="submit"
                className="bg-dark-blue text-white px-4 py-2 rounded-md hover:bg-slate-500 hover:text-dark-blue"
              >
                <a href="">Save Password</a>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Settings;
