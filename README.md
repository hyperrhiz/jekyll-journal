# Journals for everyone

Jekyll-journal is a set of handrolled extensions to Jekyll, customized for use as an academic journal templating system. I built it to help manage [Hyperrhiz](http://hyperrhiz.io/) and (shortly) [Rhizomes](http://rhizomes.net/). You can use Jekyll-journal for whatever, but I am not available for tech support because I have to, you know, run a journal.

J-j is built to include some of the things useful for journal organization and display:

- auto generated table of contents for each issue
- auto citation (in MLA format rn; will extend to others later)
- auto metadata for Highwire Press, Twitter and Facebook
- quick centralized bio updating file
- DOI and ORCID inclusion
- separate templating for sub-sections, e.g. when you have a multi-part or multi-author project

J-j is *not* a journal management system for editorial processes. We got that handled already, kthxbye.

## Dependencies

- J-j includes Bootstrap, Video-js and JQuery via CDN. Keep an eye out for updates! Sometimes things break.
- auto footnotes are built using footnoted.js, which is installed in the js folder.

## Idiosyncracies

- This is the result of my brain negotiating with the strangeness of Jekyll and Liquid. You might ask "why didn't you do it this much more efficient way?" Keep asking, good buddy.
- J-j assumes you have media files you want to serve that are not best stored in git repositories. It includes a link to a "media server" that you can specify in order to include files directly. You could use storage on your own server; Amazon s3 is a good alternative.

## Installing

Before you start you'll need:

- a working Ruby environment. If you have a Mac this could (ugggh) take a while.
- server space to store media separately from your Jekyll-journal install, unless you have no plans to use more than a few images or other media objects.
- you might want to read the [Jekyll quickstart](https://jekyllrb.com/docs/step-by-step/01-setup/) to give you a sense of what's going on. Theirs is assuming a new local install, so I've included below a quickstart specifically for J-j.

To get and run the site files: 

- `git clone https://github.com/hyperrhiz/jekyll-journal.git`
- `cd jekyll-journal`
- `gem install jekyll bundler`
- `bundle init`
- edit the Gemfile and add the line `gem "jekyll"`
- `bundle`
- `bundle exec jekyll serve`
- Your site should now be previewable in-browser at http://localhost:4000/jekyll-journal/; see below on "previewing as you go"

## Customizing setup

- Edit the _config.yml file to suit your own environment. It should all be self evident in the file.
- if you're planning on serving your journal from the root of your site, comment out the line `baseurl: /jekyll-journal` (line 37) from _config.yml. This is just in there so that Github Pages can figure out pathnames in the demo site. Once you do this, you'll be previewable directly at http://localhost:4000/.
- ditto if you're serving from a sub-folder with a different name, make sure that the baseurl is renamed appropriately.
- remove the file "corner.html" from the _includes folder and remove the line `{% include corner.html %}` from "page.html" in the _layouts folder. Otherwise you'll be stuck with that Github logo.
- I recommend using the [jekyll-sitemap gem](https://github.com/jekyll/jekyll-sitemap) for good Googling. Here's how:
  * `gem install jekyll-sitemap`
  * edit the Gemfile and add the line `gem "jekyll-sitemap"`
  * `bundle`
  * list as a plugin in _config.yml. You'll see I've already added it in at line 45.
  * when you regenerate the site it will create a file "sitemap.xml" and place it into your _site folder.

## How Jekyll works

Jekyll builds sites from templates, so you can use it to layout visual elements. But it's also a way of organizing (and reorganizing) information: regeneration means you can do important things like make sitewide content or settings changes and only have to do it in one place.

- On the macro level, Jekyll takes content that you write and wraps it in templates that live in the "layouts" folder. You can use it to put layouts inside of layouts, so it's turtles all the way down. At the head of each file you create, you place a bunch of declarations in YML format, which give information about the file and determine what template is used.
- On the micro level, you can build templated snippets of HTML and put them inside the "includes" folder, and then call them in your content wherever you want as shortcuts. You do this using the "liquid" language.

## Top level pages

All the sidebar/topbar pages are in the folder named "meta". You can rename or remove them as you see fit and they will update automatically. You'll want to keep the "archive" page, though, so you can see previous issues.

## Previewing as you go

As you save your files, they'll automatically regenerate; so you can preview the entire site using your browser. You might want to keep your terminal window open too, since this will tell you when the site has completed. Sometimes it can take a few seconds.

Individual articles in each issue will only generate if the issue folder is listed as `output:true` in _config.yml. I've put in a commented out "issue02" so you can see how it will work after the first one.

!important! _config.yml does not update while your local server is running. So, if you make changes to that file, you'll need to interrupt the web server (ctrl-c) in Terminal and restart it again using bundle exec jekyll serve.

## Workflow

My workflow looks something like this:

- Create a new collections folder at the root, with an underscore (eg "_issue01").
- Inside the folder, create an index.html file that uses the yml listed below.
- create individual issue entries. For neatness I create folders for each section. See below for the yml.
- put all the media files on the media server so they can be linked to using snippets from the includes folder
- once everything looks good, edit _config.yml to designate the current issue and ensure the new issue files are published.
- git push everything for galley checks and corrections.
- check everything is scraping correctly on Facebook using the [Debugger](https://developers.facebook.com/tools/debug/sharing/)
- file DOI assignments with Crossref, notify other indexing services.

## Sample issue

Each issue is based on the Jekyll "collections" system. The index file in the root of each collection specifies basic info and the "category_menu" layout generates a table of contents.

In the _issue01 folder is a sample issue. Files include a working example of the footnoting system, multiauthor citation, and a sample "special feature" subsection. 

When customizing, create a new collection for each issue. Write your yml carefully. If you have weird quotes that you want to put in there, [use the |- method to escape them upfront](https://stackoverflow.com/questions/11301650/how-to-escape-indicator-characters-i-e-or-in-yaml). There's an example in the bios.yml file in the data folder.

First off you'll need an index page with the following info in the root of the issue folder.

```
---
layout: category_index <-- leave this as is
index: true <-- leave this as is
type: issue01 <-- the name of your issue folder without the underscore
DOI: xxx <-- the part of the doi unique to this issue. leave off the base journal doi
issue: 01 
season: Season
year: 200x
topic: Issue topic <-- appears in the header
subtopic:        <-- optional
editor: [nameofeditor] <-- match this to a bio entry in bios.yml in the data folder (see below)
categories: [section1, section2, section3] <-- labels for each part of the issue
description: short description for metadata and twitter
media:
 - path: path/foldername/ <-- media server pathname for this issue. leave off the base url specified in _config.yml
   default: filename.jpg <-- default image for social media. it should be in the media folder specified in media_path
---
```

Next, individual articles. The yml for a typical article looks like this:

```
---
layout: page <-- standard
category: name of the section within the issue. must exactly match the name in the index list
type: name of the folder containing the issue, minus the underscore
issue: a number
year: a year
DOI: xxx.xxx <-- the parts of the doi unique to this issue and article. leave off the base journal doi
title: title of the essay as it will appear in the TOC
bio: [author1, author2] <-- these should match the entry in the bio.yml file
description: short description for metadata and twitter
media:
 - path: path/foldername/ <-- media server pathname for this issue. leave off the base url specified in _config.yml
   default: <-- default image for social media. it should be in the media folder specified in media_path
---
```

## Data file storage

- "bios.yml" contains all author info. These are used to generate sidebar bios for each article. I've gone back & forth about whether it's better to have bios in one place for updating or to treat them like historical artefacts. For the moment, I've chosen the "one place" approach so as to keep authors updated.

- The "feature" folder is a place to store info for generating "special feature" submenus, for example a curated collection of items by different people [like this one](https://doi.org/10.20415/hyp/019.s01) that you want gathered together as an integrated unit in a journal issue. You could also use it for an individual essay that has multiple pages with different content [like this one](https://doi.org/10.20415/hyp/019.k01). The yml is used to generate a subtable of contents. Make a new file for each special feature collection.

- The "xml" folder is a place to put your data stuff like crossref and doaj deposit files.

- I used bio info from astronauts as an example. Because astronauts are amazing and should be in everything.

- these data are also used to generate individual citations for each page. Still working on getting a selective "role" working (eg "edited by" or "curated by" since there is a case problem if the author appears in more than one place in the same issue.)
## Going live

The "current issue" link is designated in _config.yml on line 51 - so every time you publish a new issue, you'll need to make sure the folder name is correct on line 51.

## Where to publish?

If your site is relatively small and uncomplicated, you can keep it on Github Pages [following their instructions here](https://pages.github.com/) (they even have automatic Jekyll support). There are some things that this prevents, though, such as plugins and .htaccess. I use my own server so so that authors have their files kept private and I can maintain embargoes for proofing during the production process.

If you're publishing somewhere else, you can simply use SFTP and upload the contents of the _site folder to the root of your domain. But if you want to keep the Jekyll files all tracked offsite, you should set up a git repo in the root of your user folder. It's tricky to set up (or at least it was for me), but could save you from disaster if your laptop dies and you don't have your Jekyll install backed up elsewhere. I used [these instructions for Dreamhost.](http://www.geekymartian.com/articles/pushing-jekyll-blog-content-to-dreamhost-using-git/)

## Credits

- thanks to [Jekyll](https://github.com/jekyll/jekyll) for creating such a fun base system.
- thanks to [Jacob Heftmann](https://github.com/jheftmann/footnoted) for footnoted.js.
- thanks to [Tim Holman](https://github.com/tholman/github-corners) for github-corners.
- thanks to [@ncstate_english](https://twitter.com/ncstate_english?lang=en) for summer funding for this project in 2015.

## To do

- more citation formats
- assign roles for editors etc without getting messed up with multiple entries in the same issue
- autogenerate Crossref and DOAJ deposit files
- separate bios page for those journals that might want all that info in one place instead of in the sidebar
- should each issue have its own bio data file so that bios remain historical?