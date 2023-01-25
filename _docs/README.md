# Website documentation

This document should contain everything you need to know to make simple updates to the [JSys website](https://www.jsys.org/).

<!-- TOC -->

- [Overview](#overview)
- [Where to find stuff?](#where-to-find-stuff)
    - [Pages](#pages)
    - [Data](#data)
    - [Papers](#papers)
- [How-Tos](#how-tos)
    - [How to update area board members or CFP data?](#how-to-update-area-board-members-or-cfp-data)
    - [How to test updates locally?](#how-to-test-updates-locally)
    - [How to push updates?](#how-to-push-updates)
    - [How to add newly publish papers?](#how-to-add-newly-publish-papers)
    - [How to add a page to the navigation menu?](#how-to-add-a-page-to-the-navigation-menu)

<!-- /TOC -->

## Overview

The website is generated using Jekyll, a system that builds static html pages from source files, using the powerful Liquid templates.

One important thing to know is that the layout of the pages is decoupled from their content. For example, the data from the journal editorial board is not typed directly into a html or markdown file, but stored into YAML format then formatted and rendered on the website pages. This has two main benefits.

- The YAML format is much simpler to read and edit than e.g. HTML;
- Having the raw data in one central location avoid consistency problems (e.g. the name or affiliation of an area chair being changed on one page, but not another).

## Where to find stuff?

### Pages

> Under `/pages` and `index.md` for the home page

It is unlikely that you will want to make frequent updates to the pages directly: Most pages contain little text and mainly fetch and display paper lists or editorial board members (see [Data](#data)).

### Data

The data files are organized as follows.

```bash
_data/
├── areas
│   ├── <area_name>
│   │   ├── board.yml   # Area board data
│   │   └── cfp.yml     # Call for papers data
│   ├── ...
│   |
│   ├── artifacts
│   │   ├── board.yml   # AEB data
│   │   └── cfp.yml     # Call for participation/self-nomination
│   ├── students
│   │   ├── board.yml   # Student board data
│   │   └── cfp.yml     # Call for participation/self-nomination
│   │
│   └── meta.yml        # Area metadata (name, ID, open for sub)
│
├── co-founders.yml     # Co-funders data 
├── eic.yml             # Editors-in-Chiefs data
├── openReview.yml      # OpenReview forums (links and status)
└── papers.yml          # JSys paper types 
```

The content of the data files (structure and field names) should be fairly self-explanatory. As long as you are not looking to add new fields, updates should be straightforward.

### Papers

JSys papers are not (and should not be) stored on the website. The `/read` page of the website only shows metadata fetched from a single `.bib` file stored in `/_bibliography/jsys.bib`.

> **Do not change the name or location of this file.**

## How-Tos

### How to update area board members or CFP data?

Navigate to `/_data/areas/<area>` and edit the corresponding `board.yml` or `cfp.yml` file. 

- When you add a new board member, make sure to put 
    - the current year in the`from` property,
    - `0` in the `until` property. 
- To remove a board member, **only** replace the `until` property with the current year (do not actually remove anything).  
This way, the person will be listed as a "former member."

Then [push your updates](#how-to-push-updates). 

### How to test updates locally?

To verify your updates, run `jekyll build .` followed by `jekyll serve .`.
You should find the jsys.org webiste served on `localhost:4000`. If certain gems are missing, run `bundle install` first.

> Find download instructions for jekyll [here](https://jekyllrb.com/docs/installation/).

### How to push updates?

If you don't have edit access to this repository, fork it, push your updates to your fork, and submit a pull request.

> If you are not familiar with the process, don't worry, it's fairly easy.  
There are tons of tutorials online to walk you through the process; [here is one.](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)

If you have edit access to this repository, you can push directly. Please do make sure that you [tested your updates locally](#how-to-test-updates-locally) first.

### How to add newly publish papers?

- Add the new papers' metadata in `/_bibliography/jsys.bib`
- (Optionally) Edit `/pages/01-read.md` if a new volume or issue has been created

### How to add a page to the navigation menu?

Just add `menutitle: <page-name-in-menu>` in the page front matter.  
The page can be either HTML or MD, and located anywhere in `\pages`.
