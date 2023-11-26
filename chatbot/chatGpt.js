const chatInput = document.querySelector("#chat-input");
const sendButton = document.querySelector("#send-btn");
const chatContainer = document.querySelector(".chat-container");

let userText = null;
const API_KEY ="";

const createElement = (html, className) => {
  //create new div and apply chat , specified class and set html content of div
  const chatDiv = document.createElement("div");
  chatDiv.classList.add("chat", className);
  chatDiv.innerHTML = html;
  return chatDiv;
  //return the created chat div
};

const getChatResponse = async (incomingChatDiv)=>{
    const API_URL="https://api.openai.com/v1/completions";
    const pElement =document.createElement("p");

    //defined the properties and data for the API request
    const requestOptions = {
        method:"POST",
        headers : {
            "Content-Type":"application/json",
            "Authorization":`Bearer ${API_KEY}`
        },
        body:JSON.stringify({
            "model": "text-davinci-003",
            "prompt": userText,
            "max_tokens": 2000,
            "temperature": 0.2,
            n:1,
            stop:null
        })
    }

    try{
        const response =await(await fetch (API_URL,requestOptions)).json();
        // pElement.textContent=response.choices[0].text;
        console.log(response);
    }catch(error){
        console.log(error);
    }

    // incomingChatDiv.querySelector(".typing-animation").remove();
    // incomingChatDiv.querySelector(".chat-details").appendChild(pElement);
}

const showTypingAnimation = () => {
  const html = `
        <div class="chat-content">
            <div class="chat-details">
                <span class="material-symbols-outlined">
                support_agent
                </span>
                <div class="typing-animation"><div class="typing-dot" style="--delay:0.2s"></div>
                    <div class="typing-dot" style="--delay:0.3s"></div>
                    <div class="typing-dot" style="--delay:0.4s"></div>
                    <div class="typing-dot" style="--delay:0.5s"></div>
                </div>
            </div>
            <span class="material-symbols-outlined">content_copy</span>
        </div>
          
    `;

    //create an incoming chat div with typing animation and append it to chat conatiner 
    const incomingChatDiv = createElement(html, "incoming");
    chatContainer.appendChild(incomingChatDiv);

    //lets get the answer from open ai
    getChatResponse(incomingChatDiv);
};


const handleOutgoingChat = () => {
  userText = chatInput.value.trim();
  //get chatinput value and remove extra space
  const html = ` 
        <div class="chat-content">
            <div class="chat-details">
                <span class="material-symbols-outlined">
                person
                </span>
                <p>${userText}</p>
            </div>
        </div>`;

  //create an outgoing chat div with users message and append it to chat container

  const outgoingChatDiv = createElement(html, "outgoing");
  chatContainer.appendChild(outgoingChatDiv);

  //typing effect
  setTimeout(showTypingAnimation, 500);
};

sendButton.addEventListener("click", handleOutgoingChat);
