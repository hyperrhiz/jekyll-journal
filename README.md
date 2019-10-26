# Journals for everyone

Jekyll-journal is a set of handrolled extensions to Jekyll, for use as an academic journal templating system. I developed it to template [Hyperrhiz](http://hyperrhiz.io/) and [Rhizomes](http://rhizomes.net/). You can use Jekyll-journal for whatever, but I am not available for tech support because I have to, you know, run a journal.

J-j is built to include some of the things necessary for responsible journal display and admin:

- auto generated table of contents for each issue
- auto citation (in MLA format rn; will extend to others later)
- auto metadata for Highwire Press, Twitter and Facebook
- quick centralized bio updating file
- DOI inclusion
- separate templating for sub-sections, e.g. when you have a multi-part or multi-author project

J-j is *not* a journal management system for editorial processes. We got that handled already, kthxbye.

## Dependencies

- J-j uses Bootstrap and JQuery via CDN. Keep an eye out for updates! Sometimes things break.
- Use the jekyll-sitemap Gem for good Googling.
- auto footnotes are built using footnoted.js, which is installed in the js folder.

## Idiosyncracies

- This thing is the result of my brain negotiating with the strangeness of Jekyll and Liquid. So there will be things that make no logical sense but still somehow work. Trust me, I'm aware of this.
- J-j assumes you have media files you want to serve that are not best stored in git repositories. It includes a link to a "media server" that you can specify in order to include files directly. You could use storage on your own server; Amazon s3 is a good alternative.

## Installing

You'll need:

- Ruby
- Bundler
- Jekyll
- server space to store media separately from your Jekyll-journal install, unless you have no plans to use more than a few images or other media objects.

## Sample issue

In the _issue01 folder is a sample issue. Files include a working example of the footnoting system, multiauthor citation, and a sample "special feature" subsection. 

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

## Data file storage

- "bios.yml" contains all author info. These are used to generate sidebar bios for each article. I've gone back & forth about whether it's better to have bios in one place for updating or to treat them like historical artefacts. For the moment, I've chosen the "one place" approach so as to keep authors updated.

- The "feature" folder is a place to store info for generating "special feature" submenus, for example a curated collection of items by different people [like this one](https://doi.org/10.20415/hyp/019.s01) that you want gathered together as an integrated unit in a journal issue. You could also use it for an individual essay that has multiple pages with different content [like this one](https://doi.org/10.20415/hyp/019.k01). The yml is used to generate a subtable of contents. Make a new file for each special feature collection.

- The "xml" folder is a place to put your data stuff like crossref and doaj deposit files.

- I used bio info from astronauts as an example. Because astronauts are amazing and should be in everything.

## Before you deploy

- remove the file "corner.html" from the "includes" folder and remove the line "{% include corner.html %}" from "page.html" in the "layouts" folder. Otherwise you'll be stuck with that github logo.
- if you're serving from the root of your directory, comment out the line "baseurl: /jekyll-journal" (line 37) from "config.yml". This is just in there so that Github Pages can figure out pathnames in the demo.

## Credits

- thanks to [Jekyll](https://github.com/jekyll/jekyll) for creating such a fun system
- thanks to [Jacob Heftmann](https://github.com/jheftmann/footnoted) for footnoted.js
- thanks to [Tim Holman](https://github.com/tholman/github-corners) for github-corners


