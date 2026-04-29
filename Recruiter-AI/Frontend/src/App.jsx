import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Jobs from './Pages/Jobs';
import Application from './Pages/Application';
import JobDetailsPage from './Pages/JobsDetailsPage';
import RecruiterDashboard from './Pages/RecruiterDashboard';
import CandidateDashboard from './Pages/CandidateDashboard';
import AdminDashboard from './Pages/AdminDashboard';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './Components/ProtectedRoute';
import DashboardRouter from './Components/DashboardRouter';

const App = () => {
  return (
    <AuthProvider>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/jobs' element={<Jobs />} />
          <Route path='/jobs/:id' element={<JobDetailsPage />} />
          <Route path='/dashboard' element={<DashboardRouter />} />
          <Route
            path='/recruiter-dashboard'
            element={
              <ProtectedRoute requiredRole='recruiter'>
                <RecruiterDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path='/candidate-dashboard'
            element={
              <ProtectedRoute requiredRole='candidate'>
                <CandidateDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path='/admin-dashboard'
            element={
              <ProtectedRoute requiredRole='admin'>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route path='/applications' element={<Application />} />
        </Routes>
        <Footer />
      </div>
    </AuthProvider>
  );
};

export default App;