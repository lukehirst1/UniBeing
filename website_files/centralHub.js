// ================================================================
// BeingBot - UniBeing Mental Health Chatbot
// Rule-based chatbot with keyword detection
// ================================================================

// ---- Crisis Keywords -------------------------------------------
const crisisKeywords = [
  "suicide", "suicidal", "kill myself", "end my life", "don't want to live",
  "want to die", "no point living", "can't go on", "hopeless", "give up on life",
  "self harm", "hurt myself", "cutting myself", "worthless", "nothing to live for"
];

// ---- Keyword Response Rules ------------------------------------
const rules = [
  {
    keywords: ["stress", "stressed", "overwhelmed", "too much", "pressure", "burnout"],
    responses: [
      "It sounds like you're carrying a lot right now. Try breaking your tasks into smaller steps — tackling one thing at a time can really help. 💙",
      "Stress is tough, but you're not alone. Have you tried the 5-4-3-2-1 grounding technique? Name 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, and 1 you can taste.",
      "When things feel overwhelming, it's okay to pause. Even a 10-minute break can reset your mind. Would you like a breathing exercise to help?",
      "You're doing your best and that matters. Try writing down your top 3 priorities for today — sometimes seeing it on paper makes it feel more manageable."
    ]
  },
  {
    keywords: ["anxious", "anxiety", "nervous", "panic", "panic attack", "worried", "worry", "fear"],
    responses: [
      "Anxiety can feel really overwhelming. Try box breathing: breathe in for 4 counts, hold for 4, breathe out for 4, hold for 4. Repeat a few times. 💙",
      "When anxiety hits, grounding yourself helps. Place your feet flat on the floor, feel the weight of your body, and take slow, steady breaths.",
      "It's okay to feel anxious — it's your body trying to protect you. Would you like some tips on managing anxious thoughts?",
      "Try the 5-4-3-2-1 grounding technique: name 5 things you see, 4 you can touch, 3 you hear, 2 you smell, and 1 you taste. It really helps bring you back to the present."
    ]
  },
  {
    keywords: ["sad", "unhappy", "depressed", "depression", "low", "down", "empty", "numb", "crying"],
    responses: [
      "I'm sorry you're feeling this way. It's okay to not be okay sometimes. Is there anything specific bringing you down that you'd like to talk about?",
      "Feeling low is really hard. Try to do one small kind thing for yourself today — even something tiny like making a warm drink or going outside for 5 minutes.",
      "You matter, and your feelings are valid. Sometimes talking to someone helps — have you considered reaching out to a friend, family member, or university counsellor?",
      "Low moods can be really draining. Gentle movement, like a short walk, can help lift your mood a little. You don't have to feel better all at once — just one small step."
    ]
  },
  {
    keywords: ["lonely", "alone", "isolated", "no friends", "no one cares", "left out"],
    responses: [
      "Feeling lonely is really painful, and it's more common than you might think — especially at university. You're not alone in feeling this way. 💙",
      "Connection takes time to build. Is there a club, society, or online community related to something you enjoy? Even small interactions can help.",
      "Sometimes loneliness is a sign we need to reach out. Could you message one person today — even just a quick hello? Small steps count.",
      "You are valued and worthy of connection. If you're struggling, your university wellbeing service is a great place to start — they're there to help."
    ]
  },
  {
    keywords: ["sleep", "can't sleep", "insomnia", "tired", "exhausted", "no energy", "fatigue"],
    responses: [
      "Poor sleep can affect everything. Try to keep a consistent bedtime, avoid screens an hour before bed, and keep your room cool and dark. 💙",
      "If your mind is racing at night, try writing down your thoughts before bed — it helps get worries out of your head and onto paper.",
      "Tired but can't switch off? Try a body scan: starting from your toes, slowly relax each part of your body working upwards. It's surprisingly effective!",
      "Sleep hygiene matters! Avoid caffeine after 2pm, get some natural light during the day, and try to wind down with something calming before bed."
    ]
  },
  {
    keywords: ["motivat", "unmotivated", "lazy", "procrastinat", "can't focus", "distracted", "stuck"],
    responses: [
      "Motivation can be hard to find — try the 2-minute rule: if something takes less than 2 minutes, do it now. Small wins build momentum! 💙",
      "Starting is often the hardest part. Set a timer for just 10 minutes and work on one task. You'll often find you keep going once you've started.",
      "Try breaking your goal into tiny steps. Instead of 'write essay', try 'open document and write one sentence'. Progress is progress!",
      "Sometimes low motivation is your mind asking for rest. Are you taking proper breaks? The Pomodoro technique — 25 mins work, 5 mins break — can really help."
    ]
  },
  {
    keywords: ["breathe", "breathing", "breath", "exercise", "calm down", "relax", "relaxation"],
    responses: [
      "Let's try box breathing together: breathe IN for 4 counts... hold for 4... breathe OUT for 4... hold for 4. Repeat 4 times. How do you feel? 💙",
      "Try this: take a slow deep breath in through your nose for 4 seconds, hold for 2, then breathe out slowly through your mouth for 6 seconds. Repeat 5 times.",
      "Progressive muscle relaxation can help — tense each muscle group for 5 seconds then release, starting from your feet and working up to your face.",
      "A simple calming exercise: close your eyes, take 3 deep breaths, and imagine a place where you feel completely safe and at peace. Stay there for a moment."
    ]
  },
  {
    keywords: ["tip", "tips", "advice", "help", "resource", "resources", "support", "what can i do"],
    responses: [
      "Here are some quick wellbeing tips: 💙\n• Stay hydrated — drink water regularly\n• Get outside for at least 10 minutes a day\n• Reach out to someone you trust\n• Try to get 7-9 hours of sleep\n• Take breaks — rest is productive too!",
      "Some great resources for you:\n• Student Minds: studentminds.org.uk\n• Mind: mind.org.uk\n• Samaritans: 116 123 (free, 24/7)\n• Your university counselling service is always a great first step too! 💙",
      "Self-care doesn't have to be complicated. Try: a short walk, a warm drink, journaling for 5 minutes, or simply resting without guilt. You deserve care. 💙",
      "Looking after your mental health starts with small habits: consistent sleep, regular meals, movement, and connection with others. Which of these could you try today?"
    ]
  },
  {
    keywords: ["quote", "quotes", "inspire", "inspiration", "motivational", "affirmation"],
    responses: [
      "Here's one for you: \"You've survived 100% of your hard days so far.\" 💙 Keep going!",
      "Remember: \"Progress, not perfection.\" Every small step counts. 💙",
      "\"Be kind to yourself today.\" You deserve the same compassion you give others. 💙",
      "\"It's okay to not be okay — what matters is that you keep going.\" You've got this. 💙"
    ]
  },
  {
    keywords: ["hello", "hi", "hey", "hiya", "good morning", "good evening", "howdy"],
    responses: [
      "Hey there! 👋 I'm BeingBot, your wellbeing companion. How are you feeling today?",
      "Hello! 😊 I'm BeingBot — here to support you. What's on your mind?",
      "Hi! Great to see you. I'm BeingBot. How are you doing today? 💙",
      "Hey! I'm BeingBot. Whether you need a chat, some tips, or just a motivational quote — I'm here for you! 😊"
    ]
  },
  {
    keywords: ["thank", "thanks", "thank you", "cheers", "appreciate"],
    responses: [
      "You're so welcome! Remember, I'm always here if you need me. Take care of yourself. 💙",
      "Happy to help! You're doing great by reaching out. 😊",
      "Anytime! Don't forget — small steps still move you forward. 💙",
      "You're welcome! Be kind to yourself today. 😊"
    ]
  }
];

// ---- Crisis Response -------------------------------------------
const crisisResponse = `I'm really concerned about you and want you to know you're not alone. 💙
Please reach out to one of these services right now:

🆘 Samaritans — 116 123 (free, 24/7, call or text)
🆘 Crisis Text Line — Text SHOUT to 85258
🆘 NHS Urgent Mental Health — 111 (option 2)
🆘 Brighton & Hove Wellbeing Service — 0300 002 0060
🆘 Papyrus (under 35s) — 0800 068 4141

You matter. Please talk to someone. 💙`;

// ---- Default Responses -----------------------------------------
const defaultResponses = [
  "I'm not sure I understand, but I'm here to help! Try asking me about stress, sleep, anxiety, motivation, or type 'tips' for wellbeing advice. 💙",
  "Hmm, I didn't quite catch that. You can ask me about how you're feeling, or type 'resources' for support links. 😊",
  "I'm still learning! Try telling me how you're feeling, or ask for a quote, a breathing exercise, or some wellbeing tips. 💙",
  "I want to help! Try asking about stress, sleep, anxiety, loneliness, or motivation — or just say hi! 😊"
];

// ---- Helper Functions ------------------------------------------
function getRandomResponse(responseArray) {
  return responseArray[Math.floor(Math.random() * responseArray.length)];
}

function checkCrisis(input) {
  return crisisKeywords.some(word => input.toLowerCase().includes(word));
}

function getBotResponse(userInput) {
  const input = userInput.toLowerCase().trim();

  // Check crisis keywords first
  if (checkCrisis(input)) {
    return crisisResponse;
  }

  // Check rules
  for (const rule of rules) {
    if (rule.keywords.some(keyword => input.includes(keyword))) {
      return getRandomResponse(rule.responses);
    }
  }

  // Default fallback
  return getRandomResponse(defaultResponses);
}

// ---- Chat Interface --------------------------------------------
function sendMessage() {
  const inputField = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");
  const userMessage = inputField.value.trim();

  if (!userMessage) return;

  // Display user message
  const userDiv = document.createElement("div");
  userDiv.classList.add("chat-message", "user-message");
  userDiv.innerHTML = `<span><strong>You:</strong> ${userMessage}</span>`;
  chatBox.appendChild(userDiv);

  // Display bot response
  const botDiv = document.createElement("div");
  botDiv.classList.add("chat-message", "bot-message");
  botDiv.innerHTML = `<span><strong>BeingBot:</strong> ${getBotResponse(userMessage)}</span>`;
  chatBox.appendChild(botDiv);

  // Scroll to bottom
  chatBox.scrollTop = chatBox.scrollHeight;

  // Clear input
  inputField.value = "";
}

// Allow Enter key to send message
document.addEventListener("DOMContentLoaded", function () {
  const inputField = document.getElementById("user-input");
  if (inputField) {
    inputField.addEventListener("keypress", function (e) {
      if (e.key === "Enter") sendMessage();
    });
  }

  // Greeting on load
  const chatBox = document.getElementById("chat-box");
  if (chatBox) {
    const greetingDiv = document.createElement("div");
    greetingDiv.classList.add("chat-message", "bot-message");
    greetingDiv.innerHTML = `<span><strong>BeingBot:</strong> Hey there! 👋 I'm BeingBot, your wellbeing companion. How are you feeling today? 💙</span>`;
    chatBox.appendChild(greetingDiv);
  }
});