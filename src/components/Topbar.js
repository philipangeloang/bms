import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function TopBar(props) {
  return (
    <nav className="bg-light-violet shadow-[2px_2px_5px_rgba(0,0,0,0.3)] transition-all duration-300 | md:ml-[70px] | xl:ml-[330px]">
      <div className="flex justify-between p-4">
        <div className="flex items-center">
          <label for="navbar-toggle" className="cursor-pointer">
            <MenuIcon fontSize="large" />
          </label>
          <span className="ml-4 text-3xl font-semibold text invisible absolute | lg:visible lg:relative">
            Dashboard
          </span>
        </div>
        <input
          placeholder="Search Here"
          type="search"
          className="bg-white border border-slate-400 rounded-full p-2 pl-5 w-2/5 | md:w-1/5 xl:relative xl:right-24"
        />
        <AccountCircleIcon fontSize="large" />
      </div>
    </nav>
  );
}

export default TopBar;
