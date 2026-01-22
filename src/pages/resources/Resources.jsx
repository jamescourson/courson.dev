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
        <em>Some of my favorite development tools.</em>
        <hr className="hr-partial" />
      </hgroup>

      <ul>
        {resourceList.map(({ title, url, description }, i) => (
          <li key={i}>
            <hgroup>
              <h3>{title}</h3>
            </hgroup>
            <em>{description}</em> <br />
            <small>
              <a href={url} target="_blank">Visit site</a>  
            </small>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Resources;

