# Virtual Post Office

## Description

My first backend project which application helps file the mails in an imaginary post office.
Primary aim was to practice the backend code and not much effort was given to the design.
The goal of this app is to send the mails to a server, save them and be able to search among them.

## Implementation

- There are 3 menu options in the landing page for `List mails`, `New mail` and `Search` which were implemented with ternary operators
- Managing GET, POST request in backend side
- When we send a get request to the endpoint ("/api/mails"), the server returns a JSON with a list of mails
- When we send a post request to the endpoint ("/api/mails") with a mail object in the request body, the server add the mail to the end of the list of mails
- When we send a mail object with a reference number already existing in the list of mails, the server returns with a status code 400
- When we send a get request to the endpoint("/api/mails/#refNumber"), the server returns a JSON with the mail with the given reference number (if it exists)

## Built with

- React.js
- Express.js
- Semantic HTML5 markup
- CSS Flexbox
