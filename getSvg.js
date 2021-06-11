const fs = require('fs');

const w = 900,
  h = 800;

const getSvgStr = (style = '', dom = '') => `
  <svg width="${w}" height="${h}"
  xmlns="http://www.w3.org/2000/svg">
  <style>
    ${style}
  </style>
  <foreignObject x="0" y="0" width="${w}" height="${h}">
    <div xmlns="http://www.w3.org/1999/xhtml">
      ${dom}
    </div>
  </foreignObject>
  </svg>
`;

const fileSave = (fileName, content) => {
  fs.writeFile(fileName, content, 'utf8', (err) => {
    if (err) throw err;
    console.log(`The file${fileName} has been saved!`);
  });
};

const styleStr = `
.contact {
	position: relative;
	color: rgba(0, 0, 0, 0.5);
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 12px;
  font-weight: 700;
  padding: 5px 15px;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.1);
  line-height: 1;
  cursor: pointer;
  text-shadow: 0 1px 0px rgba(255, 255, 255, 0.1);
}
.contact-form {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: white;
  z-index: 5;
  padding: 80px 50px;
  transform: translate3d(-100%, 0, 0);
  transition: 0.3s ease;
  border-radius: 5px;
}
.contact-form.active {
  transform: translate3d(0, 0, 0);
}
.contact-form .close {
  color: rgba(0, 0, 0, 0.7);
  position: absolute;
  right: 30px;
  top: 30px;
}

.cards {
  margin: auto;
  background: #fefefe;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1), 3px 5px 20px rgba(0, 0, 0, 0.2);
  width: 768px;
  height: 550px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 30px;
}
.cards .card {
  display: inline-block;
  margin-right: 20px;
}
.cards .card-toggle {
  z-index: 4;
  position: relative;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: block;
  text-align: center;
  line-height: 1.8;
  font-size: 24px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: 0.3s ease;
}
.cards .card-toggle.active {
  color: white;
  border-color: white;
}
.cards .card-content {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  transition: -webkit-clip-path 1s ease;
  padding: 100px 0 0;
  overflow: hidden;
  border-radius: 5px;
}
.cards .card-content .row {
  display: table;
  width: 100%;
  height: 100%;
}
.cards .card-content .col {
  width: 50%;
  height: 100%;
  display: table-cell;
  transition: 0.3s ease 0.3s;
  transform: translate3d(0, 0, 0);
  vertical-align: top;
}
.cards .card-content .col h2 {
  font-weight: 300;
  font-size: 3em;
  line-height: 1;
  margin: 0 0 30px;
}
.cards .card-content .col h2 strong {
  font-weight: 700;
  display: block;
}
.cards .card-content .col img {
  max-width: 90%;
  width: 100%;
}
.cards .card-content .col.left {
  transform: translate3d(0, 0, 0);
  opacity: 0;
  padding-left: 50px;
}
.cards .card-content .col.right {
  transform: translate3d(100px, 0, 0);
  opacity: 0;
  padding-left: 30px;
}
.cards .card.active .col {
  transform: translate3d(0, 0, 0);
  opacity: 1;
}
.cards #overview .card-toggle {
  position: absolute;
  top: 30px;
  right: 30px;
  opacity: 1;
  color: white;
}
.cards #overview .card-content {
  background-color: #efefef;
  -webkit-clip-path: circle(0% at 91.5% 75px);
}
.cards #overview.active .card-toggle {
  opacity: 0;
}
.cards #overview.active .card-content {
  -webkit-clip-path: circle(270% at 91.5% 75px);
}
.cards #overview .right {
  background: url(https://dl.dropboxusercontent.com/u/26808427/cdn/james.png) no-repeat bottom right;
  background-size: contain;
}
.cards #dribbble .card-content,
.cards #behance .card-content,
.cards #linkedin .card-content,
.cards #twitter .card-content {
  color: white;
}
.cards #dribbble .card-content p,
.cards #behance .card-content p,
.cards #linkedin .card-content p,
.cards #twitter .card-content p {
  color: rgba(255, 255, 255, 0.8);
}
.cards #dribbble .card-content {
  background-color: #f46899;
  -webkit-clip-path: circle(0% at 76px 88%);
  clip-path: circle(0% at 50px 88%);
}
.cards #dribbble.active .card-content {
  -webkit-clip-path: circle(270% at 76px 88%);
  clip-path: circle(270% at 50px 88%);
}
.cards #behance .card-content {
  background-color: #2f98d1;
  -webkit-clip-path: circle(0% at 150px 88%);
  clip-path: circle(0% at 150px 88%);
}
.cards #behance.active .card-content {
  -webkit-clip-path: circle(270% at 150px 88%);
  clip-path: circle(270% at 150px 88%);
}
.cards #linkedin .card-content {
  background-color: #03679b;
  -webkit-clip-path: circle(0% at 220px 88%);
  clip-path: circle(0% at 220px 88%);
}
.cards #linkedin.active .card-content {
  -webkit-clip-path: circle(270% at 220px 88%);
  clip-path: circle(270% at 220px 88%);
}
.cards #twitter .card-content {
  background-color: #7fd0ed;
  -webkit-clip-path: circle(0% at 292px 88%);
  clip-path: circle(0% at 292px 88%);
}
.cards #twitter.active .card-content {
  -webkit-clip-path: circle(270% at 292px 88%);
  clip-path: circle(270% at 292px 88%);
}

form .control {
  position: relative;
  margin-bottom: 10px;
  padding-top: 20px;
}
form .control label {
  position: absolute;
  top: 30px;
  left: 0;
  transition: 0.3s ease;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 2px;
  font-size: 14px;
}
form .control.submit {
  text-align: right;
}
form input,
form textarea {
  width: 100%;
  border: none;
  border-bottom: 1px solid #e3e3e3;
  outline: none;
  padding: 10px 0;
}
form .filled label,
form input:focus + label,
form textarea:focus + label {
  top: 0;
  font-size: 12px;
}
form textarea {
  height: 100px;
}
form input[type=submit] {
  width: auto;
  background-color: #f06292;
  padding: 10px 40px;
  color: white;
  border-radius: 40px;
}
`;

const domStr = `
<div class="cards">
	<div class="contact">Contact Me</div>
	<div class="contact-form">
		<a href="#" class="close"><i class="fa fa-times"></i></a>
		<form>
			<div class="control"><input type="text"  id="name"/><label for="name">Your Name</label></div>
			<div class="control"><input type="text"  id="email"/><label for="email">Email Address</label></div>
			<div class="control"><input type="text"  id="url"/><label for="url">Website</label></div>
			<div class="control"><textarea name="" id="message"></textarea><label for="message">Message</label></div>
			<div class="control submit"><input type="submit" /></div>
		</form>
	</div>
	 <div class="card active" id="overview">
		<a class="card-toggle"><i class="fa fa-arrow-circle-left"></i></a>
		<div class="card-content">
			<div class="row">
				<div class="left col">
					<h2>Personal <strong>Social Card</strong></h2>
					
					<p>Click one of the social icons below to switch between card or click Contact Me link to show the contact form card. <br /><em>Make sure you're running this experiment in the latest Chrome browser.</em></p>
					
				</div>
				<div class="right col">
				</div>
			</div>
		</div>
	</div> 
	

	<div class="card" id="dribbble">
		<a class="card-toggle"><i><span class="fa fa-dribbble"></span></i></a>
		<div class="card-content">
			<div class="row">
				<div class="left col">
					<h2>My <strong>Dribbble</strong></h2>
					
					<p>In ipsa reiciendis, eligendi labore dolores delectus facere perferendis ex architecto reprehenderit maxime exercitationem, libero itaque, at voluptatibus! Sit obcaecati repellat incidunt accusantium voluptas suscipit a consequuntur repudiandae nulla eius.</p>
					
				</div>
				<div class="right col"><img src="https://dl.dropboxusercontent.com/u/26808427/cdn/preview.jpg" alt="" /></div>
			</div>
		</div>
	</div> 
	
	<div class="card" id="behance">
		<a class="card-toggle"><i><span class="fa fa-behance"></span></i></a>
		<div class="card-content">
			<div class="row">
				<div class="left col">
					<h2>My <strong>Behance</strong></h2>
					<p>Quia fugit animi, iure error veritatis? Ipsa quis, deserunt illum culpa ab id mollitia nesciunt commodi aut dolores vero ipsam ut minima neque nam excepturi corporis obcaecati consequuntur accusantium laborum!</p>
				</div>
				<div class="right col"><img src="https://dl.dropboxusercontent.com/u/26808427/cdn/preview.jpg" alt="" /></div>
			</div>
		</div>
	</div>
	<div class="card" id="linkedin">
		<a class="card-toggle"><i><span class="fa fa-linkedin"></span></i></a>
		<div class="card-content">
			<div class="row">
				<div class="left col">
					<h2>My <strong>LinkedIn</strong></h2>
				
					<p>Voluptas aliquam, perferendis laboriosam, cumque, autem vero pariatur dolorum tempora sint hic laborum distinctio suscipit magnam, porro provident maxime labore. Porro vel error quaerat consequatur sapiente? Nostrum at voluptatibus necessitatibus.</p>
				</div>
				<div class="right col"><img src="https://dl.dropboxusercontent.com/u/26808427/cdn/preview.jpg" alt="" /></div>
			</div>
		</div>
	</div>
</div>
`;

fileSave('demo.svg', getSvgStr(styleStr, domStr));
