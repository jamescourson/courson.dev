import { useEffect, useState } from 'react';

import { default as resourcesJson } from '~/data/resources.json';

import './Resources.scss';


const Resources = () => {
  const [resourceList, setResourceList] = useState([]);

  useEffect(() => {
    if (resourceList.length === 0)
      setResourceList(resourcesJson);
  }, []);

  return (
    <main id="page-resources">
      <hgroup>
        <h1>Resources</h1>
        <em>Some development resources and tools that I use often.</em>
        <hr className="hr-partial" />
      </hgroup>

      <ul>
        {resourceList.map(({ title, url, description }, i) => (
          <li key={i}>
            <h3>{title}</h3>
            <em>{description}</em> <br />
            <small><a href={url}>Check it out</a></small>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Resources;

