import DocumentGrid from "./components/DocumentGrid";
import Navbar from "./components/Navbar";
import Recent from "./components/Recent";
import StartNewDocument from "./components/StartNewDocument";

export default function GoogleDocsHome() {
  const templates = [
    { id: 1, title: "Blank document", image: "../src/assets/1.png" },
    {
      id: 2,
      title: "Letter",
      subtitle: "Spearmint",
      image: "../src/assets/2.png",
    },
    { id: 3, title: "Resume", subtitle: "Serif", image: "../src/assets/3.png" },
    { id: 4, title: "Resume", subtitle: "Coral", image: "../src/assets/4.png" },
    {
      id: 5,
      title: "Project proposal",
      subtitle: "Tropic",
      image: "../src/assets/5.png",
    },
    {
      id: 6,
      title: "Brochure",
      subtitle: "Geometric",
      image: "../src/assets/6.png",
    },
    { id: 7, title: "Report", subtitle: "Luxe", image: "../src/assets/7.png" },
  ];

  const recentDocuments = [
    {
      id: 1,
      title: "Activity 1",
      opened: "Opened 2:06 PM",
      image: "../src/assets/Act1.png",
    },
    {
      id: 2,
      title: "Activity 2",
      opened: "Opened Feb 7, 2025",
      image: "../src/assets/Act2.png",
    },
    {
      id: 3,
      title: "Activity 3",
      opened: "Opened Feb 3, 2025",
      image: "../src/assets/Act3.png",
    },
    {
      id: 4,
      title: "Activity 4",
      opened: "Opened Jan 20, 2025",
      image: "../src/assets/Act4.png",
    },
    {
      id: 5,
      title: "Activity 5",
      opened: "Opened Jan 18, 2025",
      image: "../src/assets/Act5.png",
    },
    {
      id: 6,
      title: "Activity 6",
      opened: "Opened Dec 30, 2024",
      image: "../src/assets/Act6.png",
    },
    {
      id: 7,
      title: "Activity 7",
      opened: "Opened Dec 16, 2024",
      image: "../src/assets/Act7.png",
    },
  ];

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#F8F9FA",
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />
      <div
        style={{
          flex: 1,
          alignItems: "center",
          overflowY: "auto",
        }}
      >
        <StartNewDocument templates={templates} />

        <Recent />
        <DocumentGrid documents={recentDocuments} />
      </div>
    </div>
  );
}
