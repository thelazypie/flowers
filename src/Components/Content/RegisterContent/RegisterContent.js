import React,{Component} from 'react';
import Header from "../../Header/Header"
import Footer from "../../Footer/Footer"
import './view.css'

export default class RegisterContent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <Header/>
                <img id="top" src="top.png" alt=""/>
	    <div id="form_container">
	
		        <h1><a>Untitled Form</a></h1>
		<form id="form_58609" class="appnitro"  method="post" action="">
					<div class="form_description">
			<h2>Untitled Form</h2>
			<p>This is your form description. Click here to edit.</p>
		</div>						
			<ul >
			
					<li id="li_1" >
		<label class="description" for="element_1">Name </label>
		<span>
			<input id="element_1_1" name= "element_1_1" class="element text" maxlength="255" size="8" value=""/>
			<label>First</label>
		</span>
		<span>
			<input id="element_1_2" name= "element_1_2" class="element text" maxlength="255" size="14" value=""/>
			<label>Last</label>
		</span> 
		</li>		<li id="li_2" >
		<label class="description" for="element_2">Email </label>
		<div>
			<input id="element_2" name="element_2" class="element text medium" type="text" maxlength="255" value=""/> 
		</div> 
		</li>
			
					<li class="buttons">
			    <input type="hidden" name="form_id" value="58609" />
			    
				<input id="saveForm" class="button_text" type="submit" name="submit" value="Submit" />
		</li>
			</ul>
		</form>	
	</div>
	<img id="bottom" src="bottom.png" alt=""/>
    <Footer/>
            </div>
        )
    }
}