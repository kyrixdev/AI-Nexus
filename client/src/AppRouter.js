import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddRecordForm from './AddRecordForm';

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/add-record" element={<AddRecordForm />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
