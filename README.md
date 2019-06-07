# Types for the AvO2 API#

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
