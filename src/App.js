import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Dashboard from "./components/Dashboard";
import Documents from "./components/Documents";
import ReqForms from "./components/ReqForms";
import Claiming from "./components/Claiming";
import Logs from "./components/Logs";
import Records from "./components/Records";
import Settings from "./components/Settings";

function App() {
  return (
    <div>
      <Sidebar />
      <Topbar />
      <Settings />
    </div>
  );
}

export default App;
