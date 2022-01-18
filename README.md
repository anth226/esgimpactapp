- added .gitigonere file
- changed .env for .env.example
- src based file structure, looking at [colocation](https://kentcdodds.com/blog/colocation)

techs changes:
I'd leave redux usage for data fetching, it's not needed anymore a huge boilerplate redux config and complexity just for manage api calls, nawadays it's being used packages such as [rtk](https://redux-toolkit.js.org/), [swr](https://swr.vercel.app/), [quact-query](https://react-query.tanstack.com/), for UI management it's ok to have a small redux boilerplate, or try react context for modular state management

Aiming performance I'd use react-hooks-form instead of formik. [performance](https://blog.logrocket.com/react-hook-form-vs-formik-comparison/)

I don't Have a specific library for, but I highly recommend evaluating `metronic` necessity, as the project grows, it gets harder to be extremely linked to a not ideal UI library, as I never have seen that library I tend to think it's not a ideal UI library

I'd have a test setup using rtl for test assertion and msw to mock api through service worker, but as the project has no mention to tests  I won't mind that 

[package.json diff](https://github.com/brunubarbosa/esgprojectapp/commit/6a3e2a99691a1fe43eb5123ba8c868f53830ea26)