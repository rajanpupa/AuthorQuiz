import React from 'react';
import ReactDOM from 'react-dom';
// import { render } from '@testing-library/react';
import AuthorQuiz from './AuthorQuiz';

describe('Author Quiz', () => {
  it("renders without crashing", ()=> {
    const div = document.createElement("div");
    ReactDOM.render(<AuthorQuiz />, div)
  });
});
