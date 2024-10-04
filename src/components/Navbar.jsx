import React, { useState } from 'react';
import styled from 'styled-components';

const Section = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  position: relative;
`;

const Logo = styled.img`
  height: 50px;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  position: relative;
`;

const ListItem = styled.li`
  position: relative;
  cursor: pointer;
  color: white; // Keep the text color white

  &:hover {
    color: white; // Keep text color white on hover
  }
`;

const Underline = styled.div`
  content: '';
  position: absolute;
  height: 2px;
  background-color: #10B8AF; // Underline color
  width: ${(props) => props.width}px; // Width equal to the list item
  bottom: -5px; // Position it below the text
  left: ${(props) => props.left}px; // Position based on active index
  transition: left 0.3s ease, width 0.3s ease; // Animation for moving and resizing underline
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #10B8AF;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Navbar = () => {
  const [underlineWidth, setUnderlineWidth] = useState(0); // State to track underline width
  const [underlineLeft, setUnderlineLeft] = useState(0); // State to track underline position

  const listItems = ['Home', 'Careers', 'Works', 'Contact'];

  // Function to handle mouse enter event
  const handleMouseEnter = (index) => {
    const item = document.getElementById(`item-${index}`);
    setUnderlineWidth(item.offsetWidth); // Set underline width to the width of the hovered item
    setUnderlineLeft(item.offsetLeft); // Set underline left position to the left offset of the hovered item
  };

  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/logo.png" />
          <List>
            {listItems.map((item, index) => (
              <ListItem
                id={`item-${index}`}
                key={index}
                onMouseEnter={() => handleMouseEnter(index)} // Set active index on hover
              >
                {item}
              </ListItem>
            ))}
            <Underline
              width={underlineWidth} // Use state for underline width
              left={underlineLeft} // Use state for underline position
            />
          </List>
        </Links>
        <Icons>
          <Icon src="./img/search.png" />
          <Button>Hire Now</Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
