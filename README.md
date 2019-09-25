# sn-field-list-chrome

## Description

A simple chrome extension which allows you to hover over a field/column in
ServiceNow's list view and see it's field name and type.

## Installation

`git clone https://github.com/BillyNoGoat/sn-field-list-chrome.git`

### Configure scope

By default, it is configured to run on **all service-now instances**.
To edit where this is run, you can edit `matches` in the `manifest.json` file to
include all domains you want the script to run on.

Examples:

```
"matches": [
    "*://companytest.service-now.com/*",
    "*://companydevelopment.service-now.com/*",
    "*://companysubprod.service-now.com/*"
    ]
```

### Add to Chrome

Browse to chrome://extensions/
Ensure `developer mode` is active in the top right
Click `Load unpacked` in the top left corner
Browse to this folder, and add it.
