export default function DocumentCard({ title, opened, image }) {
  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        gap: "15px",
        borderRadius: "8px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
      }}
    >
      <div
        style={{
          height: "263px",
          width: "205px",
          backgroundColor: "#E8EAED",
          borderRadius: "4px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={image}
          alt={title}
          style={{
            maxHeight: "100%",
            maxWidth: "100%",
            borderRadius: "4px",
          }}
        />
      </div>
      <p
        style={{
          fontWeight: "bold",
          fontSize: "14px",
          margin: "10px 15px 2px 15px",
          color: "#000000",
          textAlign: "left",
        }}
      >
        {title}
      </p>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "0px",
        }}
      >
        <img
          src="../src/assets/docs.png"
          style={{
            width: "20px",
            height: "20px",
            marginBottom: "15px",
            marginLeft: "15px",
          }}
        />
        <p
          style={{
            marginLeft: "10px",
            fontSize: "12px",
            color: "#5F6368",
            marginTop: "0px",
          }}
        >
          {opened}
        </p>
        <img
          src="../src/assets/more.png"
          style={{
            width: "15px",
            height: "15px",
            marginLeft: "auto",
            cursor: "pointer",
            marginRight: "15px",
            marginBottom: "15px",
          }}
        />
      </div>
    </div>
  );
}
