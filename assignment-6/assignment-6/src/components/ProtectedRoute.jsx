import { Navigate } from "react-router";
export default function ProtectedRoute({
  isAuthenticated,
  role,
  allowedRole,
  children,
}) {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  if (allowedRole && role !== allowedRole) {
    return <Navigate to="/" replace />;
  }
  return children;
}
