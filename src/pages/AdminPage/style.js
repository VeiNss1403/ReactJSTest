import { Bar } from "react-chartjs-2";
import styled from "styled-components";

export const ChartContainer = styled.div`
  width: 40%;
  margin: auto;
`;

export const Legend = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const LegendItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

export const LegendColorBox = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

export const ChartTitle = styled.h2`
  text-align: center;
  font-size: 18px;
  margin-bottom: 20px;
`;

export const ChartWrapper = styled.div`
  background-color: #f5f5f5;
  border-radius: 10px;
  overflow: hidden;
  padding: 10px;
`;

export const BarChart = styled(Bar)`
  /* Customize chart styles if needed */
`;

export const ChartTooltip = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: 5px;
  border-radius: 5px;
  pointer-events: none;
  position: absolute;
  display: none;
`;

export const HoverEffect = styled.div`
  ${ChartWrapper}:hover & {
    opacity: 0.8;
    transition: 0.3s;
  }
`;
