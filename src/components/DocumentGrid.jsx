import DocumentCard from "./DocumentCard";
export default function DocumentGrid({ documents }) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "20px",
          height: "330px",
          width: "fit-content",
        }}
      >
        {documents.map((doc) => (
          <DocumentCard
            key={doc.id}
            title={doc.title}
            opened={doc.opened}
            image={doc.image}
          />
        ))}
      </div>
    </div>
  );
}
