// ==UserScript==
// @name  Spiral knights forums responsive styles
// @author  Zeddy
// @description Make SK forums less horrible on phones
// @include http://forums.spiralknights.com/*
// @version 1.1.0
// @require jquery
// ==/UserScript==

$('head').append('<meta name="viewport" content="width=device-width, initial-scale=1">');
$('head').append(`
<style>
@media (max-width: 960px) {
  /* PAGE */
  /* 
   * Drupal bakes in its width of 960px everywhere.
   * This is not how to websites.
   */

  html[lang] {
    min-width: initial;
  }
  
  div#wrapper {
    width: initial;
  }

  div#page {
    min-width: initial;
    padding: 0;
  }

  div#drupalcontent-inner {
    padding: 0;
  }

  /* END PAGE */

  /* HEADER */

  div#header {
    padding-top: 0;
    position: fixed;
    right: 0;
    bottom: 0;
    transform: translateX(100%);
    z-index: 10;
    transition: transform 0.3s;
  }

  div#header:hover {
    transform: translateX(0);
  }

  #content-header:before {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    content: '☰';
    font-size: 2em;
    border-radius: 50% 0 0 50%;
    width: 2em;
    height: 2em;
    color: white;
    background-color: black;
    right: 0;
    top: 0;
    transform: translateX(-1.8em);
  }

  div#my-account, div#support-language, div#username {
    width: initial;
    margin-right: 0;
  }

  div#account-area {
    position: initial;
  }

  a#logoLink {
    display: none;
  }

  div.logos {
    display: none;
  }

  div#username {
    padding-top: 0;
    padding: 0;
    height: 100%;
    display: flex;
    align-items: center;
  }

  ul#menu {
    display: flex;
    flex-direction: column;
    top: 0;
    left: 0;
    float: none;
    width: initial;
    height: initial;
  }

  div#account-area {
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap;
  }

  div#account-area > div {
    float: initial;
    flex: 1;
  }

  #content-header img {
    display: none;
  }

  div#drupalheader {
    width: initial;
    min-width: initial;
  }

  div#username {
    display: flex;
    flex-wrap: wrap;
  }

  #username a {
    white-space: nowrap;
  }

  /*
   * The search bar cannot hope to compete with google by a long shot.
   * Let's just hide it.
   */

  div#search-box {
    display: none;
  }

  div.breadcrumb {
    display: flex;
    flex-wrap: wrap;
  }

  /* END HEADER */

  /* FORUM POST */

  div.forum-post {
    border: 0;
  }

  div.forum-post-wrapper {
    display: flex;
    flex-direction: column;
  }

  div.forum-post-panel-sub {
    width: initial;
    height: 96px;
  }

  .forum-post-panel-sub div.author-pane {
    margin: 0;
  }

  div.author-pane div.picture img {
    padding: 0;
  }

  div.author-pane-name-status {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 0;
  }
  
  div.forum-post-panel-main {
    margin-left: 0;
    border-left: 0;
  }

  .content ul, .content ol {
    padding-left: 1em;
  }

  /* END FORUM POST */ 

  /* FOOTER */

  div#footer {
    display: flex;
    flex-wrap: wrap;
  }

  div#bottom-nav {
    height: initial;
  }

  /*
   * This is a 0px tall image that's 960px wide.
   * Its only purpose appear to be breaking mobile views.
   */
  img.bottom-cap {
    display: none;
  }

  div#small-links {
    display: flex;
    flex-wrap: wrap;
    height: initial;
  }

  #small-links a.logo {
    height: initial;
    float: none;
    max-width: 50%;
  }

  #small-links a.logo img {
    width: 100%;
  }

  div#small-links .col-1 {
    padding-left: 0;
    width: initial;
  }

  /* END FOOTER */

  /* FORUM INDEX */

  /*
   * I chose to hide forum icons because they don't work correctly anyway
   * Frequently a folder will say there's no new posts when there is.
   */
  .forum-icon {
    display: none;
  }

  div.forum-folder-legend {
    display: none;
  }

  /*
   * Number of posts and topics in forums are just not interesting
   * enough to warrant the amount of space they occupy.
   */
  th.forum-num-topics, td.topics {
    display: none;
  }

  th.forum-posts, td.num.posts {
    display: none;
  }

  .forum-table thead {
    display: none;
  }

  /*
   * In mobile views, indents are the devil.
   */
  #forum td div.indent {
    margin-left: 0;
  }

  /* END FORUM INDEX */

  /* FORUM TOPICS */

  .forum-description {
    padding: 0 1em;
  }

  .forum-topics th.topic-created, .forum-topics td.created {
    display: none;
  }

  .forum-topics th.topic-icon, .forum-topics td.icon {
    display: none;
  }

  /*
   * Admin posts looked a bit mangled in mobile when the title wraps.
   */

  #forum td.adminpost a {
    line-height: 1em;
  }
  
  /* END FORUM TOPICS */

  /* USER POST */

  #edit-subject-wrapper {
    position: relative;
    height: 2.5em;
  }

  input#edit-subject {
    position: absolute;
    max-width: 100%;
    border: 0;
  }

  div.resizable-textarea {
    width: 100%;
  }

  textarea#edit-comment, textarea#edit-body {
    border: 0;
    padding: 0;
  }

  div.node-form .form-text {
    width: initial;
  }

  /* END USER POST */
}

</style>
`);
