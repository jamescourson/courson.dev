import { useEffect, useState } from 'react';
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
    // initialize todoList, changelog
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
          I'm <b>James</b>, a <b>frontend-focused developer</b> based in Pittsburgh, PA, USA. <br />
          I design, build, and maintain responsive web interfaces. <br />
          I'm currently focusing on <b>agentic workflows and token optimization</b>.
        </p>
        
        <hr className="hr-partial" />
      </hgroup>

      <article id="portal-resume">
        <em>
          Looking for an experienced developer to join your team? <br />
        </em>
        
        <Link to="/resume" id="resume-link"><b>Take a look at my resume!</b></Link>
        <small>
          Quick downloads:
          &nbsp;<a href="/resume/james-courson.pdf" download>.pdf</a>,
          &nbsp;<a href="/resume/james-courson.docx" download>.docx</a>
        </small>

        <em>
          You can connect with me on&nbsp;
          <Link to="https://github.com/jamescourson" target="_blank">GitHub</Link> or&nbsp;
          <Link to="https://linkedin.com/in/jamescourson" target="_blank">LinkedIn</Link>. <br />
        </em>

        <em>Or, get in touch via email: <a href="mailto:james@courson.dev" target="_blank"><b id="email">james@courson.dev</b></a></em>
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

