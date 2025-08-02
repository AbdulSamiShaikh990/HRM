'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowLeft, Plus, CalendarDays, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

interface LeaveRecord {
  id: string;
  type: string;
  startDate: string;
  endDate: string;
  status: 'pending' | 'approved' | 'rejected';
  reason: string;
  days: number;
  appliedDate: string;
  approvedBy?: string;
  approvedDate?: string;
  comments?: string;
}

interface LeaveBalance {
  type: string;
  total: number;
  used: number;
  remaining: number;
}

export default function LeavesPage() {
  const [filter, setFilter] = useState<'all' | 'pending' | 'approved' | 'rejected'>('all');

  const leaves: LeaveRecord[] = [
    {
      id: '1',
      type: 'Sick Leave',
      startDate: '2024-01-10',
      endDate: '2024-01-12',
      status: 'approved',
      reason: 'Medical appointment and recovery',
      days: 3,
      appliedDate: '2024-01-08',
      approvedBy: 'Manager',
      approvedDate: '2024-01-09',
      comments: 'Approved with medical certificate'
    },
    {
      id: '2',
      type: 'Annual Leave',
      startDate: '2024-01-25',
      endDate: '2024-01-26',
      status: 'pending',
      reason: 'Personal vacation',
      days: 2,
      appliedDate: '2024-01-15'
    },
    {
      id: '3',
      type: 'Personal Leave',
      startDate: '2024-02-05',
      endDate: '2024-02-05',
      status: 'approved',
      reason: 'Family event',
      days: 1,
      appliedDate: '2024-01-20',
      approvedBy: 'Team Lead',
      approvedDate: '2024-01-21'
    },
    {
      id: '4',
      type: 'Maternity Leave',
      startDate: '2024-03-01',
      endDate: '2024-06-01',
      status: 'pending',
      reason: 'Maternity leave as per company policy',
      days: 90,
      appliedDate: '2024-01-25'
    }
  ];

  const leaveBalance: LeaveBalance[] = [
    { type: 'Annual Leave', total: 21, used: 8, remaining: 13 },
    { type: 'Sick Leave', total: 15, used: 3, remaining: 12 },
    { type: 'Personal Leave', total: 5, used: 1, remaining: 4 },
    { type: 'Maternity Leave', total: 90, used: 0, remaining: 90 }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredLeaves = leaves.filter(leave => filter === 'all' || leave.status === filter);

  const totalAppliedDays = leaves.reduce((sum, leave) => sum + leave.days, 0);
  const approvedDays = leaves.filter(leave => leave.status === 'approved').reduce((sum, leave) => sum + leave.days, 0);
  const pendingDays = leaves.filter(leave => leave.status === 'pending').reduce((sum, leave) => sum + leave.days, 0);

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
                <h1 className="text-2xl font-bold text-gray-900">Leave Management</h1>
                <p className="text-gray-600">Manage your leave requests and track balances</p>
              </div>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="h-4 w-4 mr-2" />
              Request Leave
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Calendar className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Applied</p>
                  <p className="text-2xl font-bold text-gray-900">{totalAppliedDays} days</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-green-100 rounded-lg">
                  <CalendarDays className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Approved</p>
                  <p className="text-2xl font-bold text-gray-900">{approvedDays} days</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <Clock className="h-6 w-6 text-yellow-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Pending</p>
                  <p className="text-2xl font-bold text-gray-900">{pendingDays} days</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <AlertTriangle className="h-6 w-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Active Requests</p>
                  <p className="text-2xl font-bold text-gray-900">{leaves.filter(l => l.status === 'pending').length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Leave Balance */}
          <Card>
            <CardHeader>
              <CardTitle>Leave Balance</CardTitle>
              <CardDescription>Your current leave entitlements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {leaveBalance.map((balance) => (
                  <div key={balance.type} className="border rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold text-gray-900">{balance.type}</h3>
                      <Badge variant="secondary">{balance.remaining} remaining</Badge>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Total: {balance.total} days</span>
                      <span>Used: {balance.used} days</span>
                      <span>Remaining: {balance.remaining} days</span>
                    </div>
                    <div className="mt-2">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${(balance.used / balance.total) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common leave-related actions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <Plus className="h-4 w-4 mr-2" />
                  Request New Leave
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Calendar className="h-4 w-4 mr-2" />
                  View Leave Calendar
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Clock className="h-4 w-4 mr-2" />
                  Check Leave Policy
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  Emergency Leave Request
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mt-8 mb-6">
          <CardContent className="p-6">
            <div className="flex flex-wrap gap-4 items-center">
              <span className="text-sm font-medium text-gray-700">Filter by status:</span>
              <div className="flex space-x-2">
                {(['all', 'pending', 'approved', 'rejected'] as const).map((status) => (
                  <Button
                    key={status}
                    variant={filter === status ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setFilter(status)}
                  >
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Leave Requests */}
        <Card>
          <CardHeader>
            <CardTitle>Leave Requests</CardTitle>
            <CardDescription>Your leave application history</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredLeaves.map((leave) => (
                <div key={leave.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-semibold text-gray-900">{leave.type}</h3>
                      <p className="text-sm text-gray-600">{leave.reason}</p>
                    </div>
                    <Badge className={getStatusColor(leave.status)}>
                      {leave.status}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600 mb-3">
                    <div>
                      <span className="font-medium">Duration:</span> {leave.days} days
                    </div>
                    <div>
                      <span className="font-medium">From:</span> {new Date(leave.startDate).toLocaleDateString()}
                    </div>
                    <div>
                      <span className="font-medium">To:</span> {new Date(leave.endDate).toLocaleDateString()}
                    </div>
                    <div>
                      <span className="font-medium">Applied:</span> {new Date(leave.appliedDate).toLocaleDateString()}
                    </div>
                  </div>

                  {leave.approvedBy && (
                    <div className="text-sm text-gray-600 mb-2">
                      <span className="font-medium">Approved by:</span> {leave.approvedBy} on {new Date(leave.approvedDate!).toLocaleDateString()}
                    </div>
                  )}

                  {leave.comments && (
                    <div className="text-sm text-gray-600 bg-gray-50 p-2 rounded">
                      <span className="font-medium">Comments:</span> {leave.comments}
                    </div>
                  )}

                  <div className="flex space-x-2 mt-3">
                    {leave.status === 'pending' && (
                      <>
                        <Button size="sm" variant="outline">Edit Request</Button>
                        <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                          Cancel Request
                        </Button>
                      </>
                    )}
                    <Button size="sm" variant="ghost">View Details</Button>
                  </div>
                </div>
              ))}
            </div>

            {filteredLeaves.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                <Calendar className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No leave requests found</h3>
                <p className="text-gray-600">No leave requests match your current filters.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 