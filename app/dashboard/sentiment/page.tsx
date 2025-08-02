"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Heart,
  Frown,
  Meh,
  Smile,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  Users,
  MessageSquare,
  BarChart3,
  Brain,
  Filter,
  Download,
} from "lucide-react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Area,
  AreaChart,
} from "recharts"
import { useToast } from "@/hooks/use-toast"

const sentimentTrend = [
  { month: "Jan", positive: 65, neutral: 25, negative: 10, overall: 78 },
  { month: "Feb", positive: 68, neutral: 22, negative: 10, overall: 79 },
  { month: "Mar", positive: 62, neutral: 28, negative: 10, overall: 76 },
  { month: "Apr", positive: 70, neutral: 20, negative: 10, overall: 80 },
  { month: "May", positive: 72, neutral: 18, negative: 10, overall: 81 },
  { month: "Jun", positive: 75, neutral: 15, negative: 10, overall: 83 },
]

const departmentSentiment = [
  { department: "Engineering", score: 85, trend: "up", employees: 245 },
  { department: "Sales", score: 78, trend: "up", employees: 132 },
  { department: "Marketing", score: 72, trend: "down", employees: 89 },
  { department: "HR", score: 88, trend: "up", employees: 45 },
  { department: "Finance", score: 75, trend: "stable", employees: 67 },
  { department: "Operations", score: 80, trend: "up", employees: 156 },
]

const sentimentDistribution = [
  { name: "Very Positive", value: 35, color: "#22c55e" },
  { name: "Positive", value: 40, color: "#84cc16" },
  { name: "Neutral", value: 15, color: "#eab308" },
  { name: "Negative", value: 8, color: "#f97316" },
  { name: "Very Negative", value: 2, color: "#ef4444" },
]

const recentFeedback = [
  {
    id: 1,
    employee: "Sarah Johnson",
    department: "Engineering",
    sentiment: "positive",
    score: 8.5,
    feedback: "Great team collaboration and exciting projects. Love the new flexible work policy!",
    date: "2024-01-28",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: 2,
    employee: "Michael Chen",
    department: "Product",
    sentiment: "neutral",
    score: 6.2,
    feedback: "Work is okay, but feeling a bit overwhelmed with the current workload.",
    date: "2024-01-27",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: 3,
    employee: "Emily Rodriguez",
    department: "Marketing",
    sentiment: "negative",
    score: 4.1,
    feedback: "Concerned about the recent changes in team structure. Communication could be better.",
    date: "2024-01-26",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: 4,
    employee: "David Kim",
    department: "Design",
    sentiment: "positive",
    score: 9.2,
    feedback: "Amazing creative freedom and supportive management. Best job I've ever had!",
    date: "2024-01-25",
    avatar: "/placeholder.svg?height=32&width=32",
  },
]

const aiInsights = [
  {
    type: "alert",
    title: "Declining Satisfaction in Marketing",
    description: "Marketing department shows 15% decrease in sentiment over the past month.",
    priority: "high",
    action: "Schedule team meeting",
  },
  {
    type: "opportunity",
    title: "High Engagement in Engineering",
    description: "Engineering team sentiment at all-time high. Consider sharing best practices.",
    priority: "medium",
    action: "Document success factors",
  },
  {
    type: "trend",
    title: "Remote Work Satisfaction",
    description: "85% positive sentiment around flexible work arrangements.",
    priority: "low",
    action: "Continue current policy",
  },
]

export default function SentimentPage() {
  const [selectedDepartment, setSelectedDepartment] = useState("all")
  const [selectedTimeframe, setSelectedTimeframe] = useState("6months")
  const { toast } = useToast()

  const getSentimentIcon = (sentiment: string, score?: number) => {
    if (score) {
      if (score >= 8) return <Smile className="w-4 h-4 text-green-600" />
      if (score >= 6) return <Meh className="w-4 h-4 text-yellow-600" />
      return <Frown className="w-4 h-4 text-red-600" />
    }

    switch (sentiment) {
      case "positive":
        return <Smile className="w-4 h-4 text-green-600" />
      case "neutral":
        return <Meh className="w-4 h-4 text-yellow-600" />
      case "negative":
        return <Frown className="w-4 h-4 text-red-600" />
      default:
        return <Meh className="w-4 h-4 text-slate-400" />
    }
  }

  const getSentimentBadge = (sentiment: string, score?: number) => {
    if (score) {
      if (score >= 8) {
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900 dark:text-green-300">
            Very Positive
          </Badge>
        )
      }
      if (score >= 6) {
        return (
          <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-300">
            Neutral
          </Badge>
        )
      }
      return (
        <Badge className="bg-red-100 text-red-800 hover:bg-red-100 dark:bg-red-900 dark:text-red-300">Negative</Badge>
      )
    }

    switch (sentiment) {
      case "positive":
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900 dark:text-green-300">
            Positive
          </Badge>
        )
      case "neutral":
        return (
          <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-300">
            Neutral
          </Badge>
        )
      case "negative":
        return (
          <Badge className="bg-red-100 text-red-800 hover:bg-red-100 dark:bg-red-900 dark:text-red-300">Negative</Badge>
        )
      default:
        return <Badge variant="secondary">{sentiment}</Badge>
    }
  }

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="w-4 h-4 text-green-600" />
      case "down":
        return <TrendingDown className="w-4 h-4 text-red-600" />
      default:
        return <div className="w-4 h-4" />
    }
  }

  const handleExportReport = () => {
    toast({
      title: "Report Generated",
      description: "Sentiment analysis report has been exported successfully.",
    })
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Workplace Sentiment Analyzer</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1">AI-powered employee sentiment tracking and analysis</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Select value={selectedTimeframe} onValueChange={setSelectedTimeframe}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1month">Last Month</SelectItem>
              <SelectItem value="3months">Last 3 Months</SelectItem>
              <SelectItem value="6months">Last 6 Months</SelectItem>
              <SelectItem value="1year">Last Year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" onClick={handleExportReport} className="bg-transparent">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-0 shadow-sm bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-green-900 dark:text-green-100">Overall Sentiment</CardTitle>
            <Heart className="h-4 w-4 text-green-600 dark:text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-900 dark:text-green-100">83%</div>
            <p className="text-xs text-green-700 dark:text-green-300 flex items-center mt-1">
              <TrendingUp className="w-3 h-3 mr-1" />
              +5% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-blue-900 dark:text-blue-100">Participation Rate</CardTitle>
            <Users className="h-4 w-4 text-blue-600 dark:text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">87%</div>
            <p className="text-xs text-blue-700 dark:text-blue-300 mt-1">1,127 responses</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-orange-900 dark:text-orange-100">Risk Alerts</CardTitle>
            <AlertTriangle className="h-4 w-4 text-orange-600 dark:text-orange-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-900 dark:text-orange-100">3</div>
            <p className="text-xs text-orange-700 dark:text-orange-300 mt-1">Require attention</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-purple-900 dark:text-purple-100">Avg. Score</CardTitle>
            <BarChart3 className="h-4 w-4 text-purple-600 dark:text-purple-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-900 dark:text-purple-100">7.8/10</div>
            <p className="text-xs text-purple-700 dark:text-purple-300 mt-1">Company average</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5 lg:w-auto lg:grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="trends">Trends</TabsTrigger>
          <TabsTrigger value="departments">Departments</TabsTrigger>
          <TabsTrigger value="feedback">Feedback</TabsTrigger>
          <TabsTrigger value="insights">AI Insights</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Sentiment Distribution */}
            <Card className="border-0 shadow-sm bg-white dark:bg-slate-800">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                  Sentiment Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={sentimentDistribution}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {sentimentDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value: any) => [`${value}%`, "Percentage"]} />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Recent Sentiment Trend */}
            <Card className="border-0 shadow-sm bg-white dark:bg-slate-800">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                  Sentiment Trend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={sentimentTrend}>
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
                    <Area
                      type="monotone"
                      dataKey="overall"
                      stroke="#3b82f6"
                      fill="#3b82f6"
                      fillOpacity={0.1}
                      strokeWidth={3}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Department Overview */}
          <Card className="border-0 shadow-sm bg-white dark:bg-slate-800">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                Department Sentiment Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {departmentSentiment.map((dept) => (
                  <div key={dept.department} className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-slate-900 dark:text-slate-100">{dept.department}</h3>
                      {getTrendIcon(dept.trend)}
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-slate-900 dark:text-slate-100">{dept.score}%</span>
                        <span className="text-sm text-slate-500 dark:text-slate-400">{dept.employees} employees</span>
                      </div>
                      <Progress value={dept.score} className="h-2" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trends" className="space-y-6">
          <Card className="border-0 shadow-sm bg-white dark:bg-slate-800">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                Detailed Sentiment Trends
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={sentimentTrend}>
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
                    dataKey="positive"
                    stroke="#22c55e"
                    strokeWidth={3}
                    dot={{ fill: "#22c55e", strokeWidth: 2, r: 4 }}
                    name="Positive"
                  />
                  <Line
                    type="monotone"
                    dataKey="neutral"
                    stroke="#eab308"
                    strokeWidth={3}
                    dot={{ fill: "#eab308", strokeWidth: 2, r: 4 }}
                    name="Neutral"
                  />
                  <Line
                    type="monotone"
                    dataKey="negative"
                    stroke="#ef4444"
                    strokeWidth={3}
                    dot={{ fill: "#ef4444", strokeWidth: 2, r: 4 }}
                    name="Negative"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="departments" className="space-y-6">
          <Card className="border-0 shadow-sm bg-white dark:bg-slate-800">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                  Department Analysis
                </CardTitle>
                <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Departments</SelectItem>
                    <SelectItem value="engineering">Engineering</SelectItem>
                    <SelectItem value="sales">Sales</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="hr">HR</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={departmentSentiment} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis type="number" stroke="#64748b" />
                  <YAxis dataKey="department" type="category" stroke="#64748b" width={100} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "white",
                      border: "1px solid #e2e8f0",
                      borderRadius: "8px",
                      boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                    }}
                  />
                  <Bar dataKey="score" fill="#3b82f6" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="feedback" className="space-y-6">
          <Card className="border-0 shadow-sm bg-white dark:bg-slate-800">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                  Recent Feedback
                </CardTitle>
                <Button variant="outline" size="sm" className="bg-transparent">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentFeedback.map((feedback) => (
                  <div key={feedback.id} className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarImage src={feedback.avatar || "/placeholder.svg"} />
                          <AvatarFallback>
                            {feedback.employee
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-medium text-slate-900 dark:text-slate-100">{feedback.employee}</h3>
                          <p className="text-sm text-slate-600 dark:text-slate-400">{feedback.department}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1">
                          {getSentimentIcon(feedback.sentiment, feedback.score)}
                          <span className="text-sm font-medium">{feedback.score}/10</span>
                        </div>
                        {getSentimentBadge(feedback.sentiment, feedback.score)}
                      </div>
                    </div>
                    <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">{feedback.feedback}</p>
                    <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                      <span>{new Date(feedback.date).toLocaleDateString()}</span>
                      <Button variant="ghost" size="sm" className="h-6 px-2">
                        <MessageSquare className="w-3 h-3 mr-1" />
                        Respond
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="insights" className="space-y-6">
          <Card className="border-0 shadow-sm bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-slate-900 dark:text-slate-100 flex items-center">
                <Brain className="w-5 h-5 mr-2 text-indigo-600 dark:text-indigo-400" />
                AI-Powered Insights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {aiInsights.map((insight, index) => (
                <div
                  key={index}
                  className="p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-medium text-slate-900 dark:text-slate-100">{insight.title}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{insight.description}</p>
                    </div>
                    <Badge
                      variant="outline"
                      className={
                        insight.priority === "high"
                          ? "border-red-200 text-red-700 dark:border-red-800 dark:text-red-300"
                          : insight.priority === "medium"
                            ? "border-orange-200 text-orange-700 dark:border-orange-800 dark:text-orange-300"
                            : "border-green-200 text-green-700 dark:border-green-800 dark:text-green-300"
                      }
                    >
                      {insight.priority}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      Recommended Action: {insight.action}
                    </span>
                    <Button size="sm" variant="outline" className="bg-transparent">
                      Take Action
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Predictive Analytics */}
          <Card className="border-0 shadow-sm bg-white dark:bg-slate-800">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                Predictive Analytics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                  <div className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-2">92%</div>
                  <div className="text-sm text-blue-700 dark:text-blue-300">Retention Probability</div>
                  <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">Next 6 months</div>
                </div>
                <div className="text-center p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                  <div className="text-2xl font-bold text-green-900 dark:text-green-100 mb-2">15%</div>
                  <div className="text-sm text-green-700 dark:text-green-300">Engagement Increase</div>
                  <div className="text-xs text-green-600 dark:text-green-400 mt-1">Projected next quarter</div>
                </div>
                <div className="text-center p-4 bg-orange-50 dark:bg-orange-950 rounded-lg">
                  <div className="text-2xl font-bold text-orange-900 dark:text-orange-100 mb-2">3</div>
                  <div className="text-sm text-orange-700 dark:text-orange-300">At-Risk Employees</div>
                  <div className="text-xs text-orange-600 dark:text-orange-400 mt-1">Require intervention</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
