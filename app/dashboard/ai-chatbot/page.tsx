"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  Bot, 
  User, 
  Send, 
  Brain, 
  MessageSquare, 
  Sparkles,
  Clock,
  CheckCircle,
  AlertCircle,
  Lightbulb,
  TrendingUp,
  Users,
  Calendar,
  FileText,
  Settings
} from "lucide-react"

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
  type?: 'text' | 'suggestion' | 'action'
  suggestions?: string[]
}

export default function AIChatbotPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your AI HR Assistant. I can help you with employee management, policy questions, performance reviews, and more. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date(),
      suggestions: [
        "How do I request time off?",
        "What's our remote work policy?",
        "I need help with performance review",
        "How do I update my information?"
      ]
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  const quickActions = [
    { icon: Calendar, label: "Leave Request", color: "bg-blue-500" },
    { icon: FileText, label: "Policy Info", color: "bg-green-500" },
    { icon: Users, label: "Team Directory", color: "bg-purple-500" },
    { icon: TrendingUp, label: "Performance", color: "bg-orange-500" },
    { icon: Settings, label: "Settings", color: "bg-gray-500" },
    { icon: MessageSquare, label: "Feedback", color: "bg-pink-500" }
  ]

  const aiCapabilities = [
    {
      title: "Natural Language Processing",
      description: "Understands complex HR queries and provides contextual responses",
      accuracy: 95
    },
    {
      title: "Policy Knowledge",
      description: "Access to company policies, procedures, and guidelines",
      accuracy: 98
    },
    {
      title: "Process Automation",
      description: "Automates routine HR tasks and form submissions",
      accuracy: 92
    },
    {
      title: "Sentiment Analysis",
      description: "Analyzes employee sentiment and provides insights",
      accuracy: 87
    }
  ]

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [messages])

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const botResponse = generateAIResponse(text)
      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)
    }, 1500)
  }

  const generateAIResponse = (userInput: string): Message => {
    const input = userInput.toLowerCase()
    
    if (input.includes('leave') || input.includes('time off')) {
      return {
        id: Date.now().toString(),
        text: "I can help you with leave requests! You can submit a leave request through the HR portal. Here's what you need to know:\n\n• Submit at least 2 weeks in advance for planned leave\n• Emergency leave can be requested same day\n• You have 20 days of annual leave remaining\n\nWould you like me to guide you through the process?",
        sender: 'bot',
        timestamp: new Date(),
        suggestions: ["Submit Leave Request", "Check Leave Balance", "View Leave Policy"]
      }
    } else if (input.includes('policy') || input.includes('remote')) {
      return {
        id: Date.now().toString(),
        text: "Our remote work policy allows flexible arrangements:\n\n• Hybrid: 3 days office, 2 days remote\n• Full remote available for approved roles\n• Core hours: 10 AM - 4 PM for meetings\n• Equipment provided for remote work\n\nWould you like to know more about any specific policy?",
        sender: 'bot',
        timestamp: new Date(),
        suggestions: ["Remote Work Policy", "Dress Code", "Expense Policy", "Travel Policy"]
      }
    } else if (input.includes('performance') || input.includes('review')) {
      return {
        id: Date.now().toString(),
        text: "Performance reviews are conducted quarterly. Here's what you need to know:\n\n• Self-assessment due by 15th of review month\n• Manager review within 7 days\n• 1-on-1 discussion scheduled automatically\n• Goals and KPIs tracked in real-time\n\nYour next review is scheduled for March 15th. Would you like to prepare?",
        sender: 'bot',
        timestamp: new Date(),
        suggestions: ["Start Self-Assessment", "View Goals", "Schedule 1-on-1", "Performance History"]
      }
    } else if (input.includes('update') || input.includes('information')) {
      return {
        id: Date.now().toString(),
        text: "You can update your information in the employee portal:\n\n• Personal details: Name, address, emergency contacts\n• Banking: Direct deposit information\n• Benefits: Health insurance, retirement plans\n• Skills: Certifications, training records\n\nI can guide you through any specific updates you need.",
        sender: 'bot',
        timestamp: new Date(),
        suggestions: ["Update Personal Info", "Change Banking Details", "Update Skills", "Benefits Enrollment"]
      }
    } else {
      return {
        id: Date.now().toString(),
        text: "I understand you're asking about that. Let me help you find the right information. Could you please be more specific about what you need help with? I can assist with:\n\n• Leave and time-off requests\n• Company policies and procedures\n• Performance reviews and goals\n• Employee information updates\n• Benefits and compensation\n• Training and development",
        sender: 'bot',
        timestamp: new Date(),
        suggestions: ["Leave Request", "Policy Information", "Performance Review", "Update Information"]
      }
    }
  }

  const handleSuggestionClick = (suggestion: string) => {
    handleSendMessage(suggestion)
  }

  const handleQuickAction = (action: string) => {
    handleSendMessage(`I need help with ${action}`)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">AI HR Assistant</h1>
          <p className="text-muted-foreground">
            Your intelligent HR companion for all employee-related queries
          </p>
        </div>
        <Badge variant="secondary" className="flex items-center gap-2">
          <Bot className="h-4 w-4" />
          AI Powered
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chat Interface */}
        <div className="lg:col-span-2">
          <Card className="h-[600px] flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                HR Assistant Chat
              </CardTitle>
              <CardDescription>
                Ask me anything about HR policies, procedures, or employee services
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <ScrollArea ref={scrollAreaRef} className="flex-1 mb-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div key={message.id} className={`flex gap-3 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                      {message.sender === 'bot' && (
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/bot-avatar.png" />
                          <AvatarFallback className="bg-primary text-primary-foreground">
                            <Bot className="h-4 w-4" />
                          </AvatarFallback>
                        </Avatar>
                      )}
                      <div className={`max-w-[80%] ${message.sender === 'user' ? 'order-1' : 'order-2'}`}>
                        <div className={`rounded-lg p-3 ${
                          message.sender === 'user' 
                            ? 'bg-primary text-primary-foreground' 
                            : 'bg-muted'
                        }`}>
                          <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-muted-foreground">
                            {message.timestamp.toLocaleTimeString()}
                          </span>
                          {message.sender === 'bot' && (
                            <Badge variant="outline" size="sm" className="text-xs">
                              AI Assistant
                            </Badge>
                          )}
                        </div>
                        {message.suggestions && (
                          <div className="flex flex-wrap gap-2 mt-2">
                            {message.suggestions.map((suggestion, index) => (
                              <Button
                                key={index}
                                variant="outline"
                                size="sm"
                                onClick={() => handleSuggestionClick(suggestion)}
                                className="text-xs"
                              >
                                {suggestion}
                              </Button>
                            ))}
                          </div>
                        )}
                      </div>
                      {message.sender === 'user' && (
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/user-avatar.png" />
                          <AvatarFallback className="bg-secondary">
                            <User className="h-4 w-4" />
                          </AvatarFallback>
                        </Avatar>
                      )}
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex gap-3 justify-start">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          <Bot className="h-4 w-4" />
                        </AvatarFallback>
                      </Avatar>
                      <div className="bg-muted rounded-lg p-3">
                        <div className="flex items-center gap-1">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                          <span className="text-xs text-muted-foreground ml-2">AI is typing...</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </ScrollArea>
              
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
                  placeholder="Type your message..."
                  className="flex-1"
                />
                <Button 
                  onClick={() => handleSendMessage(inputValue)}
                  disabled={!inputValue.trim() || isTyping}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {quickActions.map((action, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="h-auto p-3 flex flex-col gap-2"
                    onClick={() => handleQuickAction(action.label)}
                  >
                    <action.icon className={`h-5 w-5 ${action.color.replace('bg-', 'text-')}`} />
                    <span className="text-xs">{action.label}</span>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* AI Capabilities */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5" />
                AI Capabilities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {aiCapabilities.map((capability, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{capability.title}</span>
                      <span className="text-xs text-muted-foreground">{capability.accuracy}%</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{capability.description}</p>
                    <div className="w-full bg-muted rounded-full h-1">
                      <div 
                        className="bg-primary h-1 rounded-full" 
                        style={{ width: `${capability.accuracy}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Chat Stats */}
          <Card>
            <CardHeader>
              <CardTitle>Chat Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Messages Today</span>
                  <span className="font-semibold">24</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Response Time</span>
                  <span className="font-semibold">1.2s</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Satisfaction Rate</span>
                  <span className="font-semibold text-green-600">94%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Tasks Automated</span>
                  <span className="font-semibold">12</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 