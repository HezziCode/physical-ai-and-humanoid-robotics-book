---
id: 004
title: Analysis of Deployment Error
stage: general
date: 2025-12-03
surface: agent
model: claude-sonnet-4-5-20250929
feature: none
branch: main
user: generic-user
command: /sp.analyze D:\Side Projects\hackathon-book\frontend>set GIT_USER="HezziCode <huzaifasys@gmail.com"

D:\Side Projects\hackathon-book\frontend>npm run deploy

> frontend@0.0.0 deploy
> docusaurus deploy

[INFO] Deploy command invoked...
[INFO] `git --version` code: 0
[INFO] organizationName: HezziCode
[INFO] projectName: physical-ai-and-humanoid-robotics-book
[INFO] deploymentBranch: gh-pages
[INFO] Remote repo URL: https://"HezziCode <huzaifasys@gmail.com"@github.com/HezziCode/physical-ai-and-humanoid-robotics-book.git
[INFO] `git rev-parse HEAD` code: 0
[INFO] Website will be built for all these locales:
- en
- ur
[INFO] [en] Creating an optimized production build...

√ Client
  Compiled successfully in 6.48m

√ Server



√ Client


√ Server


[ERROR] Deployment of the build output failed.

[ERROR] Error: Unable to build website for locale en.
    at tryToBuildLocale (D:\Side Projects\hackathon-book\frontend\node_modules\@docusaurus\core\lib\commands\build\build.js:83:15)
    at async D:\Side Projects\hackathon-book\frontend\node_modules\@docusaurus\core\lib\commands\build\build.js:35:9
    ... 5 lines matching cause stack trace ...
    at async file:///D:/Side%20Projects/hackathon-book/frontend/node_modules/@docusaurus/core/bin/docusaurus.mjs:44:3 {
  [cause]: Error: Docusaurus found broken links!

  Please check the pages of your site in the list below, and make sure you don't reference any path that does not exist.
  Note: it's possible to ignore broken links with the 'onBrokenLinks' Docusaurus configuration, and let the build pass.

  It looks like some of the broken links we found appear in many pages of your site.
  Maybe those broken links appear on all pages through your site layout?
  We recommend that you check your theme configuration for such links (particularly, theme navbar and footer).
  Frequent broken links are linking to:
  - /physical-ai-and-humanoid-robotics-book/docs/intro

  Exhaustive list of all broken links found:
  - Broken link on source page path = /physical-ai-and-humanoid-robotics-book/404.html:
     -> linking to /physical-ai-and-humanoid-robotics-book/docs/intro
  - Broken link on source page path = /physical-ai-and-humanoid-robotics-book/blog:
     -> linking to /physical-ai-and-humanoid-robotics-book/docs/intro
  - Broken link on source page path = /physical-ai-and-humanoid-robotics-book/blog/archive:
     -> linking to /physical-ai-and-humanoid-robotics-book/docs/intro
  - Broken link on source page path = /physical-ai-and-humanoid-robotics-book/blog/authors:
     -> linking to /physical-ai-and-humanoid-robotics-book/docs/intro
  - Broken link on source page path = /physical-ai-and-humanoid-robotics-book/blog/authors/all-sebastien-lorber-articles:
     -> linking to /physical-ai-and-humanoid-robotics-book/docs/intro
  - Broken link on source page path = /physical-ai-and-humanoid-robotics-book/blog/authors/yangshun:
     -> linking to /physical-ai-and-humanoid-robotics-book/docs/intro
  - Broken link on source page path = /physical-ai-and-humanoid-robotics-book/blog/first-blog-post:
     -> linking to /physical-ai-and-humanoid-robotics-book/docs/intro
  - Broken link on source page path = /physical-ai-and-humanoid-robotics-book/blog/long-blog-post:
     -> linking to /physical-ai-and-humanoid-robotics-book/docs/intro
  - Broken link on source page path = /physical-ai-and-humanoid-robotics-book/blog/mdx-blog-post:
     -> linking to /physical-ai-and-humanoid-robotics-book/docs/intro
  - Broken link on source page path = /physical-ai-and-humanoid-robotics-book/blog/tags:
     -> linking to /physical-ai-and-humanoid-robotics-book/docs/intro
  - Broken link on source page path = /physical-ai-and-humanoid-robotics-book/blog/tags/docusaurus:
     -> linking to /physical-ai-and-humanoid-robotics-book/docs/intro
  - Broken link on source page path = /physical-ai-and-humanoid-robotics-book/blog/tags/facebook:
     -> linking to /physical-ai-and-humanoid-robotics-book/docs/intro
  - Broken link on source page path = /physical-ai-and-humanoid-robotics-book/blog/tags/hello:
     -> linking to /physical-ai-and-humanoid-robotics-book/docs/intro
  - Broken link on source page path = /physical-ai-and-humanoid-robotics-book/blog/tags/hola:
     -> linking to /physical-ai-and-humanoid-robotics-book/docs/intro
  - Broken link on source page path = /physical-ai-and-humanoid-robotics-book/blog/welcome:
     -> linking to /physical-ai-and-humanoid-robotics-book/docs/intro
  - Broken link on source page path = /physical-ai-and-humanoid-robotics-book/markdown-page:
     -> linking to /physical-ai-and-humanoid-robotics-book/docs/intro
  - Broken link on source page path = /physical-ai-and-humanoid-robotics-book/chapters/chapter-1:
     -> linking to /physical-ai-and-humanoid-robotics-book/docs/chapters/chapter-2
     -> linking to /physical-ai-and-humanoid-robotics-book/docs/intro
  - Broken link on source page path = /physical-ai-and-humanoid-robotics-book/chapters/chapter-10:
     -> linking to /physical-ai-and-humanoid-robotics-book/docs/intro
  - Broken link on source page path = /physical-ai-and-humanoid-robotics-book/chapters/chapter-2:
     -> linking to /physical-ai-and-humanoid-robotics-book/docs/chapters/chapter-3
     -> linking to /physical-ai-and-humanoid-robotics-book/docs/intro
  - Broken link on source page path = /physical-ai-and-humanoid-robotics-book/chapters/chapter-3:
     -> linking to /physical-ai-and-humanoid-robotics-book/docs/chapters/chapter-4
     -> linking to /physical-ai-and-humanoid-robotics-book/docs/intro
  - Broken link on source page path = /physical-ai-and-humanoid-robotics-book/chapters/chapter-4:
     -> linking to /physical-ai-and-humanoid-robotics-book/docs/chapters/chapter-5
     -> linking to /physical-ai-and-humanoid-robotics-book/docs/intro
  - Broken link on source page path = /physical-ai-and-humanoid-robotics-book/chapters/chapter-5:
     -> linking to /physical-ai-and-humanoid-robotics-book/docs/chapters/chapter-6
     -> linking to /physical-ai-and-humanoid-robotics-book/docs/intro
  - Broken link on source page path = /physical-ai-and-humanoid-robotics-book/chapters/chapter-6:
     -> linking to /physical-ai-and-humanoid-robotics-book/docs/intro
  - Broken link on source page path = /physical-ai-and-humanoid-robotics-book/chapters/chapter-7:
     -> linking to /physical-ai-and-humanoid-robotics-book/docs/chapters/chapter-8
     -> linking to /physical-ai-and-humanoid-robotics-book/docs/intro
  - Broken link on source page path = /physical-ai-and-humanoid-robotics-book/chapters/chapter-8:
     -> linking to /physical-ai-and-humanoid-robotics-book/docs/chapters/chapter-9
     -> linking to /physical-ai-and-humanoid-robotics-book/docs/intro
  - Broken link on source page path = /physical-ai-and-humanoid-robotics-book/chapters/chapter-9:
     -> linking to /physical-ai-and-humanoid-robotics-book/docs/chapters/chapter-10
     -> linking to /physical-ai-and-humanoid-robotics-book/docs/intro
  - Broken link on source page path = /physical-ai-and-humanoid-robotics-book/:
     -> linking to /physical-ai-and-humanoid-robotics-book/docs/intro

      at throwError (D:\Side Projects\hackathon-book\frontend\node_modules\@docusaurus\logger\lib\logger.js:80:11)
      at reportBrokenLinks (D:\Side Projects\hackathon-book\frontend\node_modules\@docusaurus\core\lib\server\brokenLinks.js:250:47)
      at handleBrokenLinks (D:\Side Projects\hackathon-book\frontend\node_modules\@docusaurus\core\lib\server\brokenLinks.js:282:5)
      at executeBrokenLinksCheck (D:\Side Projects\hackathon-book\frontend\node_modules\@docusaurus\core\lib\commands\build\buildLocale.js:119:47)
      at D:\Side Projects\hackathon-book\frontend\node_modules\@docusaurus\core\lib\commands\build\buildLocale.js:94:67
      at Object.async (D:\Side Projects\hackathon-book\frontend\node_modules\@docusaurus\logger\lib\perfLogger.js:42:47)
      at buildLocale (D:\Side Projects\hackathon-book\frontend\node_modules\@docusaurus\core\lib\commands\build\buildLocale.js:94:31)
      at async runBuildLocaleTask (D:\Side Projects\hackathon-book\frontend\node_modules\@docusaurus\core\lib\commands\build\build.js:98:5)
      at async D:\Side Projects\hackathon-book\frontend\node_modules\@docusaurus\core\lib\commands\build\build.js:79:13
      at async tryToBuildLocale (D:\Side Projects\hackathon-book\frontend\node_modules\@docusaurus\core\lib\commands\build\build.js:75:9)
      at async D:\Side Projects\hackathon-book\frontend\node_modules\@docusaurus\core\lib\commands\build\build.js:35:9
      at async mapAsyncSequential (D:\Side Projects\hackathon-book\frontend\node_modules\@docusaurus\utils\lib\jsUtils.js:21:24)
      at async build (D:\Side Projects\hackathon-book\frontend\node_modules\@docusaurus\core\lib\commands\build\build.js:34:5)
      at async Command.deploy (D:\Side Projects\hackathon-book\frontend\node_modules\@docusaurus\core\lib\commands\deploy.js:228:13)
      at async Promise.all (index 0)
      at async runCLI (D:\Side Projects\hackathon-book\frontend\node_modules\@docusaurus\core\lib\commands\cli.js:56:5)
      at async file:///D:/Side%20Projects/hackathon-book/frontend/node_modules/@docusaurus/core/bin/docusaurus.mjs:44:3
}wth the err is