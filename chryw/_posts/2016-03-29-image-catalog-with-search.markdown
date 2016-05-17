---
layout: post
title:  "Image Catalog with Search"
date:   2016-03-29 14:48:27 -0700
categories: work
thumbnailurl: "/images/works-image-catalog.gif"
excerpt_separator: <!--more-->
---
An searchable web catalog for UX image assets like icons, font and illustrations.

<!--more-->
The designers, PMs and devs at Visual Studio Developer Division often need to find UX image assets for creating mockups, using in the product, or making marketing materials like presentation, prints, etc. The assets used to be stored on network drives, some SharePoint folders, or only on the artists computer. It was inconvenient for the team to share and reuse UX assets. It also started to cause style inconsistency and file redundancy as the asset grows.

Now the assets are well indexed and version controlled. I built a web catalog for the team to look up existing assets, and learn about the established visual language. The team is now able to learn, search and download assets from a centralized and up-to-date repository without having to ask around or browse through several places just to find one icon. The designers can find and share reusable design elements like shapes, background patterns. For devs and designers who use [icon font]({% post_url 2016-03-15-icon-font %}) on web UI, they can also look up the character unicode mapping, or copy code snippet for a font icon.

I designed the metadata schema for cataloging the assets. Wrote scripts to batch assign semantic tags for each asset. Then stored the descriptive information in a JSON file. I use AngularJS for frontend to dynamically display catalog entries without needing a backend or live database. Updating the asset repository and the metadata is also streamlined by simple scripts, build automation, etc. The web app is deployed on Azure.

I also make sure the existing assets are correct, up-to-date, organized and findable. I lead the production/update of many new assets that are being added to the repository.

The catalog is for internal use. Below is a screen record demo.

<a href="https://github.com/chryw/vsfi" target="_blank"><img class="img-responsive" src="/images/works-image-catalog.gif" alt="Image Catalog with Search" /></a>
