import React from "react";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";

function Logs(props) {
  return (
    <div className="document bg-light-gray transition-all duration-300 | md:ml-[70px] | xl:ml-[330px]">
      <div className="m-5 transition-all duration-300 | md:ml-[90px] | xl:ml-[350px] ">
        <div className="p-1 flex justify-center | md:justify-end ">
          <span className="bg-dark-blue text-white px-3 py-2 rounded-xl cursor-pointer mr-2 | text-sm | lg:text-base lg:px-5 lg:py-3 ">
            Download All Record
          </span>
          <span className=" px-3 py-2 rounded-xl cursor-pointer | text-sm | lg:text-base lg:px-5 lg:py-3 ">
            Today{" "}
            <span>
              <ArrowDropDownOutlinedIcon />
            </span>
          </span>
        </div>
      </div>

      <div className="p-4 text-sm | lg:text-lg">
        <table className="text-center shadow-lg rounded-2xl bg-dark-blue mx-auto | md:w-full transition-all duration-300">
          <thead className="text-white">
            <td className="p-4">Date</td>
            <td className="p-4">Name</td>
            <td>Document</td>
            <td className="invisible absolute | md:visible md:static">
              Purpose
            </td>
            <td className="invisible absolute | md:visible md:static">
              Time Processed
            </td>
            <td>Status</td>
            <td className="invisible absolute | md:visible md:static">
              Date Received
            </td>
            <td className="visible static | md:invisible md:absolute"></td>
            <td className="invisible absolute | md:visible md:static">
              Action
            </td>
          </thead>

          <tbody className="border-b border-gray bg-white text-black">
            <td className="p-2">11/01/22</td>
            <td>Espino, Eric</td>
            <td className="p-1">Barangay Certificate</td>
            <td className="invisible absolute | md:visible md:static">
              School
            </td>
            <td className="invisible absolute | md:visible md:static">
              12:01 AM
            </td>
            <td>Claimed</td>
            <td className="invisible absolute | md:visible md:static">
              11/02/22
            </td>
            <td className="visible static | md:invisible md:absolute">
              <MoreVertOutlinedIcon />
            </td>
            <td className="invisible absolute | md:visible md:static">
              <AccountBoxIcon sx={{ color: "#0D0F33" }} />
            </td>
          </tbody>

          <tbody className="border-b border-gray bg-white text-black">
            <td className="p-2">11/01/22</td>
            <td>Espino, Eric</td>
            <td>Barangay Certificate</td>
            <td className="invisible absolute | md:visible md:static">
              School
            </td>
            <td className="invisible absolute | md:visible md:static">
              12:01 AM
            </td>
            <td>Claimed</td>
            <td className="invisible absolute | md:visible md:static">
              11/02/22
            </td>
            <td className="visible static | md:invisible md:absolute">
              <MoreVertOutlinedIcon />
            </td>
            <td className="invisible absolute | md:visible md:static">
              <AccountBoxIcon sx={{ color: "#0D0F33" }} />
            </td>
          </tbody>

          <tbody className="border-b border-gray bg-white text-black">
            <td className="p-2">11/01/22</td>
            <td>Espino, Eric</td>
            <td>Barangay Certificate</td>
            <td className="invisible absolute | md:visible md:static">
              School
            </td>
            <td className="invisible absolute | md:visible md:static">
              12:01 AM
            </td>
            <td>Claimed</td>
            <td className="invisible absolute | md:visible md:static">
              11/02/22
            </td>
            <td className="visible static | md:invisible md:absolute">
              <MoreVertOutlinedIcon />
            </td>
            <td className="invisible absolute | md:visible md:static">
              <AccountBoxIcon sx={{ color: "#0D0F33" }} />
            </td>
          </tbody>

          <tbody className="border-b border-gray bg-white text-black">
            <td className="p-2">11/01/22</td>
            <td>Espino, Eric</td>
            <td>Barangay Certificate</td>
            <td className="invisible absolute | md:visible md:static">
              School
            </td>
            <td className="invisible absolute | md:visible md:static">
              12:01 AM
            </td>
            <td>Claimed</td>
            <td className="invisible absolute | md:visible md:static">
              11/02/22
            </td>
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

export default Logs;
