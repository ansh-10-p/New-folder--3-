'use client';

import { useState } from 'react';
import { Bell, Search, TrendingUp, Plus, Menu, X, Settings, LogOut, Eye, Edit, Trash2, MoreVertical, ChevronRight, Download } from 'lucide-react';

export default function SellerDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [timeRange, setTimeRange] = useState('week');

  const stats = [
    { label: 'Total Revenue', value: '$12,847.50', change: '+23.5%' },
    { label: 'Total Orders', value: '487', change: '+18.2%' },
    { label: 'Active Products', value: '23', change: '+4' },
    { label: 'Avg Rating', value: '4.8/5', change: '+0.2' },
  ];

  const products = [
    { id: '#PRD-2024-001', name: 'Organic Coffee Beans', category: 'Beverages', price: '$12.99', stock: 245, sales: 2847, status: 'Active' },
    { id: '#PRD-2024-002', name: 'Fresh Seasonal Vegetables', category: 'Produce', price: '$8.50', stock: 412, sales: 1956, status: 'Active' },
    { id: '#PRD-2024-003', name: 'Local Raw Honey', category: 'Specialty', price: '$15.00', stock: 89, sales: 956, status: 'Low Stock' },
  ];

  const orders = [
    { id: '#ORD-2024-1001', customer: 'Sarah Johnson', amount: '$145.99', items: 5, status: 'Fulfilled', date: '2024-03-28', revenue: '$145.99' },
    { id: '#ORD-2024-1002', customer: 'Michael Chen', amount: '$82.50', items: 3, status: 'Processing', date: '2024-03-29', revenue: '$82.50' },
    { id: '#ORD-2024-1003', customer: 'Emma Williams', amount: '$225.00', items: 8, status: 'Shipped', date: '2024-03-29', revenue: '$225.00' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Fulfilled':
        return 'bg-green-100 text-green-700';
      case 'Shipped':
        return 'bg-blue-100 text-blue-700';
      case 'Processing':
        return 'bg-amber-100 text-amber-700';
      case 'Active':
        return 'bg-green-100 text-green-700';
      case 'Low Stock':
        return 'bg-orange-100 text-orange-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusText = (status: string) => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white border-b border-gray-200">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition"
            >
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <h1 className="text-xl font-bold text-gray-900">Seller Dashboard</h1>
            <nav className="hidden md:flex items-center gap-1 ml-8">
              {[
                { label: 'Overview', tab: 'overview' },
                { label: 'Products', tab: 'products' },
                { label: 'Orders', tab: 'orders' },
              ].map((item) => (
                <button
                  key={item.tab}
                  onClick={() => setActiveTab(item.tab)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition ${
                    activeTab === item.tab
                      ? 'text-indigo-600 bg-indigo-50'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:block relative w-48">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <input
                type="text"
                placeholder="Search orders..."
                className="w-full pl-9 pr-4 py-2 bg-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 border-0"
              />
            </div>
            <button className="relative p-2 hover:bg-gray-100 rounded-lg transition">
              <Bell size={20} className="text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="w-9 h-9 bg-indigo-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
              SB
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`${
            sidebarOpen ? 'w-64' : 'w-0'
          } transition-all duration-300 overflow-hidden bg-white border-r border-gray-200 fixed lg:relative h-[calc(100vh-70px)] lg:flex flex-col z-30`}
        >
          <nav className="flex-1 px-4 py-6 space-y-1">
            {[
              { label: 'Overview', tab: 'overview' },
              { label: 'Products', tab: 'products', badge: '23' },
              { label: 'Orders', tab: 'orders', badge: '12' },
              { label: 'Analytics', tab: 'analytics' },
              { label: 'Payouts', tab: 'payouts' },
            ].map((item) => (
              <button
                key={item.tab}
                onClick={() => setActiveTab(item.tab)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition text-sm font-medium ${
                  activeTab === item.tab
                    ? 'bg-indigo-50 text-indigo-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <span>{item.label}</span>
                {item.badge && <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded">{item.badge}</span>}
              </button>
            ))}
          </nav>

          <div className="px-4 py-4 space-y-1 border-t border-gray-200">
            <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition text-sm">
              <Settings size={18} />
              Settings
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition text-sm">
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 min-h-[calc(100vh-70px)]">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-5 border border-gray-200 hover:shadow-md transition">
                    <p className="text-xs font-semibold text-gray-500 uppercase">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                    <span className="text-xs font-semibold text-green-600">{stat.change}</span>
                  </div>
                ))}
              </div>

              {/* Charts Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Sales Chart */}
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-semibold text-gray-900">Sales Trend</h2>
                    <select
                      value={timeRange}
                      onChange={(e) => setTimeRange(e.target.value)}
                      className="px-3 py-1.5 bg-gray-50 rounded border border-gray-200 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      <option value="week">This Week</option>
                      <option value="month">This Month</option>
                      <option value="year">This Year</option>
                    </select>
                  </div>
                  <div className="h-40 flex items-end justify-around gap-2">
                    {[35, 50, 42, 65, 58, 75, 70].map((height, idx) => (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-2 group">
                        <div
                          className="w-full bg-indigo-600 rounded-t group-hover:bg-indigo-700 transition"
                          style={{ height: `${height}%` }}
                        ></div>
                        <span className="text-xs text-gray-500">D{idx + 1}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Top Products */}
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Top Performing</h2>
                  <div className="space-y-4">
                    {[
                      { name: 'Organic Coffee Beans', sales: 2847, percent: 85 },
                      { name: 'Fresh Vegetables', sales: 1956, percent: 65 },
                      { name: 'Local Honey', sales: 956, percent: 42 },
                    ].map((product, idx) => (
                      <div key={idx} className="space-y-2">
                        <div className="flex justify-between items-end">
                          <p className="text-sm font-medium text-gray-900">{product.name}</p>
                          <p className="text-xs text-gray-500">{product.sales} sales</p>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-indigo-600 rounded-full" style={{ width: `${product.percent}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Recent Orders */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-900">Recent Orders</h2>
                  <button className="text-indigo-600 text-sm font-medium hover:text-indigo-700">View All</button>
                </div>
                <div className="space-y-3">
                  {orders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-900">{order.customer}</p>
                        <p className="text-xs text-gray-500">{order.id}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-semibold text-indigo-600">{order.revenue}</span>
                        <span className={`text-xs font-semibold px-2 py-1 rounded ${getStatusColor(order.status)}`}>
                          {getStatusText(order.status)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'products' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Products</h2>
                <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700">
                  <Plus size={18} />
                  Add Product
                </button>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-900">Product</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-900">Category</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-900">Price</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-900">Stock</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-900">Sales</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-900">Status</th>
                      <th className="px-6 py-3 text-center text-xs font-semibold text-gray-900">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product) => (
                      <tr key={product.id} className="border-b border-gray-200 hover:bg-gray-50 transition">
                        <td className="px-6 py-4">
                          <p className="text-sm font-medium text-gray-900">{product.name}</p>
                          <p className="text-xs text-gray-500">{product.id}</p>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">{product.category}</td>
                        <td className="px-6 py-4 text-sm font-semibold text-gray-900">{product.price}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{product.stock}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{product.sales.toLocaleString()}</td>
                        <td className="px-6 py-4">
                          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getStatusColor(product.status)}`}>
                            {product.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <button className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">Edit</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'orders' && (
            <div className="space-y-6">
              <div className="flex gap-2">
                {['All', 'Processing', 'Shipped', 'Fulfilled'].map((filter) => (
                  <button
                    key={filter}
                    className="px-4 py-2 text-sm font-medium rounded-lg bg-white border border-gray-200 hover:border-indigo-600 hover:bg-indigo-50 transition"
                  >
                    {filter}
                  </button>
                ))}
              </div>

              <div className="space-y-3">
                {orders.map((order) => (
                  <div key={order.id} className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{order.customer}</p>
                        <p className="text-xs text-gray-500">{order.id} • {order.date}</p>
                      </div>
                      <p className="text-lg font-bold text-indigo-600">{order.amount}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-gray-600">{order.items} items</span>
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${getStatusColor(order.status)}`}>
                        {getStatusText(order.status)}
                      </span>
                      <button className="ml-auto text-indigo-600 text-sm font-medium hover:text-indigo-700">View Details</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <div className="text-center py-12">
                <TrendingUp size={48} className="mx-auto text-indigo-600 mb-4" />
                <p className="text-gray-600 text-lg">Advanced analytics coming soon</p>
              </div>
            </div>
          )}

          {activeTab === 'payouts' && (
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-lg p-6 text-white">
                <p className="text-sm opacity-90 mb-2">Available Balance</p>
                <p className="text-3xl font-bold">$2,847.50</p>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-900">Recent Payouts</h2>
                  <button className="flex items-center gap-2 text-indigo-600 text-sm font-medium hover:text-indigo-700">
                    <Download size={16} />
                    Export
                  </button>
                </div>
                <div className="space-y-2">
                  {['Mar 25, 2024', 'Mar 18, 2024', 'Mar 11, 2024'].map((date, idx) => (
                    <div key={idx} className="flex items-center justify-between px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                      <span className="text-sm text-gray-900">Payout on {date}</span>
                      <span className="text-sm font-semibold text-green-600">+$500.00</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
