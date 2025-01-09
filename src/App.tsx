import ProtectedRoute from "./components/layout/ProtectedRoute";
import MainLayout from "./layouts/MainLayout";

const App = () => {
  return (
    <ProtectedRoute>
      <MainLayout />
    </ProtectedRoute>
  );
};

export default App;
