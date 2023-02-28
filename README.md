# Types for the AvO2 API #

This repo contains the object types that are used to communicate between the NodeJS service and the React client apps.
Every type in this package is namespaces under `Avo`.

## Usage ##

### How to include ###

```typescript
import { Avo } from "@viaa/avo2-types";

...
```

### How to use ###

```typescript
const apiStatus: Avo.Status.Response = {
    success: true,
    version: "1.0.0",
    data: new Date(),
}
```

## Status ##

* `Avo.Status.StatusResponse`

## Search ##

* `Avo.Search.FilterRequest`
* `Avo.Search.Filters`
* `Avo.Search.FilterResponse`
* `Avo.Search.FilterItem`


## Deploy

Steps to deploy:
* update package.json version to match release branch version
* merge release branch into master
* add tag on master + push the tag (format: v1.1.1)
* goto jenkins to start a build or wait up to 20 minutes for an automatic build
    * only available on the meemoo vpn
    * https://jenkins-ci-cd.apps.do-prd-okp-m0.do.viaa.be/securityRealm/commenceLogin?from=%2Fjob%2Fci-cd%2F
    * password in 1password (meemoo jenkins login)
    * go to ci-cd
    * click on ci-cd/avo2-typings-dev
    * click build now
    * click console output to follow the build
* When the build succeeds you should see the version of the npm package in the meemoo npm repository:
    * http://do-prd-mvn-01.do.viaa.be:8081/#browse/browse:npm-viaa:%40viaa
    * same login as jenkins
* You can now update the package version in the client and run npm install
    * Make sure you're connected with the meemoo vpn for npm install to succeed
    * The avo2 packages are under @viaa namespace
