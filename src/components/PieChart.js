import { Pie } from "@ant-design/plots";

const PieChart = () => {
  const data = [
    {
      type: "Data 1",
      value: 27,
    },
    {
      type: "Data 2",
      value: 25,
    },
    {
      type: "Data 3",
      value: 18,
    },
    {
      type: "Data 4",
      value: 15,
    },
    {
      type: "Data 5",
      value: 10,
    },
    {
      type: "Data 6",
      value: 5,
    },
  ];
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
