// Splash screen

window.addEventListener("load", function () {

  setTimeout(function () {

    document.getElementById("splash").classList.add("hidden");
    document.getElementById("app").classList.remove("hidden");

  }, 1800);

});


// Home

function goHome() {
  location.reload();
}


// Subject

function openSubject(subject) {

  alert(
    subject +
    " Subject\n\n" +
    "Lessons:\n" +
    "1. Introduction\n" +
    "2. Basic Lesson\n" +
    "3. Practice\n" +
    "4. Test"
  );

}


// All Subjects

function showAllSubjects() {

  alert(
    "📚 All Subjects\n\n" +
    "📖 Urdu\n" +
    "🔤 English\n" +
    "➕ Math\n" +
    "🔬 Science"
  );

}


// Poems

function openPoems() {

  alert(
    "🎵 Poems\n\n" +
    "Twinkle Twinkle Little Star\n" +
    "Baa Baa Black Sheep\n" +
    "Urdu Kids Poem"
  );

}


// Quiz

function openQuiz() {

  const answer = prompt(
    "📝 Quick Quiz\n\n" +
    "What is 2 + 2?\n\n" +
    "A) 3\n" +
    "B) 4\n" +
    "C) 5"
  );

  if (answer && answer.toUpperCase() === "B") {

    alert("🎉 Correct Answer!");

  } else {

    alert("Try Again 😊");

  }

}


// Progress

function openProgress() {

  alert(
    "📊 Your Progress\n\n" +
    "Urdu: 80%\n" +
    "English: 75%\n" +
    "Math: 70%\n" +
    "Science: 65%\n\n" +
    "Overall: 75%"
  );

}


// Text to Speech

function speakEnglish() {

  const text =
    "Welcome to Nasri Class. " +
    "Let's learn English together.";

  if ("speechSynthesis" in window) {

    const speech = new SpeechSynthesisUtterance(text);

    speech.lang = "en-US";
    speech.rate = 0.8;

    window.speechSynthesis.speak(speech);

  } else {

    alert("Text to Speech is not supported.");

  }

}


// PWA Service Worker

if ("serviceWorker" in navigator) {

  window.addEventListener("load", function () {

    navigator.serviceWorker.register("sw.js")
      .then(function () {
        console.log("Service Worker Registered");
      })
      .catch(function (error) {
        console.log("Service Worker Error:", error);
      });

  });

}
