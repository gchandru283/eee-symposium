import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import Events from './pages/Events';
import StudentAmbassador from './pages/StudentAmbassador';
import Sponsors from './pages/Sponsors';
import EventPage from './pages/EventPage';
import Contact from './pages/Contact';


function App() {

  const eventsList = [
    {
      eventName: 'IQuid',
      eventDescription:'IQuid',
      id: 'tech-event-1',
      eventUrl:'/events/tech-event/1',
      type: 0,
      imgUrl: '/assets/techEvents/iquid.jpeg',
      registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSetSIslxOdMq2jtn_ljf7TXMJ-dx3FlJf2UYwxu-8gbsDZlqQ/viewform?usp=pp_url',
      description: "IQuid stands out as the most unique quest among all events, welcoming participants from diverse engineering disciplines. This event features a series of mathematical puzzles to solve in sequential stages, each escalating in difficulty. Challenges testing human IQ and memory are embedded in every stage. The individual who successfully navigates through the overall twists and turns will emerge as the event's champion!",
      location: 'Main Campus',
      date: 'November 7',
      time: '9 am to 1 pm',
      prize:["Exciting prizes + Certificate"],
      rules: [
        'The competition unfolds in three distinct phases: Preliminary, Secondary, and Finale.',
      'Teams progressing through each round will be contingent on their ability to navigate it successfully, with careful consideration given to the time taken.',
      'Each participating team, composed of two members, will tackle a variety of questions spanning mathematical, logical, and puzzles.',        
      'The selected options by team members must be retained throughout their final question. Upon completion of all questions, both correctness and time taken will be factors in determining earned credits.',
        
      "The first and second rounds grant a total time of 15 minutes. Each of these rounds includes five questions, and while the time per question isn't individually assessed, the overall time (15 minutes) is considered.",     
      'The finale round involves three questions, with a specified timeframe of 10 minutes.',        
      'Winners will be decided based on the time taken and correctness of answers in the final round, followed by the runner-up and second runner-up.',
      ],
      eventOrganizers: [
        'Viswa S - 9345315673',
        'Andro Mahilarasi D - 9080787620'
      ]
    },

    {
      eventName: 'Mr.Coder',
      eventDescription:'Mr.Coder',
      id: 'tech-event-2',
      eventUrl:'/events/tech-event/2',
      type: 0,
      imgUrl: '/assets/techEvents/mr-coder.jpeg',
      registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdVSOZuPuG5X5MpYnEYfWHoaj2tkgd8V96GKgoD-QLPR-EBTQ/viewform?usp=pp_url',
      description: 'A contest to find the master coder in the room. Participants are faced with challenges like, writing code, debugging code, understanding logic and rewriting code. Marks are rewarded as per difficulty level and difficulty increases through stages. Top three coders will be rewarded and the winner will snatch the title of "Mr. coder" and cash prize.',
      location: 'Main Campus',
      date: 'November 7',
      time: '9 am to 1 pm',
      prize:["Exciting prizes + Certificate"],
      rules: [
        'Two rounds will be conducted.',
        'Top 10 scorers from the first round will compete in the second round for top 3 positions.',
        'Each challenge has a pre-determined score.',
        "A participant's score depends on the number of test cases successfully passed.",
        'Participants are ranked by score.',
        'If two or more participants achieve the same score, then the tie is broken by the total time taken to submit the last solution resulting in a higher score.',
        ],
      note:['**(Note- everyone must have a hackerrank account for participating in the contest.)'],
      eventOrganizers: [
        'Akkash K - 9659110292',
        'Edward A - 6383210554'
      
      ]
    },

    {
      eventName: 'TechnoTalk',
      eventDescription:'TechnoTalk',
      id: 'tech-event-3',
      eventUrl:'/events/tech-event/3',
      type: 0,
      imgUrl: '/assets/techEvents/techno-talk.jpeg',
      registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeies7RHSRYasCfDyXvE3gRA8eLCfaw2qeW2d9ROlzcg5KXeg/viewform?usp=pp_url',
      description: "Techno talk are the talks that focus on explaining various aspects of technology, innovations,or emerging technologies. Techno talk examines the current trends and make predictions about the future technology. It includes a Q&A session for  further knowledge.",
      location: 'Main Campus',
      date: 'November 7',
      time: '9 am to 1 pm',
      prize:["Exciting prizes + Certificate"],
      rules: [
        'It is an individual event where two rounds will be conducted.',
        'In the first round, technical topics written in a lot and on the spot,the given topic should be spoken for 2-3 minutes.',
        'Top 10 scorers from the first round will qualify for second round.',
        'In the second round, general questions will be asked from the chosen topic from the lot (Questions may also be asked based on your answers).',
        'The  best 3 candidates will be selected from the second round and the scores at each level will be added.',
        'The prizes will be distributed depending on the final score.',
        'The decision of the judges will be the final.'
      ],
      eventOrganizers: [
        'Deepika P - 9345514731',
        'Rekshanambiga G - 8072732246'
      ]
    },

    {
      eventName: 'Analagy-O-Mania',
      eventDescription:'Analagy-O-Mania',
      id: 'tech-event-4',
      eventUrl:'/events/tech-event/4',
      type: 0,
      imgUrl: '/assets/techEvents/analagy-o-mania.jpeg',
      registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdNyU7JvYLKiguLpOz4it80dNuxT6tbOo4QO3gLI8zjo6GkUQ/viewform?usp=pp_url',
      description: "A game of comparing science with nature. It's a kind of quiz game. All the participants are asked to install KAHOOT app, where the game will be conducted. The game will be conducted in 2 rounds. First round will be the easy round and the second round will be the toughest round. Each participants will get scores for each questions they answer on the basis of the time taken to answer. The scores are added for each question and the team with highest scores will be the winner. ",
      location: 'Main Campus',
      date: 'November 7',
      time: '9 am to 1 pm',
      prize:["Exciting prizes + Certificate"],
      rules: [
        'Each team should have 2 participants.',
        'Only one device is allowed.',
        'Kahoot app should be installed in the device.',
        'If there is any connectivity error, The team will be eliminated.'
      ],
      eventOrganizers: [
        'Sudarsan S - 9003321969',
        'Vishnupriya V - 9941283045'
      ]
    },

    {
      eventName: 'ElectroHunt',
      eventDescription:'ElectroHunt',
      id: 'tech-event-5',
      eventUrl:'/events/tech-event/5',
      type: 0,
      imgUrl: '/assets/techEvents/electro-hunt.png',
      registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLScgz42-rupFAXp2GDZqLtj7yW9SuLlMrCPBRDKDRdrhejOISQ/viewform?usp=pp_url',
      description: "Electro hunt is a treasure hunt event based on electronic components, clues will be related to electronics and solving the clue will lead to a final component(eg. Resistor,capacitor,etc...). With that you will be completing the circuit. This is a technical event mixed with fun on time basis.",
      location: 'Main Campus',
      date: 'November 7',
      time: '9 am to 1 pm',
      prize:["Exciting prizes + Certificate"],
      rules: [
        'The Team should consist of 2 members.',
        'The Event will be based on Basis Electrical and Electronics quizzes or riddles.',        
        'Find the clues,solve the riddles and discover the gem(Component).',        
        'Complete the Final circuit with the gem to win the Treasure .',        
        'This Event is based on time.Each team will be provided 5 minutes.'
      ],
      eventOrganizers: [
        'Srihari V - 9360149213',
        'Suruthika S - 7598280648'
      ]
    },

    {
      eventName: 'Water Rocketry',
      eventDescription:'Water Rocketry',
      id: 'tech-event-6',
      eventUrl:'/events/tech-event/6',
      type: 0,
      imgUrl: '/assets/techEvents/water-rocketry.jpeg',
      registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSexMXMCRSoxqKs47vExb5q33UJpL-LCRvLtc-GAg7fI2YVNSg/viewform?usp=pp_url',
      description: "Teams with handmade water rockets compete against each other to find the best rocket among them. Top 3 Water rockets that perfectly manages the best aerodynamics, size to weight ratio and low wind drag would be rewarded.",
      location: 'Main Campus',
      date: 'November 7',
      time: '9 am to 1 pm',
      prize:["Exciting prizes + Certificate"],
      rules: [
        'All should bring 1.5 litre bottle only.',
        'Best of 2 chance(distance base).',
        'Air pressure is about 80 psi.',
        '2 members per team or single person in a team.'
      ],
      eventOrganizers: [
        'Vijayakumar B - 8220442736',
        'Dhinesh Kumar A - 7708416127',
        'Nareshkanth S - 8637663889'
      ]
    },

    {
      eventName: ' Drei D- Modula ',
      eventDescription:' Drei D- Modula ',
      id: 'tech-event-7',
      eventUrl:'/events/tech-event/7',
      type: 0,
      imgUrl: '/assets/techEvents/drei-d-modula.jpeg',
      registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfHsj6hKZP0Hf3jmN9yyUbtq_adEPQmeRKfPWoyj2y9wCrugg/viewform?usp=pp_url',
      description: "CAD modeling is the process of using specialized computer software to create precise digital representations of objects or systems. It involves designing and defining shapes, dimensions, and properties in a virtual environment, revolved, or manipulated to create 3D models. CAD modeling is crucial for accurate visualization, analysis, simulation, and prototyping of designs in various industries, ensuring efficiency and precision in the product development cycle.",
      location: 'Main Campus',
      date: 'November 7',
      time: '9 am to 1 pm',
      prize:['Exciting prizes + Certificate'],
      rules: [
        'A team should consist of two members. ',
        'There will be two rounds. First round topics are,<br>&nbsp; &nbsp; &nbsp; i. Drone <br> &nbsp; &nbsp;&nbsp; ii. Electric Machines <br> &nbsp; &nbsp; iii. Indoor Robotics<br> kindly prepare the model. ',       
        'Based on the first round results, two teams per topic will be qualify for second round. ',
        'Second round will be the final round . ',
        'Participants are expected to maintain a respectful and good attitude throughout the event. Any form of cheating plagiarism or disruptive will result in immediate disqualification. ',
        'By clearing outlining these rules and regulations you can ensure a fair and enjoyable event for all participant.'
      ],
      eventOrganizers: [
        'Kabilan D - 8903357414',
        'Dharrun singh M - 8637664377'
      ]
    },

    {
      eventName: 'Recycle and Reinvent',
      eventDescription:'Recycle and Reinvent',
      id: 'tech-event-8',
      eventUrl:'/events/tech-event/8',
      type: 0,
      imgUrl: '/assets/techEvents/recycle-reinvent.jpeg',
      registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLScvJZ0s2MFd6qPcJMv75BlNTuCnzlOzhpu7w68cXyp5RDhZYw/viewform?usp=pp_url',
      description: '"Recycle and reinvent" is a concept that encourages the recycling of materials and the creative reinvention of existing products or objects. It involves taking items that are no longer in their original form or have served their primary purpose and finding new ways to use them or giving them a fresh, innovative purpose.',
      location: 'Main Campus',
      date: 'November 7',
      time: '9 am to 1 pm',
      prize:["Exciting prizes + Certificate"], 
      rules: [
        'A team should compulsory consist 2 members',
        'Compulsorily bring your model.',
        'Based on the workload winner and runner up will be announced.',
        'Participants are expected to maintain a respectful and good attitude throughout the event. Any form of cheating plagiarism or disruptive will result in immediate disqualification. ',
        'By clearing outlining these rules and regulations you can ensure a fair and enjoyable event for all participant.'
      ],
      eventOrganizers: [
        'Kabilan D - 8903357414',
        'Abinesh P - 9003392453'
      ]
    },

    {
      eventName: 'Papier Presentella',
      eventDescription:'Paper Presentation',
      id: 'tech-event-9',
      eventUrl:'/events/tech-event/9',
      type: 0,
      imgUrl: '/assets/techEvents/papier-presentella.jpeg',
      registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLScm4eUtscNwRRa1zvpyuvfU6h2KCuip1w1ddb7sgouxeVMl5w/viewform?usp=pp_url',
      description: 'Paper presentations are a way to communicate research findings, insights, or ideas to an audience.They are typically delivered in front of an audience that may consist of peers, experts,or colleagues interested in topic. They usually follow a structured format.  After presentation there is usually a Q&A session for clarifications.',
      template:'https://drive.google.com/file/d/19ZXZtO5UMFQNXX4daFE02Ex8OSXp3dMx/view?usp=drivesdk',
      location: 'Main Campus',
      date: 'November 7',
      time: '9 am to 1 pm',
      mailId:'eknatechnicalevents@gmail.com',
      prize:["Exciting prizes + Certificate"],
      rules: [
        'Maximum number of participants in a team is three.',
        'One person may not be a part of multiple teams for the same event.',
        'Paper should be in IEEE Format and should not exceed  15 pages.',
        'Kindly mail your soft copy of the paper document and ppt.The difficulties will be addressed through the same Mail Id',
        'The mail of the subject should contain: Title-Theme of the paper,team name and name of the authors.',
        'Presentations file must be in the .ppt format',
        'Hard copies should be submitted to the panel of judges before the starting of presentation enclosed in a stick file.',
        'The teams will get 10 minutes for presentation and followed by question and answer session.',
        'Last day to submit your soft copies of paper document and ppt (via email) will be a week prior of presentation (02.11.2023).',
        'The decision of the judges will be final and no arguments or appeal will be entertained.',
      ],
      note: ["**Topics are general and free style. You can choose any topic for your presentation."],
      eventOrganizers: [
       'Roshan J - 9894462395',
       'Archana H - 6374847337',
       'Aishwarya P S - 8903018115',
       'Chakaravarthi K - 6384996685'
      ]
    },

    {
      eventName: 'Poster Presentella',
      eventDescription:'Poster Presentation',
      id: 'tech-event-10',
      eventUrl:'/events/tech-event/10',
      type: 0,
      imgUrl: '/assets/techEvents/poster-presentation.jpeg',
      registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSc0LleuBSJbswt60UnEZArRhwAEe5rCgHkFzI3qjNWD9cXPPA/viewform?usp=pp_url',
      description: 'A way to communicate your research or your understanding of a topic in a concise and visually engaging format.',
      location: 'Main Campus',
      date: 'November 7',
      time: '9 am to 1 pm',
      prize:["Exciting prizes + Certificate"],
      themes:[' Free style ideas'],
      rules: [
        'Minimum 2 maximum 4 members per team.',
        'The poster dimension should be 11.7 x 16.5 inches (A3).',
        'Poster will be displayed during the conference.',
        'The team will get 5 mins for presentation.',
        'Topic of poster should be clearly mentioned at the top margin.',
        'Font size should be large enough.Normal text should be no smaller than 20 pt.Texts in plots and figures should also be atleast 20 pt.500 words is a good poster length.',
        'Use italics instead of underlining.Keep graphs clean and simple.',
        'Graph, table and diagram should be atleast 20×25cm.',
        'Kindly mail your soft copy of the poster via email.Last date to submit your soft copy of poster is 04.11.2023.',
        'The poster should be easily read from 1-2 meters distance away.'
      ],
      eventOrganizers: [
       'Harish S - 9345329412',
       'Griffin B - 7010373305'
      ],
      note: ["*Kindly mail your soft copy to the below address."],
      mailId :'eknatechnicalevents@gmail.com'
    },

    {
      eventName: 'J-Peg Jury',
      eventDescription:'J-Peg Jury - Photography',
      id: 'non-tech-event-1',
      eventUrl:'/events/non-tech-event/1',
      type: 1,
      imgUrl: '/assets/nontechEvents/Jpeg-jury.jpg',
      registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSf_XkdERg4Q24IoUchtPphSKpqSlrOeywY8aM0PkgeUOl38XQ/viewform?usp=pp_url',
      description: "Join us for 'J-Peg Jury', where every click tells a story! Immerse yourself in capturing moments and freezing emotions. Let your captured moments and emotions speak for themselves and for yourself. Share your unique perspective with fellow photography enthusiasts. Unleash your creativity and create memories that will last a lifetime.",
      location: 'Main Campus',
      date: 'November 7',
      time: '2 pm to 6 pm',
      prize:["Exciting prizes + Certificate"],
      rules: [
        ' Edit should be subtle.(colour grading only).',
        ' You may be asked to explain how you enjoyed taking the shot. ',
        ' Photo should be in .jpg format, ',
        " No of participant's : Solo participant's with one photograph(individual).",
        ' Photos can be sent using the following methods along with your necessary details.',
      ],
      themes :[ 'Vintage retro',
                'Street Photography',
                'Manmade Forest ',
                'Sports',
                'Macro',
                'Wildlife',
                'Women empowerment',
                'Night photography',],
      note:['WhatsApp : 9360298785','Email Id : yuvasyad1250@gmail.com'],
      eventOrganizers: [
       'Sachin N - 9360298785',
       'Yuvaraj S - 9790239512'
      ]
    },

    {
      eventName: 'Solo Steale',
      eventDescription:'Solo Steale - Solo Dance',
      id: 'non-tech-event-2',
      eventUrl:'/events/non-tech-event/2',
      type: 1,
      imgUrl: '/assets/nontechEvents/solo-steale.jpg',
      registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSePOnVDcR5pLXvK_2SXTpceQF2Gab9ojKABGi0Tts0CvO330A/viewform?usp=pp_url',
      description: "Solo dance is a beautiful expression of self; it's a conversation between body and soul.Solo dance refers to a dance performance in which a single dancer or performer dances alone, without the presence of a partner or a group of dancers . It allows the dancer to showcase their individual skills, creativity, and expression through movement without the need for synchronization with others. Solo dance performances are often seen in dance competitions, recitals, and as part of professional dance routines.",
      location: 'Main Campus',
      date: 'November 7',
      time: '2 pm to 6 pm',
      prize:["Exciting prizes + Certificate"],
      rules: [
        'Any style of Dance is allowed to perform.',
        'Maximum timing 3 minutes.',
        'Bring your own sound track to perform.',
        'Properties will be used.',
        'No vulgarity in music, performance and costumes.',
        'Judges decision will be final.'
      ],
      eventOrganizers: [
       'Sneha K - 7806889146',
       'Kalaiselvam G - 8778790392',
       'Ramkumar A - 9344093084',
      ]
    },

    {
      eventName: 'Rythmic Squad',
      eventDescription:'Rythmic Squad - Group Dance',
      id: 'non-tech-event-3',
      eventUrl:'/events/non-tech-event/3',
      type: 1,
      imgUrl: '/assets/nontechEvents/rythmic-squad.jpg',
      registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLScW9MiWSHxkBfBU_4HZMrHy85qKTe9KMzY1zVqDzGTZ-K1HUg/viewform?usp=pp_url',
      description: ' Rythmic Squad is a group dance contest , where the dance troops perform synchronised level of Grace and expression . You are welcomed to showcase your rich creativity in dance',
      location: 'Main Campus',
      date: 'November 7',
      time: '2 pm to 6 pm',
      prize:["Exciting prizes + Certificate"],
      rules: [
        'Team consist of minimum 5 participants and maximum upto 10 participants.',
        'Any style of dance is allowed.',
        'Maximum timing 5 minutes.',
        'No vulgarity in music, performance and costumes.',
        'Bring your own sound tracks.',
        'Judges decision will be final.'
      ],
      eventOrganizers: [
       'Sneha K - 7806889146',
       'Kalaiselvam G - 8778790392',
       'Ramkumar A - 9344093084'
      ]
    },
    {
      eventName: 'Tango Tippers',
      eventDescription:'Tango Tippers - Free Style',
      id: 'non-tech-event-4',
      eventUrl:'/events/non-tech-event/4',
      type: 1,
      imgUrl: '/assets/nontechEvents/tango-tippers.jpg',
      registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfCYY4ftAgjHodUKLfTAB1guXGfXZx2cXefv1UvBUr6rw3bdA/viewform?usp=pp_url',
      description: "Get ready to witness the mesmerizing world of freestyle dance at our upcoming competition! Our talented dancers will take the stage and express their creativity and emotions through the art of movement. From graceful contemporary to energetic hip-hop, our dancers will captivate you with their unique styles and storytelling abilities . Don't miss the chance to be part of this thrilling event and witness the magic of freestyle dance in action!",
      themes:['Folk dance','Western dance','Hip hop','Melody dance'],
      location: 'Main Campus',
      date: 'November 7',
      time: '2 pm to 6 pm',
      prize:["Exciting prizes + Certificate"],
      rules: [
        'Only Solo performance.',
        'Sound track will be played on the spot the participant will be perform.',
        'Maximum timing 2 minutes.',
        'Rounds<br>&nbsp; Round 1 - Prelims <br>&nbsp; Round 2 - Final',
        'No vulgarity in performance and costumes.',
        'Judges decision will be final.'
      ],
      eventOrganizers: [
       'Sneha K - 7806889146',
	     'Kalaiselvam G - 8778790392',
       'Ramkumar A - 9344093084'
      ]
    },

    {
      eventName: 'Jokes on the Rocks',
      eventDescription:'Jokes on the Rocks',
      id: 'non-tech-event-5',
      eventUrl:'/events/non-tech-event/5',
      type: 1,
      imgUrl: '/assets/nontechEvents/standup-comedy.jpg',
      registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdzO4AHtjKIZoaD1YEm9SyJQ0vLIbYGiRfBwUIJUmGkQAbu4A/viewform?usp=pp_url',
      description: 'Jokes on the rocks is a stand-up comedy event. It is an individual competition. Winner will be selected based on their content, fluency, sense of humour and spontaneity.',
      location: 'Main Campus',
      date: 'November 7',
      time: '2 pm to 6 pm',
      prize:["Exciting prizes + Certificate"],
      rules: [
        'Duration maximum 5 minutes.',
        'Avoid hate speech, offensive content, or material that may incite violence or discrimination. Comedy should entertain without causing harm.',
        'Decision of the judges will be final and binding.',
        'Languages allowed: Tamil and English.',
        'Negative marking for exceeding time limit.'
      ],
      eventOrganizers: [
       'Sri Ram Kumar E - 7558164331',
       'Hari Prasath R - 6384388654'
      ]
    },

    {
      eventName: 'Euphony',
      eventDescription:'Euphony - Singing',
      id: 'non-tech-event-6',
      eventUrl:'/events/non-tech-event/6',
      type: 1,
      imgUrl: '/assets/nontechEvents/euphony.jpg',
      registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSc4eSKkO990WhrhGiF0GTW4vRpIPK7wWEZ_sURzPAOFb_p31A/viewform?usp=pp_url',
      description: 'Euphony is a grand singing event which is a great platform to showcase their innate talent through their euphonious voice .The event can be either in the form of solo or group singing (Max 6 participants). So Participate and share your talent and gear yourself up for this exhilarating event.',
      location: 'Main Campus',
      date: 'November 7',
      time: '2 pm to 6 pm',
      prize:["Exciting prizes + Certificate"],
      rules: [
        'Duration of the song can be 3 to 4 minutes.',
        'The song can be either in the form of classical or western.',
        'Only Karaoke are allowed and so all are requested bring your karaoke in the Pendrive itself.',
        'The participants will be judged based on the Song selection, Voice quality, Rhythm and also based on their appeal to audience.',
        'Obscenity of any kind of activities is prohibited.',
        'Decision of the judges will be the final.',
        'The general guidelines and time constraints must be rigorously adhered in order to avoid participants disqualification.'
      ],
      eventOrganizers: [
       'Srenath S B - 6382688387',
       'Rekshanambiga G - 8072732246'
      ]
    },

    {
      eventName: 'Quizzathon',
      eventDescription:'Quizzathon - Quiz',
      id: 'non-tech-event-7',
      eventUrl:'/events/non-tech-event/7',
      type: 1,
      imgUrl: '/assets/nontechEvents/quizzathon.jpg',
      registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfwimZ_KSZ54JpAiTeFYqlMQ5_eEVJ0kN0EXjCzGG8q74vn1w/viewform?usp=pp_url',
      description: 'Are you ready to put your Knowledge to the Test ? Join Us for an Exhilarating and Mind Boggling experience at QUIZZATHON where intellect and quick thinking take center stage. Get ready to answer questions that span a wide range of topics, from History, Science, Mathematics, Aptitude, Logical Reasoning, General Knowledge. Compete against other Brilliant Minds,proving that you have what it takes to be the ultimate quiz champion.',
      location: 'Main Campus',
      date: 'November 7',
      time: '2 pm to 6 pm',
      prize:["Exciting prizes + Certificate"],
      rules: [
        'A Team should consist of Two Members.',
        'There will be Three rounds.Those who crack the First Round and Second Round Criteria shall attend the Third Round. Third Round will be the Final Deciding Round.',
        'First Round will be a Pen and Paper based round.Second Round will be conducted in Online mode through ‘Kahoot’ Mobile Application. Third Round will be revealed on the Spot.',
        'Participants are expected to maintain a respectful and sportsmanship attitude throughout the event. Any form of cheating, plagiarism or disruptive behavior will result in immediate disqualification.',
        'Participants must adhere to the designated time limits for each question or round.',
        'By clearly outlining these rules and regulations,you can ensure a fair and enjoyable event for all participants.'
      ],
      eventOrganizers: [
       'Andro Mahilarasi D - 9080787620',
       'Harishkumar R - 8098414353'
      ]
    },

    {
      eventName: 'Picasso',
      eventDescription:'Picasso - Modern art',
      id: 'non-tech-event-8',
      eventUrl:'/events/non-tech-event/8',
      type: 1,
      imgUrl: '/assets/nontechEvents/picaso.png',
      registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfj-yezggwmzFgZV74NURg7T7DDUkB8qPHKnWIfCYjKIdp80w/viewform?usp=pp_url',
      description: 'PICASSO is a modern art contest where the artists have chance to show their fantastic painting. Each participants will be given a time period of 1hour 30 minutes. Within the time period the participants can showcase their talent in modern art of any theme.',
      location: 'Main Campus',
      date: 'November 7',
      time: '2 pm to 6 pm',
      prize:["Exciting prizes + Certificate"],
      rules: [
        ' No of participants – 1',
        'Artwork can be abstract, still life, symbolism, cubism, landscape, portraits etc.',
        'Painting can also be on any drawing paper, charts or canvas.',
        'Artwork cannot be larger than A4 (8.3*11.7 in) size.',
        'Carry your own properties, things will not be provided here.',
        'Participants should explain their painting in front of judge.',
        'Judges decision are final.',
        'General rules & the time limits should be strictly followed.'
      ],
      eventOrganizers: [
       'Abishekkumar M - 9384908240',
       'Babu S - 9047989599',
       'Devi M - 9345682218'
      ]
    },

    {
      eventName: 'Go Rubix',
      eventDescription:'Go Rubix - Cube solving',
      id: 'non-tech-event-9',
      eventUrl:'/events/non-tech-event/9',
      type: 1,
      imgUrl: '/assets/nontechEvents/go-rubix.jpg',
      registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSczVPDUFOl7KysizMm4dcI8lXIjVZV7nHLa0P0wLm7eikUR2Q/viewform?usp=pp_url',
      description: "Are you a speedcuber...? Then, here is the suitable platform you are searching for...! Unleash the  power of your mind with Rubik's cube...Twist, turn and solve the Rubik's cube puzzle...Let's cube it...! Join the Rubik's cube revolution!!!",
      location: 'Main Campus',
      date: 'November 7',
      time: '2 pm to 6 pm',
      prize:["Exciting prizes + Certificate"],
      rules: [
        'Only 3×3×3 cubes are allowed.',
        "All must bring their own Rubik's cube. No cubes will be provided here.",
        "Event organizers won't be responsible for any faults in the Rubik's cube.",
        'The cubes must not have any electronic components and any type of modifications.',
        'Minimum of 3 rounds will be conducted.',
        'The results will be declared on Time-basis [ Shortest Average Time ]',
        "The judges decision is final.",
        'Violation of the above rules might end in disqualification from the event.'
      ],
      eventOrganizers: [
       'Akash G - 6385858415',
       'Vinil H - 8072812182'
      ]
    },

    {
      eventName: 'Snap Cinema',
      eventDescription:'Snap Cinema - Short film',
      id: 'non-tech-event-10',
      eventUrl:'/events/non-tech-event/10',
      type: 1,
      imgUrl: '/assets/nontechEvents/snap-cinema.jpg',
      registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdwxdqecq_qL3tqTyjLYWY3Z0FLSPekOZ7TzrX1V1CboISKDg/viewform?usp=pp_url',
      description: "Step into the spotlight and share your cinematic vision with the world. Snap Cinema Showcase invites creators of all levels to submit their short films. It's time to ignite the screen with your creativity!",
      location: 'Main Campus',
      mailId:'akkashk08@gmail.com',
      date: 'November 7',
      time: '2 pm to 6 pm',
      prize:["Exciting prizes + Certificate"],
      rules: [
        'Duration: Maximum 10 minutes.',
        'Any theme of your content.',        
        'No vulgarity in your videos.',        
        'Videos should be send before 3 days of the symposium.',
        'Judge decision are final.',
        'The snap cinema can be your own creative story'
      ],
      eventOrganizers: [
       'Nasir Hussain S - 9360447279',
       'Akkash K - 96591 10292',
       'Swathi E - 8148039757'
      ],
      note: ['* Video can be sent to the following Mail Id.'],
    },

    {
      eventName: 'Avant Garde',
      eventDescription:'Avant Garde - Fashion',
      id: 'non-tech-event-11',
      eventUrl:'/events/non-tech-event/11',
      type: 1,
      imgUrl: '/assets/nontechEvents/avant-garde.jpg',
      registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLScu8CcEmN7QWLlQoYNApOwaYpk3jGdhJnC-C-uinMN9bECp5Q/viewform?usp=pp_url',
      description: "“Avant Garde”, is a show that provides the platform for the fashion designers to showcase their work and skills. Let’s make the world fancy!",
      location: 'Main Campus',
      date: 'November 7',
      time: '2 pm to 6 pm',
      prize:["Exciting prizes + Certificate"],
      rules: [
        'Group Performance: Maximum: 10 participants',
		'Select any theme accordingly',
		'Carry your own props and costumes',
		'Bring your sound Track',
		'No vulgarity in music/costumes',
		'Judges decision are final',
		 'The general rules should be followed strictly otherwise the team or the person will get eliminated.'
        
      ],
      subEvents:[
        'Solo Performance',
        'Group Performance'        
      ],
      eventOrganizers: [
       'Ajay N - 9159719445',
       'Abinesh P - 9003392453',
       'Dhiksha M - 7708554304'
      ]
    },

    {
      eventName: 'Pantomime',
      eventDescription:'Pantomime - Mime',
      id: 'non-tech-event-12',
      eventUrl:'/events/non-tech-event/12',
      type: 1,
      imgUrl: '/assets/nontechEvents/pantomime.jpg',
      registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLScvyctZ4LqsC9sWkyNUzWwM3oTtz4euWGkoRh4o8J-1VFc9iw/viewform?usp=pp_url',
      description: "Pantomime is a mime event. It is a theatrical technique of suggesting action, character or emotion without words, using only gesture, expression and movement.",
      location: 'Main Campus',
      date: 'November 7',
      time: '2 pm to 6 pm',
      prize:["Exciting prizes + Certificate"],
      rules: [
        'Group Performance: Maximum 8 members per team.',
        'Duration: 4-5 minutes.',
        'Carry your own properties and things for the performance.',
        'Judges Decisions are Final.'
        
      ],
      subEvents: [
        'Solo Performance',
        'Group Performance'        
      ],
      eventOrganizers: [
       'Avinash S - 8610570814',
       'Kamesh M - 9786954854',
       'Kaviya S R - 9344677939'
      ]
    },
  ];

  const sponsors = [
    {
        sponsorName: '',
        sponsorLogo: '',
    },
    
  ];

  const mediaPartners = [
    {
        mediaPartnerName: '',
        mediaPartnerLogo: '',
    },
  ];



  return (
    <Router>
      
        <Routes>
        
          <Route element={<Home/>} path="/" /> 
          <Route element={<Events eventsList={eventsList} />} path="/events" /> 
          <Route element={<Sponsors sponsors={sponsors} mediaPartners={mediaPartners}/>} path='/sponsors' />
          <Route element={<StudentAmbassador/>} path='/student-ambassador'/>
          <Route element={<Contact/>} path='/contact' />
          <Route element={<EventPage eventDesc={eventsList[0]}/>} path='/events/tech-event/1'/>
          <Route element={<EventPage eventDesc={eventsList[1]}/>} path='/events/tech-event/2'/>
          <Route element={<EventPage eventDesc={eventsList[2]}/>} path='/events/tech-event/3'/>
          <Route element={<EventPage eventDesc={eventsList[3]}/>} path='/events/tech-event/4'/>
          <Route element={<EventPage eventDesc={eventsList[4]}/>} path='/events/tech-event/5'/>
          <Route element={<EventPage eventDesc={eventsList[5]}/>} path='/events/tech-event/6'/>
          <Route element={<EventPage eventDesc={eventsList[6]}/>} path='/events/tech-event/7'/>
          <Route element={<EventPage eventDesc={eventsList[7]}/>} path='/events/tech-event/8'/>
          <Route element={<EventPage eventDesc={eventsList[8]}/>} path='/events/tech-event/9'/>
          <Route element={<EventPage eventDesc={eventsList[9]}/>} path='/events/tech-event/10'/>
          <Route element={<EventPage eventDesc={eventsList[10]}/>} path='/events/non-tech-event/1'/>
          <Route element={<EventPage eventDesc={eventsList[11]}/>} path='/events/non-tech-event/2'/>
          <Route element={<EventPage eventDesc={eventsList[12]}/>} path='/events/non-tech-event/3'/>
          <Route element={<EventPage eventDesc={eventsList[13]}/>} path='/events/non-tech-event/4'/>
          <Route element={<EventPage eventDesc={eventsList[14]}/>} path='/events/non-tech-event/5'/>
          <Route element={<EventPage eventDesc={eventsList[15]}/>} path='/events/non-tech-event/6'/>
          <Route element={<EventPage eventDesc={eventsList[16]}/>} path='/events/non-tech-event/7'/>
          <Route element={<EventPage eventDesc={eventsList[17]}/>} path='/events/non-tech-event/8'/>
          <Route element={<EventPage eventDesc={eventsList[18]}/>} path='/events/non-tech-event/9'/>
          <Route element={<EventPage eventDesc={eventsList[19]}/>} path='/events/non-tech-event/10'/>
          <Route element={<EventPage eventDesc={eventsList[20]}/>} path='/events/non-tech-event/11'/>
          <Route element={<EventPage eventDesc={eventsList[21]}/>} path='/events/non-tech-event/12'/>
        </Routes>
      
 
    </Router>
  );
}

export default App;
