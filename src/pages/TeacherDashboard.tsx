import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  BookOpen, 
  TrendingUp, 
  AlertTriangle, 
  Plus,
  Brain,
  BarChart3,
  Settings,
  FileText,
  Clock,
  Award,
  Target
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";

const TeacherDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  const classStats = [
    { label: "Total Students", value: 156, icon: Users, color: "text-blue-600" },
    { label: "Active Courses", value: 8, icon: BookOpen, color: "text-green-600" },
    { label: "Avg Performance", value: "87%", icon: TrendingUp, color: "text-purple-600" },
    { label: "Alerts", value: 3, icon: AlertTriangle, color: "text-orange-600" }
  ];

  const courses = [
    {
      id: 1,
      name: "Advanced Mathematics",
      students: 45,
      avgProgress: 78,
      alerts: 2,
      lastActivity: "2 hours ago",
      status: "active"
    },
    {
      id: 2,
      name: "Physics Fundamentals",
      students: 38,
      avgProgress: 65,
      alerts: 1,
      lastActivity: "4 hours ago",
      status: "active"
    },
    {
      id: 3,
      name: "Chemistry Basics",
      students: 42,
      avgProgress: 89,
      alerts: 0,
      lastActivity: "1 day ago",
      status: "active"
    }
  ];

  const recentActivity = [
    {
      type: "quiz_completed",
      student: "Sarah Chen",
      course: "Advanced Mathematics",
      score: 92,
      time: "15 minutes ago"
    },
    {
      type: "help_request",
      student: "Mike Johnson",
      course: "Physics Fundamentals",
      topic: "Newton's Laws",
      time: "1 hour ago"
    },
    {
      type: "milestone",
      student: "Emma Davis",
      course: "Chemistry Basics",
      achievement: "Completed Chapter 5",
      time: "2 hours ago"
    }
  ];

  const aiRecommendations = [
    {
      type: "intervention",
      message: "5 students in Physics Fundamentals are struggling with momentum concepts. Consider additional practice materials.",
      priority: "high"
    },
    {
      type: "opportunity",
      message: "Advanced Mathematics class is ready for challenging bonus content based on recent performance.",
      priority: "medium"
    },
    {
      type: "insight",
      message: "Students perform 23% better on quizzes taken in the morning. Consider scheduling assessments accordingly.",
      priority: "low"
    }
  ];

  const handleCreateQuiz = () => {
    console.log("Creating new quiz...");
    // Navigate to quiz creation page
    navigate("/quiz/create");
  };

  const handleManageStudents = () => {
    console.log("Managing students...");
    // Navigate to student management page
    navigate("/students");
  };

  const handleCreateCourse = () => {
    console.log("Creating new course...");
    // Navigate to course creation page
    navigate("/courses/create");
  };

  const handleExportReports = () => {
    console.log("Exporting reports...");
    // Trigger report export functionality
  };

  const handleViewCourseDetails = (courseId: number) => {
    console.log(`Viewing details for course ${courseId}...`);
    navigate(`/courses/${courseId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Navigation />
      
      <div className="pt-20 pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Teacher Dashboard</h1>
              <p className="text-gray-600">Monitor student progress and AI-powered insights</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" onClick={handleExportReports}>
                <FileText className="w-4 h-4 mr-2" />
                Export Reports
              </Button>
              <Button className="bg-gradient-to-r from-blue-600 to-green-600" onClick={handleCreateCourse}>
                <Plus className="w-4 h-4 mr-2" />
                Create Course
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {classStats.map((stat, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                      <p className="text-3xl font-bold">{stat.value}</p>
                    </div>
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="courses">Courses</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="ai-insights">AI Insights</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                  {/* Course Overview */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BookOpen className="w-5 h-5" />
                        Course Performance Overview
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {courses.map((course) => (
                          <div key={course.id} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                            <div className="flex items-center justify-between mb-3">
                              <h3 className="font-semibold text-lg">{course.name}</h3>
                              <div className="flex gap-2">
                                {course.alerts > 0 && (
                                  <Badge variant="destructive">{course.alerts} alerts</Badge>
                                )}
                                <Badge variant="secondary">{course.students} students</Badge>
                              </div>
                            </div>
                            <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
                              <div className="flex items-center gap-2">
                                <Target className="w-4 h-4" />
                                Avg Progress: {course.avgProgress}%
                              </div>
                              <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                Last Activity: {course.lastActivity}
                              </div>
                              <div className="flex items-center gap-2">
                                <BarChart3 className="w-4 h-4" />
                                <Button 
                                  variant="link" 
                                  className="p-0 h-auto text-blue-600"
                                  onClick={() => handleViewCourseDetails(course.id)}
                                >
                                  View Details
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Recent Activity */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Student Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {recentActivity.map((activity, index) => (
                          <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              activity.type === 'quiz_completed' ? 'bg-green-100 text-green-600' :
                              activity.type === 'help_request' ? 'bg-orange-100 text-orange-600' :
                              'bg-blue-100 text-blue-600'
                            }`}>
                              {activity.type === 'quiz_completed' && <Award className="w-5 h-5" />}
                              {activity.type === 'help_request' && <AlertTriangle className="w-5 h-5" />}
                              {activity.type === 'milestone' && <Target className="w-5 h-5" />}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-medium">{activity.student}</span>
                                <span className="text-sm text-gray-500">• {activity.course}</span>
                              </div>
                              <p className="text-sm text-gray-600">
                                {activity.type === 'quiz_completed' && `Scored ${activity.score}% on quiz`}
                                {activity.type === 'help_request' && `Needs help with ${activity.topic}`}
                                {activity.type === 'milestone' && activity.achievement}
                              </p>
                            </div>
                            <span className="text-sm text-gray-500">{activity.time}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* AI Recommendations */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Brain className="w-5 h-5 text-purple-600" />
                        AI Teaching Insights
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {aiRecommendations.map((rec, index) => (
                          <div key={index} className={`p-3 rounded-lg border-l-4 ${
                            rec.priority === 'high' ? 'border-red-400 bg-red-50' :
                            rec.priority === 'medium' ? 'border-yellow-400 bg-yellow-50' :
                            'border-blue-400 bg-blue-50'
                          }`}>
                            <p className="text-sm text-gray-700">{rec.message}</p>
                            <div className="mt-2">
                              <Badge variant={rec.priority === 'high' ? 'destructive' : 'secondary'} className="text-xs">
                                {rec.priority} priority
                              </Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Quick Actions */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <Button variant="outline" className="w-full justify-start" onClick={handleCreateQuiz}>
                          <Plus className="w-4 h-4 mr-2" />
                          Create New Quiz
                        </Button>
                        <Button variant="outline" className="w-full justify-start" onClick={handleManageStudents}>
                          <Users className="w-4 h-4 mr-2" />
                          Manage Students
                        </Button>
                        <Button variant="outline" className="w-full justify-start" onClick={() => navigate("/analytics")}>
                          <BarChart3 className="w-4 h-4 mr-2" />
                          View Analytics
                        </Button>
                        <Button variant="outline" className="w-full justify-start" onClick={() => navigate("/settings")}>
                          <Settings className="w-4 h-4 mr-2" />
                          AI Model Settings
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="courses">
              <Card>
                <CardHeader>
                  <CardTitle>Course Management</CardTitle>
                  <CardDescription>Manage your courses and track student progress</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Course management interface coming soon...</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics">
              <Card>
                <CardHeader>
                  <CardTitle>Detailed Analytics</CardTitle>
                  <CardDescription>Comprehensive performance analytics and insights</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button onClick={() => navigate("/analytics")}>
                    View Full Analytics Dashboard
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="ai-insights">
              <Card>
                <CardHeader>
                  <CardTitle>AI-Powered Teaching Insights</CardTitle>
                  <CardDescription>Advanced analytics powered by IBM Watsonx and Granite models</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Advanced AI insights dashboard coming soon...</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
