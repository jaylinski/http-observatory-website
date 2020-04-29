import baseLayout from './layouts/base.js';
import constants from './../js/constants.js';

const title = `${constants.title} – Legal & Privacy Terms`;
const content = `
    <div id="terms">
        <h1 class="border-bottom border-light mb-4 pb-2">Legal &amp; Privacy Terms</h1>

        <p><a href="/">${constants.title}</a> is an open-source developer tool.  Before using this tool, there are a few important things you should know:</p>

        <ol>
            <li>You should only use the Observatory API to inspect websites whose owners have given you permission to do so.  Test scores and scan results are posted publicly unless you choose in advance to hide them from public view.  Your use of this tool is subject to our <a href="https://www.mozilla.org/en-US/about/legal/terms/mozilla/">Websites &amp; Communications Terms of Use</a>, including the <a href="https://www.mozilla.org/en-US/about/legal/acceptable-use/">Conditions of Use</a> and <a href="https://www.mozilla.org/en-US/privacy/websites">Privacy Notice</a> referenced therein.</li>

            <li>The Observatory API is made available under the <a href="https://www.mozilla.org/en-US/MPL/2.0/">Mozilla Public License 2.0</a>.  Unless otherwise specified, other content on the Observatory web page that is authored by Mozilla is available under the terms of the <a href="https://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution Share-Alike 3.0 Unported license (CC-BY-SA 3.0)</a>, or any later version.</li>

            <li>Third party scanners are included on the Observatory web page for your convenience, and this does not imply an endorsement by Mozilla.  They are subject to different legal and privacy terms than ours and may be licensed under different terms.</li>

            <li>This tool is available &ldquo;as is&rdquo; and Mozilla does not guarantee the accuracy of scan results.</li>
        </ol>

    </div>`;

export default `${baseLayout(title, content)}`;
