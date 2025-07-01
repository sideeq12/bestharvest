import React from 'react';
import { BarChart3, TrendingUp, Droplets, Thermometer, Calendar, Package } from 'lucide-react';

const Dashboard: React.FC = () => {
  const stats = [
    { label: 'Total Harvest', value: '1,290 kg', icon: Package, color: 'bg-emerald-500' },
    { label: 'Pepper Yield', value: '645 kg', icon: TrendingUp, color: 'bg-red-500' },
    { label: 'Tomato Yield', value: '645 kg', icon: BarChart3, color: 'bg-red-600' },
    { label: 'Water Usage', value: '12,270 L', icon: Droplets, color: 'bg-blue-500' },
  ];

  const monthlyData = [
    { month: 'Mar', peppers: 68, tomatoes: 0 },
    { month: 'Apr', peppers: 127, tomatoes: 0 },
    { month: 'May', peppers: 190, tomatoes: 82 },
    { month: 'Jun', peppers: 159, tomatoes: 145 },
    { month: 'Jul', peppers: 127, tomatoes: 218 },
    { month: 'Aug', peppers: 100, tomatoes: 163 },
    { month: 'Sep', peppers: 82, tomatoes: 109 },
    { month: 'Oct', peppers: 54, tomatoes: 36 },
  ];

  return (
    <section id="dashboard" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Farm Dashboard</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-time insights into our farming operations and harvest data from Shaki, Oyo State
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className={`${stat.color} rounded-full p-3`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Monthly Harvest Chart */}
      

          {/* Current Conditions */}
          
        </div>
      </div>
    </section>
  );
};

export default Dashboard;