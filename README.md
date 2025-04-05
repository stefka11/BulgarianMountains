# BulgarianMountains
Сайт за планини, реки и красиви места
The main purpose of the **Bulgarian Mountain** website is to collect interesting articles and beautiful photos from Bulgarian Mountains.
It is to show where the people can go in their free time and what they will see there. 
The website includes short articles related with the mountain places - which could be historical, geographical, personal experience or any other text and photos related to the text.

# **Bulgarian Mountain** - website - to collect interesting articles and beautiful photos from Bulgarian Mountains.
 
 ## Start 
 - [x] Create New Progect in GitHub
 - [x] Initialise project 
 - [x] [Install tailwindcss] (https://tailwindcss.com/) - npm install tailwindcss @tailwindcss/vite; npm install @headlessui/react @heroicons/react
 - [x] Install react router and set navigation  (npm install react-router)
 
#** The following components are included in this website:
 - [x] There are created pages using tailwindplus  
 - [x] There are created request function for get, post, put, delete request
 - [x] There are hooks for autentication - login, register, logout in src/api/authApi.jsx
 - [x] There is context object by default in src/context/UserContext.js
 - [x] There are routing to Login, Register, Logout pages and App.jsx
 
# **The website has two parts - public** (for the visitors who are not logged in) and **private** (for the visitors who are logged in but are not authors and for authors with their own articles). 
 
 ## Dividing pages according to user roles 
 - [x] Public pages - Home, Catalog, Login, Register (Logout and Create article menu buttons are hidden)
 - [x] Private pages -  Logout, Create article (Login and Register buttons are hidden)
 - [x] Home button - always visible and navigates to the Home page.
 - [x] Catalog - visible for registered and non-registered user - The Catalog page contains all published posts with short description, photo and button See more.., which links to their Detailed page. 
 - [x] Detailed page - visible for registered and non-registered user. Have buttons Edit and Delete only for user, creator of the selected article.
 - [x] Login and Register pages - visible for non-registered user. Allow switching from one to another and login or registering user. Once logged in user keep his state through all website on the different pages. Аfter successful registration navigate to Catalog.
 - [x] Logout - visible for registered user. Exit from session and navigate to Catalog.
 - [x] Create article - visible only for registered user. Page to create article. He can fill in Title, Region, Description, Coordinates, Photo and Text and after submitting the form and connecting with the server the new article appears in the Articles page with it's own Detailed page. 
 - [x] Edit article - similar page, available to the creator.
 - [x] Delete article - page, available to the creator.
