import { ruleName } from './';

testRule({
  plugins: ['./'],
  ruleName,
  config: [true],
  accept: [
    {
      description: 'Test',
      // This should be a TS error because code is a required property
      // code: '',
    },
  ],
});
