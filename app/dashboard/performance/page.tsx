"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Target, TrendingUp, Star, Plus, Award, Users, MessageSquare, BarChart3 } from "lucide-react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts"

const performanceData = [
  { month: "Jan", score: 85 },
  { month: "Feb", score: 87 },
  { month: "Mar", score: 89 },
  { month: "Apr", score: 91 },
  { month: "May", score: 88 },
  { month: "Jun", score: 93 },
]

const skillsData = [
  { skill: "Technical Skills", score: 90 },
  { skill: "Communication", score: 85 },
  { skill: "Leadership", score: 78 },
  { skill: "Problem Solving", score: 92 },
  { skill: "Teamwork", score: 88 },
  { skill: "Innovation", score: 82 },
]

const okrs = [
  {
    id: 1,
    title: "Increase team productivity by 25%",
    progress: 78,
    status: "On Track",
    dueDate: "2024-03-31",
  },
  {
    id: 2,
    title: "Complete React certification",
    progress: 45,
    status: "Behind",
    dueDate: "2024-02-28",
  },
  {
    id: 3,
    title: "Mentor 3 junior developers",
    progress: 100,
    status: "Completed",
    dueDate: "2024-01-31",
  },
]

export default function PerformancePage() {
  const [isOKRDialogOpen, setIsOKRDialogOpen] = useState(false)
  const [isFeedbackDialogOpen, setIsFeedbackDialogOpen] = useState(false)

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Completed":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Completed</Badge>
      case "On Track":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">On Track</Badge>
      case "Behind":
        return <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">Behind</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Performance Tracking</h1>
          <p className="text-slate-600 mt-1">Track goals, feedback, and professional development</p>
        </div>
        <div className="flex space-x-2">
          <Dialog open={isFeedbackDialogOpen} onOpenChange={setIsFeedbackDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline">
                <MessageSquare className="w-4 h-4 mr-2" />
                360° Feedback
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Submit 360° Feedback</DialogTitle>
                <DialogDescription>Provide feedback for a team member's performance.</DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="employee">Select Employee</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose employee" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sarah">Sarah Johnson</SelectItem>
                      <SelectItem value="michael">Michael Chen</SelectItem>
                      <SelectItem value="emily">Emily Rodriguez</SelectItem>
                      <SelectItem value="david">David Kim</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Feedback Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technical">Technical Skills</SelectItem>
                      <SelectItem value="communication">Communication</SelectItem>
                      <SelectItem value="leadership">Leadership</SelectItem>
                      <SelectItem value="teamwork">Teamwork</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="feedback">Feedback</Label>
                  <Textarea id="feedback" placeholder="Provide constructive feedback..." rows={4} />
                </div>
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={() => setIsFeedbackDialogOpen(false)}>
                  Cancel
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-700">Submit Feedback</Button>
              </div>
            </DialogContent>
          </Dialog>
          <Dialog open={isOKRDialogOpen} onOpenChange={setIsOKRDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="w-4 h-4 mr-2" />
                Add OKR
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Add New OKR</DialogTitle>
                <DialogDescription>Set a new objective and key result for tracking.</DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="objective">Objective</Label>
                  <Input id="objective" placeholder="Enter your objective..." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="keyResult">Key Result</Label>
                  <Textarea id="keyResult" placeholder="Define measurable key results..." rows={3} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dueDate">Due Date</Label>
                  <Input id="dueDate" type="date" />
                </div>
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={() => setIsOKRDialogOpen(false)}>
                  Cancel
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-700">Add OKR</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Performance Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-0 shadow-sm bg-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Overall Score</CardTitle>
            <Star className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900">93/100</div>
            <p className="text-xs text-green-600 flex items-center mt-1">
              <TrendingUp className="w-3 h-3 mr-1" />
              +5 from last quarter
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm bg-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Active OKRs</CardTitle>
            <Target className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900">3</div>
            <p className="text-xs text-slate-500 mt-1">2 on track, 1 behind</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm bg-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Feedback Received</CardTitle>
            <Users className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900">12</div>
            <p className="text-xs text-slate-500 mt-1">This quarter</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm bg-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Promotion Readiness</CardTitle>
            <Award className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900">85%</div>
            <p className="text-xs text-purple-600 mt-1">Ready for review</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Performance Trend */}
        <Card className="border-0 shadow-sm bg-white">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-slate-900 flex items-center">
              <BarChart3 className="w-5 h-5 mr-2" />
              Performance Trend
            </CardTitle>
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
                  dataKey="score"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  dot={{ fill: "#3b82f6", strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Skills Radar */}
        <Card className="border-0 shadow-sm bg-white">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-slate-900">Skills Assessment</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={skillsData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="skill" />
                <PolarRadiusAxis angle={90} domain={[0, 100]} />
                <Radar
                  name="Skills"
                  dataKey="score"
                  stroke="#3b82f6"
                  fill="#3b82f6"
                  fillOpacity={0.1}
                  strokeWidth={2}
                />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* OKRs Section */}
      <Card className="border-0 shadow-sm bg-white">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-slate-900">Objectives & Key Results (OKRs)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {okrs.map((okr) => (
              <div key={okr.id} className="p-4 border border-slate-200 rounded-lg">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-medium text-slate-900">{okr.title}</h3>
                  {getStatusBadge(okr.status)}
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Progress</span>
                    <span className="font-medium">{okr.progress}%</span>
                  </div>
                  <Progress value={okr.progress} className="h-2" />
                  <div className="text-xs text-slate-500">Due: {new Date(okr.dueDate).toLocaleDateString()}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
