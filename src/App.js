import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Events from './pages/Events';
import StudentAmbassador from './pages/StudentAmbassador';
import Sponsors from './pages/Sponsors';
import Footer from './components/Footer';
import TechEvent from './pages/TechEvent';


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
      date: 'null',
      time: 'null',
      prize:["null"], //Trophy + Certificate
      rules: [
        '1. The event will be conducted in three rounds . Preliminary, Secondary and Finale.',
        '2. Each team must have two members, they will be provided with question to solve.',
        '3. The teams that are able to pass each rounds will be promote to next with calculating the time taken to complete.',
        '4. The chosen option for all the question by the team members must be remember by the team members through out their last question.',
        '5. After completing all the questions the correctness of the answer chosen and the time taken to solve the question will be taken into the account and credits will be given .',
        '6. Total time given for both first and second round will be 15 mins . First, two rounds will have a five questions to solve and the time taken to solve each question is not particularly calculated but the total time(15 mins) is taken into the account.',
        '7. Final round consists of three questions and the total time allotted for this finale round is 10 mins.',
        '8.The time taken and correctness of answer in the finale will be awarded as winner followed by runner and second runner.',
        '9. Participants are excepted to maintain a respectful and good attitude throughout the event .Any form of cheating plagiarism or disruptive will result in immediate disqualification.',
        '10. By clearing outlining these rules and regulations you can ensure a fair and enjoyable event for all participants.',
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
      date: 'null',
      time: 'null',
      prize:["null"], //Trophy + Certificate
      rules: [
        '1. Two rounds will be conducted.',
        '2. Top 10 scorers from the first round will compete in the second round for top 3 positions.',
        '3. Each challenge has a pre-determined score.',
        "4. A participant's score depends on the number of test cases successfully passed.",
        '5. Participants are ranked by score.',
        '6. If two or more participants achieve the same score, then the tie is broken by the total time taken to submit the last solution resulting in a higher score.',
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
      date: 'null',
      time: 'null',
      prize:["null"], //Trophy + Certificate
      rules: [
        '1. It is an individual event where two rounds will be conducted.',
        '2. In the first round, technical topics written in a lot and on the spot,the given topic should be spoken for 3-5minutes.',
        '3. Top 10 scorers from the first round will qualify for second round.',
        '4. In the second round, general questions will be asked from the chosen topic from the lot(Questions may also be asked based on your answers). ',
        '5. The  best 3 candidates will be selected from the second round and the scores at each level will be added.',
        '6. The prizes will be distributed depending on the final score. ',
        '7. The decision of the judges will be the final.'
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
      date: 'null',
      time: 'null',
      prize:["null"], //Trophy + Certificate
      rules: [
        '1. Each team should have 2 participants.',
        '2. Only one device is allowed.',
        '3. Kahoot app should be installed in the device.',
        '4. If there is any connectivity error, The team will be eliminated.'
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
      date: 'null',
      time: 'null',
      prize:["null"], //Trophy + Certificate
      rules: [
        '1. The Team should consist of 4 members.',
        '2. The Event will be based on Basis Electrical and Electronics quizzes or riddles.',        
        '3. Find the clues,solve the riddles and discover the gem(Component).',        
        '4. Complete the Final circuit with the gem to win the Treasure .',        
        '5. This Event is based on time.Each team will be provided 5 minutes.'
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
      date: 'null',
      time: 'null',
      prize:["null"], //Trophy + Certificate
      rules: [
        '1. All should bring 1.5 litre bottle only.',
        '2. Best of 2 chance(distance base).',
        '3. Air pressure is about 80 psi.',
        '4. 2 members per team or single person in a team.'
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
      date: 'null',
      time: 'null',
      prize:["null"], //Trophy + Certificate
      rules: [
        '1. A team should consist of two members. ',
        '2. There will be two rounds. First round topics will be reveal two days before the event, kindly prepare the model. ',       
        '3. Based on the first round results, two teams per topic will be qualify for second round. ',
        '4. Second round will be the final round . ',
        '5. Participants are expected to maintain a respectful and good attitude throughout the event. Any form of cheating plagiarism or disruptive will result in immediate disqualification. ',
        '6. By clearing outlining these rules and regulations you can ensure a fair and enjoyable event for all participant.'
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
      date: 'null',
      time: 'null',
      prize:["null"], //Trophy + Certificate
      rules: [
        '1. Only individuals are allowed. No teams.',
        '2. Only Motors and batteries may be use. ',
        '3. Compulsorily bring your model.',
        '4. Based on the workload winner and runner up will be announced.',
        '5. Participants are expected to maintain a respectful and good attitude throughout the event. Any form of cheating plagiarism or disruptive will result in immediate disqualification. ',
        '6. By clearing outlining these rules and regulations you can ensure a fair and enjoyable event for all participant.'
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
      date: 'null',
      time: 'null',
      prize:["null"], //Trophy + Certificate
      rules: [
        '1.Maximum number of participants in a team is three.',
        '2.One person may not be a part of multiple teams for the same event.',
        '3.Paper should be in IEEE Format and should not exceed  15 pages.',
        '4.Kindly mail your soft copy of the paper document and ppt.The difficulties will be addressed through the same.Mail ID:',
        '5.The mail of the subject should contain:Title-Theme of the paper,team name and name of the authors.',
        '6.Presentations file must be in the .ppt format',
        '7.Hard copies should be submitted to the panel of judges before the starting of presentation enclosed in a stick file.',
        '8.The teams will get 10 minutes for presentation and followed by question and answer session.',
        '9.Last day to submit your soft copies of paper document and ppt (via email) will be a week prior of presentation (02.11.2023).',
        '10.The decision of the judges will be final and no arguments or appeal will be entertained.',
        '',
        '**Topics are general and free style.You can choose any topic for your presentation.'
      ],
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
      date: 'null',
      time: 'null',
      prize:["null"], //Trophy + Certificate
      rules: [
        '1.Minimum 2 maximum 4 members per team.',
        '2.The poster dimension should be 36 inches wide by 40 inches wide .',
        '3.Posters will be on display for the duration of conference.',
        '4.Presentation-5 min of duration.',
        '5.Topic of poster should be clearly mentioned at the top margin.'
      ],
      eventOrganizers: [
       
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
