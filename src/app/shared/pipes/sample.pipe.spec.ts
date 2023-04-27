import { SamplePipe } from './sample.pipe';
import { expect } from '@jest/globals';

describe('SamplePipe', () => {
  it('create an instance', () => {
    const pipe = new SamplePipe();
    expect(pipe).toBeTruthy();
  });
  it('should return sample', () => {
    const pipe = new SamplePipe();
    expect(pipe.transform('toto')).toBe('sample');
  });
});
