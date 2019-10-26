## Sample issue

This is a sample issue 1. Files include a working example of the footnoting system, multiauthor citation, and a sample "special feature" subsection. 

Each issue is based on the Jekyll "collections" system. The index file in the root of each collection specifies basic info and the "category_menu" layout generates a table of contents.

When customizing, create a new collection for each issue. Write your yml carefully. If you have weird quotes that you want to put in there, use the |- method to escape them upfront. There's an example in the bios.yml file in the data folder.

The yml for a typical article looks like this:

```
---
layout: page <-- standard
category: name of the section within the issue
type: name of the folder containing the issue, minus the underscore
issue: a number
year: a year
DOI: xxx.xxx <-- the parts of the doi unique to this article. leave off the base journal doi
title: title of the essay as it will appear in the TOC
names:
 - firstname: author1
   lastname: author1 surname
   affiliation: institution or company
 - firstname: author2
   lastname: author2 surname
   affiliation: institution or company
bio: [author1, author2] <-- these should match the entry in the bio.yml file
media_path: pathname to media files on media server. leave off the base url specified in config.yml
description: short description for metadata and twitter
meta_image: the filename of an image you want to appear on facebook. it should be put in the media folder specificed in media_path
---
```