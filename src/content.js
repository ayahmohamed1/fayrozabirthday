// ================================================================
//  💌  LOVE GIFT — CONTENT CONFIGURATION
//  Edit ONLY this file to fully customize your romantic website.
//  URL overrides: ?name=Aya&msg=Hello
// ================================================================

export const content = {

  // ── Page 1: Welcome ──────────────────────────────────────────
  welcome: {
    greeting: "Hello",
    name: "My Love!",           // recipient name
    question: "do you want to see your gift?",
    yesButton: "YES PLEASE",
    noButton: "NO THANKS",
    noCatEmoji: "🐱",           // cat emoji shown on welcome
  },

  // ── Page 2: No Thanks reaction ───────────────────────────────
  noThanks: {
    catEmoji: "😢",
    message: "I promise you'll like it",
    tryAgainButton: "TRY AGAIN",
  },

  // ── Page 3: Gift Menu ─────────────────────────────────────────
  menu: {
    title: "THESE ARE FOR YOU!",
    subtitle: "I hope you like it, I love you!",
    items: [
      { id: "video",  icon: '🎥',  label: "our video" },
      { id: "flowers",   icon: "💐",  label: "Virtual Flowers" },
      { id: "locks",     icon: "🔒",  label: "Love Locks" },
      { id: "letter",    icon: "💌",  label: "Love Letter" },
    ],
  },

  // ── Page 4: Captured Memories ────────────────────────────────
  // ... (باقي الكود بتاعك)

  // امسح الـ memories وحط ده:
  video: {
    title: "Press to play 🎬",
    src: "/video/memory.MP4", // اعمل فولدر اسمه video جوه public وحط فيه الفيديو
    poster: "/images/video-poster.jpg" // اختياري: صورة تظهر قبل ما الفيديو يشتغل
  },

// ... (باقي الكود بتاعك)

  // ── Page 5: Virtual Flowers ──────────────────────────────────
  flowers: {
    title: "Virtual Flowers",
    flowerName: "TULIPS",
    flowerSubtitle: "your favorite flower",
    flowerEmoji: "🌷",
    // Poem lines that float around the flower
    poems: [
       "لو كان ليا أمنية واحدة كل سنة، فهتبقى إنك تفضلي مبسوطة، قريبة مني، وحبيبتي لآخر العمر ❤",
      "مهما كتبت كلام، عمري ما هوصف قد إيه أنا محظوظ إنك معايا… عيد ميلاد سعيد يا أجمل نعمة في حياتي 💞",
      "سبع سنين وانتي لسه نفس الدفا، نفس الأمان، ونفس البنت اللي قلبي بيختارها كل يوم من جديد 🫂💞",
      "يا بخت قلبي بيكي… كل سنة وانتي معايا 🤍",
      "كل لحظة معاكي كانت سبب إني أحب الحياة أكتر",
      "العمر كله مع بعض يفيروزة 💞🫂",
      "وجودك في حياتي خلى لأيامي معنى، وكل سنة وانتي النور اللي مالي قلبي وحياتي 🫂💞",
      "كل سنة وإنتي الأمان اللي عمري ما حسيته غير معاكي يفراشتي💞✨",
    ],
    returnButton: "RETURN",
  },

  // ── Page 6: Love Song ─────────────────────────────────────────
  song: {
    title: "this song reminds me of you (>ᴗ<)",
    songTitle: "Nothing",
    artist: "Bruno Major",
    youtubeId: "MFxeHUrOiNI",    // YouTube video ID only
    highlightText: "The most beautiful thing",
    secretMessage: "Secret message: 1:43 - 1:55",
    returnButton: "RETURN",
  },

  // ── Page 7: Love Letter / Message ────────────────────────────
  letter: {
    title: "Message for my love",
    // Supports \n for line breaks
    message: `سبع سنين…
سبع سنين وإنتي مش بس حبيبتي، إنتي بقيتي جزء مني، من أيامي، من كل تفصيلة حلوة عشتها ❤️
النهارده عيد ميلادك،
وعندي إحساس إني مهما كتبت واتكلمت، الكلام هيبقى أقل بكتير من اللي جوايا ليكي.
لأن بعد السبع سنين دي كلها، لسه كل مرة بشوفك فيها قلبي بيدق بنفس اللهفة، ونفس الفرحة، كأني بحبك لأول مرة.
كل سنة وانتي الوحيدة اللي قلبي اختارها من وسط الدنيا كلها.
كل سنة وانتي أكتر شخص شافني في كل حالاتي، وفرح معايا، واستحملني، وكان سند وأمان من غير ما يطلب حاجة.
سبع سنين وإنتي ثابتة جوا قلبي، وده لوحده كفاية يثبت إنك مش حب عادي…إنتي العمر كله❤️

فاكرة كام مرة زعلنا؟
كام مرة الدنيا ضغطتنا؟
ورغم كل حاجة… فضلنا ماسكين في بعض.
وده أكتر حاجة بخليني متأكد إن وجودك في حياتي رزق، وإن مفيش حد يقدر ياخد مكانك أبدًا.
إنتي مش مجرد حبيبتي…
إنتي صاحبتي، وضهري، والونس اللي بيلحقني من الدنيا، والراحة اللي بلاقيها بعد أي تعب.
ومهما الأيام تعدي، هيفضل عندي نفس الإحساس:
إني محظوظ عشان إنتي معايا.ويمكن أحلى حاجة حصلتلي في السبع سنين دول…إن كل يوم كنت بصحى وفي حد يستاهل إني أحارب الدنيا عشانه❤️
“سبع سنين حب…
وما بين كل مرة قولتلك فيها بحبك،
كان قلبي بيحبك أكتر من اللي قبلها.” ✨
يارب السنة الجديدة من عمرك تبقى بداية لكل حاجة حلوة نفسك فيها،
وتفضلي دايمًا مبسوطة، مطمنة، وقريبة مني.
وأفضل أنا الشخص اللي قلبك يرتاحله مهما حصل.

❤️عيد ميلاد سعيد يا أجمل قصة حب عشتها في حياتي `,
    signoff: "Sincerely yours,",
    signature: "The love of your life",
    returnButton: "RETURN",
  },

  // ── Love Locks (bonus page) ───────────────────────────────────
  locks: {
    title: "Love Locks",
    message: "Our love is locked forever 🔒",
    names: ["Me", "&", "You"],
    returnButton: "RETURN",
  },

  // ── Global ───────────────────────────────────────────────────
  music: null,  // e.g. "/music/song.mp3" or null to disable
};
