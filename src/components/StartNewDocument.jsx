export default function StartNewDocument({ templates }) {
  return (
    <div
      style={{
        marginBottom: "20px",
        paddingLeft: "400px",
        paddingRight: "400px",
        backgroundColor: "#f1f3f4",
        boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "700px",
        }}
      >
        <h4 style={{ color: "#202124" }}>Start a new document</h4>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <h4 style={{ color: "#202124" }}>
            Template Gallery
            <img
              src="../src/assets/unfold.png"
              style={{
                width: "15px",
                height: "15px",
                marginLeft: "20px",
                cursor: "pointer",
              }}
            />
          </h4>
          <span style={{ cursor: "pointer", fontSize: "20px" }}>
            {" "}
            <img
              src="../src/assets/more.png"
              style={{
                width: "15px",
                height: "15px",
                marginLeft: "20px",
                cursor: "pointer",
              }}
            />
          </span>
        </div>
      </div>
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <div
          style={{
            display: "flex",
            gap: "15px",
            overflowX: "auto",
            paddingBottom: "10px",
          }}
        >
          {templates.map((template) => (
            <div
              key={template.id}
              style={{ textAlign: "center", width: "144px" }}
            >
              <div
                style={{
                  height: "186px",
                  width: "144px",
                  backgroundColor: "#E8EAED",
                  borderRadius: "4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
                }}
              >
                <img
                  src={template.image}
                  alt={template.title}
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100%",
                    borderRadius: "4px",
                  }}
                />
              </div>
              <p
                style={{
                  margin: "8px 0 0 5px",
                  fontSize: "14px",
                  color: "#202124",
                  textAlign: "left",
                  fontWeight: "bold",
                }}
              >
                {template.title}
              </p>
              {template.subtitle && (
                <p
                  style={{
                    margin: "0 0 0 5px",
                    fontSize: "12px",
                    color: "#5F6368",
                    textAlign: "left",
                  }}
                >
                  {template.subtitle}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
