# Welcome to GitHub-FormSchema-Converter contributing guide <!-- omit in toc -->

Thank you for investing your time in contributing to our project! Any contribution you make will be reflected on [README](https://github.com/hsw1805/GitHub-FormSchema-Converter) ✨.

Read our [Code of Conduct](./CODE_OF_CONDUCT.md) to keep our community approachable and respectable.

In this guide you will get an overview of the contribution workflow from opening an issue, creating a PR, reviewing, and merging the PR.

## Got a Question or Problem?

If you have any question or problem, start conversation at [Discussions](https://github.com/hsw1805/GitHub-FormSchema-Converter/discussions)!
Then our maintainers, collaborators and contributers will help you.

### Issues

#### Create a new issue

If you spot a problem with the docs, [search if an issue already exists](). If a related issue doesn't exist, you can open a new issue using a relevant [issue form]().

#### Solve an issue

Scan through our [existing issues](https://github.com/hsw1805/GitHub-FormSchema-Converter/issues) to find one that interests you. You can narrow down the search using `labels` as filters. If you find an issue to work on, you are welcome to open a PR with a fix.

## Submission Guidelines

### Submitting an Issue

Before you submit an issue, please search the issue tracker, maybe an issue for your problem already exists and the discussion might inform you of workarounds readily available.

We want to fix all the issues as soon as possible, but before fixing a bug we need to reproduce and confirm it. In order to reproduce bugs we will systematically ask you to provide a minimal reproduction scenario using a repository. Having a live, reproducible scenario gives us wealth of important information without going back & forth to you with additional questions like:

- environments where this module is running (OS, Browser...)
- a use-case that fails

You can file new issues by filling out our new issue form.

### Submitting a Pull Request (PR)

Before you submit your Pull Request (PR) consider the following guidelines:

1. Search GitHub Pull Requests for an open or closed PR that relates to your submission. You don't want to duplicate effort.

2. Fork this repository to your GitHub
   [click to fork GitHub-FormSchema-Converter!](https://github.com/hsw1805/GitHub-FormSchema-Converter/fork)

3. Clone your GitHub-FormSchema-Converter repository :

   ```bash
   git clone your-github-id/GitHub-FormSchema-Converter
   ```

4. Make your changes in a main branch(or feature branch):

5. Commit your changes using a descriptive commit message that follows our commit message conventions. Adherence to these conventions is necessary because release notes are automatically generated from these messages.

   ```bash
   git commit -a -s
   # -s is an option to sign-off your code, and we recommend to use it!
   ```

   Note: the optional commit -a command line option will automatically "add" and "rm" edited files.

6. Push your branch to GitHub:

   ```bash
   git push
   ```

7. In GitHub, send a pull request to GitHub-FormSchema-Converter:main or GitHub-FormSchema-Converter:feature/\* .

<br>

> That's it! Thank you for your contribution! ✨

<br>
## <a name="development"></a> Development Setup

You will need [Node.js](https://nodejs.org) version >= 10.13.0 (except for v13).

1. After cloning the repo, run:

```bash
$ npm ci # (or yarn install)
```

2. In order to prepare your environment run `prepare.sh` shell script:

```bash
$ sh scripts/prepare.sh
```

That will compile fresh packages and afterward, move them all to `sample` directories.

### <a name="common-scripts"></a>Commonly used NPM scripts

```bash
# build all packages and move to "sample" directories
$ npm run build

# run the full unit tests suite
$ npm run test

# run integration tests
# docker is required(!)
$ sh scripts/run-integration.sh

# run linter
$ npm run lint

# build all packages and put them near to their source .ts files
$ npm run build:prod
```
