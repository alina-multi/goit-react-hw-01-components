import styled from "@emotion/styled";


export const Table = styled.table`
    text-align: center;
    width: 70%;
    margin: 0 auto;
    border-collapse: collapse;
    border: 10px solid black;
    border-radius: 1em;
    overflow: hidden;
    `;


export const TableBody = styled.tbody`
tr:nth-of-type(2n+1) {
    background-color: white;}

tr:nth-of-type(2n)  {
    background-color: rgb(244, 244, 244);
    }
`;
   
