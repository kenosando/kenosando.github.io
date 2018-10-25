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
		<div class="text-center badges" style="margin-top:15px">
			<div class="LI-profile-badge" data-version="v1" data-size="large" data-locale="en_US" data-type="horizontal" data-theme="dark" data-vanity="kenneth-sanders-b0040b13">
				<a class="LI-simple-link" target="_blank" href='https://www.linkedin.com/in/kenneth-sanders-b0040b13?trk=profile-badge'>LinkedIn - Kenneth Sanders</a>
			</div>
			<a href="https://certification.scrumalliance.org/accounts/822710-ken-sanders/certifications/933051-csm" target="_blank">
				<img class="img-circle img-thumbnail" src="./assets/ext.jpg" >
			</a>
			<a href="https://twitter.com/kenosando" target="_blank">
			<img class="img-circle img-thumbnail" src="./assets/twitter.png" >
			</a>
			<a href="https://github.com/kenosando" target="_blank">
				<img class="img-circle img-thumbnail" src="./assets/github.png" >
			</a>
			<a href="mailto:kenosando@outlook.com">
				<img class="img-circle img-thumbnail" src="./assets/email.png" >
			</a>
			<a href="https://kenosando.pythonanywhere.com" target="_blank">
				<img class="img-circle img-thumbnail" src="./assets/pythonanywhere.png" >
			</a>
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
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
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
