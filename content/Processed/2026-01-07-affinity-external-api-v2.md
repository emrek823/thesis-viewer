---
url: https://developer.affinity.co/docs/v2#section/Data-Model
title: "Affinity External API v2"
clipped: 2026-01-07 08:52
source: browser-history
---

# Affinity External API v2

> Source: [https://developer.affinity.co/docs/v2#section/Data-Model](https://developer.affinity.co/docs/v2#section/Data-Model)

[![Affinity logo](https://assets.affinity.co/img/logos/full-color-svg.svg)](https://support.affinity.co)

Search

* [Introduction](/docs/v2#section/Introduction)
* [Getting Started](/docs/v2#section/Getting-Started)
  + [Authentication](/docs/v2#section/Getting-Started/Authentication)
  + [Permissions](/docs/v2#section/Getting-Started/Permissions)
  + [Rate Limits](/docs/v2#section/Getting-Started/Rate-Limits)
  + [Pagination](/docs/v2#section/Getting-Started/Pagination)
  + [Filtering](/docs/v2#section/Getting-Started/Filtering)
  + [Error Codes](/docs/v2#section/Getting-Started/Error-Codes)
  + [Versioning](/docs/v2#section/Getting-Started/Versioning)
  + [Beta Endpoints](/docs/v2#section/Getting-Started/Beta-Endpoints)
* [Data Model](/docs/v2#section/Data-Model)
  + [The Basics](/docs/v2#section/Data-Model/The-Basics)
  + [Working with Field Data](/docs/v2#section/Data-Model/Working-with-Field-Data)
  + [Nested Associations](/docs/v2#section/Data-Model/Nested-Associations)
* [User Guides](/docs/v2#section/User-Guides)
  + [A Tour of Our GET Endpoints](/docs/v2#section/User-Guides/A-Tour-of-Our-GET-Endpoints)
* [Upcoming Changes](/docs/v2#section/Upcoming-Changes)
  + [January 1st, 2026](/docs/v2#section/Upcoming-Changes/January-1st-2026)
* [Changelog](/docs/v2#section/Changelog)
  + [September 25th, 2025](/docs/v2#section/Changelog/September-25th-2025)
  + [July 30th, 2025](/docs/v2#section/Changelog/July-30th-2025)
  + [May 14th, 2025](/docs/v2#section/Changelog/May-14th-2025)
  + [April 9th, 2025](/docs/v2#section/Changelog/April-9th-2025)
  + [March 31st, 2025](/docs/v2#section/Changelog/March-31st-2025)
  + [February 28th, 2025](/docs/v2#section/Changelog/February-28th-2025)
  + [January 17th, 2025](/docs/v2#section/Changelog/January-17th-2025)
  + [January 15th, 2025](/docs/v2#section/Changelog/January-15th-2025)
  + [December 3rd, 2024](/docs/v2#section/Changelog/December-3rd-2024)
  + [September 25th, 2024](/docs/v2#section/Changelog/September-25th-2024)
  + [August 5, 2024](/docs/v2#section/Changelog/August-5-2024)
  + [July 24, 2024](/docs/v2#section/Changelog/July-24-2024)
  + [March 25, 2024](/docs/v2#section/Changelog/March-25-2024)
  + [January 4, 2023](/docs/v2#section/Changelog/January-4-2023)
  + [December 12, 2023](/docs/v2#section/Changelog/December-12-2023)
* [auth](/docs/v2/tag/auth)
  + [get

     `/v2/auth/whoami`  Get current user](/docs/v2/tag/auth#operation/v2_auth_whoami__GET)
* [calls](/docs/v2/tag/calls)
  + [get

     `/v2/calls`  Get metadata on all Calls](/docs/v2/tag/calls#operation/v2_calls__GET)
* [chatMessages](/docs/v2/tag/chatMessages)
  + [get

     `/v2/chat-messages`  Get metadata on all Chat Messages](/docs/v2/tag/chatMessages#operation/v2_chat-messages__GET)
* [companies](/docs/v2/tag/companies)
  + [get

     `/v2/companies`  Get all Companies](/docs/v2/tag/companies#operation/v2_companies__GET)
  + [get

     `/v2/companies/fields`  Get metadata on Company Fields](/docs/v2/tag/companies#operation/v2_companies_fields__GET)
  + [get

     `/v2/companies/{companyId}`  Get a single Company](/docs/v2/tag/companies#operation/v2_companies_companyId__GET)
  + [get

     `/v2/companies/{companyId}/list-entries`  Get a Company's List Entries](/docs/v2/tag/companies#operation/v2_companies_companyId_list-entries__GET)
  + [get

     `/v2/companies/{companyId}/lists`  Get a Company's Lists](/docs/v2/tag/companies#operation/v2_companies_companyId_lists__GET)
  + [get

     `/v2/companies/{companyId}/notes`  Get Notes for a Company](/docs/v2/tag/companies#operation/v2_companies_companyId_notes__GET)
* [companyMerges](/docs/v2/tag/companyMerges)
  + [get

     `/v2/company-merges`  Get All Company Merges](/docs/v2/tag/companyMerges#operation/v2_company-merges__GET)
  + [post

     `/v2/company-merges`  Initiate Company Merge](/docs/v2/tag/companyMerges#operation/v2_company-merges__POST)
  + [get

     `/v2/company-merges/{mergeId}`  Get Company Merge](/docs/v2/tag/companyMerges#operation/v2_company-merges_mergeId__GET)
  + [get

     `/v2/tasks/company-merges`  Get All Company Merge Tasks](/docs/v2/tag/companyMerges#operation/v2_tasks_company-merges__GET)
  + [get

     `/v2/tasks/company-merges/{taskId}`  Get Company Merge Task](/docs/v2/tag/companyMerges#operation/v2_tasks_company-merges_taskId__GET)
* [emails](/docs/v2/tag/emails)
  + [get

     `/v2/emails`  Get metadata on all Emails](/docs/v2/tag/emails#operation/v2_emails__GET)
* [lists](/docs/v2/tag/lists)
  + [get

     `/v2/lists`  Get metadata on all Lists](/docs/v2/tag/lists#operation/v2_lists__GET)
  + [get

     `/v2/lists/{listId}`  Get metadata on a single List](/docs/v2/tag/lists#operation/v2_lists_listId__GET)
  + [get

     `/v2/lists/{listId}/fields`  Get metadata on a single List's Fields](/docs/v2/tag/lists#operation/v2_lists_listId_fields__GET)
  + [get

     `/v2/lists/{listId}/list-entries`  Get all List Entries on a List](/docs/v2/tag/lists#operation/v2_lists_listId_list-entries__GET)
  + [get

     `/v2/lists/{listId}/list-entries/{listEntryId}`  Get a single List Entry on a List](/docs/v2/tag/lists#operation/v2_lists_listId_list-entries_listEntryId__GET)
  + [get

     `/v2/lists/{listId}/list-entries/{listEntryId}/fields`  Get field values on a single List Entry](/docs/v2/tag/lists#operation/v2_lists_listId_list-entries_listEntryId_fields__GET)
  + [patch

     `/v2/lists/{listId}/list-entries/{listEntryId}/fields`  Perform batch operations on a list entry's fields](/docs/v2/tag/lists#operation/v2_lists_listId_list-entries_listEntryId_fields__PATCH)
  + [get

     `/v2/lists/{listId}/list-entries/{listEntryId}/fields/{fieldId}`  Get a single field value](/docs/v2/tag/lists#operation/v2_lists_listId_list-entries_listEntryId_fields_fieldId__GET)
  + [post

     `/v2/lists/{listId}/list-entries/{listEntryId}/fields/{fieldId}`  Update a single field value on a List Entry](/docs/v2/tag/lists#operation/v2_lists_listId_list-entries_listEntryId_fields_fieldId__POST)
  + [get

     `/v2/lists/{listId}/saved-views`  Get metadata on Saved Views](/docs/v2/tag/lists#operation/v2_lists_listId_saved-views__GET)
  + [get

     `/v2/lists/{listId}/saved-views/{viewId}`  Get metadata on a single Saved View](/docs/v2/tag/lists#operation/v2_lists_listId_saved-views_viewId__GET)
  + [get

     `/v2/lists/{listId}/saved-views/{viewId}/list-entries`  Get all List Entries on a Saved View](/docs/v2/tag/lists#operation/v2_lists_listId_saved-views_viewId_list-entries__GET)
* [meetings](/docs/v2/tag/meetings)
  + [get

     `/v2/meetings`  Get metadata on all Meetings](/docs/v2/tag/meetings#operation/v2_meetings__GET)
* [notes](/docs/v2/tag/notes)
  + [get

     `/v2/notes`  Get all Notes](/docs/v2/tag/notes#operation/v2_notes__GET)
  + [get

     `/v2/notes/{noteId}`  Get a single Note](/docs/v2/tag/notes#operation/v2_notes_noteId__GET)
  + [get

     `/v2/notes/{noteId}/attached-companies`  Get Companies attached to a Note](/docs/v2/tag/notes#operation/v2_notes_noteId_attached-companies__GET)
  + [get

     `/v2/notes/{noteId}/attached-opportunities`  Get Opportunities attached to a Note](/docs/v2/tag/notes#operation/v2_notes_noteId_attached-opportunities__GET)
  + [get

     `/v2/notes/{noteId}/attached-persons`  Get Persons attached to a Note](/docs/v2/tag/notes#operation/v2_notes_noteId_attached-persons__GET)
  + [get

     `/v2/notes/{noteId}/replies`  Get replies for a Note](/docs/v2/tag/notes#operation/v2_notes_noteId_replies__GET)
* [opportunities](/docs/v2/tag/opportunities)
  + [get

     `/v2/opportunities`  Get all Opportunities](/docs/v2/tag/opportunities#operation/v2_opportunities__GET)
  + [get

     `/v2/opportunities/{opportunityId}`  Get a single Opportunity](/docs/v2/tag/opportunities#operation/v2_opportunities_opportunityId__GET)
  + [get

     `/v2/opportunities/{opportunityId}/notes`  Get Notes for an Opportunity](/docs/v2/tag/opportunities#operation/v2_opportunities_opportunityId_notes__GET)
* [personMerges](/docs/v2/tag/personMerges)
  + [get

     `/v2/person-merges`  Get All Person Merges](/docs/v2/tag/personMerges#operation/v2_person-merges__GET)
  + [post

     `/v2/person-merges`  Initiate Person Merge](/docs/v2/tag/personMerges#operation/v2_person-merges__POST)
  + [get

     `/v2/person-merges/{mergeId}`  Get Person Merge](/docs/v2/tag/personMerges#operation/v2_person-merges_mergeId__GET)
  + [get

     `/v2/tasks/person-merges`  Get All Person Merge Tasks](/docs/v2/tag/personMerges#operation/v2_tasks_person-merges__GET)
  + [get

     `/v2/tasks/person-merges/{taskId}`  Get Person Merge Task](/docs/v2/tag/personMerges#operation/v2_tasks_person-merges_taskId__GET)
* [persons](/docs/v2/tag/persons)
  + [get

     `/v2/persons`  Get all Persons](/docs/v2/tag/persons#operation/v2_persons__GET)
  + [get

     `/v2/persons/fields`  Get metadata on Person Fields](/docs/v2/tag/persons#operation/v2_persons_fields__GET)
  + [get

     `/v2/persons/{personId}`  Get a single Person](/docs/v2/tag/persons#operation/v2_persons_personId__GET)
  + [get

     `/v2/persons/{personId}/list-entries`  Get a Person's List Entries](/docs/v2/tag/persons#operation/v2_persons_personId_list-entries__GET)
  + [get

     `/v2/persons/{personId}/lists`  Get a Person's Lists](/docs/v2/tag/persons#operation/v2_persons_personId_lists__GET)
  + [get

     `/v2/persons/{personId}/notes`  Get Notes for a Person](/docs/v2/tag/persons#operation/v2_persons_personId_notes__GET)
* [transcripts](/docs/v2/tag/transcripts)
  + [get

     `/v2/transcripts`  Get all Transcripts](/docs/v2/tag/transcripts#operation/v2_transcripts__GET)
  + [get

     `/v2/transcripts/{transcriptId}`  Get a single Transcript](/docs/v2/tag/transcripts#operation/v2_transcripts_transcriptId__GET)
  + [get

     `/v2/transcripts/{transcriptId}/fragments`  Get fragments of a transcript](/docs/v2/tag/transcripts#operation/v2_transcripts_transcriptId_fragments__GET)