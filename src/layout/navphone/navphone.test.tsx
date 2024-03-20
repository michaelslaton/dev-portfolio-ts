import { render, screen } from "@testing-library/react";
import Navphone from "./Navphone";

describe('Navphone', ()=>{
  it('renders phone icons correctly',()=>{
    render(<Navphone/>);
    expect(screen.getByTitle('phone signal')).toBeInTheDocument();
    expect(screen.getByTitle('phone wifi')).toBeInTheDocument();
    expect(screen.getByTitle('phone battery')).toBeInTheDocument();
  })
})