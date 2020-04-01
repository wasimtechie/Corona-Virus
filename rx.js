@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

:root {
	--primary-color: #2d2254;
	--secondary--color: #f5c42f;
	--text-color: #c5bbec;
}

* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

body {
	font-family: 'Montserrat', sans-serif;
	background: var(--primary-color);
	color: #fff;
	font-size: 18px;
	line-height: 1.6;
}

h1,
h2,
h3,
p {
	margin-bottom: 10px;
}

a {
	text-decoration: none;
	color: #fff;
}

ul {
	list-style: none;
}

.btn {
	display: inline-block;
	border: 0;
	background: var(--secondary--color);
	color: #fff;
	border-radius: 20px;
	padding: 8px 30px;
	text-transform: uppercase;
	font-weight: bold;
	font-size: 16px;
	margin-top: 10px;
}

.btn:hover {
	transform: scale(0.98);
}

.primary-text {
	color: var(--primary-color);
}

.secondary-text {
	color: var(--secondary--color);
}

.section {
	position: relative;
	padding: 0 20px;
}

/* Section Top */
.section-top {
	min-height: 500px;
	background: url('https://i.ibb.co/PhVR2Vh/bg1.png') no-repeat center center/cover;
}

.section-top h1 {
	font-size: 70px;
	line-height: 1.3;
}

.section-top .content {
	position: absolute;
	top: 100px;
	right: 20px;
	width: 55%;
}

/* Section Stream */
.section-stream {
	min-height: 700px;
	background: url('https://i.ibb.co/bsX6RV0/bg2.png') no-repeat center center/cover;
}

.section-stream h2 {
	font-size: 35px;
}

.section-stream .play {
	width: 27%;
	position: absolute;
	top: 100px;
	left: 50px;
}

.section-stream .content {
	position: absolute;
	width: 50%;
	top: 130px;
	right: 70px;
}

.section-stream .content > div, .section-grid > div {
	background: rgba(255, 255, 255, 0.1);
	padding: 20px;
	margin-bottom: 20px;
	border-radius: 10px;
}

/* Section Grid */
c
