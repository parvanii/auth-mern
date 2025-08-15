import { Navigate, Route, Routes } from "react-router-dom";
import { useEffect } from "react";

import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import EmailVerificationPage from "./pages/EmailVerificationPage";
import LoadingSpinner from "./components/LoadingSpinner";
import HomePage from "./pages/HomePage"; 
import ForgotPasswordPage from "./pages/ForgotPasswordPage.jsx"

import ResetPasswordPage from "./pages/ResetPasswordPage.jsx"
import { useAuthStore } from "./store/authStore";


// protect routes that require authentication
const ProtectedRoute = ({ children }) => {
	const { isAuthenticated, user } = useAuthStore();

	if (!isAuthenticated) {
		return <Navigate to='/login' replace />;
	}

	if (!user.isVerified) {
		return <Navigate to='/verify-email' replace />;
	}

	return children;
};

// redirect authenticated users to the home page
const RedirectAuthenticatedUser = ({ children }) => {
	const { isAuthenticated, user } = useAuthStore();

	if (isAuthenticated && user.isVerified) {
		return <Navigate to='/' replace />;
	}

	return children;
};

function App() {
	const { isCheckingAuth, checkAuth } = useAuthStore();

	useEffect(() => {
		checkAuth();
	}, [checkAuth]);

	if (isCheckingAuth) return <LoadingSpinner />;

	return (
		<div
			className="min-h-screen bg-gradient-to-br
      from-gray-900 via-blue-900 to-blue-700 flex items-center justify-center relative overflow-hidden"
		>
			<Routes>
				<Route
					path="/"
					element={
						<ProtectedRoute>
							<HomePage />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/signup"
					element={
						<RedirectAuthenticatedUser>
							<SignUpPage />
						</RedirectAuthenticatedUser>
					}
				/>
				<Route
					path="/login"
					element={
						<RedirectAuthenticatedUser>
							<LoginPage />
						</RedirectAuthenticatedUser>
					}
				/>


				<Route
					path='/reset-password/:token'
					element={
						<RedirectAuthenticatedUser>
							<ResetPasswordPage />
						</RedirectAuthenticatedUser>
					}
				/>
        <Route path='/verify-email' element={<EmailVerificationPage />} />

				<Route
					path='/forgot-password'
					element={
						<RedirectAuthenticatedUser>
							<ForgotPasswordPage />
						</RedirectAuthenticatedUser>
					}
				/>

				{/* catch all routes */}
				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
			
		</div>
	);
}

export default App;
