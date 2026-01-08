---
url: https://api-docs.affinity.co/
title: "Affinity API Reference"
clipped: 2026-01-07 10:51
source: browser-history
---

# Affinity API Reference

> Source: [https://api-docs.affinity.co/](https://api-docs.affinity.co/)

# Introduction

Welcome to the Affinity API! This API provides a RESTful interface for performing
operations on the different objects that make up Affinity. If you are trying to
accomplish an action through this API and are not sure on what endpoints to use, or
if you have ideas on more endpoints we could create to make your workflow easier,
please do not hesitate to contact us at <support@affinity.co>.

# Getting Started

## Authentication

> Authentication using HTTP Basic Auth.

```
curl "https://api.affinity.co/api_endpoint" -u :$APIKEY
```

> Authentication using HTTP Bearer Auth.

```
curl "https://api.affinity.co/api_endpoint" -H "Authorization: Bearer ${APIKEY}"
```

To use the API, you will need to generate an API secret key. This can be done easily through
the Settings Panel that is accessible through the left sidebar on the Affinity web app. For more
support, visit the [How to obtain your API Key](https://support.affinity.co/hc/en-us/articles/360032633992-How-to-obtain-your-API-Key)
article in our Help Center.

Requests are authenticated using one of the following:

| Authentication Type | Details |
| --- | --- |
| [HTTP Basic Auth](http://en.wikipedia.org/wiki/Basic_access_authentication) | Provide your API key as the basic auth password. You do not need to provide a username. |
| [HTTP Bearer Auth](https://swagger.io/docs/specification/v3_0/authentication/bearer-authentication/) | Provide your API key as the bearer token. |

Currently, we support one key per user on your team. Once you have generated a key, you
will need to pass in the key with every API request for us to process it successfully.
Otherwise, an error with a code of `401` will be returned.

## Requests & Responses

This is a full-featured RESTful API. We provide reading & writing functionality for each
object type in Affinity. All requests use the base URL of `https://api.affinity.co/`.

Responses to each request are provided as a JSON object. The response is either the data
requested, or a valid error message and error code as outlined below.

Here is a list of all the error codes the Affinity API returns in case something does not go as expected:

| Error Code | Meaning |
| --- | --- |
| 401 | Unauthorized -- Your API key is invalid. |
| 403 | Forbidden -- Insufficient rights to a resource. |
| 404 | Not Found -- Requested resource does not exist. |
| 422 | Unprocessable Entity -- Malformed parameters supplied. This can also happen in cases the parameters supplied logically cannot complete the request. In this case, an appropriate error message is delivered. |
| 429 | Too Many Requests -- You have exceed the rate limit. |
| 500 | Internal Server Error -- We had a problem with our server. Try again later. |
| 503 | Service Unavailable -- This shouldn't generally happen. Either a deploy is in process, or Affinity services are down. |

# Rate Limits

## API Rate Limits

The Affinity API sets a limit on the number of calls that a user can make per minute, and that all the users on an account can make per month. It also sets a reasonable limit on the number of concurrent requests it will support from an account at one time.

Requests to both Affinity API versions will count toward the one pool of requests allowed for a user or account. Once a per-minute, monthly, or concurrent rate limit is hit, subsequent requests will return an error code of 429. We highly recommend designing your application to handle 429 errors.

### Monthly Limits (Account-Level)

Your account plan tier will limit the overall number of requests you can make per month.
Current rate limits by plan tier are:

| Plan Tier | Calls per month |
| --- | --- |
| Essentials | None |
| Scale | 100,000 |
| Advanced | 100,000 |
| Enterprise | Unlimited\* |
| Professional (Legacy) | None\* |
| Premium (Legacy) | 100,000 |
| Enterprise (Legacy) | Unlimited\* |

This monthly account-level limit resets at the end of each calendar month.

### Per Minute Limits (User-Level)

All API requests will be halted at 900 per user, per minute. We may also lower this limit on a temporary basis to manage API availability.

### Concurrent Request Limits (Account-Level)

To protect our systems and manage availability across customers, we set a reasonable limit on concurrent requests at the account level. Customers should not expect to hit this limit unless they are hitting the API with heavy operations from many concurrent threads at once.

## Webhook Subscription Limit

There is a limit of three webhook subscriptions per Affinity instance.

## Rate Limit Headers

Each external API call will include headers with information about monthly and per-minute limits. This is a convenient way to retrieve your rate limits and usage without needing to hit the [`/rate-limit`](#rate-limit) endpoint. Every API call will respond with the following headers:

| Header | Description |
| --- | --- |
| X-Ratelimit-Limit-User | Number of requests allowed per minute for the user |
| X-Ratelimit-Limit-User-Remaining | Number of requests remaining for the user |
| X-Ratelimit-Limit-User-Reset | Time in seconds before the limit resets for the user |
| X-Ratelimit-Limit-Org | Number of requests allowed per month for the organization |
| X-Ratelimit-Limit-Org-Remaining | Number of requests remaining for the organization |
| X-Ratelimit-Limit-Org-Reset | Time in seconds before the limit resets for the organization |

# Data Model

## Overview

The three top-level objects in Affinity are Persons, Organizations, and Opportunities, and everything in the product is centered around these three resources. We refer to a data model that is a person, organization, or opportunity as an Entity.

The data stored in Affinity can be easily understood as a spreadsheet, with many rows, columns and cells. For each part of a spreadsheet, there are directly equivalent data models in Affinity.

The List view in Affinity represents the spreadsheet itself. A List is a collection of many rows, and the Affinity equivalent of a row is a List Entry. Each column in a spreadsheet is represented by a "Field". There are three types of Fields in Affinity: Global Fields, List-specific Fields and Smart Fields.

The data in each cell is represented by a "Field Value". There are both regular Field Values and Smart Field Values.

![](images/crm-field-mappings-47b2c3ba.png)

List Entry

Global Field

List-specific Field

Field Value

Smart Field Value

## Default Fields

By default, Affinity creates some fields for you automatically. Below are the fields created by type:

### Global Fields

* Location
* Industry
* Job Titles
* LinkedIn URL
* Phone Number
* Connections
* Source of Introduction
* Lists
* Crunchbase Data
* Affinity Data
* Pitchbook Data

### Smart Fields

* First Email
* Last Email
* First Event (First Meeting)
* Next Event (Next Meeting)
* Last Event (Last Meeting)
* Last Interaction
* Date Added

### List-specific Fields

* Status
* Owners
* Amount

# Common Use Cases

Use the common use cases below to learn how Affinity API endpoints work.

## Getting Field Values for All List Entries on a List

1. ### 1. Query `GET /lists` to get all lists and filter results by list name to get the appropriate list ID

   ```
   GET /lists Response:
   [
     {
       "id": 12058,
       "type": 0,
       "name": "Current Prospects",
       "public": true,
       "owner_id": 477400,
       "list_size": 150
     }
     ...
   ]
   ```
2. ### 2. Query `GET /lists/12058/list-entries` to get all list entries. Store the `entity_id` associated with each list entry ID

   ```
   GET /lists/{list_id}/list-entries Response:
   [
     {
       "id": 37605676,
       "list_id": 113859,
       "creator_id": 63842761,
       "entity_id": 7133202,
       "entity_type": 8,
       "created_at": "2021-09-12T16:29:15.962-07:00",
       "entity": {
         "id": 7133202,
         "name": "Affinity Opportunity"
       }
     }
     ...
   ]
   ```
3. ### 3. For each list entry, query `GET /field-values` with the `entity_id` from the previous step. Make sure you are passing `entity_id` through the appropriate parameter (e.g person\_id)

   ```
   GET /field-values Response:
   [
     {
       "id": 2448594830,
       "field_id": 61223,
       "list_entry_id": 37605676,
       "entity_type": 0,
       "value_type": 3,
       "entity_id": 7133202,
       "value": 5000.0
     }
     ...
   ]
   ```
4. ### 4. Locate field values for a given set of fields (optional)

   1. Query `GET /fields` to get all fields. If the given set of fields are all list-specific, it is helpful to pass along the `list_id` parameter to prefilter the results
   2. Filter results of `GET /fields` by field name to get the appropriate field ID
   3. Cross-reference the `field_id` from Step 3 with the field ID

   ```
   GET /fields Response:
   [
     {
       "id": 61223,
       "name": "Amount",
       "list_id": 12058,
       "value_type": 3,
       "allows_multiple": false,
       "track_changes": true,
     }
     ...
   ]
   ```

## Getting Field Value Changes for Status Fields

1. ### 1. Query `GET /lists` and filter results to get the appropriate list ID

   ```
   GET /lists Response:
   [
     {
       "id": 12058,
       "type": 0,
       "name": "Current Prospects",
       "public": true,
       "owner_id": 477400,
       "list_size": 150
     }
     ...
   ]
   ```
2. ### 2. Locate the appropriate status field:

   1. Query `GET /fields` to get all fields. If the given set of fields are all list-specific, it is helpful to pass along the list\_id parameter to prefilter the results
   2. Filter results of `GET /fields` by field name and cross-reference the `list_id` with the appropriate list ID from Step 1 to confirm you have the appropriate status field

   ```
   GET /fields Response:
   [
     {
       "id": 61223,
       "name": "Amount",
       "list_id": 12058,
       "value_type": 3,
       "allows_multiple": false,
       "track_changes": true,
     },
     ...
   ]
   ```
3. ### 3. Query `GET /field-values-changes` passing in the `id` from Step 2

   ```
   GET /field-values-changes Response:
   [
     {
       "id": 7,
       "entity_attribute_id": 106,
       "changer": {
           "id": 2,
           "type": 1,
           "first_name": "Alice",
           "last_name": "Doe",
           "primary_email": "alice@affinity.co",
           "emails": [
               "alice@affinity.co"
           ]
       },
       "changed_at": "2021-09-17T10:43:12.781-04:00",
       "action_type": 2,
       "list_entry_id": 15709964,
       "person": {
           "id": 2,
           "type": 1,
           "first_name": "John",
           "last_name": "Doe",
           "primary_email": "jdoe@alumni.stanford.edu",
           "emails": [
               "jdoe@alumni.stanford.edu"
           ]
       },
       "company": null,
       "opp": null,
       "value": {
           "id": 30,
           "text": "In Progress",
           "rank": 1,
           "color": 3
       },
       "entity_id": 38706,
       "field_id": 61223
       }
     ...
   ]
   ```
4. ### 4. Filter results of `GET /field-values-changes` (e.g.: If you only want status field changes for a specific organization in your list, search by the `list_entry_id`).

   ```
   GET /field-values-changes Response:
   [
     {
       "id": 7,
       "entity_attribute_id": 106,
       "changer": {
           "id": 2,
           "type": 1,
           "first_name": "Alice",
           "last_name": "Doe",
           "primary_email": "alice@affinity.co",
           "emails": [
               "alice@affinity.co"
           ]
       },
       "changed_at": "2021-09-17T10:43:12.781-04:00",
       "action_type": 2,
       "list_entry_id": 15709964,
       "person": {
           "id": 2,
           "type": 1,
           "first_name": "John",
           "last_name": "Doe",
           "primary_email": "jdoe@alumni.stanford.edu",
           "emails": [
               "jdoe@alumni.stanford.edu"
           ]
       },
       "company": null,
       "opp": null,
       "value": {
           "id": 30,
           "text": "In Progress",
           "rank": 1,
           "color": 3
       },
       "entity_id": 38706,
       "field_id": 61223
       }
     ...
   ]
   ```

## Getting the Strongest Relationship Strength Connection to an Organization on a List

1. ### 1. Query `GET /lists` to get all lists and filter results to get the appropriate list ID

   ```
   GET /lists Response:
   [
     {
       "id": 12058,
       "type": 0,
       "name": "Current Prospects",
       "public": true,
       "owner_id": 477400,
       "list_size": 150
     }
     ...
   ]
   ```
2. ### 2. Query `GET /lists/12058/list-entries` to get all list entries. Store the `entity_id` associated with each list entry ID

   ```
   GET /lists/{list_id}/list-entries Response:
   [
     {
       "id": 37605676,
       "list_id": 12058,
       "creator_id": 63842761,
       "entity_id": 7133202,
       "entity_type": 8,
       "created_at": "2021-09-12T16:29:15.962-07:00",
       "entity": {
         "id": 7133202,
         "name": "Affinity",
         "domain": "affinity.co",
         "domains": [
           "affinity.co"
         ],
         "crunchbase_uuid": null,
         "global": false
       }
     }
     ...
   ]
   ```
3. ### 3. For each list entry, query `GET /organizations/{organization_id}` to get all list people associated with the organization. Store the `person_ids` associated with each organization

   ```
   GET /organizations/7133202 Response:
   {
     "id": 7133202,
     "name": "Affinity",
     "domain": "affinity.co",
     "domains": ["affinity.co"],
     "crunchbase_uuid": null,
     "global": false,
     "person_ids": [89734, 117270, 138123, 274492, 304848, ...],
     "list_entries": [
       {
         "id": 389,
         "list_id": 26,
         "creator_id": 38603,
         "entity_id": 7133202,
         "entity_type": 0,
         "created_at": "2020-12-11T02:26:56.537-08:00",
       }
       ...
     ]
   }
   ```
4. ### 4. For each person ID from Step 3, query `GET /relationships-strengths` passing in the person ID. Once all person IDs have been looped through, filter for the highest `strength`

   ```
   GET /relationships-strengths Response:
   [
     {
       "internal_id": 26317,
       "external_id": 89734,
       "strength": 0.5
     }
     ...
   ]
   ```

## Useful Resources

* [Postman Collection](/postman/collection.json) (Right-click and save as JSON then import into [Postman](https://www.postman.com/))
* [Affinity Zapier Integrations](https://zapier.com/apps/affinity/integrations)
* [Affinity Tray Connectors](https://tray.io/documentation/connectors/service/affinity)

# Partner With Us

If you're a developer interested in building an integration with Affinity's relationship intelligence platform for your customers, please [get in touch here](https://53mt2d9of77.typeform.com/to/LhEs2tzU).

# Spacer

# Lists

Lists are the primary data structure that you can interact

[... truncated ...]