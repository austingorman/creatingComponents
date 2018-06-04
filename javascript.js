// PART ONE

// You're going to create a simple list of chat messages that you might have with one of your family members. Maybe it's 
// that wacky aunt that you see every Christmas and Fourth of July.


// Put an article DOM element in your index.html with the id attribute value of messages.
// In your JavaScript, use querySelector() to obtain a reference to that article DOM element.
// Create five(5) section elements, each with a class of message, and with textContent of your choosing.
// Using appendChild(), attach each message as a child to the messages element.

// const article = document.querySelector('#message')

// const section1 = document.createElement('section')
//     section1.textContent = 'Hello'
//     section1.className = 'message'
//     article.appendChild(section1)

// const section2 = document.createElement('section')
//     section2.textContent = 'Sup?'
//     section2.className = 'message'
//     article.appendChild(section2)

// const section3 = document.createElement('section')
//     section3.textContent = 'Nothing'
//     section3.className = 'message'
//     article.appendChild(section3)

// const section4 = document.createElement('section')
//     section4.textContent = 'Cool'
//     section4.className = 'message'
//     article.appendChild(section4)

// const section5 = document.createElement('section')
//     section5.textContent = 'Alright. Bye.'
//     section5.className = 'message'
//     article.appendChild(section5)


// PART 2
// Update your code from the previous exercise to add the chat messages to the messages elements via a document fragment.


const fragment = document.createDocumentFragment()

const section1 = document.createElement('section')
    section1.textContent = 'Hello'
    section1.className = 'message'
    fragment.appendChild(section1)

const section2 = document.createElement('section')
    section2.textContent = 'Sup?'
    section2.className = 'message'
    fragment.appendChild(section2)

const section3 = document.createElement('section')
    section3.textContent = 'Nothing'
    section3.className = 'message'
    fragment.appendChild(section3)

const section4 = document.createElement('section')
    section4.textContent = 'Cool'
    section4.className = 'message'
    fragment.appendChild(section4)

const section5 = document.createElement('section')
    section5.textContent = 'Alright. Bye.'
    section5.className = 'message'
    fragment.appendChild(section5)



document.querySelector("#message").appendChild(fragment)
