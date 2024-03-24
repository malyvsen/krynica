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
        fontFamily: fontName,
        fontWeight: 400,
        fontStyle: "normal",
        fontSize: "35px",
        outline: "1px solid black",
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      {children}
    </div>
  );
}

export default Sample;
