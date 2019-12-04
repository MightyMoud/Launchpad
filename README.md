# This is the Launchpad Project

This is my second project with React. I've been learning React for two months now. 

![](https://raw.githubusercontent.com/ms-mousa/Launchpad/master/Demos/localhost_3000_home.png)

## Contents:

1. Vision ✨
2. Tools 🛠
3. Components Breakdown ䷦
4. Learning and Future 🚀

___

### Vision ✨

I built and designed this app simply because I need it. I need a place to launch my *everyday*. This should be the place where I get the essential information and help me track my progress in achieveing my goals. 

The habit tracker part is inspired by a Numbers sheet I've been filling up for a while. In that sheet I have my daily habits along with my proclaimed happiness index that I fill everyday. My vision for this module is that it will be able to tell you what habits have the most effect on your happines and more insights about your daily routines. Right now it's just a mock but in the future it will include data souced from your phone, sleep time and quality, steps, etc.., to produce better results.

My family is spread apart across 4 different countries. I like to keep track on the time difference to decide when I should call and also on the weather. This inspired the first two modules. The Weather and the Global Time. 

I also need to keep track on the global news across three countries at the USA, CA and AU. I added the dropdowns in the news Module to select the categroy too. Just for fun; won't be using this much. 

This app has *five* screens. Right now only the home screen is done. Each detailed screen would be display more data about the section it's related to. Detailed weather forecast, detailed news magazine, detailed clock, calendar and meeting schedule component and finally a Reports screen where __All__ is put together to generate insights on how the Weather, News consumption, Daily habits affect your working hours, and happiness index. 🤯

---

###Tools 🛠

My main objective with this project was to learn. This reflected on my choice of tools fo sure. It's also important to note that this project is all my work. From the concept to desig to coding. So choosing the tools was very important. 

#### Component Library : [Theme-UI](https://theme-ui.com/)

I didn't want to go with a UI librar that will give me tons of components and all I will do is just put the lego pieces together. I wanted a libary that will handle the essentials only and let me explore and integrate parts from other libaries and work well with them.

[Theme-UI](https://theme-ui.com/) Gives this great balance. It ships with [Emotion](https://emotion.sh/docs/introduction) 👩‍🎤 out of the box and that is my favourite JSS libray. Them UI also handles themeing in a brilliant way. Meanwhile it only offers few components to work with. Just the essentials. Exactly what I'm looking for. 

#### Design Software: [Figma](www.figma.com)

No I'm not a designer and I don't claim to be. This project was put together as I code and according to the vivid images I came up in my mind before sleep *true story*. However, I needed a software where I can store the big outlines and rock the rest with the code. And you know what Figma works! I used it to make outline and most impotantly I used it to make the component [structure diagram](https://www.figma.com/file/BUCuTqQ7D5xxfJNG9FHTi9/Dash?node-id=23%3A0). *extremely handy.* 

#### Visualisation Library: [Nivo](https://nivo.rocks/)

No it's not that great. **get your documentation together guys please!** But *it works* and it makes it easy to make responsive graphs that look pleasing. Easily integrated with the colors from Theme-UI's Theme. After digging around for an hour to know how to override the native themes which is *NOT* in the official documentation site. 😫

#####I used [Storybook](https://storybook.js.org/) too, but let it go after knowing how hard it is to get images to work with CRA 🤷🏻‍♂️. It was fun to learn and I really like CDD. 👌🏻

---

###Component Breakdown ䷦

*The fun part!*😄

####Component Structure Diagram

First, lets' start with the Component Structure Diagram. I find this to be very important. Since most of my design happend as I code I didn't want to worry about what should be where or what name shoud it have. I just wanted to get in the flow and code! 😉

![Component Structure](https://raw.githubusercontent.com/ms-mousa/Launchpad/master/Demos/Component%20Diagram.png)

You can see It's pretty standard. I just call container stateful components engines! *DUH!* Simply cus they crunch data and communicate with APIs. My Mechanical Engineering bg is lurks in the distance! 🤷🏻‍♂️

#### WeatherEngine ☁️

This is where the API to the OpenWeatherMaps happen and the results shown. CityInput handles input from the user and included AutoComplete component that does the AutoCompletion. 

![](https://raw.githubusercontent.com/ms-mousa/Launchpad/master/Demos/WeatherEngine%20Test-smallsize.gif)

I'm very happy about how it truned out. Sadly had to take out the MinMax part becuase of the size of other components I wanted to show on the home screen.

💡I learned that not having a proper px by px design is not optimum. I developed this in Storybook and it was waay too big for how I'd actually ended up wanting to use it! 

![](https://raw.githubusercontent.com/ms-mousa/Launchpad/master/Demos/WeatherBlock.-smallgif.gif)

####TimeEngine ⏱

*This is one of the most painful parts of the app.* From getting the animation done properly to changing the size of a pure CSS clock! Painful all the way. 😫  Taught me a lot! 💪🏻

<img src="https://github.com/ms-mousa/Launchpad/blob/master/Demos/TimeEngine-smallsize.gif?raw=true" style="zoom:60%;" />

The OWM API returns a UNIX UTC offset which I used to calculate the local remote time from. That part was fun! And yeah stay away from CSS animations for clock. Very computive intensive, although I got it controlled. 😅

#### NewsEngine 🗞

So I'm using [NEWSApi](https://newsapi.org/) which is quite alright. Not bad. Their result is somehow not consistent sometimes in terms of length of description and all. But otherwise alright. 

![](https://github.com/ms-mousa/Launchpad/blob/master/Demos/NewsEngine-Small.gif?raw=true)

Loading skeletos FTW 😉

#### SideNav 🧭

This is a simple component with Reach Router and some simple hover on and location signals. 

![](https://raw.githubusercontent.com/ms-mousa/Launchpad/master/Demos/SideNav.gif)

#### HabitTracker 📝

This is a good one! I love the way it turned out. So this is split in two halves. The first is the happiness levels graph and the second is last week's summary. 

![](https://raw.githubusercontent.com/ms-mousa/Launchpad/master/Demos/HabitsTracker.gif)

This Graph shows the happiness index and another metric the user chooses. In this case it's the daily steps. This is showing bogus data for sake of prototyping. 

This second half shows the progress of the last week in terms of habit tracking: 

![](https://raw.githubusercontent.com/ms-mousa/Launchpad/master/Demos/Weeks%20Summary.gif)

---

### Learning and Future 🚀

I learne many things. Taking a project this scale after two weeks of knowing what React is was quite challenging. Loved CDD but I think I didn't do it that well. I needed more robust px by px design before I started. That I thought would be a waste of time -> My objective is to learn React. 

It ended up all good anyway. 

I learned also how to structure the src folder and how to make component folders too. Learned Theme-UI and can easily change the look of the app with a couple of code changes: See below:

![](https://raw.githubusercontent.com/ms-mousa/Launchpad/master/Demos/localhost_3000_home-Dark.png)

Dark Mode for the win! 💪🏻

---

You can reach out to me:

Twitter: @DevShehata

E-mail: Shehata@msmo.io