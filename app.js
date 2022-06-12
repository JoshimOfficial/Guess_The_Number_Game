let first_sec_display = document.querySelector(".first_sec");
let secound_sec_display = document.querySelector(".secound_sec");
let start_game_sec = document.querySelector(".start_game")



function startTheGame() {

    first_sec_display.style.opacity = "0";
    secound_sec_display.style.display = "block";

    setTimeout(()=>{
        first_sec_display.style.display ="none";
        secound_sec_display.style.opacity = "1";
    },500)
}


//creating 0-11 numbers spelling
let spelling_the_numbers =[
    "Zero",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven"
    
]

let random_number = [];
let display_random_numbers =[];
let find_all_fields = document.querySelectorAll(".guess_number_class");
let hint_sec = document.querySelector(".header_name");
let hints_class = document.querySelector(".get_hints");

start_game_sec.addEventListener("click", ()=>{
    let create_random_numbers = Math.floor(Math.random()*12);
    random_number.push(create_random_numbers)

    //this loop for create 1-12 digits numbers to place secound display
    for(i = 0; i < 12; i++) {
        let twelve_digit_random_numbers = Math.floor(Math.random()*12);
    display_random_numbers.push(twelve_digit_random_numbers)
    
    }

    //this lopp for placing those 1-12 digits number to secound display.
    for(i = 0; i < find_all_fields.length; i++) {
        find_all_fields[i].innerHTML = display_random_numbers[i];
    }

    //placing the random number as it's index
    find_all_fields[random_number[0]].innerHTML = random_number[0];


    //working with hints
    setTimeout(()=>{
        
        hint_sec.style.opacity = "0";
        hints_class.style.display = "block"

    },2000)

       setTimeout(()=>{
        hint_sec.style.display = "none"
        hints_class.style.opacity = "1";
    },2300)

    
})


//click verify that is it correct random numbers or not
function guess_number(value) {
    let parse_number = parseInt(value.innerHTML);

    if(random_number[0] === parse_number) {
        hints_class.innerHTML = "You won the game. You made it bro🔥🔥🔥";
        hints_class.style.color = "#69ff78";
    }
    
    else {
        hints_class.innerHTML = "Your guess number is not correct. Try again ";
        hints_class.style.color = "red";
        
    setTimeout(()=>{
        hints_class.innerHTML = "Get hints!";
        hints_class.style.color = "#73cbb0";
    },3000)
    }


}



let hints_click = 0;
let hints_click_arr = [];
let spelling_arr =[];
let spelling_single_text = "";
//when user click on hints then show the hints
function hints() {

    hints_click_arr.push(hints_click++);

    if(hints_click_arr.length > 1) {

    }
    else {
    //Creating the first and last letter of splleing array
    let get_spelling = spelling_the_numbers[random_number[0]];
    spelling_arr.push(get_spelling);
    spelling_single_text = spelling_arr[0];
    
    let get_lname_of_spelling_arr  = spelling_single_text.substr(spelling_single_text.length - 1); 
    let random_number_last_spelling = get_lname_of_spelling_arr.toUpperCase();

    let text_number =  "ends with " + '"' + random_number_last_spelling + '"';


hints_class.innerHTML = `The number you are looking for starts with the letter ${text_number}`;
    }


}

