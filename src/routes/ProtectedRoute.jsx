import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading } = useAuth0();

  // jab tak auth check ho raha hai
  if (isLoading) return <p>Loading...</p>;

  // agar login hai → allow
  if (isAuthenticated) return children;

  // agar login nahi → login page
  return <Navigate to="/" />;
}