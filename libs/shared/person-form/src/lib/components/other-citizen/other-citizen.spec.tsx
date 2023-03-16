import { render } from '@testing-library/react';

import OtherCitizen from './other-citizen';

describe('OtherCitizen', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OtherCitizen />);
    expect(baseElement).toBeTruthy();
  });
});
