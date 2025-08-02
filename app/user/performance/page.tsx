'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { TrendingUp, Target, Award, Clock, ArrowLeft, BarChart3, Star, Calendar } from 'lucide-react';
import Link from 'next/link';

interface PerformanceMetric {
  name: string;
  current: number;
  target: number;
  unit: string;
  trend: 'up' | 'down' | 'stable';
  percentage: number;
}

interface Goal {
  id: string;
  title: string;
  description: string;
  target: string;
  current: string;
  progress: number;
  dueDate: string;
  status: 'on-track' | 'behind' | 'completed';
  category: string;
}

interface PerformanceReview {
  id: string;
  period: string;
  rating: number;
  reviewer: string;
  date: string;
  comments: string;
  strengths: string[];
  areas: string[];
}

export default function PerformancePage() {
  const [selectedPeriod, setSelectedPeriod] = useState('2024-Q1');

  const metrics: PerformanceMetric[] = [
    { name: 'Task Completion Rate', current: 85, target: 90, unit: '%', trend: 'up', percentage: 85 },
    { name: 'Project Delivery', current: 12, target: 15, unit: 'projects', trend: 'up', percentage: 80 },
    { name: 'Client Satisfaction', current: 4.2, target: 4.5, unit: '/5', trend: 'stable', percentage: 84 },
    { name: 'Team Collaboration', current: 8.5, target: 9, unit: '/10', trend: 'up', percentage: 85 },
    { name: 'Innovation Score', current: 7.8, target: 8, unit: '/10', trend: 'up', percentage: 78 },
    { name: 'Learning Hours', current: 45, target: 60, unit: 'hours', trend: 'down', percentage: 75 }
  ];

  const goals: Goal[] = [
    {
      id: '1',
      title: 'Complete Advanced Certification',
      description: 'Obtain AWS Solutions Architect certification',
      target: 'Certification achieved',
      current: 'In progress - 70% complete',
      progress: 70,
      dueDate: '2024-03-31',
      status: 'on-track',
      category: 'Professional Development'
    },
    {
      id: '2',
      title: 'Lead Team Project',
      description: 'Successfully lead a team of 5 developers on new product feature',
      target: 'Project completed on time',
      current: 'Project in progress - 60% complete',
      progress: 60,
      dueDate: '2024-02-28',
      status: 'on-track',
      category: 'Leadership'
    },
    {
      id: '3',
      title: 'Improve Code Quality',
      description: 'Reduce bug reports by 30% through better testing practices',
      target: '30% reduction in bugs',
      current: '15% reduction achieved',
      progress: 50,
      dueDate: '2024-04-30',
      status: 'behind',
      category: 'Technical Excellence'
    },
    {
      id: '4',
      title: 'Mentor Junior Developers',
      description: 'Mentor 3 junior developers and help them grow their skills',
      target: '3 developers mentored',
      current: '2 developers being mentored',
      progress: 67,
      dueDate: '2024-06-30',
      status: 'on-track',
      category: 'Leadership'
    }
  ];

  const reviews: PerformanceReview[] = [
    {
      id: '1',
      period: '2023-Q4',
      rating: 4.2,
      reviewer: 'Sarah Johnson (Manager)',
      date: '2024-01-15',
      comments: 'Excellent work on the Q4 project delivery. Strong technical skills and good team collaboration.',
      strengths: ['Technical expertise', 'Problem solving', 'Team collaboration'],
      areas: ['Time management', 'Documentation']
    },
    {
      id: '2',
      period: '2023-Q3',
      rating: 4.0,
      reviewer: 'Mike Chen (Team Lead)',
      date: '2023-10-20',
      comments: 'Good performance with room for improvement in project planning.',
      strengths: ['Coding skills', 'Learning ability'],
      areas: ['Project planning', 'Communication']
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'on-track': return 'bg-green-100 text-green-800';
      case 'behind': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="h-4 w-4 text-green-600" />;
      case 'down': return <TrendingUp className="h-4 w-4 text-red-600 transform rotate-180" />;
      default: return <BarChart3 className="h-4 w-4 text-gray-600" />;
    }
  };

  const overallRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const completedGoals = goals.filter(goal => goal.status === 'completed').length;
  const onTrackGoals = goals.filter(goal => goal.status === 'on-track').length;

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
              <h1 className="text-2xl font-bold text-gray-900">Performance Overview</h1>
              <p className="text-gray-600">Track your performance metrics and goals</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Period Selector */}
        <div className="mb-6">
          <label htmlFor="period" className="block text-sm font-medium text-gray-700 mb-2">
            Performance Period
          </label>
          <select
            id="period"
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="2024-Q1">2024 Q1</option>
            <option value="2023-Q4">2023 Q4</option>
            <option value="2023-Q3">2023 Q3</option>
          </select>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Overall Rating</p>
                  <p className="text-2xl font-bold text-gray-900">{overallRating.toFixed(1)}/5</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Target className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Goals On Track</p>
                  <p className="text-2xl font-bold text-gray-900">{onTrackGoals}/{goals.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Star className="h-6 w-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Avg Performance</p>
                  <p className="text-2xl font-bold text-gray-900">85%</p>
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
                  <p className="text-sm font-medium text-gray-600">Learning Hours</p>
                  <p className="text-2xl font-bold text-gray-900">45h</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Performance Metrics */}
          <Card>
            <CardHeader>
              <CardTitle>Performance Metrics</CardTitle>
              <CardDescription>Key performance indicators and trends</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {metrics.map((metric) => (
                  <div key={metric.name} className="border rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold text-gray-900">{metric.name}</h3>
                      <div className="flex items-center space-x-2">
                        {getTrendIcon(metric.trend)}
                        <span className="text-sm font-medium text-gray-900">
                          {metric.current}{metric.unit}
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Target: {metric.target}{metric.unit}</span>
                      <span>{metric.percentage}% of target</span>
                    </div>
                    <Progress value={metric.percentage} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Goals */}
          <Card>
            <CardHeader>
              <CardTitle>Performance Goals</CardTitle>
              <CardDescription>Your current goals and progress</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {goals.map((goal) => (
                  <div key={goal.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-gray-900">{goal.title}</h3>
                        <p className="text-sm text-gray-600">{goal.description}</p>
                      </div>
                      <Badge className={getStatusColor(goal.status)}>
                        {goal.status}
                      </Badge>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      <div>Target: {goal.target}</div>
                      <div>Current: {goal.current}</div>
                      <div>Due: {new Date(goal.dueDate).toLocaleDateString()}</div>
                    </div>
                    <div className="mb-2">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-gray-700">Progress</span>
                        <span className="text-sm text-gray-600">{goal.progress}%</span>
                      </div>
                      <Progress value={goal.progress} className="h-2" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {goal.category}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Performance Reviews */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Performance Reviews</CardTitle>
            <CardDescription>Recent performance evaluations and feedback</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="border rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{review.period} Review</h3>
                      <p className="text-sm text-gray-600">Reviewed by {review.reviewer}</p>
                      <p className="text-sm text-gray-600">Date: {new Date(review.date).toLocaleDateString()}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(review.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-lg font-semibold text-gray-900">{review.rating}/5</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Comments</h4>
                    <p className="text-gray-600">{review.comments}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Strengths</h4>
                      <div className="flex flex-wrap gap-2">
                        {review.strengths.map((strength) => (
                          <Badge key={strength} variant="secondary" className="bg-green-100 text-green-800">
                            {strength}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Areas for Improvement</h4>
                      <div className="flex flex-wrap gap-2">
                        {review.areas.map((area) => (
                          <Badge key={area} variant="secondary" className="bg-yellow-100 text-yellow-800">
                            {area}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 