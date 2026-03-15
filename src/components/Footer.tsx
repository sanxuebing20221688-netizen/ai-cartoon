import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-gray-800 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              🎭 互动漫画世界
            </h3>
            <p className="text-gray-400 mb-6">
              AI驱动的互动故事平台，你的选择决定故事结局。
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">导航</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/" className="hover:text-purple-400 transition-colors">首页</Link></li>
              <li><Link to="/create" className="hover:text-purple-400 transition-colors">创作</Link></li>
              <li><Link to="/browse" className="hover:text-purple-400 transition-colors">浏览</Link></li>
              <li><Link to="/profile" className="hover:text-purple-400 transition-colors">我的</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">联系我们</h4>
            <ul className="space-y-2 text-gray-400">
              <li>hello@icomic.ai</li>
              <li>反馈建议</li>
              <li>帮助中心</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          © 2026 互动漫画世界. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
