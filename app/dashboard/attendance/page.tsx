"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Clock, Download, Filter, CalendarIcon, CheckCircle, XCircle, AlertCircle } from "lucide-react"

const attendanceData = [
  {
    id: 1,
    employee: "Sarah Johnson",
    date: "2024-01-30",
    checkIn: "09:15 AM",
    checkOut: "06:30 PM",
    totalHours: "9h 15m",
    status: "Present",
    overtime: "1h 15m",
  },
  {
    id: 2,
    employee: "Michael Chen",
    date: "2024-01-30",
    checkIn: "08:45 AM",
    checkOut: "05:45 PM",
    totalHours: "9h 00m",
    status: "Present",
    overtime: "0h",
  },
  {
    id: 3,
    employee: "Emily Rodriguez",
    date: "2024-01-30",
    checkIn: "09:30 AM",
    checkOut: "06:15 PM",
    totalHours: "8h 45m",
    status: "Late",
    overtime: "0h",
  },
  {
    id: 4,
    employee: "David Kim",
    date: "2024-01-30",
    checkIn: "-",
    checkOut: "-",
    totalHours: "0h",
    status: "Absent",
    overtime: "0h",
  },
  {
    id: 5,
    employee: "Lisa Thompson",
    date: "2024-01-30",
    checkIn: "08:30 AM",
    checkOut: "05:30 PM",
    totalHours: "9h 00m",
    status: "Present",
    overtime: "0h",
  },
]

export default function AttendancePage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [selectedDepartment, setSelectedDepartment] = useState<string>("all")

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Present":
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
            <CheckCircle className="w-3 h-3 mr-1" />
            Present
          </Badge>
        )
      case "Late":
        return (
          <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">
            <AlertCircle className="w-3 h-3 mr-1" />
            Late
          </Badge>
        )
      case "Absent":
        return (
          <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
            <XCircle className="w-3 h-3 mr-1" />
            Absent
          </Badge>
        )
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Attendance Tracking</h1>
          <p className="text-slate-600 mt-1">Monitor employee attendance and working hours</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export PDF
          </Button>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export Excel
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-0 shadow-sm bg-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Present Today</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900">1,203</div>
            <p className="text-xs text-green-600 mt-1">96.5% attendance rate</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm bg-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Late Arrivals</CardTitle>
            <AlertCircle className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900">23</div>
            <p className="text-xs text-slate-500 mt-1">1.8% of workforce</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm bg-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Absent</CardTitle>
            <XCircle className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900">21</div>
            <p className="text-xs text-slate-500 mt-1">1.7% of workforce</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm bg-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Avg. Hours</CardTitle>
            <Clock className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900">8.7h</div>
            <p className="text-xs text-slate-500 mt-1">Per employee today</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Calendar */}
        <Card className="border-0 shadow-sm bg-white">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-slate-900 flex items-center">
              <CalendarIcon className="w-5 h-5 mr-2" />
              Calendar
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-md border-0"
            />
          </CardContent>
        </Card>

        {/* Attendance Table */}
        <Card className="lg:col-span-3 border-0 shadow-sm bg-white">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg font-semibold text-slate-900">
                Daily Attendance - {selectedDate?.toLocaleDateString()}
              </CardTitle>
              <div className="flex space-x-2">
                <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Departments</SelectItem>
                    <SelectItem value="engineering">Engineering</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="sales">Sales</SelectItem>
                    <SelectItem value="hr">Human Resources</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Employee</TableHead>
                  <TableHead>Check In</TableHead>
                  <TableHead>Check Out</TableHead>
                  <TableHead>Total Hours</TableHead>
                  <TableHead>Overtime</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {attendanceData.map((record) => (
                  <TableRow key={record.id}>
                    <TableCell className="font-medium">{record.employee}</TableCell>
                    <TableCell>{record.checkIn}</TableCell>
                    <TableCell>{record.checkOut}</TableCell>
                    <TableCell>{record.totalHours}</TableCell>
                    <TableCell>
                      {record.overtime !== "0h" ? (
                        <Badge variant="outline" className="text-blue-700 border-blue-200">
                          {record.overtime}
                        </Badge>
                      ) : (
                        <span className="text-slate-400">-</span>
                      )}
                    </TableCell>
                    <TableCell>{getStatusBadge(record.status)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
