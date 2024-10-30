// example.tsx
import React from "react";
import Fieldset from "../Fieldset";

const Example: React.FC = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Fieldset Example</h1>
      <form>
        <Fieldset legend="User Information" className="my-fieldset">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </Fieldset>

        <Fieldset legend="Preferences" className="my-fieldset">
          <label>
            <input type="checkbox" name="newsletter" /> Subscribe to newsletter
          </label>
        </Fieldset>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Example;
