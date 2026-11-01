
const $ = id => document.getElementById(id);

const LANGUAGES = {
    es: {
        name: "Spanish",
        speech: "es-ES",
        words: [
            ["Hola", "Hello", "OH-lah", "Greetings"],
            ["Buenos días", "Good morning", "BWEH-nos DEE-as", "Greetings"],
            ["Gracias", "Thank you", "GRAH-see-as", "Greetings"],
            ["Por favor", "Please", "por fah-VOR", "Greetings"],
            ["Adiós", "Goodbye", "ah-DYOS", "Greetings"],
            ["Agua", "Water", "AH-gwah", "Food"],
            ["Pan", "Bread", "pan", "Food"],
            ["Manzana", "Apple", "man-SAH-nah", "Food"],
            ["La cuenta, por favor", "The bill, please", "lah KWEN-tah por fah-VOR", "Food"],
            ["Estoy perdido", "I am lost", "es-TOY per-DEE-doh", "Travel"],
            ["¿Dónde está?", "Where is it?", "DON-deh es-TAH", "Travel"],
            ["El aeropuerto", "The airport", "el ah-eh-roh-PWER-toh", "Travel"],
            ["Uno", "One", "OO-noh", "Numbers"],
            ["Dos", "Two", "dos", "Numbers"],
            ["Tres", "Three", "tres", "Numbers"],
            ["¿Cómo estás?", "How are you?", "KOH-moh es-TAHS", "Everyday"],
            ["No entiendo", "I don't understand", "noh en-TYEN-doh", "Everyday"],
            ["Hasta mañana", "See you tomorrow", "AHS-tah mah-NYAH-nah", "Everyday"]
        ],
        grammar: [
            ["Basic greetings", "Use hola for hello and buenos días for good morning. Spanish greetings often change according to the time of day.", "Hola, Ana.", "Hello, Ana."],
            ["Articles: el and la", "Spanish nouns have grammatical gender. El is commonly used with masculine singular nouns, and la with feminine singular nouns.", "El libro / La casa", "The book / The house"],
            ["Ser and estar", "Both verbs can mean 'to be'. Ser is often used for identity and characteristics; estar is often used for location and temporary states.", "Soy estudiante. / Estoy aquí.", "I am a student. / I am here."],
            ["Simple sentence order", "A common Spanish sentence follows subject + verb + object. Subject pronouns are often omitted when the verb already identifies the subject.", "Yo como pan.", "I eat bread."]
        ]
    },
    fr: {
        name: "French",
        speech: "fr-FR",
        words: [
            ["Bonjour", "Hello / Good morning", "bohn-ZHOOR", "Greetings"],
            ["Bonsoir", "Good evening", "bohn-SWAHR", "Greetings"],
            ["Merci", "Thank you", "mehr-SEE", "Greetings"],
            ["S'il vous plaît", "Please", "seel voo PLEH", "Greetings"],
            ["Au revoir", "Goodbye", "oh ruh-VWAHR", "Greetings"],
            ["Eau", "Water", "oh", "Food"],
            ["Pain", "Bread", "pan", "Food"],
            ["Pomme", "Apple", "pohm", "Food"],
            ["L'addition, s'il vous plaît", "The bill, please", "lah-dee-SYOHN", "Food"],
            ["Où est la gare ?", "Where is the station?", "oo eh lah gahr", "Travel"],
            ["L'aéroport", "The airport", "leh-ah-eh-roh-POR", "Travel"],
            ["À gauche", "To the left", "ah GOHSH", "Travel"],
            ["Un", "One", "uhn", "Numbers"],
            ["Deux", "Two", "duh", "Numbers"],
            ["Trois", "Three", "twah", "Numbers"],
            ["Comment allez-vous ?", "How are you?", "koh-mahn tah-lay VOO", "Everyday"],
            ["Je ne comprends pas", "I don't understand", "zhuh nuh kohm-prahn PAH", "Everyday"],
            ["À demain", "See you tomorrow", "ah duh-MAN", "Everyday"]
        ],
        grammar: [
            ["Articles: le, la and les", "French nouns have grammatical gender and number. Le is masculine singular, la is feminine singular, and les is plural.", "Le livre / La maison", "The book / The house"],
            ["Être: to be", "Être is an essential verb used for identity, characteristics and other expressions.", "Je suis étudiant.", "I am a student."],
            ["Avoir: to have", "Avoir expresses possession and is also used in several common expressions.", "J'ai un livre.", "I have a book."],
            ["Simple sentence order", "A common French sentence follows subject + verb + object.", "Je mange une pomme.", "I eat an apple."]
        ]
    },
    de: {
        name: "German",
        speech: "de-DE",
        words: [
            ["Hallo", "Hello", "HAH-loh", "Greetings"],
            ["Guten Morgen", "Good morning", "GOO-ten MOR-gen", "Greetings"],
            ["Danke", "Thank you", "DAHN-kuh", "Greetings"],
            ["Bitte", "Please / You're welcome", "BIT-tuh", "Greetings"],
            ["Auf Wiedersehen", "Goodbye", "owf VEE-der-zay-en", "Greetings"],
            ["Wasser", "Water", "VAH-ser", "Food"],
            ["Brot", "Bread", "broht", "Food"],
            ["Apfel", "Apple", "AP-fel", "Food"],
            ["Die Rechnung, bitte", "The bill, please", "dee REKH-noong", "Food"],
            ["Wo ist der Bahnhof?", "Where is the station?", "voh ist dair BAHN-hohf", "Travel"],
            ["Der Flughafen", "The airport", "dair FLOOG-hah-fen", "Travel"],
            ["Links", "Left", "links", "Travel"],
            ["Eins", "One", "eyns", "Numbers"],
            ["Zwei", "Two", "tsvy", "Numbers"],
            ["Drei", "Three", "dry", "Numbers"],
            ["Wie geht's?", "How are you?", "vee gayts", "Everyday"],
            ["Ich verstehe nicht", "I don't understand", "ikh fair-SHTAY-uh nikht", "Everyday"],
            ["Bis morgen", "See you tomorrow", "bis MOR-gen", "Everyday"]
        ],
        grammar: [
            ["Articles: der, die and das", "German nouns use grammatical gender. Der is masculine, die is feminine, and das is neuter in the singular.", "Der Tisch / Die Tür / Das Buch", "The table / The door / The book"],
            ["Sein: to be", "Sein is used for identity, characteristics and states.", "Ich bin Student.", "I am a student."],
            ["Haben: to have", "Haben expresses possession and is frequently used in everyday sentences.", "Ich habe ein Buch.", "I have a book."],
            ["Verb position", "In a basic German main clause, the conjugated verb usually comes in the second position.", "Heute lerne ich Deutsch.", "Today I am learning German."]
        ]
    },
    ja: {
        name: "Japanese",
        speech: "ja-JP",
        words: [
            ["こんにちは", "Hello", "Konnichiwa", "Greetings"],
            ["おはよう", "Good morning", "Ohayou", "Greetings"],
            ["ありがとう", "Thank you", "Arigatou", "Greetings"],
            ["お願いします", "Please", "Onegaishimasu", "Greetings"],
            ["さようなら", "Goodbye", "Sayounara", "Greetings"],
            ["水", "Water", "Mizu", "Food"],
            ["パン", "Bread", "Pan", "Food"],
            ["りんご", "Apple", "Ringo", "Food"],
            ["お会計お願いします", "The bill, please", "Okaikei onegaishimasu", "Food"],
            ["駅はどこですか", "Where is the station?", "Eki wa doko desu ka", "Travel"],
            ["空港", "Airport", "Kuukou", "Travel"],
            ["左", "Left", "Hidari", "Travel"],
            ["一", "One", "Ichi", "Numbers"],
            ["二", "Two", "Ni", "Numbers"],
            ["三", "Three", "San", "Numbers"],
            ["元気ですか", "How are you?", "Genki desu ka", "Everyday"],
            ["わかりません", "I don't understand", "Wakarimasen", "Everyday"],
            ["また明日", "See you tomorrow", "Mata ashita", "Everyday"]
        ],
        grammar: [
            ["The particle は (wa)", "The particle は marks the topic of a sentence. It is written with the character は but pronounced wa in this grammatical use.", "私は学生です。", "I am a student."],
            ["The particle を (o)", "The particle を commonly marks the direct object of a verb.", "水を飲みます。", "I drink water."],
            ["Polite です (desu)", "です is often used at the end of polite statements.", "これは本です。", "This is a book."],
            ["Basic sentence order", "Japanese commonly uses subject + object + verb order. The verb usually comes at the end.", "私は水を飲みます。", "I drink water."]
        ]
    },
    hi: {
        name: "Hindi",
        speech: "hi-IN",
        words: [
            ["नमस्ते", "Hello", "Namaste", "Greetings"],
            ["सुप्रभात", "Good morning", "Suprabhat", "Greetings"],
            ["धन्यवाद", "Thank you", "Dhanyavaad", "Greetings"],
            ["कृपया", "Please", "Kripaya", "Greetings"],
            ["अलविदा", "Goodbye", "Alvida", "Greetings"],
            ["पानी", "Water", "Paani", "Food"],
            ["रोटी", "Bread / Flatbread", "Roti", "Food"],
            ["सेब", "Apple", "Seb", "Food"],
            ["बिल दीजिए", "The bill, please", "Bil dijiye", "Food"],
            ["स्टेशन कहाँ है?", "Where is the station?", "Station kahan hai?", "Travel"],
            ["हवाई अड्डा", "Airport", "Hawai adda", "Travel"],
            ["बाएँ", "Left", "Baayen", "Travel"],
            ["एक", "One", "Ek", "Numbers"],
            ["दो", "Two", "Do", "Numbers"],
            ["तीन", "Three", "Teen", "Numbers"],
            ["आप कैसे हैं?", "How are you?", "Aap kaise hain?", "Everyday"],
            ["मुझे समझ नहीं आया", "I didn't understand", "Mujhe samajh nahi aaya", "Everyday"],
            ["कल मिलते हैं", "See you tomorrow", "Kal milte hain", "Everyday"]
        ],
        grammar: [
            ["Basic word order", "Hindi commonly follows subject + object + verb order.", "मैं पानी पीता हूँ।", "I drink water. (masculine speaker)"],
            ["Gender in Hindi", "Many Hindi nouns are grammatically masculine or feminine. Some verb and adjective forms change with gender.", "वह अच्छा है।", "He is good."],
            ["Polite language", "आप (aap) is a respectful form of 'you'. It is suitable for formal or polite conversations.", "आप कैसे हैं?", "How are you?"],
            ["Postpositions", "Hindi commonly uses postpositions after nouns rather than prepositions before them.", "घर में", "In the house."]
        ]
    }
};

const STORAGE_KEY = "lingobloom_progress_v1";

function freshState() {
    return {
        xp: 0,
        goal: 10,
        lastActive: null,
        activeDates: [],
        learned: {},
        bookmarks: {},
        grammarDone: {},
        quizAttempts: 0,
        quizCorrect: 0,
        quizAnswered: 0,
        bestScore: 0
    };
}

function loadState() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return freshState();

        const saved = JSON.parse(raw);
        const base = freshState();

        return {
            ...base,
            ...saved,
            learned: saved.learned || {},
            bookmarks: saved.bookmarks || {},
            grammarDone: saved.grammarDone || {},
            activeDates: Array.isArray(saved.activeDates)
                ? saved.activeDates
                : []
        };
    } catch {
        return freshState();
    }
}

let state = loadState();
let language = $("languageSelect").value;
let category = "All";
let cardIndex = 0;
let flipped = false;
let quiz = null;
let toastTimer = null;

function saveState() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        return true;
    } catch {
        showToast("Could not save data. Check browser storage.");
        return false;
    }
}

function langData() {
    return LANGUAGES[language];
}

function wordKey(word) {
    return `${language}:${word}`;
}

function langProgress() {
    if (!state.learned[language]) state.learned[language] = [];
    if (!state.bookmarks[language]) state.bookmarks[language] = [];
    if (!state.grammarDone[language]) state.grammarDone[language] = [];
}

function getWords() {
    langProgress();
    let words = langData().words;

    if (category !== "All") {
        words = words.filter(word => word[3] === category);
    }

    return words;
}

function localDate(date = new Date()) {
    return [
        date.getFullYear(),
        String(date.getMonth() + 1).padStart(2, "0"),
        String(date.getDate()).padStart(2, "0")
    ].join("-");
}

function activateToday() {
    const today = localDate();

    if (!state.activeDates.includes(today)) {
        state.activeDates.push(today);
    }

    state.lastActive = today;

    // Keep enough history to calculate learning streaks.
    state.activeDates = [...new Set(state.activeDates)]
        .sort()
        .slice(-400);
}

function getStreak() {
    const dates = new Set(state.activeDates);
    let cursor = new Date();
    let count = 0;

    if (!dates.has(localDate(cursor))) {
        cursor.setDate(cursor.getDate() - 1);
    }

    while (dates.has(localDate(cursor))) {
        count++;
        cursor.setDate(cursor.getDate() - 1);
    }

    return count;
}

function getTodayLearned() {
    langProgress();

    return state.learned[language].filter(key =>
        key.startsWith(`${localDate()}:`)
    ).length;
}

function showToast(message) {
    const toast = $("toast");
    toast.textContent = message;
    toast.classList.add("visible");

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
        toast.classList.remove("visible");
    }, 2300);
}

function navigate(section) {
    const target = $(section);
    if (!target) return;

    document.querySelectorAll(".page-section").forEach(page => {
        page.classList.add("hidden");
    });

    target.classList.remove("hidden");

    document.querySelectorAll(".nav-link").forEach(link => {
        link.classList.toggle(
            "active",
            link.dataset.section === section
        );
    });

    if (section === "lessons") renderFlashcard();
    if (section === "grammar") renderGrammar();
    if (section === "bookmarks") renderBookmarks();
    if (section === "quiz") renderQuizStats();

    window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelectorAll("[data-section]").forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();
        navigate(link.dataset.section);
    });
});

document.querySelectorAll("[data-go]").forEach(button => {
    button.addEventListener("click", () => navigate(button.dataset.go));
});

function renderDashboard() {
    langProgress();

    const learnedCount = state.learned[language].length;
    const todayCount = getTodayLearned();
    const percentage = Math.min(
        100,
        Math.round((todayCount / state.goal) * 100)
    );

    $("wordsLearned").textContent = learnedCount;
    $("xpValue").textContent = state.xp.toLocaleString();
    $("levelValue").textContent = Math.floor(state.xp / 100) + 1;

    const accuracy = state.quizAnswered
        ? Math.round((state.quizCorrect / state.quizAnswered) * 100)
        : 0;

    $("accuracyValue").textContent = `${accuracy}%`;

    const streak = getStreak();
    $("streakValue").textContent = streak;
    $("dashboardStreak").textContent = streak;

    $("dailyGoal").value = state.goal;
    $("dailyPercent").textContent = `${percentage}%`;
    $("dailyCount").textContent = `${todayCount} of ${state.goal} words`;

    $("dailyRing").style.setProperty("--progress", `${percentage}%`);
}

$("saveGoal").addEventListener("click", () => {
    const goal = Number($("dailyGoal").value);

    if (!Number.isInteger(goal) || goal < 1 || goal > 100) {
        $("goalMessage").textContent = "Choose a goal between 1 and 100.";
        $("goalMessage").classList.add("error");
        return;
    }

    const previousGoal = state.goal;
    state.goal = goal;

    if (!saveState()) {
        state.goal = previousGoal;
        return;
    }

    $("goalMessage").classList.remove("error");
    $("goalMessage").textContent = "Daily goal saved!";
    renderDashboard();
});

function getCardId(word) {
    return wordKey(word[0]);
}

function renderFlashcard() {
    langProgress();

    const words = getWords();

    if (words.length === 0) return;

    cardIndex = ((cardIndex % words.length) + words.length) % words.length;

    const word = words[cardIndex];
    const learned = state.learned[language].includes(getCardId(word));
    const bookmarked = state.bookmarks[language].includes(word[0]);

    flipped = false;

    $("flashcard").classList.remove("is-flipped");
    $("cardCategory").textContent = word[3].toUpperCase();
    $("cardNumber").textContent =
        `${String(cardIndex + 1).padStart(2, "0")} / ${String(words.length).padStart(2, "0")}`;

    $("cardLanguage").textContent = langData().name.toUpperCase();
    $("wordLabel").textContent = "YOUR NEW WORD";
    $("wordText").textContent = word[0];
    $("wordPronunciation").textContent = word[2];
    $("flipHint").textContent = "Click the card to reveal the translation ↻";

    $("bookmarkWord").textContent = bookmarked ? "♥ Saved" : "♡ Save word";
    $("markLearned").textContent = learned ? "✓ Already learned" : "✓ Mark as learned";

    $("cardCounter").textContent = `Card ${cardIndex + 1} of ${words.length}`;
}

function flipCard() {
    const words = getWords();
    if (!words.length) return;

    flipped = !flipped;
    const word = words[cardIndex];

    $("flashcard").classList.toggle("is-flipped", flipped);
    $("wordLabel").textContent = flipped ? "TRANSLATION" : "YOUR NEW WORD";
    $("wordText").textContent = flipped ? word[1] : word[0];
    $("wordPronunciation").textContent = flipped
        ? `Category: ${word[3]}`
        : word[2];

    $("flipHint").textContent = flipped
        ? "Click again to see the original word ↻"
        : "Click the card to reveal the translation ↻";
}

$("flashcard").addEventListener("click", event => {
    if (event.target.closest("button")) return;
    flipCard();
});

$("flashcard").addEventListener("keydown", event => {
    if (event.target !== $("flashcard")) return;

    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        flipCard();
    }
});

$("previousCard").addEventListener("click", () => {
    cardIndex--;
    renderFlashcard();
});

$("nextCard").addEventListener("click", () => {
    cardIndex++;
    renderFlashcard();
});

$("categorySelect").addEventListener("change", () => {
    category = $("categorySelect").value;
    cardIndex = 0;
    renderFlashcard();
});

document.querySelectorAll("[data-category]").forEach(button => {
    button.addEventListener("click", () => {
        category = button.dataset.category;
        $("categorySelect").value = category;
        cardIndex = 0;
        navigate("lessons");
    });
});

$("shuffleCards").addEventListener("click", () => {
    const words = getWords();

    if (words.length > 1) {
        const oldIndex = cardIndex;
        do {
            cardIndex = Math.floor(Math.random() * words.length);
        } while (cardIndex === oldIndex);

        renderFlashcard();
        showToast("Flashcards shuffled!");
    }
});

$("markLearned").addEventListener("click", () => {
    langProgress();

    const word = getWords()[cardIndex];
    if (!word) return;

    const id = getCardId(word);

    if (state.learned[language].includes(id)) {
        showToast("You have already learned this word.");
        return;
    }

    const previousXP = state.xp;

    state.learned[language].push(id);
    state.xp += 10;
    activateToday();

    if (!saveState()) {
        state.learned[language].pop();
        state.xp = previousXP;
        return;
    }

    renderDashboard();
    renderFlashcard();
    showToast("Word learned! +10 XP 🌱");
});

$("bookmarkWord").addEventListener("click", () => {
    langProgress();

    const word = getWords()[cardIndex];
    if (!word) return;

    const saved = state.bookmarks[language];
    const index = saved.indexOf(word[0]);

    if (index >= 0) {
        saved.splice(index, 1);
        showToast("Removed from saved words.");
    } else {
        saved.push(word[0]);
        showToast("Word added to your collection!");
    }

    if (saveState()) {
        renderFlashcard();
    }
});

// Pronunciation uses the browser's speech synthesis.
// Voice availability depends on the user's operating system and browser.
function speak(text) {
    if (!("speechSynthesis" in window)) {
        showToast("Speech is not supported in this browser.");
        return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = langData().speech;
    utterance.rate = 0.82;

    const voices = window.speechSynthesis.getVoices();
    const voice = voices.find(v =>
        v.lang.toLowerCase().startsWith(language === "ja" ? "ja" : language)
    );

    if (voice) utterance.voice = voice;

    utterance.onerror = () => showToast("Could not play pronunciation.");
    window.speechSynthesis.speak(utterance);
}

$("speakWord").addEventListener("click", event => {
    event.stopPropagation();

    const word = getWords()[cardIndex];
    if (word) speak(word[0]);
});

// Grammar lessons
function renderGrammar() {
    langProgress();

    const lessons = langData().grammar;
    const container = $("grammarList");
    container.replaceChildren();

    lessons.forEach((lesson, index) => {
        const done = state.grammarDone[language].includes(index);
        const card = document.createElement("article");
        card.className = "grammar-card";

        const top = document.createElement("div");
        top.className = "grammar-card-top";

        const number = document.createElement("span");
        number.className = "grammar-number";
        number.textContent = String(index + 1).padStart(2, "0");

        const status = document.createElement("span");
        status.className = "grammar-status";
        status.textContent = done ? "✓ COMPLETED" : "GRAMMAR LESSON";

        top.append(number, status);

        const title = document.createElement("h2");
        title.textContent = lesson[0];

        const explanation = document.createElement("p");
        explanation.textContent = lesson[1];

        const example = document.createElement("div");
        example.className = "grammar-example";

        const original = document.createElement("strong");
        original.textContent = lesson[2];

        const translation = document.createElement("span");
        translation.textContent = lesson[3];

        example.append(original, translation);

        const button = document.createElement("button");
        button.className = done ? "outline-button" : "primary-button";
        button.textContent = done ? "✓ Completed" : "Mark as completed";
        button.disabled = done;

        button.addEventListener("click", () => {
            state.grammarDone[language].push(index);
            state.xp += 15;
            activateToday();

            if (!saveState()) {
                state.grammarDone[language].pop();
                state.xp -= 15;
                return;
            }

            renderGrammar();
            renderDashboard();
            showToast("Grammar lesson completed! +15 XP");
        });

        card.append(top, title, explanation, example, button);
        container.appendChild(card);
    });
}

// Saved words
function renderBookmarks() {
    langProgress();

    const container = $("bookmarkList");
    container.replaceChildren();

    const savedWords = state.bookmarks[language];

    $("bookmarkEmpty").classList.toggle("hidden", savedWords.length > 0);

    savedWords.forEach(savedWord => {
        const word = langData().words.find(w => w[0] === savedWord);
        if (!word) return;

        const card = document.createElement("article");
        card.className = "saved-word-card";

        const categoryLabel = document.createElement("span");
        categoryLabel.className = "soft-label";
        categoryLabel.textContent = word[3].toUpperCase();

        const title = document.createElement("h3");
        title.textContent = word[0];

        const pronunciation = document.createElement("p");
        pronunciation.className = "saved-pronunciation";
        pronunciation.textContent = word[2];

        const translation = document.createElement("p");
        translation.className = "saved-translation";
        translation.textContent = word[1];

        const actions = document.createElement("div");
        actions.className = "saved-word-actions";

        const audio = document.createElement("button");
        audio.textContent = "🔊 Listen";
        audio.addEventListener("click", () => speak(word[0]));

        const remove = document.createElement("button");
        remove.textContent = "Remove";
        remove.addEventListener("click", () => {
            const index = state.bookmarks[language].indexOf(word[0]);

            if (index >= 0) {
                state.bookmarks[language].splice(index, 1);

                if (saveState()) {
                    renderBookmarks();
                    renderFlashcard();
                    showToast("Word removed.");
                } else {
                    state.bookmarks[language].splice(index, 0, word[0]);
                }
            }
        });

        actions.append(audio, remove);
        card.append(categoryLabel, title, pronunciation, translation, actions);
        container.appendChild(card);
    });
}

// Quiz
function renderQuizStats() {
    $("quizAttempts").textContent = state.quizAttempts;
    $("bestScore").textContent = state.quizAttempts
        ? `${state.bestScore}%`
        : "—";
}

function startQuiz() {
    const words = [...langData().words];

    // Randomize the question order.
    for (let i = words.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [words[i], words[j]] = [words[j], words[i]];
    }

    quiz = {
        questions: words.slice(0, 10),
        index: 0,
        correct: 0,
        answered: false
    };

    $("quizStart").classList.add("hidden");
    $("quizResult").classList.add("hidden");
    $("quizPlay").classList.remove("hidden");

    renderQuestion();
}

function renderQuestion() {
    const question = quiz.questions[quiz.index];
    quiz.answered = false;

    $("quizQuestionNumber").textContent =
        `QUESTION ${quiz.index + 1} OF ${quiz.questions.length}`;

    $("quizScoreLive").textContent = `${quiz.correct} correct`;

    $("quizProgressBar").style.width =
        `${(quiz.index / quiz.questions.length) * 100}%`;

    $("quizCategory").textContent = question[3].toUpperCase();
    $("quizQuestion").textContent = "What does this word mean?";
    $("quizPrompt").textContent = question[0];
    $("quizFeedback").textContent = "";
    $("quizFeedback").classList.remove("error");

    $("nextQuestion").disabled = true;
    $("nextQuestion").textContent =
        quiz.index === quiz.questions.length - 1
            ? "See results →"
            : "Next question →";

    const correctAnswer = question[1];

    const otherAnswers = langData().words
        .filter(word => word[1] !== correctAnswer)
        .map(word => word[1]);

    // Choose three different incorrect translations.
    for (let i = otherAnswers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [otherAnswers[i], otherAnswers[j]] =
            [otherAnswers[j], otherAnswers[i]];
    }

    const options = [
        correctAnswer,
        ...otherAnswers.slice(0, 3)
    ];

    for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
    }

    const container = $("quizOptions");
    container.replaceChildren();

    options.forEach(option => {
        const button = document.createElement("button");
        button.className = "quiz-option";
        button.textContent = option;

        button.addEventListener("click", () => selectAnswer(button, option));

        container.appendChild(button);
    });
}

function selectAnswer(button, answer) {
    if (!quiz || quiz.answered) return;

    quiz.answered = true;

    const question = quiz.questions[quiz.index];
    const correct = answer === question[1];

    if (correct) quiz.correct++;

    document.querySelectorAll(".quiz-option").forEach(option => {
        option.disabled = true;

        if (option.textContent === question[1]) {
            option.classList.add("correct");
        }
    });

    if (!correct) button.classList.add("incorrect");

    $("quizScoreLive").textContent = `${quiz.correct} correct`;

    $("quizFeedback").textContent = correct
        ? "Correct! Excellent work. 🌱"
        : `Not quite. "${question[1]}" is the correct meaning.`;

    $("quizFeedback").classList.toggle("error", !correct);
    $("nextQuestion").disabled = false;
}

$("startQuiz").addEventListener("click", startQuiz);
$("retryQuiz").addEventListener("click", startQuiz);

$("nextQuestion").addEventListener("click", () => {
    if (!quiz || !quiz.answered) return;

    if (quiz.index < quiz.questions.length - 1) {
        quiz.index++;
        renderQuestion();
    } else {
        finishQuiz();
    }
});

function finishQuiz() {
    const total = quiz.questions.length;
    const score = Math.round((quiz.correct / total) * 100);
    const earnedXP = quiz.correct * 10;

    const previous = {
        xp: state.xp,
        attempts: state.quizAttempts,
        correct: state.quizCorrect,
        answered: state.quizAnswered,
        best: state.bestScore,
        activeDates: [...state.activeDates],
        lastActive: state.lastActive
    };

    state.xp += earnedXP;
    state.quizAttempts++;
    state.quizCorrect += quiz.correct;
    state.quizAnswered += total;
    state.bestScore = Math.max(state.bestScore, score);
    activateToday();

    if (!saveState()) {
        state.xp = previous.xp;
        state.quizAttempts = previous.attempts;
        state.quizCorrect = previous.correct;
        state.quizAnswered = previous.answered;
        state.bestScore = previous.best;
        state.activeDates = previous.activeDates;
        state.lastActive = previous.lastActive;
        return;
    }

    $("quizPlay").classList.add("hidden");
    $("quizResult").classList.remove("hidden");

    $("resultScore").textContent = `${quiz.correct}/${total}`;
    $("resultCorrect").textContent = quiz.correct;
    $("resultXP").textContent = earnedXP;

    $("resultTitle").textContent = score === 100
        ? "Perfect score!"
        : score >= 70
            ? "Wonderful progress!"
            : "Keep growing!";

    $("resultMessage").textContent =
        `You scored ${score}%. Review your difficult words and try again.`;

    $("quizProgressBar").style.width = "100%";

    renderDashboard();
    renderQuizStats();
}

$("languageSelect").addEventListener("change", () => {
    language = $("languageSelect").value;
    category = "All";
    cardIndex = 0;

    $("categorySelect").value = "All";

    // Keep quiz sessions consistent with their original language.
    quiz = null;

    $("quizPlay").classList.add("hidden");
    $("quizResult").classList.add("hidden");
    $("quizStart").classList.remove("hidden");

    renderDashboard();
    renderFlashcard();
    renderGrammar();
    renderBookmarks();
    renderQuizStats();

    showToast(`Now learning ${langData().name}!`);
});

// Initialize the app with saved progress.
langProgress();
renderDashboard();
renderFlashcard();
renderGrammar();
renderBookmarks();
renderQuizStats();
