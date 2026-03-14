// To use a per-event QR: add the image to src/assets/, import it here,
// and assign it to that event's registration.qr field.
import qrPaperPresentation from "@/assets/Mythresh-paymentqr.jpeg";  //1
import qrCodeDebugging from "@/assets/Mythresh-paymentqr.jpeg";  //2
import qrFastFingers from "@/assets/Vaibhav-paymentqr.jpeg";  //3
import qrTechnicalQuiz from "@/assets/Mythresh-paymentqr.jpeg";  //4
import qrHackathon from "@/assets/Chethan-paymentqr.jpeg";  //5
import qrTimeLimitedCoding from "@/assets/Chethan-paymentqr.jpeg";  //6
import qrPromtEvent from "@/assets/Vaibhav-paymentqr.jpeg";  //7
import qrFreeFire from "@/assets/Chethan-paymentqr.jpeg";  //8
import qrPhotography from "@/assets/Hrishi-paymentqr.jpeg";  //9
import qrNonTechQuiz from "@/assets/Harsha-paymentqr.jpeg";  //10
import qrMemeCompetition from "@/assets/Hrishi-paymentqr.jpeg"; //11
import qrChess from "@/assets/Harsha-paymentqr.jpeg"; //12
import qrReelCompetition from "@/assets/Hrishi-paymentqr.jpeg"; //13
import qrBgmi from "@/assets/Harsha-paymentqr.jpeg"; //14

export interface EventRegistration {
  qr: string;
  alerts: string[];
  formLink: string;
}

export interface EventData {
  id: string;
  title: string;
  slug: string;
  category: "technical" | "non-technical";
  description: string;
  date: string;
  time: string;
  venue: string;
  prize: string;
  rules: string[];
  icon: string;
  coordinators?: string[];
  registration: EventRegistration;
}

export const events: EventData[] = [

  ///////////////Technical Events////////////////

   ///// Paper Presentation /////
  {
    id: "paper-presentation",
    title: "Paper Presentation",
    slug: "paper-presentation",
    category: "technical",
    description:
      "The Technical Presentation Event is an intellectual and innovative platform where participants present their ideas, research, and knowledge on topics related to modern technology. Participants will prepare and present their topic using a PowerPoint presentation, explaining the concept, working principles, real-world applications, and future scope of the technology. This event promotes learning, creativity, and critical thinking while allowing participants to share their perspectives on how technology can shape the future.",
    date: "March 20, 2026",
    time: "10:00 AM - 1:00 PM",
    venue: "Computer Science Department, JNTUACEA Campus",
    prize: "₹xxxxx",
    rules: [
      "Team of 2-3 members allowed",
      "Presentation time: 10 minutes + 5 minutes Q&A",
      "PPT must be submitted 2 days before the event",
      "Topics must be related to current technology trends",
      "Plagiarism will lead to disqualification",
    ],
    icon: "📄",
    registration: {
      qr: qrPaperPresentation,
      alerts: [
        "Registration fee: ₹200 per team",
        "Abstract submission deadline: March 20, 2026",
        "PPT must be submitted 2 days before the event",
      ],
      formLink: "https://docs.google.com/forms/d/e/1FAIpQLSctKnrikKP9KwQZgtdVWpA5nj-cPQLX6hjqXYwNlJ8aZZK0Gw/viewform",
    },
  },


  {
    id: "fast-fingers",
    title: "Fast Fingers",
    slug: "fast-fingers",
    category: "technical",
    description:
      "Put your typing skills to the ultimate test in the Fast Fingers competition! This exhilarating typing contest challenges participants to achieve the highest typing speed and accuracy. Compete individually to showcase your quick fingers and precision on the keyboard.",
    date: "March 20, 2026",
    time: "10:00 AM - 1:00 PM",
    venue: "Computer Science Department, JNTUACEA Campus",
    prize: "1st Prize : ₹600 | Second Prize : ₹300",
    rules: [
      `Registration Details :
Entry Fee : ₹ 100 per Participant🤑`,
      `Rules 🚥:

1. Participants will type on a standard keyboard with no specialized tools or aids.🚫
2. Typing passages and tasks will be provided either on any typing website or any other platform like 'Typing Master',... based on availability.
3. Contestants must type the passages🔡🔤🔣🔠 as quickly🏃🏻🏃🏻‍♀️ and accurately✅ as possible.
4. The event is an individual competition🧍🏻‍♂️,no teams allowed.🚫
5. No external resources, references, or notes may be used.🚫
6. Scores will be based on typing speed, accuracy, and completion time.`,
    ],
    coordinators: [
      "J Nithin Kumar : 8019729262 ",
      "S Sai Sahana : 8978460229",

    ],
    icon: "📄",
    registration: {
      qr: qrFastFingers,
      alerts: [
        "Registration fee: ₹100 per participant",
        "Must submit the payment screenshot and UTR/transaction ID",
        "If any fraud is found, registration will be cancelled and payment will not be refunded",
      ],
      formLink: "https://forms.gle/FMb8rEY8vtQ3fETA8",
    },
  },

  ///// Debugging Challenge /////
  {
    id: "bug-busters",
    title: "Bug Busters",
    slug: "bug-busters",
    category: "technical",
    description: "Find and fix bugs in given code snippets across multiple programming languages. Test your debugging skills under pressure with tricky logical and syntax errors.",
    date: "March 20, 2026",
    time: "2:00 PM - 4:00 PM",
    venue: "Computer Science Department, JNTUACEA Campus",
    prize: "🥇 1st Prize: ₹1200 | 🥈 2nd Prize: ₹800",
    rules: [
      `🐞 Bug Busters – Debugging Competition
Test your debugging skills and win exciting prizes!`,
`💡 About the Event:
Bug Busters is a technical debugging competition conducted as part of Pixel 2K26, where participants must identify and correct errors in C programming code snippets. The contest consists of 30 questions of different difficulty levels that test logical thinking and debugging ability.
💰 Registration Fee: ₹200
🏆 Prizes:
🥇 1st Prize: ₹1200
🥈 2nd Prize: ₹800
📜 Certificates will be provided to all participants.`,

`🍽 Note: Food will be arranged for all participants.`,
`📌 How to Participate:
1️⃣ Pay the ₹200 registration fee online
2️⃣ Fill out the Google Form with the required details
3️⃣ Report to the venue at least 30 minutes before the time informed in the WhatsApp group
📌 Event Format:
1️⃣ Participants will be given 30 buggy C code snippets
2️⃣ They only need to identify the error and write the corrected line (no need to rewrite the entire program)
3️⃣ The contest duration is 60 minutes`,

`⚠️ Rules:
• Individual participation only
• Use of mobile phones or internet is strictly prohibited
• Any form of malpractice will lead to disqualification
• Judges’ decision will be final
🚀 Join Bug Busters and showcase your debugging skills!`,
    ],
    coordinators: [
      "Sree Sai - 8142017489",
      "B Harikha - 8688021066",
    ],
    icon: "🐛",
    registration: {
      qr: qrCodeDebugging,
      alerts: [
        "Registration fee: ₹200 per participant",
        "Must submit the payment screenshot and UTR/transaction ID",
        "If any fraud is found, registration will be cancelled and payment will not be refunded",
      ],
      formLink: "https://docs.google.com/forms/d/e/1FAIpQLSeY5XMVgVY-h7K1plqc_hPw2JmEG7eR9EvugmuFM9xPIcbvcg/viewform",
    },
  },

  ///////// Technical Quiz //////////
  {
    id: "technical-quiz",
    title: "CODE QUEST - (Technical quiz)",
    slug: "technical-quiz",
    category: "technical",
    description: "Welcome to Code Quest, an exciting individual technical quiz challenge designed to test your knowledge, analytical thinking, and problem-solving skills in the field of Computer Science.",
    date: "March 20, 2026",
    time: "10:00 AM - 12:30 PM",
    venue: "Computer Science Department, JNTUACEA Campus",
    prize: "🥇 1st Prize: ₹1000 |🥈 2nd Prize: ₹800",
    rules: [
      "Team of 2 members",
      "3 rounds: Written, Buzzer, Rapid Fire",
      "No electronic devices allowed",
      "Judge's decision is final",
      "Negative marking in written round",
    ],
    icon: "❓",
    registration: {
      qr: qrTechnicalQuiz,
      alerts: [
        "Registration fee: ₹150 per team",
        "Teams of 2 members only",
        "No electronic devices allowed during the quiz",
      ],
      formLink: "https://docs.google.com/forms/d/e/1FAIpQLScnhju2AgGCbMW5AuHOWec-v-3U21zOkmq16eO3zaGui6DiCw/viewform",
    },
  },

  ///////// Hackathon //////////
  {
    id: "hackathon",
    title: "Hackverse",
    slug: "hackathon",
    category: "technical",
    description: "We are excited to announce a 12-Hour Hackathon designed to encourage creativity, innovation, and teamwork among developers and tech enthusiasts. Participants will work together to build innovative web solutions within a limited time frame.",
    date: "March 20, 2026",
    time: "10:00 AM (Day 1) - 10:00 AM (Day 2)",
    venue: "Computer Science Department, JNTUACEA Campus",
    prize: "₹3,499",
    rules: [
      `Event Date: 21st
Hackathon Duration: 12 Hours (Midday to Midnight)
Entry Fee: ₹499 per team`,
`Team Details
- Each team can have 1 to 4 members.
- Teams will collaborate to design and develop their solutions during the hackathon.`,
`Hackathon Process
1. Participants must join the starting meeting at 10:30 AM, where the organizers will explain the rules and provide event instructions. The meeting link will be shared by the organizers.
2. Around 10 problem statements will be released 1 hour before the hackathon begins, allowing teams to review and plan their approach.
3. Teams will then begin working on their projects during the 12-hour hackathon.
4. A presentation/closing meeting will be held around 8:00 PM, where teams will demonstrate their projects. The meeting link will also be shared by the organizers.
`,
`Rules
• Projects must be original and developed during the hackathon.
• Pre-built or copied projects are not allowed.
• Teams must submit their source code and project link before the deadline.
• Plagiarism or cheating will lead to disqualification.
• Team members cannot be changed after registration.
• All teams must present their project at the end of the hackathon.
• Late submissions will not be accepted.
• The organizing team’s decision will be final.`,
`Certificates & Results

- All participants will receive a Participation Certificate.
- The final results will be announced on the 24th after evaluation by the organizing team.

This hackathon provides a great opportunity for developers to showcase their creativity, problem-solving skills, and teamwork while building innovative web solutions in a competitive and engaging environment.`
    ],
    coordinators: [
      "J Neharika - 7893153725",
      "S Sathwik - 9014941863",
    ],
    icon: "💻",
    registration: {
      qr: qrHackathon,
      alerts: [
        "Entry Fee: ₹499 per team (1-4 members)",
        "Teams of 1-4 members",
        "Bring laptops , chargers if possible",
        "Must submit the payment screenshot and UTR/transaction ID",
        "If any fraud is found, registration will be cancelled and payment will not be refunded",
      ],
      formLink: "https://docs.google.com/forms/d/e/1FAIpQLSeT_A1uPL9pUjeqYLHTKFrHuhgaTXBDWDtf_dbhTO7ONAICqw/viewform?usp=header",
    },
  },

    ///// Time-Limited Coding /////
  {
    id: "time-limited-coding",
    title: "CodeRush – Time-limited coding competition",
    slug: "time-limited-coding",
    category: "technical",
    description: "Competitive programming challenge with time constraints. Solve algorithmic problems of varying difficulty in the shortest time. Speed and accuracy both matter!",
    date: "March 20, 2026",
    time: "10:00 AM - 1:00 PM",
    venue: "Online - Coding Platform( Hacker Rank )",
    prize: "> Online - (1st) rs. 700 | (2nd) rs. 300 > Offline - (1st) rs. 1000 | (2nd) rs. 700",
    coordinators: [
      "G samatha - 9398138395",
      "M rana sadiq - 9398548481",
    ],
    rules: [
      `💻 Code Rush – Coding Competition | PIXEL 2K26
Think fast. Code faster. Compete with the best!

🚀 Code Rush is an exciting coding competition designed to test participants’ logical thinking, programming skills, and problem-solving abilities. In this contest, participants will solve a set of programming challenges divided into three difficulty levels: Easy, Medium, and Hard.

Each level will challenge your ability to analyze problems, write efficient code, and solve them within a limited time. Participants will compete with other coders and try to solve as many problems as possible to climb the leaderboard.

This competition encourages creativity, speed, and accuracy in coding and is perfect for students who love programming and want to challenge their skills in a competitive environment.

📅 Event Date: 24th March 2026
📍 Venue: JNTUA College of Engineering, Anantapur
🧑‍💻 Participation: Individual
📝 Spot Registration: Available

🏆 Why Participate?
• Test your coding and problem-solving skills
• Compete with talented programmers
• Gain experience in real coding contests
• Win exciting prizes and recognition

📌 Competition Format:
1️⃣ Participants will solve coding problems during the contest
2️⃣ Problems will be divided into Easy, Medium, and Hard levels
3️⃣ Points will be awarded based on correct solutions and difficulty level
4️⃣ Participants with the highest score will rank on the leaderboard

⚠️ Rules:
• Individual participation only
• Participants must follow fair coding practices
• Any form of plagiarism or cheating will lead to disqualification
• Decisions by the organizers will be final`,
    ],
    icon: "⏱️",
    registration: {
      qr: qrTimeLimitedCoding,
      alerts: [
        "Registration fee:  Pre - Registration - ₹ 150",
        "Spot Registration  are available for Offline",
        "Individual participation only",
        "Online judge will be used — no external resources allowed",
        "Must submit the payment screenshot and UTR/transaction ID",
        "If any fraud is found, registration will be cancelled and payment will not be refunded",
      ],
      formLink: "https://docs.google.com/forms/d/e/1FAIpQLSe6r06fqmKjo1P8LHbWVFpd-p_RR-0Ho-inoznlkvGvLSoNGQ/viewform?usp=header",
    },
  },

    ///// Prompt 2Pixel /////
  {
    id: "prompt-event",
    title: "Prompt 2Pixel",
    slug: "prompt-event",
    category: "technical",
    description: "Master the art of database queries! Write complex SQL queries to solve real-world data problems. From basic SELECT to advanced joins and subqueries.",
    date: "March 27, 2026",
    time: "2:00 PM - 4:30 PM",
    venue: "Computer Lab 2, JNTUA Campus",
    prize: "₹6,000 (1st) | ₹3,500 (2nd) | ₹2,000 (3rd)",
    rules: [
      "Individual participation only",
      "MySQL/PostgreSQL syntax accepted",
      "3 rounds with increasing complexity",
      "Time-based scoring",
      "No reference materials allowed",
    ],
    icon: "🗃️",
    registration: {
      qr: qrPromtEvent,
      alerts: [
        "Registration fee: ₹100 per participant",
        "Individual participation only",
        "MySQL/PostgreSQL syntax accepted",
        "Must submit the payment screenshot and UTR/transaction ID",
        "If any fraud is found, registration will be cancelled and payment will not be refunded",
      ],
      formLink: "https://forms.gle/placeholder-sql-query-cracking",
    },
    
  },
  ///////////////Non-Technical Events////////////////

  ///// Free Fire Tournament /////
  {
    id: "free-fire",
    title: "Pixel Warzone - Free Fire Tournament",
    slug: "free-fire",
    category: "non-technical",
    description: "Battle it out in the ultimate Free Fire showdown! Squad-based tournament with multiple rounds. Show your gaming skills and strategy to win exciting prizes.",
    date: "March 20, 2026",
    time: "3:00 PM - 6:00 PM",
    venue: "Gaming Arena Online",
    prize: `SOLO MODE
Winner Prize: ₹300
Highest Kills Prize: ₹200

SQUAD MODE
Winner Prize: ₹800
Runner-Up Prize: ₹400`,
    rules: [
      `We are conducting matches in two gameplay modes in Garena Free Fire:

SOLO MODE
Entry Fee: ₹50 per player
Winner Prize: ₹300
Highest Kills Prize: ₹200`,
      `SQUAD MODE
Entry Fee: ₹200 per team (2-4 players allowed)
Winner Prize: ₹800
Runner-Up Prize: ₹400
Prize pool may increase if more teams register.`,

`Important Notes:
- All participants must follow fair play rules (no hacks, cheats, or emulators if restricted).
- Match details, room ID, and password will be shared with registered players before the event.
- The organizers' decision will be final in case of disputes.`,

`Gather your squad or fight solo and prove you have what it takes to dominate Pixel Warzone!
Register now and aim for the BOOYAH!`,
    ],
    coordinators: [
      "S Apsar - 9959791329",
      "N Karthik - 9014088846",
    ],
    icon: "🔥",
    registration: {
      qr: qrFreeFire,
      alerts: [
        "Entry fee: Team ₹200 per team (2-4 players), Solo Mode ₹50 per player",
        "Must submit the payment screenshot and UTR/transaction ID",
        "If any fraud is found, registration will be cancelled and payment will not be refunded",
      ],
      formLink: "https://forms.gle/placeholder-free-fire",
    },
  },

  ////// Photography Competition //////
  {
    id: "photography",
    title: "Pixel Lens - (Photography)",
    slug: "photography",
    category: "non-technical",
    description: "Capture the essence of campus life, nature, or the fest itself! Submit your best photographs and let your creativity shine through the lens.",
    date: "March 20, 2026",
    time: "All Day",
    venue: "Online Submission",
    prize: "Winning prize ₹500",
    coordinators: [
      "KR Harsha Vardhan - 7842711462",
      "C Shama Afreen - 9045620202",
    ],
    rules: [
      `How to Participate:
1) Pay the registration fee ₹49 online
2) Upload your photo to Google Drive or jpeg format
3) Send us the Drive link with your name
4) Provide your contact number and email ID
5) We will post your photo on our Instagram page with your name
6) The photo with the most likes wins!`,
      `Rules:
- Only one photo per participant
- Photo must be original
- Participants must provide valid contact details and email
- Mod/fake/bot accounts are strictly prohibited
- If fake likes or mod accounts are detected, the entry will be disqualified
- Last date for submission is 20th`,
    ],
    icon: "📸",
    registration: {
      qr: qrPhotography,
      alerts: [
        "Registration fee: ₹49 per participant",
        "Must submit the payment screenshot and UTR/transaction ID",
        "If any fraud is found, registration will be cancelled and payment will not be refunded",
      ],
      formLink: "https://docs.google.com/forms/d/e/1FAIpQLSdRbLJMEx3FSMzP2K_D8RyNw-QCUKkLYR5TO-yf_djmjiemNQ/viewform?usp=header",
    },
  },

  ///// Non-Tech Quiz //////
  {
    id: "non-tech-quiz",
    title: "Brain Buzzer - (Non-Tech Quiz)",
    slug: "non-tech-quiz",
    category: "non-technical",
    description: "General knowledge quiz covering current affairs, sports, entertainment, history, geography, and pop culture. Fun and intellectually stimulating!",
    date: "March 20, 2026",
    time: "2:00 PM - 4:00 PM",
    venue: "CSE Department, JNTUA College of Engineering Anantapur",
    prize: `🥇 1st Prize: ₹700 |🥈 2nd Prize: ₹500 | Certificate is awarded`,
    coordinators: [
      "G Keerthi - 8019664332",
      "R Ashok Kumar Naik - 9553203303",
    ],
    rules: [
      "💰 Entry Fee: ₹200",
      `🧠 Quiz Topics Include:
• Current Affairs
• Mythology
• Sports
• History and Politics
• Movies and Media
• Food and Literature
• Miscellaneous`,
      `Round 1:
• 30 questions
• Time limit: 20 minutes
• Participants who qualify will move to the next round`,
      `Round 2:
• Questions will be asked based on the quiz categories mentioned above
• Performance in this round will decide the top winners`,
      `General Rules:
    • Individual participation only
    • Participants must complete the quiz within the given time limit
    • Any form of malpractice will lead to disqualification`,
      "No electronic devices allowed",
      "Judge's decision is final",
    ],
    icon: "🧠",
    registration: {
      qr: qrNonTechQuiz,
      alerts: [
        "Registration fee: ₹200 per participant",
        "No electronic devices during the quiz",
        "Must submit the payment screenshot and UTR/transaction ID",
        "If any fraud is found, registration will be cancelled and payment will not be refunded",
      ],
      formLink: "https://docs.google.com/forms/d/e/1FAIpQLScOH9x3e6hd44dygvSaxhaRBWruw1PqXHQAIbdZHr-XmisBAA/viewform?usp=header",
    },
  },

    ///// Meme Competition //////
  {
    id: "meme-competition",
    title: "Meme Competition",
    slug: "meme-competition",
    category: "non-technical",
    description: "Create the funniest and most relatable memes! Topics will be given on the spot. Let your humor and creativity flow. Show your humor and win exciting prizes!",
    date: "March 20, 2026",
    time: "11:00 AM - 1:00 PM",
    venue: "Online Submission",
    prize: "Winning Prize: ₹400",
    coordinators: [
      "D Aparanji - 8317559716\n",
      "J Visweswara - 9392456174\n",
      "K Koushik - 8341412814",
      "V Sai Rishi kumar - 9390455681 \n",
    ],
    rules: [
      `Think you are the meme lord of your college? 👑  
Show your creativity and make everyone laugh!

⏰ Last Date to Register & Submit Meme: 20th March 2026

📢 Result Announcement: 23rd March 2026 

🏆 Winner Selection: Based on the highest number of likes on our Instagram post & Judges💰 

Entry Fee: ₹70 (Online payment only) 

 Winning Prize: ₹400`,

`📌 How to Participate:
1️⃣ Pay the registration fee ₹70 online 
2️⃣ Fill out the official Registration Google Form and upload your meme
3️⃣ Join the official participants' WhatsApp group using the link provided at the end of the form
4️⃣ Fill out the secondary Google form in the group to provide your Instagram handle 
5️⃣ We will post your meme on our Instagram page with your name
6️⃣ The meme with the most likes wins! & Judges`,

`⚠️ Rules:

• Only one meme per participant or team 
• Meme must be original and related to technology, coding, or college life
• Offensive, abusive, or plagiarized content is strictly prohibited 
• Mod / fake / bot accounts are strictly prohibited 
• If fake likes or bot accounts are detected, the entry will be disqualified 
• Last date for submission is 20th March 2026

💻 Participate now and showcase your meme-making skills!`
    ],
    icon: "😂",
    registration: {
      qr: qrMemeCompetition,
      alerts: [
        "Registration fee: ₹70 per participant",
        "Topics will be revealed on the spot",
        "No offensive or inappropriate content allowed",
        "Must submit the payment screenshot and UTR/transaction ID",
        "If any fraud is found, registration will be cancelled and payment will not be refunded",
      ],
      formLink: "https://docs.google.com/forms/d/e/1FAIpQLSdcITwq53TbchOuEYRI9Ky1McOI1xozc2ZKYrmljccGlN3xew/viewform?usp=header",
    },
  },

    ///// Chess Arena //////
  {
    id: "chess",
    title: "Chess Arena",
    slug: "chess",
    category: "non-technical",
    description: "An elite gathering of strategic minds, where every move shapes destiny and precision defines victory. Test your strategic thinking against the best minds. All skill levels welcome!",
    date: "March 20, 2026",
    time: "10:00 AM - 5:00 PM",
    venue: "Online - Chess.com",
    prize: "Winning prize ₹700",
    coordinators: [
      "G Praneeth Kumar - 8977740698\n",
      `G Lakshmi Prasanna - 9949768475`,
    ],
    rules: [
      `♟️ CHESS ARENA 2k26

Think fast, play smart, and prove your strategy in the ultimate chess battle!

🗓 Event Date: 20th March 2026
🎉 Event Fest: Pixel2K26
💻 Platform: Chess.com
⏱ Match Format: 3+0 Blitz
💰 Entry Fee: ₹100
🏆 Grand Prize: ₹700`,

`📌 About the Event:
Chess Arena is an exciting online chess competition organized as part of Pixel2K26, specially designed for players who are ready to test their skills, speed, and strategy. Compete against talented participants, make every move count, and fight your way to victory in this thrilling 3-minute chess format.`,
`🎯 Why Participate?
• Show your chess talent and strategic thinking
• Compete with other passionate players
• Experience the thrill of fast-paced online matches
• Win exciting prize money and recognition`,

`⚡ Game Details:
• Matches will be conducted on the Chess.com app
• Each game will follow a 3-minute time control
• Participants must join on time and be ready to play
• Fair play is strictly expected from all players`
    ],
    icon: "♟️",
    registration: {
      qr: qrChess,
      alerts: [
        "Registration fee: ₹100 per participant",
        "Individual participation only",
        "Must submit the payment screenshot and UTR/transaction ID",
        "If any fraud is found, registration will be cancelled and payment will not be refunded",
      ],
      formLink: "https://docs.google.com/forms/d/e/1FAIpQLSdMSEbOXyz-izNuL-9gWZPPsKDzBSMwI_JrzjQ3e_yZev2l-Q/viewform?usp=header",
    },
  },

    ///// Reel Competition //////
  {
    id: "reel-competition",
    title: "Reel Competition",
    slug: "reel-competition",
    category: "non-technical",
    description: "Create engaging and creative Instagram-style reels about college life, the fest, or given themes. Best reels with maximum creativity win!",
    date: "March 20, 2026",
    time: "Submit by 6:00 PM, March 27",
    venue: "Online Submission + JNTUA Campus",
    prize: "₹5,000 (1st) | ₹3,000 (2nd) | ₹2,000 (3rd)",
    rules: [
      `Welcome to the Reel Competition organized as part of PIXEL –CSE Department Fest 2026. 🎬
Participants are invited to showcase their creativity by creating engaging and innovative reels. The competition will be held on 24-03-2026.
Please fill out this form to register for the event. Make sure all the details provided are correct. Further instructions and rules will be shared with the registered participants.
Get ready to create, capture, and inspire! ✨`,
      "Individual or duo participation",
      "Reel duration: 30-90 seconds",
      "Must include #Pixel2026 hashtag",
      "No copyrighted music without license",
      "Judged on creativity, editing, and engagement",
    ],
    icon: "🎬",
    registration: {
      qr: qrReelCompetition,
      alerts: [
        "Registration fee: ₹100 per participant or duo",
        "Reel duration: 30–90 seconds",
        "Must include #Pixel2026 hashtag",
        "Submit by 6:00 PM on March 27",
      ],
      formLink: "https://forms.gle/placeholder-reel-competition",
    },
  },

      ///// BGMI Tournament //////  
  {
    id: "bgmi",
    title: "BGMI Tournament",
    slug: "bgmi",
    category: "non-technical",
    description: "Battlegrounds Mobile India tournament! Assemble your squad and compete in intense battle royale matches. Multiple rounds leading to the grand finale.",
    date: "March 20, 2026",
    time: "4:00 PM - 8:00 PM",
    venue: "Gaming Arena, JNTUA Campus",
    prize: `Highest Kills (₹400) | Chicken Dinner (₹300)`,
    rules: [
      `🔥 Get ready for an intense Battlegrounds Mobile India (BGMI) Tournament as part of PixelStack 2K26! Compete with the best players, showcase your gaming skills, and fight for exciting cash prizes.`,
      `⏰ Registration Open Now
      💰 Prize Pool:
      • Highest Kills – ₹400
      • Chicken Dinner – ₹300
      🎯 Entry Fee:
      • Squad Entry – ₹150
      • Solo Entry – ₹40`,
      "Emulators and triggers not allowed",
    ],
    coordinators: [
      "Rakesh - 9014142283",
      "Rana Sadiq - 939854848",
    ],
    icon: "🎮",
    registration: {
      qr: qrBgmi,
      alerts: [
        "Emulators and triggers are strictly not allowed",
        "Entry fee: Team ₹150 per team, Solo Mode ₹40 per player",
        "Must submit the payment screenshot and UTR/transaction ID",
        "If any fraud is found, registration will be cancelled and payment will not be refunded",
      ],
      formLink: "https://docs.google.com/forms/d/e/1FAIpQLSd5UoqKXB1GPcyU_o8bs7Re3E-FNglHSBfffJ1bDsdU7cRmQg/viewform?usp=header",
    },
  }
];

export const technicalEvents = events.filter((e) => e.category === "technical");
export const nonTechnicalEvents = events.filter((e) => e.category === "non-technical");
