export default (title) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="author" content="{{ AUTHOR }}">
    <meta name="description" content="The Mozilla Observatory is a project designed to help developers, system administrators, and security professionals configure their sites safely and securely.">
    <meta property="og:title" content="Mozilla Observatory">

    <!-- favicon stuff -->
    <link rel="apple-touch-icon" type="image/png" sizes="180x180" href="/images/favicons/apple-touch-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="196x196" href="/images/favicons/favicon-196x196.png">
    <link rel="shortcut icon" href="/images/favicons/favicon.ico">

    <title>${title}</title>
</head>
<body>
    <header class="mb-0 mb-md-3">
        <!-- ex-survey, saved for future uses
        <div class="d-none alert alert-success alert-dismissable text-center" id="survey-banner">
            <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
            Thank you for using the Mozilla Observatory! Would be interested in taking a <a id="survey-banner-url" href="#">short survey</a> to help us improve?
        </div>
        -->
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-primary bg-white">
              <a class="navbar-brand" href="/"><img id="observatory-wordmark" src="/images/observatory-wordmark.svg" alt="Observatory by Mozilla"></a>
              <button class="navbar-toggler" type="button" data-octicon="grabber" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item text-right">
                    <a class="nav-link" href="/">Home</a>
                  </li>
                  <li class="nav-item text-right">
                    <a class="nav-link" href="/faq/">FAQ</a>
                  </li>
                  <li class="nav-item text-right">
                    <a class="nav-link" href="/statistics/">Statistics</a>
                  </li>
                  <li class="nav-item text-right dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      About
                    </a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                      <a class="dropdown-item" href="https://github.com/mozilla/http-observatory/blob/master/httpobs/docs/api.md">API Documentation</a>
                      <a class="dropdown-item" href="https://github.com/mozilla/http-observatory-website/">Contribute at GitHub</a>
                      <a class="dropdown-item" href="/faq/">Frequently Asked Questions</a>
                      <a class="dropdown-item" href="/terms/">Legal &amp; Privacy</a>
                      <a class="dropdown-item" href="https://github.com/mozilla/http-observatory/blob/master/httpobs/docs/scoring.md">Scoring Methodology</a>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
        </div>
    </header>

    <!-- main content -->
    <div class="container mb-3">`;