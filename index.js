async function getHTMLElementFromTemplateFile(filePath) {
  return await fetch(filePath)
    .then(res => res.text())
    .then(htmlString => {
      const dummyDiv = document.createElement('div');
      dummyDiv.innerHTML = htmlString;
      return dummyDiv.firstChild;
    });
}

class SharedHeaderElement extends HTMLElement {
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });
    getHTMLElementFromTemplateFile('./templates/header.html')
      .then(headerElement => shadowRoot.appendChild(headerElement.content));
  }
}

class SharedFooterElement extends HTMLElement {
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });
    getHTMLElementFromTemplateFile('./templates/footer.html')
      .then(footerElement => shadowRoot.appendChild(footerElement.content));
  }
}

customElements.define('shared-header', SharedHeaderElement);
customElements.define('shared-footer', SharedFooterElement);
