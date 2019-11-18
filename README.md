<br>
<p align="center">
  <img alt="Logo" src="images/image.png" width="50%"/>
</p>
<br>

[![GitHub stars](https://img.shields.io/github/stars/carlotacb/ClassController.svg)](https://GitHub.com/carlotacb/ClassController/stargazers/)
[![GitHub forks](https://img.shields.io/github/forks/carlotacb/ClassController.svg)](https://GitHub.com/carlotacb/ClassController/network/)
[![GitHub repo size in bytes](https://img.shields.io/github/repo-size/carlotacb/ClassController.svg)](https://github.com/carlotacb/easycam)
[![GitHub contributors](https://img.shields.io/github/contributors/carlotacb/ClassController.svg)](https://GitHub.com/carlotacb/ClassController/graphs/contributors/)
[![GitHub license](https://img.shields.io/github/license/carlotacb/ClassController.svg)](https://github.com/carlotacb/ClassController/blob/master/LICENSE)

## Devpost description of the project

### Inspiration

Bullying in schools is a reality, and some of us, we used to see (or be part) of some of these unacceptable situacions. Also we hear about some projects and papers that talk a about how to prevent this situations on the psicologic way, and after take a lot on them we realize that if all the proces is automatized we can prevent all the situations in a easier way and making the study with more frequency.

### What it does

ClassController helps the teacher to detect which students are alone and witch ones are the leaders of the class. For these, the students need to answer a bunch of questions, and after that, the teacher would visualize which student is seen as a leader for the rest of the group or which one is the person that is beeing bullied.

### How we built it

For the **Front-End** we use _React.js_ (using _JavaScript_) with _Material UI_ for the components and _Sigma.js_ for the graph visualization.
For the **Back-End** we use _Golang_ for the development of the endpoints and _MySQL_ for the database.

### Challenges we ran into

During the development of this project we learn how to make a backend in Golang, and during the learn proces we have some issues that we solve, learning the lenguages in a 24-hackathon is always a challenge! Also we didn't know anything about the graph and we have the bottleneck with the development of the graph and also with the visualization of it.

### Accomplishments that we're proud of

We are very proud of all the project in general! Finishing the web on time and developing more than the MVP we think at the beggining of the hackathon. We had a good architecture and a coordination in the team. It was one of the best hackathons, just because the project was ended with more than the expected and ON TIME!

### What we learned

For the backend part (as we commented in the _challenge_ part) we learn to do a backend in Golang, also we learn about Gorm.

For the front-end part we learn about Material UI for the design of the web and also we learn about graph visualization.

In general we learn about comunication inside the team.

### What's next for class control

In the next vesions of ClassControl we think that the questions can be personalized and also the AI algorithm can be better and detect the people, for their leadership and for their loneliness, and create notifications and messages to show the teacher without having to look in the graph

## Funcionalities

For these the application have the following functionalities.

First of all, when you open the aplication you need to choose your profile (student or teacher)

### Teachers

1. Login page, where the teacher can login, and if it doesn't have account, register.

2. Show all the groups that have (in future version the teacher will be able to create new group).

3. See the dependency graph for a group

### Students

1. Login page, where the student needs to put his name and the group code

2. Questions, the first slot of questions that the students have to answer are related to the relations in class and the second slot of questions are about their feelings.
    1. **Type 1** where the student can choose anyone in the classrom
    2. **Type 2** where the student can choose betwen 3 or 4 classmates.
    3. **Type 3** where the student have to rate a question between 0 and 4.

#### Questions

1. RELATIONS

    1. **Type 1** Who would you choose to do a school project? [The student have to those 4 students]
    2. **Type 2** Who would be the best leader? [The student have to choose one of the 4 students selected in the last question, or theirself]
    3. **Type 1** Who would you choose to play at the playground? [The student have to those 4 students]
    4. **Type 1** Who would you choose to be in an airplain cabin? [The student have to those 2 students]
    5. **Type 2** Who would be the pilot? [The student have to choose one of the 2 students selected in the last question, or theirself]
    6. **Type 1** Who would you believe most? [The student have to those between 1 or 3 students]
    7. **Type 1** Who tell the best stories? [The student have to those 3 students]

2. FEELINGS

    1. **Type 3** Are you happy?  
    2. **Type 3** Are you alone?
    3. **Type 3** Are you happy playing at the playground?
    4. **Type 3** Do you like going to school?
    5. **Type 3** Are you happy with the friends you have?

## Requirements

To run this application you need to have installed in you PC the following:

1. node.js
2. Golang

## Usage

To run the application you need to run the first the backend and then frontend:

### Backend

1. First you need to go to the backend folder:

    ```bash
    cd backend
    ```

2. Install all the Golang dependencies:

    ```bash
    go build
    ```

3. Run the backend:

    ```bash
    ./backend
    ```

### Frontend

1. First you need to go to the frontend folder:

    ```bash
    cd ..
    cd frontend
    ```

2. Install all the node dependencies:

    ```bash
    npm install
    ```

3. Start the application:

    ```bash
    npm start
    ```

## Authors

- [Carlota Catot](https://github.com/carlotacb)
- [Andreu Gallofré](https://github.com/atsuky)
- [Victor Sanchez](https://github.com/sanchyy)
- [David Valero](https://github.com/dvm55)

## License

MIT © ClassController
