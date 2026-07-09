import Image from "next/image";

export default function Home() {
  return (
    <>
      <title>Skyline</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Dela+Gothic+One&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=LINE+Seed+JP&display=swap"
        rel="stylesheet"
      />
      <a href="https://hackclub.com">
        <Image
          className="hc-logo"
          src="https://assets.hackclub.com/flag-orpheus-top.svg"
        alt="Hack Club logo"/>
      </a>
      <div className="banner">
        <Image src="assets/tokyo.jpeg" alt="Tokyo background"/>
        <div className="centered-text">
          <h1 className="heading">SKYLINE</h1>
          <h2 className="subheading">Build a robot, come to Tokyo</h2>
          <div className="button-container">
            <a href="https://rsvp.hackclub.community/skyline">
              <button className="rsvp-button">
                <p>RSVP now!</p>
              </button>
            </a>
            <a href="https://app.slack.com/client/E09V59WQY1E/C0BECEUT1FW">
              <button className="slack-button">
                <p>Join #skyline</p>
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="module">
        <h1>How it works</h1>
        <div className="center">
          <div className="stepbox">
            <Image src="assets/plan.png" alt="KiCAD and Fusion 360 windows"/>
            <h2>1. Plan</h2>
            <p>Plan your robot, design any PCBs, and create a bill of materials</p>
          </div>
          <div className="stepbox">
            <Image src="assets/build.png" alt="A robot chassis"/>
            <h2>2. Build</h2>
            <p>Get funding for your robot and make it a reality</p>
          </div>
          <div className="stepbox">
            <Image src="assets/tokyo2.png" alt="Tokyo city"/>
            <h2>3. Tokyo</h2>
            <p>
              Come to Tokyo, the world's electronic city! Explore the city and
              participate in an amazing global teen hackathon!
            </p>
          </div>
        </div>
      </div>
      <div className="module">
        <div className="row">
          <div className="column">
            <h1>Why Tokyo?</h1>
            <p>
              Tokyo is the capital of Japan, and home to over 37 million people!
              <br />
              <br />
              Japan is the world leader in robotics, with Japanese companies
              supplying 50% of the world’s robots.
              <br />
              <br />
              It's also a great base for a hackathon, with electronics and other
              component shops scattered around the city (see: Akihabara)!
            </p>
          </div>
          <div className="column">
            <Image src="assets/tokyo-collage.png" />
          </div>
        </div>
      </div>
      <div className="module">
        <h1>What can I build?</h1>
        <p>Check out other robot projects from teens in Hack Club!</p>
        <div className="scroll-container">
          <div className="scroll-card">
            <img src="https://github.com/user-attachments/assets/cadff312-ba82-44c8-aa8c-f7b8f666c1b0" />
            <div className="scroll-card-text">
              <h2>GPT on Wheels</h2>
              <p>
                Shreemahor built an AI-controlled home robot with voice, vision and
                environmental sensors!
              </p>
            </div>
          </div>
          <div className="scroll-card">
            <img src="https://blueprint.hackclub.com/user-attachments/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTAyMjcsInB1ciI6ImJsb2JfaWQifX0=--2da6ccf181529f2a256868132eba15941010c3ab/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fbGltaXQiOlsyMDAwLDIwMDBdLCJjb252ZXJ0Ijoid2VicCIsInNhdmVyIjp7InF1YWxpdHkiOjgwLCJzdHJpcCI6dHJ1ZX19LCJwdXIiOiJ2YXJpYXRpb24ifX0=--0f85faa91c373105a0f317054e965c1f47e93a37/image.png" />
            <div className="scroll-card-text">
              <h2>BowBot</h2>
              <p>Ved built a robotic arm to play the violin!</p>
            </div>
          </div>
          <div className="scroll-card">
            <img src="https://user-cdn.hackclub-assets.com/019ec3d4-a685-7c59-b881-b55d6417bc34/download.gif" />
            <div className="scroll-card-text">
              <h2>Self-balancing robot</h2>
              <p>Ben built a robot that keeps itself upright!</p>
            </div>
          </div>
          <div className="scroll-card">
            <img src="https://cdn.hackclub.com/019eb083-14db-7ebf-8338-729ef0d4dc61/Screenshot%202026-06-10%20131813.png" />
            <div className="scroll-card-text">
              <h2>PID Line Follower</h2>
              <p>
                Arnav built a line-following robot using the PID algorithm and a
                Bluetooth interface!
              </p>
            </div>
          </div>
          <div className="scroll-card">
            <img src="https://cdn.hackclub.com/019e7af0-7d54-77ff-ac07-236e2968b075/20260106_220205.jpg" />
            <div className="scroll-card-text">
              <h2>Robot Car</h2>
              <p>
                Koray built a robot car that detects obstacles and surface edges to
                keep itself safe!
              </p>
            </div>
          </div>
          <div className="scroll-card">
            <img src="https://cdn.hackclub.com/019f02e8-4a3b-79b3-8919-98ed9180385a/Screenshot%202026-06-25%20231524.png" />
            <div className="scroll-card-text">
              <h2>Quadruped</h2>
              <p>
                Rutvik designed a servo-based quadruped robot with a custom PCB!
              </p>{" "}
              {/* Fixed! */}
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="row">
          <div className="column">
            <p>
              Made with 💖 by teens from{" "}
              <a href="https://hackclub.com">Hack Club</a>!
            </p>
          </div>
          <div className="column" style={{ textAlign: "right" }}>
            <a href="https://hackclub.com/philosophy">
              <p>About</p>
            </a>
            <a href="https://hackclub.com/privacy-and-terms">
              <p>Privacy &amp; terms</p>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
