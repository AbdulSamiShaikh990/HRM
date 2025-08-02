"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Calendar, DollarSign, Briefcase, TrendingUp, AlertTriangle, Brain, Target } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts"

const performanceData = [
  { month: "Jan", performance: 85, satisfaction: 78 },
  { month: "Feb", performance: 87, satisfaction: 82 },
  { month: "Mar", performance: 89, satisfaction: 85 },
  { month: "Apr", performance: 91, satisfaction: 88 },
  { month: "May", performance: 88, satisfaction: 86 },
  { month: "Jun", performance: 93, satisfaction: 90 },
]

const departmentData = [
  { department: "Engineering", employees: 45, performance: 92 },
  { department: "Sales", employees: 32, performance: 88 },
  { department: "Marketing", employees: 18, performance: 85 },
  { department: "HR", employees: 12, performance: 90 },
  { department: "Finance", employees: 15, performance: 87 },
]

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
        <p className="text-slate-600 mt-1">Welcome back! Here's what's happening at your organization.</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-0 shadow-sm bg-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Total Employees</CardTitle>
            <Users className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900">1,247</div>
            <p className="text-xs text-green-600 flex items-center mt-1">
              <TrendingUp className="w-3 h-3 mr-1" />
              +12% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm bg-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Active Projects</CardTitle>
            <Briefcase className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900">34</div>
            <p className="text-xs text-blue-600 flex items-center mt-1">
              <Target className="w-3 h-3 mr-1" />8 due this week
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm bg-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Leaves Today</CardTitle>
            <Calendar className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900">23</div>
            <p className="text-xs text-slate-500 mt-1">15 approved, 8 pending</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm bg-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Payroll This Month</CardTitle>
            <DollarSign className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900">$2.4M</div>
            <p className="text-xs text-slate-500 mt-1">Processing in 3 days</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Performance Trends */}
        <Card className="lg:col-span-2 border-0 shadow-sm bg-white">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-slate-900">Performance Trends</CardTitle>
            <CardDescription>Employee performance and satisfaction over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="month" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #e2e8f0",
                    borderRadius: "8px",
                    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="performance"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  dot={{ fill: "#3b82f6", strokeWidth: 2, r: 4 }}
                  name="Performance"
                />
                <Line
                  type="monotone"
                  dataKey="satisfaction"
                  stroke="#10b981"
                  strokeWidth={3}
                  dot={{ fill: "#10b981", strokeWidth: 2, r: 4 }}
                  name="Satisfaction"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* AI Insights Panel */}
        <Card className="border-0 shadow-sm bg-gradient-to-br from-blue-50 to-indigo-50">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-slate-900 flex items-center">
              <Brain className="w-5 h-5 mr-2 text-blue-600" />
              AI Insights
            </CardTitle>
            <CardDescription>Intelligent workforce analytics</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-3 bg-white rounded-lg border border-blue-100">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-medium text-slate-900 text-sm">Hiring Forecast</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Recommend hiring 8 developers in Q4 based on project pipeline
                  </p>
                </div>
              </div>
            </div>

            <div className="p-3 bg-white rounded-lg border border-orange-100">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-4 h-4 text-orange-500 mt-0.5" />
                <div>
                  <h4 className="font-medium text-slate-900 text-sm">Burnout Risk</h4>
                  <p className="text-xs text-slate-600 mt-1">5 employees showing high stress indicators</p>
                  <Badge variant="outline" className="mt-2 text-xs border-orange-200 text-orange-700">
                    Action Required
                  </Badge>
                </div>
              </div>
            </div>

            <div className="p-3 bg-white rounded-lg border border-green-100">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-medium text-slate-900 text-sm">Skill Gaps</h4>
                  <p className="text-xs text-slate-600 mt-1">Cloud architecture skills needed in Engineering</p>
                </div>
              </div>
            </div>

            <div className="p-3 bg-white rounded-lg border border-purple-100">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-medium text-slate-900 text-sm">Promotion Ready</h4>
                  <p className="text-xs text-slate-600 mt-1">12 employees eligible for promotion review</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Department Performance */}
      <Card className="border-0 shadow-sm bg-white">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-slate-900">Department Performance</CardTitle>
          <CardDescription>Performance metrics by department</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={departmentData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="department" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #e2e8f0",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                }}
              />
              <Bar dataKey="performance" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}
