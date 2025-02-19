// The exported code uses Tailwind CSS. P.S:Install Tailwind CSS in your dev environment to ensure all styles work.
// start
import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import * as echarts from 'echarts';

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const chartRef = useRef<HTMLDivElement>(null);
  const revenueChartRef = useRef<HTMLDivElement>(null);

  const notifications = [
    { id: 1, message: 'New user registration: Emily Thompson', time: '2 minutes ago' },
    { id: 2, message: 'Sales target achieved for Q1 2025', time: '1 hour ago' },
    { id: 3, message: 'System update scheduled for tomorrow', time: '3 hours ago' },
  ];

  const kpiData = [
    { title: 'Total Revenue', value: '$2.4M', change: '+12.5%', icon: 'fa-solid fa-chart-line' },
    { title: 'Active Users', value: '8,742', change: '+5.2%', icon: 'fa-solid fa-users' },
    { title: 'Conversion Rate', value: '24.8%', change: '+3.1%', icon: 'fa-solid fa-percent' },
    { title: 'Avg. Response Time', value: '1.2s', change: '-8.3%', icon: 'fa-solid fa-clock' },
  ];

  const recentActivities = [
    { user: 'Alexander Mitchell', action: 'Updated dashboard settings', time: '10:45 AM' },
    { user: 'Victoria Reynolds', action: 'Generated monthly report', time: '09:30 AM' },
    { user: 'Christopher Anderson', action: 'Added new team member', time: '08:15 AM' },
    { user: 'Elizabeth Parker', action: 'Modified user permissions', time: 'Yesterday' },
  ];

  useEffect(() => {
    if (chartRef.current) {
      const chart = echarts.init(chartRef.current);
      const option = {
        animation: false,
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          axisLine: {
            lineStyle: {
              color: '#94a3b8'
            }
          }
        },
        yAxis: {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: '#94a3b8'
            }
          }
        },
        series: [
          {
            name: 'Users',
            type: 'line',
            smooth: true,
            data: [3200, 4500, 5800, 4800, 6000, 7200],
            lineStyle: {
              color: '#2563eb'
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: 'rgba(37, 99, 235, 0.3)' },
                { offset: 1, color: 'rgba(37, 99, 235, 0.1)' }
              ])
            }
          }
        ]
      };
      chart.setOption(option);
    }

    if (revenueChartRef.current) {
      const revenueChart = echarts.init(revenueChartRef.current);
      const revenueOption = {
        animation: false,
        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            type: 'pie',
            radius: ['60%', '80%'],
            data: [
              { value: 45, name: 'Product A' },
              { value: 25, name: 'Product B' },
              { value: 15, name: 'Product C' },
              { value: 15, name: 'Others' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };
      revenueChart.setOption(revenueOption);
    }
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`fixed h-full bg-white shadow-lg transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-20'}`}>
        <div className="flex items-center justify-between p-6 border-b">
          <h1 className={`text-xl font-bold text-blue-600 ${!isSidebarOpen && 'hidden'}`}>AdminPro</h1>
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-gray-500 hover:text-blue-600 transition-colors !rounded-button whitespace-nowrap"
          >
            <i className={`fa-solid ${isSidebarOpen ? 'fa-chevron-left' : 'fa-chevron-right'}`}></i>
          </button>
        </div>
        
        <nav className="p-4">
          {[
            { id: 'dashboard', icon: 'fa-chart-pie', label: 'Dashboard' },
            { id: 'analytics', icon: 'fa-chart-line', label: 'Analytics' },
            { id: 'users', icon: 'fa-users', label: 'Users' },
            { id: 'settings', icon: 'fa-cog', label: 'Settings' }
          ].map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center p-3 mb-2 rounded-lg transition-colors !rounded-button whitespace-nowrap
                ${activeTab === item.id ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}
            >
              <i className={`fa-solid ${item.icon} w-6`}></i>
              <span className={`ml-3 ${!isSidebarOpen && 'hidden'}`}>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-20'}`}>
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 pl-10 pr-4 py-2 rounded-lg bg-gray-50 border-none text-sm focus:ring-2 focus:ring-blue-500"
                />
                <i className="fa-solid fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"></i>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors !rounded-button whitespace-nowrap">
                <i className="fa-solid fa-bell text-xl"></i>
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center space-x-3">
                <img
                  src="https://public.readdy.ai/ai/img_res/a55bb12bdfae58946ca87dc40d8dfc21.jpg"
                  alt="Profile"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className={`${!isSidebarOpen && 'hidden'}`}>
                  <p className="font-medium text-gray-800">James Wilson</p>
                  <p className="text-sm text-gray-500">Administrator</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {kpiData.map((kpi, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-gray-500">{kpi.title}</div>
                  <i className={`${kpi.icon} text-blue-600`}></i>
                </div>
                <div className="flex items-end space-x-2">
                  <div className="text-2xl font-bold text-gray-800">{kpi.value}</div>
                  <div className={`text-sm ${kpi.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                    {kpi.change}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">User Growth</h2>
              <div ref={chartRef} style={{ height: '400px' }}></div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Revenue Distribution</h2>
              <div ref={revenueChartRef} style={{ height: '400px' }}></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Activities</h2>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="flex-1">
                      <p className="font-medium text-gray-800">{activity.user}</p>
                      <p className="text-sm text-gray-500">{activity.action}</p>
                    </div>
                    <div className="text-sm text-gray-400">{activity.time}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Notifications</h2>
              <div className="space-y-4">
                {notifications.map((notification) => (
                  <div key={notification.id} className="flex items-start space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="flex-1">
                      <p className="text-gray-800">{notification.message}</p>
                      <p className="text-sm text-gray-500">{notification.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Settings Modal */}
      {isSettingsOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-xl font-bold text-gray-800">Settings</h2>
              <button 
                onClick={() => setIsSettingsOpen(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors !rounded-button whitespace-nowrap"
              >
                <i className="fa-solid fa-times"></i>
              </button>
            </div>
            <div className="p-6">
              {/* Settings content */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
// end
