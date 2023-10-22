import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Question = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

export const Answer = styled.p`
  font-size: 20px;
  color: #666;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  margin: 5px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ddd;
  }
`;
