'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, AlertCircle, Clock, ArrowLeft, Filter, Plus, Calendar, User } from 'lucide-react';
import Link from 'next/link';

interface Task {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'completed' | 'in-progress';
  dueDate: string;
  priority: 'low' | 'medium' | 'high';
  assignedBy: string;
  estimatedHours: number;
  actualHours: number;
  progress: number;
  tags: string[];
}

export default function TasksPage() {
  const [filter, setFilter] = useState<'all' | 'pending' | 'completed' | 'in-progress'>('all');
  const [priorityFilter, setPriorityFilter] = useState<'all' | 'low' | 'medium' | 'high'>('all');

  const tasks: Task[] = [
    {
      id: '1',
      title: 'Complete quarterly report',
      description: 'Prepare and submit Q4 performance report with detailed analysis and recommendations',
      status: 'completed',
      dueDate: '2024-01-15',
      priority: 'high',
      assignedBy: 'Manager',
      estimatedHours: 8,
      actualHours: 7.5,
      progress: 100,
      tags: ['report', 'quarterly', 'analysis']
    },
    {
      id: '2',
      title: 'Client meeting preparation',
      description: 'Prepare presentation and materials for upcoming client meeting',
      status: 'in-progress',
      dueDate: '2024-01-20',
      priority: 'medium',
      assignedBy: 'Team Lead',
      estimatedHours: 6,
      actualHours: 3,
      progress: 50,
      tags: ['presentation', 'client', 'meeting']
    },
    {
      id: '3',
      title: 'Code review',
      description: 'Review pull requests for team project and provide feedback',
      status: 'pending',
      dueDate: '2024-01-18',
      priority: 'low',
      assignedBy: 'Tech Lead',
      estimatedHours: 4,
      actualHours: 0,
      progress: 0,
      tags: ['code', 'review', 'development']
    },
    {
      id: '4',
      title: 'Database optimization',
      description: 'Optimize database queries and improve performance',
      status: 'in-progress',
      dueDate: '2024-01-25',
      priority: 'high',
      assignedBy: 'Manager',
      estimatedHours: 12,
      actualHours: 8,
      progress: 65,
      tags: ['database', 'optimization', 'performance']
    },
    {
      id: '5',
      title: 'Documentation update',
      description: 'Update project documentation and user guides',
      status: 'pending',
      dueDate: '2024-01-22',
      priority: 'medium',
      assignedBy: 'Team Lead',
      estimatedHours: 5,
      actualHours: 0,
      progress: 0,
      tags: ['documentation', 'guides']
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
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

  const filteredTasks = tasks.filter(task => {
    const statusMatch = filter === 'all' || task.status === filter;
    const priorityMatch = priorityFilter === 'all' || task.priority === priorityFilter;
    return statusMatch && priorityMatch;
  });

  const completedTasks = tasks.filter(task => task.status === 'completed').length;
  const pendingTasks = tasks.filter(task => task.status === 'pending').length;
  const inProgressTasks = tasks.filter(task => task.status === 'in-progress').length;
  const totalEstimatedHours = tasks.reduce((sum, task) => sum + task.estimatedHours, 0);
  const totalActualHours = tasks.reduce((sum, task) => sum + task.actualHours, 0);

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
              <h1 className="text-2xl font-bold text-gray-900">My Tasks</h1>
              <p className="text-gray-600">Manage and track your assigned tasks</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-green-100 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Completed</p>
                  <p className="text-2xl font-bold text-gray-900">{completedTasks}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">In Progress</p>
                  <p className="text-2xl font-bold text-gray-900">{inProgressTasks}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <AlertCircle className="h-6 w-6 text-yellow-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Pending</p>
                  <p className="text-2xl font-bold text-gray-900">{pendingTasks}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Clock className="h-6 w-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Hours Spent</p>
                  <p className="text-2xl font-bold text-gray-900">{totalActualHours}h</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center space-x-2">
                <Filter className="h-4 w-4 text-gray-500" />
                <span className="text-sm font-medium text-gray-700">Filter by:</span>
              </div>
              
              <div className="flex space-x-2">
                {(['all', 'pending', 'in-progress', 'completed'] as const).map((status) => (
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

              <div className="flex items-center space-x-2 ml-4">
                <span className="text-sm font-medium text-gray-700">Priority:</span>
                <div className="flex space-x-2">
                  {(['all', 'low', 'medium', 'high'] as const).map((priority) => (
                    <Button
                      key={priority}
                      variant={priorityFilter === priority ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setPriorityFilter(priority)}
                    >
                      {priority.charAt(0).toUpperCase() + priority.slice(1)}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tasks List */}
        <div className="space-y-6">
          {filteredTasks.map((task) => (
            <Card key={task.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{task.title}</h3>
                      <Badge className={getStatusColor(task.status)}>
                        {task.status}
                      </Badge>
                      <Badge className={getPriorityColor(task.priority)}>
                        {task.priority} priority
                      </Badge>
                    </div>
                    <p className="text-gray-600 mb-3">{task.description}</p>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        Due: {new Date(task.dueDate).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        Assigned by: {task.assignedBy}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        Est: {task.estimatedHours}h | Actual: {task.actualHours}h
                      </div>
                    </div>

                    <div className="mb-3">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-gray-700">Progress</span>
                        <span className="text-sm text-gray-600">{task.progress}%</span>
                      </div>
                      <Progress value={task.progress} className="h-2" />
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {task.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col space-y-2 ml-4">
                    {task.status === 'pending' && (
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        Start Task
                      </Button>
                    )}
                    {task.status === 'in-progress' && (
                      <Button size="sm" variant="outline">
                        Update Progress
                      </Button>
                    )}
                    <Button size="sm" variant="ghost">
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredTasks.length === 0 && (
          <Card>
            <CardContent className="p-12 text-center">
              <div className="text-gray-500">
                <CheckCircle className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No tasks found</h3>
                <p className="text-gray-600">No tasks match your current filters.</p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
} 