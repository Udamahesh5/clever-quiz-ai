
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Brain, 
  Target, 
  Clock, 
  TrendingUp, 
  Star, 
  Play,
  CheckCircle,
  AlertCircle,
  Award
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";

const StudentDashboard = () => {
  const navigate = useNavigate();
  const [selectedCourse, setSelectedCourse] = useState("math");

  const courses = [
    {
      id: "math",
      name: "Advanced Mathematics",
      progress: 78,
      status: "active",
      nextTopic: "Quadratic Equations",
      aiRecommendation: "Focus on problem-solving techniques",
      color: "bg-blue-500"
    },
    {
      id: "physics",
      name: "Physics Fundamentals",
      progress: 45,
      status: "active",
      nextTopic: "Newton's Laws",
      aiRecommendation: "Review force and motion concepts",
      color: "bg-green-500"
    },
    {
      id: "chemistry",
      name: "Organic Chemistry",
      progress: 92,
      status: "completed",
      nextTopic: "Review Session",
      aiRecommendation: "Ready for advanced topics",
      color: "bg-purple-500"
    }
  ];

  const recentQuizzes = [
    { id: 1, title: "Algebra Assessment", score: 85, difficulty: "Adaptive", date: "2 hours ago" },
    { id: 2, title: "Geometry Quiz", score: 92, difficulty: "Hard", date: "1 day ago" },
    { id: 3, title: "Calculus Diagnostic", score: 78, difficulty: "Medium", date: "3 days ago" }
  ];

  const aiInsights = [
    {
      type: "strength",
      message: "You excel at visual problem-solving. Keep practicing geometric concepts!",
      icon: TrendingUp,
      color: "text-green-600"
    },
    {
      type: "improvement",
      message: "Algebraic manipulation needs attention. I've prepared targeted exercises.",
      icon: Target,
      color: "text-orange-600"
    },
    {
      type: "recommendation",
      message: "Based on your learning style, try interactive video lessons for calculus.",
      icon: Brain,
      color: "text-blue-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Navigation />
      
      <div className="pt-20 pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome back, Sarah! 👋</h1>
            <p className="text-gray-600">Your AI tutor has prepared personalized lessons based on your progress</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Course Progress */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    Course Progress
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {courses.map((course) => (
                      <div 
                        key={course.id}
                        className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                          selectedCourse === course.id ? 'border-blue-300 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => setSelectedCourse(course.id)}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className={`w-3 h-3 rounded-full ${course.color}`}></div>
                            <h3 className="font-semibold">{course.name}</h3>
                            {course.status === "completed" && (
                              <Badge className="bg-green-100 text-green-800">
                                <Award className="w-3 h-3 mr-1" />
                                Completed
                              </Badge>
                            )}
                          </div>
                          <span className="text-2xl font-bold text-gray-900">{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="mb-3" />
                        <div className="flex justify-between text-sm text-gray-600">
                          <span>Next: {course.nextTopic}</span>
                          <span className="flex items-center gap-1">
                            <Brain className="w-4 h-4" />
                            {course.aiRecommendation}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* AI Adaptive Quiz */}
              <Card className="border-blue-200 bg-gradient-to-r from-blue-50 to-purple-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-800">
                    <Brain className="w-5 h-5" />
                    AI-Powered Adaptive Quiz
                  </CardTitle>
                  <CardDescription>
                    Personalized questions that adapt to your learning pace and style
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Ready for your next challenge?</h3>
                      <p className="text-gray-600 mb-4">
                        Based on your recent performance, I've prepared 10 adaptive questions on quadratic equations.
                      </p>
                      <div className="flex gap-2 mb-4">
                        <Badge className="bg-blue-100 text-blue-800">Difficulty: Adaptive</Badge>
                        <Badge className="bg-green-100 text-green-800">Estimated: 15 min</Badge>
                      </div>
                    </div>
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      onClick={() => navigate("/quiz/adaptive-math")}
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Start Quiz
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Quiz Results */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    Recent Quiz Results
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recentQuizzes.map((quiz) => (
                      <div key={quiz.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            quiz.score >= 90 ? 'bg-green-100 text-green-600' : 
                            quiz.score >= 80 ? 'bg-blue-100 text-blue-600' : 
                            'bg-orange-100 text-orange-600'
                          }`}>
                            {quiz.score >= 90 ? <CheckCircle className="w-5 h-5" /> : 
                             quiz.score >= 80 ? <Star className="w-5 h-5" /> : 
                             <AlertCircle className="w-5 h-5" />}
                          </div>
                          <div>
                            <h4 className="font-medium">{quiz.title}</h4>
                            <p className="text-sm text-gray-600">{quiz.difficulty} • {quiz.date}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold">{quiz.score}%</div>
                          <Button variant="ghost" size="sm">Review</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* AI Insights */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="w-5 h-5 text-purple-600" />
                    AI Learning Insights
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {aiInsights.map((insight, index) => (
                      <div key={index} className="flex gap-3 p-3 bg-gray-50 rounded-lg">
                        <insight.icon className={`w-5 h-5 mt-0.5 ${insight.color}`} />
                        <p className="text-sm text-gray-700">{insight.message}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Study Streak */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-orange-600" />
                    Study Streak
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-orange-600 mb-2">🔥 7</div>
                    <p className="text-gray-600 mb-4">Days in a row!</p>
                    <Button variant="outline" className="w-full">
                      View Calendar
                    </Button>
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
                    <Button variant="outline" className="w-full justify-start">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Browse Course Library
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Target className="w-4 h-4 mr-2" />
                      Take Diagnostic Test
                    </Button>
                    <Button variant="outline" className="w-full justify-start" onClick={() => navigate("/analytics")}>
                      <TrendingUp className="w-4 h-4 mr-2" />
                      View Progress Analytics
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
