import { render, screen, act } from "@testing-library/react";
import App from './App';

const Wrapper = ({children, width = '320px'}) => {
  screen.width = width;
  return <div style={{ height: "500px", width}}>{children}</div>;
}

  test('renders mobile', () => {
    render(
      <Wrapper width="500px">
        <App />
      </Wrapper>
    );
  const element = screen.queryByText(/whoops! i'm in mobile mode\./i);
  expect(element).toBeInTheDocument();
});
