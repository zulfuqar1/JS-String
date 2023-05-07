// (1)
//function string_to_array(stringToArray) 
//{
//    var convert  = stringToArray.split(" ");
//    return convert ;
//}
//  console.log( string_to_array("Robin Singh"));

//(2)
//function truncate_string(str, num_chars) 
//{
//    var extracted_string = str.slice(0, num_chars);
//    return extracted_string;
//}
//  console.log(truncate_string("Robin Singh",4));



//(3)
//function protect_email(email) 
//{
//    var part = email.split("@");
//    var hidden_chars = part[0].length - 3;
//    var hidden_email = part[0].substr(0, 3) + "*".repeat(hidden_chars) + "@" + part[1];
//    return hidden_email;
//}
//console.log(protect_email("zulfuqareliyev520@gmail.com"));


//(4)
//function count_occurrences(str, word)
//{
//    var count = 0;
//    var pos = str.indexOf(word);
//
//    while (pos !== -1) {
//      count++;
//      pos = str.indexOf(word, pos + 1);
//    }
//    
//    if (count === 0)
//    {
//      console.log("'" + word + "' not found.");
//    } 
//
//    else
//    {
//      console.log("'" + word + "' was found " + count + " times.");
//    }
//  }
//count_occurrences("The quick brown fox", "fox");