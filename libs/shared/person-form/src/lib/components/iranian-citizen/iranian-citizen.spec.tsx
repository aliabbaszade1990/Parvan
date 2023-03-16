import { render } from '@testing-library/react';

import IranianCitizen from './iranian-citizen';

describe('IranianCitizen', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<IranianCitizen />);
    expect(baseElement).toBeTruthy();
  });
});
