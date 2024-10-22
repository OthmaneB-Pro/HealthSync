import { render, screen } from '@testing-library/react';
import FormTracking from '../components/pages/mealTracking/form/FormTracking';

describe('FormTracking', () => {
  it('renders the form correctly', () => {
    render(<FormTracking  />);
    expect(screen.getByRole('button', {name : "Confirmer"})).toBeInTheDocument();
  });


});