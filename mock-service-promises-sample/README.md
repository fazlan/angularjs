
	Unit testing AngularJS controllers with mocked promises
	
	Recently, I have been playing around with Javascript and AngularJS. Predominantly, being a backend developer, this was a good challenge.
	And prior I had no extensive experience on Javascript nor AngularJS. So, I am a newbie. 
	
	However, I thought to blog some of my learnings, specially when it comes to testing the code.
	
	This tutorial only touches the basic essence of mocking promises when unit testing.
	Promises can be thought as Futures in Java.
	
	Prerequisite:
	
	NodeJS installed. You can find out more on http://nodejs.org/
	Git
	
	1. Clone the repository 'angular-mock-promises-sample'
	
		$ git clone https://github.com/fazlan/angularjs.git
	
	2. Move into the 'angular-mock-promises-sample' project.
	
		$ cd angularjs/angular-mock-promises-sample
		
	3. Installing the node dependencies
		$ npm install -g karma-cli  
		The above is optional. You can skip the above if you have already installed karma-cli globally.
		
		$ npm install		
		This will install all the node dependencies in the package.son
	
	4. Installing Bower dependencies, 
		$ npm install -g bower
		The above is optional. You can skip the above if you have already installed bower globally.
		
	    $ bower install
		
	5. Run the test
		
		$ karma start karma.config.js
		
		You'll see all your tests being run and their results.
	
	You can find the sample code for this post here.