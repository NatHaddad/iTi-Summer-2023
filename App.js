import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Container1">
        <h1> Nathalie Amgad</h1>
        <h3> Web developper</h3>
        <button className="Btn">Contact me</button>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>

      <div className="Container2">
        <h1 className="Title">About me</h1>
        <div className="Content">
          <h3 className="RightAlign">
            I am a highly motivated and passionate fourth-year student pursuing
            a degree in Computer Science, With a strong foundation in software
            engineering,<br></br>I am eager to contribute my skills and
            knowledge to the field. Throughout my academic journey, I have
            gained a comprehensive understanding of various programming
            languages, data structures,
            <br></br> algorithms, and software development methodologies. I have
            successfully completed projects that involved developing web and
            mobile applications, implementing machine learning algorithms,
            <br></br>and solving complex computational problems.
          </h3>
          <div className="CenterAlign">
            <button id="downloadButton" className="Btn1">Download Resume</button>
          </div>
        </div>
      </div>

      <div className="Container3">
        <h1> Skills</h1>
        <p>
          Skills in software engineering (SE) play a crucial role in the
          development of robust and innovative software solutions. SE
          professionals possess a range of technical and non-technical abilities
          that enable them to excel in this field.<br></br>
          Technical skills such as proficiency in programming languages, web
          development frameworks, and database management allow SE specialists
          to design and build efficient software systems.
        </p>

        <div className="FocusContent">
          <h1> MY FOCUS</h1>
          <hr></hr>
          <ul className="left">
            <li>UX/UI Design</li>
            <li>Responsive Design</li>
            <li>Web Design</li>
            <li>Graphic Design</li>
          </ul>
        </div>
        {/* <div className="SkillsContent">
          <ul className="skillsList">
            <li>Software development</li>
            <li>Technical writing</li>
            <li>Research and collecting data</li>
            <li>C++</li>
            <li>C#</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>ReactJS</li>
            <li>NodeJS</li>
            <li>Python</li>
            <li>Microsoft Office (Word, PowerPoint, Excel)</li>
            <li>Adobe Photoshop and Illustrator</li>
          </ul>
        </div> */}
      </div>

      <div className="Container4">
        <h1>Portfolio</h1>
        <div class="grid-container">
          <div class="column">
            <div class="rectangle1">
              <h2>Web Design</h2>
            </div>
            <div class="rectangle2">
              <h2>Graphic Design</h2>
            </div>
            <div class="rectangle1">
              <h2>Mobile App Design</h2>
            </div>
          </div>
          <div class="column">
            <div class="rectangle2">
              <h2>Web Design</h2>
            </div>
            <div class="rectangle1">
              <h2>Graphic Design</h2>
            </div>
            <div class="rectangle2">
              <h2>Mobile App Design</h2>
            </div>
          </div>
        </div>
      </div>
      <footer className="Footer">
    <p>&copy; 2023 Nathalie Amgad. All rights reserved.</p>
    <ul>
        
    </ul>
    <button className="Btn3"> Contact me</button>
</footer>

    </div>
  );
}
// function downloadResume() {
//   var downloadLink = document.createElement('a');
//   downloadLink.href = 'https://drive.google.com/file/d/1Awp8b-bnVhgLwitpP-I-dmXKmd4HwxlR/view?usp=drive_link';
//   downloadLink.download = 'Nathalie Amgad_cv.pdf';
//   downloadLink.click();
// }

export default App;
