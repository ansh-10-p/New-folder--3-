'use client';

import { useState } from 'react';
import { Bell, Search, Settings, LogOut, Menu, X, ChevronRight, Download, TrendingUp } from 'lucide-react';

export default function BuyerDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { label: 'Total Orders', value: '24', change: '+12.5%', trend: 'up' },
    { label: 'Total Spent', value: '$2,847.50', change: '+$450 this month', trend: 'up' },
    { label: 'Active Orders', value: '3', change: '+2 this week', trend: 'up' },
    { label: 'Member Since', value: '8 months', change: 'Gold Tier', trend: 'neutral' },
  ];

  const activeOrders = [
    {
      id: '#ORD-2024-8472',
      merchant: 'FreshBox Organics',
      products: 'Organic Produce Bundle',
      amount: '$45.99',
      status: 'in-transit',
      est: 'Today, 6 PM',
      progress: 75,
    },
    {
      id: '#ORD-2024-8471',
      merchant: 'Artisan Bakery Co.',
      products: 'Sourdough Bread Pack (x2)',
      amount: '$24.50',
      status: 'processing',
      est: 'Tomorrow, 10 AM',
      progress: 30,
    },
    {
      id: '#ORD-2024-8470',
      merchant: 'Local Honey House',
      products: 'Raw Honey 500ml',
      amount: '$18.00',
      status: 'pending',
      est: '2 days',
      progress: 10,
    },
  ];

  const recentPurchases = [
    { name: 'Organic Coffee Beans', merchant: 'FreshBox Organics', price: '$12.99', date: 'Mar 28', rating: 5 },
    { name: 'Handmade Soap Set', merchant: 'Local Artisans', price: '$28.00', date: 'Mar 25', rating: 4 },
    { name: 'Ceramic Mug', merchant: 'Studio Home', price: '$15.50', date: 'Mar 22', rating: 5 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'in-transit':
        return 'bg-blue-100 text-blue-700';
      case 'processing':
        return 'bg-amber-100 text-amber-700';
      case 'pending':
        return 'bg-gray-100 text-gray-700';
      case 'delivered':
        return 'bg-green-100 text-green-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'in-transit': return 'In Transit';
      case 'processing': return 'Processing';
      case 'pending': return 'Pending';
      case 'delivered': return 'Delivered';
      default: return status;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? 'w-64' : 'w-0'
        } transition-all duration-300 overflow-hidden bg-white border-r border-gray-200 fixed lg:relative h-full z-40`}
      >
        <div className="h-16 flex items-center px-6 border-b border-gray-200">
          <h1 className="text-xl font-bold text-indigo-600">Market Hub</h1>
        </div>

        <nav className="flex-1 px-3 py-6 space-y-1 overflow-y-auto">
          {[
            { icon: '📊', label: 'Dashboard', tab: 'overview' },
            { icon: '📦', label: 'My Orders', tab: 'orders', badge: '3' },
            { icon: '❤️', label: 'Wishlist', tab: 'wishlist' },
            { icon: '⭐', label: 'Reviews', tab: 'reviews' },
            { icon: '💬', label: 'Messages', tab: 'messages' },
          ].map((item) => (
            <button
              key={item.tab}
              onClick={() => setActiveTab(item.tab)}
              className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg transition-all ${
                activeTab === item.tab
                  ? 'bg-indigo-50 text-indigo-600 font-semibold'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <span className="flex items-center gap-3">
                <span className="text-lg">{item.icon}</span>
                {item.label}
              </span>
              {item.badge && (
                <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-200 space-y-2">
          <button className="w-full flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition">
            <Settings size={18} />
            <span className="text-sm font-medium">Settings</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition">
            <LogOut size={18} />
            <span className="text-sm font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white border-b border-gray-200 px-6 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition"
            >
              {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div>
              <h2 className="text-base font-semibold text-gray-900">Welcome back, Alex!</h2>
              <p className="text-xs text-gray-500">You have 3 active orders</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:block relative w-64">
              <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
              />
            </div>

            <button className="p-2 hover:bg-gray-100 rounded-lg transition relative">
              <Bell size={20} className="text-gray-600" />
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
            </button>

            <div className="w-9 h-9 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-semibold text-sm cursor-pointer">
              AJ
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto">
          {activeTab === 'overview' && (
            <div className="p-6 space-y-6">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-5 border border-gray-200 hover:shadow-md transition">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{stat.label}</p>
                        <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                      </div>
                      <span className={`text-xs font-semibold ${stat.trend === 'up' ? 'text-green-600' : 'text-gray-600'}`}>
                        {stat.change}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Active Orders */}
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">Active Orders</h3>
                  <ChevronRight size={20} className="text-gray-400" />
                </div>

                <div className="divide-y divide-gray-100">
                  {activeOrders.map((order) => (
                    <div key={order.id} className="px-6 py-4 hover:bg-gray-50 transition">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-gray-900">{order.merchant}</p>
                          <p className="text-xs text-gray-500 mt-0.5">{order.id}</p>
                          <p className="text-sm text-gray-600 mt-2">{order.products}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-gray-900">{order.amount}</p>
                          <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded mt-2 ${getStatusColor(order.status)}`}>
                            {getStatusText(order.status)}
                          </span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">Est. {order.est}</span>
                          <span className="text-xs font-semibold text-gray-600">{order.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div className="bg-indigo-600 h-1.5 rounded-full" style={{ width: `${order.progress}%` }}></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent & Summary */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                  <div className="px-6 py-4 border-b border-gray-200">
                    <h3 className="font-semibold text-gray-900">Recent Purchases</h3>
                  </div>
                  <div className="divide-y divide-gray-100">
                    {recentPurchases.map((purchase, idx) => (
                      <div key={idx} className="px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition">
                        <div>
                          <p className="text-sm font-medium text-gray-900">{purchase.name}</p>
                          <p className="text-xs text-gray-500">{purchase.merchant}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-semibold text-gray-900">{purchase.price}</p>
                          <p className="text-xs text-gray-500">{purchase.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-900">Account Summary</h3>
                    <Download size={18} className="text-gray-400" />
                  </div>
                  <div className="space-y-4">
                    <div className="pb-4 border-b border-gray-100">
                      <p className="text-xs text-gray-500 uppercase font-semibold">Member Status</p>
                      <p className="text-lg font-bold text-indigo-600 mt-1">Gold Member</p>
                      <p className="text-xs text-gray-500 mt-1">Unlocked 8 months ago</p>
                    </div>
                    <div className="pb-4 border-b border-gray-100">
                      <p className="text-xs text-gray-500 uppercase font-semibold">Loyalty Points</p>
                      <p className="text-lg font-bold text-gray-900 mt-1">4,280 Points</p>
                      <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                        <div className="bg-amber-400 h-1.5 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-semibold">Next Reward</p>
                      <p className="text-sm font-semibold text-gray-900 mt-1">$50 Store Credit</p>
                      <p className="text-xs text-gray-500 mt-0.5">720 points away</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'orders' && (
            <div className="p-6">
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="font-semibold text-gray-900">Order History</h3>
                </div>
                <div className="divide-y divide-gray-100">
                  {activeOrders.map((order) => (
                    <div key={order.id} className="px-6 py-4 hover:bg-gray-50 transition flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900">{order.merchant}</p>
                        <p className="text-sm text-gray-500">{order.id}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">{order.amount}</p>
                        <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded mt-1 ${getStatusColor(order.status)}`}>
                          {getStatusText(order.status)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {['wishlist', 'reviews', 'messages'].includes(activeTab) && (
            <div className="p-6">
              <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
                <p className="text-gray-500">Content coming soon</p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
