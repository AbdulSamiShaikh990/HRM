"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Brain, Users, AlertTriangle, TrendingUp, Zap, Target, Clock, ArrowRight } from "lucide-react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const skillMatrixData = [
  { skill: "React", beginner: 12, intermediate: 25, advanced: 8, expert: 3 },
  { skill: "Node.js", beginner: 8, intermediate: 20, advanced: 15, expert: 5 },
  { skill: "Python", beginner: 15, intermediate: 18, advanced: 10, expert: 7 },
  { skill: "AWS", beginner: 20, intermediate: 15, advanced: 8, expert: 2 },
  { skill: "Docker", beginner: 18, intermediate: 12, advanced: 6, expert: 4 },
]

const teamAssignments = [
  {
    project: "E-commerce Platform",
    requiredSkills: ["React", "Node.js", "AWS"],
    suggestedTeam: ["Sarah Johnson", "Michael Chen", "David Kim"],
    confidence: 92,
    estimatedCompletion: "6 weeks",
  },
  {
    project: "Data Analytics Dashboard",
    requiredSkills: ["Python", "React", "Docker"],
    suggestedTeam: ["Emily Rodriguez", "Lisa Thompson", "Alex Wang"],
    confidence: 87,
    estimatedCompletion: "4 weeks",
  },
  {
    project: "Mobile App Backend",
    requiredSkills: ["Node.js", "AWS", "Docker"],
    suggestedTeam: ["Michael Chen", "John Smith", "Maria Garcia"],
    confidence: 94,
    estimatedCompletion: "8 weeks",
  },
]

const burnoutRisks = [
  { employee: "Sarah Johnson", risk: 85, factors: ["High workload", "Long hours", "Tight deadlines"] },
  { employee: "Michael Chen", risk: 72, factors: ["Multiple projects", "Client pressure"] },
  { employee: "David Kim", risk: 68, factors: ["Learning curve", "New technology"] },
  { employee: "Emily Rodriguez", risk: 45, factors: ["Balanced workload"] },
  { employee: "Lisa Thompson", risk: 38, factors: ["Good work-life balance"] },
]

const hiringForecast = [
  { month: "Feb", frontend: 2, backend: 3, devops: 1, total: 6 },
  { month: "Mar", frontend: 3, backend: 2, devops: 2, total: 7 },
  { month: "Apr", frontend: 1, backend: 4, devops: 1, total: 6 },
  { month: "May", frontend: 2, backend: 3, devops: 3, total: 8 },
  { month: "Jun", frontend: 4, backend: 2, devops: 1, total: 7 },
]

export default function AIOptimizationPage() {
  const getRiskLevel = (risk: number) => {
    if (risk >= 80) return { label: "High", color: "bg-red-100 text-red-800" }
    if (risk >= 60) return { label: "Medium", color: "bg-orange-100 text-orange-800" }
    return { label: "Low", color: "bg-green-100 text-green-800" }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">AI Workforce Optimization</h1>
        <p className="text-slate-600 mt-1">Intelligent insights for optimal team performance and resource allocation</p>
      </div>

      {/* AI Insights Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-0 shadow-sm bg-gradient-to-br from-blue-50 to-blue-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-blue-900">Optimization Score</CardTitle>
            <Brain className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-900">87%</div>
            <p className="text-xs text-blue-700 flex items-center mt-1">
              <TrendingUp className="w-3 h-3 mr-1" />
              +12% this month
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm bg-gradient-to-br from-green-50 to-green-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-green-900">Team Efficiency</CardTitle>
            <Zap className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-900">94%</div>
            <p className="text-xs text-green-700 mt-1">Above target</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm bg-gradient-to-br from-orange-50 to-orange-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-orange-900">Burnout Alerts</CardTitle>
            <AlertTriangle className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-900">3</div>
            <p className="text-xs text-orange-700 mt-1">Require attention</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm bg-gradient-to-br from-purple-50 to-purple-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-purple-900">Hiring Forecast</CardTitle>
            <Users className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-900">34</div>
            <p className="text-xs text-purple-700 mt-1">Next 6 months</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Skills Matrix Heatmap */}
        <Card className="border-0 shadow-sm bg-white">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-slate-900">Skills Matrix</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={skillMatrixData} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis type="number" stroke="#64748b" />
                <YAxis dataKey="skill" type="category" stroke="#64748b" width={80} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #e2e8f0",
                    borderRadius: "8px",
                    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                  }}
                />
                <Bar dataKey="beginner" stackId="a" fill="#ef4444" />
                <Bar dataKey="intermediate" stackId="a" fill="#f97316" />
                <Bar dataKey="advanced" stackId="a" fill="#eab308" />
                <Bar dataKey="expert" stackId="a" fill="#22c55e" />
              </BarChart>
            </ResponsiveContainer>
            <div className="flex justify-center space-x-4 mt-4 text-xs">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded mr-1"></div>
                <span>Beginner</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-orange-500 rounded mr-1"></div>
                <span>Intermediate</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-yellow-500 rounded mr-1"></div>
                <span>Advanced</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded mr-1"></div>
                <span>Expert</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Hiring Forecast */}
        <Card className="border-0 shadow-sm bg-white">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-slate-900">Hiring Forecast</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={hiringForecast}>
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
                <Bar dataKey="frontend" stackId="a" fill="#3b82f6" />
                <Bar dataKey="backend" stackId="a" fill="#10b981" />
                <Bar dataKey="devops" stackId="a" fill="#8b5cf6" />
              </BarChart>
            </ResponsiveContainer>
            <div className="flex justify-center space-x-4 mt-4 text-xs">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded mr-1"></div>
                <span>Frontend</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded mr-1"></div>
                <span>Backend</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-purple-500 rounded mr-1"></div>
                <span>DevOps</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* AI Team Suggestions */}
      <Card className="border-0 shadow-sm bg-white">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-slate-900 flex items-center">
            <Target className="w-5 h-5 mr-2 text-blue-600" />
            AI Team Assignment Suggestions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {teamAssignments.map((assignment, index) => (
              <div key={index} className="p-4 border border-slate-200 rounded-lg">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-medium text-slate-900">{assignment.project}</h3>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {assignment.requiredSkills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                    {assignment.confidence}% match
                  </Badge>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-slate-600">Suggested Team:</span>
                    <div className="mt-1">
                      {assignment.suggestedTeam.map((member, idx) => (
                        <div key={idx} className="text-slate-900">
                          {member}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-slate-600">Estimated Completion:</span>
                    <div className="mt-1 flex items-center">
                      <Clock className="w-4 h-4 mr-1 text-blue-600" />
                      <span className="text-slate-900">{assignment.estimatedCompletion}</span>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      Apply Suggestion
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Burnout Detection */}
      <Card className="border-0 shadow-sm bg-white">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-slate-900 flex items-center">
            <AlertTriangle className="w-5 h-5 mr-2 text-orange-600" />
            Burnout Risk Detection
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {burnoutRisks.map((employee, index) => {
              const riskLevel = getRiskLevel(employee.risk)
              return (
                <div key={index} className="p-4 border border-slate-200 rounded-lg">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-medium text-slate-900">{employee.employee}</h3>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {employee.factors.map((factor, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {factor}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Badge className={riskLevel.color}>{riskLevel.label} Risk</Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Risk Score</span>
                      <span className="font-medium">{employee.risk}%</span>
                    </div>
                    <Progress value={employee.risk} className="h-2" />
                    {employee.risk >= 70 && (
                      <div className="flex justify-end mt-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-orange-600 border-orange-200 bg-transparent"
                        >
                          Schedule Check-in
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
