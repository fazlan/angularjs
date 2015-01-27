	This tutorial only touches the basic essence of Jasmine and Karma for testing your Javascript code.
	
	Prerequisite:
	
	NodeJS installed. You can find out more on http://nodejs.org/
	
	1. Lets create directory called 'jasmine-karma-sample'
	
		$ mkdir jasmine-karma-sample
	
	2. Move into the newly created directory
		
		$ cd jasmine-karma-sample
		
	3. Lets go ahead and install the required node dependencies by running the following commands
		a. Global dependencies:
			
			$ npm install -g karma-cli
		
		b. Local dependencies:
		
			$ npm install phantomjs --save-dev
			$ npm install karma-jasmine --save-dev
			$ npm install karma-phantomjs-launcher --save-dev
			
	4. Run the following command to create a Karma configuration file. You can learn more about Karma here.http://karma-runner.github.io/
	
		$ karma init
		
		NOTE: This will prompt a series of questions and accept the defaults, and update the file as follows
		
	5. Verify the project structure
	
		jasmine-karma-sample
			|
			|- node_modules 	// this is created as a result of npm install commands
			|
			`- karma.config.js 	// this is created as a result of karma init command
			
	6. Creating the following file
		jasmine-karma-sample/app/test/basic_spec.js
		
		This file contains the symmetric of a Jasmine specification. You can learn more about Jasmine here. http://jasmine.github.io/
		
	7. Run the following command from 'jasmine-karma-sample' directory
		
		$ karma start karma.config.js
		
		You'll see all your tests being run and their results.
	
	8. Writing more tests.
		jasmine-karma-sample/app/test/calculator_spec.js
		jasmine-karma-sample/app/src/calculator_spec.js
	
	You can find the sample code for this post here.