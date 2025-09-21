import { TestQuestion, TestType } from '../types';

// Frustration Assessment
export const frustrationQuestions: TestQuestion[] = [
  {
    id: 1,
    question: "How often do you feel angry or irritated without a clear reason?",
    options: [
      { value: 0, text: "Never" },
      { value: 1, text: "Rarely" },
      { value: 2, text: "Sometimes" },
      { value: 3, text: "Often" },
      { value: 4, text: "Very often" }
    ]
  },
  {
    id: 2,
    question: "When things don't go as planned, how intensely do you feel frustrated?",
    options: [
      { value: 0, text: "Not at all" },
      { value: 1, text: "Slightly" },
      { value: 2, text: "Moderately" },
      { value: 3, text: "Considerably" },
      { value: 4, text: "Extremely" }
    ]
  },
  {
    id: 3,
    question: "How difficult is it for you to let go of frustrating situations?",
    options: [
      { value: 0, text: "Not difficult at all" },
      { value: 1, text: "Slightly difficult" },
      { value: 2, text: "Moderately difficult" },
      { value: 3, text: "Very difficult" },
      { value: 4, text: "Extremely difficult" }
    ]
  },
  {
    id: 4,
    question: "How often do you find yourself ruminating over frustrating events?",
    options: [
      { value: 0, text: "Never" },
      { value: 1, text: "Rarely" },
      { value: 2, text: "Sometimes" },
      { value: 3, text: "Often" },
      { value: 4, text: "Very often" }
    ]
  },
  {
    id: 5,
    question: "How frequently do frustrating situations impact your daily functioning?",
    options: [
      { value: 0, text: "Never" },
      { value: 1, text: "Rarely" },
      { value: 2, text: "Sometimes" },
      { value: 3, text: "Often" },
      { value: 4, text: "Very often" }
    ]
  }
];

// Insomnia Assessment
export const insomniaQuestions: TestQuestion[] = [
  {
    id: 1,
    question: "How difficult is it for you to fall asleep?",
    options: [
      { value: 0, text: "Not difficult at all" },
      { value: 1, text: "Slightly difficult" },
      { value: 2, text: "Moderately difficult" },
      { value: 3, text: "Very difficult" },
      { value: 4, text: "Extremely difficult" }
    ]
  },
  {
    id: 2,
    question: "How often do you wake up during the night?",
    options: [
      { value: 0, text: "Never" },
      { value: 1, text: "Rarely" },
      { value: 2, text: "Sometimes" },
      { value: 3, text: "Often" },
      { value: 4, text: "Very often" }
    ]
  },
  {
    id: 3,
    question: "How difficult is it for you to go back to sleep after waking up?",
    options: [
      { value: 0, text: "Not difficult at all" },
      { value: 1, text: "Slightly difficult" },
      { value: 2, text: "Moderately difficult" },
      { value: 3, text: "Very difficult" },
      { value: 4, text: "Extremely difficult" }
    ]
  },
  {
    id: 4,
    question: "How satisfied are you with your current sleep pattern?",
    options: [
      { value: 0, text: "Very satisfied" },
      { value: 1, text: "Satisfied" },
      { value: 2, text: "Neutral" },
      { value: 3, text: "Dissatisfied" },
      { value: 4, text: "Very dissatisfied" }
    ]
  },
  {
    id: 5,
    question: "How much does your sleep problem interfere with your daily functioning?",
    options: [
      { value: 0, text: "Not at all" },
      { value: 1, text: "A little" },
      { value: 2, text: "Somewhat" },
      { value: 3, text: "Much" },
      { value: 4, text: "Very much" }
    ]
  }
];

// Depression Screening
export const depressionQuestions: TestQuestion[] = [
  {
    id: 1,
    question: "How often have you felt little interest or pleasure in doing things?",
    options: [
      { value: 0, text: "Not at all" },
      { value: 1, text: "Several days" },
      { value: 2, text: "More than half the days" },
      { value: 3, text: "Nearly every day" }
    ]
  },
  {
    id: 2,
    question: "How often have you felt down, depressed, or hopeless?",
    options: [
      { value: 0, text: "Not at all" },
      { value: 1, text: "Several days" },
      { value: 2, text: "More than half the days" },
      { value: 3, text: "Nearly every day" }
    ]
  },
  {
    id: 3,
    question: "How often have you had trouble falling or staying asleep, or sleeping too much?",
    options: [
      { value: 0, text: "Not at all" },
      { value: 1, text: "Several days" },
      { value: 2, text: "More than half the days" },
      { value: 3, text: "Nearly every day" }
    ]
  },
  {
    id: 4,
    question: "How often have you felt tired or had little energy?",
    options: [
      { value: 0, text: "Not at all" },
      { value: 1, text: "Several days" },
      { value: 2, text: "More than half the days" },
      { value: 3, text: "Nearly every day" }
    ]
  },
  {
    id: 5,
    question: "How often have you had poor appetite or been overeating?",
    options: [
      { value: 0, text: "Not at all" },
      { value: 1, text: "Several days" },
      { value: 2, text: "More than half the days" },
      { value: 3, text: "Nearly every day" }
    ]
  },
  {
    id: 6,
    question: "How often have you felt bad about yourself or that you are a failure?",
    options: [
      { value: 0, text: "Not at all" },
      { value: 1, text: "Several days" },
      { value: 2, text: "More than half the days" },
      { value: 3, text: "Nearly every day" }
    ]
  },
  {
    id: 7,
    question: "How often have you had trouble concentrating on things?",
    options: [
      { value: 0, text: "Not at all" },
      { value: 1, text: "Several days" },
      { value: 2, text: "More than half the days" },
      { value: 3, text: "Nearly every day" }
    ]
  }
];

// Panic Attack Assessment
export const panicQuestions: TestQuestion[] = [
  {
    id: 1,
    question: "How often do you experience sudden episodes of intense fear?",
    options: [
      { value: 0, text: "Never" },
      { value: 1, text: "Rarely" },
      { value: 2, text: "Sometimes" },
      { value: 3, text: "Often" },
      { value: 4, text: "Very often" }
    ]
  },
  {
    id: 2,
    question: "During these episodes, do you experience heart palpitations or accelerated heart rate?",
    options: [
      { value: 0, text: "Never" },
      { value: 1, text: "Rarely" },
      { value: 2, text: "Sometimes" },
      { value: 3, text: "Often" },
      { value: 4, text: "Always" }
    ]
  },
  {
    id: 3,
    question: "Do you experience sweating, trembling, or shaking during these episodes?",
    options: [
      { value: 0, text: "Never" },
      { value: 1, text: "Rarely" },
      { value: 2, text: "Sometimes" },
      { value: 3, text: "Often" },
      { value: 4, text: "Always" }
    ]
  },
  {
    id: 4,
    question: "Do you feel sensations of shortness of breath or smothering?",
    options: [
      { value: 0, text: "Never" },
      { value: 1, text: "Rarely" },
      { value: 2, text: "Sometimes" },
      { value: 3, text: "Often" },
      { value: 4, text: "Always" }
    ]
  },
  {
    id: 5,
    question: "Do you feel a fear of losing control or 'going crazy' during these episodes?",
    options: [
      { value: 0, text: "Never" },
      { value: 1, text: "Rarely" },
      { value: 2, text: "Sometimes" },
      { value: 3, text: "Often" },
      { value: 4, text: "Always" }
    ]
  }
];

// Schizophrenia Screening
export const schizophreniaQuestions: TestQuestion[] = [
  {
    id: 1,
    question: "Have you ever heard voices or sounds that others couldn't hear?",
    options: [
      { value: 0, text: "Never" },
      { value: 1, text: "Rarely" },
      { value: 2, text: "Sometimes" },
      { value: 3, text: "Often" },
      { value: 4, text: "Very often" }
    ]
  },
  {
    id: 2,
    question: "Have you had the feeling that people are out to harm you or are plotting against you?",
    options: [
      { value: 0, text: "Never" },
      { value: 1, text: "Rarely" },
      { value: 2, text: "Sometimes" },
      { value: 3, text: "Often" },
      { value: 4, text: "Very often" }
    ]
  },
  {
    id: 3,
    question: "Have you felt that your thoughts were being controlled or influenced by external forces?",
    options: [
      { value: 0, text: "Never" },
      { value: 1, text: "Rarely" },
      { value: 2, text: "Sometimes" },
      { value: 3, text: "Often" },
      { value: 4, text: "Very often" }
    ]
  },
  {
    id: 4,
    question: "Have you had trouble organizing your thoughts or finding the right words to express yourself?",
    options: [
      { value: 0, text: "Never" },
      { value: 1, text: "Rarely" },
      { value: 2, text: "Sometimes" },
      { value: 3, text: "Often" },
      { value: 4, text: "Very often" }
    ]
  },
  {
    id: 5,
    question: "Have you withdrawn from social activities or relationships that you previously enjoyed?",
    options: [
      { value: 0, text: "Never" },
      { value: 1, text: "Rarely" },
      { value: 2, text: "Sometimes" },
      { value: 3, text: "Often" },
      { value: 4, text: "Very often" }
    ]
  }
];

export const getTestQuestions = (type: TestType): TestQuestion[] => {
  switch (type) {
    case 'frustration':
      return frustrationQuestions;
    case 'insomnia':
      return insomniaQuestions;
    case 'depression':
      return depressionQuestions;
    case 'panic':
      return panicQuestions;
    case 'schizophrenia':
      return schizophreniaQuestions;
    default:
      return [];
  }
};

export const getTestInfo = (type: TestType) => {
  const info = {
    frustration: {
      title: "Frustration Assessment",
      description: "This assessment helps determine your frustration levels and how they might be affecting your daily life.",
      maxScore: 20,
      thresholds: {
        low: 5,
        moderate: 10,
        high: 15,
        severe: 20
      }
    },
    insomnia: {
      title: "Insomnia Severity Assessment",
      description: "This assessment evaluates your sleep patterns and the severity of any insomnia symptoms you may be experiencing.",
      maxScore: 20,
      thresholds: {
        low: 5,
        moderate: 10,
        high: 15,
        severe: 20
      }
    },
    depression: {
      title: "Depression Screening",
      description: "This screening tool helps identify symptoms of depression and their frequency.",
      maxScore: 21,
      thresholds: {
        low: 5,
        moderate: 10,
        high: 15,
        severe: 21
      }
    },
    panic: {
      title: "Panic Attack Assessment",
      description: "This assessment evaluates your experience with panic symptoms and their frequency.",
      maxScore: 20,
      thresholds: {
        low: 5,
        moderate: 10,
        high: 15,
        severe: 20
      }
    },
    schizophrenia: {
      title: "Schizophrenia Screening",
      description: "This screening tool helps identify potential symptoms associated with schizophrenia spectrum disorders.",
      maxScore: 20,
      thresholds: {
        low: 5,
        moderate: 10,
        high: 15,
        severe: 20
      }
    }
  };
  
  return info[type];
};

export const getResultInsights = (type: TestType, score: number) => {
  const info = getTestInfo(type);
  const { thresholds } = info;
  
  let level: 'low' | 'moderate' | 'high' | 'severe' = 'low';
  
  if (score >= thresholds.severe) {
    level = 'severe';
  } else if (score >= thresholds.high) {
    level = 'high';
  } else if (score >= thresholds.moderate) {
    level = 'moderate';
  }

  const insights = {
    frustration: {
      low: "Your frustration levels appear to be within a healthy range. You likely have good coping mechanisms for dealing with life's challenges.",
      moderate: "You're experiencing a moderate level of frustration. This may be affecting your mood and daily functioning at times.",
      high: "Your frustration levels are quite high. This could be significantly impacting your quality of life and relationships.",
      severe: "You're experiencing severe levels of frustration. This is likely having a major impact on your wellbeing and daily functioning."
    },
    insomnia: {
      low: "You appear to have healthy sleep patterns with minimal insomnia symptoms.",
      moderate: "You're experiencing moderate insomnia symptoms that may be affecting your energy levels and mood.",
      high: "Your insomnia symptoms are significant and likely impacting your daily functioning and wellbeing.",
      severe: "You're experiencing severe insomnia that is substantially affecting your quality of life."
    },
    depression: {
      low: "You're showing minimal signs of depression. Your mood appears to be relatively stable.",
      moderate: "You're showing some symptoms of depression that may be affecting your daily life.",
      high: "You're experiencing significant symptoms of depression that are likely impacting many aspects of your life.",
      severe: "Your symptoms suggest severe depression that is substantially affecting your wellbeing and functioning."
    },
    panic: {
      low: "You show minimal signs of panic symptoms. You likely feel in control most of the time.",
      moderate: "You're experiencing moderate panic symptoms that may be distressing at times.",
      high: "Your panic symptoms are significant and likely causing considerable distress in your life.",
      severe: "Your symptoms suggest severe panic issues that are substantially affecting your wellbeing."
    },
    schizophrenia: {
      low: "You're showing minimal signs associated with schizophrenia spectrum disorders.",
      moderate: "You're showing some symptoms that could be associated with schizophrenia spectrum disorders.",
      high: "You're experiencing several symptoms that are commonly associated with schizophrenia spectrum disorders.",
      severe: "Your responses indicate multiple significant symptoms associated with schizophrenia spectrum disorders."
    }
  };

  const suggestions = {
    frustration: {
      low: [
        "Continue practicing your current coping strategies",
        "Consider learning mindfulness techniques to further enhance your emotional regulation",
        "Regular physical activity can help maintain low frustration levels"
      ],
      moderate: [
        "Practice deep breathing exercises when feeling frustrated",
        "Consider journaling to identify frustration triggers",
        "Take short breaks when feeling overwhelmed",
        "Engage in regular physical activity to release tension"
      ],
      high: [
        "Consider speaking with a mental health professional about your frustration levels",
        "Learn and practice specific anger management techniques",
        "Establish a daily meditation practice to help manage emotions",
        "Prioritize self-care activities that help you relax and reset"
      ],
      severe: [
        "We strongly recommend consulting with a mental health professional",
        "Consider stress management programs or anger management therapy",
        "Practice daily relaxation techniques like progressive muscle relaxation",
        "Evaluate your work-life balance and make necessary adjustments",
        "Consider joining a support group to learn from others with similar experiences"
      ]
    },
    insomnia: {
      low: [
        "Maintain your current sleep hygiene practices",
        "Continue with regular sleep schedules",
        "Limit screen time before bed"
      ],
      moderate: [
        "Establish a consistent sleep schedule, even on weekends",
        "Create a relaxing bedtime routine",
        "Limit caffeine and alcohol, especially in the afternoon and evening",
        "Ensure your bedroom is quiet, dark, and at a comfortable temperature"
      ],
      high: [
        "Consider speaking with a healthcare provider about your sleep issues",
        "Try cognitive behavioral techniques for insomnia",
        "Practice relaxation techniques before bedtime",
        "Limit napping during the day",
        "Avoid looking at clocks during the night"
      ],
      severe: [
        "We strongly recommend consulting with a sleep specialist or healthcare provider",
        "Consider cognitive behavioral therapy for insomnia (CBT-I)",
        "Maintain strict sleep hygiene practices",
        "Eliminate all screen time at least one hour before bed",
        "Practice relaxation techniques specifically designed for sleep"
      ]
    },
    depression: {
      low: [
        "Continue engaging in activities you enjoy",
        "Maintain social connections",
        "Regular physical activity can help prevent depression",
        "Practice gratitude regularly"
      ],
      moderate: [
        "Consider speaking with a mental health professional",
        "Increase physical activity, even light exercise can help",
        "Establish a routine to provide structure to your day",
        "Connect with supportive friends or family members",
        "Practice self-compassion and avoid self-criticism"
      ],
      high: [
        "We recommend consulting with a mental health professional",
        "Consider therapy options like cognitive behavioral therapy",
        "Ensure you're getting adequate sleep and nutrition",
        "Avoid isolation by maintaining connections with others",
        "Set small, achievable goals to build confidence"
      ],
      severe: [
        "Please consult with a mental health professional as soon as possible",
        "Consider both therapy and medication options",
        "Create a safety plan if you have any thoughts of self-harm",
        "Reach out to trusted people for support",
        "Focus on basic self-care: sleep, nutrition, and gentle movement",
        "Remember that severe depression is treatable with proper care"
      ]
    },
    panic: {
      low: [
        "Practice regular relaxation techniques to maintain emotional balance",
        "Continue with regular physical activity",
        "Learn about mindfulness practices"
      ],
      moderate: [
        "Learn and practice deep breathing exercises",
        "Consider progressive muscle relaxation techniques",
        "Identify triggers for your panic symptoms",
        "Maintain regular physical activity",
        "Practice mindfulness meditation"
      ],
      high: [
        "Consider speaking with a mental health professional about your symptoms",
        "Learn specific grounding techniques for panic episodes",
        "Practice cognitive behavioral strategies for panic",
        "Establish regular relaxation practices",
        "Consider joining a support group for people with anxiety"
      ],
      severe: [
        "We strongly recommend consulting with a mental health professional",
        "Learn and practice the 5-4-3-2-1 grounding technique for panic attacks",
        "Consider cognitive behavioral therapy (CBT) which is highly effective for panic",
        "Practice daily relaxation and mindfulness exercises",
        "Evaluate with a professional whether medication might be helpful",
        "Create a crisis plan for managing severe panic episodes"
      ]
    },
    schizophrenia: {
      low: [
        "Practice stress management techniques",
        "Maintain a healthy lifestyle with regular sleep patterns",
        "Stay connected with supportive people in your life"
      ],
      moderate: [
        "Consider speaking with a mental health professional about your experiences",
        "Practice grounding techniques when feeling disconnected",
        "Maintain a regular daily routine",
        "Reduce stress through relaxation practices",
        "Keep a journal of unusual experiences or thoughts"
      ],
      high: [
        "We recommend consulting with a mental health professional",
        "Learn to identify early warning signs of symptom increases",
        "Develop coping strategies for managing difficult experiences",
        "Maintain social connections when possible",
        "Consider joining a support group"
      ],
      severe: [
        "Please consult with a mental health professional as soon as possible",
        "Consider comprehensive evaluation by a psychiatrist",
        "Learn about treatment options including therapy and medication",
        "Develop a crisis plan with healthcare providers",
        "Connect with family or friends who can provide support",
        "Remember that with proper treatment, symptoms can be managed effectively"
      ]
    }
  };

  return {
    level,
    insight: insights[type][level],
    suggestions: suggestions[type][level]
  };
};