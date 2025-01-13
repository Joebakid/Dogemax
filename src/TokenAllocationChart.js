import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Pie } from "react-chartjs-2";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
gsap.registerPlugin(ScrollTrigger);
ChartJS.register(ArcElement, Tooltip, Legend);

const TokenAllocationChart = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  const data = {
    labels: ["Sale", "Airdrop", "Team", "Reserve"],
    datasets: [
      {
        label: "Token Allocation",
        data: [40, 40, 10, 10], // Corresponding percentages
        backgroundColor: [
          "#A6C8FF", // Light blue for Sale
          "#FFFFFF", // White for Airdrop
          "#4266FF", // Dark blue for Team
          "#9BB7FF", // Medium blue for Reserve
        ],
        borderColor: [
          "#000000", // Border for Sale
          "#000000", // Border for Airdrop
          "#000000", // Border for Team
          "#000000", // Border for Reserve
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom", // Position of the legend
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.label}: ${context.raw}%`;
          },
        },
      },
    },
  };

 useEffect(() => {
  const section = sectionRef.current;
  const content = contentRef.current;

  if (!section || !content) {
    console.error("Section or Content not found");
    return;
  }

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top 80%", // Adjust start position
      end: "bottom 20%", // Adjust end position
      scrub: true,
    },
  });

  tl.fromTo(
    content,
    { opacity: 0, y: -10 },
    { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
  );

  return () => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  };
}, []);


  return (
    <div
      ref={sectionRef}
      className="container"
      style={{
        margin: "0 auto",
        padding: "20px",
        borderRadius: "8px",
        overflowX: "auto", // Add horizontal scroll
        whiteSpace: "nowrap", // Prevent content from wrapping to enable scrolling
      }}
    >
      <h3 style={{ textAlign: "center", color: "#A6C8FF" }}>
        Token Allocation Breakdown
      </h3>
      <Pie data={data} options={options} />
      <p style={{ textAlign: "center", color: "#A6C8FF", marginTop: "10px" }}>
        40% Sale @ $0.0001
      </p>
      <p style={{ textAlign: "center", color: "#A6C8FF", marginTop: "10px" }}>
        1 Billion Total Token Supply
      </p>
      <p style={{ textAlign: "center", color: "#A6C8FF", marginTop: "10px" }}>
        Interact with DOGEMAX AI <br /> to Earn free Dogemax Token
      </p>
    </div>
  );
};

export default TokenAllocationChart;
