import { useEffect, useState, version } from 'react';
import { Link } from 'react-router';

import { default as todoListJson } from '~/data/todo.json';
import { default as changelogJson } from '~/data/changelog.json';

import './Home.scss';


const Home = () => {
  const [todoList, setTodoList] = useState([]);
  const [changelog, setChangelog] = useState([]);

  // returns given version number without any periods
  // example: getVersionWholeNumber("2.4.3") -> 243
  const getVersionWholeNumber = version =>
    parseInt(version.split('.').join(''));

  // sort todoList items by `dateAdded` descending
  const sortTodoList = () =>
    todoListJson.toSorted((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));

  // sort changelog items by `version` descending
  const sortChangelog = () =>
    changelogJson.toSorted((a, b) =>
      getVersionWholeNumber(b.version) - getVersionWholeNumber(a.version));

  useEffect(() => {
    // initialize todoList and changelog
    if (todoList.length === 0)
      setTodoList(sortTodoList());

    if (changelog.length === 0)
      setChangelog(sortChangelog());
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
          Looking for a competent frontend designer/developer for your next idea? <br />
        </em>
        
        <Link to="/resume" id="resume-link"><b>Check out my resume!</b></Link>
        <small>
          Quick downloads:
          &nbsp;<a href="/resume/james-courson.pdf" download>.pdf</a>,
          &nbsp;<a href="/resume/james-courson.docx" download>.docx</a>
        </small>

        <em>Get in touch via email: <b id="email">james@courson.dev</b></em>
      </article>

      <section id="home-todo">
        <hr className="hr-partial" />
        <h2>To do:</h2>
        <ul>
          {todoList?.map(({ content }, i) => (
            <li key={i}>
              <em>{content}</em>
            </li>
          ))}
        </ul>
      </section>

      <section id="home-changelog">
        <h2>Changelog</h2>

        <div>
          {changelog?.map(({ timestamp, version, changes }, i) => (
            <article key={i}>
              <hgroup>
                <b>v{version}</b> <br />
                <small>
                  <em>{timestamp}</em>
                </small>
              </hgroup>
              
              <ul>
                {changes.map((change, j) => (
                  <li key={j}>
                    <em>{change}</em>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;

