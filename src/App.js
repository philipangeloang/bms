import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ElderlyIcon from '@mui/icons-material/Elderly';
import { PieChart } from 'react-minimal-pie-chart';
import CircleIcon from '@mui/icons-material/Circle';
import GridViewIcon from '@mui/icons-material/GridView';
import TopicOutlinedIcon from '@mui/icons-material/TopicOutlined';
import DomainVerificationOutlinedIcon from '@mui/icons-material/DomainVerificationOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import ManageSearchOutlinedIcon from '@mui/icons-material/ManageSearchOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

function App() {
    return (
        <div className="bg-light-gray">


            <div className="invisible absolute text-white | xl:visible xl:bg-navbar-bg xl:h-screen xl:w-[330px] xl:p-6 xl:fixed ">
                <div className="flex">
                    <img alt="Barangay Seal" src="./images/Barangay_Seal.png" className="h-14 w-14 border border-white rounded-full mr-6"/>
                    <div>
                        <h2 className="font-bold text-xl">Barangay 564</h2>
                        <p>Sampaloc Manila, NCR</p>
                    </div>
                </div>

                <div className="flex flex-col h-[95%] justify-between pt-10">
                    <div>
                        <ul className="">
                            <li className="hover:bg-white hover:text-dark-blue hover:rounded-l-3xl p-4"><span className="mr-6"><GridViewIcon sx={{fontSize: 40}} /></span>Dashboard</li>
                            <li className="hover:bg-white hover:text-dark-blue hover:rounded-l-3xl p-4"><span className="mr-6"><TopicOutlinedIcon sx={{fontSize: 40}} /></span>Document</li>
                            <li className="hover:bg-white hover:text-dark-blue hover:rounded-l-3xl p-4"><span className="mr-6"><DomainVerificationOutlinedIcon sx={{fontSize: 40}} /></span>Claiming</li>
                            <li className="hover:bg-white hover:text-dark-blue hover:rounded-l-3xl p-4"><span className="mr-6"><WorkOutlineOutlinedIcon sx={{fontSize: 40}} /></span>Logs</li>
                            <li className="hover:bg-white hover:text-dark-blue hover:rounded-l-3xl p-4"><span className="mr-6"><ManageSearchOutlinedIcon sx={{fontSize: 40}} /></span>Records</li>
                        </ul>
                    </div>

                    <div>
                        <ul>
                        <li className="hover:bg-white hover:text-dark-blue hover:rounded-r-3xl p-4"><span className="mr-6"><SettingsOutlinedIcon sx={{fontSize: 40}} /></span>Settings</li>
                        <li className="hover:bg-white hover:text-dark-blue hover:rounded-r-3xl p-4"><span className="mr-6"><LogoutOutlinedIcon sx={{fontSize: 40}} /></span>Sign Out</li>
                        </ul>
                    </div>
                </div>
            </div>


            <nav className="bg-light-violet border-b-[3px] border-dark-blue | xl:ml-[330px]">
                <div className="flex justify-between p-4">
                    <div className="flex items-center"><MenuIcon fontSize="large" /><span className="ml-4 text-3xl font-semibold text invisible | lg:visible">Dashboard</span></div>
                    <input placeholder="Search Here" type="search" className="bg-white border border-slate-400 rounded-full p-2 | md:w-2/5"  />
                    <AccountCircleIcon fontSize="large" />
                </div>
            </nav>

            

            <div className="text-center mt-4 text-xl font-bold | md:text-2xl | lg:invisible lg:absolute">Dashboard</div>
            
            <div className="grid m-5 gap-5 grid-cols-1 | md:grid-cols-2 | lg:grid-cols-3 | xl:ml-[350px]">
                <div className="bg-white rounded-lg grid grid-cols-2 grid-rows-4 col-span-2 | md:col-span-1">
                    <span className="row-span-2 text-center self-center">
                            <PeopleAltIcon sx={{fontSize: 100}} />
                    </span>
                    <span className="text-center self-center font-medium text-lg">
                            Population
                    </span>
                    <span className="row-span-3">
                            <PieChart
                                radius={40}
                                labelStyle={{fontSize: '0.7rem', color: 'white'}}
                                label ={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
                                data={[
                                    {title: 'Male', value: 600, color: '#033AA9'},
                                    {title: 'Female', value: 500, color: '#CF1429'}
                                ]}
                            />
                    </span>
                    <span className="row-span-2 text-left self-center ml-8">
                            <div><CircleIcon sx={{color: '#033AA9'}} fontSize="small" />Male</div>
                            <div><CircleIcon sx={{color: '#CF1429'}} fontSize="small" />Female</div>
                    </span>
                </div>

                <div className="bg-white rounded-lg grid grid-cols-2 grid-rows-4 col-span-2 | md:col-span-1">
                    <span className="row-span-2 text-center self-center">
                            <HowToVoteIcon sx={{fontSize: 100}} />
                    </span>
                    <span className="text-center self-center font-medium text-lg">
                            Voters vs Non-Voters
                    </span>
                    <span className="row-span-3">
                            <PieChart
                                radius={40}
                                labelStyle={{fontSize: '0.7rem', color: 'white'}}
                                label ={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
                                data={[
                                    {title: 'Voter', value: 800, color: '#033AA9'},
                                    {title: 'Non-Voter', value: 300, color: '#CF1429'}
                                ]}
                            />
                    </span>
                    <span className="row-span-2 text-left self-center ml-8">
                            <div><CircleIcon sx={{color: '#033AA9'}} fontSize="small" />Voter</div>
                            <div><CircleIcon sx={{color: '#CF1429'}} fontSize="small" />Non-Voter</div>
                    </span>
                </div>

                <div className="bg-white rounded-lg grid grid-cols-2 grid-rows-4 col-span-2 | md:col-span-2 | lg:col-span-1">
                    <span className="row-span-2 text-center self-center">
                            <ElderlyIcon sx={{fontSize: 100}} />
                    </span>
                    <span className="text-center self-center font-medium text-lg">
                            Seniors & PWD
                    </span> 
                    <span className="row-span-3">
                            <PieChart
                                radius={40}
                                labelStyle={{fontSize: '0.7rem', color: 'white'}}
                                label ={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
                                data={[
                                    {title: 'Senior', value: 300, color: '#CF1429'},
                                    {title: 'PWD', value: 700, color: '#033AA9'}
                                ]}
                            />
                    </span>
                    <span className="row-span-2 text-left self-center ml-8">
                            <div><CircleIcon sx={{color: '#033AA9'}} fontSize="small" />Senior</div>
                            <div><CircleIcon sx={{color: '#CF1429'}} fontSize="small" />PWD</div>
                    </span>
                </div>

                <div className="bg-white rounded-lg p-6 col-span-2 | lg:col-span-1">
                    <h3 className="text-center font-medium text-lg mb-2">Barangay Officials</h3>
                    
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
                    <h3 className="text-center font-medium text-lg mb-2">Document Request</h3>
                    
                    <div className="bg-light-violet shadow-md p-3 mb-4">
                        <p className="text-sm text-slate-300 mb-5">Request Sent: 11/11/22</p>
                        <h2 className="text-xl font-bold">Barangay Certificate</h2>
                        <h4 className="mb-7">Recipient: Eric James Espino</h4>
                    </div>

                    <div className="bg-light-violet shadow-md p-3 mb-4">
                        <p className="text-sm text-slate-300 mb-5">Request Sent: 11/11/22</p>
                        <h2 className="text-xl font-bold">Barangay Certificate</h2>
                        <h4 className="mb-7">Recipient: Eric James Espino</h4>
                    </div>

                    <div className="bg-light-violet shadow-md p-3 mb-4">
                        <p className="text-sm text-slate-300 mb-5">Request Sent: 11/11/22</p>
                        <h2 className="text-xl font-bold">Barangay Certificate</h2>
                        <h4 className="mb-7">Recipient: Eric James Espino</h4>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default App;