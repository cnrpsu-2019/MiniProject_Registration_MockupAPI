# Registration Mock API

## Port

- Main Program Input (Express) => `8080`
- Zero MQ Server Handout => `8090`
- Zero MQ Server Handin => `3090`
- Main Program Output (Express) , Socket IO=> `3030`
- Front Page (React) => `3000`

## Demo Program

- Visit this API on http://dev.theduckcreator.in.th:8080 can use API Client like curl , Postman or Browser Call

## Program Specification

- Program Run at Port8080 using command `npm start`
- `/subject` to request all subject
- `/subject/subjectCode` to request subject per code

## Method that want integration

- Need to Make Server Connect to MongoDB Database and Frost Infrastructure
- This is the mockup api that use for mock up the User Interface
