'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, Download, Calendar, TrendingUp, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import Link from 'next/link';

interface ReportData {
  month: string;
  attendance: number;
  tasks: number;
  performance: number;
  leaves: number;
}

export default function ReportsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState('2024-01');

  const monthlyData: ReportData[] = [
    { month: 'Jan', attendance: 95, tasks: 85, performance: 88, leaves: 2 },
    { month: 'Feb', attendance: 92, tasks: 90, performance: 85, leaves: 1 },
    { month: 'Mar', attendance: 98, tasks: 88, performance: 92, leaves: 0 },
    { month: 'Apr', attendance: 94, tasks: 92, performance: 89, leaves: 3 },
    { month: 'May', attendance: 96, tasks: 87, performance: 91, leaves: 1 },
    { month: 'Jun', attendance: 93, tasks: 94, performance: 90, leaves: 2 },
  ];

  const weeklyAttendance = [
    { day: 'Mon', hours: 8.5, status: 'present' },
    { day: 'Tue', hours: 8.0, status: 'present' },
    { day: 'Wed', hours: 7.5, status: 'late' },
    { day: 'Thu', hours: 8.5, status: 'present' },
    { day: 'Fri', hours: 6.0, status: 'half-day' },
    { day: 'Sat', hours: 0, status: 'weekend' },
    { day: 'Sun', hours: 0, status: 'weekend' },
  ];

  const taskCategories = [
    { category: 'Development', completed: 15, total: 20, percentage: 75 },
    { category: 'Design', completed: 8, total: 10, percentage: 80 },
    { category: 'Testing', completed: 12, total: 15, percentage: 80 },
    { category: 'Documentation', completed: 5, total: 8, percentage: 62.5 },
    { category: 'Meetings', completed: 20, total: 25, percentage: 80 },
  ];

  const performanceMetrics = [
    { metric: 'Task Completion', value: 85, target: 90, trend: 'up' },
    { metric: 'Attendance Rate', value: 95, target: 95, trend: 'stable' },
    { metric: 'Quality Score', value: 88, target: 85, trend: 'up' },
    { metric: 'Team Collaboration', value: 92, target: 90, trend: 'up' },
    { metric: 'Learning Hours', value: 45, target: 60, trend: 'down' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'present': return 'bg-green-100 text-green-800';
      case 'late': return 'bg-yellow-100 text-yellow-800';
      case 'absent': return 'bg-red-100 text-red-800';
      case 'half-day': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="h-4 w-4 text-green-600" />;
      case 'down': return <TrendingUp className="h-4 w-4 text-red-600 transform rotate-180" />;
      default: return <TrendingUp className="h-4 w-4 text-gray-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <Link href="/user" className="mr-4">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Dashboard
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Reports & Analytics</h1>
                <p className="text-gray-600">Comprehensive reports and performance analytics</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export Report
              </Button>
              <Button size="sm">
                <Calendar className="h-4 w-4 mr-2" />
                Generate Report
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Period Selector */}
        <div className="mb-6">
          <label htmlFor="period" className="block text-sm font-medium text-gray-700 mb-2">
            Report Period
          </label>
          <input
            type="month"
            id="period"
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Avg Attendance</p>
                  <p className="text-2xl font-bold text-gray-900">94.7%</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-green-100 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Task Completion</p>
                  <p className="text-2xl font-bold text-gray-900">89.3%</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Performance</p>
                  <p className="text-2xl font-bold text-gray-900">88.8%</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <AlertCircle className="h-6 w-6 text-orange-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Leave Days</p>
                  <p className="text-2xl font-bold text-gray-900">9 days</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Monthly Trends Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Monthly Performance Trends</CardTitle>
              <CardDescription>6-month performance overview</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {monthlyData.map((data, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="font-semibold text-gray-900">{data.month}</h3>
                      <div className="flex space-x-4 text-sm">
                        <span className="text-blue-600">A: {data.attendance}%</span>
                        <span className="text-green-600">T: {data.tasks}%</span>
                        <span className="text-purple-600">P: {data.performance}%</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <span className="text-xs text-gray-500 w-16">Attendance</span>
                        <div className="flex-1 bg-gray-200 rounded-full h-2 mx-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${data.attendance}%` }}></div>
                        </div>
                        <span className="text-xs text-gray-600">{data.attendance}%</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-xs text-gray-500 w-16">Tasks</span>
                        <div className="flex-1 bg-gray-200 rounded-full h-2 mx-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: `${data.tasks}%` }}></div>
                        </div>
                        <span className="text-xs text-gray-600">{data.tasks}%</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-xs text-gray-500 w-16">Performance</span>
                        <div className="flex-1 bg-gray-200 rounded-full h-2 mx-2">
                          <div className="bg-purple-500 h-2 rounded-full" style={{ width: `${data.performance}%` }}></div>
                        </div>
                        <span className="text-xs text-gray-600">{data.performance}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Weekly Attendance Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Weekly Attendance</CardTitle>
              <CardDescription>This week's detailed attendance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {weeklyAttendance.map((day, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-sm font-medium text-gray-600 w-8">{day.day}</span>
                      <div className="flex-1 bg-gray-200 rounded-full h-3">
                        <div 
                          className={`h-3 rounded-full ${
                            day.status === 'present' ? 'bg-green-500' :
                            day.status === 'late' ? 'bg-yellow-500' :
                            day.status === 'half-day' ? 'bg-orange-500' :
                            'bg-gray-300'
                          }`}
                          style={{ width: `${(day.hours / 8) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-gray-900">{day.hours}h</span>
                      <Badge className={getStatusColor(day.status)}>
                        {day.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Task Categories */}
          <Card>
            <CardHeader>
              <CardTitle>Task Completion by Category</CardTitle>
              <CardDescription>Breakdown of completed tasks by category</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {taskCategories.map((category, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold text-gray-900">{category.category}</h3>
                      <span className="text-sm font-medium text-gray-600">
                        {category.completed}/{category.total}
                      </span>
                    </div>
                    <div className="mb-2">
                      <Progress value={category.percentage} className="h-2" />
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Completion Rate</span>
                      <span>{category.percentage}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Performance Metrics */}
          <Card>
            <CardHeader>
              <CardTitle>Performance Metrics</CardTitle>
              <CardDescription>Key performance indicators vs targets</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {performanceMetrics.map((metric, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold text-gray-900">{metric.metric}</h3>
                      <div className="flex items-center space-x-2">
                        {getTrendIcon(metric.trend)}
                        <span className="text-sm font-medium text-gray-900">
                          {metric.value}%
                        </span>
                      </div>
                    </div>
                    <div className="mb-2">
                      <Progress value={metric.value} className="h-2" />
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Target: {metric.target}%</span>
                      <span>{metric.value >= metric.target ? '✓ On Target' : '⚠ Below Target'}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Reports Table */}
        <Card>
          <CardHeader>
            <CardTitle>Detailed Reports</CardTitle>
            <CardDescription>Comprehensive breakdown of all metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Metric
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Current
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Target
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Trend
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Attendance Rate
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">94.7%</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">95%</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <TrendingUp className="h-4 w-4 text-green-600" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Badge className="bg-green-100 text-green-800">On Track</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Task Completion
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">89.3%</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">90%</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <TrendingUp className="h-4 w-4 text-green-600" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Badge className="bg-yellow-100 text-yellow-800">Below Target</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Performance Score
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">88.8%</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">85%</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <TrendingUp className="h-4 w-4 text-green-600" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Badge className="bg-green-100 text-green-800">Exceeding</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Learning Hours
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">45h</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">60h</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <TrendingUp className="h-4 w-4 text-red-600 transform rotate-180" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Badge className="bg-red-100 text-red-800">Behind</Badge>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 