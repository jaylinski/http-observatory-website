export default (id) => `
    <div id="${id}-progress">
        <div class="card card-primary">
            <div class="card-header bg-primary text-white">
                <span class="h3">Scan Summary</span>
            </div>
    
            <div class="row">
                <div class="col-xs-12 col-md-8 offset-md-2">
                    <div id="${id}-progress-bar" class="progress progress-lg mx-xs-3 mx-sm-3 mx-md-0">
                        <div id="${id}-progress-bar-text" class="progress-bar progress-bar-lg progress-bar-striped progress-bar-animated w-100" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                            Loading Results
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;