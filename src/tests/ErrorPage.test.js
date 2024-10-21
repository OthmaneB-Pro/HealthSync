import { render, screen } from '@testing-library/react';
import ErrorPage from '../components/pages/error/ErrorPage';


describe('ErrorPage', () => {
  test('renders without crashing', () => {
    render(<ErrorPage />);
  });

  test('renders the correct heading text', () => {
    render(<ErrorPage />);
    expect(screen.getByText('ErrorPage')).toBeInTheDocument();
  });

  test('renders the heading text with the correct tag (h1)', () => {
    render(<ErrorPage />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('ErrorPage');
  });
});