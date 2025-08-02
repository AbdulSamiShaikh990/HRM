"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  TrendingUp,
  Target,
  BookOpen,
  Award,
  Users,
  ArrowRight,
  Plus,
  Brain,
  Lightbulb,
  CheckCircle,
  Clock,
  Star,
} from "lucide-react"
import { Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts"
import { useToast } from "@/hooks/use-toast"

const careerPaths = [
  {
    id: 1,
    employee: "Sarah Johnson",
    currentRole: "Senior Software Engineer",
    targetRole: "Engineering Manager",
    progress: 78,
    timeframe: "8-12 months",
    skills: ["Leadership", "Project Management", "Team Building"],
    completedMilestones: 7,
    totalMilestones: 9,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    employee: "Michael Chen",
    currentRole: "Product Manager",
    targetRole: "Senior Product Manager",
    progress: 65,
    timeframe: "6-9 months",
    skills: ["Strategic Planning", "Data Analysis", "Stakeholder Management"],
    completedMilestones: 5,
    totalMilestones: 8,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    employee: "Emily Rodriguez",
    currentRole: "Marketing Specialist",
    targetRole: "Marketing Manager",
    progress: 45,
    timeframe: "10-14 months",
    skills: ["Team Leadership", "Budget Management", "Campaign Strategy"],
    completedMilestones: 3,
    totalMilestones: 7,
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

const skillsAssessment = [
  { skill: "Technical Skills", current: 85, target: 90 },
  { skill: "Leadership", current: 65, target: 85 },
  { skill: "Communication", current: 80, target: 88 },
  { skill: "Problem Solving", current: 90, target: 95 },
  { skill: "Strategic Thinking", current: 60, target: 80 },
  { skill: "Team Management", current: 55, target: 85 },
]

const learningResources = [
  {
    id: 1,
    title: "Leadership Fundamentals",
    type: "Course",
    provider: "LinkedIn Learning",
    duration: "4 hours",
    progress: 100,
    status: "Completed",
  },
  {
    id: 2,
    title: "Project Management Professional (PMP)",
    type: "Certification",
    provider: "PMI",
    duration: "3 months",
    progress: 45,
    status: "In Progress",
  },
  {
    id: 3,
    title: "Advanced React Development",
    type: "Course",
    provider: "Udemy",
    duration: "12 hours",
    progress: 0,
    status: "Recommended",
  },
]

const milestones = [
  {
    id: 1,
    title: "Complete Leadership Training",
    description: "Finish the 40-hour leadership development program",
    dueDate: "2024-03-15",
    status: "Completed",
    category: "Training",
  },
  {
    id: 2,
    title: "Lead Cross-functional Project",
    description: "Successfully manage a project involving multiple departments",
    dueDate: "2024-04-30",
    status: "In Progress",
    category: "Experience",
  },
  {
    id: 3,
    title: "Mentor Junior Developer",
    description: "Provide guidance and mentorship to a junior team member",
    dueDate: "2024-05-15",
    status: "Pending",
    category: "Leadership",
  },
]

export default function CareerGrowthPage() {
  const [selectedEmployee, setSelectedEmployee] = useState<string>("sarah")
  const [isCreatePathDialogOpen, setIsCreatePathDialogOpen] = useState(false)
  const { toast } = useToast()

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Completed":
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900 dark:text-green-300">
            <CheckCircle className="w-3 h-3 mr-1" />
            Completed
          </Badge>
        )
      case "In Progress":
        return (
          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300">
            <Clock className="w-3 h-3 mr-1" />
            In Progress
          </Badge>
        )
      case "Recommended":
        return (
          <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100 dark:bg-orange-900 dark:text-orange-300">
            <Lightbulb className="w-3 h-3 mr-1" />
            Recommended
          </Badge>
        )
      case "Pending":
        return (
          <Badge className="bg-slate-100 text-slate-800 hover:bg-slate-100 dark:bg-slate-700 dark:text-slate-300">
            <Clock className="w-3 h-3 mr-1" />
            Pending
          </Badge>
        )
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const handleCreateCareerPath = () => {
    toast({
      title: "Career Path Created",
      description: "New career development plan has been created successfully.",
    })
    setIsCreatePathDialogOpen(false)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Career Growth Planner</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1">AI-powered career development and growth tracking</p>
        </div>
        <Dialog open={isCreatePathDialogOpen} onOpenChange={setIsCreatePathDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800">
              <Plus className="w-4 h-4 mr-2" />
              Create Career Path
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Create New Career Path</DialogTitle>
              <DialogDescription>
                Design a personalized career development plan with AI recommendations.
              </DialogDescription>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="employee">Employee</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select employee" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sarah">Sarah Johnson</SelectItem>
                    <SelectItem value="michael">Michael Chen</SelectItem>
                    <SelectItem value="emily">Emily Rodriguez</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="targetRole">Target Role</Label>
                <Input placeholder="e.g., Engineering Manager" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="timeframe">Timeframe</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select timeframe" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="6months">6 months</SelectItem>
                    <SelectItem value="1year">1 year</SelectItem>
                    <SelectItem value="2years">2 years</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="priority">Priority Level</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="col-span-2 space-y-2">
                <Label htmlFor="goals">Career Goals</Label>
                <Textarea placeholder="Describe the career objectives and goals..." rows={3} />
              </div>
            </div>
            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setIsCreatePathDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleCreateCareerPath} className="bg-blue-600 hover:bg-blue-700">
                <Brain className="w-4 h-4 mr-2" />
                Generate AI Path
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-0 shadow-sm bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-blue-900 dark:text-blue-100">Active Paths</CardTitle>
            <Target className="h-4 w-4 text-blue-600 dark:text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">127</div>
            <p className="text-xs text-blue-700 dark:text-blue-300 flex items-center mt-1">
              <TrendingUp className="w-3 h-3 mr-1" />
              +15% this quarter
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-green-900 dark:text-green-100">Completed Goals</CardTitle>
            <Award className="h-4 w-4 text-green-600 dark:text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-900 dark:text-green-100">89</div>
            <p className="text-xs text-green-700 dark:text-green-300 mt-1">This year</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-purple-900 dark:text-purple-100">Avg. Progress</CardTitle>
            <TrendingUp className="h-4 w-4 text-purple-600 dark:text-purple-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-900 dark:text-purple-100">73%</div>
            <p className="text-xs text-purple-700 dark:text-purple-300 mt-1">Across all paths</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-orange-900 dark:text-orange-100">Promotions</CardTitle>
            <Star className="h-4 w-4 text-orange-600 dark:text-orange-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-900 dark:text-orange-100">23</div>
            <p className="text-xs text-orange-700 dark:text-orange-300 mt-1">This year</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5 lg:w-auto lg:grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="paths">Career Paths</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="learning">Learning</TabsTrigger>
          <TabsTrigger value="milestones">Milestones</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Career Path Progress */}
            <Card className="lg:col-span-2 border-0 shadow-sm bg-white dark:bg-slate-800">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                  Career Path Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {careerPaths.map((path) => (
                    <div key={path.id} className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <Avatar>
                            <AvatarImage src={path.avatar || "/placeholder.svg"} />
                            <AvatarFallback>
                              {path.employee
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-medium text-slate-900 dark:text-slate-100">{path.employee}</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                              {path.currentRole} → {path.targetRole}
                            </p>
                          </div>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {path.timeframe}
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-600 dark:text-slate-400">Progress</span>
                          <span className="font-medium">{path.progress}%</span>
                        </div>
                        <Progress value={path.progress} className="h-2" />
                        <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400">
                          <span>
                            {path.completedMilestones}/{path.totalMilestones} milestones
                          </span>
                          <span>{path.skills.length} skills to develop</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* AI Recommendations */}
            <Card className="border-0 shadow-sm bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-slate-900 dark:text-slate-100 flex items-center">
                  <Brain className="w-5 h-5 mr-2 text-indigo-600 dark:text-indigo-400" />
                  AI Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 bg-white dark:bg-slate-800 rounded-lg border border-indigo-200 dark:border-indigo-800">
                  <div className="flex items-start space-x-3">
                    <Lightbulb className="w-4 h-4 text-indigo-600 dark:text-indigo-400 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-slate-900 dark:text-slate-100 text-sm">
                        High Potential Identified
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                        Sarah Johnson shows strong leadership potential. Consider fast-track management program.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-white dark:bg-slate-800 rounded-lg border border-green-200 dark:border-green-800">
                  <div className="flex items-start space-x-3">
                    <BookOpen className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-slate-900 dark:text-slate-100 text-sm">Skill Gap Analysis</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                        Team needs more cloud architecture skills. Recommend AWS certification program.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-white dark:bg-slate-800 rounded-lg border border-orange-200 dark:border-orange-800">
                  <div className="flex items-start space-x-3">
                    <Users className="w-4 h-4 text-orange-600 dark:text-orange-400 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-slate-900 dark:text-slate-100 text-sm">Succession Planning</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                        3 employees ready for promotion to senior roles within 6 months.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-white dark:bg-slate-800 rounded-lg border border-purple-200 dark:border-purple-800">
                  <div className="flex items-start space-x-3">
                    <Target className="w-4 h-4 text-purple-600 dark:text-purple-400 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-slate-900 dark:text-slate-100 text-sm">Career Alignment</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                        Michael Chen's goals align 95% with company objectives. Excellent retention candidate.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="paths" className="space-y-6">
          <Card className="border-0 shadow-sm bg-white dark:bg-slate-800">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                All Career Paths
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {careerPaths.map((path) => (
                  <Card key={path.id} className="border border-slate-200 dark:border-slate-700">
                    <CardHeader className="pb-3">
                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarImage src={path.avatar || "/placeholder.svg"} />
                          <AvatarFallback>
                            {path.employee
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-medium text-slate-900 dark:text-slate-100">{path.employee}</h3>
                          <p className="text-sm text-slate-600 dark:text-slate-400">{path.currentRole}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Target Role</span>
                          <Badge variant="outline">{path.timeframe}</Badge>
                        </div>
                        <p className="text-sm text-slate-900 dark:text-slate-100">{path.targetRole}</p>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-slate-600 dark:text-slate-400">Progress</span>
                          <span className="font-medium">{path.progress}%</span>
                        </div>
                        <Progress value={path.progress} className="h-2" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Key Skills</p>
                        <div className="flex flex-wrap gap-1">
                          {path.skills.map((skill, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700">
                        View Details
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="skills" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-0 shadow-sm bg-white dark:bg-slate-800">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                  Skills Assessment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <RadarChart data={skillsAssessment}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="skill" />
                    <PolarRadiusAxis angle={90} domain={[0, 100]} />
                    <Radar
                      name="Current"
                      dataKey="current"
                      stroke="#3b82f6"
                      fill="#3b82f6"
                      fillOpacity={0.1}
                      strokeWidth={2}
                    />
                    <Radar
                      name="Target"
                      dataKey="target"
                      stroke="#10b981"
                      fill="#10b981"
                      fillOpacity={0.1}
                      strokeWidth={2}
                    />
                    <Tooltip />
                  </RadarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white dark:bg-slate-800">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                  Skill Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {skillsAssessment.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{skill.skill}</span>
                        <span className="text-sm text-slate-500 dark:text-slate-400">
                          {skill.current}% / {skill.target}%
                        </span>
                      </div>
                      <div className="relative">
                        <Progress value={skill.current} className="h-2" />
                        <div
                          className="absolute top-0 h-2 w-1 bg-green-500 rounded-full"
                          style={{ left: `${skill.target}%` }}
                        />
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        Gap: {skill.target - skill.current} points
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="learning" className="space-y-6">
          <Card className="border-0 shadow-sm bg-white dark:bg-slate-800">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                Learning Resources
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {learningResources.map((resource) => (
                  <Card key={resource.id} className="border border-slate-200 dark:border-slate-700">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-medium text-slate-900 dark:text-slate-100">{resource.title}</h3>
                          <p className="text-sm text-slate-600 dark:text-slate-400">{resource.provider}</p>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {resource.type}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600 dark:text-slate-400">Duration</span>
                        <span className="font-medium">{resource.duration}</span>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-slate-600 dark:text-slate-400">Progress</span>
                          <span className="font-medium">{resource.progress}%</span>
                        </div>
                        <Progress value={resource.progress} className="h-2" />
                      </div>
                      <div className="flex items-center justify-between">
                        {getStatusBadge(resource.status)}
                        <Button size="sm" variant="outline" className="bg-transparent">
                          {resource.status === "Completed" ? "Review" : "Continue"}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="milestones" className="space-y-6">
          <Card className="border-0 shadow-sm bg-white dark:bg-slate-800">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                Career Milestones
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {milestones.map((milestone) => (
                  <div key={milestone.id} className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-medium text-slate-900 dark:text-slate-100">{milestone.title}</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{milestone.description}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="text-xs">
                          {milestone.category}
                        </Badge>
                        {getStatusBadge(milestone.status)}
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600 dark:text-slate-400">Due Date</span>
                      <span className="font-medium">{new Date(milestone.dueDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
