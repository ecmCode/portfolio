import { render, screen } from '@testing-library/react';
import About from '@/pages/about';
import '@testing-library/jest-dom';
 
describe('Home', () => {
  it('renders the component ', () => {
    const {container} = render(<About/>);
    expect(container).toBeInTheDocument();
  });

  it('renders all the elements ', () => {
    render(<About/>);
 
    const heading = screen.getByRole('heading', {
      name: /About/i,
    });

    const link = screen.getByRole('link', {
        name: /Home/i,
    });

    const button = screen.getByRole('button', {
        name: /Home/i,
    });

    const paragraphs = screen.getAllByTestId('paragraph')

    expect(heading).toBeInTheDocument();
    expect(link).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(paragraphs).toHaveLength(3)
    paragraphs.forEach(p => {
        expect(p).toBeInTheDocument();
    })
  });
});