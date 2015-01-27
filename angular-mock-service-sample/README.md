Unit testing AngularJS controllers with mocked services
	
	Recently, I have been playing around with Javascript and AngularJS. Predominantly, being a backend developer, this was a good challenge.
	And prior I had no extensive experience on Javascript nor AngularJS. So, I am a newbie. 
	
	However, I thought to blog some of my learnings, specially when it comes to testing the code.
	
	This tutorial only touches the basic essence of mocking certain Javascript codes when unit testing.
	
	Prerequisite:
	
	NodeJS installed. You can find out more on http://nodejs.org/
	
	1. Lets create directory called 'angular-mock-service-sample'
	
		$ mkdir angular-mock-service-sample
	
	2. Move into the newly created directory
		
		$ cd angular-mock-service-sample
		
	3. Managing the node dependencies with package.json, which will contain all the node dependencies,
		$ npm init		
		
	
	4. Lets go ahead and install the required node dependencies by running the following commands
		
		$ npm install -g karma-cli 		
		$ npm install phantomjs --save-dev
		$ npm install karma-jasmine --save-dev
		$ npm install karma-phantomjs-launcher --save-dev
			
	5. Installing Bower to manage angular related dependencies, 
		$ npm install -g bower	
	    $ bower init
	
		NOTE: 'bower init' command will create bower.json
		
	6. Lets install the required bower dependencies by running the following commands
		$ bower install angular --save-dev
		$ bower install angular-mocks --save-dev
		$ bower install angular-loader --save-dev		
		
	5. Run the following command to create a Karma configuration file. You can learn more about Karma here.http://karma-runner.github.io/
	
		$ karma init
		
		NOTE: This will prompt a series of questions and accept the defaults, and update the file as follows
		
	6. Verify the project structure
	
		angular-mock-service-sample
			|
			|- node_modules 	// this is created as a result of npm install XXX commands
			|
			|- bower_components // this is created as a result of bower install XXX commands
			|
			|- bower.json		// bower init
			|
			|- karma.config.js 	// this is created as a result of karma init command
			|
			`- package.json 	// npm init
			
	6. Creating the following file
		angular-mock-service-sample/app/test/mocked_user_controller_spec.js
		
		This file contains the symmetric of a mocking a service that is used by the controller.
		
	7. Run the following command from 'jasmine-karma-sample' directory
		
		$ karma start karma.config.js
		
		You'll see all your tests being run and their results.
	
	You can find the sample code for this post here.