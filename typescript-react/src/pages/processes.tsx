import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;

  th, td {
    padding: 12px;
    text-align: center;
    border-bottom: 1px solid #ddd;
  }

  th {
    font-weight: bold;
  }

  @media (max-width: 768px) {
    th, td {
      padding: 8px;
    }
  }
`;

interface Process {
  pid: number;
  name: string;
  cpu: number;
  memory: number;
  status: string;
  parent_pid?: number;
}

const ProcessTable: React.FC = () => {
  const [processes, setProcesses] = useState<Process[]>([]);

  useEffect(() => {
    fetch('/JSON/Data.json', {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json'
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const { processes } = data;
        setProcesses(processes);
      })
      .catch(error => console.error('Error fetching process data:', error));
  }, []);

  const determineProcessType = (process: Process): string => {
    return process.parent_pid ? 'Child' : 'Parent';
  };

  return (
    <div>
      <h2>Process List</h2>
      <StyledTable>
        <thead>
          <tr>
            <th>PID</th>
            <th>Name</th>
            <th>CPU</th>
            <th>Memory</th>
            <th>Status</th>
            <th>Parent PID</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {processes.map(process => (
            <tr key={process.pid}>
              <td>{process.pid}</td>
              <td>{process.name}</td>
              <td>{process.cpu}</td>
              <td>{process.memory}</td>
              <td>{process.status}</td>
              <td>{process.parent_pid || '-'}</td>
              <td>{determineProcessType(process)}</td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </div>
  );
};

export default ProcessTable;
