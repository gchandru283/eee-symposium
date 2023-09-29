import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Events from './pages/Events';
import StudentAmbassador from './pages/StudentAmbassador';
import Sponsors from './pages/Sponsors';
import Footer from './components/Footer';
import TechEvent from './pages/TechEvent';
import NonTechEvent from './pages/NonTechEvent';


function App() {

  const eventsList = [
    {
      eventName: 'IQuid',
      eventDescription:'IQuid',
      id: 'tech-event-1',
      eventUrl:'/events/tech-event/1',
      type: 0,
      imgUrl: '/assets/techEvents/analogy-o-mania.jpeg',
      registrationLink: 'null',
      description: "IQuid is the most unique quest of all the events where all fields of engineering disciplines can participate in it. This event comprises various mathematical puzzles to solve in sequential stages with increasing difficulty of finding clues and some challenges for the human IO and memory in every stage to pass on. The person who cracks the overall twists and turns will top the event.",
      location: 'Main Campus',
      date: 'November 7',
      time: '9 am to 1 pm',
      prize:["Exciting prizes + Certificate"], //Trophy + Certificate
      rules: [
        'The event will be conducted in three rounds. Preliminary, Secondary and Finale.',
        'Each team must have two members, they will be provided with question to solve.',
        'The teams that are able to pass each rounds will be promote to next with calculating the time taken to complete.',
        'The chosen option for all the question by the team members must be remember by the team members through out their last question.',
        'After completing all the questions the correctness of the answer chosen and the time taken to solve the question will be taken into the account and credits will be given .',
        'Total time given for both first and second round will be 15 mins. First, two rounds will have a five questions to solve and the time taken to solve each question is not particularly calculated but the total time(15 mins) is taken into the account.',
        'Final round consists of three questions and the total time allotted for this finale round is 10 mins.',
        'The time taken and correctness of answer in the finale will be awarded as winner followed by runner and second runner.',
        'Participants are excepted to maintain a respectful and good attitude throughout the event .Any form of cheating plagiarism or disruptive will result in immediate disqualification.',
        'By clearing outlining these rules and regulations you can ensure a fair and enjoyable event for all participants.',
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
      registrationLink: 'null',
      description: 'A contest to find the master coder in the room. Participants are faced with challenges like, writing code, debugging code, understanding logic and rewriting code. Marks are rewarded as per difficulty level and difficulty increases through stages. Top three coders will be rewarded and the winner will snatch the title of "Mr. coder" and cash prize.',
      location: 'Main Campus',
      date: 'November 7',
      time: '9 am to 1 pm',
      prize:["Exciting prizes + Certificate"], //Trophy + Certificate
      rules: [
        'Two rounds will be conducted.',
        'Top 10 scorers from the first round will compete in the second round for top 3 positions.',
        'Each challenge has a pre-determined score.',
        "A participant's score depends on the number of test cases successfully passed.",
        'Participants are ranked by score.',
        'If two or more participants achieve the same score, then the tie is broken by the total time taken to submit the last solution resulting in a higher score.',
        '',
        '**(Note- everyone must have a hacker rank account for participating in the contest.)'
      ],
      eventOrganizers: [
      
      ]
    },

    {
      eventName: 'TechnoTalk',
      eventDescription:'TechnoTalk',
      id: 'tech-event-3',
      eventUrl:'/events/tech-event/3',
      type: 0,
      imgUrl: '/assets/techEvents/techno-talk.jpeg',
      registrationLink: 'null',
      description: "Techno talk are the talks that focus on explaining various aspects of technology, innovations,or emerging technologies. Techno talk examines the current trends and make predictions about the future technology. It includes a Q&A session for  further knowledge.",
      location: 'Main Campus',
      date: 'November 7',
      time: '9 am to 1 pm',
      prize:["Exciting prizes + Certificate"], //Trophy + Certificate
      rules: [
        'It is an individual event where two rounds will be conducted.',
        'In the first round, technical topics written in a lot and on the spot,the given topic should be spoken for 3-5minutes.',
        'Top 10 scorers from the first round will qualify for second round.',
        'In the second round, general questions will be asked from the chosen topic from the lot(Questions may also be asked based on your answers.',
        'The  best 3 candidates will be selected from the second round and the scores at each level will be added.',
        'The prizes will be distributed depending on the final score.',
        'The decision of the judges will be the final.'
      ],
      eventOrganizers: [

      ]
    },

    {
      eventName: 'Analagy-O-Mania',
      eventDescription:'Analagy-O-Mania',
      id: 'tech-event-4',
      eventUrl:'/events/tech-event/4',
      type: 0,
      imgUrl: '/assets/techEvents/analagy-o-mania.jpeg',
      registrationLink: 'null',
      description: "A game of comparing science with nature. It's a kind of quiz game. All the participants are asked to install KAHOOT app, where the game will be conducted. The game will be conducted in 2 rounds. First round will be the easy round and the second round will be the toughest round. Each participants will get scores for each questions they answer on the basis of the time taken to answer. The scores are added for each question and the team with highest scores will be the winner. ",
      location: 'Main Campus',
      date: 'November 7',
      time: '9 am to 1 pm',
      prize:["Exciting prizes + Certificate"], //Trophy + Certificate
      rules: [
        'Each team should have 2 participants.',
        'Only one device is allowed.',
        'Kahoot app should be installed in the device.',
        'If there is any connectivity error, The team will be eliminated.'
      ],
      eventOrganizers: [

      ]
    },

    {
      eventName: 'ElectroHunt',
      eventDescription:'ElectroHunt',
      id: 'tech-event-5',
      eventUrl:'/events/tech-event/5',
      type: 0,
      imgUrl: '/assets/techEvents/electro-hunt.png',
      registrationLink: 'null',
      description: "Teams with handmade water rockets compete against each other to find the best rocket among them. Top 3 Water rockets that perfectly manages the best aerodynamics, size to weight ratio and low wind drag would be rewarded",
      location: 'Main Campus',
      date: 'November 7',
      time: '9 am to 1 pm',
      prize:["Exciting prizes + Certificate"], //Trophy + Certificate
      rules: [
        'The Team should consist of 4 members.',
        'The Event will be based on Basis Electrical and Electronics quizzes or riddles.',        
        'Find the clues,solve the riddles and discover the gem(Component).',        
        'Complete the Final circuit with the gem to win the Treasure .',        
        'This Event is based on time.Each team will be provided 5 minutes.'
      ],
      eventOrganizers: [
        'Srihari Subramanian V - 9360149213',
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
      registrationLink: 'null',
      description: "Teams with handmade water rockets compete against each other to find the best rocket among them. Top 3 Water rockets that perfectly manages the best aerodynamics, size to weight ratio and low wind drag would be rewarded.",
      location: 'Main Campus',
      date: 'November 7',
      time: '9 am to 1 pm',
      prize:["Exciting prizes + Certificate"], //Trophy + Certificate
      rules: [
        'All should bring 1.5 litre bottle only.',
        'Best of 2 chance(distance base).',
        'Air pressure is about 80 psi.',
        '2 members per team or single person in a team.'
      ],
      eventOrganizers: [

      ]
    },

    {
      eventName: ' Deri D- Modula ',
      eventDescription:' Deri D- Modula ',
      id: 'tech-event-7',
      eventUrl:'/events/tech-event/7',
      type: 0,
      imgUrl: '/assets/techEvents/deri-d-modula.jpeg',
      registrationLink: 'null',
      description: "CAD modeling is the process of using specialized computer software to create precise digital representations of objects or systems. It involves designing and defining shapes, dimensions, and properties in a virtual environment, revolved, or manipulated to create 3D models. CAD modeling is crucial for accurate visualization, analysis, simulation, and prototyping of designs in various industries, ensuring efficiency and precision in the product development cycle.",
      location: 'Main Campus',
      date: 'November 7',
      time: '9 am to 1 pm',
      prize:['null'], //Trophy + Certificate
      rules: [
        'A team should consist of two members. ',
        'There will be two rounds. First round topics will be reveal two days before the event, kindly prepare the model. ',       
        'Based on the first round results, two teams per topic will be qualify for second round. ',
        'Second round will be the final round . ',
        'Participants are expected to maintain a respectful and good attitude throughout the event. Any form of cheating plagiarism or disruptive will result in immediate disqualification. ',
        'By clearing outlining these rules and regulations you can ensure a fair and enjoyable event for all participant.'
      ],
      eventOrganizers: [
        'Kabilan D - 8903357414',
        'Viswa S - 9345315673'
      ]
    },

    {
      eventName: 'Recycle and Reinvent',
      eventDescription:'Recycle and Reinvent',
      id: 'tech-event-8',
      eventUrl:'/events/tech-event/8',
      type: 0,
      imgUrl: '/assets/techEvents/recycle-reinvent.jpeg',
      registrationLink: 'null',
      description: '"Recycle and reinvent" is a concept that encourages the recycling of materials and the creative reinvention of existing products or objects. It involves taking items that are no longer in their original form or have served their primary purpose and finding new ways to use them or giving them a fresh, innovative purpose.',
      location: 'Main Campus',
      date: 'November 7',
      time: '9 am to 1 pm',
      prize:["Exciting prizes + Certificate"], //Trophy + Certificate
      rules: [
        'Only individuals are allowed. No teams.',
        '2. Only Motors and batteries may be use. ',
        '3. Compulsorily bring your model.',
        '4. Based on the workload winner and runner up will be announced.',
        ' Participants are expected to maintain a respectful and good attitude throughout the event. Any form of cheating plagiarism or disruptive will result in immediate disqualification. ',
        ' By clearing outlining these rules and regulations you can ensure a fair and enjoyable event for all participant.'
      ],
      eventOrganizers: [
        'Kabilan D - 8903357414',
        'Clara J - 8778289527'
      ]
    },

    {
      eventName: 'Papier Presentella',
      eventDescription:'Paper Presentation',
      id: 'tech-event-9',
      eventUrl:'/events/tech-event/9',
      type: 0,
      imgUrl: '/assets/techEvents/papier-presentella.jpeg',
      registrationLink: 'null',
      description: 'Paper presentations are a way to communicate research findings, insights, or ideas to an audience.They are typically delivered in front of an audience that may consist of peers, experts,or colleagues interested in topic. They usually follow a structured format.  After presentation there is usually a Q&A session for clarifications.',
      location: 'Main Campus',
      date: 'November 7',
      time: '9 am to 1 pm',
      prize:["Exciting prizes + Certificate"], //Trophy + Certificate
      rules: [
        'Maximum number of participants in a team is three.',
        'One person may not be a part of multiple teams for the same event.',
        'Paper should be in IEEE Format and should not exceed  15 pages.',
        'Kindly mail your soft copy of the paper document and ppt.The difficulties will be addressed through the same.Mail ID:',
        'The mail of the subject should contain:Title-Theme of the paper,team name and name of the authors.',
        'Presentations file must be in the .ppt format',
        'Hard copies should be submitted to the panel of judges before the starting of presentation enclosed in a stick file.',
        'The teams will get 10 minutes for presentation and followed by question and answer session.',
        'Last day to submit your soft copies of paper document and ppt (via email) will be a week prior of presentation (02.11.2023).',
        'The decision of the judges will be final and no arguments or appeal will be entertained.',
      ],
      note: ["**Topics are general and free style.You can choose any topic for your presentation."],
      eventOrganizers: [
       
      ]
    },

    {
      eventName: 'Poster Presentella',
      eventDescription:'Poster Presentation',
      id: 'tech-event-10',
      eventUrl:'/events/tech-event/10',
      type: 0,
      imgUrl: '/assets/techEvents/poster-presentation.jpeg',
      registrationLink: 'null',
      description: 'A way to communicate your research or your understanding of a topic in a concise and visually engaging format.',
      location: 'Main Campus',
      date: 'November 7',
      time: '9 am to 1 pm',
      prize:["Exciting prizes + Certificate"], //Trophy + Certificate
      rules: [
        'Minimum 2 maximum 4 members per team.',
        'The poster dimension should be 36 inches wide by 40 inches wide .',
        'Posters will be on display for the duration of conference.',
        'Presentation-5 min of duration.',
        'Topic of poster should be clearly mentioned at the top margin.'
      ],
      eventOrganizers: [
       
      ]
    },

    {
      eventName: 'FotoFlick',
      eventDescription:'FotoFlick - Photography',
      id: 'non-tech-event-1',
      eventUrl:'/events/non-tech-event/1',
      type: 1,
      imgUrl: '/assets/nontechEvents/fotoflick.jpeg',
      registrationLink: 'null',
      description: '',
      location: 'Main Campus',
      date: 'November 7',
      time: '2 pm to 6 pm',
      prize:["Exciting prizes + Certificate"], //Trophy + Certificate
      rules: [
        ''
      ],
      eventOrganizers: [
       
      ]
    },

    {
      eventName: 'Frenetic Fiesta',
      eventDescription:'Frenetic Fiesta - Dance',
      id: 'non-tech-event-2',
      eventUrl:'/events/non-tech-event/2',
      type: 1,
      imgUrl: '/assets/nontechEvents/dance.jpg',
      registrationLink: 'null',
      description: '',
      location: 'Main Campus',
      date: 'November 7',
      time: '2 pm to 6 pm',
      prize:["Exciting prizes + Certificate"], //Trophy + Certificate
      rules: [
        ''
      ],
      eventOrganizers: [
       
      ]
    },

    {
      eventName: 'Jokes on the Rocks',
      eventDescription:'Stand-up comedy',
      id: 'non-tech-event-3',
      eventUrl:'/events/non-tech-event/3',
      type: 1,
      imgUrl: '/assets/nontechEvents/stand-up.jpeg',
      registrationLink: 'null',
      description: '',
      location: 'Main Campus',
      date: 'November 7',
      time: '2 pm to 6 pm',
      prize:["Exciting prizes + Certificate"], //Trophy + Certificate
      rules: [
        ''
      ],
      eventOrganizers: [
       
      ]
    },

    {
      eventName: 'Euphony',
      eventDescription:'Euphony - Singing',
      id: 'non-tech-event-4',
      eventUrl:'/events/non-tech-event/4',
      type: 1,
      imgUrl: '/assets/nontechEvents/euphony.jpg',
      registrationLink: 'null',
      description: 'Euphony is a grand singing event which is a great platform to showcase their innate talent through their euphonious voice .The event can be either in the form of solo or group singing (Max 6 participants). So Participate and share your talent and gear yourself up for this exhilarating event.',
      location: 'Main Campus',
      date: 'November 7',
      time: '2 pm to 6 pm',
      prize:["Exciting prizes + Certificate"], //Trophy + Certificate
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
       'Rekshanambiga G-8072732246'
      ]
    },

    {
      eventName: 'Quizzathon',
      eventDescription:'Quizzathon - Quizite',
      id: 'non-tech-event-5',
      eventUrl:'/events/non-tech-event/5',
      type: 1,
      imgUrl: '/assets/nontechEvents/quizzathon.jpg',
      registrationLink: 'null',
      description: 'Are you ready to put your Knowledge to the Test ? Join Us for an Exhilarating and Mind Boggling experience at QUIZZATHON where intellect and quick thinking take center stage. Get ready to answer questions that span a wide range of topics, from History, Science, Mathematics, Aptitude, Logical Reasoning, General Knowledge. Compete against other Brilliant Minds,proving that you have what it takes to be the ultimate quiz champion.',
      location: 'Main Campus',
      date: 'November 7',
      time: '2 pm to 6 pm',
      prize:["Exciting prizes + Certificate"], //Trophy + Certificate
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
      id: 'non-tech-event-6',
      eventUrl:'/events/non-tech-event/6',
      type: 1,
      imgUrl: '/assets/nontechEvents/picaso.png',
      registrationLink: 'null',
      description: '',
      location: 'Main Campus',
      date: 'November 7',
      time: '2 pm to 6 pm',
      prize:["Exciting prizes + Certificate"], //Trophy + Certificate
      rules: [
        ''
      ],
      eventOrganizers: [
       ''
      ]
    },

    {
      eventName: 'Go Rubix',
      eventDescription:'Go Rubix - Cube solving',
      id: 'non-tech-event-7',
      eventUrl:'/events/non-tech-event/7',
      type: 1,
      imgUrl: '/assets/nontechEvents/go-rubix.jpg',
      registrationLink: 'null',
      description: "Are you a speedcuber...? Then, here is the suitable platform you are searching for...! Unleash the  power of your mind with Rubik's cube...Twist, turn and solve the Rubik's cube puzzle...Let's cube it...! Join the Rubik's cube revolution!!!",
      location: 'Main Campus',
      date: 'November 7',
      time: '2 pm to 6 pm',
      prize:["Exciting prizes + Certificate"], //Trophy + Certificate
      rules: [
        'Only 3×3×3 cubes are allowed.',
        "All must bring their own Rubik's cube. No cubes will be provided here.",
        "Event organizers won't be responsible for any faults in the Rubik's cube.",
        'The cubes must not have any electronic components and any type of modifications.',
        'Minimum of 3 rounds will be conducted.',
        'The results will be declared on Time-basis [ Shortest Average Time ]',
        "'The judges' decision is final.",
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
      id: 'non-tech-event-8',
      eventUrl:'/events/non-tech-event/8',
      type: 1,
      imgUrl: '/assets/nontechEvents/snap-cinema.jpg',
      registrationLink: 'null',
      description: "Step into the spotlight and share your cinematic vision with the world. Snap Cinema Showcase invites creators of all levels to submit their short films. It's time to ignite the screen with your creativity!",
      location: 'Main Campus',
      date: 'November 7',
      time: '2 pm to 6 pm',
      prize:["Exciting prizes + Certificate"], //Trophy + Certificate
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
       'Akkash K - 96591 10292'
      ]
    },

    {
      eventName: 'Avant Garde',
      eventDescription:'Avant Garde - Fashion',
      id: 'non-tech-event-10',
      eventUrl:'/events/non-tech-event/10',
      type: 1,
      imgUrl: '/assets/nontechEvents/.jpg',
      registrationLink: 'null',
      description: "",
      location: 'Main Campus',
      date: 'November 7',
      time: '2 pm to 6 pm',
      prize:["Exciting prizes + Certificate"], //Trophy + Certificate
      rules: [
        ''
        
      ],
      events:[
        'Solo Performance',
        'Group Performance'        
      ],
      eventOrganizers: [
       ''
      ]
    },

    {
      eventName: 'Pantomimist',
      eventDescription:'Pantomimist - Mime',
      id: 'non-tech-event-9',
      eventUrl:'/events/non-tech-event/9',
      type: 1,
      imgUrl: '/assets/nontechEvents/pantomime.jpg',
      registrationLink: 'null',
      description: "Pantomime is a mime event. It is a theatrical technique of suggesting action, character or emotion without words, using only gesture, expression and movement.",
      location: 'Main Campus',
      date: 'November 7',
      time: '2 pm to 6 pm',
      prize:["Exciting prizes + Certificate"], //Trophy + Certificate
      rules: [
        'Group Performance: Maximum 8 members per team.',
        'Duration:4-5 minutes.',
        'Carry your own properties and things for the performance.',
        'Judges Decisions are Final.'
        
      ],
      events:[
        'Solo Performance',
        'Group Performance'        
      ],
      eventOrganizers: [
       'Nasir Hussain S - 9360447279',
       'Akkash K - 96591 10292'
      ]
    },
  ]


  return (
    <Router>
      <div>
        <Routes>
          <Route element={<Home/>} path="/" /> 
          <Route element={<Events eventsList={eventsList} />} path="/events" /> 
          <Route element={<Sponsors/>} path='/sponsors' />
          <Route element={<StudentAmbassador/>} path='/student-ambassador'/>
          <Route element={<Footer/>} path='/#contact'/>
          <Route element={<TechEvent eventDesc={eventsList[0]}/>} path='/events/tech-event/1'/>
          <Route element={<TechEvent eventDesc={eventsList[1]}/>} path='/events/tech-event/2'/>
          <Route element={<TechEvent eventDesc={eventsList[2]}/>} path='/events/tech-event/3'/>
          <Route element={<TechEvent eventDesc={eventsList[3]}/>} path='/events/tech-event/4'/>
          <Route element={<TechEvent eventDesc={eventsList[4]}/>} path='/events/tech-event/5'/>
          <Route element={<TechEvent eventDesc={eventsList[5]}/>} path='/events/tech-event/6'/>
          <Route element={<TechEvent eventDesc={eventsList[6]}/>} path='/events/tech-event/7'/>
          <Route element={<TechEvent eventDesc={eventsList[7]}/>} path='/events/tech-event/8'/>
          <Route element={<TechEvent eventDesc={eventsList[8]}/>} path='/events/tech-event/9'/>
          <Route element={<TechEvent eventDesc={eventsList[9]}/>} path='/events/tech-event/10'/>
          <Route element={<NonTechEvent eventDesc={eventsList[10]}/>} path='/events/non-tech-event/1'/>
          <Route element={<NonTechEvent eventDesc={eventsList[11]}/>} path='/events/non-tech-event/2'/>
          <Route element={<NonTechEvent eventDesc={eventsList[12]}/>} path='/events/non-tech-event/3'/>
          <Route element={<NonTechEvent eventDesc={eventsList[13]}/>} path='/events/non-tech-event/4'/>
          <Route element={<NonTechEvent eventDesc={eventsList[14]}/>} path='/events/non-tech-event/5'/>
          <Route element={<NonTechEvent eventDesc={eventsList[15]}/>} path='/events/non-tech-event/6'/>
          <Route element={<NonTechEvent eventDesc={eventsList[16]}/>} path='/events/non-tech-event/7'/>
          <Route element={<NonTechEvent eventDesc={eventsList[17]}/>} path='/events/non-tech-event/8'/>
          <Route element={<NonTechEvent eventDesc={eventsList[18]}/>} path='/events/non-tech-event/9'/>
          <Route element={<NonTechEvent eventDesc={eventsList[19]}/>} path='/events/non-tech-event/10'/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
