# JSys Website

Code behind the <https://jsys.org> website.

## Run locally

First clone the repository:

```bash
git clone git@github.com:jsysresearch/website.git
```

Now run it:

```bash
cd website/

docker run -p 4000:4000 --rm -ti -v "$PWD:/srv/jekyll" jekyll/builder:3.8.5 jekyll serve --watch
```

Go to <https://localhost:4000> and you should be able to see the website being served from your machine. 
The `--watch` flag serves the website in "hot-reload" mode, meaning that any change done to a file will be processed and published immediately.

## Customizing setup

- Edit the `_config.yml` file to suit your own environment. It should all be self evident in the file.
- if you're planning on serving your journal from the root of your site, comment out the line `baseurl: /jekyll-journal` (line 37) from `_config.yml`. This is just in there so that Github Pages can figure out pathnames in the demo site. Once you do this, you'll be previewable directly at http://localhost:4000/.
- ditto if you're serving from a sub-folder with a different name, make sure that the baseurl is renamed appropriately.
- remove the file "corner.html" from the `_includes/` folder and remove the line `{% include corner.html %}` from "page.html" in the `_layouts/`folder. Otherwise you'll be stuck with that Github logo.
- I recommend using the [jekyll-sitemap gem](https://github.com/jekyll/jekyll-sitemap) for good Googling. Here's how:
  * `gem install jekyll-sitemap`
  * edit the Gemfile and add the line `gem "jekyll-sitemap"`
  * `bundle`
  * list as a plugin in `_config.yml`. You'll see I've already added it in at line 45.
  * when you regenerate the site it will create a file "sitemap.xml" and place it into your `_site/` folder.

## How Jekyll works

Jekyll builds sites from templates, so you can use it to layout visual elements. But it's also a way of organizing (and reorganizing) information: regeneration means you can do important things like make sitewide content or settings changes and only have to do it in one place.

- On the macro level, Jekyll takes content that you write and wraps it in templates that live in the "layouts" folder. You can use it to put layouts inside of layouts, so it's turtles all the way down. At the head of each file you create, you place a bunch of declarations in YML format, which give information about the file and determine what template is used.
- On the micro level, you can build templated snippets of HTML and put them inside the "includes" folder, and then call them in your content wherever you want as shortcuts. You do this using the "liquid" language.

## Top level pages

All the sidebar/topbar pages are in the folder named "meta". You can rename or remove them as you see fit and they will update automatically. You'll want to keep the "archive" page, though, so you can see previous issues.

## Previewing as you go

As you save your files, they'll automatically regenerate; so you can preview the entire site using your browser. You might want to keep your terminal window open too, since this will tell you when the site has completed. Sometimes it can take a few seconds.

Individual articles in each issue will only generate if the issue folder is listed as `output:true` in `_config.yml`. I've put in a commented out "issue02" so you can see how it will work after the first one.

!important! `_config.yml` does not update while your local server is running. So, if you make changes to that file, you'll need to interrupt the web server (ctrl-c) in Terminal and restart it again using bundle exec jekyll serve.

## Workflow

My workflow looks something like this:

- Create a new collections folder at the root, with an underscore (eg `_issue01/`).
- Inside the folder, create an index.html file that uses the yml listed below.
- create individual issue entries. For neatness I create folders for each section. See below for the yml.
- put all the media files on the media server so they can be linked to using snippets from the includes folder
- once everything looks good, edit `_config.yml` to designate the current issue and ensure the new issue files are published.
- git push everything for galley checks and corrections.
- check everything is scraping correctly on Facebook using the [Debugger](https://developers.facebook.com/tools/debug/sharing/)
- file DOI assignments with Crossref, notify other indexing services.

## Sample issue

Each issue is based on the Jekyll "collections" system. The index file in the root of each collection specifies basic info and the "category_menu" layout generates a table of contents.

In the `_issue01/` folder is a sample issue. Files include a working example of the footnoting system, multiauthor citation, and a sample "special feature" subsection. 

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

The "current issue" link is designated in `_config.yml` on line 51 - so every time you publish a new issue, you'll need to make sure the folder name is correct on line 51.

Once you're ready, push all the files to your server (see below on choices - either use git to keep it all together, or just upload the `_site/` file using SFTP).

## Where to publish?

If you have your own server and don't want to mess with git, you can simply use SFTP and upload the contents of the `_site/` folder to the root of your domain, remembering to back up your local files regularly.

If your site is relatively small and uncomplicated, you can keep it on Github Pages [following their instructions here](https://pages.github.com/) (they even have automatic Jekyll support). There are some things that this prevents, though, such as plugins and .htaccess. I use my own server so that authors have their files kept private and I can maintain embargoes for proofing during the production process.

If you want to keep the Jekyll files all tracked offsite, you should set up a git repo in the root of your user folder. It's tricky to set up (or at least it was for me), but could save you from disaster if your laptop dies and you don't have your Jekyll install backed up elsewhere. I used [these instructions for Dreamhost.](http://www.geekymartian.com/articles/pushing-jekyll-blog-content-to-dreamhost-using-git/)
