



function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  //  ✨ add your code here
  var widgets = document.querySelectorAll('section>div');
  widgets.forEach((widget,i) => {
        widget.classList.add('widget')
        widget.setAttribute('tabindex' , + i + 1 + "" )
      

    });
  // 👉 TASK 2 - Build a "Quote of the Day" widget
  //  ✨ add your code here
 
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    const quote = document.createElement('div');
    
    const quoteText  = randomQuote.quote;
    quote.textContent = quoteText;

    const widget1 = document.querySelector('.quoteoftheday')
    widget1.appendChild(quote);
    const authorDate = document.createElement('div');
    const{author, date} = randomQuote;
    authorDate.textContent = `${author} in ${date || "an unknown date"}`;

    widget1.appendChild(authorDate);

  // 👉 TASK 3 - Build a "Corporate Speak" widget
  //  ✨ add your code here
  const randomVerb1 = verbs[Math.floor(Math.random() * verbs.length)]
  const randomVerb2 = verbs[Math.floor(Math.random() * verbs.length)]

  const randomAdverb1 = adverbs[Math.floor(Math.random() * adverbs.length)]
  const randomAdverb2 = adverbs[Math.floor(Math.random() * adverbs.length)]

  const randomNoun1 = nouns[Math.floor(Math.random() * nouns.length)]
  const randomNoun2 = nouns[Math.floor(Math.random() * nouns.length)]

  const corporateTalk = document.querySelector('.corporatespeak');
  corporateTalk.textContent = `We need to ${randomVerb1} our ${randomNoun1} ${randomAdverb1} in order to ${randomVerb2} our ${randomNoun2} ${randomAdverb2}.`;
  
  // const newTalk = document.createElement('p').paragraph.textContent = corporateTalk.document.querySelector('.corporatespeak').appendChild(paragraph);

  // 👉 TASK 4 - Build a "Countdown" widget
  //  ✨ add your code here
  const countdownWidget = document.querySelector('.countdown')    
  let count = 5

  const countTimer = document.createElement('p')
  countTimer.textContent = `T-minus ${count }...`;
  countdownWidget.appendChild(countTimer)

  const countdownInterval = setInterval(() =>  {
    if (count === 1) {
      // Liftoff!
      clearInterval(countdownInterval);
      countTimer.textContent = "Liftoff! 🚀";
      }
       else 
       {
         countTimer.textContent = `T-minus ${--count}...`;
      //count--;
     
      }
      } 
    ,1000)
    

    

  // 👉 TASK 5 - Build a "Friends" widget
  //  ✨ add your code here

  const person = people[Math.floor(Math.random() * people.length)]
  const personParagraph = document.createElement('p')
  document.querySelector('.friends').appendChild(personParagraph)
  const year = +person.dateOfBirth.split('-')[0]
 // personParagraph.textContent = `${person.fname} ${person.lname} was born in ${year} and is friends with ${formatFriendsNames(person.friends)}.`
  let sentence =  `${person.fname} ${person.lname} was born in ${year} and .`
  if (!person.friends) {
    sentence += 'has no friends';
  } else {
        sentence += 'is friends with '
        for (let i = 0; i < person.friends.length; i++) 
        {
          const friendId = person.friends[i]
          const friend = people.find(p => p.id === friendId);
          const fullName =  `${friend.fname} ${friend.lname}`;
          let isLastIdx = i === person.friends.length - 1
          let isNextToLastIdx = i=== person.friends.length -2
          if(isLastIdx)
          {
              sentence += `${fullName}`
              
          }
          else if(isNextToLastIdx)
          {
            sentence += `${fullName} and`
          }
          else{
            sentence += `${fullName} ,`
          }
        }
    }

    personParagraph.textContent = sentence
 
  // 👉 TASK 6 - Make it so user can tab through the widgets
  //  ✨ add your code here


  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()