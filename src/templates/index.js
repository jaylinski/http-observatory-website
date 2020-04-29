import baseLayout from './layouts/base.js';
import constants from './../js/constants.js';

const content = `
    <div class="row">
        <div class="col-12 col-md-10 offset-md-1 col-xl-8 offset-xl-2">
            <h1 id="whatami" class="h6 margin-bottom">
                The ${constants.title} has helped
                <span id="stats-numImprovedSites">over ${constants.numImprovedSites}</span>
                websites by teaching developers, system administrators, and security professionals 
                how to configure their sites safely and securely.
            </h1>
    
            <div class="card mt-3">
                <div class="card-header bg-primary text-white"><span class="h3">Scan your site</span></div>
                <div class="card-body no-popover-mobile pb-4">
                    <div class="alert alert-danger alert-hidden" id="scan-alert" role="alert">
                        <strong>Error: </strong>
                        <span id="scan-alert-text"></span>
                    </div>
                    <div class="alert alert-danger alert-hidden" id="scan-alert-ip" role="alert">
                        <strong>Error: </strong>
                        <span>It appears that <span id="scan-alert-ip-address"></span> is an IP address, which only works for SSH scans. If this is what you intended, please <a id="scan-alert-ip-link">click here</a> to continue.</span>
                    </div>
                    <form id="scantron-form">
                        <div class="input-group mt-2 mb-3">
                          <input type="text" class="form-control" id="scan-input-hostname" placeholder="enter domain name here" aria-label="domain name" autocorrect="off" autocapitalize="off" spellcheck="false" autofocus>
                          <div class="input-group-append">
                            <button class="btn btn-primary" type="submit">Scan Me</button>
                          </div>
                        </div>
    
                        <fieldset class="form-group mb-0 ml-0 ml-md-3">
                            <div class="form-check" title="Stealth scans" data-toggle="popover" data-content="Don't want your site to appear in the lists below? Not a problem!">
                                <input class="form-check-input" type="checkbox" id="scan-btn-hidden">
                                <label class="form-check-label" for="scan-btn-hidden">
                                    Don't include my site in the public results
                                </label>
                            </div>
                            <div class="form-check" title="Made some improvements?" data-toggle="popover" data-content="By default, any scan results from within the last 24 hours will be returned.<br><br>If you've made some changes, the Mozilla Observatory allows you to rescan your site up to every five minutes.">
                                <input class="form-check-input" type="checkbox" id="scan-btn-rescan">
                                <label class="form-check-label" for="scan-btn-rescan">
                                    Force a rescan instead of returning cached results
                                </label>
                            </div>
                            <div class="form-check" title="Third-party scanners" data-toggle="popover" data-content="The Mozilla Observatory integrates with a variety of third-party scanners to provide you additional security insights.<br><br>Information about these scanners can be found in our FAQ.">
                                <input class="form-check-input" type="checkbox" id="scan-btn-third-party">
                                <label class="form-check-label" for="scan-btn-third-party">
                                    Don't scan with third-party scanners
                                </label>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    </div>`;

export default `${baseLayout(constants.title, content)}`;
