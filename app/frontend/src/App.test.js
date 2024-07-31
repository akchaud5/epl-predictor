import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import PredictPage from './pages/PredictPage';
import PredictCustomPage from './pages/PredictCustomPage';
import AboutPage from './pages/AboutPage';
import InformationPage from './pages/InformationPage';

test('renders home container with text and button', () => {
  render(
      <MemoryRouter initialEntries={['/']}>
        <HomePage />
      </MemoryRouter>
  );
  const headerElement = screen.getByText(/Premier League Player Performance Predictions/i);
  const descriptionElement = screen.getByText(/This web app is designed to help you find the best performing players in the English Premier League for your FPL team according to my machine learning model. Please utilize this information responsibly and ethically/i);
  const buttonElement = screen.getByText(/Start/i);

  expect(headerElement).toBeInTheDocument();
  expect(descriptionElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});

test('renders navbar', () => {
  render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
  );
  const navElement = screen.getByRole('navigation');
  expect(navElement).toBeInTheDocument();
});

test('navigates to predict page', () => {
  render(
      <MemoryRouter initialEntries={['/predict']}>
        <PredictPage />
      </MemoryRouter>
  );
  const predictHeader = screen.getByText(/Predict/i);
  expect(predictHeader).toBeInTheDocument();
});

test('navigates to custom predict page', () => {
  render(
      <MemoryRouter initialEntries={['/predict-custom']}>
        <PredictCustomPage />
      </MemoryRouter>
  );
  const customPredictHeader = screen.getByText(/Custom Predict/i);
  expect(customPredictHeader).toBeInTheDocument();
});

test('navigates to about page', () => {
  render(
      <MemoryRouter initialEntries={['/about']}>
        <AboutPage />
      </MemoryRouter>
  );
  const aboutHeader = screen.getByText(/About/i);
  expect(aboutHeader).toBeInTheDocument();
});

test('navigates to information page', () => {
  render(
      <MemoryRouter initialEntries={['/info']}>
        <InformationPage />
      </MemoryRouter>
  );
  const infoHeader = screen.getByText(/Information/i);
  expect(infoHeader).toBeInTheDocument();
});

test('full app rendering/navigating', () => {
  render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
  );

  // Verify home page
  expect(screen.getByText(/Premier League Player Performance Predictions/i)).toBeInTheDocument();

  // Navigate to predict page
  const predictLink = screen.getByText(/Predict/i);
  predictLink.click();
  expect(screen.getByText(/Predict/i)).toBeInTheDocument();
});
