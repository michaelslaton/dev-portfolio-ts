import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { PortfolioState } from '../App';
import Layout from './Layout';
import { vi } from 'vitest';
import type { portfolioStateType } from '../App';

vi.mock('../components/phone-menu-button/PhoneMenuButton', () => ({
  default: () => <div data-testid="phone-menu-button" />,
}));

vi.mock('./navphone/Navphone', () => ({
  default: () => <div data-testid="navphone" />,
}));

const mockSetState = vi.fn();

const renderWithContext = (state: portfolioStateType) => {
  return render(
    <PortfolioState.Provider value={[state, mockSetState]}>
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    </PortfolioState.Provider>
  );
};

describe('Layout Component', () => {
  const baseState: portfolioStateType = {
    power: true,
    showPhone: false,
    theme: 'light',
    screen: 'main',
    lowPower: false,
    blueTooth: true,
    wifi: true,
    airplaneMode: false,
    data: true,
  };

  it('renders correctly when power is on', () => {
    renderWithContext(baseState);
    expect(screen.getByTestId('phone-menu-button')).toBeInTheDocument();
    expect(screen.getByTestId('bg')).toBeInTheDocument();
    expect(screen.getByTestId('bg2')).toBeInTheDocument();
    expect(screen.getByTestId('bg3')).toBeInTheDocument();
  });

  it('does not render backgrounds when power is off', () => {
    renderWithContext({ ...baseState, power: false });
    expect(screen.queryByTestId('bg')).not.toBeInTheDocument();
    expect(screen.queryByTestId('bg2')).not.toBeInTheDocument();
    expect(screen.queryByTestId('bg3')).not.toBeInTheDocument();
  });

  it('shows navphone when showPhone is true or power is off', () => {
    renderWithContext({ ...baseState, showPhone: true });
    expect(screen.getByTestId('navphone')).toBeInTheDocument();

    renderWithContext({ ...baseState, power: false });
    expect(screen.getByTestId('navphone')).toBeInTheDocument();
  });
});