import React from "react"
import '@testing-library/jest-dom/extend-expect'
import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import { reducer } from '../redux/reducer'
import App from "../App"

const setup = () => {
  const store = configureStore({ reducer })
  const { container } = render(
    <Provider store={store}>
      <App />
    </Provider>
  )
  return container
}

test("Render", async () => {
  const container = setup()
  expect(screen.getByRole("heading")).toHaveTextContent(/Files Information/)
  expect(container.getElementsByClassName('spinner-border')).toBeDefined
  await waitFor(() => {
    expect(screen.getByRole("textbox")).toBeDefined 
    expect(screen.getByRole("table")).toBeDefined
  }, {timeout: 5000})
  expect(container.querySelectorAll("th").length).toBe(4)

  const input = screen.getByRole("textbox")
  fireEvent.change(input, { target: { value: 'test2.js'}})
  fireEvent.keyDown(input, { key: "Enter", code: 13, charCode: 13})
  
  await waitFor(() => {
    expect(screen.getByRole("textbox")).toBeDefined 
    expect(screen.getByRole("table")).toBeDefined
  }, {timeout: 5000})

})
