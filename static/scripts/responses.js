function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    //greeting
    if (input == "good") {
        return "Good, Alhamdulillah..!";
    } else if (input == "fine") {
        return "Great, May Allah bless you!";
    } else if (input == "hi") {
        return "hello 👋";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else! Our team will contact you soon.";
    }
}