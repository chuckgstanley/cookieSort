/**
 * @author
 */
/* The purpose of this program is to create a list of cookies with specific properties, 
		 * and from that list, create two new lists
		 * one of my favorits, and one of the rest.
		 */
			var myCookies = [{
				"name" : "Oreo",
				"shape" : "round"
			}, {
				"name" : "Chips Ahoy",
				"shape" : "round"
			}, {
				"Name" : "Lorna Doon",
				"shape" : "square"
			}, {
				"name" : "Fig Newton",
				"shape" : "square"
			}];
			console.log(myCookies)
			
			//These are the lists I will sort my cookies into
			
			var myFaves = [];
			var theRest = [];
			
			//For every item in my list, check its shape
			//If it's round, add to favorites
			//Otherwise put it with the rest
			
			for(var i=0; i<myCookies.length; i++){
			console.log(i);	
			var currentCookie = myCookies[i];
			//console.log(currentCookie);
			
			if(currentCookie.shape == "square"){
			console.log(currentCookie);
			//Because my cookie is square, put it in myFaves
			myFaves.push(currentCookie);
			}else{
				//If it's not square put it in theRest
				theRest.push(currentCookie);
			}//Thus ends the if/else statement
			}//Thus ends the for loop
			
			console.log("Favorites:");
			console.log(myFaves);
			console.log("Not Favorites:");
			console.log(theRest);
			