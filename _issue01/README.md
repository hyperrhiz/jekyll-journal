## Sample issue

This is a sample issue 1. Files include a working example of the footnoting system, multiauthor citation, and a sample "special feature" subsection. 

Each issue is based on the Jekyll "collections" system. The index file in the root of each collection specifies basic info and the "category_menu" layout generates a table of contents.

When customizing, create a new collection for each issue. Write your yml carefully. If you have weird quotes that you want to put in there, use the |- method to escape them upfront. There's an example in the bios.yml file in the data folder.

The yml for a typical article looks like this:

```
---
layout: page <-- standard
category: name of the section within the issue. must exactly match the name in the index list
type: name of the folder containing the issue, minus the underscore
issue: a number
year: a year
DOI: xxx.xxx <-- the parts of the doi unique to this issue and article. leave off the base journal doi
title: title of the essay as it will appear in the TOC
names:
 - firstname: author1
   lastname: author1 surname
   affiliation: institution or company
 - firstname: author2
   lastname: author2 surname
   affiliation: institution or company
bio: [author1, author2] <-- these should match the entry in the bio.yml file
description: short description for metadata and twitter
media:
 - path: path/foldername/ <-- media server pathname for this issue. leave off the base url specified in config.yml
   default: <-- default image for social media. it should be in the media folder specified in media_path
---
```