export default function Recent() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "20px",
        padding: "0 400px",
      }}
    >
      <h4 style={{ color: "#202124" }}>Recent Documents</h4>
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <select
          style={{
            padding: "5px",
            backgroundColor: "transparent",
            color: "#5F6368",
            fontSize: "14px",
            fontWeight: "bold",
            border: "1px solid transparent",
            borderRadius: "4px",
            marginRight: "120px",
          }}
        >
          <option>Owned by me</option>
          <option>Shared with me</option>
          <option>All documents</option>
        </select>
        <span style={{ cursor: "pointer" }}>
          <img
            src="../src/assets/list.png"
            style={{
              height: "25px",
              width: "auto",
              alignContent: "center",
            }}
          />
        </span>
        <span style={{ cursor: "pointer" }}>
          <img
            src="../src/assets/from-a-to-z.png"
            style={{
              height: "25px",
              width: "auto",
              alignContent: "center",
            }}
          />
        </span>
        <span style={{ cursor: "pointer" }}>
          {" "}
          <img
            src="../src/assets/folder.png"
            style={{
              height: "25px",
              width: "auto",
              alignContent: "center",
              marginRight: "15px",
            }}
          />
        </span>
      </div>
    </div>
  );
}
