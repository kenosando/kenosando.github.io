<template>
	<div id="app">
		<div class="container">
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
  'email' : 'kenosando@outlook.com' }</code></pre>
			<div class="text-center badges" style="margin-top:15px">
				<div class="LI-profile-badge" data-version="v1" data-size="large" data-locale="en_US" data-type="horizontal" data-theme="dark" data-vanity="kenneth-sanders-b0040b13">
					<a class="LI-simple-link" target="_blank" href='https://www.linkedin.com/in/kenneth-sanders-b0040b13?trk=profile-badge'>LinkedIn - Kenneth Sanders</a>
				</div>
				<a href="https://certification.scrumalliance.org/accounts/822710-ken-sanders/certifications/933051-csm" target="_blank">
					<img class="img-circle img-thumbnail" src="/storage/ext.jpg" >
				</a>
				<a href="https://twitter.com/kenosando" target="_blank">
				<img class="img-circle img-thumbnail" src="/storage/twitter.png" >
				</a>
				<a href="https://github.com/kenosando" target="_blank">
					<img class="img-circle img-thumbnail" src="/storage/github.png" >
				</a>
				<a href="mailto:kenosando@outlook.com">
					<img class="img-circle img-thumbnail" src="/storage/email.png" >
				</a>
				<a href="https://kenosando.pythonanywhere.com" target="_blank">
					<img class="img-circle img-thumbnail" src="/storage/pythonanywhere.png" >
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
		}
	}
</script>

<style>
.LI-profile-badge ,
.LI-simple-link {
	flex-basis: 100%
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
</style>
