function openSubject(subject) {
    const lessons = {
        Urdu: ["Alif Bay Pay", "Haroof ki Pehchan", "Jor Tootay", "Parhna Seekhein"],
        English: ["Alphabets", "Words", "Sentences", "Reading"],
        Math: ["Numbers", "Addition", "Subtraction", "Practice"],
        Science: ["Introduction", "Basic Science", "Practice", "Test"]
    };

    const list = lessons[subject] || ["Introduction", "Basic Lesson", "Practice", "Test"];

    document.body.innerHTML = `
        <div style="padding:25px;font-family:Arial;">
            <h1>${subject}</h1>
            <h2>Lessons</h2>
            ${list.map((lesson, i) => `
                <div style="padding:18px;margin:12px 0;background:#f3f1ff;border-radius:15px;font-size:18px;">
                    ${i + 1}. ${lesson}
                </div>
            `).join("")}
            <button onclick="location.reload()" style="padding:14px 25px;border:0;border-radius:12px;">
                ← Back
            </button>
        </div>
    `;
}
