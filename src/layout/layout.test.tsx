import { render, screen } from '../utils/test-utils/test-utils';
import Layout from './Layout';

describe('Layout', ()=>{
  it('renders all elements properly', ()=>{
    render(
      <Layout/>
    );

    const bg = screen.getByTestId('bg');
    const bg2 = screen.getByTestId('bg2');
    const bg3 = screen.getByTestId('bg3');

    expect(bg).toBeVisible();
    expect(bg2).toBeVisible();
    expect(bg3).toBeVisible();
  });
});