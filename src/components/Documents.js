import React from "react";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

function Documents(props) {
  return (
    <div className="document bg-light-gray transition-all duration-300 | md:ml-[70px] | xl:ml-[330px]">
      <div className="m-5 transition-all duration-300 | md:ml-[90px] | xl:ml-[350px] ">
        <div className="p-1 flex justify-center | md:justify-end ">
          <span className="bg-dark-blue text-white px-3 py-2 rounded-xl cursor-pointer mr-2 | text-sm | lg:text-base lg:px-5 lg:py-3 ">
            Download All Record
          </span>
          <span className="bg-dark-blue text-white px-3 py-2 rounded-xl cursor-pointer | text-sm | lg:text-base lg:px-5 lg:py-3 ">
            Add New Record
          </span>
        </div>
      </div>

      <div className="p-4 text-sm | lg:text-lg">
        <table className="text-center shadow-lg rounded-2xl bg-dark-blue mx-auto w-full | md:w-full transition-all duration-300">
          <tr>
            <td className="bg-[#d6d5da]">
              <input type="checkbox" className="lg:h-5 lg:w-5 align-middle" />
            </td>
            <td className="bg-[#d6d5da] h-16" colSpan={8}>
              <div className="flex justify-between">
                <div>
                  <span>N Selected</span>
                </div>

                <div>
                  {/* Desktop */}
                  <div className="inline invisible absolute | md:visible md:static md:px-3">
                    <input
                      type="checkbox"
                      className="lg:h-5 lg:w-5 align-middle"
                    />
                    <span className="px-2">Processed</span>
                  </div>

                  <div className="inline invisible absolute | md:visible md:static md:px-3">
                    <input
                      type="checkbox"
                      className="lg:h-5 lg:w-5 align-middle"
                    />
                    <span className="px-2">Delete</span>
                  </div>

                  {/* Mobile */}
                  <div className="inline visible static mr-2 | md:invisible md:absolute md:px-3">
                    <DeleteOutlineOutlinedIcon />
                  </div>

                  <div className="inline visible static mr-10 | md:invisible md:absolute md:px-3">
                    <SettingsOutlinedIcon />
                  </div>

                  <div className="md:px-3 md:pl-14 inline">
                    <CheckOutlinedIcon />
                  </div>

                  <div className="md:px-3 md:pr-11 inline">
                    <ClearOutlinedIcon />
                  </div>
                </div>
              </div>
            </td>
          </tr>

          <thead className="text-white">
            <td></td>
            <td className="p-4">Date</td>
            <td className="p-4">Name</td>
            <td>Document</td>
            <td className="invisible absolute | md:visible md:static">
              Purpose
            </td>
            <td>Status</td>
            <td className="visible static | md:invisible md:absolute"></td>
            <td className="invisible absolute | md:visible md:static">
              Action
            </td>
          </thead>

          <tbody className="border-b border-gray bg-white text-black">
            <td className="p-2 py-5">
              <input type="checkbox" className="lg:h-5 lg:w-5 align-middle" />
            </td>
            <td className="p-2">11/01/22</td>
            <td>Espino, Eric</td>
            <td className="p-1">Barangay Certificate</td>
            <td className="invisible absolute | md:visible md:static">
              School
            </td>
            <td className="p-2">Pending</td>
            <td className="visible static | md:invisible md:absolute">
              <MoreVertOutlinedIcon />
            </td>
            <td className="invisible absolute | md:visible md:static">
              <AccountBoxIcon sx={{ color: "#0D0F33" }} />
              <NoteAltIcon sx={{ color: "#0D0F33" }} />
              <DeleteIcon
                sx={{
                  color: "#fff",
                  backgroundColor: "#0D0F33",
                  fontSize: 18,
                  marginLeft: 0.3,
                }}
              />
              <CancelOutlinedIcon
                sx={{
                  color: "#fff",
                  backgroundColor: "#0D0F33",
                  fontSize: 18,
                  marginLeft: 0.7,
                }}
              />
            </td>
          </tbody>

          <tbody className="border-b border-gray bg-white text-black">
            <td className="p-2 py-5">
              <input type="checkbox" className="lg:h-5 lg:w-5 align-middle" />
            </td>
            <td>11/01/22</td>
            <td>Espino, Eric</td>
            <td>Barangay Certificate</td>
            <td className="invisible absolute | md:visible md:static">
              School
            </td>
            <td>Pending</td>
            <td className="visible static | md:invisible md:absolute">
              <MoreVertOutlinedIcon />
            </td>
            <td className="invisible absolute | md:visible md:static">
              <AccountBoxIcon sx={{ color: "#0D0F33" }} />
              <NoteAltIcon sx={{ color: "#0D0F33" }} />
              <DeleteIcon
                sx={{
                  color: "#fff",
                  backgroundColor: "#0D0F33",
                  fontSize: 18,
                  marginLeft: 0.3,
                }}
              />
              <CancelOutlinedIcon
                sx={{
                  color: "#fff",
                  backgroundColor: "#0D0F33",
                  fontSize: 18,
                  marginLeft: 0.7,
                }}
              />
            </td>
          </tbody>

          <tbody className="border-b border-gray bg-white text-black">
            <td className="p-2 py-5">
              <input type="checkbox" className="lg:h-5 lg:w-5 align-middle" />
            </td>
            <td>11/01/22</td>
            <td>Espino, Eric</td>
            <td>Barangay Certificate</td>
            <td className="invisible absolute | md:visible md:static">
              School
            </td>
            <td>Pending</td>
            <td className="visible static | md:invisible md:absolute">
              <MoreVertOutlinedIcon />
            </td>
            <td className="invisible absolute | md:visible md:static">
              <AccountBoxIcon sx={{ color: "#0D0F33" }} />
              <NoteAltIcon sx={{ color: "#0D0F33" }} />
              <DeleteIcon
                sx={{
                  color: "#fff",
                  backgroundColor: "#0D0F33",
                  fontSize: 18,
                  marginLeft: 0.3,
                }}
              />
              <CancelOutlinedIcon
                sx={{
                  color: "#fff",
                  backgroundColor: "#0D0F33",
                  fontSize: 18,
                  marginLeft: 0.7,
                }}
              />
            </td>
          </tbody>

          <tbody className="border-b border-gray bg-white text-black">
            <td className="p-2 py-5">
              <input type="checkbox" className="lg:h-5 lg:w-5 align-middle" />
            </td>
            <td>11/01/22</td>
            <td>Espino, Eric</td>
            <td>Barangay Certificate</td>
            <td className="invisible absolute | md:visible md:static">
              School
            </td>
            <td>Pending</td>
            <td className="visible static | md:invisible md:absolute">
              <MoreVertOutlinedIcon />
            </td>
            <td className="invisible absolute | md:visible md:static">
              <AccountBoxIcon sx={{ color: "#0D0F33" }} />
              <NoteAltIcon sx={{ color: "#0D0F33" }} />
              <DeleteIcon
                sx={{
                  color: "#fff",
                  backgroundColor: "#0D0F33",
                  fontSize: 18,
                  marginLeft: 0.3,
                }}
              />
              <CancelOutlinedIcon
                sx={{
                  color: "#fff",
                  backgroundColor: "#0D0F33",
                  fontSize: 18,
                  marginLeft: 0.7,
                }}
              />
            </td>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Documents;
