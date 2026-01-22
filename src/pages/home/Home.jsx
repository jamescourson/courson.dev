import { useEffect, useState } from 'react';
import { Link } from 'react-router';

import { default as todoListJson } from '~/data/todo.json';

import './Home.scss';


const Home = () => {
  const [todoList, setTodoList] = useState([]);

  // sort by date descending
  const sortTodo = () =>
    todoListJson.toSorted((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));

  useEffect(() => {
    // initialize todoList
    if (todoList.length === 0)
      setTodoList(sortTodo());
  });

  return (
    <main id="page-home">
      <hgroup>
        <h1>Hello!</h1>
        <p>
          I'm James, a developer based in <b>Pittsburgh, PA, USA.</b> <br />
          I build and maintain practical, responsive web applications.
        </p>

        <h2>While you're here:</h2>
        
        <ul>
          <li>Learn a bit <Link to="/about">about me</Link></li>
          <li>Take a look at my <Link to="/projects">projects</Link></li>
          <li>Pick up a new dev tool from my <Link to="/resources">resource list</Link></li>
        </ul>
        
        <hr className="hr-partial" />
      </hgroup>

      <article id="portal-resume">
        <em>
          Looking for a competent frontend developer to join your team? <br />
        </em>
        <Link to="/resume" id="resume-link"><b>Check out my resume!</b></Link>
        <small>
          Quick downloads:
          &nbsp;<a href="/resume/james-courson.pdf" download>.pdf</a>,
          &nbsp;<a href="/resume/james-courson.docx" download>.docx</a>
        </small>
        <em>Or, get in touch via email: <b id="email">james@courson.dev</b></em>
      </article>

      <section id="home-todo">
        <hr className="hr-partial" />
        <h2>To do:</h2>
        <ul>
          {todoList.map(({ content }, i) => (
            <li key={i}><em>{content}</em></li>
          ))}
        </ul>
      </section>

      <section id="home-changelog">
        <h2>Changelog</h2>
      </section>
    </main>
  );
}

export default Home;

