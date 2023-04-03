# Screenshots:
<img width="800" alt="Screenshot 2023-04-02 at 4 56 10 PM" src="https://user-images.githubusercontent.com/42660669/229378576-e9f437c3-e1a4-4f36-ae9d-c98dd6783dc0.png">
<img width="800" alt="Screenshot 2023-04-02 at 4 56 22 PM" src="https://user-images.githubusercontent.com/42660669/229378584-a755d6c3-e27a-46bf-aa7c-ed61fe938261.png">
<img width="800" alt="Screenshot 2023-04-02 at 4 56 32 PM" src="https://user-images.githubusercontent.com/42660669/229378589-c44daea3-95f5-4376-80a9-9a0e1a90d29a.png">

# Packages Installed
### Install Bootstrap
```$ npm install react-bootstrap bootstrap```

### Install Bootstrap Icons
```$ npm install react-bootstrap-icons --save```

### Install react-multi-carousel
```$ npm i(install) react-multi-carousel```

### Install 3 packages for mail servers to send information
```$ npm install express cors nodemailer```
- express
- cors
- nodemailer

### Install react-mailchimp-subscribe
```$npm i react-mailchimp-subscribe```

**->** You need to create mailchimp account <br>
**->** Audience **>** Sign Up Forms **>** Form Builder (select) <br>
**->** Copy Sign Up Form URL and open in new tab <br>
**->** Right-click on the new tab "Sign Up Form" page **>** View page source <br>
**->** Scroll way down the page until you get to the ```<form>``` section <br>
**->** There are 4 parts to copy and save for later reference... <br>
&emsp;The URL inside of the action="". <br>
&emsp;The value in the input field with name="u". <br>
&emsp;The value in the input field with name="id". <br>
&emsp;In the input field sections for Email, First Name, Last Name – take note of the for="" in each of them. For me they are named MERGE0, MERGE1, and MERGE2 respectively.  <br>
&emsp;We will reference these later in our form to map our own fields with these Mailchimp fields. <br>

### Install animate.css
```$ npm install animate.css --save```

# Source Code:
https://github.com/judygab/web-dev-projects/blob/main/personal-portfolio/src/components/NavBar.js
