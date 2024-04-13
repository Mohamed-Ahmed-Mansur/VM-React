import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import ProcessTable from "../pages/processes";

const AppRoutes: React.FC = () => {

    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/processes" element={<ProcessTable />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;