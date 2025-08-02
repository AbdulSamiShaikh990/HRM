"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Plus, Filter, MoreHorizontal, Edit, Eye, Mail, Phone, MapPin, Upload } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const employees = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.johnson@company.com",
    jobTitle: "Senior Software Engineer",
    department: "Engineering",
    status: "Active",
    joinDate: "2022-03-15",
    avatar: "/placeholder.svg?height=40&width=40",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "michael.chen@company.com",
    jobTitle: "Product Manager",
    department: "Product",
    status: "Active",
    joinDate: "2021-08-22",
    avatar: "/placeholder.svg?height=40&width=40",
    phone: "+1 (555) 234-5678",
    location: "New York, NY",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    email: "emily.rodriguez@company.com",
    jobTitle: "Marketing Director",
    department: "Marketing",
    status: "Active",
    joinDate: "2020-11-10",
    avatar: "/placeholder.svg?height=40&width=40",
    phone: "+1 (555) 345-6789",
    location: "Los Angeles, CA",
  },
  {
    id: 4,
    name: "David Kim",
    email: "david.kim@company.com",
    jobTitle: "UX Designer",
    department: "Design",
    status: "On Leave",
    joinDate: "2023-01-05",
    avatar: "/placeholder.svg?height=40&width=40",
    phone: "+1 (555) 456-7890",
    location: "Seattle, WA",
  },
  {
    id: 5,
    name: "Lisa Thompson",
    email: "lisa.thompson@company.com",
    jobTitle: "HR Business Partner",
    department: "Human Resources",
    status: "Active",
    joinDate: "2019-06-18",
    avatar: "/placeholder.svg?height=40&width=40",
    phone: "+1 (555) 567-8901",
    location: "Austin, TX",
  },
]

export default function EmployeesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedEmployee, setSelectedEmployee] = useState<(typeof employees)[0] | null>(null)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.department.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Active":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
      case "On Leave":
        return <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">On Leave</Badge>
      case "Inactive":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Inactive</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  return (
    <div className="space-y-6 w-full max-w-full px-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Employee Management</h1>
          <p className="text-slate-600 mt-1">Manage your organization's workforce</p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="w-4 h-4 mr-2" />
              Add Employee
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add New Employee</DialogTitle>
              <DialogDescription>Enter the employee details to add them to the system.</DialogDescription>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="John" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john.doe@company.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" placeholder="+1 (555) 123-4567" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="jobTitle">Job Title</Label>
                <Input id="jobTitle" placeholder="Software Engineer" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="department">Department</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="engineering">Engineering</SelectItem>
                    <SelectItem value="product">Product</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="design">Design</SelectItem>
                    <SelectItem value="hr">Human Resources</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="col-span-2 space-y-2">
                <Label htmlFor="address">Address</Label>
                <Textarea id="address" placeholder="Enter full address" />
              </div>
              <div className="col-span-2 space-y-2">
                <Label htmlFor="documents">Upload Documents</Label>
                <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center">
                  <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                  <p className="text-sm text-slate-600">Drag and drop files here, or click to browse</p>
                  <Button variant="outline" className="mt-2 bg-transparent">
                    Choose Files
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                Cancel
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700">Add Employee</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search and Filters */}
      <div className="bg-white border border-slate-200 rounded-lg shadow-sm w-full">
        <div className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <Input
                placeholder="Search employees..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="flex items-center bg-transparent">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>
      </div>

      {/* Employee Table */}
      <div className="bg-white border border-slate-200 rounded-lg shadow-sm w-full">
        <div className="px-6 py-4 border-b border-slate-200">
          <h3 className="text-lg font-semibold text-slate-900">All Employees ({filteredEmployees.length})</h3>
        </div>
        <div className="p-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Employee</TableHead>
                <TableHead>Job Title</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Join Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredEmployees.map((employee) => (
                <TableRow key={employee.id}>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarImage src={employee.avatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          {employee.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium text-slate-900">{employee.name}</div>
                        <div className="text-sm text-slate-500">{employee.email}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">{employee.jobTitle}</TableCell>
                  <TableCell>{employee.department}</TableCell>
                  <TableCell>{getStatusBadge(employee.status)}</TableCell>
                  <TableCell>{new Date(employee.joinDate).toLocaleDateString()}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setSelectedEmployee(employee)}>
                          <Eye className="mr-2 h-4 w-4" />
                          View Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Mail className="mr-2 h-4 w-4" />
                          Send Email
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Employee Profile Modal */}
      <Dialog open={!!selectedEmployee} onOpenChange={() => setSelectedEmployee(null)}>
        <DialogContent className="max-w-2xl">
          {selectedEmployee && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center space-x-3">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={selectedEmployee.avatar || "/placeholder.svg"} />
                    <AvatarFallback>
                      {selectedEmployee.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-xl font-semibold">{selectedEmployee.name}</div>
                    <div className="text-sm text-slate-500">{selectedEmployee.jobTitle}</div>
                  </div>
                </DialogTitle>
              </DialogHeader>
              <div className="grid grid-cols-2 gap-6 py-4">
                <div className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium text-slate-600">Email</Label>
                    <div className="flex items-center mt-1">
                      <Mail className="w-4 h-4 text-slate-400 mr-2" />
                      <span className="text-sm">{selectedEmployee.email}</span>
                    </div>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-slate-600">Phone</Label>
                    <div className="flex items-center mt-1">
                      <Phone className="w-4 h-4 text-slate-400 mr-2" />
                      <span className="text-sm">{selectedEmployee.phone}</span>
                    </div>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-slate-600">Location</Label>
                    <div className="flex items-center mt-1">
                      <MapPin className="w-4 h-4 text-slate-400 mr-2" />
                      <span className="text-sm">{selectedEmployee.location}</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium text-slate-600">Department</Label>
                    <div className="mt-1">
                      <Badge variant="outline">{selectedEmployee.department}</Badge>
                    </div>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-slate-600">Status</Label>
                    <div className="mt-1">{getStatusBadge(selectedEmployee.status)}</div>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-slate-600">Join Date</Label>
                    <div className="mt-1">
                      <span className="text-sm">{new Date(selectedEmployee.joinDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={() => setSelectedEmployee(null)}>
                  Close
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
