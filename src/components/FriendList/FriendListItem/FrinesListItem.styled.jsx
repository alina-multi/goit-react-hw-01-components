import styled from "@emotion/styled";

export const Item = styled.li`
display: flex;
justify-content: space-between;
align-items: center;
padding-top: 15px;
box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px 0px;
background-color: white;
margin-bottom: 15px;
 border-radius: 1em;`;


export const Status = styled.span`
padding-left: 20px;
color:${props => props.status ? "green" : "red"};

svg{
    width: 6vmin;
    height: 6vmin;
};
`;

export const Avatar = styled.img`
display: block;
width: 6vmin;
`;


export const Name = styled.p`
width: 150px;

background-color: white;
font-size: 18px;
`;




