
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { 
  Brain, 
  Database, 
  Settings as SettingsIcon, 
  Users, 
  Shield,
  Zap,
  BookOpen,
  Target
} from "lucide-react";
import Navigation from "@/components/Navigation";

const Settings = () => {
  const [adaptiveQuizzing, setAdaptiveQuizzing] = useState(true);
  const [realTimeFeedback, setRealTimeFeedback] = useState(true);
  const [semanticTracking, setSemanticTracking] = useState(true);
  const [classroomSync, setClassroomSync] = useState(false);
  const [difficultyRange, setDifficultyRange] = useState([3, 7]);
  const [confidenceThreshold, setConfidenceThreshold] = useState([75]);

  const integrations = [
    {
      name: "IBM Watsonx",
      description: "AI foundation model for content generation and analysis",
      status: "connected",
      version: "v2.1.0"
    },
    {
      name: "Granite Foundation Model",
      description: "Advanced reasoning and natural language processing",
      status: "connected", 
      version: "v1.8.2"
    },
    {
      name: "Pinecone Vector Database",
      description: "Semantic performance tracking and similarity search",
      status: "connected",
      version: "v2.0.5"
    },
    {
      name: "Google Classroom",
      description: "Course synchronization and assignment integration",
      status: classroomSync ? "connected" : "disconnected",
      version: "v3.2.1"
    }
  ];

  const aiModelSettings = [
    {
      name: "Content Generation Model",
      current: "granite-13b-instruct",
      options: ["granite-13b-instruct", "granite-20b-code", "granite-34b-chat"],
      description: "Primary model for generating quiz questions and explanations"
    },
    {
      name: "Student Assessment Model", 
      current: "watsonx-llama2-70b",
      options: ["watsonx-llama2-70b", "watsonx-flan-t5-xxl", "granite-13b-instruct"],
      description: "Model used for evaluating student responses and providing feedback"
    },
    {
      name: "Semantic Analysis Model",
      current: "pinecone-text-embedding",
      options: ["pinecone-text-embedding", "watsonx-embeddings", "sentence-transformers"],
      description: "Model for semantic understanding and performance tracking"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Navigation />
      
      <div className="pt-20 pb-8 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Platform Settings</h1>
            <p className="text-gray-600">Configure AI models, integrations, and learning preferences</p>
          </div>

          <Tabs defaultValue="ai-models" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="ai-models">AI Models</TabsTrigger>
              <TabsTrigger value="integrations">Integrations</TabsTrigger>
              <TabsTrigger value="learning">Learning Settings</TabsTrigger>
              <TabsTrigger value="privacy">Privacy & Security</TabsTrigger>
            </TabsList>

            <TabsContent value="ai-models" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="w-5 h-5 text-purple-600" />
                    AI Model Configuration
                  </CardTitle>
                  <CardDescription>
                    Configure IBM Watsonx and Granite foundation models for optimal performance
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {aiModelSettings.map((model, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-semibold">{model.name}</h3>
                          <Badge variant="secondary">{model.current}</Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-4">{model.description}</p>
                        <div className="grid md:grid-cols-3 gap-2">
                          {model.options.map((option) => (
                            <Button 
                              key={option}
                              variant={option === model.current ? "default" : "outline"}
                              size="sm"
                              className="text-sm"
                            >
                              {option}
                            </Button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Model Performance Tuning</CardTitle>
                  <CardDescription>Fine-tune AI model parameters for your specific needs</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <Label className="text-base font-medium mb-3 block">Adaptive Difficulty Range</Label>
                      <div className="px-3">
                        <Slider
                          value={difficultyRange}
                          onValueChange={setDifficultyRange}
                          max={10}
                          min={1}
                          step={1}
                          className="mb-2"
                        />
                        <div className="flex justify-between text-sm text-gray-500">
                          <span>Easy (1)</span>
                          <span>Current: {difficultyRange[0]} - {difficultyRange[1]}</span>
                          <span>Hard (10)</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <Label className="text-base font-medium mb-3 block">AI Confidence Threshold</Label>
                      <div className="px-3">
                        <Slider
                          value={confidenceThreshold}
                          onValueChange={setConfidenceThreshold}
                          max={100}
                          min={50}
                          step={5}
                          className="mb-2"
                        />
                        <div className="flex justify-between text-sm text-gray-500">
                          <span>Conservative (50%)</span>
                          <span>Current: {confidenceThreshold[0]}%</span>
                          <span>Aggressive (100%)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="integrations" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="w-5 h-5 text-blue-600" />
                    Platform Integrations
                  </CardTitle>
                  <CardDescription>
                    Manage connections to external services and APIs
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {integrations.map((integration, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center gap-4">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            integration.status === 'connected' ? 'bg-green-100' : 'bg-gray-100'
                          }`}>
                            {integration.name.includes('IBM') && <Brain className="w-5 h-5 text-blue-600" />}
                            {integration.name.includes('Granite') && <Zap className="w-5 h-5 text-purple-600" />}
                            {integration.name.includes('Pinecone') && <Database className="w-5 h-5 text-green-600" />}
                            {integration.name.includes('Google') && <BookOpen className="w-5 h-5 text-orange-600" />}
                          </div>
                          <div>
                            <h3 className="font-semibold">{integration.name}</h3>
                            <p className="text-sm text-gray-600">{integration.description}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge variant={integration.status === 'connected' ? 'default' : 'secondary'}>
                                {integration.status}
                              </Badge>
                              <span className="text-xs text-gray-500">{integration.version}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          {integration.name.includes('Google') ? (
                            <Switch 
                              checked={classroomSync} 
                              onCheckedChange={setClassroomSync}
                            />
                          ) : (
                            <Button variant="outline" size="sm">
                              Configure
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="learning" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-green-600" />
                    Learning Experience Settings
                  </CardTitle>
                  <CardDescription>
                    Customize the adaptive learning experience for your students
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label className="text-base font-medium">Adaptive Quizzing</Label>
                        <p className="text-sm text-gray-600">
                          Automatically adjust question difficulty based on student performance
                        </p>
                      </div>
                      <Switch checked={adaptiveQuizzing} onCheckedChange={setAdaptiveQuizzing} />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label className="text-base font-medium">Real-time Feedback</Label>
                        <p className="text-sm text-gray-600">
                          Provide immediate explanations and hints during quizzes
                        </p>
                      </div>
                      <Switch checked={realTimeFeedback} onCheckedChange={setRealTimeFeedback} />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label className="text-base font-medium">Semantic Progress Tracking</Label>
                        <p className="text-sm text-gray-600">
                          Use Pinecone to track conceptual understanding beyond just scores
                        </p>
                      </div>
                      <Switch checked={semanticTracking} onCheckedChange={setSemanticTracking} />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label className="text-base font-medium">Google Classroom Sync</Label>
                        <p className="text-sm text-gray-600">
                          Automatically sync assignments and grades with Google Classroom
                        </p>
                      </div>
                      <Switch checked={classroomSync} onCheckedChange={setClassroomSync} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="privacy" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-red-600" />
                    Privacy & Security
                  </CardTitle>
                  <CardDescription>
                    Manage data privacy and security settings for your platform
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <h3 className="font-semibold text-blue-800 mb-2">Data Encryption</h3>
                      <p className="text-sm text-gray-700">All student data is encrypted at rest and in transit using AES-256 encryption.</p>
                    </div>
                    
                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                      <h3 className="font-semibold text-green-800 mb-2">FERPA Compliance</h3>
                      <p className="text-sm text-gray-700">Platform is fully compliant with FERPA regulations for student privacy protection.</p>
                    </div>

                    <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                      <h3 className="font-semibold text-purple-800 mb-2">AI Model Privacy</h3>
                      <p className="text-sm text-gray-700">Student interactions with AI models are anonymized and used only for personalization.</p>
                    </div>

                    <div className="flex justify-between items-center pt-4">
                      <Button variant="outline">Export Student Data</Button>
                      <Button variant="outline">Privacy Policy</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Settings;
