"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { Plus, Calendar, CheckCircle, XCircle, AlertCircle, Plane, Heart, Coffee } from "lucide-react"

const leaveRequests = [
  {
    id: 1,
    employee: "Sarah Johnson",
    type: "Annual Leave",
    startDate: "2024-02-15",
    endDate: "2024-02-19",
    days: 5,
    reason: "Family vacation",
    status: "Approved",
    appliedDate: "2024-01-20",
  },
  {
    id: 2,
    employee: "Michael Chen",
    type: "Sick Leave",
    startDate: "2024-02-01",
    endDate: "2024-02-02",
    days: 2,
    reason: "Medical appointment",
    status: "Pending",
    appliedDate: "2024-01-28",
  },
  {
    id: 3,
    employee: "Emily Rodriguez",
    type: "Personal Leave",
    startDate: "2024-02-10",
    endDate: "2024-02-10",
    days: 1,
    reason: "Personal matters",
    status: "Rejected",
    appliedDate: "2024-01-25",
  },
]

const leaveBalance = {
  annual: { used: 8, total: 25 },
  sick: { used: 3, total: 10 },
  personal: { used: 2, total: 5 },
}

export default function LeavePage() {
  const [isRequestDialogOpen, setIsRequestDialogOpen] = useState(false)

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Approved":
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
            <CheckCircle className="w-3 h-3 mr-1" />
            Approved
          </Badge>
        )
      case "Pending":
        return (
          <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">
            <AlertCircle className="w-3 h-3 mr-1" />
            Pending
          </Badge>
        )
      case "Rejected":
        return (
          <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
            <XCircle className="w-3 h-3 mr-1" />
            Rejected
          </Badge>
        )
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const getLeaveIcon = (type: string) => {
    switch (type) {
      case "Annual Leave":
        return <Plane className="w-4 h-4 text-blue-600" />
      case "Sick Leave":
        return <Heart className="w-4 h-4 text-red-600" />
      case "Personal Leave":
        return <Coffee className="w-4 h-4 text-purple-600" />
      default:
        return <Calendar className="w-4 h-4 text-slate-600" />
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Leave Management</h1>
          <p className="text-slate-600 mt-1">Manage leave requests and track balances</p>
        </div>
        <Dialog open={isRequestDialogOpen} onOpenChange={setIsRequestDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="w-4 h-4 mr-2" />
              Request Leave
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Request Leave</DialogTitle>
              <DialogDescription>Submit a new leave request for approval.</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="leaveType">Leave Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select leave type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="annual">Annual Leave</SelectItem>
                    <SelectItem value="sick">Sick Leave</SelectItem>
                    <SelectItem value="personal">Personal Leave</SelectItem>
                    <SelectItem value="maternity">Maternity Leave</SelectItem>
                    <SelectItem value="paternity">Paternity Leave</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="startDate">Start Date</Label>
                  <Input id="startDate" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="endDate">End Date</Label>
                  <Input id="endDate" type="date" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="reason">Reason</Label>
                <Textarea id="reason" placeholder="Please provide a reason for your leave request..." rows={3} />
              </div>
            </div>
            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setIsRequestDialogOpen(false)}>
                Cancel
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700">Submit Request</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Leave Balance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-0 shadow-sm bg-gradient-to-br from-blue-50 to-blue-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-blue-900">Annual Leave</CardTitle>
            <Plane className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-900 mb-2">
              {leaveBalance.annual.total - leaveBalance.annual.used} days left
            </div>
            <Progress value={(leaveBalance.annual.used / leaveBalance.annual.total) * 100} className="h-2 mb-2" />
            <p className="text-xs text-blue-700">
              {leaveBalance.annual.used} of {leaveBalance.annual.total} days used
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm bg-gradient-to-br from-red-50 to-red-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-red-900">Sick Leave</CardTitle>
            <Heart className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-900 mb-2">
              {leaveBalance.sick.total - leaveBalance.sick.used} days left
            </div>
            <Progress value={(leaveBalance.sick.used / leaveBalance.sick.total) * 100} className="h-2 mb-2" />
            <p className="text-xs text-red-700">
              {leaveBalance.sick.used} of {leaveBalance.sick.total} days used
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm bg-gradient-to-br from-purple-50 to-purple-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-purple-900">Personal Leave</CardTitle>
            <Coffee className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-900 mb-2">
              {leaveBalance.personal.total - leaveBalance.personal.used} days left
            </div>
            <Progress value={(leaveBalance.personal.used / leaveBalance.personal.total) * 100} className="h-2 mb-2" />
            <p className="text-xs text-purple-700">
              {leaveBalance.personal.used} of {leaveBalance.personal.total} days used
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Leave Requests Table */}
      <Card className="border-0 shadow-sm bg-white">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-slate-900">Recent Leave Requests</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Employee</TableHead>
                <TableHead>Leave Type</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Days</TableHead>
                <TableHead>Applied Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Reason</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leaveRequests.map((request) => (
                <TableRow key={request.id}>
                  <TableCell className="font-medium">{request.employee}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      {getLeaveIcon(request.type)}
                      <span>{request.type}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <div>{new Date(request.startDate).toLocaleDateString()}</div>
                      <div className="text-slate-500">to {new Date(request.endDate).toLocaleDateString()}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="font-mono">
                      {request.days} {request.days === 1 ? "day" : "days"}
                    </Badge>
                  </TableCell>
                  <TableCell>{new Date(request.appliedDate).toLocaleDateString()}</TableCell>
                  <TableCell>{getStatusBadge(request.status)}</TableCell>
                  <TableCell className="max-w-xs truncate">{request.reason}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
