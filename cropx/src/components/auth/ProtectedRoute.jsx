import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ component: Component, role }) => {
    const userRole = localStorage.getItem("role"); // Get user role from localStorage

    if (!userRole) {
        return <Navigate to="/login" />; // Redirect to login if not logged in
    }

    if (userRole !== role) {
        return <Navigate to="/" />; // Redirect to home if unauthorized
    }

    return <Component />;
};
