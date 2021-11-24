function getBotResponse(input) {
    //rock paper scissors
    if (input == "thanks") {
        return "You are most welcome";
    } else if (input == "how are you?") {
        return "Sukran! Alhamdulillah and you?";
    } else if (input == "Fine and you?") {
        return "Alhamdulillah";
    }

    //greeting
    if (input == "good") {
        return "Good, Alhamdulillah..!";
    } else if (input == "fine") {
        return "Great, May Allah bless you!";
    } else if (input == "hi") {
        return "hello 👋";
    }
    //Alhamdulillah
    if (input == "alhamdulillah") {
        return "Alhamdulillah..! Allah is enough for us.";
    } else if (input == "Alhamdulillah") {
        return "Our life should be maintained only for praising of Allah (SWT).";
    } else if (input == "who are you?") {
        return "I'm a chatbot not a human.";
    }
    //remain
    if (input == "Are you busy?") {
        return "Ahoy dear! I am here only for chat with you.";
    } else if (input == "Is there anyone available?") {
        return "Thanks for asking me. Yes, I'm available 24 hours for you. How can I help you?";
    } else if (input == "Where are you from?") {
        return "I am from Bangladesh.";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there 👋!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else! Our team will contact you soon.";
    }
}