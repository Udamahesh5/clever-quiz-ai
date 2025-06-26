
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Users, BarChart3, BookOpen, Zap, Target, ChevronRight, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import FeatureCard from "@/components/FeatureCard";
import StatsCard from "@/components/StatsCard";

const Index = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState<"student" | "teacher" | null>(null);

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Personalization",
      description: "IBM Watsonx and Granite models create adaptive learning experiences tailored to each student's needs and pace.",
      color: "bg-blue-500"
    },
    {
      icon: Target,
      title: "Adaptive Assessment",
      description: "Dynamic quizzes that adjust difficulty in real-time based on student performance and learning patterns.",
      color: "bg-green-500"
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Comprehensive dashboards with Pinecone-powered semantic tracking for detailed performance insights.",
      color: "bg-purple-500"
    },
    {
      icon: BookOpen,
      title: "Google Classroom Integration",
      description: "Seamless synchronization with existing Google Classroom courses and assignments.",
      color: "bg-orange-500"
    }
  ];

  const stats = [
    { label: "Students Helped", value: "10,000+", icon: Users },
    { label: "Accuracy Improvement", value: "85%", icon: Target },
    { label: "Engagement Rate", value: "94%", icon: Zap },
    { label: "Courses Available", value: "500+", icon: BookOpen }
  ];

  const handleGetStarted = () => {
    if (userType === "student") {
      navigate("/student");
    } else if (userType === "teacher") {
      navigate("/teacher");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200" variant="secondary">
            Powered by IBM Watsonx & Granite AI
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent mb-6">
            EduTutor AI
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Revolutionize learning with AI-powered personalization, adaptive assessments, and real-time feedback
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex gap-2">
              <Button
                variant={userType === "student" ? "default" : "outline"}
                onClick={() => setUserType("student")}
                className="min-w-32"
              >
                I'm a Student
              </Button>
              <Button
                variant={userType === "teacher" ? "default" : "outline"}
                onClick={() => setUserType("teacher")}
                className="min-w-32"
              >
                I'm a Teacher
              </Button>
            </div>
            <Button 
              size="lg" 
              onClick={handleGetStarted}
              disabled={!userType}
              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white"
            >
              Get Started <ChevronRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto border">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">AI Learning Assistant</h3>
                <Badge className="bg-green-100 text-green-800">Live Demo</Badge>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>AI:</strong> Based on your recent performance in algebra, I recommend focusing on quadratic equations. Would you like to start with a diagnostic quiz?
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <strong>Student:</strong> Yes, please! I want to improve my problem-solving speed.
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Button size="lg" variant="outline" className="w-full">
                    <Play className="mr-2 w-5 h-5" />
                    Try Interactive Demo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StatsCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Intelligent Learning Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Harness the power of AI to create personalized learning experiences that adapt to every student's unique needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Powered by Cutting-Edge Technology</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-blue-300">IBM Watsonx</CardTitle>
                <CardDescription className="text-gray-300">
                  Enterprise-grade AI foundation for intelligent content generation
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-green-300">Pinecone Vector DB</CardTitle>
                <CardDescription className="text-gray-300">
                  Semantic performance tracking and intelligent content matching
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-purple-300">Google Classroom</CardTitle>
                <CardDescription className="text-gray-300">
                  Seamless integration with existing educational workflows
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Learning?</h2>
          <p className="text-xl mb-8">
            Join thousands of educators and students already using EduTutor AI to achieve better learning outcomes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => navigate("/teacher")}>
              Start as Teacher
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600" onClick={() => navigate("/student")}>
              Start as Student
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
