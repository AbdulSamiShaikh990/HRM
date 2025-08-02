'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, TrendingUp, CalendarDays, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface AttendanceRecord {
  date: string;
  checkIn: string;
  checkOut: string;
  totalHours: number;
  status: 'present' | 'absent' | 'late' | 'half-day';
  overtime: number;
  breakTime: number;
}

export default function AttendancePage() {
  const [selectedMonth, setSelectedMonth] = useState('2024-01');
  
  const attendanceData: AttendanceRecord[] = [
    { date: '2024-01-15', checkIn: '09:00', checkOut: '17:30', totalHours: 8.5, status: 'present', overtime: 0.5, breakTime: 1 },
    { date: '2024-01-14', checkIn: '08:45', checkOut: '17:15', totalHours: 8.5, status: 'present', overtime: 0.25, breakTime: 1 },
    { date: '2024-01-13', checkIn: '09:15', checkOut: '17:00', totalHours: 7.75, status: 'late', overtime: 0, breakTime: 1 },
    { date: '2024-01-12', checkIn: '09:00', checkOut: '13:00', totalHours: 4, status: 'half-day', overtime: 0, breakTime: 0.5 },
    { date: '2024-01-11', checkIn: '09:00', checkOut: '17:30', totalHours: 8.5, status: 'present', overtime: 0.5, breakTime: 1 },
    { date: '2024-01-10', checkIn: '08:30', checkOut: '17:00', totalHours: 8.5, status: 'present', overtime: 0.25, breakTime: 1 },
    { date: '2024-01-09', checkIn: '09:00', checkOut: '17:30', totalHours: 8.5, status: 'present', overtime: 0.5, breakTime: 1 },
    { date: '2024-01-08', checkIn: '09:15', checkOut: '17:15', totalHours: 8, status: 'late', overtime: 0, breakTime: 1 },
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

  const totalHours = attendanceData.reduce((sum, record) => sum + record.totalHours, 0);
  const averageHours = totalHours / attendanceData.length;
  const totalOvertime = attendanceData.reduce((sum, record) => sum + record.overtime, 0);
  const presentDays = attendanceData.filter(record => record.status === 'present').length;
  const attendanceRate = (presentDays / attendanceData.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-4">
            <Link href="/user" className="mr-4">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Attendance Details</h1>
              <p className="text-gray-600">Track your daily attendance and work hours</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Month Selector */}
        <div className="mb-6">
          <label htmlFor="month" className="block text-sm font-medium text-gray-700 mb-2">
            Select Month
          </label>
          <input
            type="month"
            id="month"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
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
                  <p className="text-sm font-medium text-gray-600">Total Hours</p>
                  <p className="text-2xl font-bold text-gray-900">{totalHours.toFixed(1)}h</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-green-100 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Average Hours</p>
                  <p className="text-2xl font-bold text-gray-900">{averageHours.toFixed(1)}h</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <CalendarDays className="h-6 w-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Attendance Rate</p>
                  <p className="text-2xl font-bold text-gray-900">{attendanceRate.toFixed(1)}%</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Clock className="h-6 w-6 text-orange-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Overtime Hours</p>
                  <p className="text-2xl font-bold text-gray-900">{totalOvertime.toFixed(1)}h</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Attendance Table */}
        <Card>
          <CardHeader>
            <CardTitle>Attendance Records</CardTitle>
            <CardDescription>Detailed view of your daily attendance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Check In
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Check Out
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Total Hours
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Overtime
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Break Time
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {attendanceData.map((record, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {new Date(record.date).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {record.checkIn}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {record.checkOut}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {record.totalHours}h
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {record.overtime}h
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {record.breakTime}h
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Badge className={getStatusColor(record.status)}>
                          {record.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Calendar View */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Calendar View</CardTitle>
            <CardDescription>Monthly attendance calendar</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-1">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <div key={day} className="p-2 text-center text-sm font-medium text-gray-500">
                  {day}
                </div>
              ))}
              
              {/* Calendar days - simplified for demo */}
              {Array.from({ length: 31 }, (_, i) => {
                const day = i + 1;
                const date = `2024-01-${day.toString().padStart(2, '0')}`;
                const record = attendanceData.find(r => r.date === date);
                
                return (
                  <div
                    key={day}
                    className={`p-2 text-center text-sm border rounded ${
                      record
                        ? record.status === 'present'
                          ? 'bg-green-100 text-green-800'
                          : record.status === 'late'
                          ? 'bg-yellow-100 text-yellow-800'
                          : record.status === 'absent'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-orange-100 text-orange-800'
                        : 'bg-gray-50 text-gray-400'
                    }`}
                  >
                    {day}
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 