import type { IconType } from "react-icons";
import {
  FaBrain,
  FaBug,
  FaCamera,
  FaChessKnight,
  FaCircleInfo,
  FaCircleQuestion,
  FaFaceLaughBeam,
  FaFileLines,
  FaFire,
  FaGamepad,
  FaGavel,
  FaKeyboard,
  FaLaptopCode,
  FaListCheck,
  FaShieldHalved,
  FaStopwatch,
  FaTriangleExclamation,
  FaVideo,
  FaWandMagicSparkles,
} from "react-icons/fa6";

// To use a per-event QR: add the image to src/assets/, import it here,
// and assign it to that event's registration.qr field.
import qrPaperPresentation from "@/assets/Mythresh-payment-qr.jpeg";
import qrCodeDebugging from "@/assets/Mythresh-payment-qr.jpeg";
import qrFastFingers from "@/assets/Vaibhav-payment-qr.jpeg";
import qrTechnicalQuiz from "@/assets/Mythresh-payment-qr.jpeg";
import qrHackathon from "@/assets/Chethan-payment-qr.jpeg";
import qrTimeLimitedCoding from "@/assets/Chethan-payment-qr.jpeg";
import qrPromtEvent from "@/assets/Vaibhav-payment-qr.jpeg";
import qrFreeFire from "@/assets/Chethan-payment-qr.jpeg";
import qrPhotography from "@/assets/Hrishi-payment-qr.jpeg";
import qrNonTechQuiz from "@/assets/Harsha-payment-qr.jpeg";
import qrMemeCompetition from "@/assets/Hrishi-payment-qr.jpeg";
import qrChess from "@/assets/Harsha-payment-qr.jpeg";
import qrReelCompetition from "@/assets/Hrishi-payment-qr.jpeg";
import qrBgmi from "@/assets/Harsha-payment-qr.jpeg";

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
  icon: IconType;
  ruleIcon: IconType;
  coordinators?: string[];
  registration: EventRegistration;
}

const rawEvents: EventData[] = [
  ///////////////Technical Events////////////////

  ///// Paper Presentation /////
  {
    id: "paper-presentation",
    title: "TechSpark - (Paper Presentation)",
    slug: "paper-presentation",
    category: "technical",
    description:
      "The Technical Presentation Event is an intellectual and innovative platform where participants present their ideas, research, and knowledge on topics related to modern technology. Participants will prepare and present their topic using a PowerPoint presentation, explaining the concept, working principles, real-world applications, and future scope of the technology. This event promotes learning, creativity, and critical thinking while allowing participants to share their perspectives on how technology can shape the future.",
    date: "March 20, 2026",
    time: "10:00 AM - 1:00 PM",
    venue: "Computer Science Department, JNTUACEA Campus",
    prize: "winners: ₹1700 | Runners: ₹800",
    rules: [
      ` TechSpark 2026:
 Present your innovative ideas and showcase your technical knowledge!`,
      ` Pre-Register: 21th March 2026,Spot registrations are available
Pre-Registration Fee: ₹200 per team (1 member) | ₹300 per team (2 members) | ₹400 per team (3 or 4members)
 Winner Announcement: 24th March 2026
 Winner Selection: Based on how well participants impress the judges through explanation, clarity, and body language during the presentation
  winners:1700
        Runners:800`,

      ` Event Challenges:
1. Maximum 7 slides allowed (excluding the Thank You slide)
2. Maximum presentation time: 4 minutes
3. Slides should clearly explain the problem, solution, and impact of the idea
4. Participants must present their topic with clear explanation and confidence
5. Judges will evaluate content quality, presentation skills, and innovation`,

      ` How to Participate:
1. Register for the TechSpark paper presentation event
2. Prepare your presentation slides (PPT) according to the rules
3. Fill up the details which is asked in the Google forms. Only online payment is available 
4. Judges will evaluate your technical knowledge and communication skills
5. The best presentation will be selected as the winner`,

      ` Judges' decision will be final
 Participate now and showcase your technical creativity!`,
    ],
    coordinators: ["Hari Krishna : 6304069520 ", "B Vyshnavi : 9347464897 "],

    icon: FaFileLines,
    ruleIcon: FaListCheck,
    registration: {
      qr: qrPaperPresentation,
      alerts: [
        "Pre-Registration Fee: ₹200 per team (1 member) | ₹300 per team (2 members) | ₹400 per team (3 or 4members)",
        "Must submit the payment screenshot and UTR/transaction ID",
        "If any fraud is found, registration will be cancelled and payment will not be refunded",
      ],
      formLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSctKnrikKP9KwQZgtdVWpA5nj-cPQLX6hjqXYwNlJ8aZZK0Gw/viewform",
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
Entry Fee : ₹ 100 per Participant`,
      `Rules :

1. Participants will type on a standard keyboard with no specialized tools or aids.
2. Typing passages and tasks will be provided either on any typing website or any other platform like 'Typing Master',... based on availability.
3. Contestants must type the passages as quickly and accurately as possible.
4. The event is an individual competition,no teams allowed.
5. No external resources, references, or notes may be used.
6. Scores will be based on typing speed, accuracy, and completion time.`,
    ],
    coordinators: ["J Nithin Kumar : 8019729262 ", "S Sai Sahana : 8978460229"],
    icon: FaKeyboard,
    ruleIcon: FaListCheck,
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
    description:
      "Find and fix bugs in given code snippets across multiple programming languages. Test your debugging skills under pressure with tricky logical and syntax errors.",
    date: "March 20, 2026",
    time: "2:00 PM - 4:00 PM",
    venue: "Computer Science Department, JNTUACEA Campus",
    prize: " 1st Prize: ₹1200 |  2nd Prize: ₹800",
    rules: [
      ` Bug Busters – Debugging Competition
Test your debugging skills and win exciting prizes!`,
      ` About the Event:
Bug Busters is a technical debugging competition conducted as part of Pixel 2K26, where participants must identify and correct errors in C programming code snippets. The contest consists of 30 questions of different difficulty levels that test logical thinking and debugging ability.
 Registration Fee: ₹200
 Prizes:
 1st Prize: ₹1200
 2nd Prize: ₹800
 Certificates will be provided to all participants.`,

      ` Note: Food will be arranged for all participants.`,
      ` How to Participate:
1. Pay the ₹200 registration fee online
2. Fill out the Google Form with the required details
3. Report to the venue at least 30 minutes before the time informed in the WhatsApp group
 Event Format:
1. Participants will be given 30 buggy C code snippets
2. They only need to identify the error and write the corrected line (no need to rewrite the entire program)
3. The contest duration is 60 minutes`,

      ` Rules:
• Individual participation only
• Use of mobile phones or internet is strictly prohibited
• Any form of malpractice will lead to disqualification
• Judges’ decision will be final
 Join Bug Busters and showcase your debugging skills!`,
    ],
    coordinators: ["Sree Sai - 8142017489", "B Harikha - 8688021066"],
    icon: FaBug,
    ruleIcon: FaTriangleExclamation,
    registration: {
      qr: qrCodeDebugging,
      alerts: [
        "Registration fee: ₹200 per participant",
        "Must submit the payment screenshot and UTR/transaction ID",
        "If any fraud is found, registration will be cancelled and payment will not be refunded",
      ],
      formLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSeY5XMVgVY-h7K1plqc_hPw2JmEG7eR9EvugmuFM9xPIcbvcg/viewform",
    },
  },

  ///////// Technical Quiz //////////
  {
    id: "technical-quiz",
    title: "CODE QUEST - (Technical quiz)",
    slug: "technical-quiz",
    category: "technical",
    description:
      "Welcome to Code Quest, an exciting individual technical quiz challenge designed to test your knowledge, analytical thinking, and problem-solving skills in the field of Computer Science.",
    date: "March 20, 2026",
    time: "10:00 AM - 12:30 PM",
    venue: "Computer Science Department, JNTUACEA Campus",
    prize: " 1st Prize: ₹1000 | 2nd Prize: ₹800",
    rules: [
      `About the Event:
Welcome to Code Quest – The Ultimate Technical Quiz Challenge!
This exciting event is designed to test your knowledge in programming, computer science fundamentals, emerging technologies, logical reasoning, and general tech awareness. Participants will compete in a dynamic quiz environment that challenges both their technical knowledge and problem-solving skills. Whether you are passionate about coding, curious about technology, or love solving challenging questions, this quiz is the perfect platform to showcase your skills.`,

      ` Registration Fee: ₹200

 Prizes:
• 1st Prize: ₹1000
• 2nd Prize: ₹800
• Certificates will be provided to participants`,

      `Event Challenge:
Participants will face a set of engaging and thought-provoking questions from various technical domains. The challenge is designed to test technical knowledge, logical thinking, and quick decision-making ability in a competitive environment.`,

      ` How to Participate:
1. Pay the ₹200 registration fee online
2. Fill out the Google Form with the required details
3. Join the official participants’ WhatsApp group for updates and instructions
4. Report to the venue at least 30 minutes before the event time`,

      `Event Format:
• The quiz will consist of a set of technical questions
• Questions will be based on core Computer Science concepts
• Participants will compete individually and scores will determine the winners`,

      ` Rules:
• Individual participation only
• Use of mobile phones or internet during the quiz is not allowed
• Any form of malpractice will lead to disqualification
• Judges’ decision will be final

Get ready to challenge your mind and embark on the Code Quest!`,
    ],
    coordinators: [
      "P Chandra Likhitha - 9381075626",
      "J Swapnil Raj - 7569025667",
    ],

    icon: FaCircleQuestion,
    ruleIcon: FaCircleInfo,
    registration: {
      qr: qrTechnicalQuiz,
      alerts: [
        "Registration fee: ₹200",
        "No electronic devices allowed during the quiz",
        "Must submit the payment screenshot and UTR/transaction ID",
        "If any fraud is found, registration will be cancelled and payment will not be refunded",
      ],
      formLink:
        "https://docs.google.com/forms/d/e/1FAIpQLScnhju2AgGCbMW5AuHOWec-v-3U21zOkmq16eO3zaGui6DiCw/viewform?usp=header",
    },
  },

  ///////// Hackathon //////////
  {
    id: "hackathon",
    title: "Hackverse",
    slug: "hackathon",
    category: "technical",
    description:
      "We are excited to announce a 12-Hour Hackathon designed to encourage creativity, innovation, and teamwork among developers and tech enthusiasts. Participants will work together to build innovative web solutions within a limited time frame.",
    date: "March 20, 2026",
    time: "10:00 AM (Day 1) - 10:00 AM (Day 2)",
    venue:
      "Online (with final presentations at JNTUA CEA, Department of Computer Science and Engineering)",
    prize: "₹3,499",
    rules: [
      `Pixel Hackathon 2K26 is a 12-hour coding challenge where developers collaborate to build innovative web solutions. The event encourages creativity, problem-solving, and teamwork while giving participants an opportunity to showcase their technical skills.`,
      `Event Details

• Date: 22nd March 2026 
• Duration: 12 Hours (10:00 AM – 10:00 PM)
• Entry Fee: ₹499 per team`,

      `Team Size

• Each team can have 1 to 4 members only.`,

      `Hackathon Flow

• Kickoff Meeting – 9:00 AM`,

      `Rules and guidelines will be explained before the event begins.

• Around 10 problem statements will be released 1 hour before the hackathon starts.

• Teams will work on their projects during the 12-hour hackathon.

• At the end of the hackathon, teams will submit their project link and source code.

• Shortlisted teams will be invited to the venue — JNTUA CEA, Department of Computer Science and Engineering — for the final presentation and winner declaration.`,

      `Rules

• Projects must be original and developed during the hackathon.

• Pre-built or copied projects are not allowed.

• Teams must submit their source code and project link before the deadline.

• Plagiarism or cheating will lead to disqualification.

• Team members cannot be changed after registration.

• All teams must present their project in the final round if shortlisted.

• Late submissions will not be accepted.

• The organizing team’s decision will be final.`,

      `Prize

 First Prize: ₹3499

The prize money and winner certificate will be awarded on 24th at the JNTUA CEA, Department of Computer Science and Engineering.`,

      `Certificates

All participants who take part in the hackathon will receive participation certificates online.

 Join Pixel Hackathon 2K26 and build innovative web solutions!`,
    ],
    coordinators: ["J Neharika - 7893153725", "S Sathwik - 9014941863"],
    icon: FaLaptopCode,
    ruleIcon: FaShieldHalved,
    registration: {
      qr: qrHackathon,
      alerts: [
        "Entry Fee: ₹499 per team (1-4 members)",
        "Teams of 1-4 members",
        "Bring laptops , chargers if possible",
        "Must submit the payment screenshot and UTR/transaction ID",
        "If any fraud is found, registration will be cancelled and payment will not be refunded",
      ],
      formLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSeT_A1uPL9pUjeqYLHTKFrHuhgaTXBDWDtf_dbhTO7ONAICqw/viewform?usp=header",
    },
  },

  ///// Time-Limited Coding /////
  {
    id: "time-limited-coding",
    title: "CodeRush – Time-limited coding competition",
    slug: "time-limited-coding",
    category: "technical",
    description:
      "Competitive programming challenge with time constraints. Solve algorithmic problems of varying difficulty in the shortest time. Speed and accuracy both matter!",
    date: "March 20, 2026",
    time: "10:00 AM - 1:00 PM",
    venue: "Computer Science Department, JNTUACEA Campus",
    prize:
      "Online - (1st) rs. 700 | (2nd) rs. 300 > Offline - (1st) rs. 1000 | (2nd) rs. 700",
    coordinators: ["G samatha - 9398138395", "M rana sadiq - 9398548481"],
    rules: [
      ` Code Rush – Coding Competition | PIXEL 2K26
Think fast. Code faster. Compete with the best!`,

      ` Code Rush is an exciting coding competition designed to test participants’ logical thinking, programming skills, and problem-solving abilities. In this contest, participants will solve a set of programming challenges divided into three difficulty levels: Easy, Medium, and Hard.

Each level will challenge your ability to analyze problems, write efficient code, and solve them within a limited time. Participants will compete with other coders and try to solve as many problems as possible to climb the leaderboard.

This competition encourages creativity, speed, and accuracy in coding and is perfect for students who love programming and want to challenge their skills in a competitive environment.`,

      ` Event Date: 24th March 2026
 Venue: JNTUA College of Engineering, Anantapur
 Participation: Individual
 Spot Registration: Available`,

      `Entry fee:
Pre - Registration - rs.150
Spot Registration  are available for Offline`,

      ` Why Participate?
• Test your coding and problem-solving skills
• Compete with talented programmers
• Gain experience in real coding contests
• Win exciting prizes and recognition`,

      ` Competition Format:
1. Participants will solve coding problems during the contest
2. Problems will be divided into Easy, Medium, and Hard levels
3. Points will be awarded based on correct solutions and difficulty level
4. Participants with the highest score will rank on the leaderboard`,

      ` Rules:
• Individual participation only
• Participants must follow fair coding practices
• Any form of plagiarism or cheating will lead to disqualification
• Decisions by the organizers will be final`,
    ],

    icon: FaStopwatch,
    ruleIcon: FaGavel,
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
      formLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSe6r06fqmKjo1P8LHbWVFpd-p_RR-0Ho-inoznlkvGvLSoNGQ/viewform?usp=header",
    },
  },

  ///// Prompt 2Pixel /////
  {
    id: "prompt-event",
    title: "Prompt 2Pixel",
    slug: "prompt-event",
    category: "technical",
    description:
      "Prompt 2Pixel is an AI-based competition where participants use prompt engineering skills to generate creative images using Dreamstudio.ai. Write the best prompt, transform your ideas into visuals, and compete to create the most impressive AI-generated image.",
    date: "March 20, 2026",
    time: "2:00 PM - 4:30 PM",
    venue: "Computer Lab 2, JNTUA Campus",
    prize: "₹500 (1st) | ₹300 (2nd)",
    rules: [
      `Prompt 2Pixel is an AI-based competition where participants use prompt engineering skills to generate creative images using Dreamstudio.ai. Write the best prompt, transform your ideas into visuals, and compete to create the most impressive AI-generated image.`,
      `Entry Fee : ₹100 per participant`,
      `Prize : ₹500 (1st) , ₹300 (2nd).`,

      `Rules :
1)Individual participate only.
2)Participants will be given a blurred grayscale image and a theme, and they must recreate the image as accurately.
3)Internet search for prompts or copying from others is not allowed.
4)The generated image and prompt must be submitted before time ends.
5)Winners will be selected based on accuracy, creativity, and prompt quality.`,
    ],
    icon: FaWandMagicSparkles,
    ruleIcon: FaListCheck,
    registration: {
      qr: qrPromtEvent,
      alerts: [
        "Registration fee: ₹100 per participant",
        "Individual participation only",
        "Must submit the payment screenshot and UTR/transaction ID",
        "If any fraud is found, registration will be cancelled and payment will not be refunded",
      ],
      formLink: "https://forms.gle/g6soFWw7fxdpjjA96",
    },
  },
  ///////////////Non-Technical Events////////////////

  ///// Free Fire Tournament /////
  {
    id: "free-fire",
    title: "Pixel Warzone - Free Fire Tournament",
    slug: "free-fire",
    category: "non-technical",
    description:
      "Battle it out in the ultimate Free Fire showdown! Squad-based tournament with multiple rounds. Show your gaming skills and strategy to win exciting prizes.",
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
    coordinators: ["S Apsar - 9959791329", "N Karthik - 9014088846"],
    icon: FaFire,
    ruleIcon: FaShieldHalved,
    registration: {
      qr: qrFreeFire,
      alerts: [
        "Entry fee: Team ₹200 per team (2-4 players), Solo Mode ₹50 per player",
        "Must submit the payment screenshot and UTR/transaction ID",
        "If any fraud is found, registration will be cancelled and payment will not be refunded",
      ],
      formLink:
        "https://docs.google.com/forms/d/e/1FAIpQLScxr6_oI9_C6QBlLsryELIl_eYGJA1NfgkJasGxAlBo2rUiHQ/viewform?usp=header",
    },
  },

  ////// Photography Competition //////
  {
    id: "photography",
    title: "Pixel Lens - (Photography)",
    slug: "photography",
    category: "non-technical",
    description:
      "Capture the essence of campus life, nature, or the fest itself! Submit your best photographs and let your creativity shine through the lens.",
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
    icon: FaCamera,
    ruleIcon: FaCircleInfo,
    registration: {
      qr: qrPhotography,
      alerts: [
        "Registration fee: ₹49 per participant",
        "Must submit the payment screenshot and UTR/transaction ID",
        "If any fraud is found, registration will be cancelled and payment will not be refunded",
      ],
      formLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSdRbLJMEx3FSMzP2K_D8RyNw-QCUKkLYR5TO-yf_djmjiemNQ/viewform?usp=header",
    },
  },

  ///// Non-Tech Quiz //////
  {
    id: "non-tech-quiz",
    title: "Brain Buzzer - (Non-Tech Quiz)",
    slug: "non-tech-quiz",
    category: "non-technical",
    description:
      "General knowledge quiz covering current affairs, sports, entertainment, history, geography, and pop culture. Fun and intellectually stimulating!",
    date: "March 20, 2026",
    time: "2:00 PM - 4:00 PM",
    venue: "CSE Department, JNTUA College of Engineering Anantapur",
    prize: ` 1st Prize: ₹700 | 2nd Prize: ₹500 | Certificate is awarded`,
    coordinators: ["G Keerthi - 8019664332", "R Ashok Kumar Naik - 9553203303"],
    rules: [
      " Entry Fee: ₹200",
      ` Quiz Topics Include:
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
    icon: FaBrain,
    ruleIcon: FaCircleInfo,
    registration: {
      qr: qrNonTechQuiz,
      alerts: [
        "Registration fee: ₹200 per participant",
        "No electronic devices during the quiz",
        "Must submit the payment screenshot and UTR/transaction ID",
        "If any fraud is found, registration will be cancelled and payment will not be refunded",
      ],
      formLink:
        "https://docs.google.com/forms/d/e/1FAIpQLScOH9x3e6hd44dygvSaxhaRBWruw1PqXHQAIbdZHr-XmisBAA/viewform?usp=header",
    },
  },

  ///// Meme Competition //////
  {
    id: "meme-competition",
    title: "Meme Competition",
    slug: "meme-competition",
    category: "non-technical",
    description:
      "Create the funniest and most relatable memes! Topics will be given on the spot. Let your humor and creativity flow. Show your humor and win exciting prizes!",
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
      `Think you are the meme lord of your college?   
Show your creativity and make everyone laugh!

 Last Date to Register & Submit Meme: 20th March 2026

 Result Announcement: 23rd March 2026 

 Winner Selection: Based on the highest number of likes on our Instagram post & Judges 

Entry Fee: ₹50 (Online payment only) 

 Winning Prize: ₹400`,

      ` How to Participate:
1 Pay the registration fee ₹50 online 
2 Fill out the official Registration Google Form and upload your meme
3 Join the official participants' WhatsApp group using the link provided at the end of the form
4 Fill out the secondary Google form in the group to provide your Instagram handle 
5 We will post your meme on our Instagram page with your name
6 The meme with the most likes wins! & Judges`,

      ` Rules:

• Only one meme per participant or team 
• Meme must be original and related to technology, coding, or college life
• Offensive, abusive, or plagiarized content is strictly prohibited 
• Mod / fake / bot accounts are strictly prohibited 
• If fake likes or bot accounts are detected, the entry will be disqualified 
• Last date for submission is 20th March 2026

 Participate now and showcase your meme-making skills!`,
    ],
    icon: FaFaceLaughBeam,
    ruleIcon: FaTriangleExclamation,
    registration: {
      qr: qrMemeCompetition,
      alerts: [
        "Registration fee: ₹50 per participant",
        "Topics will be revealed on the spot",
        "No offensive or inappropriate content allowed",
        "Must submit the payment screenshot and UTR/transaction ID",
        "If any fraud is found, registration will be cancelled and payment will not be refunded",
      ],
      formLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSdcITwq53TbchOuEYRI9Ky1McOI1xozc2ZKYrmljccGlN3xew/viewform?usp=header",
    },
  },

  ///// Chess Arena //////
  {
    id: "chess",
    title: "Chess Arena",
    slug: "chess",
    category: "non-technical",
    description:
      "An elite gathering of strategic minds, where every move shapes destiny and precision defines victory. Test your strategic thinking against the best minds. All skill levels welcome!",
    date: "March 20, 2026",
    time: "10:00 AM - 5:00 PM",
    venue: "Online - Chess.com",
    prize: "Winning prize ₹700",
    coordinators: [
      "G Praneeth Kumar - 8977740698\n",
      `G Lakshmi Prasanna - 9949768475`,
    ],
    rules: [
      ` CHESS ARENA 2k26

Think fast, play smart, and prove your strategy in the ultimate chess battle!

 Event Date: 20th March 2026
 Event Fest: Pixel2K26
 Platform: Chess.com
 Match Format: 3+0 Blitz
 Entry Fee: ₹100
 Grand Prize: ₹700`,

      ` About the Event:
Chess Arena is an exciting online chess competition organized as part of Pixel2K26, specially designed for players who are ready to test their skills, speed, and strategy. Compete against talented participants, make every move count, and fight your way to victory in this thrilling 3-minute chess format.`,
      ` Why Participate?
• Show your chess talent and strategic thinking
• Compete with other passionate players
• Experience the thrill of fast-paced online matches
• Win exciting prize money and recognition`,

      ` Game Details:
• Matches will be conducted on the Chess.com app
• Each game will follow a 3-minute time control
• Participants must join on time and be ready to play
• Fair play is strictly expected from all players`,
    ],
    icon: FaChessKnight,
    ruleIcon: FaGavel,
    registration: {
      qr: qrChess,
      alerts: [
        "Registration fee: ₹100 per participant",
        "Individual participation only",
        "Must submit the payment screenshot and UTR/transaction ID",
        "If any fraud is found, registration will be cancelled and payment will not be refunded",
      ],
      formLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSdMSEbOXyz-izNuL-9gWZPPsKDzBSMwI_JrzjQ3e_yZev2l-Q/viewform?usp=header",
    },
  },

  ///// Reel Competition //////
  {
    id: "reel-competition",
    title: "Reel Competition",
    slug: "reel-competition",
    category: "non-technical",
    description:
      "Create engaging and creative Instagram-style reels about college life, the fest, or given themes. Best reels with maximum creativity win!",
    date: "March 20, 2026",
    time: "Submit by 6:00 PM, March 27",
    venue: "Online Submission + JNTUA Campus",
    prize: "Winning Prize: ₹400",
    rules: [
      `Show your creativity and win exciting prizes!`,
      ` Last Date to Register: 20th March 2026
 Result Announcement: 22nd March 2026
 Winner Selection: Based on the highest number of likes on our Instagram post
 Entry Fee: ₹50 (Online payment only)
 Winning Prize: ₹400`,
      ` How to Participate:
1. Pay the registration fee ₹50 online
2. Create a reel (maximum 30 seconds) based on your creativity
3. Upload the reel to Google Drive and share the drive link
4. Provide your Name, Contact Number, and Email ID
5. Our team will post your reel on our official Instagram page with your name
6. The reel with the highest number of likes wins!`,
      ` Rules:
• Only one reel per participant/team
• Reel duration must be within 30 seconds
• Content must be original and creative
• Negative, abusive, or trolling content is not allowed
• Participants must provide valid contact details and email
• Mod / fake / bot accounts are strictly prohibited
• If fake likes or mod accounts are detected, the entry will be disqualified
• Last date for submission is 20th March 2026
 Participate now and showcase your creativity!`,
    ],
    coordinators: ["Geetha - 6304821550\n", "Gowri Shankar - 7989009215"],
    icon: FaVideo,
    ruleIcon: FaListCheck,
    registration: {
      qr: qrReelCompetition,
      alerts: [
        "Registration fee: ₹50 per participant",
        "Individual participation only",
        "Must submit the payment screenshot and UTR/transaction ID",
        "If any fraud is found, registration will be cancelled and payment will not be refunded",
      ],
      formLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSfU4tdF7ZP9CyqHpGTrK6pGmXtRY6aAlQ6wm0y9PdQmktkBAg/viewform?usp=header",
    },
  },

  ///// BGMI Tournament //////
  {
    id: "bgmi",
    title: "BGMI Tournament",
    slug: "bgmi",
    category: "non-technical",
    description:
      "Battlegrounds Mobile India tournament! Assemble your squad and compete in intense battle royale matches. Multiple rounds leading to the grand finale.",
    date: "March 20, 2026",
    time: "4:00 PM - 8:00 PM",
    venue: "Gaming Arena, JNTUA Campus",
    prize: `Highest Kills (₹400) | Chicken Dinner (₹300)`,
    rules: [
      ` Get ready for an intense Battlegrounds Mobile India (BGMI) Tournament as part of PixelStack 2K26! Compete with the best players, showcase your gaming skills, and fight for exciting cash prizes.`,
      ` Registration Open Now
       Prize Pool:
      • Highest Kills – ₹400
      • Chicken Dinner – ₹300
       Entry Fee:
      • Squad Entry – ₹150
      • Solo Entry – ₹40`,
      "Emulators and triggers not allowed",
    ],
    coordinators: ["Rakesh - 9014142283", "Rana Sadiq - 939854848"],
    icon: FaGamepad,
    ruleIcon: FaShieldHalved,
    registration: {
      qr: qrBgmi,
      alerts: [
        "Emulators and triggers are strictly not allowed",
        "Entry fee: Team ₹150 per team, Solo Mode ₹40 per player",
        "Must submit the payment screenshot and UTR/transaction ID",
        "If any fraud is found, registration will be cancelled and payment will not be refunded",
      ],
      formLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSd5UoqKXB1GPcyU_o8bs7Re3E-FNglHSBfffJ1bDsdU7cRmQg/viewform?usp=header",
    },
  },
];

const normalizeRuleText = (text: string): string =>
  text
    .split("\n")
    .map((line) => line.trim())
    .map((line) => line.replace(/^(\d+)\s+/, "$1. "))
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

export const events: EventData[] = rawEvents.map((event) => ({
  ...event,
  rules: event.rules.map(normalizeRuleText),
}));

export const technicalEvents = events.filter((e) => e.category === "technical");
export const nonTechnicalEvents = events.filter(
  (e) => e.category === "non-technical",
);
