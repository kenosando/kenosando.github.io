<template>
  <div id="home" class="container">
    <h1>Ken Sanders - @kenosando</h1>
    <pre><code class="python">from kenosando import about_me
from pprint import pprint
pprint(about_me)

{ 'languages' : ['Python','BASH','JavaScript','HTML/CSS','PHP','SQL'],
'specialties' : ['Web Development',
                 'Web Scraping',
                 'Scripting',
                 'Linux SysAdmin',
                 'DBA'],
'certifications' : 'Certified ScrumMaster&#174;',
'twitter' : '@kenosando',
'github' : 'kenosando',
'email' : 'kenosando@outlook.com' }
<span class="blinking-cursor">|</span></code></pre>
    <div class="text-center" style="margin-top:15px">
			<div class="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="dark" data-type="HORIZONTAL" data-vanity="kenneth-sanders-b0040b13" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/kenneth-sanders-b0040b13?trk=profile-badge">Kenneth Sanders</a></div>
			<div class="badges">
        <a href="https://www.credly.com/badges/aab39649-0186-4376-90d0-668041c19bfe" target="_blank">
          <!--<img class="img-circle img-thumbnail" src="./assets/ext.jpg" >-->
          <i class="fab fa-aws fa-2x fa-border" tooltip="AWS Certified Solutions Architect"></i>
        </a>
        <a href="https://twitter.com/kenosando" target="_blank">
        <!--<img class="img-circle img-thumbnail" src="./assets/twitter.png" >-->
        <i class="fab fa-twitter fa-2x fa-border"></i>
        </a>
        <a href="https://github.com/kenosando" target="_blank">
          <!--<img class="img-circle img-thumbnail" src="./assets/github.png" >-->
          <i class="fab fa-github fa-2x fa-border"></i>
        </a>
        <a href="mailto:kenosando@outlook.com">
          <!--<img class="img-circle img-thumbnail" src="./assets/email.png" >-->
          <i class="fas fa-at fa-2x fa-border"></i>
        </a>
        <a href="https://kenosando.pythonanywhere.com" target="_blank">
          <!--<img class="img-circle img-thumbnail" src="./assets/pythonanywhere.png" >-->
          <i class="fab fa-python fa-2x fa-border"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        posts: []
      }
    },
    updated: function() {
      hljs.initHighlightingOnLoad()
    }
  }
</script>

<style>
pre > code {
  margin-left: auto;
  margin-right: auto;
}
.LI-profile-badge ,
.LI-simple-link {
  flex-basis: 100%;
  margin-bottom: 5px;
}
.LI-view-profile {
  margin-right: 100% !important;
}
.LI-logo {
  margin-left: 100% !important;
}
.img-circle.img-thumbnail {
  display: inline-block;
  width: 64px;
  max-width: 100%;
  padding: 4px;
  line-height: 1.42857143;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 50%;
  transition: all .2s ease-in-out;
}

.text-center{
  text-align: center;
}
.badges {
  width: 330px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.badges > a > i {
  margin: 0 2px 0 2px;
}

@media(max-width: 500px){
  .img-circle.img-thumbnail {
    width: 100%;
  }
}
@media(max-width: 991px){
  .img-circle.img-thumbnail {
    width: 40px;
  }
  .badges {
    width: 280px;
  }
}

code.python.hljs::before {
    position: absolute;
    right: 0;
    text-align: right;
    font-size: 115%;
    padding: 0 10px 0;
    line-height: 15px;
    height: 15px;
    font-weight: 800;
    content: 'python';
    text-transform: capitalize;
}

/* Blinking Cursor */
.blinking-cursor {
  font-weight: 100;
  font-size: 90%;
  color: #2E3D48;
  -webkit-animation: 1s blink step-end infinite;
  -moz-animation: 1s blink step-end infinite;
  -ms-animation: 1s blink step-end infinite;
  -o-animation: 1s blink step-end infinite;
  animation: 1s blink step-end infinite;
}

@keyframes "blink" {
  from, to {
    color: transparent;
  }
  50% {
    color: black;
  }
}

@-moz-keyframes blink {
  from, to {
    color: transparent;
  }
  50% {
    color: white;
  }
}

@-webkit-keyframes "blink" {
  from, to {
    color: transparent;
  }
  50% {
    color: white;
  }
}

@-ms-keyframes "blink" {
  from, to {
    color: transparent;
  }
  50% {
    color: white;
  }
}

@-o-keyframes "blink" {
  from, to {
    color: transparent;
  }
  50% {
    color: white;
  }
}

</style>
