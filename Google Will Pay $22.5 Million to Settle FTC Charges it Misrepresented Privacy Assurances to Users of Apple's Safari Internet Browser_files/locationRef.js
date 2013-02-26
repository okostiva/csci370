// Javascript
// Reference for current URL reference location.
// Authored by K. Brandriff 6/15/2006


// refFile() identifies current file for reference
function refFile(){
	document.write ("(")
	document.write (location.href)
	document.write (")")
}

//emailRef() takes the current file location to update the email this page link

function emailRef(){
	document.write ("<a href='mailto:?Subject=Thought%20this%20FTC%20News%20Release%20would%20interest%20you&Body=The%20News%20Release%20can%20be%20found%20at%20%3C"+location.href+"%3E!%0A%0AThis%20message%20is%20from%20the%20Federal%20Trade%20Commission.%20The%20above%20link%20will%20take%20you%20to%20a%20page%20within%20the%20FTC%27s%20site%20(note%20the%20%22.gov%22%20Web%20address),%20or%20you%20may%20type%20"
+location.href+"%20into%20your%20browser.%20The%20FTC%20will%20not%20collect%20any%20personal%20information%20from%20you%20or%20the%20person%20who%20sent%20you%20this%20message.%0A'><strong>E-mail this News Release</strong></a><br>If you send this link to someone else, the FTC will not collect any personal information about you or the recipient.")

}