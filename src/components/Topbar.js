import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function TopBar(props) {
    return(
        <nav className="bg-light-violet border-b-[3px] border-dark-blue | xl:ml-[330px]">
            <div className="flex justify-between p-4">
                <div className="flex items-center"><button onClick={props.onClick}><MenuIcon fontSize="large" /></button><span className="ml-4 text-3xl font-semibold text invisible absolute | lg:visible lg:relative">Dashboard</span></div>
                <input placeholder="Search Here" type="search" className="bg-white border border-slate-400 rounded-full p-2 w-2/5 | md:w-1/5 xl:relative xl:right-24"  />
                <AccountCircleIcon fontSize="large" />
            </div>
        </nav>
    );
}

export default TopBar;