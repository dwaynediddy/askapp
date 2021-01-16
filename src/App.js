import './App.css';
import Chat from './components/chat'
import StarRating from './components/Rating'
import Review from './components/review'
import DatePicker from './components/Calander'

function App() {
  return (
    <div className="App">
      <h1>Date?</h1>
      <DatePicker />
      
      <Review />
      <StarRating />
      <Chat />


    </div>
  );
}

export default App;
