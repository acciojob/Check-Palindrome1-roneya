// complete the given function

function palindrome(str){
	str = str.toUpperCase();
	for(let i=0;i<str.length/2;i++){
		if(str.charAt(i)!=str.charAt(str.length-1-i))
			return false;
	}
	return true;

}
module.exports = palindrome
