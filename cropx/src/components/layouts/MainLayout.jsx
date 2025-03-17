import { useLocation } from "react-router-dom";

export const MainLayout = () => {
  const location = useLocation();
  
  return (
    <div className={location.pathname === "/" ? "" : "container mx-auto p-4"}>
      <Outlet/>
    </div>
  );
};