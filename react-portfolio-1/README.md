### Original Source Code:
https://github.com/judygab/web-dev-projects/blob/main/personal-portfolio/src/components/NavBar.js


### Install Bootstrap
$ npm install react-bootstrap bootstrap

### Install Bootstrap Icons
$ npm install react-bootstrap-icons --save

### Install react-multi-carousel
$ npm i(install) react-multi-carousel

### Need 3 packages for mail servers to send information
- express
- cors
- nodemailer
$ npm install express cors nodemailer

### Install react-mailchimp-subscribe
$npm i react-mailchimp-subscribe

--> You need to create mailchimp account
--> Audience > Sign Up Forms > Form Builder (select)
--> Copy Sign Up Form URL and open in new tab
--> Right-click on the new tab "Sign Up Form" page > View page source
--> Scroll way down the page until you get to the <form> section
--> There are 4 parts to copy and save for later reference...
    The URL inside of the action="".
    The value in the input field with name="u".
    The value in the input field with name="id".
    In the input field sections for Email, First Name, Last Name – take note of the for="" in each of them. For me they are named MERGE0, MERGE1, and MERGE2 respectively. 
    We will reference these later in our form to map our own fields with these Mailchimp fields.

### Install animate.css
$ npm install animate.css --save