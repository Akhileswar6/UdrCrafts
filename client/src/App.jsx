import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Lazy loading pages
const Splash = React.lazy(() => import('./pages/Splash'));
const Login = React.lazy(() => import('./pages/Login'));
const OTP = React.lazy(() => import('./pages/OTP'));
const Welcome = React.lazy(() => import('./pages/Welcome'));
const BasicInfo = React.lazy(() => import('./pages/BasicInfo'));
const DocumentUpload = React.lazy(() => import('./pages/DocumentUpload'));
const DrivingLicense = React.lazy(() => import('./pages/DrivingLicense'));
const LocationPage = React.lazy(() => import('./pages/LocationPage'));
const Review = React.lazy(() => import('./pages/Review'));
const Verification = React.lazy(() => import('./pages/Verification'));
const Success = React.lazy(() => import('./pages/Success'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="min-h-screen bg-background text-foreground font-sans">
          <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div></div>}>
            <Routes>
              <Route path="/" element={<Splash />} />
              <Route path="/login" element={<Login />} />
              <Route path="/otp" element={<OTP />} />
              <Route path="/welcome" element={<Welcome />} />
              <Route path="/basic-info" element={<BasicInfo />} />
              <Route path="/documents" element={<DocumentUpload />} />
              <Route path="/license" element={<DrivingLicense />} />
              <Route path="/location" element={<LocationPage />} />
              <Route path="/review" element={<Review />} />
              <Route path="/verification" element={<Verification />} />
              <Route path="/success" element={<Success />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
