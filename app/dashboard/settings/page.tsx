"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  User,
  Bell,
  Shield,
  Palette,
  Database,
  Mail,
  Smartphone,
  Lock,
  Key,
  Building,
  Save,
  Upload,
} from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { ThemeToggle } from "@/components/theme-toggle"

export default function SettingsPage() {
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: false,
    desktop: true,
  })

  const [privacy, setPrivacy] = useState({
    profileVisible: true,
    activityTracking: false,
    dataSharing: false,
  })

  const { toast } = useToast()

  const handleSaveSettings = () => {
    toast({
      title: "Settings Saved",
      description: "Your preferences have been updated successfully.",
    })
  }

  const handleResetSettings = () => {
    toast({
      title: "Settings Reset",
      description: "All settings have been reset to default values.",
    })
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Settings</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1">Manage your account and system preferences</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" onClick={handleResetSettings} className="bg-transparent">
            Reset to Default
          </Button>
          <Button onClick={handleSaveSettings} className="bg-blue-600 hover:bg-blue-700">
            <Save className="w-4 h-4 mr-2" />
            Save Changes
          </Button>
        </div>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6 lg:w-auto lg:grid-cols-6">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="system">System</TabsTrigger>
          <TabsTrigger value="organization">Organization</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          <Card className="border-0 shadow-sm bg-white dark:bg-slate-800">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-slate-900 dark:text-slate-100 flex items-center">
                <User className="w-5 h-5 mr-2" />
                Profile Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-6">
                <Avatar className="w-20 h-20">
                  <AvatarImage src="/placeholder.svg?height=80&width=80" />
                  <AvatarFallback className="text-lg">
                    <User className="w-8 h-8" />
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-2">
                  <Button variant="outline" className="bg-transparent">
                    <Upload className="w-4 h-4 mr-2" />
                    Change Photo
                  </Button>
                  <p className="text-sm text-slate-500 dark:text-slate-400">JPG, PNG or GIF. Max size 2MB.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="Admin" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="User" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" defaultValue="admin@company.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" defaultValue="+1 (555) 123-4567" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="department">Department</Label>
                  <Select defaultValue="hr">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hr">Human Resources</SelectItem>
                      <SelectItem value="engineering">Engineering</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="sales">Sales</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Role</Label>
                  <Select defaultValue="admin">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin">Administrator</SelectItem>
                      <SelectItem value="manager">Manager</SelectItem>
                      <SelectItem value="employee">Employee</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  placeholder="Tell us about yourself..."
                  rows={4}
                  defaultValue="Experienced HR professional with over 10 years in talent management and organizational development."
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card className="border-0 shadow-sm bg-white dark:bg-slate-800">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-slate-900 dark:text-slate-100 flex items-center">
                <Bell className="w-5 h-5 mr-2" />
                Notification Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                    <div>
                      <Label className="text-base font-medium">Email Notifications</Label>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Receive notifications via email</p>
                    </div>
                  </div>
                  <Switch
                    checked={notifications.email}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, email: checked })}
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Smartphone className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                    <div>
                      <Label className="text-base font-medium">Push Notifications</Label>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Receive push notifications on mobile</p>
                    </div>
                  </div>
                  <Switch
                    checked={notifications.push}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, push: checked })}
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Smartphone className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                    <div>
                      <Label className="text-base font-medium">SMS Notifications</Label>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Receive important alerts via SMS</p>
                    </div>
                  </div>
                  <Switch
                    checked={notifications.sms}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, sms: checked })}
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Bell className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                    <div>
                      <Label className="text-base font-medium">Desktop Notifications</Label>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Show desktop notifications</p>
                    </div>
                  </div>
                  <Switch
                    checked={notifications.desktop}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, desktop: checked })}
                  />
                </div>
              </div>

              <div className="pt-4">
                <h3 className="text-base font-medium text-slate-900 dark:text-slate-100 mb-4">Notification Types</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Leave requests</span>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Performance reviews</span>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Payroll updates</span>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">System maintenance</span>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Marketing updates</span>
                    <Switch />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card className="border-0 shadow-sm bg-white dark:bg-slate-800">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-slate-900 dark:text-slate-100 flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                Security Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label className="text-base font-medium">Change Password</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    <div className="space-y-2">
                      <Label htmlFor="currentPassword">Current Password</Label>
                      <Input id="currentPassword" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="newPassword">New Password</Label>
                      <Input id="newPassword" type="password" />
                    </div>
                  </div>
                  <Button className="mt-3 bg-blue-600 hover:bg-blue-700">
                    <Lock className="w-4 h-4 mr-2" />
                    Update Password
                  </Button>
                </div>

                <Separator />

                <div>
                  <Label className="text-base font-medium">Two-Factor Authentication</Label>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                    Add an extra layer of security to your account
                  </p>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center space-x-2">
                      <Badge
                        variant="outline"
                        className="bg-red-50 text-red-700 border-red-200 dark:bg-red-950 dark:text-red-300 dark:border-red-800"
                      >
                        Disabled
                      </Badge>
                    </div>
                    <Button variant="outline" className="bg-transparent">
                      <Key className="w-4 h-4 mr-2" />
                      Enable 2FA
                    </Button>
                  </div>
                </div>

                <Separator />

                <div>
                  <Label className="text-base font-medium">Privacy Settings</Label>
                  <div className="space-y-3 mt-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-sm font-medium">Profile Visibility</span>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Allow others to see your profile</p>
                      </div>
                      <Switch
                        checked={privacy.profileVisible}
                        onCheckedChange={(checked) => setPrivacy({ ...privacy, profileVisible: checked })}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-sm font-medium">Activity Tracking</span>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Track activity for analytics</p>
                      </div>
                      <Switch
                        checked={privacy.activityTracking}
                        onCheckedChange={(checked) => setPrivacy({ ...privacy, activityTracking: checked })}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-sm font-medium">Data Sharing</span>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          Share anonymized data for improvements
                        </p>
                      </div>
                      <Switch
                        checked={privacy.dataSharing}
                        onCheckedChange={(checked) => setPrivacy({ ...privacy, dataSharing: checked })}
                      />
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <Label className="text-base font-medium">Active Sessions</Label>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                    Manage your active sessions across devices
                  </p>
                  <div className="space-y-3 mt-3">
                    <div className="flex items-center justify-between p-3 border border-slate-200 dark:border-slate-700 rounded-lg">
                      <div>
                        <span className="text-sm font-medium">Current Session</span>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Chrome on Windows • Active now</p>
                      </div>
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900 dark:text-green-300">
                        Current
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 border border-slate-200 dark:border-slate-700 rounded-lg">
                      <div>
                        <span className="text-sm font-medium">Mobile App</span>
                        <p className="text-xs text-slate-500 dark:text-slate-400">iPhone • 2 hours ago</p>
                      </div>
                      <Button variant="outline" size="sm" className="bg-transparent">
                        Revoke
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="appearance" className="space-y-6">
          <Card className="border-0 shadow-sm bg-white dark:bg-slate-800">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-slate-900 dark:text-slate-100 flex items-center">
                <Palette className="w-5 h-5 mr-2" />
                Appearance Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base font-medium">Theme</Label>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Choose your preferred theme</p>
                  </div>
                  <ThemeToggle />
                </div>

                <Separator />

                <div>
                  <Label className="text-base font-medium">Language</Label>
                  <Select defaultValue="en">
                    <SelectTrigger className="w-full mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                      <SelectItem value="de">German</SelectItem>
                      <SelectItem value="zh">Chinese</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Separator />

                <div>
                  <Label className="text-base font-medium">Timezone</Label>
                  <Select defaultValue="utc-5">
                    <SelectTrigger className="w-full mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="utc-8">Pacific Time (UTC-8)</SelectItem>
                      <SelectItem value="utc-7">Mountain Time (UTC-7)</SelectItem>
                      <SelectItem value="utc-6">Central Time (UTC-6)</SelectItem>
                      <SelectItem value="utc-5">Eastern Time (UTC-5)</SelectItem>
                      <SelectItem value="utc+0">UTC</SelectItem>
                      <SelectItem value="utc+1">Central European Time (UTC+1)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Separator />

                <div>
                  <Label className="text-base font-medium">Date Format</Label>
                  <Select defaultValue="mm-dd-yyyy">
                    <SelectTrigger className="w-full mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mm-dd-yyyy">MM/DD/YYYY</SelectItem>
                      <SelectItem value="dd-mm-yyyy">DD/MM/YYYY</SelectItem>
                      <SelectItem value="yyyy-mm-dd">YYYY-MM-DD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Separator />

                <div className="space-y-3">
                  <Label className="text-base font-medium">Display Options</Label>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Compact mode</span>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Show animations</span>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">High contrast</span>
                      <Switch />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="system" className="space-y-6">
          <Card className="border-0 shadow-sm bg-white dark:bg-slate-800">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-slate-900 dark:text-slate-100 flex items-center">
                <Database className="w-5 h-5 mr-2" />
                System Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label className="text-base font-medium">Data Retention</Label>
                  <Select defaultValue="1year">
                    <SelectTrigger className="w-full mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="6months">6 months</SelectItem>
                      <SelectItem value="1year">1 year</SelectItem>
                      <SelectItem value="2years">2 years</SelectItem>
                      <SelectItem value="5years">5 years</SelectItem>
                      <SelectItem value="indefinite">Indefinite</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Separator />

                <div>
                  <Label className="text-base font-medium">Backup Settings</Label>
                  <div className="space-y-3 mt-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Automatic backups</span>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Backup frequency</span>
                      <Select defaultValue="daily">
                        <SelectTrigger className="w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hourly">Hourly</SelectItem>
                          <SelectItem value="daily">Daily</SelectItem>
                          <SelectItem value="weekly">Weekly</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <Label className="text-base font-medium">API Settings</Label>
                  <div className="space-y-3 mt-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">API access</span>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Rate limiting</span>
                      <Switch defaultChecked />
                    </div>
                    <div className="p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">API Key</span>
                        <Button variant="outline" size="sm" className="bg-transparent">
                          Regenerate
                        </Button>
                      </div>
                      <code className="text-xs text-slate-600 dark:text-slate-400 mt-1 block">
                        hrms_api_key_1234567890abcdef
                      </code>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <Label className="text-base font-medium">Integration Settings</Label>
                  <div className="space-y-3 mt-3">
                    <div className="flex items-center justify-between p-3 border border-slate-200 dark:border-slate-700 rounded-lg">
                      <div>
                        <span className="text-sm font-medium">Slack Integration</span>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Send notifications to Slack</p>
                      </div>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between p-3 border border-slate-200 dark:border-slate-700 rounded-lg">
                      <div>
                        <span className="text-sm font-medium">Microsoft Teams</span>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Sync with Teams calendar</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between p-3 border border-slate-200 dark:border-slate-700 rounded-lg">
                      <div>
                        <span className="text-sm font-medium">Google Workspace</span>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Integrate with Google services</p>
                      </div>
                      <Switch />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="organization" className="space-y-6">
          <Card className="border-0 shadow-sm bg-white dark:bg-slate-800">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-slate-900 dark:text-slate-100 flex items-center">
                <Building className="w-5 h-5 mr-2" />
                Organization Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company Name</Label>
                    <Input id="companyName" defaultValue="HRMSPro Enterprise" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="industry">Industry</Label>
                    <Select defaultValue="technology">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technology">Technology</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="manufacturing">Manufacturing</SelectItem>
                        <SelectItem value="retail">Retail</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="companySize">Company Size</Label>
                    <Select defaultValue="1000-5000">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-50">1-50 employees</SelectItem>
                        <SelectItem value="51-200">51-200 employees</SelectItem>
                        <SelectItem value="201-1000">201-1000 employees</SelectItem>
                        <SelectItem value="1000-5000">1000-5000 employees</SelectItem>
                        <SelectItem value="5000+">5000+ employees</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Select defaultValue="us">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="de">Germany</SelectItem>
                        <SelectItem value="fr">France</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Separator />

                <div>
                  <Label className="text-base font-medium">Working Hours</Label>
                  <div className="grid grid-cols-2 gap-4 mt-3">
                    <div className="space-y-2">
                      <Label htmlFor="startTime">Start Time</Label>
                      <Input id="startTime" type="time" defaultValue="09:00" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="endTime">End Time</Label>
                      <Input id="endTime" type="time" defaultValue="17:00" />
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <Label className="text-base font-medium">Leave Policies</Label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                    <div className="space-y-2">
                      <Label htmlFor="annualLeave">Annual Leave (days)</Label>
                      <Input id="annualLeave" type="number" defaultValue="25" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="sickLeave">Sick Leave (days)</Label>
                      <Input id="sickLeave" type="number" defaultValue="10" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="personalLeave">Personal Leave (days)</Label>
                      <Input id="personalLeave" type="number" defaultValue="5" />
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <Label className="text-base font-medium">User Management</Label>
                  <div className="space-y-3 mt-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Allow self-registration</span>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Require admin approval</span>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Enable SSO</span>
                      <Switch />
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <Label className="text-base font-medium">Compliance</Label>
                  <div className="space-y-3 mt-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">GDPR Compliance</span>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">CCPA Compliance</span>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">SOX Compliance</span>
                      <Switch />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
