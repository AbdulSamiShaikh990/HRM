"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Brain, 
  TrendingUp, 
  Users, 
  Clock, 
  AlertTriangle, 
  CheckCircle,
  BarChart3,
  PieChart,
  Activity,
  Target,
  Lightbulb,
  Zap
} from "lucide-react"

export default function AIAnalyticsPage() {
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisResults, setAnalysisResults] = useState<any>(null)

  const aiFeatures = [
    {
      title: "Employee Performance Prediction",
      description: "AI predicts employee performance trends and identifies high-potential candidates",
      icon: TrendingUp,
      status: "active",
      accuracy: 94
    },
    {
      title: "Attrition Risk Analysis",
      description: "Machine learning models predict employee turnover risk with 89% accuracy",
      icon: AlertTriangle,
      status: "active",
      accuracy: 89
    },
    {
      title: "Recruitment AI Assistant",
      description: "AI-powered candidate screening and interview scheduling",
      icon: Users,
      status: "active",
      accuracy: 92
    },
    {
      title: "Sentiment Analysis",
      description: "Real-time analysis of employee satisfaction and workplace sentiment",
      icon: Brain,
      status: "active",
      accuracy: 87
    },
    {
      title: "Workload Optimization",
      description: "AI optimizes task distribution and resource allocation",
      icon: Target,
      status: "developing",
      accuracy: 78
    },
    {
      title: "Predictive Analytics",
      description: "Forecast hiring needs, budget requirements, and growth patterns",
      icon: BarChart3,
      status: "developing",
      accuracy: 85
    }
  ]

  const runAIAnalysis = async () => {
    setIsAnalyzing(true)
    // Simulate AI analysis
    setTimeout(() => {
      setAnalysisResults({
        performanceScore: 87,
        attritionRisk: 12,
        satisfactionIndex: 78,
        productivityTrend: "+15%",
        recommendations: [
          "Implement flexible work arrangements to reduce attrition risk",
          "Provide additional training for 15 employees identified as high-potential",
          "Consider salary adjustments for 8 employees at risk of leaving",
          "Optimize team structures based on collaboration patterns"
        ]
      })
      setIsAnalyzing(false)
    }, 3000)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">AI Analytics Dashboard</h1>
          <p className="text-muted-foreground">
            Advanced AI-powered insights and predictions for strategic HR decisions
          </p>
        </div>
        <Button onClick={runAIAnalysis} disabled={isAnalyzing} className="flex items-center gap-2">
          <Brain className="h-4 w-4" />
          {isAnalyzing ? "Analyzing..." : "Run AI Analysis"}
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {aiFeatures.map((feature, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <feature.icon className="h-8 w-8 text-primary" />
                <Badge variant={feature.status === "active" ? "default" : "secondary"}>
                  {feature.status === "active" ? "Active" : "Developing"}
                </Badge>
              </div>
              <CardTitle className="text-lg">{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Accuracy</span>
                  <span className="font-semibold">{feature.accuracy}%</span>
                </div>
                <Progress value={feature.accuracy} className="h-2" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {analysisResults && (
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="predictions">Predictions</TabsTrigger>
            <TabsTrigger value="recommendations">AI Recommendations</TabsTrigger>
            <TabsTrigger value="trends">Trends</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Performance Score</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{analysisResults.performanceScore}%</div>
                  <p className="text-xs text-muted-foreground">+12% from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Attrition Risk</CardTitle>
                  <AlertTriangle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{analysisResults.attritionRisk}%</div>
                  <p className="text-xs text-muted-foreground">-3% from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Satisfaction Index</CardTitle>
                  <CheckCircle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{analysisResults.satisfactionIndex}%</div>
                  <p className="text-xs text-muted-foreground">+5% from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Productivity Trend</CardTitle>
                  <Activity className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{analysisResults.productivityTrend}</div>
                  <p className="text-xs text-muted-foreground">vs last quarter</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="predictions" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  AI Predictions
                </CardTitle>
                <CardDescription>
                  Machine learning predictions for the next 3 months
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Hiring Needs</h4>
                    <div className="text-sm text-muted-foreground">
                      <p>• Software Engineers: 8-12 positions</p>
                      <p>• Marketing Specialists: 3-5 positions</p>
                      <p>• Sales Representatives: 6-8 positions</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Budget Forecast</h4>
                    <div className="text-sm text-muted-foreground">
                      <p>• Salary Increases: $450K - $520K</p>
                      <p>• Training Budget: $180K - $220K</p>
                      <p>• Recruitment Costs: $95K - $120K</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="recommendations" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5" />
                  AI Recommendations
                </CardTitle>
                <CardDescription>
                  Strategic recommendations based on AI analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {analysisResults.recommendations.map((rec: string, index: number) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm">{rec}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="trends" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Employee Engagement Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Q1 2024</span>
                      <span className="font-semibold">72%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Q2 2024</span>
                      <span className="font-semibold">78%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Q3 2024</span>
                      <span className="font-semibold">81%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Q4 2024 (Predicted)</span>
                      <span className="font-semibold text-primary">85%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Performance Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">High Performers</span>
                      <span className="font-semibold text-green-600">35%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Average Performers</span>
                      <span className="font-semibold text-yellow-600">45%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Needs Improvement</span>
                      <span className="font-semibold text-red-600">20%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      )}
    </div>
  )
} 