#select waadb database
USE waadb;

#ADMIN
INSERT INTO `admin` (username, password, first_name, last_name, email_address, telephone_number) VALUES('aaaaa', '123qweQWE',	'aa', 'aa', 'aa@aa.aa', '012-3456789');
INSERT INTO `admin` (username, password, first_name, last_name, email_address, telephone_number) VALUES('bbbbb', '123qweQWE',	'bb', 'bb', 'bb@bb.bb', '012-4567890');

#USER
INSERT INTO `user` (username, password, first_name, last_name, email_address, telephone_number) VALUES('ccccc', '123qweQWE',	'cc', 'cc', 'cc@cc.cc', '012-5678903');
INSERT INTO `user` (username, password, first_name, last_name, email_address, telephone_number) VALUES('ddddd', '123qweQWE',	'dd', 'dd', 'dd@dd.dd', '012-6789034');

#CREATE_EVENT
INSERT INTO `create_event` (admin_id, event_id) VALUES(1,1);
INSERT INTO `create_event` (admin_id, event_id) VALUES(1,2);
INSERT INTO `create_event` (admin_id, event_id) VALUES(1,3);
INSERT INTO `create_event` (admin_id, event_id) VALUES(1,4);
INSERT INTO `create_event` (admin_id, event_id) VALUES(2,5);
INSERT INTO `create_event` (admin_id, event_id) VALUES(2,6);

#APPLY_TICKET
INSERT INTO `apply_ticket` (user_id, event_id) VALUES(1,3);
INSERT INTO `apply_ticket` (user_id, event_id) VALUES(1,4);
INSERT INTO `apply_ticket` (user_id, event_id) VALUES(2,3);
INSERT INTO `apply_ticket` (user_id, event_id) VALUES(2,4);


#EVENT
#1
INSERT INTO `event` (`event_name`, `event_description`, `event_location`, `event_org_name`, `event_dt_start`, `event_dt_end`) VALUES ('Cyberjaya Chocolate Run 2018', 'The first of its kind in Malaysia, CYBERJAYA CHOCOLATE RUN is a friendly and healthy activity that involves road running with participants taking part for their own enjoyment, especially chocolate lovers.
Following the, 1.5km, 3km, 6km and 10km Run course in  Cyberjaya, runners will approach Chocolate Stations offering a variety of Chocolate Treats along the route. On finishing the course, runners will receive a Chocolate Medal and a Finisher’s Bowl filled with chocolate drink, chocolate fondue and tasty dippable treats! leaving participants with sweet memories and enjoyable experience.', 'Taman Tasik Cyberjaya Community Club', 'Knightscape', '2018-01-31 06:00:00', '2018-01-31 20:00:00');

#2
INSERT INTO `event` (`event_name`, `event_description`, `event_location`, `event_org_name`, `event_dt_start`, `event_dt_end`) VALUES ('INOV8 Trail Run Trail Series 2018', 'This is it, our third year into the raw world of trail running. To be held in Bukit Merah Lake Town Resort for Series 1 and Semenyih for Series 2. Trail Runners, unite as we venture into the world of dirty.', 'Bukit Merah Lake Town Resort (Series 1),
Semenyih Eco Venture Resort (Series 2)', 'Cyclic Sport', '2018-04-14 07:30:00', '2018-04-14 19:30:00');

#3
INSERT INTO `event` (`event_name`, `event_description`, `event_location`, `event_org_name`, `event_dt_start`, `event_dt_end`) VALUES ('Song Writing Workshop', 'TeenEdge Malaysia is bringing to you a 4-session Song Writing Workshop with mentor guidance on the skills and knowledge to compose your very own music!

You will receive guidance from Professional Music Composer and Producer, Mr. Elmer Ho. He is a member of Soundtrec Malaysia and has recently returned to Malaysia after working with Dagmusic, Japan for a year on Film and Video Games Music Production.', 'Study Gym
20, Jalan 21/34 Taman SEA, Petaling Jaya, Selangor', 'TeenEdge Academy', '2018-02-24 10:00:00', '2018-02-24 13:00:00');

#4
INSERT INTO `event` (`event_name`, `event_description`, `event_location`, `event_org_name`, `event_dt_start`, `event_dt_end`) VALUES ('Tent Expo 2018', 'TentExpo 2018 concurrent event Malaysia Business Expo (MBEX 2018). We want help business owner related tentage & event service explore more deal for outdoor event tentage, equipment, funrinture, accessories & service. This event target bring 50 exhibitors with 1,500 business visitor. ', 'Malaysian International Trade and Exhibition Center

Kuala Lumpur, Federal Territory of Kuala Lumpur 50480', 'MBEX 2018', '2018-03-01 10:00:00', '2018-03-03 18:00:00');

#5
INSERT INTO `event` (`event_name`, `event_description`, `event_location`, `event_org_name`, `event_dt_start`, `event_dt_end`) VALUES ('PhotoSymposium Asia 2018', 'Following a successful inaugural event in 2017, KLPA EVENTS presents the second PhotoSymposium Asia, a weekend gathering for photographers and followers, on Friday 11 to Sunday 13 May 2018 at The KL Journal Hotel, Kuala Lumpur. This symposium provides a dialogue and discussion platform to the topic PHOTOGRAPHY AS A MEDIUM FOR SOCIAL CHANGE, addressing the definitions, processes and methodology via leading project examples from our selected speakers.
The Symposium will also request delegates to join the Focus Groups led by guests Leaders to engage in dialogue, feedback and recommendations on the topics discussed.

The event will begin with a reception dinner on Friday 11th, and will end with a table top Open Portfolio Viewing by selected delegates on Sunday, 13th May. Entry includes full symposium events, opening dinner, coffee breaks and a welcome pack. Delegates are also free to meet with speakers throughout the weekend. The KL Journal Hotel once again will host the symposium, and are renown for their management, flexibility and superb catering facilities.', 'The KL Journal Hotel

30 Jalan Beremi

Kuala Lumpur, Federal Territory of Kuala Lumpur 50200', 'KLPA Events with Exposure+ Workshops', '2018-05-11 18:30:00', '2018-05-13 18:30:00');

#6
INSERT INTO `event` (`event_name`, `event_description`, `event_location`, `event_org_name`, `event_dt_start`, `event_dt_end`) VALUES ('Export Furniture Exhibition 2018', 'Export Furniture Exhibition (EFE) 2018 is once again set to attract more international buyers and make waves, showcasing furniture of outstanding designs and quality with a variety of world class furniture. Explore a vibrant collection of leading furniture manufacturers along with an outstanding showcase of accessories, all conveniently located in one fun-to-shop destination. The exhibition is a ''must-visit'' show for the following facts:-

More than 270 exhibitors showcasing the very best of high quality and innovative furniture of creative designs.
8 exhibition halls by product category to suit your taste and choice.
30,000 gross sqm of exhibition space.
Free shuttle service from KLIA, city centre and relevant hotels to exhibition venue and vice versa.
Trade directly with manufacturers.
One-stop buying centre offering furniture with uncompromising quality and uniqueness.
Quality service and hospitality by professionals to cater to your needs.
Gateway for international players to penetrate the regional market.
The most representative international furniture fair in Malaysia by the industry for the industry.', 'Kuala Lumpur City Centre

Kuala Lumpur, Federal Territory of Kuala Lumpur', 'EFE Expo', '2018-03-09 09:30:00', '2018-03-12 18:00:00');