## Having fun with React Animations

I've been learning React for a while now. I'm really enjoying it. It's amazing how much you can do with around 4~5 main APIs. 

But I have to admit, some things are made harder by React though. CSS is one of them, *I'll keep that to another post*. The second thing is animations. If you're used to animating changes with CSS or some JS library, the way things work in React can be quite bizzare at first. React DOM diffing makes things... **interesting** to say the least!  😂

Today I'll show you some of my adverntures in buildin this cute `WeatherEngine` componet and working on rendering state changes gracefully! 

<img src="/Users/CReative59/Documents/Web Projects/launchpad/WeatherEngine Test.gif" style="zoom:50%;" />

Note: I still don't like how this looks actually! 😅 My original intention was to animate the gradient color changes gracefully which turns out too complex. If any of you guys knows how to, I'd love to learn that from your comments. 

------

Okay let's get going, So what is the main challenge? 
Because of the way React *refreshes* the DOM, using normal CSS transitions won't work to animate anything. React *mounts* and *unmounts* components when comparing VDOM changes. This is basically as much as you need to know now. If you want to know more [Read this article](https://programmingwithmosh.com/react/react-virtual-dom-explained/) 

 