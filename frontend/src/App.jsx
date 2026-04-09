import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import CreateInterviewPage from "./pages/CreateInterviewPage";
import LiveInterviewPage from "./pages/LiveInterviewPage";
import FinalResultPage from "./pages/FinalResultPage";
import HistoryPage from "./pages/HistoryPage";
import SubscriptionPage from "./pages/SubscriptionPage";
import PaymentPage from "./pages/PaymentPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/create-interview" element={<CreateInterviewPage />} />
        <Route path="/live-interview" element={<LiveInterviewPage />} />
        <Route path="/final-result" element={<FinalResultPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/subscription" element={<SubscriptionPage />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;