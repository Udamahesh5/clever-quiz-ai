
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { 
  Brain, 
  Clock, 
  CheckCircle, 
  XCircle, 
  ArrowRight, 
  ArrowLeft,
  Lightbulb,
  Target,
  TrendingUp
} from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";

const Quiz = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [answers, setAnswers] = useState<string[]>([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);

  // Mock quiz data - in real app this would come from IBM Watsonx
  const quizData = {
    title: "Adaptive Mathematics Assessment",
    subject: "Advanced Mathematics",
    difficulty: "Adaptive",
    totalQuestions: 10,
    questions: [
      {
        id: 1,
        question: "If f(x) = 2x² - 3x + 1, what is f(3)?",
        options: [
          "10",
          "28", 
          "16",
          "22"
        ],
        correct: 1,
        explanation: "f(3) = 2(3)² - 3(3) + 1 = 2(9) - 9 + 1 = 18 - 9 + 1 = 10",
        difficulty: "Medium",
        topic: "Quadratic Functions"
      },
      {
        id: 2,
        question: "Solve for x: 2x + 5 = 3x - 7",
        options: [
          "x = 12",
          "x = -12",
          "x = 2",
          "x = -2"
        ],
        correct: 0,
        explanation: "2x + 5 = 3x - 7 → 5 + 7 = 3x - 2x → 12 = x",
        difficulty: "Easy",
        topic: "Linear Equations"
      }
    ]
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeElapsed(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (value: string) => {
    setSelectedAnswer(value);
  };

  const handleSubmitAnswer = () => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = selectedAnswer;
    setAnswers(newAnswers);
    setShowFeedback(true);
  };

  const handleNextQuestion = () => {
    setShowFeedback(false);
    setSelectedAnswer("");
    
    if (currentQuestion + 1 >= quizData.questions.length) {
      setQuizCompleted(true);
    } else {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
      setSelectedAnswer(answers[currentQuestion - 1] || "");
      setShowFeedback(false);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    answers.forEach((answer, index) => {
      if (parseInt(answer) === quizData.questions[index]?.correct) {
        correct++;
      }
    });
    return Math.round((correct / quizData.questions.length) * 100);
  };

  const currentQ = quizData.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / quizData.totalQuestions) * 100;
  const isCorrect = selectedAnswer && parseInt(selectedAnswer) === currentQ?.correct;

  if (quizCompleted) {
    const score = calculateScore();
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        <Navigation />
        <div className="pt-20 pb-8 px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4">
                  {score >= 80 ? (
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                  ) : (
                    <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center">
                      <Target className="w-10 h-10 text-orange-600" />
                    </div>
                  )}
                </div>
                <CardTitle className="text-3xl mb-2">Quiz Completed!</CardTitle>
                <CardDescription className="text-lg">
                  You scored {score}% on the {quizData.title}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{score}%</div>
                    <div className="text-sm text-gray-600">Final Score</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{formatTime(timeElapsed)}</div>
                    <div className="text-sm text-gray-600">Time Taken</div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">{answers.filter((_, i) => parseInt(answers[i]) === quizData.questions[i]?.correct).length}/{quizData.questions.length}</div>
                    <div className="text-sm text-gray-600">Correct Answers</div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Brain className="w-5 h-5 text-blue-600" />
                    <h3 className="font-semibold text-blue-800">AI Recommendation</h3>
                  </div>
                  <p className="text-gray-700">
                    {score >= 90 ? "Excellent work! You're ready for advanced topics. Consider exploring calculus concepts." :
                     score >= 80 ? "Good job! Review quadratic equations and try some practice problems." :
                     "Focus on fundamentals. I recommend reviewing linear equations before moving forward."}
                  </p>
                </div>

                <div className="flex gap-4 justify-center">
                  <Button variant="outline" onClick={() => navigate("/student")}>
                    Back to Dashboard
                  </Button>
                  <Button onClick={() => window.location.reload()}>
                    Retake Quiz
                  </Button>
                  <Button className="bg-gradient-to-r from-blue-600 to-green-600">
                    Next Recommended Topic
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  if (!currentQ) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Navigation />
      
      <div className="pt-20 pb-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Quiz Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{quizData.title}</h1>
                <p className="text-gray-600">{quizData.subject}</p>
              </div>
              <div className="flex items-center gap-4">
                <Badge className="bg-blue-100 text-blue-800">
                  <Brain className="w-3 h-3 mr-1" />
                  {quizData.difficulty}
                </Badge>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-4 h-4" />
                  {formatTime(timeElapsed)}
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Question {currentQuestion + 1} of {quizData.totalQuestions}</span>
                <span>{Math.round(progress)}% Complete</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          </div>

          {/* Question Card */}
          <Card className="mb-6">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-xl mb-2">{currentQ.question}</CardTitle>
                  <div className="flex gap-2">
                    <Badge variant="secondary">{currentQ.topic}</Badge>
                    <Badge variant="outline">{currentQ.difficulty}</Badge>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <RadioGroup value={selectedAnswer} onValueChange={handleAnswerSelect} className="space-y-3">
                {currentQ.options.map((option, index) => (
                  <div key={index} className={`flex items-center space-x-3 p-3 rounded-lg border transition-colors ${
                    showFeedback 
                      ? index === currentQ.correct 
                        ? 'border-green-500 bg-green-50' 
                        : selectedAnswer === index.toString() && index !== currentQ.correct
                          ? 'border-red-500 bg-red-50'
                          : 'border-gray-200'
                      : selectedAnswer === index.toString()
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                  }`}>
                    <RadioGroupItem value={index.toString()} id={`option-${index}`} disabled={showFeedback} />
                    <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                      {option}
                    </Label>
                    {showFeedback && index === currentQ.correct && (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    )}
                    {showFeedback && selectedAnswer === index.toString() && index !== currentQ.correct && (
                      <XCircle className="w-5 h-5 text-red-600" />
                    )}
                  </div>
                ))}
              </RadioGroup>

              {showFeedback && (
                <div className={`mt-6 p-4 rounded-lg ${isCorrect ? 'bg-green-50 border-green-200' : 'bg-orange-50 border-orange-200'} border`}>
                  <div className="flex items-center gap-2 mb-2">
                    <Lightbulb className={`w-5 h-5 ${isCorrect ? 'text-green-600' : 'text-orange-600'}`} />
                    <h4 className={`font-semibold ${isCorrect ? 'text-green-800' : 'text-orange-800'}`}>
                      {isCorrect ? 'Correct!' : 'Not quite right'}
                    </h4>
                  </div>
                  <p className="text-gray-700">{currentQ.explanation}</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between">
            <Button 
              variant="outline" 
              onClick={handlePreviousQuestion}
              disabled={currentQuestion === 0}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>
            
            {!showFeedback ? (
              <Button 
                onClick={handleSubmitAnswer}
                disabled={!selectedAnswer}
                className="bg-gradient-to-r from-blue-600 to-green-600"
              >
                Submit Answer
              </Button>
            ) : (
              <Button onClick={handleNextQuestion}>
                {currentQuestion + 1 >= quizData.questions.length ? 'Finish Quiz' : 'Next Question'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
