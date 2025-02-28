import { Home } from "../components/pages/Home";
import { UserManagement } from "../components/pages/UserManagement";
import { Setting } from "../components/pages/Setting";

export const HomeRoutes = [
    {
        path: "/home",
        element: <Home />
    },
    {
        path: "/home/user_management",
        element: <UserManagement />
    },
    {
        path: "/home/setting",
        element: <Setting />
    }
]