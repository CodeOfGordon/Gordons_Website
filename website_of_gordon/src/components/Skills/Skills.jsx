import LogosBlock from "./LogosBlock/LogosBlock";

export default function Skills() {
    return(
        <div id="skills-wrapper" className="info-block">
        <h1>Skills</h1>
        <div id="logos">
          <LogosBlock 
            img1={'/skills/git.png'} img1alt={"git"} 
            img2={'/skills/bash.png'} img2alt={"bash"} 
            img3={'/skills/C.png'} img3alt={"C"} 
            img4={'/skills/javascript.png'} img4alt={"javascript"} />
          <br/>
          <LogosBlock 
            img1={'/skills/react.png'} img1alt={"react"}
            img2={'/skills/tailwind.png'} img2alt={"tailwind"} 
            img3={'/skills/python.png'} img3alt={"python"}
            img4={'/skills/sql.png'} img4alt={"SQL"}/>
          <br/>
          <LogosBlock 
            img1={'/skills/c++.png'} img1alt={"c++"}
            img2={'/skills/qt.png'} img2alt={"qt"}
            img3={'/skills/express-js.png'} img3alt={"Express JS"}/>
        </div>
      </div>
    );
}