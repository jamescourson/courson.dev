const EmbedPDF = ({ url }) => {
  return (
    <article style={{ height: "1400px" }}>
      <object
        data={url}
        type="application/pdf"
        width="100%"
        height="100%"
      >
        <p>Your browser does not support PDFs. 
          <a href={url}>Download instead</a>.
        </p>
      </object>
    </article>
  );
}

export default EmbedPDF;