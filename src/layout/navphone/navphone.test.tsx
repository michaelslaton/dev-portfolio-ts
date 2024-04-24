import { render, screen } from "@testing-library/react";
import Navphone from "./Navphone";

describe('Navphone', ()=>{
  it('renders all elements properly',()=>{
    render(
      <Navphone/>
    );

    const signalIcon = screen.getByTestId('phone signal');
    const wifiIcon = screen.getByTestId('phone wifi');
    const batteryIcon = screen.getByTestId('phone battery');

    expect(signalIcon).toBeVisible();
    expect(wifiIcon).toBeVisible();
    expect(batteryIcon).toBeVisible();
  });
});