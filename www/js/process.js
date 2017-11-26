import 'framework7/dist/css/framework7.material.min.css'
import 'framework7/dist/css/framework7.material.colors.min.css'

import './css/my-app.css';

import React from 'react.min';
import ReactDOM from 'react-dom.min';
import {App} from './components/App';

ReactDOM.render(<App />,document.getElementById('root1'));

let btn = <div>
			<div id="zic">
			// Views
				<div class="views">
				// Your main view, should have "view-main" class
        			<div class="view view-main">
        			// Pages container, because we use fixed navbar and toolbar, it has additional appropriate classes
          				<div class="pages navbar-fixed toolbar-fixed">
          				// Page, "data-page" contains page name
            				<div data-page="index" class="page">
            				// Top Navbar. In Material theme it should be inside of the page
              					<div class="navbar">
                					<div class="navbar-inner">
                  						<div class="right"><a href="#" class="link icon-only refresh-link refresh-home"><i class="icon icon-refresh"></i></a>
                  						</div>
                  						<div class="left">Songs</div>
                  						<div id="slideout">
                    						<form>
                    							<button type="button" class="btn btn-default">Toggle</button>
                    							<textarea class="form-control"></textarea>
                    							<input class="btn btn-primary" type="submit" value="Post feedback"></input>
                  							</form>
                  						</div>
                					</div>
              					</div>
              					// Scrollable page content
              					<div class="page-content">
                					<p>Page content goes here</p>
              					</div>
            				</div>
          				</div>
        			</div>
      			</div>
      		</div>
      		</div>
ReactDOM.render(btn,document.getElementById('meow'));