import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<div className="flex items-center justify-center min-h-screen text-2xl text-gray-400">创建页面开发中...</div>} />
          <Route path="/browse" element={<div className="flex items-center justify-center min-h-screen text-2xl text-gray-400">浏览页面开发中...</div>} />
          <Route path="/read/:id" element={<div className="flex items-center justify-center min-h-screen text-2xl text-gray-400">阅读页面开发中...</div>} />
          <Route path="/profile" element={<div className="flex items-center justify-center min-h-screen text-2xl text-gray-400">个人中心开发中...</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
