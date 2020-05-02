import React from "react";

const AboutSection = () => (
  <section className="container about-section">
    <div className="row">
      <div className="col-md-7 offset-md-3">
        <h1 className="section-title">
          About <span>me</span>
        </h1>
        <h4 className="section-subtitle">
          Creator &bull; Anime fan &bull; Gamer &bull; Writer &bull; Aspiring
          chef
        </h4>
        <p>
          My name is Henry but some people call me Dru. I'm a programmer and
          creator based in Nairobi, Kenya. The short story? I build things that
          work on computers and I enjoy it. I consider and intersection of
          people, product and innovation to be my Ikigai. Sounds hippie? I know
          <span role="img" aria-label="Laugh emoji">
            {" "}
            🤣
          </span>
          .
        </p>
        <p>
          The long story? I'm an Electronics engineer turned software engineer
          with close to five years professional experience. Currently, I work as
          an instructor at <strong>Moringa School </strong>and the Android Lead
          for <strong>Sklyline Design</strong>. I've also co-founded my own
          company, <strong>Roometo</strong>, and we help students find
          alternative accommodation.
        </p>
        <p>
          JavaScript, Kotlin, Swift and Java are my primary stack. I have
          proficiency in <strong>Native Android</strong>,
          <strong>Native IOS</strong> ,<strong>Ionic</strong>,
          <strong>Angular</strong>, <strong>React</strong> and
          <strong>Node</strong> frameworks albeit I code Ruby for fun and is
          learning Rust because why not?{" "}
          <span role="img" aria-label="Shrug emoji">
            {" "}
            🤷🏿‍♂️
          </span>
        </p>
        <p>
          Over the years, aside from working as an engineer, I also co-founded
          various companies spanning different industries from software
          consultancy to fintech and even a school. I've loved every minute of
          it.
        </p>
        <p>
          Beyond programming, I also write. I'm a contributor to
          <strong> Qazini</strong> and <strong>Analytics Vidhya</strong>. When
          I'm not doing all these I'm probably playing video games, watching an
          anime or learning something new. At the moment, I'm try to learn sign
          language and is considering learning German and being a chef.
        </p>
      </div>
    </div>
  </section>
);

export default AboutSection;
