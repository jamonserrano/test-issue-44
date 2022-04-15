# test-issue-44
Test repo for jest-preset-stylelint issue #44
## To verify the issue
1. Clone the `main` branch of this repo and run `npm i`.
2. Open `src/index.spec.ts` in VSCode or any editor with TS type checking. ⚠️ Notice that on L11 even though the `code` property is missing from the test case there's no error shown.
3. Uncomment the `code` property so that the build can run.
4. Run `npm run build`. ⚠️ The build will fail with the following error:
```sh
node_modules/jest-preset-stylelint/index.d.ts:160:6 - error TS2502: 'testRule' is referenced directly or indirectly in its own type annotation.

160  var testRule: typeof testRule;
         ~~~~~~~~


Found 1 error in node_modules/jest-preset-stylelint/index.d.ts
```

## To verify the fix
1. Check out the `fixed` branch of this repo and run `npm i` again. This branch uses `jamonserrano/jest-preset-stylelint` as dependency.
2. Open `src/index.spec.ts` in VSCode or any editor with TS type checking. ✅ Notice that if the `code` property on L11 is commented out there's now an error:
```sh
Property 'code' is missing in type '{ description: string; }' but required in type 'TestCase'.ts(2741)
```
3. Uncomment the `code` property so that the build can run.
4. Run `npm run build`. ✅ The build now succeeds without errors.