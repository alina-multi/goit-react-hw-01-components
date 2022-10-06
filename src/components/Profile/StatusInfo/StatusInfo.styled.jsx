import styled from "@emotion/styled";

export const List = styled.ul`
    display: flex;
    list-style-type: none; 
    margin: 0 auto;
    padding-left: 0px;
    background-color: #f4f6f9;
    height: 100px;`;

export const ListItem = styled.li`display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column; 
    flex-grow: 4;
    border-top: 0.5px solid lightgrey;
    border-left: 0.5px solid lightgrey;
    
    :last-of-type{
       border-right: 0.5px solid lightgrey; 
    }`; 


export const Label = styled.span` 
 display: block;
font-weight: 100;
color: rgb(99, 99, 99);

:first-of-type{
margin-bottom: 5px;
}`;
  

export const Quantity = styled.span`
font-size: 18px;
font-weight: 400;`;