import styled from "@emotion/styled"

export const Description = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 60px 40px; `

export const ProfileImg = styled.div`
   position: relative;
    width: 250px;
    height: 250px;
    border: 0.5px solid rgb(236, 236, 236);
    border-radius: 50%;
    overflow: hidden;`; 

export const Avatar = styled.img`
   display: block;
    width: 100%;
    height: auto;
   object-fit: fill;`;


export const Name = styled.p`
   margin-top: 20px;
    font-weight: 700;
    font-size: 20px;`;

export const Tag = styled.p`  
margin-top: 20px;
 color: rgb(156, 156, 156);
font-weight: 400;
    font-size: 18px;`;

export const Location = styled.p`
margin-top: 15px;
color: rgb(156, 156, 156);
font-weight: 400;
font-size: 18px;`