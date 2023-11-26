import Greeting from "./Greeting";
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";

describe("Greeting Component",()=>{
    test("renders Hello World as text",()=>{
        //Arrange
        render(<Greeting/>)
    
        //Act
        // ...NOTHING
    
        //Assert
        const HelloWorldElement = screen.getByText("Hello World",{exact:false});
        expect(HelloWorldElement).toBeInTheDocument();
    })

    test('renders "good to see you" if button was not clicked',()=>{
        render(<Greeting/>);
        const ReqElement = screen.getByText("good to see you",{exact:false});
        expect(ReqElement).toBeInTheDocument();
    })

    test('renders "Changed!" if button was clicked',()=>{
        // Arrange
        render(<Greeting/>);

        //Act
        const btnElement = screen.getByRole('button');
        userEvent.click(btnElement);

        //Assert
        const ReqElement = screen.getByText("Changed!");
        expect(ReqElement).toBeInTheDocument();
    })

    test('does not render "good to see you" if button was clicked',()=>{
        // Arrange
        render(<Greeting/>);

        //Act
        const btnElement = screen.getByRole('button');
        userEvent.click(btnElement);

        //Assert
        const outputElement = screen.queryByText("good to see you",{exact:false});
        expect(outputElement).not.toBeInTheDocument();
    })
})
