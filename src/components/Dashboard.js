import React from "react";
import HowToVoteIcon from "@mui/icons-material/HowToVote";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ElderlyIcon from "@mui/icons-material/Elderly";
import { PieChart } from "react-minimal-pie-chart";
import CircleIcon from "@mui/icons-material/Circle";

function Dashboard(props) {
  return (
    <div className="bg-light-gray">
      <div className="text-center mt-4 text-xl font-bold | md:text-2xl | lg:invisible lg:absolute">
        Dashboard
      </div>

      <div className="dashboard grid m-5 gap-5 grid-cols-1 ml-0 transition-all duration-300 | md:grid-cols-2 md:ml-[90px] | lg:grid-cols-3 | xl:ml-[350px] ">
        <div className="bg-white rounded-lg grid grid-cols-2 grid-rows-4 col-span-2 | md:col-span-1">
          <span className="row-span-2 text-center self-center">
            <PeopleAltIcon sx={{ fontSize: 100 }} />
          </span>
          <span className="text-center self-center font-medium text-lg">
            Population
          </span>
          <span className="row-span-3">
            <PieChart
              radius={40}
              labelStyle={{ fontSize: "0.7rem", color: "white" }}
              label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
              data={[
                { title: "Male", value: 600, color: "#033AA9" },
                { title: "Female", value: 500, color: "#CF1429" },
              ]}
            />
          </span>
          <span className="row-span-2 text-left self-center ml-8">
            <div>
              <CircleIcon sx={{ color: "#033AA9" }} fontSize="small" />
              Male
            </div>
            <div>
              <CircleIcon sx={{ color: "#CF1429" }} fontSize="small" />
              Female
            </div>
          </span>
        </div>

        <div className="bg-white rounded-lg grid grid-cols-2 grid-rows-4 col-span-2 | md:col-span-1">
          <span className="row-span-2 text-center self-center">
            <HowToVoteIcon sx={{ fontSize: 100 }} />
          </span>
          <span className="text-center self-center font-medium text-lg">
            Voters vs Non-Voters
          </span>
          <span className="row-span-3">
            <PieChart
              radius={40}
              labelStyle={{ fontSize: "0.7rem", color: "white" }}
              label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
              data={[
                { title: "Voter", value: 800, color: "#033AA9" },
                { title: "Non-Voter", value: 300, color: "#CF1429" },
              ]}
            />
          </span>
          <span className="row-span-2 text-left self-center ml-8">
            <div>
              <CircleIcon sx={{ color: "#033AA9" }} fontSize="small" />
              Voter
            </div>
            <div>
              <CircleIcon sx={{ color: "#CF1429" }} fontSize="small" />
              Non-Voter
            </div>
          </span>
        </div>

        <div className="bg-white rounded-lg grid grid-cols-2 grid-rows-4 col-span-2 | md:col-span-2 | lg:col-span-1">
          <span className="row-span-2 text-center self-center">
            <ElderlyIcon sx={{ fontSize: 100 }} />
          </span>
          <span className="text-center self-center font-medium text-lg">
            Seniors & PWD
          </span>
          <span className="row-span-3">
            <PieChart
              radius={40}
              labelStyle={{ fontSize: "0.7rem", color: "white" }}
              label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
              data={[
                { title: "Senior", value: 300, color: "#CF1429" },
                { title: "PWD", value: 700, color: "#033AA9" },
              ]}
            />
          </span>
          <span className="row-span-2 text-left self-center ml-8">
            <div>
              <CircleIcon sx={{ color: "#033AA9" }} fontSize="small" />
              Senior
            </div>
            <div>
              <CircleIcon sx={{ color: "#CF1429" }} fontSize="small" />
              PWD
            </div>
          </span>
        </div>

        <div className="bg-white rounded-lg p-6 col-span-2 | lg:col-span-1">
          <h3 className="text-center font-medium text-lg mb-2">
            Barangay Officials
          </h3>

          <h5 className="font-medium text-sm leading-6">Punong Barangay</h5>
          <p className="text-center text-sm leading-6">Joecel Alberto</p>

          <h5 className="font-medium text-sm leading-6">Kagawad</h5>
          <p className="text-center text-sm leading-6">Stevenot De Leon</p>
          <p className="text-center text-sm leading-6v">Rodolfo Jose</p>
          <p className="text-center text-sm leading-6">Alfonso Demillo Jr.</p>
          <p className="text-center text-sm leading-6">Jhonny Fernandez</p>
          <p className="text-center text-sm leading-6">Camilo Mempin</p>
          <p className="text-center text-sm leading-6">Antonio Fabia</p>
          <p className="text-center text-sm leading-6">Benison Acaya</p>

          <h5 className="font-medium text-sm leading-6">SK Chairman</h5>
          <p className="text-center text-sm leading-6">Osmaleth Senangelo</p>

          <h5 className="font-medium text-sm leading-6">Treasurer</h5>
          <p className="text-center text-sm leading-6">Emilia Sevandra</p>

          <h5 className="font-medium text-sm leading-6">Secretary</h5>
          <p className="text-center text-sm leading-6">Regina Esber</p>
        </div>

        <div className="bg-white rounded-lg p-6 col-span-2">
          <h3 className="text-center font-medium text-lg mb-2">
            Document Request
          </h3>

          <div className="bg-light-violet shadow-md p-3 mb-4">
            <p className="text-sm text-slate-300 mb-5">
              Request Sent: 11/11/22
            </p>
            <h2 className="text-xl font-bold">Barangay Certificate</h2>
            <h4 className="mb-7">Recipient: Eric James Espino</h4>
          </div>

          <div className="bg-light-violet shadow-md p-3 mb-4">
            <p className="text-sm text-slate-300 mb-5">
              Request Sent: 11/11/22
            </p>
            <h2 className="text-xl font-bold">Barangay Certificate</h2>
            <h4 className="mb-7">Recipient: Eric James Espino</h4>
          </div>

          <div className="bg-light-violet shadow-md p-3 mb-4">
            <p className="text-sm text-slate-300 mb-5">
              Request Sent: 11/11/22
            </p>
            <h2 className="text-xl font-bold">Barangay Certificate</h2>
            <h4 className="mb-7">Recipient: Eric James Espino</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
