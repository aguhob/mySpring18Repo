///NOTES 2/23/18 Working code for a number prompt add.
//
//var firstNumber = prompt("Type in a number...stored as a string at first, and then we'll convert it with parseint.");
//
//var firstNumber = parseInt(firstNumber);
//
//var secondNumber = prompt("Type in another number...stored as a string at first, and then we'll convert it with parseint.");
//
//var secondNumber = parseInt(secondNumber);
//
//var sum = firstNumber + secondNumber
//
//console.log(sum)
//console.log(typeof sum) //for debugging
//
//document.getElementById("test").innerHTML = "<h1>" + sum + "</h1>";
//
//
//


//console.log("Testing")

//program that randomly selects quotes. make sure each quote is on one line or do "text" + "text"

var quotes = [
    
"Ship is safe in harbor, but that's not what ships are built for.",

"Of all spiritual teachings, the Tao is deepest. To understand it: go slow, keep simple. Or you may miss it. Everything has two extremes. You cannot survive in the extremest. The Tao is in the middle. Where there's no energy in either direction. How long can a pendulum stay at rest? Forever. That is Tao. The center. But it doesn't stay static and fixed. -My summary of the Untethered Soul, ch 18.",

"Love is a discipline. -M",

"Impossible is not a fact. It's an attitude. There is no way you can deliver victory without optimism. -Christina Figuerees, organizer of the Paris Climate Conference, Dec 2015",

"There are decades where nothing happens; then there are weeks where decades happen. -Vladimir Lenin",

"Discipline equals freedom. – Jocko Willink",

"Design: The most efficient path to awesome. -M",

"Do or do not. There is no try. -Yoda",

"When life is breaking down, GET EXCITED... you're about to have a breakthrough. -AM Noel",

"In lean times, people are grasping at ways to make $. But value, and thus money, comes through people. Thus, prioritize people. -M",

"The reason your dreams get obstructed is because cleaning the closet or making phone calls are given more value in that immediate moment than your dreams. -Blair Singer",

"You can't solve a problem with the same consciousness that created it. -Einstein",

"Action removes the doubt that theory cannot solve. -Tehyi Hsieh",

"Human beings are made for miracles. -AM Noel",

"You need to learn how to select your thoughts just the same way you select your clothes every day. This is a power you can cultivate. If you want to control things in your life so bad, work on the mind. That's the only thing you should be trying to control. -Elizabeth Gilbert",

"Disrupt the autopilot. Life is meaningless, so it is up to us to assign it meaning. :)  -M",

"Everyone wants a happy life without difficulties or suffering. We create many of the problems we face. No one intentionally creates problems, but we tend to be slaves to powerful emotions like anger, hatred and attachment that are based on misconceived projections about people and things. We need to find ways of reducing these emotions by eliminating the ignorance that underlies them and applying opposing forces.  -D. Lama",

"Humans are living patterns of emotions, pain and love that are ancient and yet, made new again. -M",

"Man becomes great exactly in the degree in which he works for the welfare of his fellow-men. -M. Gandhi",

"The best moments usually occur when a person's body or mind is stretched to its limits in a voluntary effort to accomplish something difficult and worthwhile...There is ample evidence that work can be enjoyable, and that indeed, it is often the most enjoyable part of life. Work transforms the worker from an animal guided by instincts into a conscious, goal-directed, skillful person.  -M. Csikszentmihalyi, Flow",

"Just about any rigorous training changes how you see the world. -J. Wright",

"Go to the people. Live with them. Learn from them. Love them. Start with what they know. Build with what they have. But with the best leaders, when the work is done, the task accomplished, the people will say 'We have done this ourselves.'  -Lao Tzu",

"To live content with small means; to seek elegance rather than luxury, and refinement rather than fashion; to be worthy, not respectable and wealthy, not rich; to study hard, to think quietly, to talk gently, act frankly; to bear all cheerfully, do all bravely, await occasions, hurry never. in other words, to let the spiritual, unbidden, and unconscious grow up through the common. -Bruce Lee",

"When you want to go faster, that's when you should go slower. -My wise friend, Mario Yepes-Baraya",

"It became clear to me every day that paternalism is something in which I both participated in and to which I was subjected. -Me, May 2000 HGSE practicum paper ",

"Take your time baby and follow the dance that your body is leading. -my dear wise friend, Ilaria Bossi",

"The tension should be in your wanting to push yourself more, and in your deliberately not letting yourself, with self-awareness of what is going on. You make sure that the beginning is only encouraging, so easy that you might even smile a little being like, what is this? But you know what the bigger picture is, and the inertia will be past because it will have no foothold at all. -another wise friend, Ken L.",

"Inner truth is the accumulated power of spiritual experience. It is knowledge of the cosmic laws we have acquired through self-development. It differs from faith, which is what we trust things to be. Faith requires explanations and defenses, whereas in knowing, these are unnecessary. Because inner truth is firmly placed, it can be felt at the distance of thousands of miles. -Yi Jing",


"Wait for clarity. -M",

"Non-action seems ineffective and unnatural, although this is from the fearful point of view of our ego. We need to beware of attaching ourself enthusiastically to 'solutions.' We must remain in the ambiguous spot, undecided and uncommitted to acting along any lines. If we let go of these pressures and modestly turn our eyes away from the problem, the solution will come of itself. -Yi Jing",

"You must be credible, before you can be incredible. -Anonymous",

"You got the power to let power go. -Kanye West",

"You have to trust that the dots will connect somewhere in your future. You have to trust in something, your gut, destiny, karma, whatever. Because believing that the dots will connect down the road will give you the confidence to follow your heart even when it leads you off the well worn path. -Steve Jobs, Stanford U commencement",

"While they jumpin' round ya They trying to take all of your dreams But you can't allow it. -Janelle Monae",

"The only thing cooler than doctors who write, are writers who heal. -M",


];

// test -- console.log(quotes) // console.log(randomNumber);
// Math.random goes from 0.00 to 0.99. Just multiiply times number of quotes in the array. Pseudorandom only. true random by lightning strike: random.org

var randomNumber = ( Math.random() * 35); //35 quotes, but count starts at zero. so don't add 1.

randomNumber = Math.floor(randomNumber); //floor rounds down, ceil

document.getElementById("test").innerHTML = quotes[randomNumber];
