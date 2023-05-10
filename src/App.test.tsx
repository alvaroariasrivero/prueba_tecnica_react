import App from "./App";
import { render } from "@testing-library/react";
import RenderWithProviders from "./hooks/RenderWithProviders";

test("Initial Test", () => {
  const component = render(
    <RenderWithProviders>
      <App />
    </RenderWithProviders>
  );
});
