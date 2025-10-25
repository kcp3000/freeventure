# WeatherWatch

Created by Rashell and Kevin.

## 🚀 Mission statement

Our application, WeatherWatch is for anyone searching for the weather. It allows users to search locations and see their weather and conditions  .

## API & React Router

This application will use the WeatherApi.com API. Below are the documentation and specific endpoints we intend to use and the front-end pages that will use them.

- Link to API documentation: [https://www.weatherapi.com/docs/]

-  https://api.weatherapi.com/v1/forecast.json?key=de3930ea69884d4383d220010242108&q=London&days=5&aqi=yes&alerts=yes
  - This will fetch the forcast for 5 days of a given location
  - For each forcast, I want the `temperature`, `wind`, `day`, `airquality`, `condition`, and `alerts`
- http://api.weatherapi.com/v1/current.json?key=de3930ea69884d4383d220010242108&q=11214&aqi=yes
  - This will fetch the current weather of the location searched for
  - I will use the `temperature`, `wind`, `airquality`, and `condition`
- http://api.weatherapi.com/v1/astronomy.json?key=de3930ea69884d4383d220010242108&q=London&dt=
  - This will fetch the astronomy of the current weather 
  - For each games, I will use the `sunrise`, `sunset`, `moonrise`, and `moonset`

## 👩‍💻 MVP User Stories & Frontend Routes

The application will feature the following frontend routes and core features:

* On the `Home` page, users can search a location and reroute them to the `search` page where they can have access to the weather for it.
* On the `search` page, users can view, the temperature, wind, and condition.
* On the `forcast` page, users can see forecast for up to 5 days
* On the `astrology` page, users can see the sunrise, sunset, moonrise and moonset for location searched 

## 🤔 Stretch User Stories

If time permits, the following stretch features will be implemented in order of priority:

* Users will be able to save their search
* Users will be able to see lightmode/darkmode

## 📆 Timeline for reaching MVP in 1 week

To ensure that we can complete all core features of the application in 1 week, we will aim to complete tasks according to the following timeline:

**Day 1**
- [ ] Created a vite + react project 
- [ ] Use React Router for client side routing 
- [ ] Use context
- [ ] Fetch data (singular recource/ multiple resources)
- [ ] Fetch specific games 
- [ ] Bonus: Were able to get it deployed in a functional state
- [ ] Created barebone components (3) and have them in their own files
- [ ] Use useState (x3) and useEffect (x2)
- [ ] Handle non-submisson events (x2) 

**Day 2** (MVP due by the end of the day)
- [ ] Make proper functionality to the components 
- [ ] Get the routing down (make sure the components are in their proper places)
- [ ] General functionality throughout the site

**Day 3** 
- [ ] Focus on stretches ---> Local storage (?), Search Bar, Light mode/Dark mode

**Day 4**
- [ ] Navigation bar fits clearly on both moble and desktop
- [ ] Fonts (no more than 2)
- [ ] Color 


**Day 5**
- [ ] Buttons have altered visual states for hover, active, and focus
- [ ] Links have altered visual states for hover, active, and focus
- [ ] Make the site public 

## Wireframes of each page in your application

Below, you can find wireframes for our project. Each wireframe shows a different page of our application as well as the key components of the application. Details such as specific text values or images are intentionally not included:

https://wireframe.cc/ruu3eh

