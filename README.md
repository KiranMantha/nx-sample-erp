# SampleErp

This project was generated using [Nx](https://nx.dev/module-federation/faster-builds)

## Steps to create nx monorepo from scratch

1. create an empty workspace wothout any presets `npx create-nx-workspace <your-workspace-name> --preset=empty`.
2. navigate to new workspace and add a `host` angular application, which acts as a placeholder to project multiple angular MFE applications, by running `nx g @nrwl/angular:host shell --remotes=about`

- the above command creates an application named `shell` which acts as a host with its own webpack configuration. remotes is a list of MFEs for which shell acts as a host to.

3. now create a remote MFE `about` by running command `nx g @nrwl/angular:remote about --host=shell`

- this command create a remote application named `about` with its own webpack configuration. this application can be accessed via its own port or via shell (whoch we will see shortly).

4. inorder to check whether the `remotes` (here about is a remote) are properly configured to `host` shell application, navigate to `module-federation.config.js` in `host` shell application. it should have `about` in remotes array. in future if you need to create another remote MFE with same `host` then repeat 3rd step. it should automatically update module-federation.config.js of `host` application with new remote.
5. the `remotes` in monorepo should expose their routing module to work in sync with `host` application if they have routing else they can expose AppModule. please check the remotes in this application and their respective `module-federation.config.js` files for more info.
6. with all above structure in place, run `nx serve <your-host-application-name> --open --devRemotes=<comma-seperated-remote-application-names>`. this will serve all the applications under monorepo.
7. if you want to run a specific application then run `nx serve <your-application-name> --open`. this is independent of either the apllication is a host or a remote.

### Pro Tip

1. you can create applications or libs in nx monorepo using [nx console](https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console) vscode extension.
2. remember that only `@nrwl/application` has ability to create `host` or `remote` applications.
3. If you want to create application via `nx console` extension then select the extension and:

- select generate option and select `@nrwl/angular` application under options
- set application name
- select federationType as `static`
- check `mfe` checkbox
- if you are creating remote application then mention host name under `host` field and select `remote` option in `mfeType` dropdown.
- if you are creating host application mention all the remote application names under `remotes` field and select `host` option in `mfeType` dropdown
- check `standaloneConfig` checkbox. this will create a seperate `project.json` file for new application instead of updating `nx.json`. this is for application maintainability.
- check `strict` checkbox for strict type checking.

## Useful links

1. micro frontend example repo: [adv-mf-examples](https://github.com/manfredsteyer/adv-mf-examples)
2. module federation example: [module federation](https://github.com/nrwl/ng-module-federation)
3. angular nest nx example: [angular and nest](https://www.thisdot.co/blog/nx-workspace-with-angular-and-nest)
4. enterprise folder structure: [nx for enterprise](https://nx.dev/guides/monorepo-nx-enterprise)
5. ngrx and nx course: [course](https://duncanhunter.gitbook.io/enterprise-angular-applications-with-ngrx-and-nx/introduction/0-environment-setup)
6. MFE architecture nx angular: [MFE architecture](https://nx.dev/module-federation/micro-frontend-architecture)
