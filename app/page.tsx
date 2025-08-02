"use client"

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, User, Building2, Settings, Clock, Calendar, TrendingUp, CheckCircle } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            HRM Enterprise System
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive Human Resource Management System for modern enterprises
          </p>
        </div>

        {/* Dashboard Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Admin Dashboard */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Building2 className="h-6 w-6 mr-2 text-blue-600" />
                Admin Dashboard
              </CardTitle>
              <CardDescription>
                Complete HR management with employee oversight, payroll, recruitment, and analytics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2 text-green-600" />
                    <span>Employee Management</span>
                  </div>
                  <div className="flex items-center">
                    <Settings className="h-4 w-4 mr-2 text-blue-600" />
                    <span>System Settings</span>
                  </div>
                  <div className="flex items-center">
                    <TrendingUp className="h-4 w-4 mr-2 text-purple-600" />
                    <span>Analytics & Reports</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-orange-600" />
                    <span>Leave Management</span>
                  </div>
                </div>
                <Link href="/dashboard" className="block">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Access Admin Dashboard
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Employee Dashboard */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="h-6 w-6 mr-2 text-green-600" />
                Employee Dashboard
              </CardTitle>
              <CardDescription>
                Self-service portal for attendance, tasks, leaves, and performance tracking
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-blue-600" />
                    <span>Attendance</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    <span>Task Management</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-purple-600" />
                    <span>Leave Requests</span>
                  </div>
                  <div className="flex items-center">
                    <TrendingUp className="h-4 w-4 mr-2 text-orange-600" />
                    <span>Performance</span>
                  </div>
                </div>
                <Link href="/user" className="block">
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Access Employee Dashboard
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="ml-3 text-lg font-semibold">Employee Management</h3>
              </div>
              <p className="text-gray-600">
                Comprehensive employee database with profiles, performance tracking, and career development.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Clock className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="ml-3 text-lg font-semibold">Attendance Tracking</h3>
              </div>
              <p className="text-gray-600">
                Real-time attendance monitoring with check-in/out functionality and time tracking.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="ml-3 text-lg font-semibold">Performance Analytics</h3>
              </div>
              <p className="text-gray-600">
                Advanced analytics and reporting for performance evaluation and decision making.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
