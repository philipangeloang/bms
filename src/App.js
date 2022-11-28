import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Dashboard from "./components/Dashboard";
import Documents from "./components/Documents";
import ReqForms from "./components/ReqForms";

function App() {
  return (
    <div>
      <Sidebar />
      <Topbar />
      <ReqForms />
    </div>
  );
}

export default App;
