import React from "react";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";

function Records(props) {
  return (
    <div className="document bg-light-gray transition-all duration-300 | md:ml-[70px] | xl:ml-[330px]">
      <div className="m-5 transition-all duration-300 | md:ml-[90px] | xl:ml-[350px] ">
        <div className="p-1 flex justify-center | md:justify-end ">
          <span className="bg-dark-blue text-white px-3 py-2 rounded-xl cursor-pointer mr-2 | text-sm | lg:text-base lg:px-5 lg:py-3 ">
            Download All Record
          </span>
          <span className=" px-3 py-2 rounded-xl cursor-pointer | text-sm | lg:text-base lg:px-5 lg:py-3 ">
            Sort by
            <span>
              <ArrowDropDownOutlinedIcon />
            </span>
          </span>
        </div>
      </div>

      <div className="p-4 text-sm | lg:text-lg">
        <table className="text-center shadow-lg rounded-2xl bg-dark-blue mx-auto w-full | md:w-full transition-all duration-300">
          <thead className="text-white">
            <td>Last Name</td>
            <td className="p-4 invisible absolute | md:visible md:static">
              First Name
            </td>
            <td className="p-4 invisible absolute | md:visible md:static">
              Middle Name
            </td>
            <td>Age</td>
            <td>Address</td>
            <td>Phone Number</td>
            <td className="visible static | md:invisible md:absolute"></td>
            <td className="invisible absolute | md:visible md:static">
              Action
            </td>
          </thead>

          <tbody className="border-b border-gray bg-white text-black">
            <td>Espino</td>
            <td className="p-2 invisible absolute | md:visible md:static">
              Eric
            </td>
            <td className="p-1 invisible absolute | md:visible md:static">
              Ortega
            </td>
            <td>21</td>
            <td>131 P.popoy Village San Andres California</td>
            <td>09XX XXX XXXX</td>
            <td className="visible static | md:invisible md:absolute">
              <MoreVertOutlinedIcon />
            </td>
            <td className="invisible absolute | md:visible md:static">
              <AccountBoxIcon sx={{ color: "#0D0F33" }} />
            </td>
          </tbody>

          <tbody className="border-b border-gray bg-white text-black">
            <td>Espino</td>
            <td className="p-2 invisible absolute | md:visible md:static">
              Eric
            </td>
            <td className="p-1 invisible absolute | md:visible md:static">
              Ortega
            </td>
            <td>21</td>
            <td>131 P.popoy Village San Andres California</td>
            <td>09XX XXX XXXX</td>
            <td className="visible static | md:invisible md:absolute">
              <MoreVertOutlinedIcon />
            </td>
            <td className="invisible absolute | md:visible md:static">
              <AccountBoxIcon sx={{ color: "#0D0F33" }} />
            </td>
          </tbody>

          <tbody className="border-b border-gray bg-white text-black">
            <td>Espino</td>
            <td className="p-2 invisible absolute | md:visible md:static">
              Eric
            </td>
            <td className="p-1 invisible absolute | md:visible md:static">
              Ortega
            </td>
            <td>21</td>
            <td>131 P.popoy Village San Andres California</td>
            <td>09XX XXX XXXX</td>
            <td className="visible static | md:invisible md:absolute">
              <MoreVertOutlinedIcon />
            </td>
            <td className="invisible absolute | md:visible md:static">
              <AccountBoxIcon sx={{ color: "#0D0F33" }} />
            </td>
          </tbody>

          <tbody className="border-b border-gray bg-white text-black">
            <td>Espino</td>
            <td className="p-2 invisible absolute | md:visible md:static">
              Eric
            </td>
            <td className="p-1 invisible absolute | md:visible md:static">
              Ortega
            </td>
            <td>21</td>
            <td>131 P.popoy Village San Andres California</td>
            <td>09XX XXX XXXX</td>
            <td className="visible static | md:invisible md:absolute">
              <MoreVertOutlinedIcon />
            </td>
            <td className="invisible absolute | md:visible md:static">
              <AccountBoxIcon sx={{ color: "#0D0F33" }} />
            </td>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Records;
