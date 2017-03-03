$(document).ready(function(){

	//quote libraries
	var movies = [
		["Off the top of my head, I'd say you're looking at a Boeski, a Jim Brown, a Miss Daisy, two Jethros and a Leon Spinks, not to mention the biggest Ella Fitzgerald ever!", "Rusty Ryan (Oceans' 11)"],
		["If you choose to lock your heart away, you’ll lose it for certain", "Jack Sparrow (Pirates of the Carribean)"],
		["The problem is not the problem. The problem is your attitude about the problem. Do you understand?", "Jack Sparrow (Pirates of the Carribean)"],
		["Just keep swimming.", "Dory (Finding Nemo)"],
		["900 years of time and space and I’ve never met anyone who wasn’t important.", "The Doctor (Doctor Who)"],
		["We're all stories in the end, so make it a good one.", "The Doctor (Doctor Who)"],
		["One heartbeat away from the presidency and not a single vote cast in my name. Democracy is so overrated", "Frank Underwood (House of Cards)"],
		["You know the difference between me and you? I bleed red and you bleed green. You know what I see? I see a man without a country. Not hard enough for this right here and maybe, just maybe, not smart enough for them out there.", "Avon Barksdale (The Wire)"],
		["I think, maybe, the best things, the richest things aren't supposed to come easily, and that sometimes the moments that make the most sense happen when everything else doesn't", "Juliet O' Hara (Psych)"],
		["Divorce is always hard. Especially on the kids. ‘Course I am the result of my parents having stayed together so ya never know.", "George Costanza (Seinfeld)"]

	];
	var books = [
		["If you know the enemy and know yourself you need not fear the results of a hundred battles.", "Sun Tzu (The Art of War)"],
		["I don't know if you've ever noticed this, but first impressions are often entirely wrong.", "Lemoney Snicket (The Bad Beginning)"],
		["People who say money doesn’t matter are like people who say cake doesn’t matter—it’s probably because they’ve already had a few slices.", "Lemoney Snicket"],
		["For me the takeaway of these stories is that, no matter how many options we seem to have on our screens, we should be careful not to lose track of the human beings behind them.", "Aziz Ansari (Modern Romance: An Investigation)"],
		["Whatever the problem, be part of the solution. Don’t just sit around raising questions and pointing out obstacles.", "Tina Fey (Bossypants)"],
		["Our job in this life is not to shape ourselves into some ideal we imagine we ought to be, but to find out who we already are and become it.", "Steven Pressfield (The War of Art)"],
		["Fear doesn't go away. The warrior and the artist live by the same code of necessity, which dictates that the battle must be fought anew every day.", "Steven Pressfield (The War of Art"],
		["It’s no use going back to yesterday, because I was a different person then.", "Lewis Carroll (Alice in Wonderland)"],
		["When you have eliminated all which is impossible, then whatever remains, however improbable, must be the truth.", "Arthur Conan Doyle (Sherlock Holmes)"],
		["As honest as you can expect a man to be in a world where its going out of style.", "Raymond Chandler (The Big Sleep)"]

	];
	var music = [
		["This one kid said somethin' that was really bad. He said I wasn't really black because I had a dad. I think that's kinda sad, mostly cause a lot of black kids think they should agree with that", "Childish Gambino (Hold You Down)"],
		["I used to care what people thought, but now I care more. I mean, nobody out here's got it figured out. So therefore, I've lost all hope of a happy ending. Depending on whether or not it's worth it, so insecure, no one's perfect", "Childish Gambino (3005)"],
		["And you don't wanna stay there cause them your worst cousins. Got roaches at their crib like them your first cousins", "Kanye West (Family Business)"],
		["That's life, that's what all the people say. You're ridin' high in April, shot down in May. But I know I'm gonna change that tune. When I'm back on top, back on top in June", "Frank Sinatra (That's Life)"],
		["Relationships look closer in that rearview. Finally slow it down and realize she ain't nowhere near you.", "Childish Gambino (Ms. Daisy)"],
/*		["Music Quote2", "Artist2"],
		["Music Quote2", "Artist2"],
		["Music Quote2", "Artist2"],
		["Music Quote2", "Artist2"],
		["Music Quote2", "Artist2"]*/
	];
	
	//sets library directory to firt library
	var library = shuffle(movies);

	//shuffles a library when called
	function shuffle(o) {
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};
	//sets the correct library when called (tab clicked)
	function pickLibrary(){
		if ($('#option1').parent().hasClass('active')) {
			library = movies;
		} else if ($('#option2').parent().hasClass('active')) {
			library = books;
		} else {
			library = music;
		};
	};

	//returns the quote to the html
	function getQuote(){
		
		$('#quote').html('" ' + library[0][0] + ' "');
		$('#author').html('- ' + library[0][1]);
	
		$("#quote").css('opacity', 0);
        $('#quote').animate({opacity: 1}, 1000);

        $("#author").css('opacity', 0);
        $('#author').animate({opacity: 1}, 1000);
        library.push(library.shift()); 
	};
	//fades text when loading new quote for 
	function greyout(element){
          if ($(element).hasClass('.greyout')!==true) {
          	$(element).addClass(' greyout');
          };
      	};
	//Generates new quote 
	$('#generator').click(function(){
          getQuote();
          greyout('h1');
          greyout('.end');
		});
	//changes active library
	$('#option1').parent().click(function(){
		$('#background').removeClass('books-theme music-theme movies-theme').addClass('movies-theme')
		library = shuffle(movies);
	});
	$('#option2').parent().click(function(){
		$('#background').removeClass('books-theme music-theme movies-theme').addClass('books-theme')
		library = shuffle(books);
	});
	$('#option3').parent().click(function(){
		$('#background').removeClass('books-theme music-theme movies-theme').addClass('music-theme')
		library = shuffle(music);
	});
	getQuote();
});
