import { render, screen } from '@testing-library/react';
import Formulario from './Formulario';

test('renders learn react link', () => {
  render(<Formulario />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
