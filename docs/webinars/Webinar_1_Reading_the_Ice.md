Spengler Cup Data-hack Sport Innovation Challenge 2026 - Webinar #1 Reading the Ice
https://youtu.be/LF7eXxl0vYY?si=9QQJ5WD-mEFkM0Po


29 views  Oct 3, 2026  #SICDataHack #SportInnovation #IceHockey
Watch Webinar #1: “Reading the Ice: Data, Metrics & Intuition”, held on 2 October 2026 as part of the Spengler Cup Data-hack Sport Innovation Challenge.


Powered by ThinkSport, in partnership with scoreTec, and in collaboration with the Spengler Cup, the challenge asks university students and independent tech-builder teams:


How can we turn real ice hockey performance data into an experience people actually want to explore?


In this webinar, Martin Rumo from scoreTec introduces the full data set, including aggregated performance statistics, event data and game video. Joonas Ruosteinen and Martin Zöllner bring perspectives from HC Davos and the Spengler Cup, helping teams connect the numbers with what happens on the ice.


The session helps participants explore:


What data is available for their projects
* How different data types can reveal patterns in a game
* Why hockey context matters when interpreting performance
* Which questions could lead to an engaging experience for fans
* 

The challenge concludes with a Final Pitching Day on 7 December 2026 at The Circle in Zurich.


🔗 Explore the challenge and participant resources:
https://innovation-thinksport.agorize...


📩 Questions? Contact:
datahack.challenge@thinksport.org


#SICDataHack #SportInnovation #IceHockey #SportsData #FanEngagement #ThinkSport #scoreTec #SpenglerCup




0:02
2 seconds
[music]
0:07
7 seconds
Okay, I think we can start.
0:10
10 seconds
So, uh hello everyone uh and welcome to our first Spangla Cup data hack sport innovation challenge workshop reading
0:19
19 seconds
the ice data matrix and uh intuition. So today I will get closer to the ice hockey uh data behind the challenge and
0:28
28 seconds
explore uh what it can tell us.
0:34
34 seconds
So for anyone I haven't met yet, I'm Audrey, innovation coordinator at Singport and I'd be one of your point of
0:42
42 seconds
contact throughout the challenge. So please reach out whenever you need help or have a question. I'll be happy to
0:50
50 seconds
help you. Concerning the agenda of the first webinar, we'll start uh with a quick challenge recap.
1:01
1 minute, 1 second
Uh then uh Martin Rumo will introduce the data and after that we'll hear uh from our ISO key experts, leave time
1:09
1 minute, 9 seconds
from uh for question and finish with the next step.
1:18
1 minute, 18 seconds
So this challenge uh brings together Singport, Score Tech and the Spangler Cup. Uh we also grateful to uh the cont
1:27
1 minute, 27 seconds
and the circle for their support in making the program and uh the final event possible. So thank you to all of them.
1:40
1 minute, 40 seconds
So where we are now? Uh so please um make sure every member has join your
1:47
1 minute, 47 seconds
team on a by October 9. Uh the kickoff materials uh are already uh in the
1:55
1 minute, 55 seconds
resource section. You should receive a a message this morning. So you can use them as you begin working on your ID. If
2:03
2 minutes, 3 seconds
you haven't registered yet, the Kon will take you uh to the platform.
2:09
2 minutes, 9 seconds
And finally, take time to have a look uh on all your resources in the platform and during the webinars. Uh you will get
2:17
2 minutes, 17 seconds
access to the full data this afternoon and the recording of today will be available tomorrow. So don't hesitate to
2:24
2 minutes, 24 seconds
ask uh some question on the discussion wall on a directly to your own chat.
2:32
2 minutes, 32 seconds
A quick recap on the timeline. Um so today uh this is the first of three
2:39
2 minutes, 39 seconds
online workshop. You'll develop your solution through uh November 15th. Uh then uh go through the local selection
2:48
2 minutes, 48 seconds
phase. For academics team uh you will present in front of your professor and for the independent tech builder teams
2:56
2 minutes, 56 seconds
uh you'll be evaluated by experts and then the selected teams will have time to prepare themselves for the pitch on December 7 at the circle in Zerik.
3:11
3 minutes, 11 seconds
We'd love also to see what your teams are learning and creating. So um if you share highlights on linkadin please tag
3:19
3 minutes, 19 seconds
singport on the spanglos so we can follow uh your progress
3:26
3 minutes, 26 seconds
and just uh before to uh turn uh to Martin I would like to take a a quick
3:34
3 minutes, 34 seconds
picture together so you can turn on your camera so be prepared. One, two, three. Cheese.
3:49
3 minutes, 49 seconds
Maybe one more with a new person. So, you can turn on your camera. Great.
3:59
3 minutes, 59 seconds
Welcome. One, two, three. Cheese.
4:06
4 minutes, 6 seconds
And now uh I'm pleased to hand over to uh Martin Remo, data scientist and analytics translator at schooltech. And
4:15
4 minutes, 15 seconds
Martin uh will walk us through the data available for the challenge and help us understand how to start exploring it.
4:27
4 minutes, 27 seconds
Okay. Thanks.
4:30
4 minutes, 30 seconds
Um what I will do is just uh really quick recap of what I showed on on Wednesday
4:37
4 minutes, 37 seconds
already. Uh also you have uh all the data um documented um not like on a you
4:47
4 minutes, 47 seconds
can download the documentation and sample data that um you know lets you
4:53
4 minutes, 53 seconds
understand the data. Uh today we will um we will talk about different metrics
5:01
5 minutes, 1 second
that you find in the data and especially about um you know what is their worth
5:08
5 minutes, 8 seconds
for your challenge and and how can you uh you know create an intuition um
5:16
5 minutes, 16 seconds
uh an intuitive access to to this kind of matrix. That's why we have the two
5:23
5 minutes, 23 seconds
experts invited. So um you might um go to the next slide.
5:34
5 minutes, 34 seconds
[snorts] So um beside the sample now you have the full data set um available. I
5:41
5 minutes, 41 seconds
think you will uh send the link or did you already send it?
5:49
5 minutes, 49 seconds
Yeah, we don't hear you but yeah. Okay.
5:58
5 minutes, 58 seconds
Um I will send it this afternoon.
6:01
6 minutes, 1 second
Exactly. And so this is a a shareepoint where you can see the different files.
6:06
6 minutes, 6 seconds
You can see also the two files that are actually the sample files. That's where you have the documentation in it. And
6:12
6 minutes, 12 seconds
then uh you have um um like eight CSV file where you have uh events and match
6:22
6 minutes, 22 seconds
statistics. So um I'm going to always talk about event data when we have a
6:29
6 minutes, 29 seconds
temporal uh sequence of events of individual events that are um documented
6:37
6 minutes, 37 seconds
and the match statistic are the aggregated data meaning that we already uh have uh some statistics that are
6:46
6 minutes, 46 seconds
calculated for this game. This is all the same gain the three periods and uh what you have is also the entire video
6:54
6 minutes, 54 seconds
for it and we will also quickly you know talk about how how the video can be used but you can um go to the next slide.
7:08
7 minutes, 8 seconds
All right, let's uh for uh you know getting into the mood maybe the official video that wise okay the provider of
7:16
7 minutes, 16 seconds
this kind of data um how they present themsel
7:24
7 minutes, 24 seconds
[music]
7:33
7 minutes, 33 seconds
[music]
7:36
7 minutes, 36 seconds
Heat. Heat.
7:39
7 minutes, 39 seconds
[music]
7:47
7 minutes, 47 seconds
[music]
7:56
7 minutes, 56 seconds
[music]
8:02
8 minutes, 2 seconds
[music]
8:06
8 minutes, 6 seconds
Heat. Heat.
8:30
8 minutes, 30 seconds
Okay. Now, in this video, you saw different things. In the end, you saw what I showed last time, how they build
8:36
8 minutes, 36 seconds
up the the base stations that are uh um you know, mounted around the arena
8:45
8 minutes, 45 seconds
um that are necessary to to calculate the positions of the players and the park. And from this you get the
8:52
8 minutes, 52 seconds
different data um that is then represented like for example in heat maps how you saw it right in the beginning and of course
9:01
9 minutes, 1 second
animation of how uh the the players are traveling and so on. But um you can uh
9:09
9 minutes, 9 seconds
especially see of course in the data set that we provide uh what the data is all
9:15
9 minutes, 15 seconds
about. And let's talk uh um you know um about this data. So uh in the beginning
9:24
9 minutes, 24 seconds
you have the event data and from the invent data some aggregated data is um
9:32
9 minutes, 32 seconds
calculated. This is what you already have without doing any calculation yourself. Of course, you are free to
9:39
9 minutes, 39 seconds
calculate your own aggregated data from the event data which you might think is more interesting either for um
9:48
9 minutes, 48 seconds
describing performance or for entertaining um uh fans. So um maybe you keep some of the aggregate data in mind.
9:58
9 minutes, 58 seconds
I will I will talk about these data points with Yonas and Martin. So there's
10:05
10 minutes, 5 seconds
the plus minus statistics that um that quantifies uh you know the number
10:13
10 minutes, 13 seconds
of goals uh that were scored while you were on the ice and and of course minus is the goals you conceded while you were
10:22
10 minutes, 22 seconds
on the ice. How long were you on the ice? How many shifts were there? how many shots did an an individual player
10:29
10 minutes, 29 seconds
um uh you know how how many times did he shoot uh on the goal uh how successful
10:38
10 minutes, 38 seconds
was those shots and so on. So um there's quite a lot of course there's always the
10:43
10 minutes, 43 seconds
the basic statistics that is like um um
10:50
10 minutes, 50 seconds
there's the number of goals, assists and penalty minutes that are always in the official you know um in the simple
10:58
10 minutes, 58 seconds
official game um report. So um so maybe also the other uh slide
11:07
11 minutes, 7 seconds
where we are talking about event data and uh as we have seen in the kickoff what is really interesting about the
11:14
11 minutes, 14 seconds
event uh data uh is that we have every individual event that events are like for example
11:23
11 minutes, 23 seconds
face offs, passes, shots and [snorts] we have the attributes that go with this event like if you have a face off you uh know who won the face off, who lost it.
11:34
11 minutes, 34 seconds
Um, passes, who made the pass, who who who received the pass. Um, so there's
11:42
11 minutes, 42 seconds
always the primary and secondary player that is involved in the in the event, but there's also, and that makes this um
11:49
11 minutes, 49 seconds
data set so interesting, there's always also the position of all the other players during this event.
11:58
11 minutes, 58 seconds
So uh so this is quite rich and so that lets you I showed that last time it lets you uh build like stories some kind of
12:07
12 minutes, 7 seconds
stories where you can um infer the actual behavior at a certain moment of the players.
12:16
12 minutes, 16 seconds
Okay. So uh I think that's it. We can go to the next slide um for the video. Uh
12:25
12 minutes, 25 seconds
so there's the video here. It's from uh a single camera that is turning this uh but it is quite up high and you you can
12:35
12 minutes, 35 seconds
see actual you should be seeing most of the time all the players on the camera um in in this view. Um which is
12:45
12 minutes, 45 seconds
extremely interesting if you are working with event data. It's extremely interesting. Sometimes you want to
12:52
12 minutes, 52 seconds
verify if you understand correctly what happened through the event data. The event data um just gives you a single
13:00
13 minutes
event with where the players are and what happened. But sometimes you have to go back to the video. You can do that
13:07
13 minutes, 7 seconds
using the timestamp. Of course you have in the event data you have the time stamp and of course in in you have also
13:14
13 minutes, 14 seconds
um you know the the um the time in the video. So you can go and search for this particular
13:22
13 minutes, 22 seconds
um moment when those events happened that you are looking at in the event data
13:29
13 minutes, 29 seconds
file and you can verify uh what the meaning of of [snorts] uh this situation was. So this is really
13:38
13 minutes, 38 seconds
interesting. Of course you have possibilities to do video overlay but this is uh for most of you will be quite
13:46
13 minutes, 46 seconds
um um you know um difficult because you have to take into
13:53
13 minutes, 53 seconds
account um uh you know the perspective uh of the camera and everything. So um
14:00
14 minutes
so uh this is something that would be you know um rather difficult to do or
14:08
14 minutes, 8 seconds
maybe in a simplified manner it will but the the video is actually really interesting also to jump into the video
14:14
14 minutes, 14 seconds
when from from a dashboard that you do because that is always interesting. What the video show is every is actually
14:21
14 minutes, 21 seconds
everything you know an expert can see from the video everything he needs to know. A lot of things also that are not
14:29
14 minutes, 29 seconds
in the data. Like for example, you know, um with how much uh intensity a check
14:37
14 minutes, 37 seconds
was uh was done or um or um you know sometimes you get a feeling of what was
14:45
14 minutes, 45 seconds
the intention of the of the player from the cam from the from the footage. But this is all things subtle things that
14:54
14 minutes, 54 seconds
you can't find in anymore. So, so the the video data is rich but it is not you
15:01
15 minutes, 1 second
cannot process it like tabular data. So that's the that's the um the difference.
15:09
15 minutes, 9 seconds
Okay, we can go to the next one. I showed that also yesterday. This is just
15:16
15 minutes, 16 seconds
for me uh or for you better. Um a a tip
15:22
15 minutes, 22 seconds
um if you want to use uh animations or or visualizations that um that also
15:31
15 minutes, 31 seconds
imply the the ring the hoke rink then you can if you are working in Python you can use this Python library that is
15:38
15 minutes, 38 seconds
extremely interesting and and simple to use. You can just have this ring and have all your data from the events data
15:46
15 minutes, 46 seconds
file for example um plot onto the rink uh using you know
15:54
15 minutes, 54 seconds
the the syntax of mudplot lip. So you go just pip install hoke rink and you have it uh when you can use it. So um this is
16:04
16 minutes, 4 seconds
only for event data. Of course aggregated data doesn't make sense because it's not you know maybe maybe heat maps creating heat maps
16:13
16 minutes, 13 seconds
um is also a form for aggregation but uh else you can go to the next slide that shows how you can like for example
16:22
16 minutes, 22 seconds
create heat maps in the various forms um just like you would use um you know mattplot lip. So this actually plots it
16:32
16 minutes, 32 seconds
on um on the ring.
16:37
16 minutes, 37 seconds
Okay. So you can go to the next slide again. Exactly. So now we would like to
16:45
16 minutes, 45 seconds
talk um about uh you know the the approach that uh that you can have
16:52
16 minutes, 52 seconds
towards the data with uh Yonas um from the U21 is a head coach meaning that he
17:02
17 minutes, 2 seconds
is also into you know um tactics not only uh the the athletic part and
17:11
17 minutes, 11 seconds
and Martin Solno. He's the IT manager at uh Hoke Club. He actually makes it
17:18
17 minutes, 18 seconds
possible that we have this data first of all by installing it in in Davos which is the only arena that has this high
17:26
17 minutes, 26 seconds
quality data in Switzerland.
17:31
17 minutes, 31 seconds
And uh so uh uh also about Martin Solna what is interesting he's been working for the international ISO federation
17:40
17 minutes, 40 seconds
build up all the IT infrastructure there for years and of course he has also um
17:51
17 minutes, 51 seconds
he has um experienced the the data revolution in in uh in ISO. Uh
18:00
18 minutes
I remember we met very early uh because um he
18:07
18 minutes, 7 seconds
uh we could look at different um solutions that were out there before. So he saw the evolution of this technology
18:16
18 minutes, 16 seconds
from quite near in his um in his quest to make hoke more attractive for the
18:25
18 minutes, 25 seconds
fans of international hoke. So um so uh he's going to have some interesting
18:33
18 minutes, 33 seconds
stories to tell I hope as well. So um maybe we can
18:40
18 minutes, 40 seconds
um now um you know stop the presentation for a while so we
18:48
18 minutes, 48 seconds
can maybe see the people who are talking. Maybe if we can pin down Martin and that would be nice.
18:58
18 minutes, 58 seconds
And uh I I would like to start uh first of all uh not talking about data but
19:04
19 minutes, 4 seconds
first talking about ISO before we uh uh turn to data. So um when it comes to
19:13
19 minutes, 13 seconds
performance in ISK, I would like you uh to you know what would be for you um the
19:21
19 minutes, 21 seconds
three most important factors uh for winning games in ISO if you had just what is on top of your mind?
19:32
19 minutes, 32 seconds
First of all, hello to all. Everybody knows the name Yonas Jonas Rosten from Finland and uh I'm uh here with Martin
19:41
19 minutes, 41 seconds
and thank you Martin for inviting me here. It's a pleasure to be here and talk about these things. I'm really really interested it on myself and my background is as well for sure coaching
19:49
19 minutes, 49 seconds
for past 15 years but uh I've been working working a lot with the ice hockey data and trying to implement that
19:57
19 minutes, 57 seconds
as much as we can in order to to develop the player develop the team and club to be uh better and get to the next take to
20:05
20 minutes, 5 seconds
the next step. Uh first uh a little bit about the background as well that I was working with the Finnish Isaki
20:12
20 minutes, 12 seconds
Association for 4 years. Uh and our one of my big big uh responsibilities was as well the data collection from the from
20:20
20 minutes, 20 seconds
the games from the players not only from our teams, national teams but for the for the opponent as well. And the idea
20:27
20 minutes, 27 seconds
behind was that how do we start collecting the data and how can we use that and the important part was that we were trying to figure it out where the
20:36
20 minutes, 36 seconds
game is going. what happens all over the world. How can we use that for our benefit in order to develop the country's game, countries players and as
20:45
20 minutes, 45 seconds
well recognize that hey which thinks we are head of the head of the other countries and our opponents in general of the development of the whole
20:54
20 minutes, 54 seconds
structural uh playing part or the development part of players and the and the teams in general. And uh the story
21:03
21 minutes, 3 seconds
starts even more earlier when uh 8 years ago we started figuring out this raw data and we didn't have systems that
21:10
21 minutes, 10 seconds
nowadays exist and uh uh we started figuring out that how can we measure more clearly about our teams and players
21:17
21 minutes, 17 seconds
performances and we started do it ourselves. We didn't have AI tools. We didn't have automatic uh cameras. We
21:25
21 minutes, 25 seconds
were detecting things things from the game that was beneficial for us. We had the basic data that everybody knows score goals, shots, blocks, hits, losing
21:34
21 minutes, 34 seconds
the pucks, crossing, blue line crossings, ozone time, playing time, etc., etc. But we were looking a little bit something more. So we uh we started
21:42
21 minutes, 42 seconds
doing that by ourselves, counting scoring situations more or less. But despite the scoring situation, we were
21:50
21 minutes, 50 seconds
trying to detect how the individuals are making themselves use usable on the game
21:57
21 minutes, 57 seconds
situation. how bene how much they bring benefit for their team. And throughout the years, we started collecting the
22:03
22 minutes, 3 seconds
data and started predicting what kind of stats the players should have in order to maybe at one day go to pro. We talk
22:12
22 minutes, 12 seconds
about juniors now more and U20 U20H juniors, U8H juniors and uh kind of a
22:19
22 minutes, 19 seconds
predict what are the numbers where the player can can uh hopefully succeed on someday and what kind of numbers he should have right now on age of 20 in
22:28
22 minutes, 28 seconds
order to play on high level in upcoming years and uh yeah that's a little bit the background for the question for the great question about the the data and
22:37
22 minutes, 37 seconds
what are the important things the three things well there's a lot of important things uh for me the most important part is of course to understanding the
22:44
22 minutes, 44 seconds
numbers that what does the numbers tell you like numbers as a numbers are just a number and you don't you don't get anything out of that so you need to
22:52
22 minutes, 52 seconds
understand the perspective out of the numbers uh basic game metrics basic game data how much you're creating I think
22:59
22 minutes, 59 seconds
that's the important part how much your team creates on specific situations uh and on the other side what does the
23:07
23 minutes, 7 seconds
opponent create against you uh from what kind of game situations you get those scoring chances or goals, what kind of
23:15
23 minutes, 15 seconds
game situations the opponent gets the same. Uh then the momentum data basically that
23:23
23 minutes, 23 seconds
who's in charge of the game, who has more puck time, who has more position inside the game and if the momentum
23:30
23 minutes, 30 seconds
changes, why that changes and what happens inside there. And I think those are kind of the biggest things for us or for me. I'm speaking now behalf of
23:39
23 minutes, 39 seconds
myself not to anyone else. So I think those are the most important parts for me what I always look from the from the game data after the game games uh and sometimes during the games as well.
23:52
23 minutes, 52 seconds
Hopefully I replied on the question.
23:54
23 minutes, 54 seconds
No that's good. I'm going to I'm going to I'm going to have some follow-up questions for you. But uh first you want to add something Martin?
24:03
24 minutes, 3 seconds
No as anyway in this respect I have more the seat of a fan and of course it's as
24:12
24 minutes, 12 seconds
a fan uh forgetting my technology background I'm joining games where there
24:22
24 minutes, 22 seconds
is too much data presented to me so I'm completely lost in what the what's
24:30
24 minutes, 30 seconds
presented or not enough. So it's really sometimes uh I think and this is very
24:38
24 minutes, 38 seconds
good what Yonas said we have probably not two words to the fans and I'm not
24:47
24 minutes, 47 seconds
criticizing marketing but in sport we are working with experts. So Yonas is an
24:54
24 minutes, 54 seconds
expert how to develop a young player with all means and I miss the expert who says
25:03
25 minutes, 3 seconds
that's cool for a fan. [snorts] It's really I repeat what I said on on Wednesday.
25:11
25 minutes, 11 seconds
Ice hockey is a part of the entertainment business.
25:17
25 minutes, 17 seconds
my eyes and sometimes some people forget that and I think it should be always
25:26
25 minutes, 26 seconds
I'm what I see that the first time do I understand what's going on
25:33
25 minutes, 33 seconds
and I say that also of course with the background uh what we have shown in that one slide
25:40
25 minutes, 40 seconds
we will provide you a lot of data so it's really it's a data set what um
25:48
25 minutes, 48 seconds
not every NHL game what's uh supposed to be the best and the strongest league is
25:55
25 minutes, 55 seconds
having as a baseline in data. So never forget it's what we work out with this
26:02
26 minutes, 2 seconds
data has to be understandable and not only from sport or from the expert out
26:10
26 minutes, 10 seconds
of the sport also for a consumer or a fan.
26:16
26 minutes, 16 seconds
All right. So I I would like to take uh three or two things now out of of this.
26:22
26 minutes, 22 seconds
First uh from Martin. So this is really I think also important for all the participants of the data hack is that um
26:30
26 minutes, 30 seconds
finding the right amount of of information that you are um actually uh communicating. So you said too much
26:38
26 minutes, 38 seconds
data, sometimes too much, sometimes too little. It's all about uh um how how much do you actually you know don't
26:48
26 minutes, 48 seconds
overcharge it. And um and also this uh this idea of uh of entertaining or
26:56
26 minutes, 56 seconds
creating a sort of emotion uh which is maybe hard through data. But the idea that I get from what you said Martin is
27:04
27 minutes, 4 seconds
that data can help you u that help um you to feel like an expert because if
27:12
27 minutes, 12 seconds
you understand it of course you know understanding the data and understanding the game I think that is or
27:19
27 minutes, 19 seconds
understanding the game through the data that's uh a little bit of the the the holy grail here that we are looking for
27:28
27 minutes, 28 seconds
right and and to yas So um
27:34
27 minutes, 34 seconds
when to the question what what is really really important in um in ISO you
27:41
27 minutes, 41 seconds
mentioned three things you mentioned um how much the teams create on the ice now
27:48
27 minutes, 48 seconds
you have to maybe so you say creation momentum and transitions those three I
27:54
27 minutes, 54 seconds
picked up meaning momentum you basically associate ated momentum with puck possession.
28:03
28 minutes, 3 seconds
Mhm. Who's controlling the game? Yeah, exactly.
28:06
28 minutes, 6 seconds
Yeah. Who? Yeah. If you control the park, you control the game, right? And the transitions is what happens when the park position changes, right? because
28:15
28 minutes, 15 seconds
those are really those as I understand are key moments where you can turn uh you know you you can you can get in
28:24
28 minutes, 24 seconds
front of the goal if you do it quickly without having the defense being for example prepared for it. So you can um you can increase your your chances here.
28:36
28 minutes, 36 seconds
But I I want to you know if you as an expert say uh how much is can the team create on
28:45
28 minutes, 45 seconds
the ice for another expert it seems like yeah sure I know what you mean but please for layman what does it mean to
28:56
28 minutes, 56 seconds
create something on the ice well I think the eventually the end product is a goal that you see on the on the scoreboard and uh well that's the
29:04
29 minutes, 4 seconds
that's the ultimate goal eventually But not rarely rarely to be honest those chances end up to be the best results
29:13
29 minutes, 13 seconds
that you you you hope for. So that's for the goal. So creating more or less creating scoring chances for your team.
29:21
29 minutes, 21 seconds
And uh I think it's a little bit tricky to understand as well that what the definition of the scoring chance in the ice hockey is because in some programs
29:30
29 minutes, 30 seconds
the program is let's say we talk about vice hockey in vice hockey it's based on sensor sensor uh uh hardware that the
29:38
29 minutes, 38 seconds
the sensors on top on top of the the ceiling of the rink and on the puck and the players uh detects what happens where the puck is moving what is kind of
29:47
29 minutes, 47 seconds
the danger zone danger zone. If the puck travels through that danger zone and goes towards the net, it gives it some kind of exp like expected situation that
29:57
29 minutes, 57 seconds
might happen there. But on my opinion, it's not as as clear. That's the end result as well on those scoring chances and goals in general. But what we and
30:06
30 minutes, 6 seconds
what I look for is at well that how those situations happen. So we talk about a little bit this puck position, we talk about momentum and as well
30:14
30 minutes, 14 seconds
transition. All those combined together hopefully creates us an good opportunity to create more and how do we create
30:21
30 minutes, 21 seconds
that's the interesting part and that's the that's actually the hardest part if we talk about the uh data hardware for example for that to recognize it can be
30:31
30 minutes, 31 seconds
attached on the where did you win the puck did you win the puck what happened on the defensive zone before you go on
30:39
30 minutes, 39 seconds
the offensive zone uh what happens in the offensive zone game uh is the goal for scoring chance done in special team
30:47
30 minutes, 47 seconds
face off power play maybe penalty kill as well and uh what's behind that because like I understand the topic for
30:56
30 minutes, 56 seconds
us is to how to visualize and how to visualize the statistics and data for the audience as well and everybody sees
31:03
31 minutes, 3 seconds
the end result but for me the interesting and the development part is always that what happens before that how do we come to the point that we can
31:12
31 minutes, 12 seconds
score or we create a scoring chance and then on the other way around, why does it happen that the opponent gets the same chance on on our side? So, what
31:20
31 minutes, 20 seconds
happens on the defensive? So, when we don't have the puck or what happened before before the situation occurred.
31:29
31 minutes, 29 seconds
So, thank you very much. Um I I totally agree. I think uh that you always see
31:37
31 minutes, 37 seconds
the end result in terms of the score. uh but uh how many chances have been
31:44
31 minutes, 44 seconds
created for example is also interesting and how especially how now if you talk about how chances are created you are
31:52
31 minutes, 52 seconds
talking about you said I I repeat for the audience to also emphasize what I think they can use. So where uh did the
32:01
32 minutes, 1 second
puck where did you win the puck? How did you get into the offensive zone, the blue line crossing? And then how did you
32:10
32 minutes, 10 seconds
actually create the shot the the fi the uh so uh I I I believe I heard um that
32:20
32 minutes, 20 seconds
you want to take a shot when the goalkeeper is moving because that's where he's most vulnerable, right? So,
32:27
32 minutes, 27 seconds
so, so you have you have those three uh let's say uh situations create uh winning the puck, crossing the blue
32:36
32 minutes, 36 seconds
line, trying to uh create the the actual chance. And now if you're talking about another team like let's say two fans
32:45
32 minutes, 45 seconds
talk to each other and say well I think today they are trying this and this and this because they seem to see a pattern, right?
32:54
32 minutes, 54 seconds
So for example, I know that from blue line crossing you can do dumping, you can do stick handling or passing. So
33:01
33 minutes, 1 second
there's a there's some pattern that that emerge, right? And also you want to tell your kids what kind of pattern you want to see, right? So give us some ideas here.
33:15
33 minutes, 15 seconds
What what are the what are the language you are using?
33:19
33 minutes, 19 seconds
Well, I think like it might be a stupid answer, but I I think the game to be so complex that I cannot predict and I
33:26
33 minutes, 26 seconds
cannot tell the players what they should be able to do there on the ice. And eventually that's of course we can base
33:33
33 minutes, 33 seconds
our playing within the statistics that what is safe for us that we take take away the possibility that the opponent
33:41
33 minutes, 41 seconds
might get something against us if we screw things up here on the blue line for example. And uh like there's a lot
33:49
33 minutes, 49 seconds
of studies about about the for example talk about blue line entries and going towards the o offensive zone and trying to create great chances. The best odds
33:58
33 minutes, 58 seconds
are if you get the puck inside middle of the ice not from the boards but as game
34:05
34 minutes, 5 seconds
is a game you you don't always have those optimal uh opportunities to create
34:12
34 minutes, 12 seconds
the situations and chances. So like the question I understand but the answer is way way more complex on my opinion
34:20
34 minutes, 20 seconds
because we as a coaches maybe some coaches back in the days it was more clear that this happens that happens
34:28
34 minutes, 28 seconds
stick with that but nowadays the game is so so uh quick so fast decision making
34:34
34 minutes, 34 seconds
is on the middle of everything and uh kind of the creativity comes out from that and within the creativity there's a
34:42
34 minutes, 42 seconds
lot of moving particles and million different options if not billion different options that can happen. And
34:49
34 minutes, 49 seconds
if you see on the game one situation, let's imagine a situation that uh we are having the puck and the puck is now on
34:57
34 minutes, 57 seconds
the on the blue line and we are doing the offensive rush towards the offensive zone towards the opponent's net. We chip
35:04
35 minutes, 4 seconds
the puck deep and one player goes and wins the puck. Pass on the blue line, he shoots and scores. That happens once in a lifetime. That's not going to happen
35:13
35 minutes, 13 seconds
again because every time if even it looks similar, it's not. There's always something something small changing
35:21
35 minutes, 21 seconds
inside the game inside that same situation. So even though we can prove within the data that hey maybe this
35:29
35 minutes, 29 seconds
would be the effective way but even the data don't understand that there was something some changes always involved
35:37
35 minutes, 37 seconds
despite the numbers look the same. I don't know did that answer to to the question.
35:42
35 minutes, 42 seconds
No, I I I do understand. I do understand. But on the other hand, I believe that like for example, you want to give them sometimes uh clear
35:51
35 minutes, 51 seconds
ideas what they can do because the the the game is so fast that they don't have
35:58
35 minutes, 58 seconds
time to think on the ice. They have to have some ideas in their head. If I like
36:05
36 minutes, 5 seconds
with that defender, I'm always going to dump because I'm going to lose any stick handling well with him or something like that. You understand what I mean?
36:12
36 minutes, 12 seconds
Yeah. Yeah. It's uh Yeah, I do understand. Yeah. Maybe of course we give them ideas and we practice different kind of models and different kind of things that what you could do on
36:20
36 minutes, 20 seconds
the games. But it's but we cannot tell them every time what to do in the situations. Maybe when we talk about the storyline of the one one individual
36:28
36 minutes, 28 seconds
game, let's say we lead the game four nothing on third period. So we don't need to score anymore and we learn to win the game. And those are the moments
36:37
36 minutes, 37 seconds
that you play against the clock that okay now we don't need to try to dingle dangle true and try to have a awesome awesome play we can be beneficial and
36:45
36 minutes, 45 seconds
effective according the let's say statistics that if we just play the puck there opponent has a far away to to attack back on our our zone for example.
36:54
36 minutes, 54 seconds
So we manage the situation. Yes, I do understand what you what you mean. There are patterns but on the other side there
37:01
37 minutes, 1 second
are not patterns. [laughter] Yeah, I do understand but you now used a word that would actually mean exactly
37:08
37 minutes, 8 seconds
what I uh wanted to ask you. I wanted to ask you about the models that you gave.
37:13
37 minutes, 13 seconds
You used the word model. So you said yes I am um I am giving them models so they
37:22
37 minutes, 22 seconds
can uh take quicker decisions on the ice. That's my interpretation, right? So
37:29
37 minutes, 29 seconds
maybe give us one or two example of such a moto on the games or on the practices or in general.
37:37
37 minutes, 37 seconds
No, you can you know just get that we have an idea what you mean by when you
37:43
37 minutes, 43 seconds
say a model you give him a a model like for example you say okay we win the puck in the defensive zone. Uh what do I want
37:52
37 minutes, 52 seconds
to see next? the wall you want to see next that all the players go north. So we go up [laughter] we go up as much as
38:00
38 minutes
we can but let's say we stick with the blue line the the model one one what we talk a lot uh for the scanning point of
38:08
38 minutes, 8 seconds
view what the player tries to observe there inside the game is that can you get inside all right if the player is having the pop on the board the next
38:15
38 minutes, 15 seconds
step would be that he tries to get inside the middle ice not sticking on the board uh it can be done by passing
38:23
38 minutes, 23 seconds
or or uh or skating depends on the situation but that that's the goal. Next thing what we would like to do when the puck is on let's say on the blue line
38:31
38 minutes, 31 seconds
doesn't matter is it on the corner on the middle lines uh what we like to see is that we create some kind of support.
38:38
38 minutes, 38 seconds
So the support means that if I'm having the puck, Martin is close by to me and he would be the one who, for example, skates
38:46
38 minutes, 46 seconds
through the defender's defensive line and I can play the puck to him behind the opponents or pass him when he tries
38:54
38 minutes, 54 seconds
to go there. And we try to maintain the speed in order to to make the defense to struggle that if we're slow, we don't
39:02
39 minutes, 2 seconds
have a chance there. And uh yeah, well, I don't know. So, so, so I I I was I was uh um convinced that when I asked you
39:11
39 minutes, 11 seconds
for success factors in ISO that somebody of you would say speed. But I mean, this is so normal for you that everything has
39:19
39 minutes, 19 seconds
to be done fast that it doesn't even uh show up. But hey, before I before I
39:26
39 minutes, 26 seconds
would like to uh give also the chance to uh people in the in the audience to to ask you some questions, maybe the last
39:34
39 minutes, 34 seconds
one you were also saying talking about momentum and um that's one for Martin
39:40
39 minutes, 40 seconds
because um this um in football we see that more and more
39:48
39 minutes, 48 seconds
um that we have this curve of momentum and I would like to ask you how you uh
39:57
39 minutes, 57 seconds
see the benefit or the you know this is for fans. What what does it like?
40:06
40 minutes, 6 seconds
Is it an interesting um graph to give to fans the momentum?
40:14
40 minutes, 14 seconds
Have you seen?
40:15
40 minutes, 15 seconds
Yes. Yeah. Yeah. I would say yes. The problem there is a bit for yonas that
40:22
40 minutes, 22 seconds
momentum change is different as most of the systems are producing. We are lucky
40:30
40 minutes, 30 seconds
uh wisoki has uh uh considered all the games who were ever recorded with the system are in this calculation.
40:42
40 minutes, 42 seconds
There are some system out in the world I expect as well in football where this is
40:48
40 minutes, 48 seconds
just showing that something happened in the game. But again a momentum change in a hockey game is a very specific
40:57
40 minutes, 57 seconds
momentum is not again for Yonas as a coach. A he can see that much earlier as
41:05
41 minutes, 5 seconds
me as a fan and B to have it in a graph is nice to show to fans but I see more
41:13
41 minutes, 13 seconds
the problem do they really understand what's behind I mean mostly is on the same graph I know don't know now in
41:21
41 minutes, 21 seconds
football but in isok some systems they show when a penalty was happen or a goal
41:27
41 minutes, 27 seconds
was happened etc this is clear that when you score a goal go that it's a certain
41:34
41 minutes, 34 seconds
type of momentum but it doesn't mean it has changed and you can't see was this a short-handed goal so meaning the team
41:44
41 minutes, 44 seconds
who is uh less players than the other scores a goal I mean that is one of the classic of changing of momentum in our
41:53
41 minutes, 53 seconds
sport or is an injury of a one of your top five players or that's why I'm saying there is a certain an
42:02
42 minutes, 2 seconds
entertainment you can do. But again, a momentum chart not explained is exactly
42:10
42 minutes, 10 seconds
what I was talking about before. It looks nice. It looks kind of sexy, but I don't think most of the people
42:18
42 minutes, 18 seconds
understand what's behind. And in relation to that, what also is sometimes misused, this was very good. What
42:27
42 minutes, 27 seconds
actually Yonas was explaining is a figure what pops up many times expected goal. Now the four or five leading
42:37
42 minutes, 37 seconds
system on the world they have four or five interpretation of an expected goal.
42:42
42 minutes, 42 seconds
So the first time I saw it a few years ago I thought oh cool this is one of the best thing you can do prediction games.
42:50
42 minutes, 50 seconds
But if I see a number 0.1 2 to 0.123
42:58
42 minutes, 58 seconds
I don't understand you cannot score less than a goal. So also there the message
43:05
43 minutes, 5 seconds
should be more clear to the fans. It's of course again Yonas and all the expert
43:12
43 minutes, 12 seconds
around me in the club they know exactly what it means. It's not a high quality chance, but if we score it, actually we
43:21
43 minutes, 21 seconds
had luck that the puck went over the glove or this and that. But a fan, he doesn't understand a a number less than
43:29
43 minutes, 29 seconds
one goal. So again, my core message is whatever you see, try to anticipate it
43:37
43 minutes, 37 seconds
has to be understandable and not only good-looking. Yeah, if I can jump on that question even though that was from Martin. [laughter] Okay.
43:48
43 minutes, 48 seconds
I there was there's a question already on the wall on the on the chat about that like what what uh I would like the
43:55
43 minutes, 55 seconds
fans to see as well and then Martin was talking about momentum and you were talking about m asking about momentum as well. How I would think about it would
44:03
44 minutes, 3 seconds
be the story line of the game like what what kind of story ends up to how the story ends where it starts and where it
44:11
44 minutes, 11 seconds
ends up and I think that would be the way more interesting factor because in the story you have up and downs you have diversity you have different situations
44:20
44 minutes, 20 seconds
momentum changes as well and how can we implement that for the fans as well to make them understand that what is the
44:27
44 minutes, 27 seconds
story all about it might be one- nothing win for example for your But you've been struggling around the whole game
44:34
44 minutes, 34 seconds
statistic wise. So how do you build the story line on that win even though you were struggling on the statistic point of view? Maybe you were
44:42
44 minutes, 42 seconds
just efficient enough or the goalie was good but how do you kind of explain that part of the of the people and I think that's the interesting part as well
44:49
44 minutes, 49 seconds
and that's really really valuable. Uh what you say basically is if you can use the data to create uh a story that uh
44:58
44 minutes, 58 seconds
that uh you know has some drama to it, you will you will you will entertain
45:05
45 minutes, 5 seconds
with the storytelling. Uh before just quickly before I I give to the to the audience for questions um expected value
45:15
45 minutes, 15 seconds
it's true it's it's um it's intuitively difficult to grasp what it means. Um
45:22
45 minutes, 22 seconds
because uh it it is the expected value of goals um which is a
45:29
45 minutes, 29 seconds
u concept from probability um theory and um sometimes to give a intuition for a
45:38
45 minutes, 38 seconds
matrix. It's sometimes good to have a example from another um from from something that the fan knows for example
45:46
45 minutes, 46 seconds
now or or or the non-expert knows. Um the roll of a dice has an expected value
45:53
45 minutes, 53 seconds
of 3.5 even though you cannot roll a 3.5. You can only roll a three or a
46:01
46 minutes, 1 second
four. You see? So the expected value are three point. That's a that's a a statistical momentum. But so often
46:10
46 minutes, 10 seconds
people think that expected value is what how many goals we expect the other to
46:17
46 minutes, 17 seconds
score. But it's not. This is wrong because then it would be a a a you know a um an intention number. It would be
46:26
46 minutes, 26 seconds
not a a floatingoint number. So, so this sometimes helps also to you know take
46:35
46 minutes, 35 seconds
another example to explain this example but Martin if I can jump in this is very important for all the participant mainly
46:44
46 minutes, 44 seconds
uh I expect now we have a lot of Swiss guys mainly in Switzerland there is a reverence so you have a game result four
46:53
46 minutes, 53 seconds
to five and the reverence of a TV expert is yeah and see the expected goal is one
47:00
47 minutes
to two. So again you should never put these two numbers. You have not you have
47:06
47 minutes, 6 seconds
done now a maybe a bit high-end explanation but a fully correct one. So [snorts] we should never mix the the
47:16
47 minutes, 16 seconds
what's in the data into an explanation what it shows numbers. So it should be always understandable.
47:27
47 minutes, 27 seconds
But I see we got already questions. Yeah. Yeah.
47:32
47 minutes, 32 seconds
So are there also data points beyond what happens on the eyes such as attendy, crowd noise, atmosphere, stories and the game player or fans?
47:43
47 minutes, 43 seconds
Mhm.
47:44
47 minutes, 44 seconds
Is this the idea to include a kind of data as well to create more engagement?
47:50
47 minutes, 50 seconds
Thanks very much for this question. I tell you what what was driving me from technology to ice hockey was really the
48:00
48 minutes
atmosphere the the intensity and that really it's between a a player and the
48:08
48 minutes, 8 seconds
guy on the stand it's this this we all love the atmosphere it's a bit different in North America where again they are
48:17
48 minutes, 17 seconds
one level higher in entertainment but by us this is really a part is the
48:23
48 minutes, 23 seconds
atmosphere in the arena and I have never played uh high skills but I know that
48:30
48 minutes, 30 seconds
the players of course they play different between a crowded noisy
48:38
48 minutes, 38 seconds
atmosphere than a an empty hall. This is for sure. Now data is quite difficult to
48:46
48 minutes, 46 seconds
collect there. Yes, you can hear it over the microphones, whatever. But still, do how do you measure the atmosphere? It's not so so easy.
49:05
49 minutes, 5 seconds
So, um, so the the question of Thomas got too hard. So I think uh most of people would
49:13
49 minutes, 13 seconds
like to know from Yonas uh if you could like have influence what
49:20
49 minutes, 20 seconds
the fans are talking about after the game like instead of saying okay uh this
49:27
49 minutes, 27 seconds
team won and this guy scored what would you wish they would um you know talk about and discuss?
49:40
49 minutes, 40 seconds
Well, that's a good good question. I'm pretty sure like you said, what they're talking more is that who made the mistake or who succeeded. And I think
49:49
49 minutes, 49 seconds
that's the that's the thing on the fan culture that that's that's on the on point. But, uh, if I would think about the like data
49:57
49 minutes, 57 seconds
a little bit at what we can measure and what we can sow for sure, it's the storyline of the game, but what was the general feeling when you were watching
50:06
50 minutes, 6 seconds
the game and what from where the feeling comes from? Of course, like Martin was answering the previous question, it probably comes as well about the about
50:14
50 minutes, 14 seconds
the environment where you are, how much there's people, how much the people is involved, what's the what's the emotions there, but how is your team playing, who
50:22
50 minutes, 22 seconds
you're cheering for, how can you see the intensity in, how much the players are moving, how much to be honest on the
50:30
50 minutes, 30 seconds
like for the coach's point of view, it's not the funnest part, but how entertaining the game is. And when the game is entertaining, it means that it
50:37
50 minutes, 37 seconds
it's intense. There's a lot of hits, contacts. It goes back and forth all the time that the audience is all of a
50:44
50 minutes, 44 seconds
sudden every time holding their breaths or yelling and screaming or cheering when something happens all of it all the
50:52
50 minutes, 52 seconds
time. and uh how fast the game can be and I think that's kind of the thing that that's a fan point of view what I
51:00
51 minutes
enjoy as a as a fan only watching a game that how much it flows through back and forth how much there's intensity how
51:08
51 minutes, 8 seconds
much there's these wow effects that somebody was good how was the team playing together well and was the
51:15
51 minutes, 15 seconds
emotions from the eyes coming to me when I was watching the game and I think that's the thing that I would hope for sure the fans to to
51:23
51 minutes, 23 seconds
And uh I think part of them you can visualize as well to the do the data for the people and and uh and implement it as well.
51:35
51 minutes, 35 seconds
Uh wouldn't you want them to um to guess what kind of model they
51:43
51 minutes, 43 seconds
received uh in the last training before the game? You know what I mean?
51:48
51 minutes, 48 seconds
I don't I don't I don't I [laughter] don't think so. I don't think so. I don't think so. For sure. If the curiosity comes, then maybe that they
51:57
51 minutes, 57 seconds
have an understanding what our team is trying to do, how they try to play.
52:02
52 minutes, 2 seconds
Maybe that's for sure. That's the that's the that's a one part out of that for sure. And on the other side to show what the opponent is doing as well. Maybe on
52:11
52 minutes, 11 seconds
the same time to we talk about a lot on pre-scouting for example before the games and going through the things that
52:17
52 minutes, 17 seconds
the opponent for example doing. Why not to try to give that for the fans as well?
52:23
52 minutes, 23 seconds
Yeah, I remember there there's a famous coach in working in Loausan and he's famous for that he put certain players
52:32
52 minutes, 32 seconds
to certain opponents. So as you may know in ice hockey we do line changes. So
52:38
52 minutes, 38 seconds
when the game is stopped uh the guys who have worked on the ice go out for a rest and new ones come in. And he's really
52:46
52 minutes, 46 seconds
famous for to catch the momentum of the game that he says those players they go now to the ice to play against or to
52:55
52 minutes, 55 seconds
create the situation that our team has an advantage. And of course this is but
53:02
53 minutes, 2 seconds
to say the truth this is all new style of coaching. I mean there are still some dinosaurs around who does sins where
53:11
53 minutes, 11 seconds
they have done 50 years and with data of course we can show for example this who played against whom but you also need
53:21
53 minutes, 21 seconds
there an explanation and that's what you said of course it's interesting then when you get after a game the intention
53:29
53 minutes, 29 seconds
of the coach was that our best line plays always against the weakest line of
53:36
53 minutes, 36 seconds
the opponent something like that. Of course, that would be then for the fans. Uh very interesting to know.
53:46
53 minutes, 46 seconds
We got this question from Mr. uh Viet.
53:50
53 minutes, 50 seconds
Uh would you love to hear to talk about the hardest worker of your team?
53:57
53 minutes, 57 seconds
Yeah, for sure. I think the definition of the hardest worker every like I'm thinking of the perspective of these highlights you know and know you watch
54:06
54 minutes, 6 seconds
the recaps from the game you only see the highlights somebody makes a awesome goal nice assist that's all about it and
54:13
54 minutes, 13 seconds
many times that these players uh are misjudged and their effect is misjudged
54:20
54 minutes, 20 seconds
as well uh because people don't see it so of course I would appreciate it to
54:27
54 minutes, 27 seconds
make the audience to see and understand as well that it's not only about the goals. It's about everyone and every individual and every individual in the
54:36
54 minutes, 36 seconds
team has maybe different role. there are different kind of players and what value they bring for their team during the game flow and during the during the game
54:44
54 minutes, 44 seconds
in general and uh yeah I would uh I would appreciate that actually on on the highest level of professional hockey you have that we
54:52
54 minutes, 52 seconds
have a certain ceremony and Martin told me to put some stories on uh we award after the game the best player of the
55:01
55 minutes, 1 second
game and I don't know who those who are a bit more into there is uh votings this and that, but in fact it's poor
55:10
55 minutes, 10 seconds
It's the the sport chief who decides to which player he wants to give a goodie from that game. And according
55:19
55 minutes, 19 seconds
to me, this is super wrong as we should really talk about hard workers or we had
55:27
55 minutes, 27 seconds
once a systematic uh we were trying to see which is the best player in that
55:33
55 minutes, 33 seconds
respect from the game. So all this um is is really is very interesting and please
55:41
55 minutes, 41 seconds
try to think about those perspective as well that maybe in a highlight show or
55:47
55 minutes, 47 seconds
in a in a in a snapshot of data is not the one who scores a goal but the one
55:54
55 minutes, 54 seconds
who actually did the fifth time the best pass quality pass that the goal happens
56:01
56 minutes, 1 second
and I think still uh Thomas was asking about what's What makes the hardest worker for you? I I think then that's
56:08
56 minutes, 8 seconds
that's a hardest worker is the guy who's skates hard, is intense, goes on the battles,
56:15
56 minutes, 15 seconds
goes to block the shots, takes hits, gives hits, goes on the opponent's nets.
56:21
56 minutes, 21 seconds
And I I think that's kind of goes back and forth. When he loses the puck, he stops, he returns. The skating distance, the skating speeds, the the the acceleration, stop and stops and starts.
56:32
56 minutes, 32 seconds
what you can prove and what you can see as well from the data and then maybe on the heat map especially with the with the uh vice hockey you can detect where
56:41
56 minutes, 41 seconds
the player is moving and how much he uses the space when he has the puck and when he don't have the puck and I think that's a valuable and that's that's a
56:49
56 minutes, 49 seconds
metric that you can detect from the data as well but there is also something I hope
56:57
56 minutes, 57 seconds
really that the recordings are available soon as uh it's uh not only who those
57:04
57 minutes, 4 seconds
who missed it's always good also probably to relisten again uh for sure from our side as this was
57:12
57 minutes, 12 seconds
not really mentioned we appreciate the participation we really believe in this
57:19
57 minutes, 19 seconds
innovation in our sport and our sport is ready for those kind of innovations so
57:27
57 minutes, 27 seconds
be never shy to ask shoot whatever you need to know in the hockey club the walls we have really a good collection
57:36
57 minutes, 36 seconds
of expert in all means plus Martin and Thomas of course they are also they have
57:43
57 minutes, 43 seconds
a rich uh background with a lot of knowledge so let's be really in exchange of of
57:51
57 minutes, 51 seconds
questions if you have um more question please put them on the discussion wall on aorize
58:00
58 minutes
and our expert will reply as soon as they can.
58:05
58 minutes, 5 seconds
More stories than uh on the final pitch on 7 of December when we are fully
58:12
58 minutes, 12 seconds
relaxed and we see all the wonderful challenge solutions we we can charge on it.
58:21
58 minutes, 21 seconds
Perfect.
58:24
58 minutes, 24 seconds
Just to recap quickly, our uh next uh webinar uh is on Tuesday, October 6 uh
58:34
58 minutes, 34 seconds
from 5 to 6 uh p.m. It will talk about making data playable with focus on
58:42
58 minutes, 42 seconds
interaction and engagement. How to turn an insight into something people want to try uh for themsel.
58:52
58 minutes, 52 seconds
And now uh thank you to all our speaker and to everyone who joined today. Uh you will find as I said all the material on
59:01
59 minutes, 1 second
Agorize and you're welcome to contact us directly on the chat on the platform or uh at our uh
59:10
59 minutes, 10 seconds
email address datahack.challengeport.org if question come up as your team get
59:16
59 minutes, 16 seconds
started. So, have a great day and uh bonapetit. Thank you. Bye-bye. Thanks. Bye.
59:25
59 minutes, 25 seconds
Bye. Bye.
59:27
59 minutes, 27 seconds
[music]
59:34
59 minutes, 34 seconds
[music]