
import { useState } from "react";
import axios from 'axios';
import "./App.css";
import Markdown from "react-markdown";
import logo from './assets/logo.png'

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);

  async function generateAnswer(e) {
    e.preventDefault();
    setGeneratingAnswer(true);
    setAnswer("Loading your answer... \n It might take up to 10 seconds");

    try {
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyBxg1M2U7k_uZshIoFYT-PcXBW8cDpPxbw",
        method: "post",
        data: {
          contents: [{ parts: [{ text: question }] }],
        },
      });

      console.log(response);
      setAnswer(response.data.candidates[0].content.parts[0].text);
    } catch (error) {
      console.log(error);
      setAnswer("Sorry - Something went wrong. Please try again!");
    }
    setGeneratingAnswer(false);
  }

  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 h-screen flex flex-col justify-center items-center">
      <form
        onSubmit={generateAnswer}
        className=" w-full md:w-2/3 lg:w-1/2  xl:w-1/2 text-center rounded-lg shadow-lg bg-white py-6 px-4 transition-all duration-500 transform hover:scale-105"
      >
        <a className="flex p-2 gap-4 justify-center items-center animate-bounce" href="/" target="_blank" rel="noopener noreferrer">
          <h1 className="text-4xl font-medium text-black-500 mb-4 ">Samvad.genai</h1>
          <img src={logo}height="50" width="50" alt="image " />
        </a>
        <textarea
          required
          className="border border-gray-300 rounded w-full my-2 min-h-fit p-3 transition-all duration-300 focus:border-blue-400 focus:shadow-lg"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask anything..."
        ></textarea>
        <button
          type="submit"
          className={`bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition-all duration-300 ${generatingAnswer ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={generatingAnswer}
        >
          Generate answer
        </button>
      </form>
      <div className="w-full overflow-auto whitespace-nowrap md:w-2/3 lg:w-1/2 xl:w-1/2  text-center rounded-lg bg-white my-4 shadow-lg transition-all duration-500 transform hover:scale-105">
        <Markdown className="p-4">{answer}</Markdown>
      </div>
    </div>
  );
}

export default App;


















// import { useState } from "react";
// import axios from 'axios';
// import "./App.css";
// import Markdown from "react-markdown";

// function App() {
// const [question, setquestion] = useState("");
// const [ans, setans] = useState("");
// const [generatingAnswer, setGeneratingAnswer] = useState(false);


//   async function generateanswer() {

//     setGeneratingAnswer(true);
//     e.preventDefault();

//     setans("Loading your answer... \n It might take upto 10 seconds");
  
//     try{
//     const response = await axios({
        
//         url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyBxg1M2U7k_uZshIoFYT-PcXBW8cDpPxbw",
       
//         method: "post",

//         data: { 
          
//           contents: [{ parts: [{ text: question }] }],
//        },
//       });
  
//      console.log(response); 
//       setans(response["data"]["candidates"][0]["content"]["parts"][0]["text"]  );
  
//     }catch(error){

//   console.log(error);
//   setans("Sorry - Something went wrong. Please try again!");

//     }
//   setGeneratingAnswer(false);

// }
 

  

//   return <>
  

//   <div className="bg-gradient-to-r from-blue-50 to-blue-100 h-screen p-3 flex flex-col justify-center items-center">
//     <form
//       onSubmit={ generateanswer}
//       className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 text-center rounded-lg shadow-lg bg-white py-6 px-4 transition-all duration-500 transform hover:scale-105"
//     >
//       <a href="/" target="_blank" rel="noopener noreferrer">
//         <h1 className="text-4xl font-bold text-blue-500 mb-4 animate-bounce">SKY AI</h1>
//       </a>
//       <textarea
//         required
//         className="border border-gray-300 rounded w-full my-2 min-h-fit p-3 transition-all duration-300 focus:border-blue-400 focus:shadow-lg"
//         value={question}
//         onChange={(e) => setquestion(e.target.value)}
//         placeholder="Ask anything................."
//       ></textarea>
//       <button
//         type="submit"
//         className={`bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition-all duration-300 ${
//           generatingAnswer ? 'opacity-50 cursor-not-allowed' : ''
//         }`}
//         disabled={generatingAnswer}
//       >
//         Generate answer
//       </button>
//     </form>
//     <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3  h-60 text-center rounded-lg bg-white my-4 shadow-lg transition-all duration-500 transform hover:scale-105">
//       <Markdown className="p-4">{ans}</Markdown>
//     </div>
//   </div>
  
//   </>;
// }

// export default App;
