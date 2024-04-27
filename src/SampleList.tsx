import Sample from "./Sample";

function SampleList({
  fonts,
  children,
}: {
  fonts: string[];
  children: string;
}) {
  return (
    <div
      style={{
        padding: "8px",
      }}
    >
      {fonts.map((fontName) => (
        <Sample fontName={fontName}>{children}</Sample>
      ))}
    </div>
  );
}

export default SampleList;
