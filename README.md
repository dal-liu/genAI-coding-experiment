# Prototype with GenAI

This is a recreated prototype of our CS394 client project built with ChatGPT 3.5.

## Briefly describe what the code is supposed to do.
The code creates a form for the user to input data to create and schedule a swarm. The form includes text fields for the swarm title and description that lets the user's teammates know what the swarm is about. It also includes date fields to schedule the start and end times of the swarm. When the user submits the form, a message is displayed to let the user know that a swarm has successfully been created. If the user inputs invalid data, error messages on the incorrect fields are displayed.

## Does the code work? If not, what's broken.

The frontend of the code works well. The backend is not functional as it is not connected to Firebase.

## How is the code better than what the team currently has?

The code has error handling and validation for the user input which the team's code does not currently have. It is also better designed than the team's code.

## How is the code worse?

The code is not connected to Firebase, so the prototype is not completely functional. Because of this, the ability to display the swarm history is not implemented.

## How many tries did it take to get the code? Main struggles?

It took 4 tries to get the code. At first, I tried using ChatGPT to create individual components for each type of input field. It was not necessary to do this, so I simplified the prompt to let ChatGPT generate the entire form component. The second time, the generated code used raw HTML and CSS, which was a good starting point to test functionality. On the next prompt, I asked ChatGPT to use the Material UI framework instead, leading to a better design. To fix issues with form validation, I asked ChatGPT to rewrite the function to submit the form.

## Overall impression of the experience

I had a good impression of the experience. Using generative AI took far less time than coding the form from scratch. It was also interesting to see what design patterns ChatGPT used to generate the code after telling it to code like an experience React developer.
