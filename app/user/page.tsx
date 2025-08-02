'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Calendar, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  TrendingUp, 
  CalendarDays, 
  User, 
  LogOut, 
  ArrowRight,
  Home,
  BarChart3,
  Settings,
  Bell,
  Search,
  Menu,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface Task {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'completed' | 'in-progress';
  dueDate: string;
  priority: 'low' | 'medium' | 'high';
}

interface AttendanceRecord {
  date: string;
  checkIn: string;
  checkOut: string;
  totalHours: number;
  status: 'present' | 'absent' | 'late' | 'half-day';
}

interface LeaveRecord {
  id: string;
  type: string;
  startDate: string;
  endDate: string;
  status: 'pending' | 'approved' | 'rejected';
  reason: string;
}

export default function UserDashboard() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [checkInTime, setCheckInTime] = useState<string | null>(null);
  const [checkOutTime, setCheckOutTime] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Mock data - in real app, this would come from API
  const [tasks] = useState<Task[]>([
    {
      id: '1',
      title: 'Complete quarterly report',
      description: 'Prepare and submit Q4 performance report',
      status: 'completed',
      dueDate: '2024-01-15',
      priority: 'high'
    },
    {
      id: '2',
      title: 'Client meeting preparation',
      description: 'Prepare presentation for client meeting',
      status: 'in-progress',
      dueDate: '2024-01-20',
      priority: 'medium'
    },
    {
      id: '3',
      title: 'Code review',
      description: 'Review pull requests for team project',
      status: 'pending',
      dueDate: '2024-01-18',
      priority: 'low'
    }
  ]);

  const [attendance] = useState<AttendanceRecord[]>([
    { date: '2024-01-15', checkIn: '09:00', checkOut: '17:30', totalHours: 8.5, status: 'present' },
    { date: '2024-01-14', checkIn: '08:45', checkOut: '17:15', totalHours: 8.5, status: 'present' },
    { date: '2024-01-13', checkIn: '09:15', checkOut: '17:00', totalHours: 7.75, status: 'late' },
    { date: '2024-01-12', checkIn: '09:00', checkOut: '13:00', totalHours: 4, status: 'half-day' },
  ]);

  const [leaves] = useState<LeaveRecord[]>([
    {
      id: '1',
      type: 'Sick Leave',
      startDate: '2024-01-10',
      endDate: '2024-01-12',
      status: 'approved',
      reason: 'Medical appointment'
    },
    {
      id: '2',
      type: 'Annual Leave',
      startDate: '2024-01-25',
      endDate: '2024-01-26',
      status: 'pending',
      reason: 'Personal vacation'
    }
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleCheckIn = () => {
    setIsCheckedIn(true);
    setCheckInTime(currentTime.toLocaleTimeString());
    setCheckOutTime(null);
  };

  const handleCheckOut = () => {
    setIsCheckedIn(false);
    setCheckOutTime(currentTime.toLocaleTimeString());
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'approved': return 'bg-green-100 text-green-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const completedTasks = tasks.filter(task => task.status === 'completed').length;
  const pendingTasks = tasks.filter(task => task.status === 'pending').length;
  const inProgressTasks = tasks.filter(task => task.status === 'in-progress').length;

  const totalWorkHoursThisMonth = attendance.reduce((total, record) => total + record.totalHours, 0);
  const averageWorkHours = totalWorkHoursThisMonth / attendance.length || 0;

  // Weekly attendance data for chart
  const weeklyData = [
    { day: 'Mon', hours: 8.5, status: 'present' },
    { day: 'Tue', hours: 8.0, status: 'present' },
    { day: 'Wed', hours: 7.5, status: 'late' },
    { day: 'Thu', hours: 8.5, status: 'present' },
    { day: 'Fri', hours: 6.0, status: 'half-day' },
    { day: 'Sat', hours: 0, status: 'weekend' },
    { day: 'Sun', hours: 0, status: 'weekend' },
  ];

  const navigation = [
    { name: 'Dashboard', href: '/user', icon: Home, current: true },
    { name: 'Attendance', href: '/user/attendance', icon: Clock, current: false },
    { name: 'Tasks', href: '/user/tasks', icon: CheckCircle, current: false },
    { name: 'Leaves', href: '/user/leaves', icon: Calendar, current: false },
    { name: 'Performance', href: '/user/performance', icon: TrendingUp, current: false },
    { name: 'Reports', href: '/user/reports', icon: BarChart3, current: false },
    { name: 'Settings', href: '/user/settings', icon: Settings, current: false },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between h-16 px-6 border-b">
            <div className="flex items-center">
              <User className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">HRM</span>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-600"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          {/* Navigation */}
          <nav className="flex-1 px-4 py-6">
            <div className="space-y-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                      item.current
                        ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <Icon className="h-5 w-5 mr-3" />
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* User Profile at Bottom */}
          <div className="p-4 border-t">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">J</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">John Doe</p>
                <p className="text-xs text-gray-500">Employee</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col lg:pl-64">
        {/* Top header */}
        <div className="bg-white shadow-sm border-b">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-600 mr-4"
              >
                <Menu className="h-6 w-6" />
              </button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Employee Dashboard</h1>
                <p className="text-gray-600">Welcome back, John Doe</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-4">
                <div className="text-right">
                  <div className="text-sm text-gray-600">Current Time</div>
                  <div className="text-lg font-semibold text-gray-900">
                    {currentTime.toLocaleTimeString()}
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  <Bell className="h-4 w-4 mr-2" />
                  Notifications
                </Button>
              </div>
              <Button variant="outline" size="sm">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>

        {/* Main dashboard content */}
        <div className="flex-1 overflow-auto p-6">
          {/* Attendance Check-in/out */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                Today's Attendance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <div>
                    <p className="text-sm text-gray-600">Today's Status</p>
                    <p className="text-lg font-semibold">
                      {isCheckedIn ? 'Checked In' : 'Not Checked In'}
                    </p>
                  </div>
                  {checkInTime && (
                    <div>
                      <p className="text-sm text-gray-600">Check-in Time</p>
                      <p className="text-lg font-semibold text-green-600">{checkInTime}</p>
                    </div>
                  )}
                  {checkOutTime && (
                    <div>
                      <p className="text-sm text-gray-600">Check-out Time</p>
                      <p className="text-lg font-semibold text-red-600">{checkOutTime}</p>
                    </div>
                  )}
                </div>
                <div className="flex space-x-2">
                  {!isCheckedIn ? (
                    <Button onClick={handleCheckIn} className="bg-green-600 hover:bg-green-700">
                      Check In
                    </Button>
                  ) : (
                    <Button onClick={handleCheckOut} variant="outline">
                      Check Out
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-center">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4 text-center">
                    <p className="text-sm font-medium text-gray-600">Completed Tasks</p>
                    <p className="text-2xl font-bold text-gray-900">{completedTasks}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-center">
                  <div className="p-2 bg-yellow-100 rounded-lg">
                    <AlertCircle className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div className="ml-4 text-center">
                    <p className="text-sm font-medium text-gray-600">Pending Tasks</p>
                    <p className="text-2xl font-bold text-gray-900">{pendingTasks}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-center">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="ml-4 text-center">
                    <p className="text-sm font-medium text-gray-600">Avg Work Hours</p>
                    <p className="text-2xl font-bold text-gray-900">{averageWorkHours.toFixed(1)}h</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-center">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <CalendarDays className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="ml-4 text-center">
                    <p className="text-sm font-medium text-gray-600">Leave Balance</p>
                    <p className="text-2xl font-bold text-gray-900">12 days</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Weekly Attendance Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Weekly Attendance</CardTitle>
                <CardDescription>This week's work hours and attendance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {weeklyData.map((day, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 flex-1">
                        <span className="text-sm font-medium text-gray-600 w-8 text-center">{day.day}</span>
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${
                              day.status === 'present' ? 'bg-green-500' :
                              day.status === 'late' ? 'bg-yellow-500' :
                              day.status === 'half-day' ? 'bg-orange-500' :
                              'bg-gray-300'
                            }`}
                            style={{ width: `${(day.hours / 8) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                      <span className="text-sm font-medium text-gray-900 ml-4">{day.hours}h</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Performance Overview */}
            <Card>
              <CardHeader>
                <CardTitle>Performance Overview</CardTitle>
                <CardDescription>Your current performance metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Task Completion</span>
                      <span className="text-sm text-gray-600">
                        {completedTasks}/{tasks.length}
                      </span>
                    </div>
                    <Progress value={(completedTasks / tasks.length) * 100} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Attendance Rate</span>
                      <span className="text-sm text-gray-600">95%</span>
                    </div>
                    <Progress value={95} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Work Efficiency</span>
                      <span className="text-sm text-gray-600">88%</span>
                    </div>
                    <Progress value={88} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Performance Trends Chart */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Performance Trends</CardTitle>
              <CardDescription>Your performance and satisfaction over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-end justify-center space-x-4">
                {/* Performance Line */}
                <div className="flex items-end space-x-2">
                  <div className="w-8 bg-blue-100 rounded-t" style={{ height: '60%' }}>
                    <div className="h-full bg-blue-500 rounded-t"></div>
                  </div>
                  <div className="w-8 bg-blue-100 rounded-t" style={{ height: '75%' }}>
                    <div className="h-full bg-blue-500 rounded-t"></div>
                  </div>
                  <div className="w-8 bg-blue-100 rounded-t" style={{ height: '85%' }}>
                    <div className="h-full bg-blue-500 rounded-t"></div>
                  </div>
                  <div className="w-8 bg-blue-100 rounded-t" style={{ height: '95%' }}>
                    <div className="h-full bg-blue-500 rounded-t"></div>
                  </div>
                  <div className="w-8 bg-blue-100 rounded-t" style={{ height: '90%' }}>
                    <div className="h-full bg-blue-500 rounded-t"></div>
                  </div>
                  <div className="w-8 bg-blue-100 rounded-t" style={{ height: '98%' }}>
                    <div className="h-full bg-blue-500 rounded-t"></div>
                  </div>
                </div>
                
                {/* Satisfaction Line */}
                <div className="flex items-end space-x-2">
                  <div className="w-8 bg-green-100 rounded-t" style={{ height: '55%' }}>
                    <div className="h-full bg-green-500 rounded-t"></div>
                  </div>
                  <div className="w-8 bg-green-100 rounded-t" style={{ height: '70%' }}>
                    <div className="h-full bg-green-500 rounded-t"></div>
                  </div>
                  <div className="w-8 bg-green-100 rounded-t" style={{ height: '80%' }}>
                    <div className="h-full bg-green-500 rounded-t"></div>
                  </div>
                  <div className="w-8 bg-green-100 rounded-t" style={{ height: '88%' }}>
                    <div className="h-full bg-green-500 rounded-t"></div>
                  </div>
                  <div className="w-8 bg-green-100 rounded-t" style={{ height: '85%' }}>
                    <div className="h-full bg-green-500 rounded-t"></div>
                  </div>
                  <div className="w-8 bg-green-100 rounded-t" style={{ height: '92%' }}>
                    <div className="h-full bg-green-500 rounded-t"></div>
                  </div>
                </div>
              </div>
              
              {/* X-axis labels */}
              <div className="flex justify-center space-x-8 mt-4 text-sm text-gray-600">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
              </div>
              
              {/* Legend */}
              <div className="flex items-center justify-center space-x-6 mt-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded"></div>
                  <span className="text-sm text-gray-600">Performance</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded"></div>
                  <span className="text-sm text-gray-600">Satisfaction</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Tasks */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Tasks</CardTitle>
                <CardDescription>Your latest assigned tasks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {tasks.slice(0, 3).map((task) => (
                    <div key={task.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-gray-900">{task.title}</h3>
                        <Badge className={getStatusColor(task.status)}>
                          {task.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{task.description}</p>
                      <div className="flex justify-between items-center">
                        <Badge className={getPriorityColor(task.priority)}>
                          {task.priority} priority
                        </Badge>
                        <span className="text-sm text-gray-500">Due: {task.dueDate}</span>
                      </div>
                    </div>
                  ))}
                  <div className="text-center pt-4">
                    <Link href="/user/tasks">
                      <Button variant="outline" size="sm">
                        View All Tasks
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Attendance */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Attendance</CardTitle>
                <CardDescription>Your latest attendance records</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {attendance.slice(0, 5).map((record, index) => (
                    <div key={index} className="flex justify-between items-center p-3 border rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">{record.date}</p>
                        <p className="text-sm text-gray-600">
                          {record.checkIn} - {record.checkOut} ({record.totalHours}h)
                        </p>
                      </div>
                      <Badge className={getStatusColor(record.status)}>
                        {record.status}
                      </Badge>
                    </div>
                  ))}
                  <div className="text-center pt-4">
                    <Link href="/user/attendance">
                      <Button variant="outline" size="sm">
                        View Full History
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
} 