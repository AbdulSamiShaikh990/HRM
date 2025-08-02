"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DollarSign,
  Download,
  Calculator,
  CreditCard,
  TrendingUp,
  Users,
  AlertCircle,
  CheckCircle,
  Clock,
} from "lucide-react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { useToast } from "@/hooks/use-toast"

const payrollData = [
  { month: "Jan", amount: 2400000, employees: 1247 },
  { month: "Feb", amount: 2450000, employees: 1252 },
  { month: "Mar", amount: 2520000, employees: 1268 },
  { month: "Apr", amount: 2480000, employees: 1265 },
  { month: "May", amount: 2600000, employees: 1280 },
  { month: "Jun", amount: 2650000, employees: 1295 },
]

const departmentPayroll = [
  { name: "Engineering", value: 1200000, color: "#3b82f6" },
  { name: "Sales", value: 800000, color: "#10b981" },
  { name: "Marketing", value: 400000, color: "#f59e0b" },
  { name: "HR", value: 200000, color: "#8b5cf6" },
  { name: "Finance", value: 150000, color: "#ef4444" },
]

const payrollRecords = [
  {
    id: 1,
    employee: "Sarah Johnson",
    department: "Engineering",
    baseSalary: 95000,
    bonus: 5000,
    deductions: 8500,
    netPay: 91500,
    status: "Processed",
    payDate: "2024-01-31",
  },
  {
    id: 2,
    employee: "Michael Chen",
    department: "Product",
    baseSalary: 88000,
    bonus: 3000,
    deductions: 7800,
    netPay: 83200,
    status: "Processed",
    payDate: "2024-01-31",
  },
  {
    id: 3,
    employee: "Emily Rodriguez",
    department: "Marketing",
    baseSalary: 75000,
    bonus: 2500,
    deductions: 6800,
    netPay: 70700,
    status: "Pending",
    payDate: "2024-02-01",
  },
]

export default function PayrollPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("current")
  const [isProcessingDialogOpen, setIsProcessingDialogOpen] = useState(false)
  const { toast } = useToast()

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Processed":
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900 dark:text-green-300">
            <CheckCircle className="w-3 h-3 mr-1" />
            Processed
          </Badge>
        )
      case "Pending":
        return (
          <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100 dark:bg-orange-900 dark:text-orange-300">
            <Clock className="w-3 h-3 mr-1" />
            Pending
          </Badge>
        )
      case "Failed":
        return (
          <Badge className="bg-red-100 text-red-800 hover:bg-red-100 dark:bg-red-900 dark:text-red-300">
            <AlertCircle className="w-3 h-3 mr-1" />
            Failed
          </Badge>
        )
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const handleProcessPayroll = () => {
    toast({
      title: "Payroll Processing Started",
      description: "Processing payroll for 1,295 employees. This may take a few minutes.",
    })
    setIsProcessingDialogOpen(false)
  }

  const handleExportPayroll = () => {
    toast({
      title: "Export Started",
      description: "Payroll report is being generated. You'll receive an email when ready.",
    })
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Payroll Management</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1">Manage employee compensation and payroll processing</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" onClick={handleExportPayroll} className="bg-transparent">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
          <Dialog open={isProcessingDialogOpen} onOpenChange={setIsProcessingDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800">
                <Calculator className="w-4 h-4 mr-2" />
                Process Payroll
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Process Monthly Payroll</DialogTitle>
                <DialogDescription>
                  This will process payroll for all active employees for the current month.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <span className="font-medium text-blue-900 dark:text-blue-100">1,295 employees</span>
                  </div>
                  <div className="flex items-center space-x-2 mt-1">
                    <DollarSign className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <span className="font-medium text-blue-900 dark:text-blue-100">$2,650,000 total</span>
                  </div>
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  <p>• All salary calculations will be processed</p>
                  <p>• Tax deductions will be applied automatically</p>
                  <p>• Direct deposits will be initiated</p>
                  <p>• Payslips will be generated and sent</p>
                </div>
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={() => setIsProcessingDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleProcessPayroll} className="bg-blue-600 hover:bg-blue-700">
                  Process Payroll
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-0 shadow-sm bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-blue-900 dark:text-blue-100">Monthly Payroll</CardTitle>
            <DollarSign className="h-4 w-4 text-blue-600 dark:text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">$2.65M</div>
            <p className="text-xs text-blue-700 dark:text-blue-300 flex items-center mt-1">
              <TrendingUp className="w-3 h-3 mr-1" />
              +2.3% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-green-900 dark:text-green-100">Processed</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-900 dark:text-green-100">1,247</div>
            <p className="text-xs text-green-700 dark:text-green-300 mt-1">96.3% completion rate</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-orange-900 dark:text-orange-100">Pending</CardTitle>
            <Clock className="h-4 w-4 text-orange-600 dark:text-orange-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-900 dark:text-orange-100">48</div>
            <p className="text-xs text-orange-700 dark:text-orange-300 mt-1">Awaiting approval</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-purple-900 dark:text-purple-100">Avg. Salary</CardTitle>
            <CreditCard className="h-4 w-4 text-purple-600 dark:text-purple-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-900 dark:text-purple-100">$82.4K</div>
            <p className="text-xs text-purple-700 dark:text-purple-300 mt-1">Annual average</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="records">Payroll Records</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Payroll Trend */}
            <Card className="border-0 shadow-sm bg-white dark:bg-slate-800">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                  Payroll Trend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={payrollData}>
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
                      formatter={(value: any) => [`$${(value / 1000000).toFixed(2)}M`, "Amount"]}
                    />
                    <Line
                      type="monotone"
                      dataKey="amount"
                      stroke="#3b82f6"
                      strokeWidth={3}
                      dot={{ fill: "#3b82f6", strokeWidth: 2, r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Department Distribution */}
            <Card className="border-0 shadow-sm bg-white dark:bg-slate-800">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                  Department Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={departmentPayroll}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {departmentPayroll.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value: any) => [`$${(value / 1000).toFixed(0)}K`, "Amount"]} />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Processing Status */}
          <Card className="border-0 shadow-sm bg-white dark:bg-slate-800">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                Processing Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Overall Progress</span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">96.3%</span>
                </div>
                <Progress value={96.3} className="h-2" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="text-center p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                    <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-green-900 dark:text-green-100">1,247</div>
                    <div className="text-sm text-green-700 dark:text-green-300">Completed</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 dark:bg-orange-950 rounded-lg">
                    <Clock className="w-8 h-8 text-orange-600 dark:text-orange-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-orange-900 dark:text-orange-100">48</div>
                    <div className="text-sm text-orange-700 dark:text-orange-300">In Progress</div>
                  </div>
                  <div className="text-center p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                    <AlertCircle className="w-8 h-8 text-red-600 dark:text-red-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-red-900 dark:text-red-100">0</div>
                    <div className="text-sm text-red-700 dark:text-red-300">Failed</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="records" className="space-y-6">
          <Card className="border-0 shadow-sm bg-white dark:bg-slate-800">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                  Payroll Records
                </CardTitle>
                <div className="flex space-x-2">
                  <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="current">Current Month</SelectItem>
                      <SelectItem value="previous">Previous Month</SelectItem>
                      <SelectItem value="quarter">This Quarter</SelectItem>
                      <SelectItem value="year">This Year</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Employee</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Base Salary</TableHead>
                    <TableHead>Bonus</TableHead>
                    <TableHead>Deductions</TableHead>
                    <TableHead>Net Pay</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Pay Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {payrollRecords.map((record) => (
                    <TableRow key={record.id}>
                      <TableCell className="font-medium">{record.employee}</TableCell>
                      <TableCell>{record.department}</TableCell>
                      <TableCell>${record.baseSalary.toLocaleString()}</TableCell>
                      <TableCell>${record.bonus.toLocaleString()}</TableCell>
                      <TableCell>${record.deductions.toLocaleString()}</TableCell>
                      <TableCell className="font-medium">${record.netPay.toLocaleString()}</TableCell>
                      <TableCell>{getStatusBadge(record.status)}</TableCell>
                      <TableCell>{new Date(record.payDate).toLocaleDateString()}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-0 shadow-sm bg-white dark:bg-slate-800">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                  Cost Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                    <span className="text-sm font-medium">Total Compensation</span>
                    <span className="text-lg font-bold">$2,650,000</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                    <span className="text-sm font-medium">Benefits & Insurance</span>
                    <span className="text-lg font-bold">$318,000</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                    <span className="text-sm font-medium">Taxes & Deductions</span>
                    <span className="text-lg font-bold">$477,000</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
                    <span className="text-sm font-medium text-blue-900 dark:text-blue-100">Net Payroll</span>
                    <span className="text-lg font-bold text-blue-900 dark:text-blue-100">$1,855,000</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white dark:bg-slate-800">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                  Compliance Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Tax Compliance</span>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Compliant
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Labor Law Compliance</span>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Compliant
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Benefits Compliance</span>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Compliant
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Audit Readiness</span>
                    <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">
                      <Clock className="w-3 h-3 mr-1" />
                      In Progress
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <Card className="border-0 shadow-sm bg-white dark:bg-slate-800">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                Payroll Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="payPeriod">Pay Period</Label>
                  <Select defaultValue="monthly">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="biweekly">Bi-weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="payDate">Default Pay Date</Label>
                  <Input type="date" defaultValue="2024-01-31" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="taxRate">Default Tax Rate (%)</Label>
                  <Input type="number" defaultValue="18" min="0" max="50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="currency">Currency</Label>
                  <Select defaultValue="usd">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="usd">USD ($)</SelectItem>
                      <SelectItem value="eur">EUR (€)</SelectItem>
                      <SelectItem value="gbp">GBP (£)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex justify-end">
                <Button className="bg-blue-600 hover:bg-blue-700">Save Settings</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
