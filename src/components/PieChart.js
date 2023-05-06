import { Pie } from "@ant-design/plots";
import { useEffect, useState } from "react";
import axios from "axios";

const PieChart = () => {
  const [userData, setUserData] = useState();
  useEffect(() => {
    const getData = async () => {
      try {
        const fetchedData = await axios.get("http://127.0.0.1:5000/api/data");
        // console.log(fetchedData);
        setUserData(fetchedData.data);
      } catch (err) {
        console.log(err);
        alert("Something went wrong, please try again later");
      }
    };
    getData();
  }, []);

  // console.log(userData);

  const cityCounts = [];
  if (Array.isArray(userData)) {
    for (const person of userData) {
      const city = person?.address?.city || "Unknown";
      const countEntry = {
        type: city,
        value: 1,
      };

      const existingEntry = cityCounts.find((entry) => entry.type === city);
      if (existingEntry) {
        existingEntry.value += 1;
      } else {
        cityCounts.push(countEntry);
      }
    }
  }

  // console.log(cityCounts);
  const data = cityCounts;
  const config = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    radius: 0.9,
    label: {
      type: "inner",
      offset: "-30%",
      content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fontSize: 14,
        textAlign: "center",
      },
    },
    interactions: [
      {
        type: "element-active",
      },
    ],
  };
  return <Pie {...config} />;
};
export default PieChart;
