
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Area,
  AreaChart
} from "recharts";
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  Target, 
  Clock, 
  Brain,
  Award,
  BookOpen
} from "lucide-react";
import Navigation from "@/components/Navigation";

const Analytics = () => {
  // Mock data for charts
  const performanceData = [
    { month: 'Jan', score: 78, students: 45 },
    { month: 'Feb', score: 82, students: 52 },
    { month: 'Mar', score: 85, students: 48 },
    { month: 'Apr', score: 88, students: 56 },
    { month: 'May', score: 87, students: 62 },
    { month: 'Jun', score: 92, students: 59 }
  ];

  const subjectData = [
    { subject: 'Mathematics', performance: 87, color: '#3B82F6' },
    { subject: 'Physics', performance: 82, color: '#10B981' },
    { subject: 'Chemistry', performance: 89, color: '#8B5CF6' },
    { subject: 'Biology', performance: 85, color: '#F59E0B' }
  ];

  const learningPatterns = [
    { time: '8 AM', engagement: 85 },
    { time: '10 AM', engagement: 92 },
    { time: '12 PM', engagement: 78 },
    { time: '2 PM', engagement: 88 },
    { time: '4 PM', engagement: 82 },
    { time: '6 PM', engagement: 75 }
  ];

  const aiInsights = [
    {
      title: "Peak Learning Hours",
      insight: "Students show 23% higher performance during 10-11 AM sessions",
      metric: "+23%",
      trend: "up"
    },
    {
      title: "Adaptive Learning Impact",
      insight: "AI-adapted quizzes improve retention by 34% compared to static assessments",
      metric: "+34%",
      trend: "up"
    },
    {
      title: "Engagement Patterns", 
      insight: "Interactive content increases completion rates significantly",
      metric: "+18%",
      trend: "up"
    }
  ];

  const stats = [
    { label: "Avg Performance", value: "87%", change: "+5%", icon: Target },
    { label: "Active Students", value: "156", change: "+12", icon: Users },
    { label: "Study Time", value: "2.4h", change: "+0.3h", icon: Clock },
    { label: "AI Accuracy", value: "94%", change: "+2%", icon: Brain }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Navigation />
      
      <div className="pt-20 pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Learning Analytics</h1>
            <p className="text-gray-600">AI-powered insights and performance tracking with Pinecone semantic analysis</p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                      <p className="text-3xl font-bold">{stat.value}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <TrendingUp className="w-4 h-4 text-green-600" />
                        <span className="text-sm text-green-600">{stat.change}</span>
                      </div>
                    </div>
                    <stat.icon className="w-8 h-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="performance">Performance</TabsTrigger>
              <TabsTrigger value="patterns">Learning Patterns</TabsTrigger>
              <TabsTrigger value="ai-insights">AI Insights</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Performance Trends */}
                <Card>
                  <CardHeader>
                    <CardTitle>Performance Trends</CardTitle>
                    <CardDescription>Monthly average scores and student engagement</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <AreaChart data={performanceData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="score" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.3} />
                      </AreaChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                {/* Subject Performance */}
                <Card>
                  <CardHeader>
                    <CardTitle>Subject Performance</CardTitle>
                    <CardDescription>Average performance across different subjects</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={subjectData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="subject" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="performance" fill="#10B981" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                {/* Learning Patterns */}
                <Card>
                  <CardHeader>
                    <CardTitle>Daily Engagement Patterns</CardTitle>
                    <CardDescription>Student engagement throughout the day</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={learningPatterns}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="time" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="engagement" stroke="#8B5CF6" strokeWidth={3} />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                {/* AI Insights */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Brain className="w-5 h-5 text-purple-600" />
                      AI-Generated Insights
                    </CardTitle>
                    <CardDescription>Powered by IBM Watsonx and Pinecone analytics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {aiInsights.map((insight, index) => (
                        <div key={index} className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-gray-900">{insight.title}</h4>
                            <Badge className="bg-green-100 text-green-800">
                              {insight.trend === 'up' && <TrendingUp className="w-3 h-3 mr-1" />}
                              {insight.metric}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-700">{insight.insight}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="performance">
              <Card>
                <CardHeader>
                  <CardTitle>Detailed Performance Analytics</CardTitle>
                  <CardDescription>Comprehensive performance tracking and semantic analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Detailed performance analytics dashboard coming soon...</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="patterns">
              <Card>
                <CardHeader>
                  <CardTitle>Learning Pattern Analysis</CardTitle>
                  <CardDescription>Deep dive into student learning behaviors and preferences</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Learning pattern analysis tools coming soon...</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="ai-insights">
              <div className="grid lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Predictive Analytics</CardTitle>
                    <CardDescription>AI predictions for student performance and recommendations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <h4 className="font-semibold text-blue-800 mb-2">Performance Prediction</h4>
                        <p className="text-sm text-gray-700">Based on current trends, average class performance is expected to reach 90% by next month.</p>
                      </div>
                      <div className="p-4 bg-green-50 rounded-lg">
                        <h4 className="font-semibold text-green-800 mb-2">Intervention Alerts</h4>
                        <p className="text-sm text-gray-700">3 students may benefit from additional support in calculus concepts.</p>
                      </div>
                      <div className="p-4 bg-purple-50 rounded-lg">
                        <h4 className="font-semibold text-purple-800 mb-2">Content Recommendations</h4>
                        <p className="text-sm text-gray-700">Interactive simulations show 40% higher engagement for physics topics.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Semantic Performance Tracking</CardTitle>
                    <CardDescription>Pinecone-powered semantic understanding of learning progress</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold mb-2">Concept Mastery</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm">Quadratic Equations</span>
                            <span className="text-sm font-medium">94%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm">Linear Functions</span>
                            <span className="text-sm font-medium">87%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm">Calculus Basics</span>
                            <span className="text-sm font-medium">76%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
