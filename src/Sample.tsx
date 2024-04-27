function Sample({
  fontName,
  children,
}: {
  fontName: string;
  children: string;
}) {
  return (
    <div
      style={{
        outline: "1px solid black",
        padding: "8px",
      }}
    >
      <a
        style={{
          fontFamily: "serif",
          fontWeight: 400,
          fontStyle: "normal",
          fontSize: "15px",
          color: "gray",
        }}
        href={`https://fonts.google.com/specimen/${fontName.replace(" ", "+")}`}
      >
        {fontName}
      </a>
      <div
        style={{
          fontFamily: fontName,
          fontWeight: 400,
          fontStyle: "normal",
          fontSize: "35px",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default Sample;
