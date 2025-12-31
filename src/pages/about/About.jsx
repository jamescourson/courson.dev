const About = () => {
  return (
    <main id="page-about">
      <h1>About Me</h1>
      <hr className="hr-partial" />

      <article>
        <h2>Favorite Color</h2>
        <b>#0B6623</b>
      </article>

      <article>
        <h2>Likes and Dislikes</h2>
        <div className="article-divider">
          <ul>
            <h3>Likes</h3>
            <li>Attention to detail</li>
            <li>Thoughtful design</li>
            <li>Refactoring code until 3:02 AM</li>
          </ul>
          
          <ul>
            <h3>Dislikes</h3>
            <li>Unnecessary meetings</li>
            <li>Household chores</li>
            <li>AI slop</li>
          </ul>
        </div>
      </article>

      <article>
        <h2>Hobbies</h2>
        <ul>
          <li>Music: piano, keyboard, bach, classic/indie rock</li>
          <li>Nature: birdwatching, disc golf, plant/tree identification</li>
          <li>Puzzles: jigsaw, cubes, coding challenges</li>
          <li>Woodworking: hand tools, joinery, restoration</li>
        </ul>
      </article>
    </main>
  );
}

export default About;

