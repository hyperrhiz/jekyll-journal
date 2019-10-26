# Journals for everyone

Jekyll-journal is a set of handrolled extensions to Jekyll, for use as an academic journal templating system. I developed it to template Hyperrhiz and Rhizomes. It's built to include some of the things necessary for responsible journal display and admin:

- auto generated table of contents for each issue
- auto citation (in MLA format rn; will extend to others later)
- auto metadata for Highwire Press, Twitter and Facebook
- quick centralized bio updating file
- DOI inclusion

- separate templating for sub-sections, e.g. when you have a multi-part or multi-author project

Jekyll-journal is *not* a journal management system for editorial processes. We got that handled already, kthxbye.

# Dependencies

- J-j uses Bootstrap and JQuery via CDN. Keep an eye out for updates!
- You can use J-j for whatever, but I am unfortunately not available for tech support.
- uses the Jekyll-sitemap Gem for good Googling
- auto footnotes using included footnoted.js

# Idiosyncracies

- J-j assumes you have media files you want to serve that are not best stored in git repositories. It includes a link to a "media server" that you can specify in order to include files directly. You could use storage on your own server; Amazon s3 is a good alternative.

# Installing

You'll need

- Ruby
- Bundler
- Jekyll
- server space to store media separately from your Jekyll-journal install, unless you have no plans to use more than a few images or other media objects.

# Before you deploy

- remove the file "corner.html" from the "includes" folder and remove the line "{% include corner.html %}" from "page.html" in the "layouts" folder. Otherwise you'll be stuck with that github logo.
- if you're serving from the root of your directory, comment out the line "baseurl: /jekyll-journal" (line 37) from "config.yml". This is just in there so that github pages can figure out pathnames.


